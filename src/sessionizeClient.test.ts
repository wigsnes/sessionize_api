// sum.test.js
import { expect, test } from "vitest";
import { SessionizeClient } from "./sessionizeClient.js";

test("get all data", async () => {
  const { getAll } = SessionizeClient(process.env.SESSIONIZE_API_KEY!);

  const sessions = await getAll();

  expect(sessions).toBeTruthy();
});

test("get schedule", async () => {
  const { getScheduleGrid } = SessionizeClient(process.env.SESSIONIZE_API_KEY!);

  const scheduleGrid = await getScheduleGrid();

  expect(scheduleGrid).toBeTruthy();
});

test("get sessions", async () => {
  const { getSessions } = SessionizeClient(process.env.SESSIONIZE_API_KEY!);

  const sessions = await getSessions();

  expect(sessions).toBeTruthy();
});

test("get speakers", async () => {
  const { getSpeakers } = SessionizeClient(process.env.SESSIONIZE_API_KEY!);

  const speakers = await getSpeakers();

  expect(speakers).toBeTruthy();
});

test("get speaker wall", async () => {
  const { getSpeakerWall } = SessionizeClient(process.env.SESSIONIZE_API_KEY!);

  const sessions = await getSpeakerWall();

  expect(sessions).toBeTruthy();
});
