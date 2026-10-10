export type Track = 'Backend' | 'Frontend' | 'Mobile' | 'Data/ML' | 'DevOps' | 'Architecture';

export type Level = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';

export interface Conference {
  id: string;
  title: string;
  shortDescription: string;
  city: string;
  venue: string;
  startDate: string; 
  endDate: string;   
  coverUrl: string;
  tracks: Track[];
}

export interface Speaker {
  id: string;
  name: string;
  position: string;
  company: string;
  bio: string;
  photoUrl: string;
}

export interface Talk {
  id: string;
  conferenceId: string;
  title: string;
  description: string;
  speakerId: string;
  track: Track;
  date: string;      // YYYY-MM-DD
  startTime: string; // HH:mm
  endTime: string;   // HH:mm
  room: string;
  level: Level;
}