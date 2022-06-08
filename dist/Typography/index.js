"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var changeColor = function changeColor(props) {
  switch (props.color) {
    case "accent":
      return props.theme.colors.colorAccent;

    case "text":
      return props.theme.colors.colorText;

    case "secondary":
      return props.theme.colors.colorTextSecondary;

    case "contrast":
      return props.theme.colors.colorTextContrast;

    default:
      return props.theme.colors.colorText;
  }
};

var changeTransform = function changeTransform(transform) {
  switch (transform) {
    case "capitalize":
      return "capitalize";

    case "lowercase":
      return "lowercase";

    case "uppercase":
      return "uppercase";

    default:
      return "none";
  }
};

var changeDecoration = function changeDecoration(decoration) {
  switch (decoration) {
    case "overline":
      return "overline";

    case "underline":
      return "underline";

    case "line-through":
      return "line-through";

    default:
      return "none";
  }
};

var Wrapper = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-family: ", ", sans-serif;\n  border: none;\n  outline: none;\n  font-weight: 500;\n  color: ", ";\n  text-transform: ", ";\n  text-decoration: ", ";\n  ", "\n"])), function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return changeColor(props);
}, function (props) {
  return changeTransform(props.transform);
}, function (props) {
  return changeDecoration(props.decoration);
}, function (props) {
  return props.margin ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n          margin: 0;\n        "]))) : null;
});

var H1 = (0, _styledComponents["default"])(Wrapper)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 24px;\n  line-height: 32px;\n"])));
var H2 = (0, _styledComponents["default"])(Wrapper)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 20px;\n  line-height: 28px;\n"])));
var H3 = (0, _styledComponents["default"])(Wrapper)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-size: 18px;\n  line-height: 24px;\n"])));
var H4 = (0, _styledComponents["default"])(Wrapper)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  line-height: 20px;\n"])));
var P = (0, _styledComponents["default"])(Wrapper)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  line-height: 20px;\n  font-weight: 400;\n"])));
var Menu = (0, _styledComponents["default"])(P)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  margin: 0;\n"])));

var Typography = function Typography(props) {
  switch (props.type) {
    case "h1":
      return /*#__PURE__*/_react["default"].createElement(H1, _extends({
        as: "h1"
      }, props));

    case "h2":
      return /*#__PURE__*/_react["default"].createElement(H2, _extends({
        as: "h2"
      }, props));

    case "h3":
      return /*#__PURE__*/_react["default"].createElement(H3, _extends({
        as: "h3"
      }, props));

    case "h4":
      return /*#__PURE__*/_react["default"].createElement(H4, _extends({
        as: "h4"
      }, props));

    case "text":
      return /*#__PURE__*/_react["default"].createElement(P, _extends({
        as: "p"
      }, props));

    case "menu":
      return /*#__PURE__*/_react["default"].createElement(Menu, _extends({
        as: "p"
      }, props));

    default:
      return /*#__PURE__*/_react["default"].createElement(P, _extends({
        as: "p"
      }, props));
  }
};

Typography.propTypes = {
  type: _propTypes["default"].oneOf(["h1", "h2", "h3", "h4", "text", "menu"]),
  color: _propTypes["default"].oneOf(["accent", "text", "secondary", "contrast"]),
  children: _propTypes["default"].node,
  transform: _propTypes["default"].oneOf(["capitalize", "lowercase", "uppercase"]),
  decoration: _propTypes["default"].oneOf(["underline", "overline", "line-through"]),
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  margin: _propTypes["default"].bool
};
Typography.defaultProps = {
  color: "text"
};
var _default = Typography;
exports["default"] = _default;