"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Uppercase = exports.Underlined = exports.Text = exports.Overlined = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.Crossed = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: "Components/Typography",
  component: _.Typography
};
exports["default"] = _default;

var H1 = function H1() {
  return /*#__PURE__*/_react["default"].createElement(_.Typography, {
    type: "h1"
  }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 1");
};

exports.H1 = H1;

var H2 = function H2() {
  return /*#__PURE__*/_react["default"].createElement(_.Typography, {
    type: "h2"
  }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 2");
};

exports.H2 = H2;

var H3 = function H3() {
  return /*#__PURE__*/_react["default"].createElement(_.Typography, {
    type: "h3"
  }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 3");
};

exports.H3 = H3;

var H4 = function H4() {
  return /*#__PURE__*/_react["default"].createElement(_.Typography, {
    type: "h4"
  }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 4");
};

exports.H4 = H4;

var Text = function Text() {
  return /*#__PURE__*/_react["default"].createElement(_.Typography, {
    type: "text"
  }, "\u0422\u0435\u043A\u0441\u0442");
};

exports.Text = Text;

var Uppercase = function Uppercase() {
  return /*#__PURE__*/_react["default"].createElement(_.Typography, {
    type: "h1",
    uppercase: true
  }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 1");
};

exports.Uppercase = Uppercase;

var Overlined = function Overlined() {
  return /*#__PURE__*/_react["default"].createElement(_.Typography, {
    type: "h1",
    decoration: "overline"
  }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 1");
};

exports.Overlined = Overlined;

var Underlined = function Underlined() {
  return /*#__PURE__*/_react["default"].createElement(_.Typography, {
    type: "h1",
    decoration: "underline"
  }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 1");
};

exports.Underlined = Underlined;

var Crossed = function Crossed() {
  return /*#__PURE__*/_react["default"].createElement(_.Typography, {
    type: "h1",
    decoration: "line-through"
  }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 1");
};

exports.Crossed = Crossed;