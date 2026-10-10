import { Link } from 'react-router-dom';

interface Props {
  title: string;
  description?: string;
  icon?: string;
  action?: { label: string; to?: string; onClick?: () => void };
}

export default function EmptyState({ title, description, icon = '📭', action }: Props) {
  return (
    <div className="empty-state">
      <div className="empty-icon">{icon}</div>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {action?.to && <Link to={action.to} className="btn">{action.label}</Link>}
      {action?.onClick && <button className="btn" onClick={action.onClick}>{action.label}</button>}
    </div>
  );
}