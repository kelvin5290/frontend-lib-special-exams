"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _i18n = require("@edx/frontend-platform/i18n");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var SubmittedTimedExamInstructions = function SubmittedTimedExamInstructions() {
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.specialExams;
    }),
    timeIsOver = _useSelector.timeIsOver;
  var _useSelector2 = (0, _reactRedux.useSelector)(function (state) {
      return state.specialExams;
    }),
    exam = _useSelector2.exam;
  var progress = exam.progress,
    content_id = exam.content_id;
  var isPass = false;
  console.log(progress);
  console.log(content_id);
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
          if (subsection.block_key === targetBlockKey) {
            var _progress$grading_pol;
            isPass = subsection.percent_graded > ((progress === null || progress === void 0 || (_progress$grading_pol = progress.grading_policy) === null || _progress$grading_pol === void 0 || (_progress$grading_pol = _progress$grading_pol.grade_range) === null || _progress$grading_pol === void 0 ? void 0 : _progress$grading_pol.pass) || 0.7);
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
  var _useState = useState(10),
    _useState2 = _slicedToArray(_useState, 2),
    timeLeft = _useState2[0],
    setTimeLeft = _useState2[1];
  useEffect(function () {
    if (timeLeft === 0) {
      // Countdown has reached zero, do something
      console.log("Countdown finished!");
      return;
    }
    var timer = setTimeout(function () {
      setTimeLeft(timeLeft - 1);
    }, 1000);
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
            width: "".concat((10 - timeLeft) * 10, "%")
          },
          "class": "progress-bar",
          role: "progressbar",
          "aria-valuenow": (10 - timeLeft) * 10,
          "aria-valuemin": "0",
          "aria-valuemax": "100"
        })
      })]
    }) : isPass ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
      id: "exam.submittedExamInstructions.pass",
      defaultMessage: "Congratulations! You've passed the exam."
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
      id: "exam.submittedExamInstructions.fail",
      defaultMessage: "Unfortunately, you did not pass the exam. Please note that retaking the exam may be necessary based on your organization policy."
    })
  });
};
var _default = exports["default"] = SubmittedTimedExamInstructions;
//# sourceMappingURL=SubmittedTimedExamInstructions.js.map