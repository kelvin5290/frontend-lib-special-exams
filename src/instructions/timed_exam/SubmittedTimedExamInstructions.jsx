import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FormattedMessage } from "@edx/frontend-platform/i18n";

const SubmittedTimedExamInstructions = () => {
  const { timeIsOver, exam, progress } = useSelector(
    (state) => state.specialExams
  );
  const { content_id } = exam;
  const [isPass, setIspass] = useState(false);
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

  return (
    <h3 className="h3" data-testid="exam.submittedExamInstructions.title">
      {progress ? (
        isPass ? (
          <FormattedMessage
            id="exam.submittedExamInstructions.pass"
            defaultMessage="Congratulations! You've passed the exam."
          />
        ) : (
          <FormattedMessage
            id="exam.submittedExamInstructions.fail"
            defaultMessage="Unfortunately, you did not pass the exam. Please note that retaking the exam may be necessary based on your organization policy."
          />
        )
      ) : (
        <>
          <FormattedMessage
            id="exam.submittedExamInstructions.title"
            defaultMessage="Your final score is calculating, please wait for your result and do not close this page."
          />
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </>
      )}
    </h3>
  );
};

export default SubmittedTimedExamInstructions;
