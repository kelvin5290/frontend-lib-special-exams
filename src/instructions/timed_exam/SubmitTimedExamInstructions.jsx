import React from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Button } from '@openedx/paragon';

import { submitExam } from '../../data';

const SubmitTimedExamInstructions = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h3 className="h3" data-testid="exam-instructions-title">
        <FormattedMessage
          id="exam.submitExamInstructions.title"
          defaultMessage="Thank you for taking part in this exam. Would you like to:"
        />
      </h3>
      <Button variant="primary" onClick={() => dispatch(submitExam())} className="mr-2" data-testid="end-exam-button">
        <FormattedMessage
          id="exam.submitExamInstructions.submit"
          defaultMessage="Proceed to finish the exam"
        />
      </Button>
    </>
  );
};

export default SubmitTimedExamInstructions;
