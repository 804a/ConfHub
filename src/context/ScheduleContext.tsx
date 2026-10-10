import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from 'react';
import type { Talk } from '../types';
import { talksOverlap } from '../utils/schedule';

type ConflictResult =
  | { ok: true }
  | { ok: false; conflictWith: Talk };

interface ScheduleContextValue {
  schedule: Talk[];
  isInSchedule: (talkId: string) => boolean;
  addTalk: (talk: Talk) => ConflictResult;
  removeTalk: (talkId: string) => void;
  clearSchedule: () => void;
}

const ScheduleContext = createContext<ScheduleContextValue | null>(null);


export function ScheduleProvider({ children }: { children: ReactNode }) {
  const [schedule, setSchedule] = useState<Talk[]>([]);

  const isInSchedule = useCallback(
    (talkId: string) => schedule.some(t => t.id === talkId),
    [schedule],
  );

  const addTalk = useCallback(
    (talk: Talk): ConflictResult => {
      // 1. Уже добавлен?
      if (schedule.some(t => t.id === talk.id)) {
        return { ok: true }; 
      }

      const conflict = schedule.find(
        t =>
          t.date === talk.date &&
          talksOverlap(t.startTime, t.endTime, talk.startTime, talk.endTime),
      );

      if (conflict) {
        return { ok: false, conflictWith: conflict };
      }

      setSchedule(prev => [...prev, talk]);
      return { ok: true };
    },
    [schedule],
  );

  const removeTalk = useCallback((talkId: string) => {
    setSchedule(prev => prev.filter(t => t.id !== talkId));
  }, []);

  const clearSchedule = useCallback(() => {
    setSchedule([]);
  }, []);

  const value = useMemo<ScheduleContextValue>(
    () => ({ schedule, isInSchedule, addTalk, removeTalk, clearSchedule }),
    [schedule, isInSchedule, addTalk, removeTalk, clearSchedule],
  );

  return (
    <ScheduleContext.Provider value={value}>
      {children}
    </ScheduleContext.Provider>
  );
}

export function useSchedule(): ScheduleContextValue {
  const ctx = useContext(ScheduleContext);
  if (!ctx) {
    throw new Error('useSchedule must be used within <ScheduleProvider>');
  }
  return ctx;
}