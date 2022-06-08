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

var FormContainer = _styledComponents["default"].form(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));

var Form = function Form(props) {
  return /*#__PURE__*/_react["default"].createElement(FormContainer, props, props.children);
};

Form.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node,
  style: _propTypes["default"].object,
  onSubmit: _propTypes["default"].func
};
var _default = Form;
exports["default"] = _default;