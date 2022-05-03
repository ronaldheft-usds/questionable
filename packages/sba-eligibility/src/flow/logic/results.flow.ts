/*
  eslint-disable max-len,
  sonarjs/no-duplicate-string,
  camelcase,
 */
import { merge }               from 'lodash';
import { IResult }             from '@usds.gov/questionable-react-component';
import {
  BUSINESS,
  NON_PROFIT,
  LEARN_HOW_TO_APPLY_ACTION,
} from '../lib/constants';
import { TQuestionMap, TResultMap } from '../lib/contentMap';

// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types
export const buildResults = (json: TResultMap, questionMap: TQuestionMap) => {
  const {
    A,
  } = questionMap;

  /**
   * Retirement
   */
  const r1: IResult = merge(
    {
      action:       LEARN_HOW_TO_APPLY_ACTION,
      id:           'r1',
      requirements: [
        {
          explanation:
            "You've worked for ten years or more and meet the age qualification because you're 62 or older.",
          responses: [
            { answers: [BUSINESS, NON_PROFIT], question: A },
          ],
        },
      ],
    },
    json.r1,
  ) as IResult;

  /**
   * All possible results with their requirements
   */
  const resultList: IResult[] = [
    r1,
  ];

  const resultMap = {
    r1,
  };

  return {
    list: resultList,
    map:  resultMap,
  };
};
