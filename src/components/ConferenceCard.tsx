import { Link } from 'react-router-dom';
import type { Conference } from '../types';
import { formatDateRange } from '../utils/format';

interface Props {
  conference: Conference;
}

export default function ConferenceCard({ conference }: Props) {
  return (
    <article className="card conference-card">
      <img src={conference.coverUrl} alt={conference.title} className="card-cover" />
      <div className="card-body">
        <h3>{conference.title}</h3>
        <p className="meta">
          {formatDateRange(conference.startDate, conference.endDate)} · {conference.city}
        </p>
        <p className="description">{conference.shortDescription}</p>
        <Link to={`/conferences/${conference.id}`} className="btn">
          Подробнее
        </Link>
      </div>
    </article>
  );
}