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
            { answers: [YES], question: HOME_E },
          ],
        },
      ],
    },
    json.r2,
  ) as IResult;

  /**
   * All possible results with their requirements
   */
  const resultList: IResult[] = [
    r1,
    r2,
  ];

  const resultMap = {
    r1,
    r2,
  };

  return {
    list: resultList,
    map:  resultMap,
  };
};
