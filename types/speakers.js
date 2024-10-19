"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Speakers = void 0;
const zod_1 = require("zod");
const QuestionAnswer = zod_1.z.object({
    questionId: zod_1.z.number().optional(),
    answerValue: zod_1.z.string().optional(),
});
const Link = zod_1.z.object({
    title: zod_1.z.string().optional(),
    url: zod_1.z.string(),
    linkType: zod_1.z.string(),
});
const Item = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    sort: zod_1.z.number(),
});
const Category = zod_1.z.object({
    id: zod_1.z.number(),
    title: zod_1.z.string(),
    items: zod_1.z.array(Item),
    sort: zod_1.z.number(),
    type: zod_1.z.string(),
});
const Session = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
});
exports.Speakers = zod_1.z.array(zod_1.z.object({
    id: zod_1.z.string(),
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    fullName: zod_1.z.string(),
    bio: zod_1.z.string().nullable(),
    tagLine: zod_1.z.string(),
    profilePicture: zod_1.z.string().nullable(),
    isTopSpeaker: zod_1.z.boolean(),
    links: zod_1.z.array(Link),
    sessions: zod_1.z.array(Session),
    categories: zod_1.z.array(Category),
    questionAnswers: zod_1.z.array(QuestionAnswer),
}));
