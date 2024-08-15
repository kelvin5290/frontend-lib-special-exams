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
          defaultMessage="Graded Assessment"
          values={{ examDuration }}
        />
      </div>
      <p>
        <FormattedMessage
          id="exam.startExamInstructions.text1"
          defaultMessage="This is a graded assessment with a 30-minute time limit. "
          values={{ examDuration }}
        />
        <strong>
          <FormattedMessage
            id="exam.startExamInstructions.text2"
            defaultMessage='Please click "Start" to start the assessment. When finished, please click "End" to submit your answers and wait for the result.'
          />
        </strong>
      </p>
      <p>
      <FormattedMessage
          id="exam.startExamInstructions.text3"
          defaultMessage='Note: Please do not leave the platform during the assessment, or an attempt will be used and a retake of the assessment will be required.'
        />
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
