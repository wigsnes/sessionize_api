import { z } from "zod";

const QuestionAnswer = z.object({
  questionId: z.number().optional(),
  answerValue: z.string().optional(),
});

const Session = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  startsAt: z.string(),
  endsAt: z.string(),
  isServiceSession: z.boolean(),
  isPlenumSession: z.boolean(),
  speakers: z.array(z.string()),
  categoryItems: z.array(z.number()),
  questionAnswers: z.array(QuestionAnswer),
  roomId: z.number(),
  liveUrl: z.string().nullable(),
  recordingUrl: z.string().nullable(),
  status: z.string(),
  isInformed: z.boolean(),
  isConfirmed: z.boolean(),
});

const Link = z.object({
  title: z.string().optional(),
  url: z.string(),
  linkType: z.string(),
});

const Speaker = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  fullName: z.string(),
  bio: z.string(),
  tagLine: z.string(),
  profilePicture: z.string(),
  isTopSpeaker: z.boolean(),
  links: z.array(Link),
  sessions: z.array(z.number()),
  categoryItems: z.array(z.number()),
  questionAnswers: z.array(QuestionAnswer),
});

const Question = z.object({
  id: z.number(),
  question: z.string(),
  questionType: z.string(),
  sort: z.number(),
});

const CategoryItem = z.object({
  id: z.number(),
  name: z.string(),
});

const Category = z.object({
  id: z.number(),
  title: z.string(),
  items: z.array(CategoryItem),
  sort: z.number(),
  type: z.string(),
});

const Room = z.object({
  id: z.number(),
  name: z.string(),
  sort: z.number(),
});

export const SessionizeData = z.object({
  sessions: z.array(Session),
  speakers: z.array(Speaker),
  questions: z.array(Question),
  categories: z.array(Category),
  rooms: z.array(Room),
});

export type SessionizeData = z.infer<typeof SessionizeData>;
