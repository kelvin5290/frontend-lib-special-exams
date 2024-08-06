import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormattedMessage } from "@edx/frontend-platform/i18n";
import { getExamProgress } from "../../data";
import { Button } from "@openedx/paragon";
import 
  {fetchExamAttemptsData}
 from '../../data/api';
const SubmittedTimedExamInstructions = () => {
  const { timeIsOver, exam, progress } = useSelector(
    (state) => state.specialExams
  );
  const [timeLeft, setTimeLeft] = useState(null);
  const [isPass, setIspass] = useState(false);
  const [score, setScore] = useState(0);
  const [hidebtn, setHidebtn]= useState(true);
  const dispatch = useDispatch();
  console.log(progress);
  console.log(exam);

  useEffect(()=>{
    if (hidebtn === true){
      setTimeLeft(7)
      dispatch(getExamProgress());
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
                subsection.percent_graded >=
                  (progress?.grading_policy?.grade_range?.Pass)
              );
              setScore(subsection.percent_graded * 100)
              console.log("isPass", isPass,progress?.grading_policy?.grade_range?.Pass);
              break;
            }
          }
        }
      }
      if (!isPass) {
       let attempt =  await fetchExamAttemptsData(exam.course_id,exam.content_id);
       if (Object.keys(attempt.exam.attempt).length === 0){
        setHidebtn(false)
       }
       console.log(attempt,hidebtn)
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
    <>
    <h4 data-testid="exam.submittedExamInstructions.title">
      {timeLeft > 0 ? (
        <>
          <FormattedMessage
            id="exam.submittedExamInstructions.title"
            defaultMessage="Your final score is being calculated, please wait for your results and do not close this page."
          />
          <div class="progress">
            <div
              style={{ width: `${(7 - timeLeft) * 15}%` }}
              class="progress-bar"
              role="progressbar"
              aria-valuenow={(7 - timeLeft) * 15}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </>
      ) : isPass ? (
        <>
        <FormattedMessage
          id="exam.submittedExamInstructions.pass"
          defaultMessage="Congratulations! You've passed the exam."
        />  
        <br/>
        <FormattedMessage
          id="exam.submittedExamInstructions.score"
          defaultMessage="Score: {score}"
          values={{score: `(${score}/ 100)`}}
        />
        </>
      ) : (
        <>
          <FormattedMessage
            id="exam.submittedExamInstructions.fail"
            defaultMessage="Sorry, you did not pass the exam. Please note that retaking the exam is necessary based on your organization policy."
          />
          <br/>
          <FormattedMessage
          id="exam.submittedExamInstructions.score"
          defaultMessage="Score: {score}"
          values={{score: `(${score}/ 100)`}}
        />
        </>

      )}
    </h4>
    {!isPass && !hidebtn && 
      <Button
        variant="outline-primary"
        class="mt-3"
        onClick={() => window.location.reload()}
        data-testid="continue-exam-button"
      >
        <FormattedMessage
          id="exam.submittedExamInstructions.retake"
          defaultMessage="Retake Exam"
        />
      </Button>
    }
    </>
  );
};

export default SubmittedTimedExamInstructions;
