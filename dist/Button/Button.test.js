"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _ = require("../");

var _ThemeProvide = _interopRequireDefault(require("../../ThemeProvide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe("Button component", function () {
  test("Render button", function () {
    var component = /*#__PURE__*/_react["default"].createElement(_ThemeProvide["default"], null, /*#__PURE__*/_react["default"].createElement(_.Button, {
      type: "primary"
    }, "Primary"), /*#__PURE__*/_react["default"].createElement(_.Button, {
      type: "secondary"
    }, "Secondary"), /*#__PURE__*/_react["default"].createElement(_.Button, {
      type: "outline"
    }, "Outline"), /*#__PURE__*/_react["default"].createElement(_.Button, {
      type: "outline-primary"
    }, "Outline-primary"), /*#__PURE__*/_react["default"].createElement(_.Button, {
      type: "link"
    }, "Link"), /*#__PURE__*/_react["default"].createElement(_.Button, {
      type: "link-primary"
    }, "Link-primary"), /*#__PURE__*/_react["default"].createElement(_.Button, {
      type: "primary",
      disabled: true
    }, "Disabled"), /*#__PURE__*/_react["default"].createElement(_.Button, {
      type: "primary",
      rounded: true
    }, "\u0412\u043E\u0439\u0442\u0438"), /*#__PURE__*/_react["default"].createElement(_.Button, {
      type: "primary",
      fullWidth: true
    }, "\u0412\u043E\u0439\u0442\u0438"), /*#__PURE__*/_react["default"].createElement(_.Button, {
      iconPosition: "left",
      icon: /*#__PURE__*/_react["default"].createElement(_.Icon, {
        name: "close",
        color: "contrast"
      }),
      type: "primary"
    }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"), ";", /*#__PURE__*/_react["default"].createElement(_.Button, {
      iconPosition: "right",
      icon: /*#__PURE__*/_react["default"].createElement(_.Icon, {
        name: "close",
        color: "contrast"
      }),
      type: "primary"
    }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"), ";", /*#__PURE__*/_react["default"].createElement(_.Button, {
      overlay: /*#__PURE__*/_react["default"].createElement("input", {
        type: "file"
      }),
      icon: /*#__PURE__*/_react["default"].createElement(_.Icon, {
        name: "close",
        iconPosition: "right",
        color: "contrast"
      }),
      type: "primary"
    }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"), ";", /*#__PURE__*/_react["default"].createElement(_.Button, {
      loadingData: true,
      type: "primary"
    }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"));

    var tree = _reactTestRenderer["default"].create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});