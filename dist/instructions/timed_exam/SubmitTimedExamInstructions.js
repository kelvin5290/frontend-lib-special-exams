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
var SubmitTimedExamInstructions = function SubmitTimedExamInstructions() {
  var dispatch = (0, _reactRedux.useDispatch)();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
      className: "h3",
      "data-testid": "exam-instructions-title",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.submitExamInstructions.title",
        defaultMessage: "Thank you for taking part in this exam. Would you like to:"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
      variant: "primary",
      onClick: function onClick() {
        return dispatch((0, _data.submitExam)());
      },
      className: "mr-2",
      "data-testid": "end-exam-button",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.submitExamInstructions.submit",
        defaultMessage: "Proceed to finish the exam"
      })
    })]
  });
};
var _default = exports["default"] = SubmitTimedExamInstructions;
//# sourceMappingURL=SubmitTimedExamInstructions.js.map