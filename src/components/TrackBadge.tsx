import type { Track } from '../types';

const colors: Record<Track, string> = {
  Backend: '#4c6ef5',
  Frontend: '#12b886',
  Mobile: '#f59f00',
  'Data/ML': '#ae3ec9',
  DevOps: '#e8590c',
  Architecture: '#495057',
};

export default function TrackBadge({ track }: { track: Track }) {
  return (
    <span className="badge" style={{ backgroundColor: colors[track], color: '#fff' }}>
      {track}
    </span>
  );
}