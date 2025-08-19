const themes = [
    {
        background: "FFFFFF",
        color: "192A51",
        primaryColor: "#EA9D18"
    },
    {
        background: "#461220",
        color: "#FFFFFF",
        primaryColor: "#E94560"
    },
    {
        background: "#99a3a4",
        color: "#FFFFFF",
        primaryColor: "#FA8072"
    },
    {
        background: "#aed6f1",
        color: "#000000",
        primaryColor: "#af7ac5 "
    },
    {
        background: "#F25FSC",
        color: "#000000",
        primaryColor: "#642B36"
    },
    {
        background: "#231F20",
        color: "#FFF",
        primaryColor: "#abb2b9"
    }
];

const setTheme = (theme) =>{
    const root = document.querySelector(":root");
    root.style.setProperty("--background", theme.background);
    root.style.setProperty("--color", theme.color);
    root.style.setProperty("--primary-color", theme.primaryColor);
    root.style.setProperty("--glass-color", theme.glassColor);
};
const displayThemeButtons = () => {
    const btnContainer = document.querySelector(".theme-btn-container");
    themes.forEach((theme) =>{
        const div = document.createElement("div");
        div.className = "theme-btn";
        div.style.cssText = `background: ${theme.background}; width: 25px; height: 25px`;
        btnContainer.appendChild(div);

        div.addEventListener("click",() => setTheme(theme));
    });
};
displayThemeButtons();