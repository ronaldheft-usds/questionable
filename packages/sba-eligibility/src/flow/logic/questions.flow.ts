/*
  eslint-disable max-len,
  sonarjs/no-duplicate-string,
 */
import { merge }                             from 'lodash';
import { QUESTION_TYPE, IQuestion, IBranch } from '@usds.gov/questionable-react-component';
import { TQuestionMap }                      from '../lib/contentMap';

type Tq = {
    branches: {
        id: string;
        order?: number | undefined;
        questions: {
            id: string;
        }[];
        title?: string | undefined;
        type?: string | undefined;
    }[];
    list: IQuestion[];
    map: {
        [key: string]: IQuestion;
    };
};

export const buildQuestions = (json: TQuestionMap): Tq => {
  /**
   * Disaster affected
   */
  const A: IQuestion = merge(
    {
      id:      'A',
      section: { id: 'introduction' },
      type:    QUESTION_TYPE.MULTIPLE_CHOICE,
    },
    json.A,
  ) as IQuestion;

  const HOME_BRANCH: IBranch = {
    id:        '0',
    questions: [],
    title:     'Disaster affected home',
  };

  const BUSINESS_BRANCH: IBranch = {
    id:        '0',
    questions: [],
    title:     'Disaster affected business',
  };

  const NONPROFIT_BRANCH: IBranch = {
    id:        '0',
    questions: [],
    title:     'Disaster affected non-profit',
  };

  /**
   * Map of questions for use elsewhere
   */
  const questionMap = {
    A,
  };

  /**
   * All of the questions in order
   */
  const questionList: IQuestion[] = [
    A,
  ];

  // Note: the order should match the logical order
  // We're creating a new reference in order to prevent circular references
  const homeBranch = {
    ...HOME_BRANCH,
    questions: [
      A,
    ].map((q) => ({ id: q.id })),
  };

  // Note: the order should match the logical order
  // We're creating a new reference in order to prevent circular references
  const businessBranch = {
    ...BUSINESS_BRANCH,
    questions: [
      A,
    ].map((q) => ({ id: q.id })),
  };

  // Note: the order should match the logical order
  // We're creating a new reference in order to prevent circular references
  const nonprofitBranch = {
    ...NONPROFIT_BRANCH,
    questions: [
      A,
    ].map((q) => ({ id: q.id })),
  };

  return {
    branches: [homeBranch, businessBranch, nonprofitBranch],
    list:     questionList,
    map:      questionMap,
  };
};
