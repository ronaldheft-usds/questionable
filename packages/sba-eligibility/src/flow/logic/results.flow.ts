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

  /**
   * Home - primary residence
   */
  const r1: IResult = merge(
    {
      action:       LEARN_HOW_TO_APPLY_ACTION,
      id:           'r1',
      requirements: [
        {
          responses: [
            { answers: [YES], question: HOME_C },
          ],
        },
      ],
    },
    json.r1,
  ) as IResult;

  /**
   * Home - area offering support
   */
  const r2: IResult = merge(
    {
      action:       LEARN_HOW_TO_APPLY_ACTION,
      id:           'r2',
      requirements: [
        {
          responses: [
            { answers: [YES], question: HOME_C },
            { answers: [{ id: '0' }, { id: '1' }], question: HOME_E },
          ],
        },
      ],
    },
    json.r2,
  ) as IResult;

  /**
   * Home - own physical damage
   */
  const r3a: IResult = merge(
    {
      action:       LEARN_HOW_TO_APPLY_ACTION,
      id:           'r3a',
      requirements: [
        {
          responses: [
            { answers: [YES], question: HOME_C },
            { answers: [{ id: '0' }, { id: '1' }], question: HOME_E },
            { answers: [YES], question: HOME_FA },
          ],
        },
      ],
    },
    json.r3a,
  ) as IResult;

  /**
   * Home - rent physical damage
   */
  const r3b: IResult = merge(
    {
      action:       LEARN_HOW_TO_APPLY_ACTION,
      id:           'r3b',
      requirements: [
        {
          responses: [
            { answers: [YES], question: HOME_C },
            { answers: [{ id: '0' }, { id: '1' }], question: HOME_E },
            { answers: [YES], question: HOME_FB },
          ],
        },
      ],
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
      requirements: [
        {
          responses: [
            { answers: [YES], question: HOME_C },
            { answers: [{ id: '0' }, { id: '1' }], question: HOME_E },
            { answers: [YES], question: HOME_FA },
          ],
        },
      ],
    },
    json.r4a,
  ) as IResult;

  /**
   * Home - borrow money
   */
  const r4b: IResult = merge(
    {
      action:       LEARN_HOW_TO_APPLY_ACTION,
      id:           'r4b',
      requirements: [
        {
          responses: [
            { answers: [YES], question: HOME_C },
            { answers: [{ id: '0' }, { id: '1' }], question: HOME_E },
            { answers: [YES], question: HOME_FB },
          ],
        },
      ],
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
      requirements: [
        {
          responses: [
            { answers: [YES], question: HOME_C },
            { answers: [{ id: '0' }, { id: '1' }], question: HOME_E },
            { answers: [YES], question: HOME_FA },
          ],
        },
      ],
    },
    json.r5a,
  ) as IResult;

  /**
   * Home - repay money
   */
  const r5b: IResult = merge(
    {
      action:       LEARN_HOW_TO_APPLY_ACTION,
      id:           'r5b',
      requirements: [
        {
          responses: [
            { answers: [YES], question: HOME_C },
            { answers: [{ id: '0' }, { id: '1' }], question: HOME_E },
            { answers: [YES], question: HOME_FB },
          ],
        },
      ],
    },
    json.r5b,
  ) as IResult;

  /**
   * All possible results with their requirements
   */
  const resultList: IResult[] = [
    r1,
    r2,
    r3a,
    r3b,
    r4a,
    r4b,
    r5a,
    r5b,
  ];

  const resultMap = {
    r1,
    r2,
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
