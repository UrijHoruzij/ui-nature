"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Typography = _interopRequireDefault(require("../Typography"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var EmptyContainer = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"])));

var EmptyImage = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    max-width: 120px;\n    max-height: 120px;\n"])));

var EmptyDescription = (0, _styledComponents["default"])(_Typography["default"])(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin: 0;\n    margin-top: 8px;\n"])));

var Empty = function Empty(props) {
  var image = props.image,
      description = props.description;
  return /*#__PURE__*/_react["default"].createElement(EmptyContainer, props, image ? /*#__PURE__*/_react["default"].createElement(EmptyImage, null, image) : null, /*#__PURE__*/_react["default"].createElement(EmptyDescription, {
    type: "text"
  }, description));
};

Empty.propTypes = {
  image: _propTypes["default"].element,
  description: _propTypes["default"].string.isRequired,
  className: _propTypes["default"].string
};
var _default = Empty;
exports["default"] = _default;