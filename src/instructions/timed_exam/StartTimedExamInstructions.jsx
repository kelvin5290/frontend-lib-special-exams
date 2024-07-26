import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Button } from '@openedx/paragon';
import { startTimedExam } from '../../data';

const StartTimedExamInstructions = () => {
  const { exam } = useSelector(state => state.specialExams);
  const dispatch = useDispatch();
  const examDuration = exam.total_time;

  return (
    <>
      <div className="h3" data-testid="exam-instructions-title">
        <FormattedMessage
          id="exam.startExamInstructions.title"
          defaultMessage="Exam"
          values={{ examDuration }}
        />
      </div>
      <p>
        <FormattedMessage
          id="exam.startExamInstructions.text1"
          defaultMessage="This is an exam with a 30-minute time limit. "
          values={{ examDuration }}
        />
        <strong>
          <FormattedMessage
            id="exam.startExamInstructions.text2"
            defaultMessage='Please select "Start", after completing all questions, click "End Exam" and wait for the results.'
          />
        </strong>
        {/* <FormattedMessage
          id="exam.startExamInstructions.text3"
          defaultMessage={'After you select "I am ready to start this timed exam", '
          + 'you will have {examDuration} to complete and submit the exam.'}
          values={{ examDuration }}
        /> */}
      </p>
      <Button
        data-testid="start-exam-button"
        variant="outline-primary"
        onClick={() => dispatch(startTimedExam())}
      >
        <FormattedMessage
          id="exam.startExamInstructions.startExamButtonText"
          defaultMessage="Start"
        />
      </Button>
    </>
  );
};

export default StartTimedExamInstructions;
