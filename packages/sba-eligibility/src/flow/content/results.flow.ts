/*
  eslint-disable max-len,
                sonarjs/no-duplicate-string,
                camelcase
 */
import { IResult }    from '@usds.gov/questionable-react-component';
import { TResultMap } from '../lib/contentMap';

enum Category {
  HOME = 'Your home:',
}

const name = '';

/**
 * Home - primary residence
 */
const r1: Partial<IResult> = {
  category: Category.HOME,
  id:       'r1',
  label:    name,
  title:    'is your primary residence',
};

/**
 * Home - primary residence
 */
const r2: Partial<IResult> = {
  category: Category.HOME,
  id:       'r2',
  label:    name,
  title:    'is located in an area where we\'re currently offering support',
};

/**
 * All possible results with their requirements
 */
export const resultContentMap: TResultMap = {
  r1,
  r2,
};
