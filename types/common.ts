export type CategoryItem = {
  id: number;
  name: string;
};

export type CagegoryGroup = {
  id: number;
  name: string;
  categoryItems: CategoryItem[];
  sort: number;
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
