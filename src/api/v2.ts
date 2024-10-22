const SESSIONIZE_URL = "https://sessionize.com/api/v2";

export const SessionizeV2 = {
  getAll: (key: string) => `${SESSIONIZE_URL}/${key}/view/All`,
  getScheduleGrid: (key: string) => `${SESSIONIZE_URL}/${key}/view/GridSmart`,
  getSessions: (key: string) => `${SESSIONIZE_URL}/${key}/view/Sessions`,
  getSpeakers: (key: string) => `${SESSIONIZE_URL}/${key}/view/Speakers`,
  getSpeakerWall: (key: string) => `${SESSIONIZE_URL}/${key}/view/SpeakerWall`,
};
