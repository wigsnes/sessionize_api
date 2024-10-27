export type SpeakerWallItem = {
  id: string;
  firstName: string;
  lastName: string;
  tagLine: string;
  profilePicture: string;
  isTopSpeaker: boolean;
};

export type SpeakersWall = SpeakerWallItem[];
