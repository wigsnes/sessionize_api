import { z } from "zod";
import {
  ScheduleSchema,
  SessionizeAllSchema,
  SessionsSchema,
  SpeakersSchema,
  SpeakerWallSchema,
} from "../schemas";

export type SessionizeKey = string;
export type SessionizeAll = z.infer<typeof SessionizeAllSchema>;
export type Schedule = z.infer<typeof ScheduleSchema>;
export type Sessions = z.infer<typeof SessionsSchema>;
export type Speakers = z.infer<typeof SpeakersSchema>;
export type SpeakerWall = z.infer<typeof SpeakerWallSchema>;
