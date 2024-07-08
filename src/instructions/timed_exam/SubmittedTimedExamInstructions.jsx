import React , { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { FormattedMessage } from "@edx/frontend-platform/i18n";

const SubmittedTimedExamInstructions = () => {
  const { timeIsOver } = useSelector((state) => state.specialExams);
  const { exam } = useSelector((state) => state.specialExams);
  const { progress, content_id } = exam;
  let isPass = false;
  console.log(progress);
  console.log(exam);
  if (progress?.section_scores){
    for (const section of progress?.section_scores) {
      for (const subsection of section.subsections) {
        if (subsection.block_key === targetBlockKey) {
          isPass =
            subsection.percent_graded >
            (progress?.grading_policy?.grade_range?.pass || 0.7);
          console.log("isPass", isPass);
          break;
        }
      }
    }
  }
 
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (timeLeft === 0) {
      // Countdown has reached zero, do something
      console.log("Countdown finished!");
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [timeLeft]);

  return (
    <h3 className="h3" data-testid="exam.submittedExamInstructions.title">
      {timeLeft > 0 ? (
        <>
          <FormattedMessage
            id="exam.submittedExamInstructions.title"
            defaultMessage="Your final score is calculating, please wait for your result and do not close this page."
          />
          <div class="progress">
            <div
              style={{ width: `${(10 - timeLeft) * 10}%` }}
              class="progress-bar"
              role="progressbar"
              aria-valuenow={(10-timeLeft) *10}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </>
      ) : isPass ? (
        <FormattedMessage
          id="exam.submittedExamInstructions.pass"
          defaultMessage="Congratulations! You've passed the exam."
        />
      ) : (
        <FormattedMessage
          id="exam.submittedExamInstructions.fail"
          defaultMessage="Unfortunately, you did not pass the exam. Please note that retaking the exam may be necessary based on your organization policy."
        />
      )}
    </h3>
  );
};

export default SubmittedTimedExamInstructions;
