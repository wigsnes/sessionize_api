import { z } from "zod";

export const SpeakerWall = z.array(
  z.object({
    id: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    tagLine: z.string(),
    profilePicture: z.string(),
    isTopSpeaker: z.boolean(),
  })
);

export type SpeakerWall = z.infer<typeof SpeakerWall>;
