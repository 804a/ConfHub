import type { Speaker } from '../types';

export const speakers: Speaker[] = [
  { id: 's1', name: 'Анна Кузнецова', position: 'Senior Frontend Engineer', company: 'Яндекс', bio: '10 лет в разработке интерфейсов.', photoUrl: 'https://i.pravatar.cc/200?img=1' },
  { id: 's2', name: 'Дмитрий Орлов', position: 'Backend Team Lead', company: 'Тинькофф', bio: 'Проектирует высоконагруженные сервисы.', photoUrl: 'https://i.pravatar.cc/200?img=2' },
  { id: 's3', name: 'Мария Соколова', position: 'Mobile Lead', company: 'Сбер', bio: 'Kotlin Multiplatform в продакшене.', photoUrl: 'https://i.pravatar.cc/200?img=3' },
  { id: 's4', name: 'Игорь Петров', position: 'ML Engineer', company: 'Ozon', bio: 'ML-пайплайны и feature stores.', photoUrl: 'https://i.pravatar.cc/200?img=4' },
  { id: 's5', name: 'Елена Волкова', position: 'Solution Architect', company: 'VK', bio: 'Микросервисы и событийная архитектура.', photoUrl: 'https://i.pravatar.cc/200?img=5' },
  { id: 's6', name: 'Алексей Морозов', position: 'Go Developer', company: 'Авито', bio: 'Highload на Go, от монолита к микросервисам.', photoUrl: 'https://i.pravatar.cc/200?img=6' },
  { id: 's7', name: 'Ольга Никитина', position: 'DevOps Engineer', company: 'Wildberries', bio: 'Kubernetes, наблюдаемость, CI/CD.', photoUrl: 'https://i.pravatar.cc/200?img=7' },
  { id: 's8', name: 'Сергей Лебедев', position: 'Platform Engineer', company: 'МТС', bio: 'IaC, CI/CD, Kubernetes.', photoUrl: 'https://i.pravatar.cc/200?img=8' },
  { id: 's9', name: 'Наталья Егорова', position: 'Lead Architect', company: 'Райффайзен', bio: 'DDD, saga pattern, распределённые системы.', photoUrl: 'https://i.pravatar.cc/200?img=9' },
  { id: 's10', name: 'Павел Кузнецов', position: 'Backend Engineer', company: 'Домклик', bio: 'Кэширование и высоконагруженные API.', photoUrl: 'https://i.pravatar.cc/200?img=10' },
];

export const getSpeakerById = (id: string): Speaker | undefined =>
  speakers.find(s => s.id === id);