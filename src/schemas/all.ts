import { z } from 'zod';
import type {
  CategoryAll,
  CategoryItem,
  Link,
  QuestionAll,
  QuestionAnswer,
  RoomAll,
  SessionALl,
  SessionizeAll,
  SpeakerAll,
} from '../types/index.js';

const QuestionAnswer = z.object({
  questionId: z.number().optional(),
  answerValue: z.string().optional(),
}) satisfies z.ZodType<QuestionAnswer>;

export const SessionSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  startsAt: z.string().nullable(),
  endsAt: z.string().nullable(),
  isServiceSession: z.boolean(),
  isPlenumSession: z.boolean(),
  speakers: z.array(z.string()),
  categoryItems: z.array(z.number()),
  questionAnswers: z.array(QuestionAnswer),
  roomId: z.number().nullable(),
  liveUrl: z.string().nullable(),
  recordingUrl: z.string().nullable(),
  status: z.string(),
  isInformed: z.boolean(),
  isConfirmed: z.boolean(),
}) satisfies z.ZodType<SessionALl>;

const Link = z.object({
  title: z.string().optional(),
  url: z.string(),
  linkType: z.string(),
}) satisfies z.ZodType<Link>;

export const SpeakerSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  fullName: z.string(),
  bio: z.string().nullable(),
  tagLine: z.string(),
  profilePicture: z.string().nullable(),
  isTopSpeaker: z.boolean(),
  links: z.array(Link),
  sessions: z.array(z.number()),
  categoryItems: z.array(z.number()),
  questionAnswers: z.array(QuestionAnswer),
}) satisfies z.ZodType<SpeakerAll>;

export const QuestionSchema = z.object({
  id: z.number(),
  question: z.string(),
  questionType: z.string(),
  sort: z.number(),
}) satisfies z.ZodType<QuestionAll>;

const CategoryItem = z.object({
  id: z.number(),
  name: z.string(),
}) satisfies z.ZodType<CategoryItem>;

export const CategorySchema = z.object({
  id: z.number(),
  title: z.string().optional(),
  items: z.array(CategoryItem).optional(),
  sort: z.number(),
  type: z.string().optional(),
}) satisfies z.ZodType<CategoryAll>;

export const RoomSchema = z.object({
  id: z.number(),
  name: z.string(),
  sort: z.number(),
}) satisfies z.ZodType<RoomAll>;

export const SessionizeAllSchema = z.object({
  sessions: z.array(SessionSchema),
  speakers: z.array(SpeakerSchema),
  questions: z.array(QuestionSchema),
  categories: z.array(CategorySchema),
  rooms: z.array(RoomSchema),
}) satisfies z.ZodType<SessionizeAll>;
