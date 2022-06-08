"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    margin-right: 2px;\n"])));

var Content = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 100%;\n    height: ", ";\n    min-height: 100px;\n    overflow-y: scroll;\n    scrollbar-width: thin;\n    scrollbar-width: ", ";\n    &::-webkit-scrollbar {\n        width: 2px;\n    }\n    &::-webkit-scrollbar-thumb {\n        border-radius: ", ";\n        background: ", "; \n    }\n"])), function (props) {
  return props.height ? props.height + "px" : '100px';
}, function (props) {
  return props.theme.colors.colorAccent;
}, function (props) {
  return props.theme.radius;
}, function (props) {
  return props.theme.colors.colorAccent;
});

var Frame = function Frame(props) {
  return /*#__PURE__*/_react["default"].createElement(Container, null, /*#__PURE__*/_react["default"].createElement(Content, props, props.children));
};

Frame.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
var _default = Frame;
exports["default"] = _default;