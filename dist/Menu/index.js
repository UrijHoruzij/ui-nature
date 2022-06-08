"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContainerItem = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    cursor: pointer;\n    &:not(:first-child){\n        margin-top: 8px;\n    }\n"])));

var IconItem = (0, _styledComponents["default"])(_.Icon)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 16px;\n    height: 16px;\n    margin-right: 4px;\n    margin-left: 6px;\n"])));

var ActivItem = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: 2px;\n    height: 24px;\n    background: ", ";\n    margin-right: 4px;\n    transition: all .3s ease-in-out;\n"])), function (props) {
  return props.activ ? props.theme.colors.colorAccent : 'transparent';
});

var Container = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n"])));

var Menu = function Menu(props) {
  var menu = props.menu,
      activItem = props.activItem;

  var _useState = (0, _react.useState)(activItem),
      _useState2 = _slicedToArray(_useState, 2),
      activ = _useState2[0],
      setActiv = _useState2[1];

  var handleChangeActiv = function handleChangeActiv(handleClick, id) {
    handleClick();
    setActiv(id);
  };

  return /*#__PURE__*/_react["default"].createElement(Container, props, menu.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(ContainerItem, {
      key: item.name,
      onClick: function onClick() {
        return handleChangeActiv(item.onClick, item.id);
      }
    }, /*#__PURE__*/_react["default"].createElement(ActivItem, activ === item.id ? {
      activ: true
    } : ''), item.icon ? /*#__PURE__*/_react["default"].createElement(IconItem, {
      name: item.icon
    }) : '', /*#__PURE__*/_react["default"].createElement(_.Typography, {
      type: "menu"
    }, item.name));
  }));
};

Menu.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  menu: _propTypes["default"].array,
  activItem: _propTypes["default"].number
};
var _default = Menu;
exports["default"] = _default;