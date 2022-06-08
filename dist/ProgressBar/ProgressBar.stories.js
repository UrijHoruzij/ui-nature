"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Error = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: "Components/ProgressBar",
  component: _.ProgressBar
};
exports["default"] = _default;

var Default = function Default() {
  return /*#__PURE__*/_react["default"].createElement(_.ProgressBar, {
    percent: 78
  });
};

exports.Default = Default;

var Error = function Error() {
  return /*#__PURE__*/_react["default"].createElement(_.ProgressBar, {
    percent: 45,
    type: "error"
  });
};

exports.Error = Error;