"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 320px;\n    max-width: 320px;\n    height: 100%;\n    max-height: 100vh;\n    background-repeat: no-repeat;\n    background-size: cover;\n    z-index: 0;\n    ", "\n"])), function (props) {
  return props.background ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        background-image: url(", ")\n    "])), props.background) : '';
});

var Color = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    ", "\n"])), function (props) {
  return props.color ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        background-color: ", ";\n    "])), props.color) : '';
});

var Blur = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    z-index: 2;\n    ", "\n"])), function (props) {
  return props.blur ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        backdrop-filter: blur(", ");;\n    "])), props.theme.blur) : '';
});

var Sidebar = function Sidebar(props) {
  var children = props.children,
      color = props.color,
      blur = props.blur;
  return /*#__PURE__*/_react["default"].createElement(Container, props, /*#__PURE__*/_react["default"].createElement(Color, {
    color: color
  }, /*#__PURE__*/_react["default"].createElement(Blur, {
    blur: blur
  }, children)));
};

Sidebar.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  background: _propTypes["default"].string,
  color: _propTypes["default"].string,
  blur: _propTypes["default"].bool
};
var _default = Sidebar;
exports["default"] = _default;