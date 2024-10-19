import { SessionizeData } from "../types/sessionize";

export type SessionizeKey = string;

export const SessionizeClient = (key: SessionizeKey) => {
  return {
    getAll: async () => {
      try {
        const response = await fetch(
          `https://sessionize.com/api/v2/${key}/view/All`
        );
        const data = await response.json();
        return data as SessionizeData;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
  };
};
