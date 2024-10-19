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
// sum.test.js
const vitest_1 = require("vitest");
const sessionizeClient_js_1 = require("./sessionizeClient.js");
(0, vitest_1.test)("get all data", () => __awaiter(void 0, void 0, void 0, function* () {
    const { getAll } = (0, sessionizeClient_js_1.SessionizeClient)(process.env.SESSIONIZE_API_KEY);
    const sessions = yield getAll();
    (0, vitest_1.expect)(sessions).toBeTruthy();
}));
(0, vitest_1.test)("get schedule", () => __awaiter(void 0, void 0, void 0, function* () {
    const { getScheduleGrid } = (0, sessionizeClient_js_1.SessionizeClient)(process.env.SESSIONIZE_API_KEY);
    const scheduleGrid = yield getScheduleGrid();
    (0, vitest_1.expect)(scheduleGrid).toBeTruthy();
}));
(0, vitest_1.test)("get sessions", () => __awaiter(void 0, void 0, void 0, function* () {
    const { getSessions } = (0, sessionizeClient_js_1.SessionizeClient)(process.env.SESSIONIZE_API_KEY);
    const sessions = yield getSessions();
    (0, vitest_1.expect)(sessions).toBeTruthy();
}));
(0, vitest_1.test)("get speakers", () => __awaiter(void 0, void 0, void 0, function* () {
    const { getSpeakers } = (0, sessionizeClient_js_1.SessionizeClient)(process.env.SESSIONIZE_API_KEY);
    const speakers = yield getSpeakers();
    (0, vitest_1.expect)(speakers).toBeTruthy();
}));
(0, vitest_1.test)("get speaker wall", () => __awaiter(void 0, void 0, void 0, function* () {
    const { getSpeakerWall } = (0, sessionizeClient_js_1.SessionizeClient)(process.env.SESSIONIZE_API_KEY);
    const sessions = yield getSpeakerWall();
    (0, vitest_1.expect)(sessions).toBeTruthy();
}));
