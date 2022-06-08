"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _colors = _interopRequireDefault(require("./colors"));

var _theme;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var theme = (_theme = {
  name: "light",
  base: "light",
  fontFamily: "Montserrat",
  colors: {
    colorText: "#333333",
    colorTextSecondary: "#b5b5b5",
    colorTextContrast: "#ffffff",
    colorBg: "#ffffff",
    colorBgSecondary: "#f0f0f0",
    colorBgContrast: "#333333",
    colorIcon: "#333333",
    colorIconSecondary: "#b5b5b5",
    colorIconContrast: "#ffffff",
    colorSuccess: "#05a84f",
    colorError: "#f3363e",
    colorNotify: "#ff9e00",
    colorAccent: "#008603",
    colorAccentActiv: "#339e35"
  },
  radius: "4px",
  blur: "16px",
  shadow: {
    popup: "\n            filter: drop-shadow(0px 10px 25px rgba(0, 0, 0, 0.1));\n        ",
    tooltip: "\n            filter: drop-shadow(0px 0px 25px rgba(0, 0, 0, 0.2));\n        "
  },
  components: {
    button: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 300,
      radius: "2px",
      primary: {
        text: _colors["default"].gray.gray1,
        base: _colors["default"].cyan.cyan7,
        hover: {
          text: _colors["default"].gray.gray1,
          base: _colors["default"].cyan.cyan6
        },
        focus: {
          text: _colors["default"].gray.gray1,
          base: _colors["default"].cyan.cyan7
        },
        activ: {
          text: _colors["default"].gray.gray1,
          base: _colors["default"].cyan.cyan5
        }
      },
      "default": {
        text: _colors["default"].gray.gray8,
        base: _colors["default"].gray.gray1,
        border: _colors["default"].gray.gray5,
        hover: {
          text: _colors["default"].cyan.cyan7,
          base: _colors["default"].gray.gray1,
          border: _colors["default"].cyan.cyan7
        },
        focus: {
          text: _colors["default"].cyan.cyan7,
          base: _colors["default"].gray.gray1,
          border: _colors["default"].cyan.cyan7
        },
        activ: {
          text: _colors["default"].cyan.cyan7,
          base: _colors["default"].gray.gray1,
          border: _colors["default"].cyan.cyan7
        }
      },
      text: {
        text: _colors["default"].gray.gray8,
        base: _colors["default"].gray.gray1,
        hover: {
          text: _colors["default"].gray.gray8,
          base: _colors["default"].gray.gray3
        },
        focus: {
          text: _colors["default"].gray.gray8,
          base: _colors["default"].gray.gray3
        },
        activ: {
          text: _colors["default"].gray.gray8,
          base: _colors["default"].gray.gray3
        }
      },
      link: {
        text: _colors["default"].gray.gray8,
        hover: {
          text: _colors["default"].gray.gray8
        },
        focus: {
          text: _colors["default"].gray.gray8
        },
        activ: {
          text: _colors["default"].gray.gray8
        }
      },
      disabled: {
        text: _colors["default"].gray.gray5,
        base: _colors["default"].gray.gray2,
        hover: {
          text: _colors["default"].gray.gray5,
          base: _colors["default"].gray.gray2
        },
        focus: {
          text: _colors["default"].gray.gray5,
          base: _colors["default"].gray.gray2
        },
        activ: {
          text: _colors["default"].gray.gray5,
          base: _colors["default"].gray.gray2
        }
      }
    },
    skeleton: {
      base: _colors["default"].gray.gray3
    },
    zoomImage: {
      base: _colors["default"].gray.gray1
    }
  }
}, _defineProperty(_theme, "radius", "4px"), _defineProperty(_theme, "blur", "16px"), _defineProperty(_theme, "shadow", {
  popup: "\n            filter: drop-shadow(0px 10px 25px rgba(0, 0, 0, 0.1));\n        ",
  tooltip: "\n            filter: drop-shadow(0px 0px 25px rgba(0, 0, 0, 0.2));\n        "
}), _theme);
var _default = theme;
exports["default"] = _default;