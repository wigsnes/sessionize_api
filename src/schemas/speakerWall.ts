import { z } from 'zod';
import type { SpeakersWall, SpeakerWallItem } from '../types/index.js';

export const SpeakerWallItemSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  tagLine: z.string(),
  profilePicture: z.string(),
  isTopSpeaker: z.boolean(),
}) satisfies z.ZodType<SpeakerWallItem>;

export const SpeakersWallSchema = z.array(
  SpeakerWallItemSchema,
) satisfies z.ZodType<SpeakersWall>;
