const theme = {
    fontFamily: "Montserrat",

    colors:{
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
        `
    }
    
}
const dark = {

}
const light = {
    
}
export default theme