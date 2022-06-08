"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Photo = function Photo() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    d: "M15 3H1V13H15V3Z",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    fill: "none",
    cx: "6",
    cy: "6",
    r: "0.75",
    strokeWidth: "0.5"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    d: "M1 13L5.2 9.11111L6.6 10.6667L10.8 6L15 11.4444",
    strokeWidth: "0.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var _default = Photo;
exports["default"] = _default;