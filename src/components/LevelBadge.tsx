import type { Level } from '../types';

const labels: Record<Level, string> = {
  BEGINNER: 'Начальный',
  INTERMEDIATE: 'Средний',
  ADVANCED: 'Продвинутый',
};

const colors: Record<Level, string> = {
  BEGINNER: '#40c057',
  INTERMEDIATE: '#fab005',
  ADVANCED: '#fa5252',
};

export default function LevelBadge({ level }: { level: Level }) {
  return (
    <span className="badge" style={{ backgroundColor: colors[level], color: '#fff' }}>
      {labels[level]}
    </span>
  );
}