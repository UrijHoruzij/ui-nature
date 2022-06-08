"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _ = require("../");

var _ThemeProvide = _interopRequireDefault(require("../../ThemeProvide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe("IconButton component", function () {
  test("Render iconbutton", function () {
    var component = /*#__PURE__*/_react["default"].createElement(_ThemeProvide["default"], null, /*#__PURE__*/_react["default"].createElement(_.IconButton, {
      icon: "close",
      type: "primary"
    }), /*#__PURE__*/_react["default"].createElement(_.IconButton, {
      icon: "close",
      type: "secondary"
    }), /*#__PURE__*/_react["default"].createElement(_.IconButton, {
      icon: "close",
      type: "outline"
    }), /*#__PURE__*/_react["default"].createElement(_.IconButton, {
      icon: "close",
      type: "outline-primary"
    }), /*#__PURE__*/_react["default"].createElement(_.IconButton, {
      icon: "close",
      type: "link"
    }), /*#__PURE__*/_react["default"].createElement(_.IconButton, {
      icon: "close",
      type: "link-primary"
    }), /*#__PURE__*/_react["default"].createElement(_.IconButton, {
      icon: "close",
      type: "primary",
      disabled: true
    }), /*#__PURE__*/_react["default"].createElement(_.IconButton, {
      overlay: /*#__PURE__*/_react["default"].createElement("input", {
        type: "file"
      }),
      icon: "close",
      type: "primary"
    }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"));

    var tree = _reactTestRenderer["default"].create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});