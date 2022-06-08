"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _ = require("../");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var changePosition = function changePosition(props) {
  switch (props.position) {
    case "top":
      return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        div {\n          bottom: calc(100% + 16px);\n          left: 50%;\n          transform: translateX(-50%);\n          &::before {\n            bottom: -4px;\n            left: 50%;\n            margin-left: -4px;\n          }\n        }\n      "])));

    case "bottom":
      return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        div {\n          top: calc(100% + 16px);\n          left: 50%;\n          transform: translateX(-50%);\n          &::before {\n            top: -4px;\n            left: 50%;\n            margin-left: -4px;\n          }\n        }\n      "])));

    case "left":
      return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        div {\n          right: calc(100% + 16px);\n          top: 50%;\n          transform: translateY(-50%);\n          &::before {\n            right: -4px;\n            margin-top: -4px;\n            top: 50%;\n          }\n        }\n      "])));

    case "right":
      return (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        div {\n          left: calc(100% + 16px);\n          top: 50%;\n          transform: translateY(-50%);\n          &::before {\n            left: -4px;\n            margin-top: -4px;\n            top: 50%;\n          }\n        }\n      "])));
  }
};

var Container = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: relative;\n  overflow: hidden;\n  display: inline-flex;\n  ", ";\n  &:hover {\n    overflow: visible;\n    div {\n      opacity: 1;\n    }\n  }\n  ", ";\n"])), function (props) {
  return props.type === "tooltip-close" && props.visible ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n          overflow: visible;\n          div {\n            opacity: 1;\n          }\n        "]))) : "";
}, function (props) {
  return changePosition(props);
});

var Content = _styledComponents["default"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  z-index: 10;\n  background: ", ";\n  ", ";\n  box-sizing: border-box;\n  border-radius: ", ";\n  color: ", ";\n  max-width: 320px;\n  min-width: 176px;\n  padding: 4px;\n  position: absolute;\n  opacity: 0;\n  transition: all 0.3s ease-in-out;\n  ", ";\n  &::before {\n    z-index: -1;\n    background: ", ";\n    content: \"\";\n    height: 8px;\n    position: absolute;\n    transform: rotate(45deg);\n    width: 8px;\n  }\n"])), function (props) {
  return props.theme.colors.colorBg;
}, function (props) {
  return props.theme.shadow.tooltip;
}, function (props) {
  return props.theme.radius;
}, function (props) {
  return props.theme.colors.colorText;
}, function (props) {
  return props.type === "tooltip-close" ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n          padding-top: 32px;\n        "]))) : "";
}, function (props) {
  return props.theme.colors.colorBg;
});

var CloseButton = _styledComponents["default"].div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  cursor: pointer;\n"])));

var Tooltip = function Tooltip(props) {
  var type = props.type,
      children = props.children,
      info = props.info,
      onClose = props.onClose;
  return /*#__PURE__*/_react["default"].createElement(Container, props, children, /*#__PURE__*/_react["default"].createElement(Content, {
    type: type
  }, type === "tooltip-close" ? /*#__PURE__*/_react["default"].createElement(CloseButton, {
    onClick: onClose
  }, /*#__PURE__*/_react["default"].createElement(_.Icon, {
    name: "close"
  })) : null, info));
};

Tooltip.propTypes = {
  type: _propTypes["default"].oneOf(["tooltip", "tooltip-close"]),
  position: _propTypes["default"].oneOf(["left", "right", "top", "bottom"]),
  info: _propTypes["default"].node,
  children: _propTypes["default"].node,
  onClose: _propTypes["default"].func,
  visible: _propTypes["default"].bool
};
Tooltip.defaultProps = {
  type: "tooltip",
  position: "top",
  visible: false
};
var _default = Tooltip;
exports["default"] = _default;