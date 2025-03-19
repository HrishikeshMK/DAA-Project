document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleResults");
    const resultsContainer = document.getElementById("resultsContainer");

    toggleButton.addEventListener("click", function() {
        if (resultsContainer.classList.contains("hidden")) {
            resultsContainer.classList.remove("hidden");
        } else {
            resultsContainer.classList.add("hidden");
        }
    });
});
