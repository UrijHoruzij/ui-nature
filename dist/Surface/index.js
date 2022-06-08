"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SurfaceContainer = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    border-radius: ", ";\n    background-color: ", ";\n    padding: 8px;\n    ", ";\n    min-width: 80px;\n    min-height: 80px;\n    width: ", ";\n    height: ", ";\n"])), function (props) {
  return props.theme.radius;
}, function (props) {
  return props.theme.colors.colorBg;
}, function (props) {
  return props.theme.shadow.popup;
}, function (props) {
  return props.width ? props.width : '80px';
}, function (props) {
  return props.height ? props.height : '80px';
});

var Surface = function Surface(props) {
  return /*#__PURE__*/_react["default"].createElement(SurfaceContainer, props, props.children);
};

Surface.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
var _default = Surface;
exports["default"] = _default;