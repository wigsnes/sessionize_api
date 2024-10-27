import { z } from "zod";
import {
  RoomWithSessions,
  Schedules,
  ScheduleSession,
  TimeSlot,
  TimeSlotRoom,
  CategoryItem,
  QuestionAnswer,
  SpeakerItem,
} from "../types";

export const QuestionAnswerSchema = z.object({
  questionId: z.number().optional(),
  answerValue: z.string().optional(),
}) satisfies z.ZodType<QuestionAnswer>;

export const SpeakerSchema = z.object({
  id: z.string(),
  name: z.string(),
}) satisfies z.ZodType<SpeakerItem>;

export const CategoryItemSchema = z.object({
  id: z.number(),
  name: z.string(),
}) satisfies z.ZodType<CategoryItem>;

export const SessionSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  startsAt: z.string(),
  endsAt: z.string(),
  isServiceSession: z.boolean(),
  isPlenumSession: z.boolean(),
  questionAnswers: z.array(QuestionAnswerSchema).optional(),
  roomId: z.number(),
  liveUrl: z.string().nullable(),
  recordingUrl: z.string().nullable(),
  status: z.string().nullable(),
  isInformed: z.boolean(),
  isConfirmed: z.boolean(),
  speakers: z.array(SpeakerSchema),
  categories: z.array(CategoryItemSchema),
  room: z.string(),
}) satisfies z.ZodType<ScheduleSession>;

export const RoomSchema = z.object({
  id: z.number(),
  name: z.string(),
  sessions: z.array(SessionSchema),
  hasOnlyPlenumSessions: z.boolean(),
}) satisfies z.ZodType<RoomWithSessions>;

export const TimeSlotRoomSchema = z.object({
  id: z.number(),
  name: z.string(),
  session: SessionSchema,
  index: z.number(),
}) satisfies z.ZodType<TimeSlotRoom>;

export const TimeSlotSchema = z.object({
  slotStart: z.string(),
  rooms: z.array(TimeSlotRoomSchema),
}) satisfies z.ZodType<TimeSlot>;

export const ScheduleSchema = z.array(
  z.object({
    date: z.string(),
    isDefault: z.boolean(),
    rooms: z.array(RoomSchema),
    timeSlots: z.array(TimeSlotSchema),
  })
) satisfies z.ZodType<Schedules>;
