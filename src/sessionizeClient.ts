import { Schedule } from "../types/Schedule";
import { SessionizeData } from "../types/sessionize";
import { Sessions } from "../types/sessions";
import { Speakers } from "../types/speakers";
import { SpeakerWall } from "../types/speakerWall";

export type SessionizeKey = string;

export const SessionizeClient = (key: SessionizeKey) => {
  return {
    getAll: async () => {
      try {
        const response = await fetch(
          `https://sessionize.com/api/v2/${key}/view/All`
        );
        const data = await response.json();
        return SessionizeData.parse(data) as SessionizeData;
      } catch (e) {
        return e;
      }
    },
    getScheduleGrid: async () => {
      try {
        const response = await fetch(
          `https://sessionize.com/api/v2/${key}/view/GridSmart`
        );
        const data = await response.json();
        return Schedule.parse(data) as Schedule;
      } catch (e) {
        throw e;
      }
    },
    getSessions: async () => {
      try {
        const response = await fetch(
          `https://sessionize.com/api/v2/${key}/view/Sessions`
        );
        const data = await response.json();
        return Sessions.parse(data) as Sessions;
      } catch (e) {
        throw e;
      }
    },
    getSpeakers: async () => {
      try {
        const response = await fetch(
          `https://sessionize.com/api/v2/${key}/view/Speakers`
        );
        const data = await response.json();
        return Speakers.parse(data) as Speakers;
      } catch (e) {
        throw e;
      }
    },
    getSpeakerWall: async () => {
      try {
        const response = await fetch(
          `https://sessionize.com/api/v2/${key}/view/SpeakerWall`
        );
        const data = await response.json();
        return SpeakerWall.parse(data) as SpeakerWall;
      } catch (e) {
        throw e;
      }
    },
  };
};
