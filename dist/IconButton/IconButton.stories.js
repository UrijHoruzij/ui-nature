"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Secondary = exports.Primary = exports.OutlinePrimary = exports.Outline = exports.LinkPrimary = exports.Link = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: "Components/IconButton",
  component: _.IconButton
};
exports["default"] = _default;

var Primary = function Primary() {
  return /*#__PURE__*/_react["default"].createElement(_.IconButton, {
    icon: "close",
    type: "primary"
  });
};

exports.Primary = Primary;

var Secondary = function Secondary() {
  return /*#__PURE__*/_react["default"].createElement(_.IconButton, {
    icon: "close",
    type: "secondary"
  });
};

exports.Secondary = Secondary;

var Outline = function Outline() {
  return /*#__PURE__*/_react["default"].createElement(_.IconButton, {
    icon: "close",
    type: "outline"
  });
};

exports.Outline = Outline;

var OutlinePrimary = function OutlinePrimary() {
  return /*#__PURE__*/_react["default"].createElement(_.IconButton, {
    icon: "close",
    type: "outline-primary"
  });
};

exports.OutlinePrimary = OutlinePrimary;

var Link = function Link() {
  return /*#__PURE__*/_react["default"].createElement(_.IconButton, {
    icon: "close",
    type: "link"
  });
};

exports.Link = Link;

var LinkPrimary = function LinkPrimary() {
  return /*#__PURE__*/_react["default"].createElement(_.IconButton, {
    icon: "close",
    type: "link-primary"
  });
};

exports.LinkPrimary = LinkPrimary;