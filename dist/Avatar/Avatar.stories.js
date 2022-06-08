"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SymbolSmall = exports.SymbolMedium = exports.SymbolLarge = exports.Small = exports.Medium = exports.Large = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: "Components/Avatar",
  component: _.Avatar
};
exports["default"] = _default;

var Small = function Small() {
  return /*#__PURE__*/_react["default"].createElement(_.Avatar, {
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    fullname: "Helena Lopes",
    isOnline: true,
    size: "small"
  });
};

exports.Small = Small;

var Medium = function Medium() {
  return /*#__PURE__*/_react["default"].createElement(_.Avatar, {
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    fullname: "Helena Lopes",
    isOnline: true,
    size: "medium"
  });
};

exports.Medium = Medium;

var Large = function Large() {
  return /*#__PURE__*/_react["default"].createElement(_.Avatar, {
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    fullname: "Helena Lopes",
    isOnline: true,
    size: "large"
  });
};

exports.Large = Large;

var SymbolSmall = function SymbolSmall() {
  return /*#__PURE__*/_react["default"].createElement(_.Avatar, {
    user: "43764838932479234",
    fullname: "Helena Lopes",
    isOnline: true,
    size: "small"
  });
};

exports.SymbolSmall = SymbolSmall;

var SymbolMedium = function SymbolMedium() {
  return /*#__PURE__*/_react["default"].createElement(_.Avatar, {
    user: "43764838932479234",
    fullname: "Helena Lopes",
    isOnline: true,
    size: "medium"
  });
};

exports.SymbolMedium = SymbolMedium;

var SymbolLarge = function SymbolLarge() {
  return /*#__PURE__*/_react["default"].createElement(_.Avatar, {
    user: "43764838932479234",
    fullname: "Helena Lopes",
    isOnline: true,
    size: "large"
  });
};

exports.SymbolLarge = SymbolLarge;