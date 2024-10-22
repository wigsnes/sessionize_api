import { z } from "zod";

const QuestionAnswer = z.object({
  questionId: z.number().optional(),
  answerValue: z.string().optional(),
});

const Link = z.object({
  title: z.string().optional(),
  url: z.string(),
  linkType: z.string(),
});

const Item = z.object({
  id: z.number(),
  name: z.string(),
  sort: z.number(),
});

const Category = z.object({
  id: z.number(),
  title: z.string(),
  items: z.array(Item),
  sort: z.number(),
  type: z.string(),
});

const Session = z.object({
  id: z.number(),
  name: z.string(),
});

export const SpeakersSchema = z.array(
  z.object({
    id: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    fullName: z.string(),
    bio: z.string().nullable(),
    tagLine: z.string(),
    profilePicture: z.string().nullable(),
    isTopSpeaker: z.boolean(),
    links: z.array(Link),
    sessions: z.array(Session),
    categories: z.array(Category),
    questionAnswers: z.array(QuestionAnswer),
  })
);
