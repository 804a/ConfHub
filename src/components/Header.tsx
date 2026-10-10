import { Link, NavLink } from 'react-router-dom';
import { useSchedule } from '../context/ScheduleContext';
import './Header.css';

export default function Header() {
  const { schedule } = useSchedule();

  return (
    <header className="topbar">
      <div className="topbar-left">
        <Link to="/conferences" className="brand">ConfHub</Link>
      </div>
      <nav className="topbar-right">
        <NavLink to="/conferences" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Конференции
        </NavLink>
        <NavLink to="/my-schedule" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Моё расписание {schedule.length > 0 && <span className="badge">{schedule.length}</span>}
        </NavLink>
      </nav>
    </header>
  );
}