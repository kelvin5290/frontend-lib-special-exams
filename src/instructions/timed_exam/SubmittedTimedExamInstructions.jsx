import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormattedMessage } from "@edx/frontend-platform/i18n";
import { getLatestAttemptData } from "../data";
import { Button } from "@openedx/paragon";
const SubmittedTimedExamInstructions = () => {
  const { timeIsOver, exam, progress, activeAttempt } = useSelector(
    (state) => state.specialExams
  );
  const { content_id } = exam;
  const [timeLeft, setTimeLeft] = useState(5);
  const [isPass, setIspass] = useState(false);
  const dispatch = useDispatch();
  console.log(progress);
  console.log(exam);
  useEffect(() => {
    if (progress?.section_scores) {
      for (const section of progress?.section_scores) {
        for (const subsection of section.subsections) {
          if (subsection.block_key === exam.content_id) {
            setIspass(
              subsection.percent_graded >
                (progress?.grading_policy?.grade_range?.pass || 0.7)
            );
            console.log("isPass", isPass);
            break;
          }
        }
      }
    }
  }, [progress]);

  useEffect(() => {
    if (!isPass) dispatch(getLatestAttemptData(exam.courseId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPass]);

  useEffect(() => {
    if (timeLeft === 0) {
      // Countdown has reached zero, do something
      console.log("Countdown finished!");
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 500);

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
              style={{ width: `${(5 - timeLeft) * 10}%` }}
              class="progress-bar"
              role="progressbar"
              aria-valuenow={(5 - timeLeft) * 10}
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
        <>
          <FormattedMessage
            id="exam.submittedExamInstructions.fail"
            defaultMessage="Unfortunately, you did not pass the exam. Please note that retaking the exam may be necessary based on your organization policy."
          />
          {!activeAttempt && (
            <Button
              variant="outline-primary"
              onClick={() => window.location.reload()}
              data-testid="continue-exam-button"
            >
              <FormattedMessage
                id="exam.submittedExamInstructions.retake"
                defaultMessage="Retake Exam"
              />
            </Button>
          )}
        </>
      )}
    </h3>
  );
};

export default SubmittedTimedExamInstructions;
