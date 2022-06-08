"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Warning = exports.Success = exports.HiddenTitle = exports.Error = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: "Components/Input",
  component: _.Input
};
exports["default"] = _default;

var Default = function Default() {
  return /*#__PURE__*/_react["default"].createElement(_.Input, {
    type: "text",
    value: "",
    placeholder: "\u041B\u043E\u0433\u0438\u043D",
    name: "login",
    onChange: function onChange() {}
  });
};

exports.Default = Default;

var Success = function Success() {
  return /*#__PURE__*/_react["default"].createElement(_.Input, {
    type: "text",
    value: "",
    placeholder: "\u041B\u043E\u0433\u0438\u043D",
    name: "login",
    status: "success",
    onChange: function onChange() {}
  });
};

exports.Success = Success;

var Warning = function Warning() {
  return /*#__PURE__*/_react["default"].createElement(_.Input, {
    type: "text",
    value: "",
    placeholder: "\u041B\u043E\u0433\u0438\u043D",
    name: "login",
    status: "warning",
    onChange: function onChange() {}
  });
};

exports.Warning = Warning;

var Error = function Error() {
  return /*#__PURE__*/_react["default"].createElement(_.Input, {
    type: "text",
    value: "",
    placeholder: "\u041B\u043E\u0433\u0438\u043D",
    name: "login",
    help: "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",
    status: "error",
    onChange: function onChange() {}
  });
};

exports.Error = Error;

var HiddenTitle = function HiddenTitle() {
  return /*#__PURE__*/_react["default"].createElement(_.Input, {
    type: "text",
    value: "",
    placeholder: "\u041B\u043E\u0433\u0438\u043D",
    name: "login",
    onChange: function onChange() {},
    visibleTitle: false
  });
};

exports.HiddenTitle = HiddenTitle;