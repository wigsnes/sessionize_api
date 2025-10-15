import type { CategoryItem, Link, QuestionAnswer } from './common.js';

export type SessionALl = {
  id: string;
  title: string;
  description: string | null;
  startsAt: string | null;
  endsAt: string | null;
  isServiceSession: boolean;
  isPlenumSession: boolean;
  questionAnswers: QuestionAnswer[];
  roomId: number | null;
  liveUrl: string | null;
  recordingUrl: string | null;
  status: string;
  isInformed: boolean;
  isConfirmed: boolean;
  speakers: string[];
  categoryItems: number[];
};

export type SpeakerAll = {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  bio: string | null;
  tagLine: string;
  profilePicture: string | null;
  isTopSpeaker: boolean;
  links: Link[];
  sessions: number[];
  categoryItems: number[];
  questionAnswers: QuestionAnswer[];
};

export type QuestionAll = {
  id: number;
  question: string;
  questionType: string;
  sort: number;
};

export type CategoryAll = {
  id: number;
  title?: string;
  items?: CategoryItem[];
  sort: number;
  type?: string;
};

export type RoomAll = {
  id: number;
  name: string;
  sort: number;
};

export type SessionizeAll = {
  sessions: SessionALl[];
  speakers: SpeakerAll[];
  questions: QuestionAll[];
  categories: CategoryAll[];
  rooms: RoomAll[];
};
