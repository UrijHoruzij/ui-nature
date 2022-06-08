"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _ = require("../");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var changeColor = function changeColor(props) {
  if (props.activ && !props.disabled) {
    return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["border: 1px solid  ", ""])), props.theme.colors.colorAccent);
  }

  if (props.activ && props.disabled || !props.activ && props.disabled) {
    return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["border: 1px solid ", ""])), props.theme.colors.colorTextSecondary);
  }

  if (!props.activ && !props.disabled) {
    return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["border: 1px solid ", ""])), props.theme.colors.colorText);
  }
};

var Container = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n"])));

var Label = _styledComponents["default"].label(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    cursor: pointer;\n    position: relative;\n    outline: none;\n    background: ", ";\n    ", ";\n    border-radius: ", ";\n    width: 16px;\n    height: 16px;\n    display: flex;\n    justify-content: center;\n    span{\n        position: absolute;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        opacity: 0;\n    }\n"])), function (props) {
  return props.theme.colors.colorBg;
}, function (props) {
  return changeColor(props);
}, function (props) {
  return props.theme.radius;
});

var Input = _styledComponents["default"].input.attrs({
  type: "checkbox"
})(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    display: none;\n    &:checked + ", "{\n        span{\n            opacity: 100%;\n        } \n    }\n"])), Label);

var Content = _styledComponents["default"].label(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    margin-left: 8px;\n    font-size: 16px;\n    font-family: ", ", sans-serif;\n    color: ", ";\n    cursor: pointer;\n"])), function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.disabled ? props.theme.colors.colorTextSecondary : props.theme.colors.colorText;
});

var IconWrapper = (0, _styledComponents["default"])(_.Icon)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    stroke: ", ";\n    fill: ", ";\n"])), function (props) {
  return props.theme.colors.colorText;
}, function (props) {
  return props.theme.colors.colorText;
});

var CheckBox = function CheckBox(props) {
  var name = props.name,
      checked = props.checked,
      style = props.style,
      className = props.className,
      disabled = props.disabled;

  var _useState = (0, _react.useState)(!!checked),
      _useState2 = _slicedToArray(_useState, 2),
      activ = _useState2[0],
      setActiv = _useState2[1];

  var handleChange = function handleChange(props) {
    if (props.onChange) {
      props.onChange();
    }

    if (!props.disabled) {
      setActiv(!activ);
    }
  };

  return /*#__PURE__*/_react["default"].createElement(Container, _extends({}, style, className), /*#__PURE__*/_react["default"].createElement(Input, {
    id: name,
    name: name,
    defaultChecked: activ,
    onChange: function onChange() {
      return handleChange(props);
    },
    disabled: disabled
  }), /*#__PURE__*/_react["default"].createElement(Label, _extends({
    htmlFor: name
  }, activ ? {
    activ: true
  } : '', {
    disabled: disabled
  }), /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(IconWrapper, {
    name: "check",
    width: "16",
    height: "16"
  }))), /*#__PURE__*/_react["default"].createElement(Content, {
    htmlFor: name,
    disabled: disabled
  }, "Checkbox"));
};

CheckBox.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  name: _propTypes["default"].string.isRequired,
  checked: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  disabled: _propTypes["default"].bool
};
var _default = CheckBox;
exports["default"] = _default;