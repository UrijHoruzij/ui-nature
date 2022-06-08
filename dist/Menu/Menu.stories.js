"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: "Components/Menu",
  component: _.Menu
};
exports["default"] = _default;

var Default = function Default() {
  var menu = [{
    id: 1,
    name: "Файлы",
    icon: "file",
    onClick: function onClick() {
      console.log("Файлы");
    }
  }, {
    id: 2,
    name: "Последние",
    icon: "last-time",
    onClick: function onClick() {
      console.log("Последние");
    }
  }, {
    id: 3,
    name: "Фотографии",
    icon: "photo",
    onClick: function onClick() {
      console.log("Фотографии");
    }
  }];
  return /*#__PURE__*/_react["default"].createElement(_.Menu, {
    menu: menu,
    activItem: 1
  });
};

exports.Default = Default;