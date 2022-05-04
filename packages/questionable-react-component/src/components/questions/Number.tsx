import { noel }          from '../../lib/noel';
import { useGlobal }     from '../../state/GlobalState';
import { IQuestionData } from '../../survey/IQuestionData';
import { Questions }     from '../lib/Questions';
import { StepLayout }    from '../wizard/StepLayout';

/**
 * Renders a question and a free form numbers input
 * @param props
 * @returns
 */
export const Number = (props: IQuestionData): JSX.Element => {
  const { config } = useGlobal();

  if (props?.step?.answers === undefined) {
    return noel();
  }

  return Questions.getNumberInput(props, config);
};

/**
 * Renders a question and a checkbox list of allowed answers
 * @param props
 * @returns
 */
export const NumberStep = (props: IQuestionData): JSX.Element => (
  <StepLayout {...props}>
    <Number {...props} />
  </StepLayout>
);
