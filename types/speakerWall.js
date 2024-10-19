"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeakerWall = void 0;
const zod_1 = require("zod");
exports.SpeakerWall = zod_1.z.array(zod_1.z.object({
    id: zod_1.z.string(),
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    tagLine: zod_1.z.string(),
    profilePicture: zod_1.z.string(),
    isTopSpeaker: zod_1.z.boolean(),
}));
