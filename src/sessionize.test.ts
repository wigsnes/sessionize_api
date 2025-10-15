import { expect, test, describe, beforeAll, vi } from 'vitest';
import {
  ScheduleSchema,
  SessionizeAllSchema,
  SessionsSchema,
  SpeakersSchema,
  SpeakersWallSchema,
} from './schemas/index.js';
import {
  getAll,
  getScheduleGrid,
  getSessions,
  getSpeakers,
  getSpeakerWall,
} from './sessionize.js';

describe('Sessionize API', () => {
  let apiKey: string;

  beforeAll(() => {
    apiKey = process.env.SESSIONIZE_API_KEY!;
    if (!apiKey) {
      throw new Error('SESSIONIZE_API_KEY environment variable is required');
    }
  });

  test('get all data', async () => {
    const data = await getAll(apiKey);

    expect(data).toBeDefined();
    expect(data.sessions).toBeInstanceOf(Array);
    expect(data.speakers).toBeInstanceOf(Array);
    expect(data.questions).toBeInstanceOf(Array);
    expect(data.categories).toBeInstanceOf(Array);
    expect(data.rooms).toBeInstanceOf(Array);

    // Test schema validation
    const result = SessionizeAllSchema.safeParse(data);
    expect(result.success).toBe(true);
  });

  test('get schedule', async () => {
    const scheduleGrid = await getScheduleGrid(apiKey);

    expect(scheduleGrid).toBeDefined();
    expect(Array.isArray(scheduleGrid)).toBe(true);

    // Test schema validation
    const result = ScheduleSchema.safeParse(scheduleGrid);
    expect(result.success).toBe(true);
  });

  test('get sessions', async () => {
    const sessions = await getSessions(apiKey);

    expect(sessions).toBeDefined();
    expect(Array.isArray(sessions)).toBe(true);

    // Test schema validation
    const result = SessionsSchema.safeParse(sessions);
    expect(result.success).toBe(true);
  });

  test('get speakers', async () => {
    const speakers = await getSpeakers(apiKey);

    expect(speakers).toBeDefined();
    expect(Array.isArray(speakers)).toBe(true);

    // Test schema validation
    const result = SpeakersSchema.safeParse(speakers);
    expect(result.success).toBe(true);
  });

  test('get speaker wall', async () => {
    const speakersWall = await getSpeakerWall(apiKey);

    expect(speakersWall).toBeDefined();
    expect(Array.isArray(speakersWall)).toBe(true);

    // Test schema validation
    const result = SpeakersWallSchema.safeParse(speakersWall);
    expect(result.success).toBe(true);
  });
});

describe('API Error Handling', () => {
  test('should handle invalid API key gracefully', async () => {
    await expect(getAll('invalid-key')).rejects.toThrow();
  });

  test('should handle network errors gracefully', async () => {
    // Mock fetch to simulate network error
    const originalFetch = global.fetch;
    global.fetch = vi.fn().mockRejectedValue(new Error('Network error'));

    await expect(getAll('test-key')).rejects.toThrow('Network error');

    // Restore original fetch
    global.fetch = originalFetch;
  });
});
