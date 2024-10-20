import {
  Schedule,
  ScheduleSchema,
  SessionizeAll,
  SessionizeAllSchema,
  Sessions,
  SessionsSchema,
  Speakers,
  SpeakersSchema,
  SpeakerWall,
  SpeakerWallSchema,
} from "../types";
import { SessionizeV2 } from "./api/v2/sessionize";

const SafeParse = <T>(data: any, schema: any): T => {
  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    console.error(parsed.error);
    return data as T;
  }
  return parsed.data as T;
};

export type SessionizeKey = string;

export const SessionizeClient = (key: SessionizeKey) => {
  return {
    getAll: async () => {
      try {
        const response = await fetch(SessionizeV2.getAll(key));
        const data = await response.json();
        return SafeParse<SessionizeAll>(data, SessionizeAllSchema);
      } catch (e) {
        throw e;
      }
    },
    getScheduleGrid: async () => {
      try {
        const response = await fetch(SessionizeV2.getScheduleGrid(key));
        const data = await response.json();
        return SafeParse<Schedule>(data, ScheduleSchema);
      } catch (e) {
        throw e;
      }
    },
    getSessions: async () => {
      try {
        const response = await fetch(SessionizeV2.getSessions(key));
        const data = await response.json();
        return SafeParse<Sessions>(data, SessionsSchema);
      } catch (e) {
        throw e;
      }
    },
    getSpeakers: async () => {
      try {
        const response = await fetch(SessionizeV2.getSpeakers(key));
        const data = await response.json();
        return SafeParse<Speakers>(data, SpeakersSchema);
      } catch (e) {
        throw e;
      }
    },
    getSpeakerWall: async () => {
      try {
        const response = await fetch(SessionizeV2.getSpeakerWall(key));
        const data = await response.json();
        return SafeParse<SpeakerWall>(data, SpeakerWallSchema);
      } catch (e) {
        throw e;
      }
    },
  };
};
