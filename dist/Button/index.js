"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var changeType = function changeType(props) {
  switch (props.type) {
    case "primary":
      return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        color: ", ";\n        background-color: ", ";\n        &:hover { background-color: ", "; }\n      "])), function (props) {
        return props.theme.colors.colorTextContrast;
      }, function (props) {
        return props.theme.colors.colorAccent;
      }, function (props) {
        return props.theme.colors.colorAccentActiv;
      });

    case "secondary":
      return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        color: ", ";\n        background-color: ", ";\n        &:hover { background-color: ", "; }\n      "])), function (props) {
        return props.theme.colors.colorText;
      }, function (props) {
        return props.theme.colors.colorBgSecondary;
      }, function (props) {
        return props.theme.colors.colorTextSecondary;
      });

    case "outline":
      return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        color: ", ";\n        background-color: transparent;\n        border: 1px solid ", ";\n        &:hover { background-color: ", "; }\n      "])), function (props) {
        return props.theme.colors.colorText;
      }, function (props) {
        return props.theme.colors.colorTextSecondary;
      }, function (props) {
        return props.theme.colors.colorBgSecondary;
      });

    case "outline-primary":
      return (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        color: ", ";\n        background-color: transparent;\n        border: 1px solid ", ";\n        &:hover { \n          background-color: ", ";\n          color: ", ";\n        }\n      "])), function (props) {
        return props.theme.colors.colorText;
      }, function (props) {
        return props.theme.colors.colorAccent;
      }, function (props) {
        return props.theme.colors.colorAccent;
      }, function (props) {
        return props.theme.colors.colorTextContrast;
      });

    case "link-primary":
      return (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        padding: 0;\n        height: 100%;\n        color: ", ";\n        background-color: transparent;\n        &:hover { color: ", "; }\n      "])), function (props) {
        return props.theme.colors.colorAccent;
      }, function (props) {
        return props.theme.colors.colorAccentActiv;
      });

    case "link":
      return (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        padding: 0;\n        height: 100%;\n        color: ", ";\n        background-color: transparent;\n        &:hover { color: ", "; }\n      "])), function (props) {
        return props.theme.colors.colorText;
      }, function (props) {
        return props.theme.colors.colorText;
      });
  }
};

var ButtonContainer = _styledComponents["default"].button(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-family: ", ", sans-serif;\n  font-size: 16px;\n  line-height: 20px;\n  font-weight: 400;\n  margin: 0;\n  padding: ", ";\n  text-decoration: none;\n  height: 32px;\n  border: none;\n  border-radius: ", ";\n  outline: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: ", ";\n  transition: all ease-in-out 0.3s;\n  box-sizing: border-box;\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"])), function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.overlay ? '8px 0px' : '8px 16px';
}, function (props) {
  return props.theme.radius;
}, function (props) {
  return props.disabled ? "default" : "pointer";
}, function (props) {
  return changeType(props);
}, function (props) {
  return props.disabled ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    color: ", ";\n    background-color: ", ";\n    &:hover {\n      color: ", ";\n      background-color: ", ";\n    }\n  "])), props.theme.colors.colorTextSecondary, props.theme.colors.colorBgSecondary, props.theme.colors.colorTextSecondary, props.theme.colors.colorBgSecondary) : "";
}, function (props) {
  return props.rounded ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    border-radius: 32px;\n  "]))) : "";
}, function (props) {
  return props.fullWidth ? (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    width: 100%;\n  "]))) : "";
});

var loading = (0, _styledComponents.keyframes)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  0% {\n    opacity: 100%;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 100%;\n  }\n"])));

var Loading = _styledComponents["default"].span(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));

var Dot = _styledComponents["default"].span(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  width: 4px;\n  height: 4px;\n  border-radius: 4px;\n  background-color: ", ";\n  animation: ", " 1s infinite;\n  &:nth-child(1){\n    margin-right: 4px;\n    animation-delay: 0.33s;\n  }\n  &:nth-child(2){\n    animation-delay: 0.66s;\n  }\n  &:nth-child(3){\n    margin-left: 4px;\n    animation-delay: 0.99s;\n  }\n"])), function (props) {
  return props.theme.colors.colorBg;
}, loading);

var Overlay = _styledComponents["default"].span(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  outline: none;\n  opacity: 0;\n  pointer-events: none;\n  user-select: none;\n"])));

var LabelOverlay = _styledComponents["default"].label(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  padding: 8px 16px;\n"])));

var Icon = _styledComponents["default"].div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  width: 16px;\n  height: 16px;\n  ", "\n"])), function (props) {
  return props.iconPosition === "left" ? (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    margin-right: 4px;\n  "]))) : (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    margin-left: 4px;\n  "])));
});

var Button = function Button(props) {
  var children = props.children,
      icon = props.icon,
      iconPosition = props.iconPosition,
      overlay = props.overlay,
      loadingData = props.loadingData;

  var content = function content() {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, loadingData ? /*#__PURE__*/_react["default"].createElement(Loading, null, /*#__PURE__*/_react["default"].createElement(Dot, null), /*#__PURE__*/_react["default"].createElement(Dot, null), /*#__PURE__*/_react["default"].createElement(Dot, null)) : icon && iconPosition === "left" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Icon, {
      iconPosition: iconPosition
    }, icon), children) : icon && iconPosition === "right" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children, /*#__PURE__*/_react["default"].createElement(Icon, {
      iconPosition: iconPosition
    }, icon)) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children));
  };

  return /*#__PURE__*/_react["default"].createElement(ButtonContainer, props, overlay ? /*#__PURE__*/_react["default"].createElement(LabelOverlay, null, content(), /*#__PURE__*/_react["default"].createElement(Overlay, null, overlay)) : content());
};

Button.propTypes = {
  type: _propTypes["default"].oneOf(['primary', 'secondary', 'outline', 'outline-primary', 'link', 'link-primary']),
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  children: _propTypes["default"].node,
  icon: _propTypes["default"].node,
  iconPosition: _propTypes["default"].oneOf(['left', 'right']),
  overlay: _propTypes["default"].element,
  disabled: _propTypes["default"].bool,
  fullWidth: _propTypes["default"].bool,
  loadingData: _propTypes["default"].bool,
  rounded: _propTypes["default"].bool
};
Button.defaultProps = {
  type: 'primary',
  iconPosition: 'left',
  loadingData: false
};
var _default = Button;
exports["default"] = _default;