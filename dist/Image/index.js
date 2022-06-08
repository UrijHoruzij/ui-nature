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

var ImageContainer = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    width: ", ";\n    height: ", ";\n"])), function (props) {
  return props.width ? props.width + 'px' : '100%';
}, function (props) {
  return props.height ? props.height + 'px' : '100%';
});

var ImageWrapper = _styledComponents["default"].img(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    border: none;\n    border-radius: ", ";\n    object-fit: cover;\n"])), function (props) {
  return props.theme.radius;
});

var Image = function Image(props) {
  var alt = props.alt,
      src = props.src;
  return /*#__PURE__*/_react["default"].createElement(ImageContainer, props, /*#__PURE__*/_react["default"].createElement(ImageWrapper, {
    alt: alt,
    src: src
  }));
};

Image.propTypes = {
  alt: _propTypes["default"].string,
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  src: _propTypes["default"].string.isRequired,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
var _default = Image;
exports["default"] = _default;