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

var changeColor = function changeColor(props) {
  if (props.background === 'white') {
    return props.theme.colors.colorBg;
  }

  if (props.background === 'grey') {
    return props.theme.colors.colorBgSecondary;
  }
};

var changeColorProgress = function changeColorProgress(props) {
  if (props.type === 'success') {
    return props.theme.colors.colorAccent;
  }

  if (props.type === 'error') {
    return props.theme.colors.colorError;
  }
};

var calcWidth = function calcWidth(props) {
  if (props.percent) {
    return props.percent;
  } else {
    return 1;
  }
};

var Container = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    height: 4px;\n    width: 100px;\n    border-radius: ", ";\n    background: ", ";\n"])), function (props) {
  return props.theme.radius;
}, function (props) {
  return changeColor(props);
});

var Progress = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: ", "%;\n    height: 100%;\n    background: ", ";\n    border-radius: ", ";\n"])), function (props) {
  return calcWidth(props);
}, function (props) {
  return changeColorProgress(props);
}, function (props) {
  return props.theme.radius;
});

var ProgressBar = function ProgressBar(props) {
  var percent = props.percent,
      type = props.type;
  return /*#__PURE__*/_react["default"].createElement(Container, props, /*#__PURE__*/_react["default"].createElement(Progress, {
    type: type,
    percent: percent
  }));
};

ProgressBar.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  background: _propTypes["default"].oneOf(['white', 'grey']),
  type: _propTypes["default"].oneOf(['success', 'error']),
  percent: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])
};
ProgressBar.defaultProps = {
  type: 'success',
  background: 'grey'
};
var _default = ProgressBar;
exports["default"] = _default;