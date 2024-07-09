import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormattedMessage } from "@edx/frontend-platform/i18n";
import { getExamAttemptsData } from "../../data";
import { Button } from "@openedx/paragon";
import {
  fetchLatestAttempt,
} from '../../api';
const SubmittedTimedExamInstructions = () => {
  const { timeIsOver, exam, progress } = useSelector(
    (state) => state.specialExams
  );
  const [timeLeft, setTimeLeft] = useState(null);
  const [isPass, setIspass] = useState(false);
  const [attempt, setAttempt]= useState(true);
  const dispatch = useDispatch();
  console.log(progress);
  console.log(exam);

  useEffect(()=>{
    if (attempt !== 'object' && attempt === true){
      setTimeLeft(5)
    }
  },[])

  useEffect(async () => {
    if (timeLeft === 0) {
      // Countdown has reached zero, do something
      console.log("Countdown finished!");
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
      if (!isPass) {
       let attempt =  await fetchLatestAttempt(exam.course_id);
       setAttempt(attempt)

      }
      return;
    }
    if (timeLeft > 0) {
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    }
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
              style={{ width: `${(5 - timeLeft) * 20}%` }}
              class="progress-bar"
              role="progressbar"
              aria-valuenow={(5 - timeLeft) * 20}
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
          {!attempt && (
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
