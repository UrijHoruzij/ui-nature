"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _ = require("../");

var _ThemeProvide = _interopRequireDefault(require("../../ThemeProvide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe("Frame component", function () {
  test("Render frame", function () {
    var component = /*#__PURE__*/_react["default"].createElement(_ThemeProvide["default"], null, /*#__PURE__*/_react["default"].createElement(_.Frame, null, /*#__PURE__*/_react["default"].createElement(_.Button, {
      type: "primary"
    }, "\u041A\u043D\u043E\u043F\u043A\u0430"), /*#__PURE__*/_react["default"].createElement(_.Button, {
      type: "primary"
    }, "\u041A\u043D\u043E\u043F\u043A\u0430"), /*#__PURE__*/_react["default"].createElement(_.Button, {
      type: "primary"
    }, "\u041A\u043D\u043E\u043F\u043A\u0430"), /*#__PURE__*/_react["default"].createElement(_.Button, {
      type: "primary"
    }, "\u041A\u043D\u043E\u043F\u043A\u0430"), /*#__PURE__*/_react["default"].createElement(_.Button, {
      type: "primary"
    }, "\u041A\u043D\u043E\u043F\u043A\u0430"), /*#__PURE__*/_react["default"].createElement(_.Button, {
      type: "primary"
    }, "\u041A\u043D\u043E\u043F\u043A\u0430")));

    var tree = _reactTestRenderer["default"].create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});