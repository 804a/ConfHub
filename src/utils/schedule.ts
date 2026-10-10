import type { Talk } from '../types';

// --- Внутренние хелперы ---

/**
 * Преобразует время "HH:mm" в минуты от начала суток.
 * "00:00" -> 0, "13:30" -> 810, "23:59" -> 1439
 */
const toMinutes = (time: string): number => {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
};

// --- Публичные функции ---

/**
 * Проверяет, пересекаются ли два временных интервала.
 *
 * Касание границ НЕ считается конфликтом:
 *   13:00–14:00 и 14:00–15:00 -> false
 *   13:00–14:00 и 13:30–14:30 -> true
 */
export function talksOverlap(
  aStart: string,
  aEnd: string,
  bStart: string,
  bEnd: string,
): boolean {
  const a1 = toMinutes(aStart);
  const a2 = toMinutes(aEnd);
  const b1 = toMinutes(bStart);
  const b2 = toMinutes(bEnd);

  return a1 < b2 && b1 < a2;
}

/**
 * Сортирует доклады по дате, затем по времени начала.
 * Возвращает НОВЫЙ массив — исходный не мутируется.
 */
export function sortTalksByTime(talks: Talk[]): Talk[] {
  return [...talks].sort((a, b) => {
    if (a.date !== b.date) return a.date.localeCompare(b.date);
    return a.startTime.localeCompare(b.startTime);
  });
}

/**
 * Группирует доклады по дате.
 * Возвращает объект: { "2025-06-10": [talk, talk], "2025-06-11": [...] }
 * Внутри каждой группы доклады отсортированы по времени начала.
 */
export function groupTalksByDate(talks: Talk[]): Record<string, Talk[]> {
  const groups: Record<string, Talk[]> = {};

  for (const talk of talks) {
    (groups[talk.date] ??= []).push(talk);
  }

  for (const date of Object.keys(groups)) {
    groups[date].sort((a, b) => a.startTime.localeCompare(b.startTime));
  }

  return groups;
}

/**
 * Форматирует временной интервал для отображения.
 * "13:00", "14:00" -> "13:00–14:00"
 */
export function formatTimeRange(start: string, end: string): string {
  return `${start}–${end}`;
}