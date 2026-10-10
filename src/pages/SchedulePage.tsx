import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import EmptyState from '../components/EmptyState';
import FilterPanel from '../components/FilterPanel';
import TalkCard from '../components/TalkCard';
import { getConferenceById } from '../data/conferences';
import { getTalksByConference } from '../data/talks';
import { speakers } from '../data/speakers';
import { sortTalksByTime } from '../utils/schedule';
import { formatDate } from '../utils/format';
import type { Level, Track } from '../types';
import './SchedulePage.css'; 

export default function SchedulePage() {
  const { conferenceId } = useParams<{ conferenceId: string }>();
  const conference = conferenceId ? getConferenceById(conferenceId) : undefined;

  const allTalks = useMemo(
    () => (conference ? getTalksByConference(conference.id) : []),
    [conference],
  );

  const days = useMemo(
    () => Array.from(new Set(allTalks.map(t => t.date))).sort(),
    [allTalks],
  );

  const conferenceSpeakers = useMemo(() => {
    const ids = new Set(allTalks.map(t => t.speakerId));
    return speakers.filter(s => ids.has(s.id));
  }, [allTalks]);

  const [selectedDay, setSelectedDay] = useState<string>('');
  const [track, setTrack] = useState<Track | 'all'>('all');
  const [level, setLevel] = useState<Level | 'all'>('all');
  const [speakerId, setSpeakerId] = useState<string | 'all'>('all');
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (days.length > 0 && !days.includes(selectedDay)) {
      setSelectedDay(days[0]);
    }
  }, [days, selectedDay]);

  const resetFilters = () => {
    setTrack('all');
    setLevel('all');
    setSpeakerId('all');
    setQuery('');
  };

  const filteredTalks = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = allTalks
      .filter(t => t.date === selectedDay)
      .filter(t => track === 'all' || t.track === track)
      .filter(t => level === 'all' || t.level === level)
      .filter(t => speakerId === 'all' || t.speakerId === speakerId)
      .filter(t => q === '' || t.title.toLowerCase().includes(q));
    return sortTalksByTime(list);
  }, [allTalks, selectedDay, track, level, speakerId, query]);

  console.log('days:', days, 'selectedDay:', selectedDay, 'filteredTalks:', filteredTalks);


  if (!conference) {
    return (
      <section className="page">
        <EmptyState
          icon="🔍"
          title="Конференция не найдена"
          action={{ label: 'К списку конференций', to: '/conferences' }}
        />
      </section>
    );
  }

  return (
    <section className="page">
      <div className="toolbar">
        <div>
          <Link to={`/conferences/${conference.id}`} className="back">
            ← К конференции
          </Link>
          <h1>Программа: {conference.title}</h1>
          <p className="meta">
            {formatDate(conference.startDate)} — {formatDate(conference.endDate)}
          </p>
        </div>
      </div>

      {days.length > 1 && (
        <div className="day-switcher">
          {days.map(day => (
            <button
              key={day}
              className={day === selectedDay ? 'day-btn active' : 'day-btn'}
              onClick={() => setSelectedDay(day)}
            >
              {formatDate(day)}
            </button>
          ))}
        </div>
      )}

      <FilterPanel
        tracks={conference.tracks}
        speakers={conferenceSpeakers}
        track={track}
        level={level}
        speakerId={speakerId}
        query={query}
        onTrackChange={setTrack}
        onLevelChange={setLevel}
        onSpeakerChange={setSpeakerId}
        onQueryChange={setQuery}
        onReset={resetFilters}
      />

      {filteredTalks.length === 0 ? (
        <EmptyState
          icon="🔎"
          title="По выбранным параметрам доклады не найдены"
          description="Попробуйте изменить фильтры или сбросить их."
          action={{ label: 'Сбросить фильтры', onClick: resetFilters }}
        />
      ) : (
        <div className="talk-list">
          {filteredTalks.map(talk => (
            <TalkCard key={talk.id} talk={talk} />
          ))}
        </div>
      )}
    </section>
  );
}