"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: "Components/Icon",
  component: _.Icon
};
exports["default"] = _default;

var Default = function Default() {
  return /*#__PURE__*/_react["default"].createElement(_.Icon, {
    name: "check",
    width: "24",
    height: "24"
  });
};

exports.Default = Default;