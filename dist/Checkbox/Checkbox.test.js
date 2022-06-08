"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _ = require("../");

var _ThemeProvide = _interopRequireDefault(require("../../ThemeProvide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe("Checkbox component", function () {
  test("Render checkbox", function () {
    var component = /*#__PURE__*/_react["default"].createElement(_ThemeProvide["default"], null, /*#__PURE__*/_react["default"].createElement(_.CheckBox, {
      name: "chk",
      onChange: function onChange() {
        return console.log("check");
      }
    }), /*#__PURE__*/_react["default"].createElement(_.CheckBox, {
      name: "chk2",
      checked: true
    }), /*#__PURE__*/_react["default"].createElement(_.CheckBox, {
      name: "chk3",
      disabled: true
    }), /*#__PURE__*/_react["default"].createElement(_.CheckBox, {
      name: "chk4",
      checked: true,
      disabled: true
    }));

    var tree = _reactTestRenderer["default"].create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});