/*
  eslint-disable max-len,
  sonarjs/no-duplicate-string,
 */
import { merge }                             from 'lodash';
import { QUESTION_TYPE, IQuestion, IBranch } from '@usds.gov/questionable-react-component';
import {
  HOME,
  YES,
} from '../lib/constants';
import { TQuestionMap } from '../lib/contentMap';

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

  const AFFECTED_HOME = {
    answers:  [HOME],
    question: A,
  };

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

  const NON_PROFIT_BRANCH: IBranch = {
    id:        '0',
    questions: [],
    title:     'Disaster affected non-profit',
  };

  /**
   * Home: Own or rent
  */
  const HOME_B: IQuestion = merge(
    {
      branch:            HOME_BRANCH,
      entryRequirements: [
        {
          explanation: 'Disaster affected home',
          responses:   [AFFECTED_HOME],
        },
      ],
      id:      'HOME_B',
      section: { id: 'introduction' },
      type:    QUESTION_TYPE.MULTIPLE_CHOICE,
    },
    json.HOME_B,
  ) as IQuestion;

  /**
   * Home: primary home
   */
  const HOME_C: IQuestion = merge(
    {
      branch:            HOME_BRANCH,
      entryRequirements: [
        {
          explanation: 'Own home',
          responses:   [
            AFFECTED_HOME,
            {
              answers:  [YES],
              question: HOME_B,
            },
          ],
        },
      ],
      id:      'HOME_C',
      section: { id: 'introduction' },
      type:    QUESTION_TYPE.MULTIPLE_CHOICE,
    },
    json.HOME_C,
  ) as IQuestion;

  /**
   * Map of questions for use elsewhere
   */
  const questionMap = {
    A,
    HOME_B,
    HOME_C,
  };

  /**
   * All of the questions in order
   */
  const questionList: IQuestion[] = [
    A,
    HOME_B,
    HOME_C,
  ];

  // Note: the order should match the logical order
  // We're creating a new reference in order to prevent circular references
  const homeBranch = {
    ...HOME_BRANCH,
    questions: [
      A,
      HOME_B,
      HOME_C,
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
  const nonProfitBranch = {
    ...NON_PROFIT_BRANCH,
    questions: [
      A,
    ].map((q) => ({ id: q.id })),
  };

  return {
    branches: [homeBranch, businessBranch, nonProfitBranch],
    list:     questionList,
    map:      questionMap,
  };
};
