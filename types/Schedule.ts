import { z } from "zod";

const QuestionAnswer = z.object({
  questionId: z.number().optional(),
  answerValue: z.string().optional(),
});

const Speaker = z.object({
  id: z.string(),
  name: z.string(),
});

const CategoryItem = z.object({
  id: z.number(),
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
  questionAnswers: z.array(QuestionAnswer).optional(),
  roomId: z.number(),
  liveUrl: z.string().nullable(),
  recordingUrl: z.string().nullable(),
  status: z.string().nullable(),
  isInformed: z.boolean(),
  isConfirmed: z.boolean(),
  speakers: z.array(Speaker),
  categories: z.array(CategoryItem),
  room: z.string(),
});

const Room = z.object({
  id: z.number(),
  name: z.string(),
  sessions: z.array(Session),
  hasOnlyPlenumSessions: z.boolean(),
});

const TimeSlotRoom = z.object({
  id: z.number(),
  name: z.string(),
  session: Session,
  index: z.number(),
});

const TimeSlot = z.object({
  slotStart: z.string(),
  rooms: z.array(TimeSlotRoom),
});

export const ScheduleSchema = z.array(
  z.object({
    date: z.string(),
    isDefault: z.boolean(),
    rooms: z.array(Room),
    timeSlots: z.array(TimeSlot),
  })
);

export type Schedule = z.infer<typeof ScheduleSchema>;
