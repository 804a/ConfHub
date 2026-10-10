import { Link, useParams } from 'react-router-dom';
import EmptyState from '../components/EmptyState';
import SpeakerCard from '../components/SpeakerCard';
import TrackBadge from '../components/TrackBadge';
import { getConferenceById } from '../data/conferences';
import { getTalksByConference } from '../data/talks';
import { speakers } from '../data/speakers';
import { formatDateRange } from '../utils/format';
import './ConferencePage.css';

export default function ConferencePage() {
  const { conferenceId } = useParams<{ conferenceId: string }>();
  const conference = conferenceId ? getConferenceById(conferenceId) : undefined;

  if (!conference) {
    return (
      <section className="page">
        <EmptyState
          icon="🔍"
          title="Конференция не найдена"
          description="Возможно, ссылка устарела или содержит опечатку."
          action={{ label: 'К списку конференций', to: '/conferences' }}
        />
      </section>
    );
  }

  const talks = getTalksByConference(conference.id);
  const speakerIds = Array.from(new Set(talks.map(t => t.speakerId)));
  const conferenceSpeakers = speakers.filter(s => speakerIds.includes(s.id));

  return (
    <section className="page">
      <div className="toolbar">
        <div>
          <Link to="/conferences" className="back">← К конференциям</Link>
          <h1>{conference.title}</h1>
          <p className="meta">
            {formatDateRange(conference.startDate, conference.endDate)}
            {' · '}
            {conference.city}
            {' · '}
            {conference.venue}
          </p>
        </div>
        <Link to={`/conferences/${conference.id}/schedule`} className="btn">
          Программа
        </Link>
      </div>

      <article className="content-block">
        <img src={conference.coverUrl} alt={conference.title} className="cover-hero" />
        <p>{conference.shortDescription}</p>
      </article>

      <section className="content-block">
        <h2>Треки</h2>
        <div className="badges-row">
          {conference.tracks.map(track => (
            <TrackBadge key={track} track={track} />
          ))}
        </div>
      </section>

      <section className="content-block">
        <h2>Спикеры</h2>
        {conferenceSpeakers.length === 0 ? (
          <EmptyState icon="🧑‍💻" title="Спикеры пока не объявлены" />
        ) : (
          <div className="grid">
            {conferenceSpeakers.map(speaker => (
              <SpeakerCard key={speaker.id} speaker={speaker} />
            ))}
          </div>
        )}
      </section>
    </section>
  );
}