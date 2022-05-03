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
  answers:  [YES, NO],
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
const HOME_G: Partial<IQuestion> = {
  answers:  [YES, NO],
  id:       'HOME_G',
  subTitle: 'The legal age to borrow money varies based on where you live.',
  title:    'How old are you?',
};

/**
 * Home: people living at home
 */
const HOME_H: Partial<IQuestion> = {
  answers: [YES, NO],
  id:      'HOME_H',
  info:    'Number of kids and adults in your home',
  title:   'How many people lived in your home when the sudden event happened?',
};

/**
 * Home: people depending on income
 */
const HOME_I: Partial<IQuestion> = {
  answers:  [YES, NO],
  id:       'HOME_I',
  info:     'Number of kids and adults who depend on the same income',
  subTitle: 'You may have roommates, friends, extended family, or others who share your space but don\'t live off of the same income as you.',
  title:    'How many of those people depend on the same income?',
};

/**
 * Home: income
 */
const HOME_J: Partial<IQuestion> = {
  answers:  [YES, NO],
  id:       'HOME_J',
  info:     'Estimate for total combined monthly income',
  subTitle: 'Estimate the total amount for everyone who depends on the same income in your home. Include money from jobs and government assistance (Social Security benefits, unemployment insurance, etc.).',
  title:    'How much money do you make every month?',
};

/**
 * Home: debt
 */
const HOME_K: Partial<IQuestion> = {
  answers:  [YES, NO],
  id:       'HOME_K',
  info:     'Estimate for total combined debt',
  subTitle: 'Estimate the total amount for everyone who depends on the same income in your home. Debt includes things like car or student loans, credit card payments, and mortgages.',
  title:    'How much debt do you pay back every month?',
};

export const questionContentMap: TQuestionMap = {
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
