import { ZodType } from "zod";
import {
  ScheduleSchema,
  SessionizeAllSchema,
  SessionsSchema,
  SpeakersSchema,
  SpeakerWallSchema,
} from "../schemas";
import { SessionizeV2 } from "./api/v2";
import {
  Schedule,
  SessionizeAll,
  SessionizeKey,
  Sessions,
  Speakers,
  SpeakerWall,
} from "../types";

const SafeParse = <T>(data: unknown, schema: ZodType): T => {
  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    console.error(parsed.error);
    return data as T;
  }
  return parsed.data as T;
};

export const getAll = async (key: SessionizeKey) => {
  try {
    const data = await fetch(SessionizeV2.getAll(key)).then((res) =>
      res.json()
    );
    return SafeParse<SessionizeAll>(data, SessionizeAllSchema);
  } catch (e) {
    throw e;
  }
};

export const getScheduleGrid = async (key: SessionizeKey) => {
  try {
    const data = await fetch(SessionizeV2.getScheduleGrid(key)).then((res) =>
      res.json()
    );
    return SafeParse<Schedule>(data, ScheduleSchema);
  } catch (e) {
    throw e;
  }
};

export const getSessions = async (key: SessionizeKey) => {
  try {
    const data = await fetch(SessionizeV2.getSessions(key)).then((res) =>
      res.json()
    );
    return SafeParse<Sessions>(data, SessionsSchema);
  } catch (e) {
    throw e;
  }
};

export const getSpeakers = async (key: SessionizeKey) => {
  try {
    const data = await fetch(SessionizeV2.getSpeakers(key)).then((res) =>
      res.json()
    );
    return SafeParse<Speakers>(data, SpeakersSchema);
  } catch (e) {
    throw e;
  }
};

export const getSpeakerWall = async (key: SessionizeKey) => {
  try {
    const data = await fetch(SessionizeV2.getSpeakerWall(key)).then((res) =>
      res.json()
    );
    return SafeParse<SpeakerWall>(data, SpeakerWallSchema);
  } catch (e) {
    throw e;
  }
};
