import { CategoryItem, QuestionAnswer, SpeakerItem } from "./common";

export type ScheduleSession = {
  id: string;
  title: string;
  description: string | null;
  startsAt: string;
  endsAt: string;
  isServiceSession: boolean;
  isPlenumSession: boolean;
  questionAnswers?: QuestionAnswer[] | undefined;
  room: string;
  roomId: number;
  liveUrl: string | null;
  recordingUrl: string | null;
  status: string | null;
  isInformed: boolean;
  isConfirmed: boolean;
  speakers: SpeakerItem[];
  categories: CategoryItem[];
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
