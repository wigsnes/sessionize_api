import type { CategoryItem, Link, QuestionAnswer } from './common.js';

export type SpeakerCategory = {
  id: number;
  title: string;
  items: CategoryItem[];
  sort: number;
  type: string;
};

export type SessionItem = {
  id: number;
  name: string;
};

export type Speaker = {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  bio: string | null;
  tagLine: string;
  profilePicture: string | null;
  isTopSpeaker: boolean;
  links: Link[];
  sessions: SessionItem[];
  categories: SpeakerCategory[];
  questionAnswers: QuestionAnswer[];
};

export type Speakers = Speaker[];
