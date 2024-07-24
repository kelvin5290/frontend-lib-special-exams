"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _frontendPlatform = require("@edx/frontend-platform");
var _paragon = require("@openedx/paragon");
var _icons = require("@openedx/paragon/icons");
var _i18n = require("@edx/frontend-platform/i18n");
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ExamAPIError = function ExamAPIError(_ref) {
  var intl = _ref.intl;
  var _getConfig = (0, _frontendPlatform.getConfig)(),
    SITE_NAME = _getConfig.SITE_NAME,
    SUPPORT_URL = _getConfig.SUPPORT_URL;
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.specialExams;
    }),
    apiErrorMsg = _useSelector.apiErrorMsg;
  var shouldShowApiErrorMsg = !!apiErrorMsg && !apiErrorMsg.includes('<');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {})
  // <Alert variant="danger" data-testid="exam-api-error-component">
  //   <Icon src={Info} className="alert-icon" />
  //   <Alert.Heading data-testid="error-details">
  //     {shouldShowApiErrorMsg ? apiErrorMsg : intl.formatMessage(messages.apiErrorDefault)}
  //   </Alert.Heading>
  //   <p>
  //     {SITE_NAME && SUPPORT_URL ? (
  //       <FormattedMessage
  //         id="exam.apiError.supportText.withLink"
  //         defaultMessage={
  //           'If the issue persists, please reach out to {supportLink} for assistance, '
  //           + 'and return to the exam once you receive further instructions.'
  //         }
  //         values={{
  //           supportLink: (
  //             <Hyperlink
  //               data-testid="support-link"
  //               destination={SUPPORT_URL}
  //               target="_blank"
  //             >
  //               {SITE_NAME} Support
  //             </Hyperlink>
  //           ),
  //         }}
  //       />
  //     ) : intl.formatMessage(messages.supportTextWithoutLink)}
  //   </p>
  // </Alert>
  ;
};

ExamAPIError.propTypes = {
  intl: _i18n.intlShape.isRequired
};
var _default = exports["default"] = (0, _i18n.injectIntl)(ExamAPIError);
//# sourceMappingURL=ExamAPIError.js.map