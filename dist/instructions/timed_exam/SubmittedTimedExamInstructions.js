"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _i18n = require("@edx/frontend-platform/i18n");
var _data = require("../data");
var _paragon = require("@openedx/paragon");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SubmittedTimedExamInstructions = function SubmittedTimedExamInstructions() {
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.specialExams;
    }),
    timeIsOver = _useSelector.timeIsOver,
    exam = _useSelector.exam,
    progress = _useSelector.progress,
    activeAttempt = _useSelector.activeAttempt;
  var content_id = exam.content_id;
  var _useState = (0, _react.useState)(5),
    _useState2 = _slicedToArray(_useState, 2),
    timeLeft = _useState2[0],
    setTimeLeft = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isPass = _useState4[0],
    setIspass = _useState4[1];
  var dispatch = (0, _reactRedux.useDispatch)();
  console.log(progress);
  console.log(exam);
  (0, _react.useEffect)(function () {
    if (progress !== null && progress !== void 0 && progress.section_scores) {
      var _iterator = _createForOfIteratorHelper(progress === null || progress === void 0 ? void 0 : progress.section_scores),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var section = _step.value;
          var _iterator2 = _createForOfIteratorHelper(section.subsections),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var subsection = _step2.value;
              if (subsection.block_key === exam.content_id) {
                var _progress$grading_pol;
                setIspass(subsection.percent_graded > ((progress === null || progress === void 0 || (_progress$grading_pol = progress.grading_policy) === null || _progress$grading_pol === void 0 || (_progress$grading_pol = _progress$grading_pol.grade_range) === null || _progress$grading_pol === void 0 ? void 0 : _progress$grading_pol.pass) || 0.7));
                console.log("isPass", isPass);
                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, [progress]);
  (0, _react.useEffect)(function () {
    if (!isPass) dispatch((0, _data.getLatestAttemptData)(exam.courseId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPass]);
  (0, _react.useEffect)(function () {
    if (timeLeft === 0) {
      // Countdown has reached zero, do something
      console.log("Countdown finished!");
      return;
    }
    var timer = setTimeout(function () {
      setTimeLeft(timeLeft - 1);
    }, 500);
    return function () {
      clearTimeout(timer);
    };
  }, [timeLeft]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
    className: "h3",
    "data-testid": "exam.submittedExamInstructions.title",
    children: timeLeft > 0 ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.submittedExamInstructions.title",
        defaultMessage: "Your final score is calculating, please wait for your result and do not close this page."
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        "class": "progress",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: {
            width: "".concat((5 - timeLeft) * 10, "%")
          },
          "class": "progress-bar",
          role: "progressbar",
          "aria-valuenow": (5 - timeLeft) * 10,
          "aria-valuemin": "0",
          "aria-valuemax": "100"
        })
      })]
    }) : isPass ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
      id: "exam.submittedExamInstructions.pass",
      defaultMessage: "Congratulations! You've passed the exam."
    }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.submittedExamInstructions.fail",
        defaultMessage: "Unfortunately, you did not pass the exam. Please note that retaking the exam may be necessary based on your organization policy."
      }), !activeAttempt && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
        variant: "outline-primary",
        onClick: function onClick() {
          return window.location.reload();
        },
        "data-testid": "continue-exam-button",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.submittedExamInstructions.retake",
          defaultMessage: "Retake Exam"
        })
      })]
    })
  });
};
var _default = exports["default"] = SubmittedTimedExamInstructions;
//# sourceMappingURL=SubmittedTimedExamInstructions.js.map