import { Link, useParams } from 'react-router-dom';
import EmptyState from '../components/EmptyState';
import TalkCard from '../components/TalkCard';
import { getSpeakerById } from '../data/speakers';
import { getTalksBySpeaker } from '../data/talks';
import { sortTalksByTime } from '../utils/schedule';

export default function SpeakerPage() {
  const { speakerId } = useParams<{ speakerId: string }>();
  const speaker = speakerId ? getSpeakerById(speakerId) : undefined;

  if (!speaker) {
    return (
      <section className="page">
        <EmptyState
          icon="🔍"
          title="Спикер не найден"
          action={{ label: 'К конференциям', to: '/conferences' }}
        />
      </section>
    );
  }

  const talks = sortTalksByTime(getTalksBySpeaker(speaker.id));

  return (
    <section className="page">
      <div className="toolbar">
        <div>
          <Link to="/conferences" className="back">← К конференциям</Link>
          <h1>{speaker.name}</h1>
          <p className="meta">
            {speaker.position}, {speaker.company}
          </p>
        </div>
      </div>

      <article className="content-block speaker-profile">
        <img src={speaker.photoUrl} alt={speaker.name} className="speaker-photo large" />
        <p>{speaker.bio}</p>
      </article>

      <section className="content-block">
        <h2>Доклады</h2>
        {talks.length === 0 ? (
          <EmptyState icon="🎤" title="У этого спикера пока нет докладов" />
        ) : (
          <div className="talk-list">
            {talks.map(talk => (
              <TalkCard key={talk.id} talk={talk} />
            ))}
          </div>
        )}
      </section>
    </section>
  );
}