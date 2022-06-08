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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PopupContainer = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  opacity: 0;\n  visibility: hidden;\n  border-radius: ", ";\n  background-color: ", ";\n  padding: 8px;\n  ", ";\n  min-width: 80px;\n  min-height: 80px;\n  max-width: 600px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 99999;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  ", ";\n  ", ";\n"])), function (props) {
  return props.theme.radius;
}, function (props) {
  return props.theme.colors.colorBg;
}, function (props) {
  return props.theme.shadow.popup;
}, function (props) {
  return props.border ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    border: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.colorBgSecondary;
  }) : '';
}, function (props) {
  return props.visible ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    opacity: 100%;\n    visibility: visible;\n  "]))) : '';
});

var PopupContent = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding-bottom: 12px;\n"])));

var Title = (0, _styledComponents["default"])(_.Typography)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));

var PopupCloseButton = _styledComponents["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n"])));

var Popup = function Popup(props) {
  var type = props.type,
      onClose = props.onClose,
      children = props.children,
      title = props.title;
  return /*#__PURE__*/_react["default"].createElement(PopupContainer, props, title || type === "popup-close" ? /*#__PURE__*/_react["default"].createElement(PopupContent, null, /*#__PURE__*/_react["default"].createElement(Title, {
    margin: true,
    type: "h4"
  }, title), type === "popup-close" ? /*#__PURE__*/_react["default"].createElement(PopupCloseButton, {
    onClick: onClose
  }, /*#__PURE__*/_react["default"].createElement(_.Icon, {
    name: "close"
  })) : null) : null, children);
};

Popup.propTypes = {
  type: _propTypes["default"].oneOf(["popup-close", "popup"]),
  visible: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  onClose: _propTypes["default"].func,
  border: _propTypes["default"].bool,
  title: _propTypes["default"].string
};
Popup.defaultProps = {
  type: "popup"
};
var _default = Popup;
exports["default"] = _default;