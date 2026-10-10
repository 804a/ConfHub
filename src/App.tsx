import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScheduleProvider } from './context/ScheduleContext';
import Header from './components/Header';
import ConferencesPage from './pages/ConferencesPage';
import ConferencePage from './pages/ConferencePage';
import SchedulePage from './pages/SchedulePage';
import TalkPage from './pages/TalkPage';
import SpeakerPage from './pages/SpeakerPage';
import MySchedulePage from './pages/MySchedulePage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <ScheduleProvider>
      <BrowserRouter>
        <Header />
        <main className="shell">
          <Routes>
            <Route path="/" element={<ConferencesPage />} />
            <Route path="/conferences" element={<ConferencesPage />} />
            <Route path="/conferences/:conferenceId" element={<ConferencePage />} />
            <Route path="/conferences/:conferenceId/schedule" element={<SchedulePage />} />
            <Route path="/talks/:talkId" element={<TalkPage />} />
            <Route path="/speakers/:speakerId" element={<SpeakerPage />} />
            <Route path="/my-schedule" element={<MySchedulePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ScheduleProvider>
  );
}