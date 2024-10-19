// sum.test.js
import { expect, test } from "vitest";
import { SessionizeClient } from "./sessionizeClient.js";

test("get all data", async () => {
  const { getAll } = SessionizeClient(process.env.SESSIONIZE_API_KEY!);

  const sessions = await getAll();

  expect(sessions).toBeTruthy();
});
