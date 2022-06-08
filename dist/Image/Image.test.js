"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _ = require("../");

var _ThemeProvide = _interopRequireDefault(require("../../ThemeProvide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe("Image component", function () {
  test("Render image", function () {
    var component = /*#__PURE__*/_react["default"].createElement(_ThemeProvide["default"], null, /*#__PURE__*/_react["default"].createElement(_.Image, {
      width: "300",
      height: "400",
      src: "https://images.unsplash.com/photo-1477322524744-0eece9e79640"
    }));

    var tree = _reactTestRenderer["default"].create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});