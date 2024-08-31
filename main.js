import Particles from "./particles";

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
        .getElementById("theme_terminal")
        .addEventListener("click", () => {setTheme("terminal")});

    document
        .getElementById("theme_sunset")
        .addEventListener("click", () => {setTheme("sunset")});
    
    document
        .getElementById("theme_boring")
        .addEventListener("click", () => {setTheme("boring")});
}

// note: don't put ;'s at the end of the values -- it doesn't apply the css
const themes = {
    "midnight": {
        "fontFamily"       : '"Manrope", "Poppins", "Open Sans", sans-serif',
        "colorTextTitle"   : "#EEEEEE",
        "colorTextHeader"  : "#B9E7E9",
        "colorTextSupport" : "#85A7A8",
        "colorText"        : "#C2C7C7",
        "svgFilter"        : "invert(97%) sepia(3%) saturate(54%) hue-rotate(165deg) brightness(116%) contrast(76%)",
        "colorBg"          : "linear-gradient(233deg, rgba(1,2,8,1) 0%, rgba(4,14,24,1) 11%, rgba(5,17,19,1) 33%, rgba(6,16,24,1) 48%, rgba(6,12,20,1) 67%, rgba(6,9,22,1) 87%, rgba(3,9,22,1) 100%)",
        "colorBgHeader"    : "rgba(0, 0, 0, 0)",
        "glassBg"          : "rgba(255, 255, 255, 0.02)",
        "selectionText"    : "#000000",
        "selectionBg"      : "rgb(122, 255, 252)",
        "particleOptions"  : {
            selector: '.background',
            color: "#1d3243",
            connectParticles: true,
            speed: 0.1,
            maxParticles: 100,
            minDistance: 120,
            responsive: [
                {
                    breakpoint: 1200,
                    options: {
                        maxParticles: 100,
                    },
                },
                {
                    breakpoint: 768,
                    options: {
                        maxParticles: 60,
                    },
                },
                {
                    breakpoint: 576,
                    options: {
                        maxParticles: 35,
                    },
                },
            ],
        }
    },
    "terminal": {
        "fontFamily"       : '"IBM Plex Mono", monospace',
        "colorTextTitle"   : "#DDDDDD",
        "colorTextHeader"  : "#b9e9bf",
        "colorTextSupport" : "#85A7A8",
        "colorText"        : "#C2C7C7",
        "svgFilter"        : "invert(97%) sepia(3%) saturate(54%) hue-rotate(165deg) brightness(116%) contrast(76%)",
        "colorBg"          : "#000",
        "colorBgHeader"    : "rgba(0, 0, 0, 0)",
        "glassBg"          : "rgba(0, 0, 0, 0.5)",
        "selectionText"    : "#000000",
        "selectionBg"      : "#b9e9bf",
        "particleOptions"  : {
            selector: '.background',
            maxParticles: 0,
            responsive: [
                {
                    breakpoint: 1200,
                    options: { maxParticles: 0, },
                },
                {
                    breakpoint: 768,
                    options: { maxParticles: 0, },
                },
                {
                    breakpoint: 576,
                    options: { maxParticles: 0, },
                },
            ],
        }
    },
    "sunset": {
        "fontFamily"       : '"Poppins", "Open Sans", sans-serif',
        "colorTextTitle"   : "#EEEEEE",
        "colorTextHeader"  : "#efce8b",
        "colorTextSupport" : "#ffaa75",
        "colorText"        : "#FFFFFF",
        "svgFilter"        : "invert(97%) sepia(3%) saturate(54%) hue-rotate(165deg) brightness(116%) contrast(76%)",
        "colorBg"          : "linear-gradient(320deg, rgba(156,85,13,1) 0%, rgba(140,41,71,1) 53%, rgba(75,19,79,1) 100%)",
        "colorBgHeader"    : "rgba(0, 0, 0, 0)",
        "glassBg"          : "rgba(70, 20, 35, 0.18)",
        "selectionText"    : "#000000",
        "selectionBg"      : "#ffb647",
        "particleOptions"  : {
            selector: '.background',
            color: "AAAAAA",
            connectParticles: true,
            speed: 0.05,
            maxParticles: 200,
            minDistance: 150,
            responsive: [
                {
                    breakpoint: 1200,
                    options: {
                        maxParticles: 200,
                    },
                },
                {
                    breakpoint: 768,
                    options: {
                        maxParticles: 120,
                    },
                },
                {
                    breakpoint: 576,
                    options: {
                        maxParticles: 60,
                    },
                },
            ],
        }
    },
    "boring": {
        "fontFamily"       : '"Times New Roman", sans-serif',
        "colorTextTitle"   : "#1B1B32",
        "colorTextHeader"  : "#1B1B32",
        "colorText"        : "#1B1B32",
        "svgFilter"        : "invert(7%) sepia(8%) saturate(4666%) hue-rotate(212deg) brightness(94%) contrast(96%)",
        "colorBg"          : "#FFFFFF",
        "colorBgHeader"    : "#EEEEEE",
        "glassBg"          : "rgba(1, 1, 1, 0)",
        "selectionText"    : "HighlightText",
        "selectionBg"      : "Highlight",
        "particleOptions"  : {
            selector: '.background',
            maxParticles: 0,
            responsive: [
                {
                    breakpoint: 1200,
                    options: { maxParticles: 0, },
                },
                {
                    breakpoint: 768,
                    options: { maxParticles: 0, },
                },
                {
                    breakpoint: 576,
                    options: { maxParticles: 0, },
                },
            ],
        }
    },
}

const setTheme = (theme) => {
    const themeData = themes[theme];

    root.style.setProperty("--font-family",        themeData.fontFamily      );
    root.style.setProperty("--color-text-title",   themeData.colorTextTitle  );
    root.style.setProperty("--color-text-header",  themeData.colorTextHeader );
    root.style.setProperty("--color-text-support", themeData.colorTextSupport);
    root.style.setProperty("--color-text",         themeData.colorText       );
    root.style.setProperty("--svg-filter",         themeData.svgFilter       );
    root.style.setProperty("--color-bg",           themeData.colorBg         );
    root.style.setProperty("--color-bg-header",    themeData.colorBgHeader   );

    root.style.setProperty("--selection-text",     themeData.selectionText   );
    root.style.setProperty("--selection-bg",       themeData.selectionBg     );

    root.style.setProperty("--glass-bg",           themeData.glassBg         );

    Particles.init(themeData.particleOptions);   

    localStorage.setItem("theme_on_load", theme);
};

addEventListener("DOMContentLoaded", (event) => {init();});