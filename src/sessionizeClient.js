"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionizeClient = void 0;
const Schedule_1 = require("../types/Schedule");
const sessionize_1 = require("../types/sessionize");
const sessions_1 = require("../types/sessions");
const speakers_1 = require("../types/speakers");
const speakerWall_1 = require("../types/speakerWall");
const SessionizeClient = (key) => {
    return {
        getAll: () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const response = yield fetch(`https://sessionize.com/api/v2/${key}/view/All`);
                const data = yield response.json();
                return sessionize_1.SessionizeData.parse(data);
            }
            catch (e) {
                return e;
            }
        }),
        getScheduleGrid: () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const response = yield fetch(`https://sessionize.com/api/v2/${key}/view/GridSmart`);
                const data = yield response.json();
                return Schedule_1.Schedule.parse(data);
            }
            catch (e) {
                throw e;
            }
        }),
        getSessions: () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const response = yield fetch(`https://sessionize.com/api/v2/${key}/view/Sessions`);
                const data = yield response.json();
                return sessions_1.Sessions.parse(data);
            }
            catch (e) {
                throw e;
            }
        }),
        getSpeakers: () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const response = yield fetch(`https://sessionize.com/api/v2/${key}/view/Speakers`);
                const data = yield response.json();
                return speakers_1.Speakers.parse(data);
            }
            catch (e) {
                throw e;
            }
        }),
        getSpeakerWall: () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const response = yield fetch(`https://sessionize.com/api/v2/${key}/view/SpeakerWall`);
                const data = yield response.json();
                return speakerWall_1.SpeakerWall.parse(data);
            }
            catch (e) {
                throw e;
            }
        }),
    };
};
exports.SessionizeClient = SessionizeClient;
