"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedule = void 0;
const zod_1 = require("zod");
const QuestionAnswer = zod_1.z.object({
    questionId: zod_1.z.number().optional(),
    answerValue: zod_1.z.string().optional(),
});
const Speaker = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
});
const CategoryItem = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
});
const Session = zod_1.z.object({
    id: zod_1.z.string(),
    title: zod_1.z.string(),
    description: zod_1.z.string().nullable(),
    startsAt: zod_1.z.string(),
    endsAt: zod_1.z.string(),
    isServiceSession: zod_1.z.boolean(),
    isPlenumSession: zod_1.z.boolean(),
    questionAnswers: zod_1.z.array(QuestionAnswer).optional(),
    roomId: zod_1.z.number(),
    liveUrl: zod_1.z.string().nullable(),
    recordingUrl: zod_1.z.string().nullable(),
    status: zod_1.z.string().nullable(),
    isInformed: zod_1.z.boolean(),
    isConfirmed: zod_1.z.boolean(),
    speakers: zod_1.z.array(Speaker),
    categories: zod_1.z.array(CategoryItem),
    room: zod_1.z.string(),
});
const Room = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    sessions: zod_1.z.array(Session),
    hasOnlyPlenumSessions: zod_1.z.boolean(),
});
const TimeSlotRoom = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    session: Session,
    index: zod_1.z.number(),
});
const TimeSlot = zod_1.z.object({
    slotStart: zod_1.z.string(),
    rooms: zod_1.z.array(TimeSlotRoom),
});
exports.Schedule = zod_1.z.array(zod_1.z.object({
    date: zod_1.z.string(),
    isDefault: zod_1.z.boolean(),
    rooms: zod_1.z.array(Room),
    timeSlots: zod_1.z.array(TimeSlot),
}));
