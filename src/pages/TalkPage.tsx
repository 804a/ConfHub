import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import EmptyState from '../components/EmptyState';
import LevelBadge from '../components/LevelBadge';
import TrackBadge from '../components/TrackBadge';
import { getTalkById } from '../data/talks';
import { getSpeakerById } from '../data/speakers';
import { getConferenceById } from '../data/conferences';
import { useSchedule } from '../context/ScheduleContext';
import { formatDate } from '../utils/format';
import { formatTimeRange } from '../utils/schedule';
import type { Talk } from '../types';

export default function TalkPage() {
  const { talkId } = useParams<{ talkId: string }>();
  const talk = talkId ? getTalkById(talkId) : undefined;

  const { addTalk, removeTalk, isInSchedule } = useSchedule();
  const [conflict, setConflict] = useState<Talk | null>(null);

  if (!talk) {
    return (
      <section className="page">
        <EmptyState
          icon="🔍"
          title="Доклад не найден"
          description="Возможно, ссылка устарела или содержит опечатку."
          action={{ label: 'К конференциям', to: '/conferences' }}
        />
      </section>
    );
  }

  const speaker = getSpeakerById(talk.speakerId);
  const conference = getConferenceById(talk.conferenceId);
  const inSchedule = isInSchedule(talk.id);

  const handleAdd = () => {
    const result = addTalk(talk);
    setConflict(result.ok ? null : result.conflictWith);
  };

  const handleRemove = () => {
    removeTalk(talk.id);
    setConflict(null);
  };

  return (
    <section className="page">
      <div className="toolbar">
        <div>
          {conference && (
            <Link to={`/conferences/${conference.id}/schedule`} className="back">
              ← К программе
            </Link>
          )}
          <h1>{talk.title}</h1>
          <p className="meta">
            {formatDate(talk.date)} · {formatTimeRange(talk.startTime, talk.endTime)} · {talk.room}
          </p>
        </div>
      </div>

      <article className="content-block">
        <div className="badges-row">
          <TrackBadge track={talk.track} />
          <LevelBadge level={talk.level} />
        </div>
        <p>{talk.description}</p>
      </article>

      {speaker && (
        <article className="content-block">
          <h2>Спикер</h2>
          <div className="speaker-inline">
            <img src={speaker.photoUrl} alt={speaker.name} className="speaker-photo" />
            <div>
              <Link to={`/speakers/${speaker.id}`} className="talk-title">
                {speaker.name}
              </Link>
              <p className="meta">
                {speaker.position}, {speaker.company}
              </p>
              <p>{speaker.bio}</p>
            </div>
          </div>
        </article>
      )}

      <div className="actions">
        {inSchedule ? (
          <button className="btn danger" onClick={handleRemove}>
            Удалить из расписания
          </button>
        ) : (
          <button className="btn" onClick={handleAdd}>
            Добавить в моё расписание
          </button>
        )}
      </div>

      {conflict && (
        <div className="conflict-message">
          <strong>Конфликт расписания.</strong>{' '}
          Этот доклад пересекается с «{conflict.title}» (
          {formatTimeRange(conflict.startTime, conflict.endTime)}, зал {conflict.room}).
          <button className="btn-link" onClick={() => setConflict(null)}>
            Понятно
          </button>
        </div>
      )}
    </section>
  );
}