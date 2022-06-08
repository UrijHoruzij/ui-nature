"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PopupThumbnail = exports.PopupClose = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: "Components/Popup",
  component: _.Popup
};
exports["default"] = _default;

var Default = function Default() {
  return /*#__PURE__*/_react["default"].createElement(_.Popup, {
    visible: true,
    style: {
      position: "relative",
      transform: "translate(0,0)",
      top: 0,
      left: 0
    }
  }, /*#__PURE__*/_react["default"].createElement(_.Typography, {
    type: "text"
  }, "Popup"), /*#__PURE__*/_react["default"].createElement(_.Typography, {
    type: "text"
  }, "description"));
};

exports.Default = Default;

var PopupClose = function PopupClose() {
  return /*#__PURE__*/_react["default"].createElement(_.Popup, {
    title: "Popup",
    visible: true,
    style: {
      position: "relative",
      transform: "translate(0,0)",
      top: 0,
      left: 0
    },
    type: "popup-close"
  }, /*#__PURE__*/_react["default"].createElement(_.Typography, {
    type: "text"
  }, "Popup"), /*#__PURE__*/_react["default"].createElement(_.Typography, {
    type: "text"
  }, "description"));
};

exports.PopupClose = PopupClose;

var PopupThumbnail = function PopupThumbnail() {
  return /*#__PURE__*/_react["default"].createElement(_.Popup, {
    visible: true,
    style: {
      position: "relative",
      transform: "translate(0,0)",
      top: 0,
      left: 0
    },
    type: "popup"
  }, /*#__PURE__*/_react["default"].createElement(_.Image, {
    src: "https://images.unsplash.com/photo-1477322524744-0eece9e79640"
  }));
};

exports.PopupThumbnail = PopupThumbnail;