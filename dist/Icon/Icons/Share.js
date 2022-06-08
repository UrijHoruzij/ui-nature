"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Share = function Share() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3 8L11 3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11 13L3 8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    stroke: "none",
    cx: "11",
    cy: "13",
    r: "2"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    stroke: "none",
    d: "M13 3C13 4.10457 12.1046 5 11 5C9.89543 5 9 4.10457 9 3C9 1.89543 9.89543 1 11 1C12.1046 1 13 1.89543 13 3Z"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    stroke: "none",
    cx: "3",
    cy: "8",
    r: "2"
  }));
};

var _default = Share;
exports["default"] = _default;