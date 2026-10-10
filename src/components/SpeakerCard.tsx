import { Link } from 'react-router-dom';
import type { Speaker } from '../types';
import './SpeakerCard.css';

interface Props {
  speaker: Speaker;
  talksCount?: number;
}

export default function SpeakerCard({ speaker, talksCount }: Props) {
  return (
    <article className="card speaker-card">
      <img src={speaker.photoUrl} alt={speaker.name} className="speaker-photo" />
      <h4>{speaker.name}</h4>
      <p className="meta">{speaker.position}, {speaker.company}</p>
      {talksCount !== undefined && <p className="meta">{talksCount} доклад(ов)</p>}
      <Link to={`/speakers/${speaker.id}`} className="btn-link">Подробнее</Link>
    </article>
  );
}