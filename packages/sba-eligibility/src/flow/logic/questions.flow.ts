/*
  eslint-disable max-len,
  sonarjs/no-duplicate-string,
 */
import { merge }                             from 'lodash';
import { QUESTION_TYPE, IQuestion, IBranch } from '@usds.gov/questionable-react-component';
import {
  HOME,
  OWN,
  RENT,
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
          explanation: 'Disaster affected home',
          responses:   [AFFECTED_HOME],
        },
      ],
      id:      'HOME_C',
      section: { id: 'introduction' },
      type:    QUESTION_TYPE.MULTIPLE_CHOICE,
    },
    json.HOME_C,
  ) as IQuestion;

  const PRIMARY_RESIDENCE = {
    answers:  [YES],
    question: HOME_C,
  };

  /**
   * Home: zip code
   */
  const HOME_D: IQuestion = merge(
    {
      branch:            HOME_BRANCH,
      entryRequirements: [
        {
          explanation: 'Disaster affected home',
          responses:   [
            AFFECTED_HOME,
            PRIMARY_RESIDENCE,
          ],
        },
      ],
      id:      'HOME_D',
      section: { id: 'introduction' },
      type:    QUESTION_TYPE.ZIP,
    },
    json.HOME_D,
  ) as IQuestion;

  /**
   * Home: disaster events
   */
  const HOME_E: IQuestion = merge(
    {
      branch:            HOME_BRANCH,
      entryRequirements: [
        {
          explanation: 'Disaster affected home',
          responses:   [
            AFFECTED_HOME,
            PRIMARY_RESIDENCE,
          ],
        },
      ],
      id:      'HOME_E',
      section: { id: 'introduction' },
      type:    QUESTION_TYPE.MULTIPLE_CHOICE,
    },
    json.HOME_E,
  ) as IQuestion;

  /**
   * Home: loan usage - own
   */
  const HOME_FA: IQuestion = merge(
    {
      branch:            HOME_BRANCH,
      entryRequirements: [
        {
          explanation: 'Disaster affected home - own',
          responses:   [
            AFFECTED_HOME,
            PRIMARY_RESIDENCE,
            {
              answers:  [OWN],
              question: HOME_B,
            },
          ],
        },
      ],
      id:      'HOME_FA',
      section: { id: 'introduction' },
      type:    QUESTION_TYPE.MULTIPLE_CHOICE,
    },
    json.HOME_FA,
  ) as IQuestion;

  /**
   * Home: loan usage - rent
   */
  const HOME_FB: IQuestion = merge(
    {
      branch:            HOME_BRANCH,
      entryRequirements: [
        {
          explanation: 'Disaster affected home - rent',
          responses:   [
            AFFECTED_HOME,
            PRIMARY_RESIDENCE,
            {
              answers:  [RENT],
              question: HOME_B,
            },
          ],
        },
      ],
      id:      'HOME_FB',
      section: { id: 'introduction' },
      type:    QUESTION_TYPE.MULTIPLE_CHOICE,
    },
    json.HOME_FB,
  ) as IQuestion;

  /**
   * Home: age
   */
  const HOME_G: IQuestion = merge(
    {
      branch:            HOME_BRANCH,
      entryRequirements: [
        {
          explanation: 'Disaster affected home',
          responses:   [
            AFFECTED_HOME,
            PRIMARY_RESIDENCE,
          ],
        },
      ],
      id:      'HOME_G',
      section: { id: 'introduction' },
      type:    QUESTION_TYPE.NUMBER,
    },
    json.HOME_G,
  ) as IQuestion;

  /**
   * Home: people living at home
   */
  const HOME_H: IQuestion = merge(
    {
      branch:            HOME_BRANCH,
      entryRequirements: [
        {
          explanation: 'Disaster affected home',
          responses:   [
            AFFECTED_HOME,
            PRIMARY_RESIDENCE,
          ],
        },
      ],
      id:      'HOME_H',
      section: { id: 'introduction' },
      type:    QUESTION_TYPE.NUMBER,
    },
    json.HOME_H,
  ) as IQuestion;

  /**
   * Home: people depending on income
   */
  const HOME_I: IQuestion = merge(
    {
      branch:            HOME_BRANCH,
      entryRequirements: [
        {
          explanation: 'Disaster affected home',
          responses:   [
            AFFECTED_HOME,
            PRIMARY_RESIDENCE,
          ],
        },
      ],
      id:      'HOME_I',
      section: { id: 'introduction' },
      type:    QUESTION_TYPE.NUMBER,
    },
    json.HOME_I,
  ) as IQuestion;

  /**
   * Home: income
   */
  const HOME_J: IQuestion = merge(
    {
      branch:            HOME_BRANCH,
      entryRequirements: [
        {
          explanation: 'Disaster affected home',
          responses:   [
            AFFECTED_HOME,
            PRIMARY_RESIDENCE,
          ],
        },
      ],
      id:      'HOME_J',
      section: { id: 'introduction' },
      type:    QUESTION_TYPE.NUMBER,
    },
    json.HOME_J,
  ) as IQuestion;

  /**
   * Home: debt
   */
  const HOME_K: IQuestion = merge(
    {
      branch:            HOME_BRANCH,
      entryRequirements: [
        {
          explanation: 'Disaster affected home',
          responses:   [
            AFFECTED_HOME,
            PRIMARY_RESIDENCE,
          ],
        },
      ],
      id:      'HOME_K',
      section: { id: 'introduction' },
      type:    QUESTION_TYPE.NUMBER,
    },
    json.HOME_K,
  ) as IQuestion;

  /**
   * Map of questions for use elsewhere
   */
  const questionMap = {
    A,
    HOME_B,
    HOME_C,
    HOME_D,
    HOME_E,
    HOME_FA,
    HOME_FB,
    HOME_G,
    HOME_H,
    HOME_I,
    HOME_J,
    HOME_K,
  };

  /**
   * All of the questions in order
   */
  const questionList: IQuestion[] = [
    A,
    HOME_B,
    HOME_C,
    HOME_D,
    HOME_E,
    HOME_FA,
    HOME_FB,
    HOME_G,
    HOME_H,
    HOME_I,
    HOME_J,
    HOME_K,
  ];

  // Note: the order should match the logical order
  // We're creating a new reference in order to prevent circular references
  const homeBranch = {
    ...HOME_BRANCH,
    questions: [
      A,
      HOME_B,
      HOME_C,
      HOME_D,
      HOME_E,
      HOME_FA,
      HOME_FB,
      HOME_G,
      HOME_H,
      HOME_I,
      HOME_J,
      HOME_K,
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
