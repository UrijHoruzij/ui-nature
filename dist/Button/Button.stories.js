"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Secondary = exports.Primary = exports.OutlinePrimary = exports.Outline = exports.LinkPrimary = exports.Link = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: "Components/Button",
  component: _.Button
};
exports["default"] = _default;

var Primary = function Primary() {
  return /*#__PURE__*/_react["default"].createElement(_.Button, {
    type: "primary"
  }, "Primary");
};

exports.Primary = Primary;

var Secondary = function Secondary() {
  return /*#__PURE__*/_react["default"].createElement(_.Button, {
    type: "secondary"
  }, "Secondary");
};

exports.Secondary = Secondary;

var Outline = function Outline() {
  return /*#__PURE__*/_react["default"].createElement(_.Button, {
    type: "outline"
  }, "Outline");
};

exports.Outline = Outline;

var OutlinePrimary = function OutlinePrimary() {
  return /*#__PURE__*/_react["default"].createElement(_.Button, {
    type: "outline-primary"
  }, "Outline-primary");
};

exports.OutlinePrimary = OutlinePrimary;

var Link = function Link() {
  return /*#__PURE__*/_react["default"].createElement(_.Button, {
    type: "link"
  }, "Link");
};

exports.Link = Link;

var LinkPrimary = function LinkPrimary() {
  return /*#__PURE__*/_react["default"].createElement(_.Button, {
    type: "link-primary"
  }, "Link-primary");
};

exports.LinkPrimary = LinkPrimary;