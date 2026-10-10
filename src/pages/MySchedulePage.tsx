import EmptyState from '../components/EmptyState';
import TalkCard from '../components/TalkCard';
import { useSchedule } from '../context/ScheduleContext';
import { groupTalksByDate } from '../utils/schedule';
import { formatDate } from '../utils/format';

export default function MySchedulePage() {
  const { schedule, removeTalk } = useSchedule();

  if (schedule.length === 0) {
    return (
      <section className="page">
        <div className="toolbar">
          <div>
            <h1>Моё расписание</h1>
            <p className="meta">Здесь появятся доклады, которые вы добавили</p>
          </div>
        </div>
        <EmptyState
          icon="📅"
          title="Ваше расписание пусто"
          description="Откройте программу конференции и добавьте интересующие доклады."
          action={{ label: 'К конференциям', to: '/conferences' }}
        />
      </section>
    );
  }

  const grouped = groupTalksByDate(schedule);
  const dates = Object.keys(grouped).sort();

  return (
    <section className="page">
      <div className="toolbar">
        <div>
          <h1>Моё расписание</h1>
          <p className="meta">Всего докладов: {schedule.length}</p>
        </div>
      </div>

      {dates.map(date => (
        <section key={date} className="content-block">
          <h2>{formatDate(date)}</h2>
          <div className="talk-list">
            {grouped[date].map(talk => (
              <TalkCard
                key={talk.id}
                talk={talk}
                showActions
                actionLabel="Удалить"
                onAction={() => removeTalk(talk.id)}
              />
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}