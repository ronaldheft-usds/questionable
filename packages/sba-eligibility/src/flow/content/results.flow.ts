/*
  eslint-disable max-len,
                sonarjs/no-duplicate-string,
                camelcase
 */
import { IResult }    from '@usds.gov/questionable-react-component';
import { TResultMap } from '../lib/contentMap';

enum Category {
  HOME = 'Your home:',
  YOU = 'You:',
}

const name = '';

/**
 * Home - primary residence
 */
const r1a: Partial<IResult> = {
  category: Category.HOME,
  id:       'r1a',
  label:    name,
  title:    'is your primary residence',
};
const r1b: Partial<IResult> = { ...r1a, id: 'r1b' };

/**
 * Home - support area
 */
const r2a: Partial<IResult> = {
  category: Category.HOME,
  id:       'r2a',
  label:    name,
  title:    'is located in an area where we\'re currently offering support',
};
const r2b: Partial<IResult> = { ...r2a, id: 'r2b' };

/**
 * Home - own physical damage
 */
const r3a: Partial<IResult> = {
  category: Category.HOME,
  id:       'r3a',
  label:    name,
  title:    'has physical damage to it',
};
const r3b: Partial<IResult> = { ...r3a, id: 'r3b' };

/**
 * Home - borrow money
 */
const r4a: Partial<IResult> = {
  category: Category.YOU,
  id:       'r4a',
  label:    name,
  title:    'are the legal age to borrow money',
};
const r4b: Partial<IResult> = { ...r4a, id: 'r4b' };

/**
 * Home - repay money
 */
const r5a: Partial<IResult> = {
  category: Category.YOU,
  id:       'r5a',
  label:    name,
  title:    'will be able to repay the money based on estimates of your income and debt',
};
const r5b: Partial<IResult> = { ...r5a, id: 'r5b' };

/**
 * All possible results with their requirements
 */
export const resultContentMap: TResultMap = {
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
