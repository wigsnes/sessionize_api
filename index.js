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
const SessionizeClient = (key) => {
    return {
        getSessions: () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield fetch(`https://sessionize.com/api/v2/${key}/view/sessions`);
            const data = yield response.json();
            return data;
        }),
    };
};
exports.SessionizeClient = SessionizeClient;
