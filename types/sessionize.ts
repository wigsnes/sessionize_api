export interface SessionizeData {
  sessions: Session[];
  speakers: Speaker[];
  questions: Question[];
  categories: Category[];
  rooms: any[];
}

export interface Session {
  id: string;
  title: string;
  description: string;
  startsAt: any;
  endsAt: any;
  isServiceSession: boolean;
  isPlenumSession: boolean;
  speakers: string[];
  categoryItems: number[];
  questionAnswers: any[];
  roomId: any;
  liveUrl: any;
  recordingUrl: any;
  status: string;
  isInformed: boolean;
  isConfirmed: boolean;
}

export interface Speaker {
  id: string;
  firstName: string;
  lastName: string;
  bio: string;
  tagLine: string;
  profilePicture: string;
  isTopSpeaker: boolean;
  links: Link[];
  sessions: number[];
  fullName: string;
  categoryItems: any[];
  questionAnswers: QuestionAnswer[];
}

export interface Link {
  title?: string;
  url: string;
  linkType: string;
}

export interface QuestionAnswer {
  questionId: number;
  answerValue: string;
}

export interface Question {
  id: number;
  question: string;
  questionType: string;
  sort: number;
}

export interface Category {
  id: number;
  title: string;
  items: Item[];
  sort: number;
  type: string;
}

export interface Item {
  id: number;
  name: string;
  sort: number;
}

// Schedule

export interface ScheduleData {
  date: string;
  isDefault: boolean;
  rooms: Room[];
  timeSlots: TimeSlot[];
}

export interface Room {
  id: number;
  name: string;
  sessions: Session2[];
  hasOnlyPlenumSessions: boolean;
}

export interface Category {
  id: number;
  name: string;
  categoryItems: CategoryItem[];
  sort: number;
}

export interface CategoryItem {
  id: number;
  name: string;
}

export interface TimeSlot {
  slotStart: string;
  rooms: Room2[];
}

export interface Room2 {
  id: number;
  name: string;
  session: Session2;
  index: number;
}

export interface Session2 {
  id: string;
  title: string;
  description: string;
  startsAt: string;
  endsAt: string;
  isServiceSession: boolean;
  isPlenumSession: boolean;
  speakers: Speaker2[];
  categories: Category2[];
  roomId: number;
  room: string;
  liveUrl: any;
  recordingUrl: any;
  status?: string;
  isInformed: boolean;
  isConfirmed: boolean;
}

export interface Speaker2 {
  id: string;
  name: string;
}

export interface Category2 {
  id: number;
  name: string;
  categoryItems: CategoryItem2[];
  sort: number;
}

export interface CategoryItem2 {
  id: number;
  name: string;
}
