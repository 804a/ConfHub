import type { Conference } from '../types';
import cover1 from '../assets/frost_sad.png'
import cover2 from '../assets/frost_happy.png'

export const conferences: Conference[] = [
  {
    id: 'c1',
    title: 'DevFest Moscow 2025',
    shortDescription:
      'Крупнейшая конференция для разработчиков: фронтенд, бэкенд, мобильная разработка, ML и архитектура.',
    city: 'Москва',
    venue: 'Крокус Экспо, павильон 3',
    startDate: '2025-06-10',
    endDate: '2025-06-11',
    coverUrl: cover1,
    tracks: ['Frontend', 'Backend', 'Mobile', 'Data/ML', 'Architecture'],
  },
  {
    id: 'c2',
    title: 'BackendConf SPb 2025',
    shortDescription:
      'Два дня глубокого погружения в серверную разработку: высокие нагрузки, микросервисы, DevOps.',
    city: 'Санкт-Петербург',
    venue: 'Ленэкспо, зал B',
    startDate: '2025-09-20',
    endDate: '2025-09-21',
    coverUrl: cover2,
    tracks: ['Backend', 'DevOps', 'Architecture', 'Data/ML'],
  },
];

export const getConferenceById = (id: string): Conference | undefined =>
  conferences.find(c => c.id === id);