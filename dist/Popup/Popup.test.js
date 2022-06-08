"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _ = require("../");

var _ThemeProvide = _interopRequireDefault(require("../../ThemeProvide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe("Popup component", function () {
  test("Render popup", function () {
    var component = /*#__PURE__*/_react["default"].createElement(_ThemeProvide["default"], null, /*#__PURE__*/_react["default"].createElement(_.Popup, {
      visible: true,
      style: {
        position: "relative",
        transform: "translate(0,0)",
        top: 0,
        left: 0
      }
    }, /*#__PURE__*/_react["default"].createElement(_.Typography, {
      type: "text"
    }, "Popup"), /*#__PURE__*/_react["default"].createElement(_.Typography, {
      type: "text"
    }, "description")), /*#__PURE__*/_react["default"].createElement(_.Popup, {
      title: "Popup",
      visible: true,
      style: {
        position: "relative",
        transform: "translate(0,0)",
        top: 0,
        left: 0
      },
      type: "popup-close"
    }, /*#__PURE__*/_react["default"].createElement(_.Typography, {
      type: "text"
    }, "Popup"), /*#__PURE__*/_react["default"].createElement(_.Typography, {
      type: "text"
    }, "description")), /*#__PURE__*/_react["default"].createElement(_.Popup, {
      visible: true,
      style: {
        position: "relative",
        transform: "translate(0,0)",
        top: 0,
        left: 0
      },
      type: "popup"
    }, /*#__PURE__*/_react["default"].createElement(_.Image, {
      src: "https://images.unsplash.com/photo-1477322524744-0eece9e79640"
    })));

    var tree = _reactTestRenderer["default"].create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});