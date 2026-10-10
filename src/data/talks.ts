import type { Talk } from '../types';

export const talks: Talk[] = [
  // ============================================================
  // DevFest Moscow 2025 (c1)
  // Даты: 2025-06-10, 2025-06-11
  // Треки: Frontend, Backend, Mobile, Data/ML, Architecture
  // ============================================================

  // --- День 1: 2025-06-10 ---
  {
    id: 't1',
    conferenceId: 'c1',
    title: 'React Server Components на практике',
    description:
      'Разбираем, как RSC меняет подход к загрузке данных, где они дают выигрыш, а где пока рано.',
    speakerId: 's1',
    track: 'Frontend',
    date: '2025-06-10',
    startTime: '10:00',
    endTime: '11:00',
    room: 'Зал A',
    level: 'INTERMEDIATE',
  },
  {
    id: 't2',
    conferenceId: 'c1',
    title: 'Высокие нагрузки: как не упасть под трафиком',
    description:
      'Практические приёмы оптимизации бэкенда: кэш, шардирование, очереди.',
    speakerId: 's2',
    track: 'Backend',
    date: '2025-06-10',
    startTime: '10:00',
    endTime: '11:00',
    room: 'Зал B',
    level: 'ADVANCED',
  },
  {
    id: 't3',
    conferenceId: 'c1',
    title: 'Kotlin Multiplatform: один код для iOS и Android',
    description:
      'Опыт миграции продакшен-приложения на KMP: что получилось, что нет, и сколько это стоит.',
    speakerId: 's3',
    track: 'Mobile',
    date: '2025-06-10',
    startTime: '11:30',
    endTime: '12:30',
    room: 'Зал A',
    level: 'INTERMEDIATE',
  },
  {
    id: 't4',
    conferenceId: 'c1',
    title: 'LLM в продакшене: от прототипа до сервиса',
    description:
      'Как обернуть языковую модель в надёжный сервис: очереди, ретраи, кэш, мониторинг.',
    speakerId: 's4',
    track: 'Data/ML',
    date: '2025-06-10',
    startTime: '11:30',
    endTime: '12:30',
    room: 'Зал B',
    level: 'ADVANCED',
  },
  {
    id: 't5',
    conferenceId: 'c1',
    title: 'Микросервисы: где проходит граница',
    description:
      'Практический разбор bounded contexts и типичных ошибок при разделении монолита.',
    speakerId: 's5',
    track: 'Architecture',
    date: '2025-06-10',
    startTime: '14:00',
    endTime: '15:00',
    room: 'Зал A',
    level: 'INTERMEDIATE',
  },

  // --- День 2: 2025-06-11 ---
  {
    id: 't6',
    conferenceId: 'c1',
    title: 'TypeScript: типы, которые ловят баги',
    description:
      'Продвинутые приёмы типизации: conditional types, template literals, brand types.',
    speakerId: 's1',
    track: 'Frontend',
    date: '2025-06-11',
    startTime: '10:00',
    endTime: '11:00',
    room: 'Зал A',
    level: 'INTERMEDIATE',
  },
  {
    id: 't7',
    conferenceId: 'c1',
    title: 'PostgreSQL: индексы, которые действительно работают',
    description:
      'Разбор типичных ошибок индексирования и как EXPLAIN ANALYZE помогает их находить.',
    speakerId: 's2',
    track: 'Backend',
    date: '2025-06-11',
    startTime: '10:00',
    endTime: '11:00',
    room: 'Зал B',
    level: 'INTERMEDIATE',
  },
  {
    id: 't8',
    conferenceId: 'c1',
    title: 'SwiftUI vs UIKit в 2025',
    description:
      'Что выбрать для нового проекта, а что — для легаси. Практические кейсы миграции.',
    speakerId: 's3',
    track: 'Mobile',
    date: '2025-06-11',
    startTime: '11:30',
    endTime: '12:30',
    room: 'Зал A',
    level: 'BEGINNER',
  },
  {
    id: 't9',
    conferenceId: 'c1',
    title: 'Feature Store: как не изобретать велосипед',
    description:
      'Зачем нужен feature store, какие задачи решает, и когда можно обойтись без него.',
    speakerId: 's4',
    track: 'Data/ML',
    date: '2025-06-11',
    startTime: '11:30',
    endTime: '12:30',
    room: 'Зал B',
    level: 'INTERMEDIATE',
  },
  {
    id: 't10',
    conferenceId: 'c1',
    title: 'Event-Driven Architecture: когда это оправдано',
    description:
      'Плюсы и минусы событийной архитектуры. Kafka, RabbitMQ, NATS — что выбрать и почему.',
    speakerId: 's5',
    track: 'Architecture',
    date: '2025-06-11',
    startTime: '14:00',
    endTime: '15:00',
    room: 'Зал A',
    level: 'ADVANCED',
  },

  // ============================================================
  // BackendConf SPb 2025 (c2)
  // Даты: 2025-09-20, 2025-09-21
  // Треки: Backend, DevOps, Architecture, Data/ML
  // ============================================================

  // --- День 1: 2025-09-20 ---
  {
    id: 't11',
    conferenceId: 'c2',
    title: 'Highload на Go: от монолита к микросервисам',
    description:
      'Разбираем путь от монолита к 50+ сервисам: границы, коммуникация, наблюдаемость и цена ошибок.',
    speakerId: 's6',
    track: 'Backend',
    date: '2025-09-20',
    startTime: '10:00',
    endTime: '11:00',
    room: 'Зал B',
    level: 'ADVANCED',
  },
  {
    id: 't12',
    conferenceId: 'c2',
    title: 'Kubernetes для тех, кто устал от YAML',
    description:
      'Практические приёмы: Helm, Kustomize, операторы и что реально помогает в продакшене.',
    speakerId: 's7',
    track: 'DevOps',
    date: '2025-09-20',
    startTime: '10:00',
    endTime: '11:00',
    room: 'Зал C',
    level: 'INTERMEDIATE',
  },
  {
    id: 't13',
    conferenceId: 'c2',
    title: 'gRPC vs REST: что выбрать в 2025',
    description:
      'Сравнение по latency, типизации, инструментам. Практические кейсы миграции.',
    speakerId: 's2',
    track: 'Backend',
    date: '2025-09-20',
    startTime: '11:30',
    endTime: '12:30',
    room: 'Зал B',
    level: 'INTERMEDIATE',
  },
  {
    id: 't14',
    conferenceId: 'c2',
    title: 'CI/CD без боли: от коммита до продакшена за 10 минут',
    description:
      'Как построить быстрый и надёжный пайплайн. GitLab CI, GitHub Actions, ArgoCD.',
    speakerId: 's8',
    track: 'DevOps',
    date: '2025-09-20',
    startTime: '11:30',
    endTime: '12:30',
    room: 'Зал C',
    level: 'BEGINNER',
  },
  {
    id: 't15',
    conferenceId: 'c2',
    title: 'DDD на практике: где границы и как их найти',
    description:
      'Domain-Driven Design без академической пыли: примеры разбиения на bounded contexts.',
    speakerId: 's9',
    track: 'Architecture',
    date: '2025-09-20',
    startTime: '14:00',
    endTime: '15:00',
    room: 'Зал B',
    level: 'ADVANCED',
  },

  // --- День 2: 2025-09-21 ---
  {
    id: 't16',
    conferenceId: 'c2',
    title: 'Кэширование: Redis, Memcached и когда не надо',
    description:
      'Стратегии инвалидации, cache stampede, и как не сломать прод кэшем.',
    speakerId: 's10',
    track: 'Backend',
    date: '2025-09-21',
    startTime: '10:00',
    endTime: '11:00',
    room: 'Зал B',
    level: 'INTERMEDIATE',
  },
  {
    id: 't17',
    conferenceId: 'c2',
    title: 'Наблюдаемость: метрики, логи, трейсы',
    description:
      'Как собрать OpenTelemetry, Prometheus и Grafana в единую систему и не утонуть в данных.',
    speakerId: 's7',
    track: 'DevOps',
    date: '2025-09-21',
    startTime: '10:00',
    endTime: '11:00',
    room: 'Зал C',
    level: 'INTERMEDIATE',
  },
  {
    id: 't18',
    conferenceId: 'c2',
    title: 'Saga Pattern: распределённые транзакции без боли',
    description:
      'Как обеспечить согласованность между сервисами без 2PC. Хореография vs оркестрация.',
    speakerId: 's9',
    track: 'Architecture',
    date: '2025-09-21',
    startTime: '11:30',
    endTime: '12:30',
    room: 'Зал B',
    level: 'ADVANCED',
  },
  {
    id: 't19',
    conferenceId: 'c2',
    title: 'ML в продакшене: пайплайны и мониторинг',
    description:
      'Как довести модель от ноутбука до продакшена и не потерять её по дороге.',
    speakerId: 's4',
    track: 'Data/ML',
    date: '2025-09-21',
    startTime: '11:30',
    endTime: '12:30',
    room: 'Зал C',
    level: 'INTERMEDIATE',
  },
  {
    id: 't20',
    conferenceId: 'c2',
    title: 'Инфраструктура как код: Terraform vs Pulumi',
    description:
      'Сравнение подходов к IaC. Практический опыт миграции на Pulumi в крупной компании.',
    speakerId: 's8',
    track: 'DevOps',
    date: '2025-09-21',
    startTime: '14:00',
    endTime: '15:00',
    room: 'Зал B',
    level: 'INTERMEDIATE',
  },
];

export const getTalkById = (id: string): Talk | undefined =>
  talks.find(t => t.id === id);

export const getTalksByConference = (conferenceId: string): Talk[] =>
  talks.filter(t => t.conferenceId === conferenceId);

export const getTalksBySpeaker = (speakerId: string): Talk[] =>
  talks.filter(t => t.speakerId === speakerId);

export const getTalksByDate = (conferenceId: string, date: string): Talk[] =>
  talks.filter(t => t.conferenceId === conferenceId && t.date === date);