"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionizeData = void 0;
const zod_1 = require("zod");
const QuestionAnswer = zod_1.z.object({
    questionId: zod_1.z.number().optional(),
    answerValue: zod_1.z.string().optional(),
});
const Session = zod_1.z.object({
    id: zod_1.z.string(),
    title: zod_1.z.string(),
    description: zod_1.z.string(),
    startsAt: zod_1.z.string(),
    endsAt: zod_1.z.string(),
    isServiceSession: zod_1.z.boolean(),
    isPlenumSession: zod_1.z.boolean(),
    speakers: zod_1.z.array(zod_1.z.string()),
    categoryItems: zod_1.z.array(zod_1.z.number()),
    questionAnswers: zod_1.z.array(QuestionAnswer),
    roomId: zod_1.z.number(),
    liveUrl: zod_1.z.string().nullable(),
    recordingUrl: zod_1.z.string().nullable(),
    status: zod_1.z.string(),
    isInformed: zod_1.z.boolean(),
    isConfirmed: zod_1.z.boolean(),
});
const Link = zod_1.z.object({
    title: zod_1.z.string().optional(),
    url: zod_1.z.string(),
    linkType: zod_1.z.string(),
});
const Speaker = zod_1.z.object({
    id: zod_1.z.string(),
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    fullName: zod_1.z.string(),
    bio: zod_1.z.string(),
    tagLine: zod_1.z.string(),
    profilePicture: zod_1.z.string(),
    isTopSpeaker: zod_1.z.boolean(),
    links: zod_1.z.array(Link),
    sessions: zod_1.z.array(zod_1.z.number()),
    categoryItems: zod_1.z.array(zod_1.z.number()),
    questionAnswers: zod_1.z.array(QuestionAnswer),
});
const Question = zod_1.z.object({
    id: zod_1.z.number(),
    question: zod_1.z.string(),
    questionType: zod_1.z.string(),
    sort: zod_1.z.number(),
});
const CategoryItem = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
});
const Category = zod_1.z.object({
    id: zod_1.z.number(),
    title: zod_1.z.string(),
    items: zod_1.z.array(CategoryItem),
    sort: zod_1.z.number(),
    type: zod_1.z.string(),
});
const Room = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    sort: zod_1.z.number(),
});
exports.SessionizeData = zod_1.z.object({
    sessions: zod_1.z.array(Session),
    speakers: zod_1.z.array(Speaker),
    questions: zod_1.z.array(Question),
    categories: zod_1.z.array(Category),
    rooms: zod_1.z.array(Room),
});
