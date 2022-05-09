/*
  eslint-disable max-len,
  sonarjs/no-duplicate-string,
 */

import { IQuestion } from '@usds.gov/questionable-react-component';
import {
  YES,
  NO,
  TQuestionMap,
} from '../lib';

/**
 * Disaster affected
 */
const A: Partial<IQuestion> = {
  answers: [
    { id: '0', title: 'My home' },
    { id: '1', title: 'My business' },
    { id: '2', title: 'The private non-profit where I work' },
  ],
  id:    'A',
  info:  "We know the event affected things that aren't listed here. Our loans can only offer support for specific parts of your life.",
  title: 'What was affected by the sudden event?',
};

/**
 * Home: Own or rent
 */
const HOME_B: Partial<IQuestion> = {
  answers: [
    { id: '0', title: 'Own' },
    { id: '1', title: 'Rent' },
  ],
  id:       'HOME_B',
  subTitle: 'You may be living somewhere else right now. "Home" refers to the place that was affected by the sudden event.',
  title:    'Do you own or rent your home?',
};

/**
 * Home: primary home
 */
const HOME_C: Partial<IQuestion> = {
  answers:  [YES, NO],
  id:       'HOME_C',
  subTitle: 'This means it was the address for things like taxes, voter registration, and school district if you have children.',
  title:    'Was the space your primary home when the event happened?',
};

/**
 * Home: zip code
 */
const HOME_D: Partial<IQuestion> = {
  answers: [YES, NO],
  id:      'HOME_D',
  info:    'Five-digit ZIP Code',
  title:   'What\'s the ZIP Code for your home?',
};

/**
 * Home: disaster events
 */
const HOME_E: Partial<IQuestion> = {
  answers: [
    { id: '0', subTitle: 'Severe Storms, Straight-line Winds, Flooding, and Tornadoes', title: 'Warren county, Kentucky on December 10, 2021' },
    { id: '1', subTitle: 'Flooding and Tornadoes', title: 'Edmonson county, Kentucky on December 10, 2021' },
  ],
  id:       'HOME_E',
  subTitle: 'ZIP Code: 42101',
  title:    'Looks like there were a few events where you live. Which one(s) affected you?',
};

/**
 * Home: loan usage - own
 */
const HOME_FA: Partial<IQuestion> = {
  answers: [YES, NO],
  id:      'HOME_FA',
  title:   'A loan for the sudden event you selected must be used to repair your home and other items like furniture, clothing, cars, and appliances. Did the event cause physical damage to your home?',
};

/**
 * Home: loan usage - rent
 */
const HOME_FB: Partial<IQuestion> = {
  answers: [YES, NO],
  id:      'HOME_FB',
  title:   'A loan for the sudden event you selected must be used to replace furniture, clothing, cars, and other items that were damaged. Did the event cause physical damage to your personal stuff?',
};

/**
 * Home: age
 */
const HOME_GA: Partial<IQuestion> = {
  answers:  [YES, NO],
  id:       'HOME_GA',
  subTitle: 'The legal age to borrow money varies based on where you live.',
  title:    'How old are you?',
};
const HOME_GB: Partial<IQuestion> = { ...HOME_GA, id: 'HOME_GB' };

/**
 * Home: people living at home
 */
const HOME_HA: Partial<IQuestion> = {
  answers: [YES, NO],
  id:      'HOME_HA',
  info:    'Number of kids and adults in your home',
  title:   'How many people lived in your home when the sudden event happened?',
};
const HOME_HB: Partial<IQuestion> = { ...HOME_HA, id: 'HOME_HB' };

/**
 * Home: people depending on income
 */
const HOME_IA: Partial<IQuestion> = {
  answers:  [YES, NO],
  id:       'HOME_IA',
  info:     'Number of kids and adults who depend on the same income',
  subTitle: 'You may have roommates, friends, extended family, or others who share your space but don\'t live off of the same income as you.',
  title:    'How many of those people depend on the same income?',
};
const HOME_IB: Partial<IQuestion> = { ...HOME_IA, id: 'HOME_IB' };

/**
 * Home: income
 */
const HOME_JA: Partial<IQuestion> = {
  answers:  [YES, NO],
  id:       'HOME_JA',
  info:     'Estimate for total combined monthly income',
  subTitle: 'Estimate the total amount for everyone who depends on the same income in your home. Include money from jobs and government assistance (Social Security benefits, unemployment insurance, etc.).',
  title:    'How much money do you make every month?',
};
const HOME_JB: Partial<IQuestion> = { ...HOME_JA, id: 'HOME_JB' };

/**
 * Home: debt
 */
const HOME_KA: Partial<IQuestion> = {
  answers:  [YES, NO],
  id:       'HOME_KA',
  info:     'Estimate for total combined debt',
  subTitle: 'Estimate the total amount for everyone who depends on the same income in your home. Debt includes things like car or student loans, credit card payments, and mortgages.',
  title:    'How much debt do you pay back every month?',
};
const HOME_KB: Partial<IQuestion> = { ...HOME_KA, id: 'HOME_KB' };

export const questionContentMap: TQuestionMap = {
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
