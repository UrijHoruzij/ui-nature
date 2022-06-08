"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _ = require("../");

var _ThemeProvide = _interopRequireDefault(require("../../ThemeProvide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe("Avatar component", function () {
  test("Render avatar", function () {
    var component = /*#__PURE__*/_react["default"].createElement(_ThemeProvide["default"], null, /*#__PURE__*/_react["default"].createElement(_.Avatar, {
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      fullname: "Helena Lopes",
      isOnline: true,
      size: "small"
    }), /*#__PURE__*/_react["default"].createElement(_.Avatar, {
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      fullname: "Helena Lopes",
      isOnline: true,
      size: "medium"
    }), /*#__PURE__*/_react["default"].createElement(_.Avatar, {
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      fullname: "Helena Lopes",
      isOnline: true,
      size: "large"
    }), /*#__PURE__*/_react["default"].createElement(_.Avatar, {
      user: "43764838932479234",
      fullname: "Helena Lopes",
      isOnline: true,
      size: "small"
    }));

    var tree = _reactTestRenderer["default"].create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});