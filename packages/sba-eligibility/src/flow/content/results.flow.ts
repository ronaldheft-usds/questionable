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
const r1: Partial<IResult> = {
  category: Category.HOME,
  id:       'r1',
  label:    name,
  title:    'is your primary residence',
};

/**
 * Home - support area
 */
const r2: Partial<IResult> = {
  category: Category.HOME,
  id:       'r2',
  label:    name,
  title:    'is located in an area where we\'re currently offering support',
};

/**
 * Home - own physical damage
 */
const r3a: Partial<IResult> = {
  category: Category.HOME,
  id:       'r3a',
  label:    name,
  title:    'has physical damage to it',
};

/**
 * Home - rent physical damage
 */
const r3b: Partial<IResult> = {
  ...r3a,
  id: 'r3b',
};

/**
 * Home - borrow money
 */
const r4a: Partial<IResult> = {
  category: Category.YOU,
  id:       'r4a',
  label:    name,
  title:    'are the legal age to borrow money',
};

/**
 * Home - borrow money
 */
const r4b: Partial<IResult> = {
  ...r4a,
  id: 'r4b',
};

/**
 * Home - repay money
 */
const r5a: Partial<IResult> = {
  category: Category.YOU,
  id:       'r5a',
  label:    name,
  title:    'will be able to repay the money based on estimates of your income and debt',
};

/**
 * Home - repay money
 */
const r5b: Partial<IResult> = {
  ...r5a,
  id: 'r5b',
};

/**
 * All possible results with their requirements
 */
export const resultContentMap: TResultMap = {
  r1,
  r2,
  r3a,
  r3b,
  r4a,
  r4b,
  r5a,
  r5b,
};
