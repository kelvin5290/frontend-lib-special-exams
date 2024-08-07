"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _proctored_exam = require("./proctored_exam");
var _helpers = require("../helpers");
var _constants = require("../constants");
var _EntranceInstructions = _interopRequireDefault(require("./EntranceInstructions"));
var _SubmitInstructions = _interopRequireDefault(require("./SubmitInstructions"));
var _RejectedInstructions = _interopRequireDefault(require("./RejectedInstructions"));
var _ErrorInstructions = _interopRequireDefault(require("./ErrorInstructions"));
var _SubmittedInstructions = _interopRequireDefault(require("./SubmittedInstructions"));
var _VerifiedInstructions = _interopRequireDefault(require("./VerifiedInstructions"));
var _ExpiredInstructions = _interopRequireDefault(require("./ExpiredInstructions"));
var _UnknownAttemptStatusError = _interopRequireDefault(require("./UnknownAttemptStatusError"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Instructions = function Instructions(_ref) {
  var children = _ref.children;
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.specialExams;
    }),
    exam = _useSelector.exam;
  var _ref2 = exam || {},
    attempt = _ref2.attempt,
    examType = _ref2.type,
    prerequisitesData = _ref2.prerequisite_status,
    passedDueDate = _ref2.passed_due_date,
    hideAfterDue = _ref2.hide_after_due;
  var prerequisitesPassed = prerequisitesData ? prerequisitesData.are_prerequisites_satisifed : true;
  var _ref3 = attempt || {},
    attemptStatus = _ref3.attempt_status,
    attemptReadyToResume = _ref3.attempt_ready_to_resume;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    skipProctoring = _useState2[0],
    toggleSkipProctoring = _useState2[1];
  var toggleSkipProctoredExam = function toggleSkipProctoredExam() {
    return toggleSkipProctoring(!skipProctoring);
  };
  var expired = (0, _helpers.shouldRenderExpiredPage)(exam);
  if (expired) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ExpiredInstructions["default"], {});
  }
  var renderEmptyAttemptInstructions = function renderEmptyAttemptInstructions() {
    var component = /*#__PURE__*/(0, _jsxRuntime.jsx)(_EntranceInstructions["default"], {
      examType: examType,
      skipProctoredExam: toggleSkipProctoredExam
    });
    if (examType === _constants.ExamType.PROCTORED && !prerequisitesPassed) {
      component = /*#__PURE__*/(0, _jsxRuntime.jsx)(_proctored_exam.PrerequisitesProctoredExamInstructions, {
        skipProctoredExam: toggleSkipProctoredExam
      });
    }
    return component;
  };
  switch (true) {
    case examType === _constants.ExamType.PROCTORED && skipProctoring:
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_proctored_exam.SkipProctoredExamInstruction, {
        cancelSkipProctoredExam: toggleSkipProctoredExam
      });
    case (0, _helpers.isEmpty)(attempt) || !attempt.attempt_id:
      return renderEmptyAttemptInstructions();
    case attemptReadyToResume:
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_EntranceInstructions["default"], {
        examType: examType,
        skipProctoredExam: toggleSkipProctoredExam
      });
    case attemptStatus === _constants.ExamStatus.CREATED:
      return renderEmptyAttemptInstructions();
    // return <DownloadSoftwareProctoredExamInstructions skipProctoredExam={toggleSkipProctoredExam} />;
    case attemptStatus === _constants.ExamStatus.DOWNLOAD_SOFTWARE_CLICKED:
      return renderEmptyAttemptInstructions();
    // return <DownloadSoftwareProctoredExamInstructions />;
    case attemptStatus === _constants.ExamStatus.READY_TO_START:
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_proctored_exam.ReadyToStartProctoredExamInstructions, {});
    case attemptStatus === _constants.ExamStatus.READY_TO_SUBMIT:
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SubmitInstructions["default"], {});
    case attemptStatus === _constants.ExamStatus.SUBMITTED:
      // don't show submitted page for timed exam if exam has passed due date
      // and in studio visibility option is set to 'show entire section'
      // instead show exam content
      if (examType === _constants.ExamType.TIMED && passedDueDate && !hideAfterDue) {
        return children;
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SubmittedInstructions["default"], {
        examType: examType
      });
    case attemptStatus === _constants.ExamStatus.SECOND_REVIEW_REQUIRED:
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SubmittedInstructions["default"], {
        examType: examType
      });
    case attemptStatus === _constants.ExamStatus.VERIFIED:
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_VerifiedInstructions["default"], {
        examType: examType
      });
    case attemptStatus === _constants.ExamStatus.REJECTED:
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_RejectedInstructions["default"], {
        examType: examType
      });
    case attemptStatus === _constants.ExamStatus.ERROR:
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrorInstructions["default"], {
        examType: examType
      });
    case examType === _constants.ExamType.PROCTORED && (0, _constants.IS_ONBOARDING_ERROR)(attemptStatus):
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_proctored_exam.OnboardingErrorProctoredExamInstructions, {});
    case attemptStatus === _constants.ExamStatus.STARTED:
      return children;
    default:
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_UnknownAttemptStatusError["default"], {});
  }
};
Instructions.propTypes = {
  children: _propTypes["default"].element.isRequired
};
var _default = exports["default"] = Instructions;
//# sourceMappingURL=index.js.map