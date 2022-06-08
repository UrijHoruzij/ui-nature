"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _ = require("../");

var _ThemeProvide = _interopRequireDefault(require("../../ThemeProvide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe("Menu component", function () {
  test("Render menu", function () {
    var menu = [{
      id: 1,
      name: "Файлы",
      icon: "file",
      onClick: function onClick() {
        console.log("Файлы");
      }
    }, {
      id: 2,
      name: "Последние",
      icon: "last-time",
      onClick: function onClick() {
        console.log("Последние");
      }
    }, {
      id: 3,
      name: "Фотографии",
      icon: "photo",
      onClick: function onClick() {
        console.log("Фотографии");
      }
    }];

    var component = /*#__PURE__*/_react["default"].createElement(_ThemeProvide["default"], null, /*#__PURE__*/_react["default"].createElement(_.Menu, {
      menu: menu,
      activItem: 1
    }));

    var tree = _reactTestRenderer["default"].create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});