import { expect, test } from "vitest";
import { SessionizeClient } from "./sessionizeClient";
import {
  ScheduleSchema,
  SessionizeAllSchema,
  SessionsSchema,
  SpeakersSchema,
  SpeakerWallSchema,
} from "../types";

test("get all data", async () => {
  const { getAll } = SessionizeClient(process.env.SESSIONIZE_API_KEY!);

  const sessions = await getAll();
  expect(() => SessionizeAllSchema.parse(sessions)).not.toThrowError();
});

test("get schedule", async () => {
  const { getScheduleGrid } = SessionizeClient(process.env.SESSIONIZE_API_KEY!);

  const scheduleGrid = await getScheduleGrid();

  expect(() => ScheduleSchema.parse(scheduleGrid)).not.toThrowError();
});

test("get sessions", async () => {
  const { getSessions } = SessionizeClient(process.env.SESSIONIZE_API_KEY!);

  const sessions = await getSessions();

  expect(() => SessionsSchema.parse(sessions)).not.toThrowError();
});

test("get speakers", async () => {
  const { getSpeakers } = SessionizeClient(process.env.SESSIONIZE_API_KEY!);

  const speakers = await getSpeakers();

  expect(() => SpeakersSchema.parse(speakers)).not.toThrowError();
});

test("get speaker wall", async () => {
  const { getSpeakerWall } = SessionizeClient(process.env.SESSIONIZE_API_KEY!);

  const speakerWall = await getSpeakerWall();

  expect(() => SpeakerWallSchema.parse(speakerWall)).not.toThrowError();
});
