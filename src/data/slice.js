import { createSlice } from '@reduxjs/toolkit';
import { appendTimerEnd } from '../helpers';

/* eslint-disable no-param-reassign */
export const examSlice = createSlice({
  name: 'exam',
  initialState: {
    isLoading: true,
    timeIsOver: false,
    activeAttempt: null, // has the same structure as attempt in exam object
    allowProctoringOptOut: false,
    proctoringSettings: {
      exam_proctoring_backend: {
        download_url: '',
        instructions: [],
        name: '',
        rules: {},
      },
      provider_tech_support_email: '',
      provider_tech_support_phone: '',
      provider_tech_support_url: '',
      provider_name: '',
      learner_notification_from_email: '',
      integration_specific_email: '',
    },
    progress:{},
    exam: {
      id: null,
      course_id: '',
      content_id: '',
      external_id: '',
      exam_name: '',
      time_limit_mins: null,
      is_proctored: false,
      is_practice_exam: false,
      is_active: true,
      due_date: null,
      hide_after_due: false,
      backend: '',
      prerequisite_status: {
        are_prerequisites_satisifed: true,
        satisfied_prerequisites: [],
        failed_prerequisites: [],
        pending_prerequisites: [],
        declined_prerequisites: [],
      },
      attempt: {
        in_timed_exam: true,
        taking_as_proctored: true,
        exam_type: '',
        exam_display_name: '',
        exam_url_path: '',
        time_remaining_seconds: null,
        course_id: '',
        attempt_id: null,
        attempt_status: '',
        exam_started_poll_url: '',
        desktop_application_js_url: '',
        ping_interval: null,
        attempt_code: '',
        external_id: '',
        use_legacy_attempt_api: true,
      },
      type: '',
    },
    apiErrorMsg: '',
    examAccessToken: {
      exam_access_token: '',
      exam_access_token_expiration: '',
    },
  },
  reducers: {
    setAllowProctoringOptOut: (state, { payload }) => {
      state.allowProctoringOptOut = payload.allowProctoringOptOut;
    },
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload.isLoading;
    },
    setExamState: (state, { payload }) => {
      state.exam = payload.exam;
      state.activeAttempt = appendTimerEnd(payload.activeAttempt);
    },
    setActiveAttempt: (state, { payload }) => {
      state.activeAttempt = appendTimerEnd(payload.activeAttempt);
      state.apiErrorMsg = '';
    },
    setProctoringSettings: (state, { payload }) => {
      state.proctoringSettings = payload.proctoringSettings;
    },
    setExamAccessToken: (state, { payload }) => {
      state.examAccessToken = payload.examAccessToken;
    },
    expireExamAttempt: (state) => {
      state.timeIsOver = true;
    },
    setReviewPolicy: (state, { payload }) => {
      state.exam.reviewPolicy = payload.policy;
    },
    setExamProgress: (state, { payload }) => {
      state.progress = payload.data;
    },
    setApiError: (state, { payload }) => {
      state.apiErrorMsg = payload.errorMsg;
    },
  },
});

export const {
  setIsLoading, setExamState, expireExamAttempt,
  setActiveAttempt, setProctoringSettings, setExamAccessToken,
  setReviewPolicy,setExamProgress, setApiError, setAllowProctoringOptOut,
} = examSlice.actions;

export default examSlice.reducer;
