"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _ = require("../");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var changeType = function changeType(props) {
  switch (props.type) {
    case "primary":
      return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            background-color: ", ";\n            &:hover { background-color: ", "; }\n        "])), function (props) {
        return props.theme.colors.colorAccent;
      }, function (props) {
        return props.theme.colors.colorAccentActiv;
      });

    case "secondary":
      return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            background-color: ", ";\n            &:hover { background-color: ", "; }\n        "])), function (props) {
        return props.theme.colors.colorBgSecondary;
      }, function (props) {
        return props.theme.colors.colorTextSecondary;
      });

    case "outline":
      return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            background-color: transparent;\n            border: 1px solid ", ";\n            &:hover { background-color: ", "; }\n        "])), function (props) {
        return props.theme.colors.colorTextSecondary;
      }, function (props) {
        return props.theme.colors.colorBgSecondary;
      });

    case "outline-primary":
      return (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n            background-color: transparent;\n            border: 1px solid ", ";\n            &:hover { \n                background-color: ", ";\n            }\n        "])), function (props) {
        return props.theme.colors.colorAccent;
      }, function (props) {
        return props.theme.colors.colorAccent;
      });

    case "link-primary":
      return (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n            padding: 0;\n            background-color: transparent;\n        "])));

    case "link":
      return (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n            padding: 0;\n            background-color: transparent;\n        "])));
  }
};

var changeColor = function changeColor(props) {
  if (props.disabled) {
    return (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n            stroke: ", ";\n            fill: ", ";\n            &:hover{\n                stroke: ", ";\n                fill: ", ";\n            }\n        "])), function (props) {
      return props.theme.colors.colorTextSecondary;
    }, function (props) {
      return props.theme.colors.colorTextSecondary;
    }, function (props) {
      return props.theme.colors.colorTextSecondary;
    }, function (props) {
      return props.theme.colors.colorTextSecondary;
    });
  } else {
    switch (props.type) {
      case "primary":
        return (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n                    stroke: ", ";\n                    fill: ", ";\n                "])), function (props) {
          return props.theme.colors.colorTextContrast;
        }, function (props) {
          return props.theme.colors.colorTextContrast;
        });

      case "secondary":
        return (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n                    stroke: ", ";\n                    fill: ", ";\n                "])), function (props) {
          return props.theme.colors.colorText;
        }, function (props) {
          return props.theme.colors.colorText;
        });

      case "outline":
        return (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n                    stroke: ", ";\n                    fill: ", ";\n                "])), function (props) {
          return props.theme.colors.colorText;
        }, function (props) {
          return props.theme.colors.colorText;
        });

      case "outline-primary":
        return (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n                    stroke: ", ";\n                    fill: ", ";\n                    ", ":hover &&{\n                        stroke: ", ";\n                        fill: ", ";\n                    }\n                "])), function (props) {
          return props.theme.colors.colorText;
        }, function (props) {
          return props.theme.colors.colorText;
        }, Container, function (props) {
          return props.theme.colors.colorTextContrast;
        }, function (props) {
          return props.theme.colors.colorTextContrast;
        });

      case "link-primary":
        return (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n                    stroke: ", ";\n                    fill: ", ";\n                    &:hover { stroke: ", ";\n                        fill: ", "; }\n                "])), function (props) {
          return props.theme.colors.colorAccent;
        }, function (props) {
          return props.theme.colors.colorAccent;
        }, function (props) {
          return props.theme.colors.colorAccentActiv;
        }, function (props) {
          return props.theme.colors.colorAccentActiv;
        });

      case "link":
        return (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n                    stroke: ", ";\n                    fill: ", ";\n                "])), function (props) {
          return props.theme.colors.colorText;
        }, function (props) {
          return props.theme.colors.colorText;
        });
    }
  }
};

var Container = _styledComponents["default"].button(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  margin: 0;\n  ", "\n  text-decoration: none;\n  border: none;\n  border-radius: ", ";\n  outline: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: ", ";\n  transition: all ease-in-out 0.3s;\n  box-sizing: border-box;\n  ", ";\n  ", ";\n"])), function (props) {
  return props.overlay ? (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    padding: 0;\n  "]))) : (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    padding: 8px;\n  "])));
}, function (props) {
  return props.theme.radius;
}, function (props) {
  return props.disabled ? "default" : "pointer";
}, function (props) {
  return changeType(props);
}, function (props) {
  return props.disabled ? (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    &:hover {\n        background-color: ", ";\n    }\n  "])), props.theme.colors.colorBgSecondary, props.theme.colors.colorBgSecondary) : "";
});

var IconWrapper = (0, _styledComponents["default"])(_.Icon)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    ", "\n"])), function (props) {
  return changeColor(props);
});

var Overlay = _styledComponents["default"].span(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  position: absolute;\n  outline: none;\n  opacity: 0;\n  pointer-events: none;\n  user-select: none;\n"])));

var LabelOverlay = _styledComponents["default"].label(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  padding: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n"])));

var IconButton = function IconButton(props) {
  var icon = props.icon,
      overlay = props.overlay,
      size = props.size,
      type = props.type,
      disabled = props.disabled;
  return /*#__PURE__*/_react["default"].createElement(Container, props, overlay ? /*#__PURE__*/_react["default"].createElement(LabelOverlay, null, /*#__PURE__*/_react["default"].createElement(IconWrapper, {
    disabled: disabled,
    width: size,
    height: size,
    type: type,
    name: icon
  }), /*#__PURE__*/_react["default"].createElement(Overlay, null, overlay)) : /*#__PURE__*/_react["default"].createElement(IconWrapper, {
    disabled: disabled,
    width: size,
    height: size,
    type: type,
    name: icon
  }));
};

IconButton.propTypes = {
  type: _propTypes["default"].oneOf(['primary', 'secondary', 'outline', 'outline-primary', 'link', 'link-primary']),
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  icon: _propTypes["default"].string.isRequired,
  overlay: _propTypes["default"].element,
  disabled: _propTypes["default"].bool,
  size: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
IconButton.defaultProps = {
  type: 'primary',
  size: "16"
};
var _default = IconButton;
exports["default"] = _default;