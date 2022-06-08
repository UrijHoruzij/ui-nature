"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _tinycolor = _interopRequireDefault(require("tinycolor2"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var changeSizeContainer = function changeSizeContainer(size) {
  switch (size) {
    case "small":
      return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        width: 44px;\n        height: 44px;\n      "])));

    case "medium":
      return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        width: 88px;\n        height: 88px;\n      "])));

    case "large":
      return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        width: 176px;\n        height: 176px;\n      "])));
  }
};

var changeSize = function changeSize(size) {
  switch (size) {
    case "small":
      return (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        max-width: 44px;\n        max-height: 44px;\n      "])));

    case "medium":
      return (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        max-width: 88px;\n        max-height: 88px;\n      "])));

    case "large":
      return (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        max-width: 176px;\n        max-height: 176px;\n      "])));
  }
};

var changeSizeSymbol = function changeSizeSymbol(size) {
  switch (size) {
    case "small":
      return (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["font-size: 18px;"])));

    case "medium":
      return (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["font-size: 24px;"])));

    case "large":
      return (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["font-size: 36px;"])));
  }
};

var changeSizeOnlineBg = function changeSizeOnlineBg(size) {
  switch (size) {
    case "small":
      return (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        width: 8px;\n        height: 8px;\n      "])));

    case "medium":
      return (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n        width: 12px;\n        height: 12px;\n      "])));

    case "large":
      return (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n        width: 20px;\n        height: 20px;\n      "])));
  }
};

var changeSizeOnline = function changeSizeOnline(size) {
  switch (size) {
    case "small":
      return (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n        width: 6px;\n        height: 6px;\n      "])));

    case "medium":
      return (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n        width: 10px;\n        height: 10px;\n      "])));

    case "large":
      return (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n        width: 16px;\n        height: 16px;\n      "])));
  }
};

var Container = _styledComponents["default"].div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-block;\n  ", "\n"])), function (props) {
  return changeSizeContainer(props.size);
});

var Image = _styledComponents["default"].img(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  border-radius: 50%;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  z-index: 5;\n  ", "\n"])), function (props) {
  return changeSize(props.size);
});

var _Symbol = _styledComponents["default"].div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  font-family: ", ", sans-serif;\n  font-weight: 400;\n  color: ", ";\n  ", "\n  ", "\n  ", "\n"])), function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.theme.colors.colorTextContrast;
}, function (props) {
  return changeSizeContainer(props.size);
}, function (props) {
  return generateAvatar(props.user);
}, function (props) {
  return changeSizeSymbol(props.size);
});

var CheckOnline = _styledComponents["default"].div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 90%;\n  left: 80%;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  background-color: ", ";\n  z-index: 10;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ", "\n  &::before {\n    content: '';\n    display: block;\n    border-radius: 50%;\n    background-color: ", ";\n    z-index: 15;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.colorBg;
}, function (props) {
  return changeSizeOnlineBg(props.size);
}, function (props) {
  return props.theme.colors.colorSuccess;
}, function (props) {
  return changeSizeOnline(props.size);
});

var getCorrectIndex = function getCorrectIndex(number) {
  if (number > 255) {
    return 255;
  }

  if (number < 0) {
    return 0;
  }

  return number > 255 ? 255 : number < 0 ? 0 : number;
};

var generateAvatar = function generateAvatar(hash) {
  var _hash$substr$split$ma = hash.substr(hash.length - 3, 3).split("").map(function (_char) {
    return getCorrectIndex(_char.charCodeAt(0));
  }),
      _hash$substr$split$ma2 = _slicedToArray(_hash$substr$split$ma, 3),
      r = _hash$substr$split$ma2[0],
      g = _hash$substr$split$ma2[1],
      b = _hash$substr$split$ma2[2];

  var color = (0, _tinycolor["default"])({
    r: r,
    g: g,
    b: b
  }).lighten(12).saturate(120).toHexString();
  return (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["background: ", ";"])), color);
};

var Avatar = function Avatar(props) {
  var user = props.user,
      avatar = props.avatar,
      fullname = props.fullname,
      size = props.size,
      isOnline = props.isOnline;
  var firstChar = fullname ? fullname[0].toUpperCase() : "";
  return /*#__PURE__*/_react["default"].createElement(Container, props, avatar ? /*#__PURE__*/_react["default"].createElement(Image, {
    src: avatar,
    alt: fullname,
    size: size
  }) : /*#__PURE__*/_react["default"].createElement(_Symbol, {
    user: user,
    size: size
  }, firstChar), isOnline && /*#__PURE__*/_react["default"].createElement(CheckOnline, {
    size: size
  }));
};

Avatar.propTypes = {
  fullname: _propTypes["default"].string,
  user: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  avatar: _propTypes["default"].string,
  size: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  isOnline: _propTypes["default"].bool
};
var _default = Avatar;
exports["default"] = _default;