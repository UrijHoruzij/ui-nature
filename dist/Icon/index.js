"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _icons = _interopRequireDefault(require("./Icons/icons"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var changeColor = function changeColor(props) {
  switch (props.color) {
    case "accent":
      return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n                stroke: ", ";\n                fill: ", ";\n            "])), function (props) {
        return props.theme.colors.colorAccent;
      }, function (props) {
        return props.theme.colors.colorAccent;
      });

    case "secondary":
      return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n                stroke: ", ";\n                fill: ", ";\n            "])), function (props) {
        return props.theme.colors.colorIconSecondary;
      }, function (props) {
        return props.theme.colors.colorIconSecondary;
      });

    case "contrast":
      return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["stroke: ", ";"])), function (props) {
        return props.theme.colors.colorIconContrast;
      });

    default:
      return (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n                stroke: ", ";\n                fill: ", ";\n            "])), function (props) {
        return props.theme.colors.colorIcon;
      }, function (props) {
        return props.theme.colors.colorIcon;
      });
  }
};

var IconContainer = _styledComponents["default"].svg(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    ", ";\n    transition: all .3s ease-in-out;\n"])), function (props) {
  return changeColor(props);
});

var Icon = function Icon(props) {
  var name = props.name;
  return /*#__PURE__*/_react["default"].createElement(IconContainer, _extends({
    fill: "none",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _icons["default"][name]);
};

Icon.propTypes = {
  name: _propTypes["default"].string.isRequired,
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  className: _propTypes["default"].string,
  color: _propTypes["default"].string,
  style: _propTypes["default"].object
};
Icon.defaultProps = {
  width: "16",
  height: "16"
};
var _default = Icon;
exports["default"] = _default;