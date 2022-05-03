/*
  eslint-disable max-len,
  sonarjs/no-duplicate-string,
 */

import { IQuestion } from '@usds.gov/questionable-react-component';
import {
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

export const questionContentMap: TQuestionMap = {
  A,
};
