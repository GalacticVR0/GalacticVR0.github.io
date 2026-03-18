document.addEventListener("DOMContentLoaded", () => {
    // Only redirect links to article.html on index.html
    if (!window.location.pathname.includes("article.html")) {
        const links = document.getElementsByClassName("link")
        Array.from(links).forEach(element => {
            element.addEventListener("click", () => {
                location.href = "/article.html"
            })
        });
    }

    // Dark/Light mode toggle - works on all pages
    const savedMode = localStorage.getItem("mode");
    if (savedMode) {
        document.body.classList.toggle("DarkMode", savedMode === "dark");
        document.getElementById(`${savedMode === "dark" ? "Dark" : "Light"}-Mode`).checked = true;
    }

    const DarkModeOn = document.getElementById("Dark-Mode").addEventListener("click", (event) => {
        document.body.classList.add("DarkMode");
        localStorage.setItem("mode", "dark");
    });
    const DarkModeOff = document.getElementById("Light-Mode").addEventListener("click", (event) => {
        document.body.classList.remove("DarkMode");
        localStorage.setItem("mode", "light");
    });
});




