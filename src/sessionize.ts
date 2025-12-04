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

/**
 * Fetches all Sessionize data including sessions, speakers, and schedule information.
 * This is a comprehensive endpoint that returns all available data in a single request.
 *
 * @param key - Your Sessionize API key (found in your Sessionize event settings)
 * @returns Promise resolving to SessionizeAll object containing all event data
 * @throws Error if the HTTP request fails
 *
 * @example
 * ```typescript
 * import { getAll } from 'sessionize_api';
 * const allData = await getAll('your-api-key-here');
 * ```
 */
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

/**
 * Fetches the schedule grid data from Sessionize.
 * Returns schedule information organized in a grid format suitable for displaying event schedules.
 *
 * @param key - Your Sessionize API key
 * @returns Promise resolving to Schedules object containing schedule grid data
 * @throws Error if the HTTP request fails
 *
 * @example
 * ```typescript
 * import { getScheduleGrid } from 'sessionize_api';
 * const schedule = await getScheduleGrid('your-api-key-here');
 * ```
 */
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

/**
 * Fetches all sessions from Sessionize, organized by session groups.
 * Returns sessions grouped by categories or tracks as configured in Sessionize.
 *
 * @param key - Your Sessionize API key
 * @returns Promise resolving to SessionGroups array containing all sessions
 * @throws Error if the HTTP request fails
 *
 * @example
 * ```typescript
 * import { getSessions } from 'sessionize_api';
 * const sessions = await getSessions('your-api-key-here');
 * ```
 */
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

/**
 * Fetches all speakers from Sessionize.
 * Returns detailed information about all speakers including their sessions and profile data.
 *
 * @param key - Your Sessionize API key
 * @returns Promise resolving to Speakers array containing all speaker information
 * @throws Error if the HTTP request fails
 *
 * @example
 * ```typescript
 * import { getSpeakers } from 'sessionize_api';
 * const speakers = await getSpeakers('your-api-key-here');
 * ```
 */
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

/**
 * Fetches the speaker wall data from Sessionize.
 * Returns speaker information formatted for displaying a speaker wall/gallery view.
 *
 * @param key - Your Sessionize API key
 * @returns Promise resolving to SpeakersWall object containing speaker wall data
 * @throws Error if the HTTP request fails
 *
 * @example
 * ```typescript
 * import { getSpeakerWall } from 'sessionize_api';
 * const speakerWall = await getSpeakerWall('your-api-key-here');
 * ```
 */
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
