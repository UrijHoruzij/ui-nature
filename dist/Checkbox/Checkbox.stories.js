"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: "Components/CheckBox",
  component: _.CheckBox
};
exports["default"] = _default;

var Default = function Default() {
  return /*#__PURE__*/_react["default"].createElement(_.CheckBox, {
    name: "chk",
    onChange: function onChange() {
      return console.log("check");
    }
  });
};

exports.Default = Default;