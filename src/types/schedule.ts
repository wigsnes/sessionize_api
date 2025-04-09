import type { QuestionAnswer, SpeakerItem, CagegoryGroup } from './common.js';

export type ScheduleSession = {
  id: string;
  title: string;
  description: string | null;
  startsAt: string | null;
  endsAt: string | null;
  isServiceSession: boolean;
  isPlenumSession: boolean;
  questionAnswers?: QuestionAnswer[] | undefined;
  room: string;
  roomId: number | null;
  liveUrl: string | null;
  recordingUrl: string | null;
  status: string | null;
  isInformed: boolean;
  isConfirmed: boolean;
  speakers: SpeakerItem[];
  categories: CagegoryGroup[];
};

export type RoomWithSessions = {
  id: number;
  name: string;
  sessions: ScheduleSession[];
  hasOnlyPlenumSessions: boolean;
};

export type TimeSlotRoom = {
  id: number;
  name: string;
  session: ScheduleSession;
  index: number;
};

export type TimeSlot = {
  slotStart: string;
  rooms: TimeSlotRoom[];
};

export type Schedule = {
  date: string;
  isDefault: boolean;
  rooms: RoomWithSessions[];
  timeSlots: TimeSlot[];
};

export type Schedules = Schedule[];
