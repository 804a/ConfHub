import EmptyState from '../components/EmptyState';

export default function NotFoundPage() {
  return (
    <section className="page">
      <EmptyState
        icon="🚧"
        title="Страница не найдена"
        description="Такого раздела не существует."
        action={{ label: 'На главную', to: '/conferences' }}
      />
    </section>
  );
}