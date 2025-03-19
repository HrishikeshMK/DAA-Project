document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleResults");
    const resultsContainer = document.getElementById("resultsContainer");
    const darkModeButton = document.createElement("button");
    darkModeButton.textContent = "Toggle Dark/Light Mode";
    darkModeButton.style.display = "block";
    darkModeButton.style.margin = "10px auto";
    document.body.insertBefore(darkModeButton, document.body.firstChild);
    
    toggleButton.addEventListener("click", function() {
        resultsContainer.classList.toggle("hidden");
    });
    
    darkModeButton.addEventListener("click", function() {
        document.body.classList.toggle("light-mode");
    });
});
