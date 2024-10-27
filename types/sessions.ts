import { CategoryItem, QuestionAnswer, SpeakerItem } from "./common";

export type CagegoryGroup = {
  id: number;
  name: string;
  categoryItems: CategoryItem[];
  sort: number;
};

export type Session = {
  id: string;
  title: string;
  description: string | null;
  startsAt: string;
  endsAt: string;
  isServiceSession: boolean;
  isPlenumSession: boolean;
  questionAnswers: QuestionAnswer[];
  room: string;
  roomId: number;
  liveUrl: string | null;
  recordingUrl: string | null;
  status: string;
  isInformed: boolean;
  isConfirmed: boolean;
  speakers: SpeakerItem[];
  categories: CagegoryGroup[];
};

export type SessionGroup = {
  groupId: number | null;
  groupName: string | null;
  sessions: Session[];
  isDefault: boolean;
};

export type SessionGroups = SessionGroup[];
