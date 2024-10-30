import { z } from 'zod';
import type {
  CagegoryGroup,
  Session,
  SessionGroups,
  CategoryItem,
  QuestionAnswer,
  SpeakerItem,
} from '../types/index.js';

export const QuestionAnswerSchema = z.object({
  questionId: z.number().optional(),
  answerValue: z.string().optional(),
}) satisfies z.ZodType<QuestionAnswer>;

export const CategoryItemSchema = z.object({
  id: z.number(),
  name: z.string(),
}) satisfies z.ZodType<CategoryItem>;

export const CategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  categoryItems: z.array(CategoryItemSchema),
  sort: z.number(),
}) satisfies z.ZodType<CagegoryGroup>;

export const SpeakerSchema = z.object({
  id: z.string(),
  name: z.string(),
}) satisfies z.ZodType<SpeakerItem>;

export const SessionSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  startsAt: z.string(),
  endsAt: z.string(),
  isServiceSession: z.boolean(),
  isPlenumSession: z.boolean(),
  questionAnswers: z.array(QuestionAnswerSchema),
  roomId: z.number(),
  liveUrl: z.string().nullable(),
  recordingUrl: z.string().nullable(),
  status: z.string(),
  isInformed: z.boolean(),
  isConfirmed: z.boolean(),
  speakers: z.array(SpeakerSchema),
  categories: z.array(CategorySchema),
  room: z.string(),
}) satisfies z.ZodType<Session>;

export const SessionsSchema = z.array(
  z.object({
    groupId: z.number().nullable(),
    groupName: z.string().nullable(),
    sessions: z.array(SessionSchema),
    isDefault: z.boolean(),
  }),
) satisfies z.ZodType<SessionGroups>;
