"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _ = require("../");

var _ThemeProvide = _interopRequireDefault(require("../../ThemeProvide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe("Typography component", function () {
  test("Render typography", function () {
    var component = /*#__PURE__*/_react["default"].createElement(_ThemeProvide["default"], null, /*#__PURE__*/_react["default"].createElement(_.Typography, {
      type: "h1"
    }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 1"), /*#__PURE__*/_react["default"].createElement(_.Typography, {
      type: "h2"
    }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 2"), /*#__PURE__*/_react["default"].createElement(_.Typography, {
      type: "h3"
    }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 3"), /*#__PURE__*/_react["default"].createElement(_.Typography, {
      type: "h4"
    }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 4"), /*#__PURE__*/_react["default"].createElement(_.Typography, {
      type: "text"
    }, "\u0422\u0435\u043A\u0441\u0442"), /*#__PURE__*/_react["default"].createElement(_.Typography, {
      type: "h1",
      transform: "capitalize"
    }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 1"), /*#__PURE__*/_react["default"].createElement(_.Typography, {
      type: "h1",
      transform: "lowercase"
    }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 1"), /*#__PURE__*/_react["default"].createElement(_.Typography, {
      type: "h1",
      transform: "uppercase"
    }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 1"), /*#__PURE__*/_react["default"].createElement(_.Typography, {
      type: "h1",
      decoration: "overline"
    }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 1"), /*#__PURE__*/_react["default"].createElement(_.Typography, {
      type: "h1",
      decoration: "underline"
    }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 1"), /*#__PURE__*/_react["default"].createElement(_.Typography, {
      type: "h1",
      decoration: "line-through"
    }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 1"));

    var tree = _reactTestRenderer["default"].create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});