import { z } from "zod";

const QuestionAnswer = z.object({
  questionId: z.number().optional(),
  answerValue: z.string().optional(),
});

const CategoryItem = z.object({
  id: z.number(),
  name: z.string(),
});

const Category = z.object({
  id: z.number(),
  name: z.string(),
  categoryItems: z.array(CategoryItem),
  sort: z.number(),
});

const Speaker = z.object({
  id: z.string(),
  name: z.string(),
});

const Session = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  startsAt: z.string(),
  endsAt: z.string(),
  isServiceSession: z.boolean(),
  isPlenumSession: z.boolean(),
  questionAnswers: z.array(QuestionAnswer),
  roomId: z.number(),
  liveUrl: z.string().nullable(),
  recordingUrl: z.string().nullable(),
  status: z.string(),
  isInformed: z.boolean(),
  isConfirmed: z.boolean(),
  speakers: z.array(Speaker),
  categories: z.array(Category),
  room: z.string(),
});

export const Sessions = z.array(
  z.object({
    groupId: z.number().nullable(),
    groupName: z.string().nullable(),
    sessions: z.array(Session),
    isDefault: z.boolean(),
  })
);

export type Sessions = z.infer<typeof Sessions>;
