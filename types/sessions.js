"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sessions = void 0;
const zod_1 = require("zod");
const QuestionAnswer = zod_1.z.object({
    questionId: zod_1.z.number().optional(),
    answerValue: zod_1.z.string().optional(),
});
const CategoryItem = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
});
const Category = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    categoryItems: zod_1.z.array(CategoryItem),
    sort: zod_1.z.number(),
});
const Speaker = zod_1.z.object({
    id: zod_1.z.string(),
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
    questionAnswers: zod_1.z.array(QuestionAnswer),
    roomId: zod_1.z.number(),
    liveUrl: zod_1.z.string().nullable(),
    recordingUrl: zod_1.z.string().nullable(),
    status: zod_1.z.string(),
    isInformed: zod_1.z.boolean(),
    isConfirmed: zod_1.z.boolean(),
    speakers: zod_1.z.array(Speaker),
    categories: zod_1.z.array(Category),
    room: zod_1.z.string(),
});
exports.Sessions = zod_1.z.array(zod_1.z.object({
    groupId: zod_1.z.number().nullable(),
    groupName: zod_1.z.string().nullable(),
    sessions: zod_1.z.array(Session),
    isDefault: zod_1.z.boolean(),
}));
