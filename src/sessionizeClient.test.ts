// sum.test.js
import { expect, test } from "vitest";
import { SessionizeClient } from "./sessionizeClient";
import { SessionizeData } from "../types/sessionize";
import { Schedule } from "../types/Schedule";
import { Sessions } from "../types/sessions";
import { Speakers } from "../types/speakers";
import { SpeakerWall } from "../types/speakerWall";

test("get all data", async () => {
  const { getAll } = SessionizeClient(process.env.SESSIONIZE_API_KEY!);

  const sessions = await getAll();
  expect(() => SessionizeData.parse(sessions)).not.toThrowError();
});

test("get schedule", async () => {
  const { getScheduleGrid } = SessionizeClient(process.env.SESSIONIZE_API_KEY!);

  const scheduleGrid = await getScheduleGrid();

  expect(() => Schedule.parse(scheduleGrid)).not.toThrowError();
});

test("get sessions", async () => {
  const { getSessions } = SessionizeClient(process.env.SESSIONIZE_API_KEY!);

  const sessions = await getSessions();

  expect(() => Sessions.parse(sessions)).not.toThrowError();
});

test("get speakers", async () => {
  const { getSpeakers } = SessionizeClient(process.env.SESSIONIZE_API_KEY!);

  const speakers = await getSpeakers();

  expect(() => Speakers.parse(speakers)).not.toThrowError();
});

test("get speaker wall", async () => {
  const { getSpeakerWall } = SessionizeClient(process.env.SESSIONIZE_API_KEY!);

  const speakerWall = await getSpeakerWall();

  expect(() => SpeakerWall.parse(speakerWall)).not.toThrowError();
});
