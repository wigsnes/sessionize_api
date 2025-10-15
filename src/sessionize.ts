import type { ZodType } from 'zod';
import {
  ScheduleSchema,
  SessionizeAllSchema,
  SessionsSchema,
  SpeakersSchema,
  SpeakersWallSchema,
} from './schemas/index.js';
import { SessionizeV2 } from './api/v2.js';
import type {
  SessionizeAll,
  SessionizeKey,
  SessionGroups,
  Speakers,
  Schedules,
  SpeakersWall,
} from './types/index.js';

const SafeParse = <T>(data: unknown, schema: ZodType): T => {
  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    console.warn('Schema validation failed:', parsed.error.issues);
    return data as T;
  }
  return parsed.data as T;
};

export const getAll = async (key: SessionizeKey) => {
  try {
    const response = await fetch(SessionizeV2.getAll(key));
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return SafeParse<SessionizeAll>(data, SessionizeAllSchema);
  } catch (e) {
    throw e;
  }
};

export const getScheduleGrid = async (key: SessionizeKey) => {
  try {
    const response = await fetch(SessionizeV2.getScheduleGrid(key));
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return SafeParse<Schedules>(data, ScheduleSchema);
  } catch (e) {
    throw e;
  }
};

export const getSessions = async (key: SessionizeKey) => {
  try {
    const response = await fetch(SessionizeV2.getSessions(key));
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return SafeParse<SessionGroups>(data, SessionsSchema);
  } catch (e) {
    throw e;
  }
};

export const getSpeakers = async (key: SessionizeKey) => {
  try {
    const response = await fetch(SessionizeV2.getSpeakers(key));
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return SafeParse<Speakers>(data, SpeakersSchema);
  } catch (e) {
    throw e;
  }
};

export const getSpeakerWall = async (key: SessionizeKey) => {
  try {
    const response = await fetch(SessionizeV2.getSpeakerWall(key));
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return SafeParse<SpeakersWall>(data, SpeakersWallSchema);
  } catch (e) {
    throw e;
  }
};
