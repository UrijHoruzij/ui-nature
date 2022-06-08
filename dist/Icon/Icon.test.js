"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _ = require("../");

var _ThemeProvide = _interopRequireDefault(require("../../ThemeProvide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe("Icon component", function () {
  test("Render icon", function () {
    var component = /*#__PURE__*/_react["default"].createElement(_ThemeProvide["default"], null, /*#__PURE__*/_react["default"].createElement(_.Icon, {
      name: "check",
      width: "24",
      height: "24"
    }), /*#__PURE__*/_react["default"].createElement(_.Icon, {
      name: "close",
      width: "24",
      height: "24"
    }), /*#__PURE__*/_react["default"].createElement(_.Icon, {
      name: "arrow-bottom",
      width: "24",
      height: "24"
    }), /*#__PURE__*/_react["default"].createElement(_.Icon, {
      name: "arrow-top",
      width: "24",
      height: "24"
    }), /*#__PURE__*/_react["default"].createElement(_.Icon, {
      name: "arrow-left",
      width: "24",
      height: "24"
    }), /*#__PURE__*/_react["default"].createElement(_.Icon, {
      name: "arrow-right",
      width: "24",
      height: "24"
    }), /*#__PURE__*/_react["default"].createElement(_.Icon, {
      name: "arrow-bottom-2",
      width: "24",
      height: "24"
    }), /*#__PURE__*/_react["default"].createElement(_.Icon, {
      name: "arrow-top-2",
      width: "24",
      height: "24"
    }), /*#__PURE__*/_react["default"].createElement(_.Icon, {
      name: "arrow-left-2",
      width: "24",
      height: "24"
    }), /*#__PURE__*/_react["default"].createElement(_.Icon, {
      name: "arrow-right-2",
      width: "24",
      height: "24"
    }), /*#__PURE__*/_react["default"].createElement(_.Icon, {
      name: "eye",
      width: "24",
      height: "24"
    }), /*#__PURE__*/_react["default"].createElement(_.Icon, {
      name: "eye-not",
      width: "24",
      height: "24"
    }), /*#__PURE__*/_react["default"].createElement(_.Icon, {
      name: "file",
      color: "accent",
      width: "24",
      height: "24"
    }), /*#__PURE__*/_react["default"].createElement(_.Icon, {
      name: "photo",
      width: "24",
      height: "24"
    }), /*#__PURE__*/_react["default"].createElement(_.Icon, {
      name: "video",
      width: "24",
      height: "24"
    }), /*#__PURE__*/_react["default"].createElement(_.Icon, {
      name: "last-time",
      width: "24",
      height: "24"
    }), /*#__PURE__*/_react["default"].createElement(_.Icon, {
      name: "play",
      width: "24",
      height: "24"
    }), /*#__PURE__*/_react["default"].createElement(_.Icon, {
      name: "share",
      width: "24",
      height: "24"
    }), /*#__PURE__*/_react["default"].createElement(_.Icon, {
      name: "basket",
      width: "24",
      height: "24"
    }), /*#__PURE__*/_react["default"].createElement(_.Icon, {
      name: "download",
      width: "24",
      height: "24"
    }));

    var tree = _reactTestRenderer["default"].create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});