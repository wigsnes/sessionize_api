import { z } from 'zod';
import type {
  SessionItem,
  Speaker,
  SpeakerCategory,
  Speakers,
  CategoryItem,
  Link,
  QuestionAnswer,
} from '../types/index.js';

export const QuestionAnswerSchema = z.object({
  questionId: z.number().optional(),
  answerValue: z.string().optional(),
}) satisfies z.ZodType<QuestionAnswer>;

export const LinkSchema = z.object({
  title: z.string().optional(),
  url: z.string(),
  linkType: z.string(),
}) satisfies z.ZodType<Link>;

export const ItemSchema = z.object({
  id: z.number(),
  name: z.string(),
  sort: z.number(),
}) satisfies z.ZodType<CategoryItem>;

export const CategorySchema = z.object({
  id: z.number(),
  title: z.string().optional(),
  items: z.array(ItemSchema).optional(),
  sort: z.number(),
  type: z.string().optional(),
}) satisfies z.ZodType<SpeakerCategory>;

export const SessionSchema = z.object({
  id: z.number(),
  name: z.string(),
}) satisfies z.ZodType<SessionItem>;

export const SpeakerSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  fullName: z.string(),
  bio: z.string().nullable(),
  tagLine: z.string(),
  profilePicture: z.string().nullable(),
  isTopSpeaker: z.boolean(),
  links: z.array(LinkSchema),
  sessions: z.array(SessionSchema),
  categories: z.array(CategorySchema),
  questionAnswers: z.array(QuestionAnswerSchema),
}) satisfies z.ZodType<Speaker>;

export const SpeakersSchema = z.array(
  SpeakerSchema,
) satisfies z.ZodType<Speakers>;
