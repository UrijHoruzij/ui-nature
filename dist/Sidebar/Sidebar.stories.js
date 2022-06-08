"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = exports.Acrilic = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: "Components/Sidebar",
  component: _.Sidebar
};
exports["default"] = _default;

var Default = function Default() {
  return /*#__PURE__*/_react["default"].createElement(_.Sidebar, {
    color: "#ebeaea"
  }, /*#__PURE__*/_react["default"].createElement(_.Typography, {
    type: "h1"
  }, "\u0425\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435"), /*#__PURE__*/_react["default"].createElement(_.Avatar, {
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    fullname: "Helena Lopes",
    style: {
      marginTop: "24px"
    },
    size: "large"
  }), /*#__PURE__*/_react["default"].createElement(_.Button, {
    style: {
      marginTop: "24px"
    }
  }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C"));
};

exports.Default = Default;

var Acrilic = function Acrilic() {
  return /*#__PURE__*/_react["default"].createElement(_.Sidebar, {
    blur: true,
    color: "rgba(10,110,168,0.25)",
    background: "https://images.unsplash.com/photo-1605505027420-a74af00e6ee2"
  }, /*#__PURE__*/_react["default"].createElement(_.Typography, {
    type: "h1"
  }, "\u0425\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435"), /*#__PURE__*/_react["default"].createElement(_.Avatar, {
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    fullname: "Helena Lopes",
    style: {
      marginTop: "24px"
    },
    size: "large"
  }), /*#__PURE__*/_react["default"].createElement(_.Button, {
    style: {
      marginTop: "24px"
    }
  }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C"));
};

exports.Acrilic = Acrilic;