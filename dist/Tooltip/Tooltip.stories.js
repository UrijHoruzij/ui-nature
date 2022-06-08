"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Top = exports.TooltipClose = exports.Right = exports.Left = exports.Default = exports.Bottom = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: "Components/Tooltip",
  component: _.Tooltip
};
exports["default"] = _default;

var Default = function Default() {
  return /*#__PURE__*/_react["default"].createElement(_.Tooltip, {
    position: "left",
    info: /*#__PURE__*/_react["default"].createElement(_.Typography, {
      type: "text",
      color: "text"
    }, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
  }, /*#__PURE__*/_react["default"].createElement(_.Button, null, "Left"));
};

exports.Default = Default;

var Left = function Left() {
  return /*#__PURE__*/_react["default"].createElement(_.Tooltip, {
    position: "left",
    info: /*#__PURE__*/_react["default"].createElement(_.Image, {
      src: "https://images.unsplash.com/photo-1477322524744-0eece9e79640"
    })
  }, /*#__PURE__*/_react["default"].createElement(_.Button, null, "Left"));
};

exports.Left = Left;

var Right = function Right() {
  return /*#__PURE__*/_react["default"].createElement(_.Tooltip, {
    position: "right",
    info: /*#__PURE__*/_react["default"].createElement(_.Image, {
      src: "https://images.unsplash.com/photo-1477322524744-0eece9e79640"
    })
  }, /*#__PURE__*/_react["default"].createElement(_.Button, null, "Right"));
};

exports.Right = Right;

var Top = function Top() {
  return /*#__PURE__*/_react["default"].createElement(_.Tooltip, {
    info: /*#__PURE__*/_react["default"].createElement(_.Image, {
      src: "https://images.unsplash.com/photo-1477322524744-0eece9e79640"
    }),
    position: "top"
  }, /*#__PURE__*/_react["default"].createElement(_.Button, null, "Top"));
};

exports.Top = Top;

var Bottom = function Bottom() {
  return /*#__PURE__*/_react["default"].createElement(_.Tooltip, {
    position: "bottom",
    info: /*#__PURE__*/_react["default"].createElement(_.Image, {
      src: "https://images.unsplash.com/photo-1477322524744-0eece9e79640"
    })
  }, /*#__PURE__*/_react["default"].createElement(_.Button, null, "Bottom"));
};

exports.Bottom = Bottom;

var TooltipClose = function TooltipClose() {
  return /*#__PURE__*/_react["default"].createElement(_.Tooltip, {
    visible: true,
    type: "tooltip-close",
    position: "bottom",
    info: /*#__PURE__*/_react["default"].createElement(_.Image, {
      src: "https://images.unsplash.com/photo-1477322524744-0eece9e79640"
    })
  }, /*#__PURE__*/_react["default"].createElement(_.Button, null, "Bottom"));
};

exports.TooltipClose = TooltipClose;