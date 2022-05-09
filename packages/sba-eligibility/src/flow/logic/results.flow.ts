/*
  eslint-disable max-len,
  sonarjs/no-duplicate-string,
  camelcase,
 */
import { merge }               from 'lodash';
import { IResult }             from '@usds.gov/questionable-react-component';
import {
  YES,
  LEARN_HOW_TO_APPLY_ACTION,
} from '../lib/constants';
import { TQuestionMap, TResultMap } from '../lib/contentMap';

// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types
export const buildResults = (json: TResultMap, questionMap: TQuestionMap) => {
  const {
    HOME_C,
    HOME_E,
    HOME_FA,
    HOME_FB,
  } = questionMap;

  const ELIGIBILITY_REQUIREMENTS_A = {
    responses: [
      { answers: [YES], question: HOME_C },
      { answers: [{ id: '0' }, { id: '1' }], question: HOME_E },
      { answers: [YES], question: HOME_FA },
    ],
  };

  const ELIGIBILITY_REQUIREMENTS_B = {
    responses: [
      { answers: [YES], question: HOME_C },
      { answers: [{ id: '0' }, { id: '1' }], question: HOME_E },
      { answers: [YES], question: HOME_FB },
    ],
  };

  /**
   * Home - primary residence
   */
  const r1a: IResult = merge(
    {
      action:       LEARN_HOW_TO_APPLY_ACTION,
      id:           'r1a',
      requirements: [ELIGIBILITY_REQUIREMENTS_A],
    },
    json.r1a,
  ) as IResult;

  const r1b: IResult = merge(
    {
      action:       LEARN_HOW_TO_APPLY_ACTION,
      id:           'r1b',
      requirements: [ELIGIBILITY_REQUIREMENTS_B],
    },
    json.r1b,
  ) as IResult;

  /**
   * Home - area offering support
   */
  const r2a: IResult = merge(
    {
      action:       LEARN_HOW_TO_APPLY_ACTION,
      id:           'r2a',
      requirements: [ELIGIBILITY_REQUIREMENTS_A],
    },
    json.r2a,
  ) as IResult;

  const r2b: IResult = merge(
    {
      action:       LEARN_HOW_TO_APPLY_ACTION,
      id:           'r2b',
      requirements: [ELIGIBILITY_REQUIREMENTS_B],
    },
    json.r2b,
  ) as IResult;

  /**
   * Home - own physical damage
   */
  const r3a: IResult = merge(
    {
      action:       LEARN_HOW_TO_APPLY_ACTION,
      id:           'r3a',
      requirements: [ELIGIBILITY_REQUIREMENTS_A],
    },
    json.r3a,
  ) as IResult;

  const r3b: IResult = merge(
    {
      action:       LEARN_HOW_TO_APPLY_ACTION,
      id:           'r3b',
      requirements: [ELIGIBILITY_REQUIREMENTS_B],
    },
    json.r3b,
  ) as IResult;

  /**
   * Home - borrow money
   */
  const r4a: IResult = merge(
    {
      action:       LEARN_HOW_TO_APPLY_ACTION,
      id:           'r4a',
      requirements: [ELIGIBILITY_REQUIREMENTS_A],
    },
    json.r4a,
  ) as IResult;

  const r4b: IResult = merge(
    {
      action:       LEARN_HOW_TO_APPLY_ACTION,
      id:           'r4b',
      requirements: [ELIGIBILITY_REQUIREMENTS_B],
    },
    json.r4b,
  ) as IResult;

  /**
   * Home - repay money
   */
  const r5a: IResult = merge(
    {
      action:       LEARN_HOW_TO_APPLY_ACTION,
      id:           'r5a',
      requirements: [ELIGIBILITY_REQUIREMENTS_A],
    },
    json.r5a,
  ) as IResult;

  const r5b: IResult = merge(
    {
      action:       LEARN_HOW_TO_APPLY_ACTION,
      id:           'r5b',
      requirements: [ELIGIBILITY_REQUIREMENTS_B],
    },
    json.r5b,
  ) as IResult;

  /**
   * All possible results with their requirements
   */
  const resultList: IResult[] = [
    r1a,
    r1b,
    r2a,
    r2b,
    r3a,
    r3b,
    r4a,
    r4b,
    r5a,
    r5b,
  ];

  const resultMap = {
    r1a,
    r1b,
    r2a,
    r2b,
    r3a,
    r3b,
    r4a,
    r4b,
    r5a,
    r5b,
  };

  return {
    list: resultList,
    map:  resultMap,
  };
};
