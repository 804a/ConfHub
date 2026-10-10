import ConferenceCard from '../components/ConferenceCard';
import EmptyState from '../components/EmptyState';
import { conferences } from '../data/conferences';

export default function ConferencesPage() {
  return (
    <section className="page">
      <div className="toolbar">
        <div>
          <h1>Конференции</h1>
          <p className="meta">Выберите конференцию, чтобы посмотреть программу</p>
        </div>
      </div>

      {conferences.length === 0 ? (
        <EmptyState
          icon="🎤"
          title="Конференций пока нет"
          description="Как только появятся новые события, они отобразятся здесь."
        />
      ) : (
        <div className="grid">
          {conferences.map(conf => (
            <ConferenceCard key={conf.id} conference={conf} />
          ))}
        </div>
      )}
    </section>
  );
}