import { expect, test } from "vitest";
import {
  ScheduleSchema,
  SessionizeAllSchema,
  SessionsSchema,
  SpeakersSchema,
  SpeakersWallSchema,
} from "../schemas";
import {
  getAll,
  getScheduleGrid,
  getSessions,
  getSpeakers,
  getSpeakerWall,
} from "./sessionize";

test("get all data", async () => {
  const sessions = await getAll(process.env.SESSIONIZE_API_KEY!);
  expect(() => SessionizeAllSchema.parse(sessions)).not.toThrowError();
});

test("get schedule", async () => {
  const scheduleGrid = await getScheduleGrid(process.env.SESSIONIZE_API_KEY!);

  expect(() => ScheduleSchema.parse(scheduleGrid)).not.toThrowError();
});

test("get sessions", async () => {
  const sessions = await getSessions(process.env.SESSIONIZE_API_KEY!);

  expect(() => SessionsSchema.parse(sessions)).not.toThrowError();
});

test("get speakers", async () => {
  const speakers = await getSpeakers(process.env.SESSIONIZE_API_KEY!);

  expect(() => SpeakersSchema.parse(speakers)).not.toThrowError();
});

test("get speaker wall", async () => {
  const speakersWall = await getSpeakerWall(process.env.SESSIONIZE_API_KEY!);

  expect(() => SpeakersWallSchema.parse(speakersWall)).not.toThrowError();
});
