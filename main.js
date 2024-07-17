const root = document.querySelector(':root');

const init = () => {
    const themeOnLoad = localStorage.getItem("theme_on_load");

    if (themeOnLoad in themes) {
        setTheme(themeOnLoad);
    }

    document
        .getElementById("theme_midnight")
        .addEventListener("click", () => {setTheme("midnight")});

    document
        .getElementById("theme_ultraviolet")
        .addEventListener("click", () => {setTheme("ultraviolet")});

    document
        .getElementById("theme_coffee")
        .addEventListener("click", () => {setTheme("coffee")});
    
    document
        .getElementById("theme_print")
        .addEventListener("click", () => {setTheme("print")});
}

// note: don't put ;'s at the end of the values -- it doesn't apply the css
const themes = {
    "midnight": {
        "colorTextTitle"  : "#EEEEEE",
        "colorTextHeader" : "#B9E7E9",
        "colorText"       : "#C2C7C7",
        "svgFilter"       : "invert(97%) sepia(3%) saturate(54%) hue-rotate(165deg) brightness(116%) contrast(76%)",
        "colorBg"         : "#05070A",
        "colorBgHeader"   : "#05070A",
    },
    "ultraviolet": {
        "colorTextTitle"  : "#FFFFFF",
        "colorTextHeader" : "#E443FC",
        "colorText"       : "#E8F0E8",
        "svgFilter"       : "invert(21%) sepia(67%) saturate(6975%) hue-rotate(283deg) brightness(97%) contrast(127%)",
        "colorBg"         : "#070707",
        "colorBgHeader"   : "#15003D",
    },
    "coffee": {
        "colorTextTitle"  : "#3D4D35",
        "colorTextHeader" : "#3D4D35",
        "colorText"       : "#3D4D35",
        "svgFilter"       : "invert(7%) sepia(8%) saturate(4666%) hue-rotate(212deg) brightness(94%) contrast(96%)",
        "colorBg"         : "#F0E1CB",
        "colorBgHeader"   : "#F0E1CB",
    },
    "print": {
        "colorTextTitle"  : "#1B1B32",
        "colorTextHeader" : "#1B1B32",
        "colorText"       : "#1B1B32",
        "svgFilter"       : "invert(7%) sepia(8%) saturate(4666%) hue-rotate(212deg) brightness(94%) contrast(96%)",
        "colorBg"         : "#FFFFFF",
        "colorBgHeader"   : "#EEEEEE",
    },
}

const setTheme = (theme) => {
    const themeData = themes[theme];

    root.style.setProperty("transition", 0);

    root.style.setProperty("--color-text-title",  themeData.colorTextTitle );
    root.style.setProperty("--color-text-header", themeData.colorTextHeader);
    root.style.setProperty("--color-text",        themeData.colorText      );
    root.style.setProperty("--svg-filter",        themeData.svgFilter      );
    root.style.setProperty("--color-bg",          themeData.colorBg        );
    root.style.setProperty("--color-bg-header",   themeData.colorBgHeader  );

    root.style.setProperty("transition", 0.2);

    localStorage.setItem("theme_on_load", theme);
};

addEventListener("DOMContentLoaded", (event) => {init();});