import { z } from "zod";
import { SpeakerWalls } from "../types";

export const SpeakerWallSchema = z.array(
  z.object({
    id: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    tagLine: z.string(),
    profilePicture: z.string(),
    isTopSpeaker: z.boolean(),
  })
) satisfies z.ZodType<SpeakerWalls>;
