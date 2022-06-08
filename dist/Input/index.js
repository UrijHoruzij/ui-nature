"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var changeColorLabel = function changeColorLabel(props) {
  switch (props.status) {
    case "error":
      return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        border-bottom: 1px solid ", ";\n        &::after {\n          content: \"\";\n          border-bottom: 1px solid ", ";\n        }\n      "])), function (props) {
        return props.theme.colors.colorError;
      }, function (props) {
        return props.theme.colors.colorError;
      });

    case "warning":
      return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        border-bottom: 1px solid ", ";\n        &::after {\n          content: \"\";\n          border-bottom: 1px solid ", ";\n        }\n      "])), function (props) {
        return props.theme.colors.colorNotify;
      }, function (props) {
        return props.theme.colors.colorNotify;
      });

    case "success":
      return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        border-bottom: 1px solid ", ";\n        &::after {\n          border-bottom: 1px solid ", ";\n        }\n      "])), function (props) {
        return props.theme.colors.colorAccent;
      }, function (props) {
        return props.theme.colors.colorAccent;
      });

    default:
      return "";
  }
};

var changeColorHelp = function changeColorHelp(props) {
  switch (props.status) {
    case "error":
      return (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["color: ", ";"])), function (props) {
        return props.theme.colors.colorError;
      });

    case "warning":
      return (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["color: ", ";"])), function (props) {
        return props.theme.colors.colorNotify;
      });

    case "success":
      return (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["color: ", ""])), props.theme.colors.colorAccent);

    default:
      return "";
  }
};

var FormItem = _styledComponents["default"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-family: ", ", sans-serif;\n  width: 100%;\n  position: relative;\n  height: 100%;\n  overflow: hidden;\n  & input::placeholder {\n    opacity: 0;\n  }\n"])), function (props) {
  return props.theme.fontFamily;
});

var InputContainer = _styledComponents["default"].input(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  font-family: ", ", sans-serif;\n  font-weight: 400;\n  width: 100%;\n  height: 32px;\n  padding: 0;\n  padding-top: ", ";\n  font-size: 16px;\n  color: ", ";\n  border: none;\n  outline: none;\n  ", "\n  &:focus + label::after,\n  &:valid + label::after {\n    transform: translateX(0%);\n  }\n"])), function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.visibleTitle ? '20px' : 0;
}, function (props) {
  return props.theme.colors.colorText;
}, function (props) {
  return props.visibleTitle ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    &:focus + label > span,\n    &:valid + label > span {\n      transform: translateY(-150%);\n      font-size: 14px;\n    }\n  "]))) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    &:focus + label > div,\n    &:valid + label > div {\n      opacity: 0\n    }\n  "])));
});

var Label = _styledComponents["default"].label(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-bottom: 1px solid ", ";\n  pointer-events: none;\n  ", ";\n  &::after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    bottom: -1px;\n    height: 100%;\n    width: 100%;\n    border-bottom: 1px solid ", ";\n    transform: translateX(-100%);\n    transition: transform 0.3s ease-in-out;\n  }\n"])), function (props) {
  return props.theme.colors.colorTextSecondary;
}, function (props) {
  return changeColorLabel(props);
}, function (props) {
  return props.theme.colors.colorAccent;
});

var LabelName = _styledComponents["default"].span(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 4px;\n  left: 0;\n  color: ", ";\n  transition: all 0.3s ease-in-out;\n"])), function (props) {
  return props.theme.colors.colorTextSecondary;
});

var Help = _styledComponents["default"].div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  font-family: ", ", sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  margin-top: 4px;\n  ", "\n"])), function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return changeColorHelp(props);
});

var Input = function Input(props) {
  var placeholder = props.placeholder,
      name = props.name,
      status = props.status,
      help = props.help,
      visibleTitle = props.visibleTitle;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(FormItem, null, /*#__PURE__*/_react["default"].createElement(InputContainer, _extends({
    required: true
  }, props)), visibleTitle ? /*#__PURE__*/_react["default"].createElement(Label, {
    htmlFor: name,
    status: status
  }, /*#__PURE__*/_react["default"].createElement(LabelName, null, placeholder)) : /*#__PURE__*/_react["default"].createElement(Label, {
    htmlFor: name,
    status: status
  }, /*#__PURE__*/_react["default"].createElement(LabelName, {
    as: "div"
  }, placeholder))), /*#__PURE__*/_react["default"].createElement(Help, {
    status: status
  }, help));
};

Input.propTypes = {
  value: _propTypes["default"].any.isRequired,
  placeholder: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  type: _propTypes["default"].oneOf(['email', 'password', 'tel', 'text', 'url']),
  name: _propTypes["default"].string,
  status: _propTypes["default"].oneOf(['error', 'success', 'warning', 'default']),
  help: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  onChange: _propTypes["default"].func,
  visibleTitle: _propTypes["default"].bool
};
Input.defaultProps = {
  type: "text",
  status: "default",
  visibleTitle: true
};
var _default = Input;
exports["default"] = _default;