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
  const HOME_GA: IQuestion = merge(
    {
      branch:            HOME_BRANCH,
      entryRequirements: [
        {
          explanation: 'Disaster affected home',
          responses:   [
            AFFECTED_HOME,
            PRIMARY_RESIDENCE,
            {
              answers:  [OWN],
              question: HOME_B,
            },
            {
              answers:  [YES],
              question: HOME_FA,
            },
          ],
        },
      ],
      id:      'HOME_GA',
      section: { id: 'introduction' },
      type:    QUESTION_TYPE.NUMBER,
    },
    json.HOME_GA,
  ) as IQuestion;

  const HOME_GB: IQuestion = merge(
    {
      branch:            HOME_BRANCH,
      entryRequirements: [
        {
          explanation: 'Disaster affected home',
          responses:   [
            AFFECTED_HOME,
            PRIMARY_RESIDENCE,
            {
              answers:  [RENT],
              question: HOME_B,
            },
            {
              answers:  [YES],
              question: HOME_FB,
            },
          ],
        },
      ],
      id:      'HOME_GB',
      section: { id: 'introduction' },
      type:    QUESTION_TYPE.NUMBER,
    },
    json.HOME_GB,
  ) as IQuestion;

  /**
   * Home: people living at home
   */
  const HOME_HA: IQuestion = merge(
    {
      branch:            HOME_BRANCH,
      entryRequirements: [
        {
          explanation: 'Disaster affected home',
          responses:   [
            AFFECTED_HOME,
            PRIMARY_RESIDENCE,
            {
              answers:  [OWN],
              question: HOME_B,
            },
            {
              answers:  [YES],
              question: HOME_FA,
            },
          ],
        },
      ],
      id:      'HOME_HA',
      section: { id: 'introduction' },
      type:    QUESTION_TYPE.NUMBER,
    },
    json.HOME_HA,
  ) as IQuestion;

  const HOME_HB: IQuestion = merge(
    {
      branch:            HOME_BRANCH,
      entryRequirements: [
        {
          explanation: 'Disaster affected home',
          responses:   [
            AFFECTED_HOME,
            PRIMARY_RESIDENCE,
            {
              answers:  [RENT],
              question: HOME_B,
            },
            {
              answers:  [YES],
              question: HOME_FB,
            },
          ],
        },
      ],
      id:      'HOME_HB',
      section: { id: 'introduction' },
      type:    QUESTION_TYPE.NUMBER,
    },
    json.HOME_HB,
  ) as IQuestion;

  /**
   * Home: people depending on income
   */
  const HOME_IA: IQuestion = merge(
    {
      branch:            HOME_BRANCH,
      entryRequirements: [
        {
          explanation: 'Disaster affected home',
          responses:   [
            AFFECTED_HOME,
            PRIMARY_RESIDENCE,
            {
              answers:  [OWN],
              question: HOME_B,
            },
            {
              answers:  [YES],
              question: HOME_FA,
            },
          ],
        },
      ],
      id:      'HOME_IA',
      section: { id: 'introduction' },
      type:    QUESTION_TYPE.NUMBER,
    },
    json.HOME_IA,
  ) as IQuestion;

  const HOME_IB: IQuestion = merge(
    {
      branch:            HOME_BRANCH,
      entryRequirements: [
        {
          explanation: 'Disaster affected home',
          responses:   [
            AFFECTED_HOME,
            PRIMARY_RESIDENCE,
            {
              answers:  [RENT],
              question: HOME_B,
            },
            {
              answers:  [YES],
              question: HOME_FB,
            },
          ],
        },
      ],
      id:      'HOME_IB',
      section: { id: 'introduction' },
      type:    QUESTION_TYPE.NUMBER,
    },
    json.HOME_IB,
  ) as IQuestion;

  /**
   * Home: income
   */
  const HOME_JA: IQuestion = merge(
    {
      branch:            HOME_BRANCH,
      entryRequirements: [
        {
          explanation: 'Disaster affected home',
          responses:   [
            AFFECTED_HOME,
            PRIMARY_RESIDENCE,
            {
              answers:  [OWN],
              question: HOME_B,
            },
            {
              answers:  [YES],
              question: HOME_FA,
            },
          ],
        },
      ],
      id:      'HOME_JA',
      section: { id: 'introduction' },
      type:    QUESTION_TYPE.NUMBER,
    },
    json.HOME_JA,
  ) as IQuestion;

  const HOME_JB: IQuestion = merge(
    {
      branch:            HOME_BRANCH,
      entryRequirements: [
        {
          explanation: 'Disaster affected home',
          responses:   [
            AFFECTED_HOME,
            PRIMARY_RESIDENCE,
            {
              answers:  [RENT],
              question: HOME_B,
            },
            {
              answers:  [YES],
              question: HOME_FB,
            },
          ],
        },
      ],
      id:      'HOME_JB',
      section: { id: 'introduction' },
      type:    QUESTION_TYPE.NUMBER,
    },
    json.HOME_JB,
  ) as IQuestion;

  /**
   * Home: debt
   */
  const HOME_KA: IQuestion = merge(
    {
      branch:            HOME_BRANCH,
      entryRequirements: [
        {
          explanation: 'Disaster affected home',
          responses:   [
            AFFECTED_HOME,
            PRIMARY_RESIDENCE,
            {
              answers:  [OWN],
              question: HOME_B,
            },
            {
              answers:  [YES],
              question: HOME_FA,
            },
          ],
        },
      ],
      id:      'HOME_KA',
      section: { id: 'introduction' },
      type:    QUESTION_TYPE.NUMBER,
    },
    json.HOME_KA,
  ) as IQuestion;

  const HOME_KB: IQuestion = merge(
    {
      branch:            HOME_BRANCH,
      entryRequirements: [
        {
          explanation: 'Disaster affected home',
          responses:   [
            AFFECTED_HOME,
            PRIMARY_RESIDENCE,
            {
              answers:  [RENT],
              question: HOME_B,
            },
            {
              answers:  [YES],
              question: HOME_FB,
            },
          ],
        },
      ],
      id:      'HOME_KB',
      section: { id: 'introduction' },
      type:    QUESTION_TYPE.NUMBER,
    },
    json.HOME_KB,
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
    HOME_GA,
    HOME_GB,
    HOME_HA,
    HOME_HB,
    HOME_IA,
    HOME_IB,
    HOME_JA,
    HOME_JB,
    HOME_KA,
    HOME_KB,
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
    HOME_GA,
    HOME_GB,
    HOME_HA,
    HOME_HB,
    HOME_IA,
    HOME_IB,
    HOME_JA,
    HOME_JB,
    HOME_KA,
    HOME_KB,
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
      HOME_GA,
      HOME_GB,
      HOME_HA,
      HOME_HB,
      HOME_IA,
      HOME_IB,
      HOME_JA,
      HOME_JB,
      HOME_KA,
      HOME_KB,
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
