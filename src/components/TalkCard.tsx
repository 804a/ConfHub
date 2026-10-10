import { Link } from 'react-router-dom';
import type { Talk } from '../types';
import { getSpeakerById } from '../data/speakers';
import TrackBadge from './TrackBadge';
import LevelBadge from './LevelBadge';

interface Props {
  talk: Talk;
  showActions?: boolean;
  actionLabel?: string;
  onAction?: () => void;
}

export default function TalkCard({ talk, showActions, actionLabel, onAction }: Props) {
  const speaker = getSpeakerById(talk.speakerId);

  return (
    <article className="card talk-card">
      <div className="talk-time">
        <strong>{talk.startTime}–{talk.endTime}</strong>
        <span className="room">{talk.room}</span>
      </div>
      <div className="talk-body">
        <Link to={`/talks/${talk.id}`} className="talk-title">{talk.title}</Link>
        <div className="talk-badges">
          <TrackBadge track={talk.track} />
          <LevelBadge level={talk.level} />
        </div>
        {speaker && (
          <Link to={`/speakers/${speaker.id}`} className="speaker-link">
            {speaker.name}
          </Link>
        )}
      </div>
      {showActions && onAction && (
        <button className="btn" onClick={onAction}>{actionLabel ?? 'Добавить'}</button>
      )}
    </article>
  );
}