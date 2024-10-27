export type CategoryItem = {
  id: number;
  name: string;
};

export type QuestionAnswer = {
  questionId?: number | null;
  answerValue?: string | null;
};

export type Link = {
  title?: string | null;
  url: string;
  linkType: string;
};

export type SpeakerItem = {
  id: string;
  name: string;
};
