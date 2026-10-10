import type { Track, Level, Speaker } from '../types';
import './FilterPanel.css';

interface Props {
  tracks: Track[];
  speakers: Speaker[];
  track: Track | 'all';
  level: Level | 'all';
  speakerId: string | 'all';
  query: string;
  onTrackChange: (v: Track | 'all') => void;
  onLevelChange: (v: Level | 'all') => void;
  onSpeakerChange: (v: string | 'all') => void;
  onQueryChange: (v: string) => void;
  onReset: () => void;
}

export default function FilterPanel(props: Props) {
  console.log('FilterPanel props:', props);
  console.log('FilterPanel props.tracks:', props.tracks);
  return (
    <div className="filter-panel">
      <input
        type="search"
        placeholder="Поиск по названию…"
        value={props.query}
        onChange={(e) => props.onQueryChange(e.target.value)}
      />
      <select value={props.track} onChange={(e) => props.onTrackChange(e.target.value as Track | 'all')}>
        <option value="all">Все треки</option>
        {props.tracks.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
      <select value={props.level} onChange={(e) => props.onLevelChange(e.target.value as Level | 'all')}>
        <option value="all">Все уровни</option>
        <option value="BEGINNER">Начальный</option>
        <option value="INTERMEDIATE">Средний</option>
        <option value="ADVANCED">Продвинутый</option>
      </select>
      <select value={props.speakerId} onChange={(e) => props.onSpeakerChange(e.target.value)}>
        <option value="all">Все спикеры</option>
        {props.speakers.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
      </select>
      <button className="btn-link" onClick={props.onReset}>Сбросить</button>
    </div>
  );
}