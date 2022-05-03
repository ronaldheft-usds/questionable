/* eslint-disable max-len */
import { PAGE_TYPE } from '@usds.gov/questionable-react-component';

export const pageContent = {
  noResultsPage: {
    body:     '',
    id:       PAGE_TYPE.NO_RESULTS,
    subTitle: `
    If you want to start an application anyway, <a>learn how to apply</a>.
`,
    title: 'You\'re not eligible for a loan.',
  },
  resultsPage: {
    body: `
    This gives you an idea of what you may be eligible for, but we can't guarantee you'll get these benefits. We'll provide a definite answer after you complete the application process.
    `,
    bodyHeader: '',
    id:         PAGE_TYPE.RESULTS,
    info:       '',
    subTitle:
      "Based on what you told us, you meet the initial criteria for a loan. If you're comfortable borrowing money that you'll have to pay back, continue with the process and learn how to apply.",
    title: 'You may be eligible for a loan.',
  },
  summaryPage: {
    buttons: {
      next: {
        id:    'pb2',
        title: 'Get results',
      },
    },
    id:       PAGE_TYPE.SUMMARY,
    subTitle:
      'Select a question if you need to change the answer. Then, check your answers to the questions that come after the one you changed.',
    title: 'Review your answers',
  },
};
