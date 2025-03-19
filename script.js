document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.getElementById("darkModeToggle");
    const body = document.body;

    // Load saved theme from localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("light-mode");
    }

    toggleSwitch.addEventListener("click", () => {
        body.classList.toggle("light-mode");
        
        // Save preference in localStorage
        if (body.classList.contains("light-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
});