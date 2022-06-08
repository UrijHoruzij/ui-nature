"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _ = require("../");

var _ThemeProvide = _interopRequireDefault(require("../../ThemeProvide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe("Input component", function () {
  test("Render input", function () {
    var component = /*#__PURE__*/_react["default"].createElement(_ThemeProvide["default"], null, /*#__PURE__*/_react["default"].createElement(_.Input, {
      type: "text",
      value: "",
      placeholder: "\u041B\u043E\u0433\u0438\u043D",
      name: "login",
      onChange: function onChange() {}
    }), /*#__PURE__*/_react["default"].createElement(_.Input, {
      type: "text",
      value: "",
      placeholder: "\u041B\u043E\u0433\u0438\u043D",
      name: "login",
      status: "success",
      onChange: function onChange() {}
    }), /*#__PURE__*/_react["default"].createElement(_.Input, {
      type: "text",
      value: "",
      placeholder: "\u041B\u043E\u0433\u0438\u043D",
      name: "login",
      status: "warning",
      onChange: function onChange() {}
    }), /*#__PURE__*/_react["default"].createElement(_.Input, {
      type: "text",
      value: "",
      placeholder: "\u041B\u043E\u0433\u0438\u043D",
      name: "login",
      help: "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",
      status: "error",
      onChange: function onChange() {}
    }), /*#__PURE__*/_react["default"].createElement(_.Input, {
      type: "text",
      value: "",
      placeholder: "\u041B\u043E\u0433\u0438\u043D",
      name: "login",
      onChange: function onChange() {},
      visibleTitle: false
    }));

    var tree = _reactTestRenderer["default"].create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});