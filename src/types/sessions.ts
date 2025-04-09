import type { CagegoryGroup, QuestionAnswer, SpeakerItem } from './common.js';

export type Session = {
  id: string;
  title: string;
  description: string | null;
  startsAt: string | null;
  endsAt: string | null;
  isServiceSession: boolean;
  isPlenumSession: boolean;
  questionAnswers: QuestionAnswer[];
  room: string | null;
  roomId: number | null;
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
