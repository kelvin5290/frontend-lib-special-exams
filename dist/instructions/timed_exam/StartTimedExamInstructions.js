"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@openedx/paragon");
var _data = require("../../data");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var StartTimedExamInstructions = function StartTimedExamInstructions() {
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.specialExams;
    }),
    exam = _useSelector.exam;
  var dispatch = (0, _reactRedux.useDispatch)();
  var examDuration = exam.total_time;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "h3",
      "data-testid": "exam-instructions-title",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.startExamInstructions.title",
        defaultMessage: "Exam",
        values: {
          examDuration: examDuration
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.startExamInstructions.text1",
        defaultMessage: "This is an exam with a 30-minute time limit. ",
        values: {
          examDuration: examDuration
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.startExamInstructions.text2",
          defaultMessage: "Please select \"Start\", after completing all questions, click \"End Exam\" and wait for the results."
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
      "data-testid": "start-exam-button",
      variant: "outline-primary",
      onClick: function onClick() {
        return dispatch((0, _data.startTimedExam)());
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.startExamInstructions.startExamButtonText",
        defaultMessage: "Start"
      })
    })]
  });
};
var _default = exports["default"] = StartTimedExamInstructions;
//# sourceMappingURL=StartTimedExamInstructions.js.map