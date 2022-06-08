"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _ = require("../");

var _ThemeProvide = _interopRequireDefault(require("../../ThemeProvide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe("Tooltip component", function () {
  test("Render tooltip", function () {
    var component = /*#__PURE__*/_react["default"].createElement(_ThemeProvide["default"], null, /*#__PURE__*/_react["default"].createElement(_.Tooltip, {
      position: "left",
      info: /*#__PURE__*/_react["default"].createElement(_.Typography, {
        type: "text",
        color: "text"
      }, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
    }, /*#__PURE__*/_react["default"].createElement(_.Button, null, "Left")), /*#__PURE__*/_react["default"].createElement(_.Tooltip, {
      position: "left",
      info: /*#__PURE__*/_react["default"].createElement(_.Image, {
        src: "https://images.unsplash.com/photo-1477322524744-0eece9e79640"
      })
    }, /*#__PURE__*/_react["default"].createElement(_.Button, null, "Left")), /*#__PURE__*/_react["default"].createElement(_.Tooltip, {
      position: "right",
      info: /*#__PURE__*/_react["default"].createElement(_.Image, {
        src: "https://images.unsplash.com/photo-1477322524744-0eece9e79640"
      })
    }, /*#__PURE__*/_react["default"].createElement(_.Button, null, "Right")), /*#__PURE__*/_react["default"].createElement(_.Tooltip, {
      info: /*#__PURE__*/_react["default"].createElement(_.Image, {
        src: "https://images.unsplash.com/photo-1477322524744-0eece9e79640"
      }),
      position: "top"
    }, /*#__PURE__*/_react["default"].createElement(_.Button, null, "Top")), /*#__PURE__*/_react["default"].createElement(_.Tooltip, {
      position: "bottom",
      info: /*#__PURE__*/_react["default"].createElement(_.Image, {
        src: "https://images.unsplash.com/photo-1477322524744-0eece9e79640"
      })
    }, /*#__PURE__*/_react["default"].createElement(_.Button, null, "Bottom")), /*#__PURE__*/_react["default"].createElement(_.Tooltip, {
      visible: true,
      type: "tooltip-close",
      position: "bottom",
      info: /*#__PURE__*/_react["default"].createElement(_.Image, {
        src: "https://images.unsplash.com/photo-1477322524744-0eece9e79640"
      })
    }, /*#__PURE__*/_react["default"].createElement(_.Button, null, "Bottom")));

    var tree = _reactTestRenderer["default"].create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});