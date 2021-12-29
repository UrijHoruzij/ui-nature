import colors from "./colors";

const theme = {
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
    colorAccentActiv: "#339e35",
  },

  radius: "4px",
  blur: "16px",
  shadow: {
    popup: `
            filter: drop-shadow(0px 10px 25px rgba(0, 0, 0, 0.1));
        `,
    tooltip: `
            filter: drop-shadow(0px 0px 25px rgba(0, 0, 0, 0.2));
        `,
  },

  components: {
    button: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 300,
      radius: "2px",
      primary: {
        text: colors.gray.gray1,
        base: colors.cyan.cyan7,
        hover: {
          text: colors.gray.gray1,
          base: colors.cyan.cyan6,
        },
        focus: {
          text: colors.gray.gray1,
          base: colors.cyan.cyan7,
        },
        activ: {
          text: colors.gray.gray1,
          base: colors.cyan.cyan5,
        },
      },
      default: {
        text: colors.gray.gray8,
        base: colors.gray.gray1,
        border: colors.gray.gray5,
        hover: {
          text: colors.cyan.cyan7,
          base: colors.gray.gray1,
          border: colors.cyan.cyan7,
        },
        focus: {
          text: colors.cyan.cyan7,
          base: colors.gray.gray1,
          border: colors.cyan.cyan7,
        },
        activ: {
          text: colors.cyan.cyan7,
          base: colors.gray.gray1,
          border: colors.cyan.cyan7,
        },
      },
      text: {
        text: colors.gray.gray8,
        base: colors.gray.gray1,
        hover: {
          text: colors.gray.gray8,
          base: colors.gray.gray3,
        },
        focus: {
          text: colors.gray.gray8,
          base: colors.gray.gray3,
        },
        activ: {
          text: colors.gray.gray8,
          base: colors.gray.gray3,
        },
      },
      link: {
        text: colors.gray.gray8,
        hover: {
          text: colors.gray.gray8,
        },
        focus: {
          text: colors.gray.gray8,
        },
        activ: {
          text: colors.gray.gray8,
        },
      },
      disabled: {
        text: colors.gray.gray5,
        base: colors.gray.gray2,
        hover: {
          text: colors.gray.gray5,
          base: colors.gray.gray2,
        },
        focus: {
          text: colors.gray.gray5,
          base: colors.gray.gray2,
        },
        activ: {
          text: colors.gray.gray5,
          base: colors.gray.gray2,
        },
      },
    },
    skeleton: {
      base: colors.gray.gray3,
    },
    zoomImage: {
      base: colors.gray.gray1,
    },
  },
  radius: "4px",
  blur: "16px",
  shadow: {
    popup: `
            filter: drop-shadow(0px 10px 25px rgba(0, 0, 0, 0.1));
        `,
    tooltip: `
            filter: drop-shadow(0px 0px 25px rgba(0, 0, 0, 0.2));
        `,
  },
};
export default theme;
