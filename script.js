document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleResults");
    const resultsContainer = document.getElementById("resultsContainer");
    
    // Create Toggle Switch for Dark/Light Mode
    const toggleContainer = document.createElement("div");
    toggleContainer.classList.add("toggle-container");
    
    const toggleSwitch = document.createElement("div");
    toggleSwitch.classList.add("toggle-switch");
    
    toggleContainer.appendChild(toggleSwitch);
    document.body.insertBefore(toggleContainer, document.body.firstChild);
    
    toggleSwitch.addEventListener("click", function() {
        document.body.classList.toggle("light-mode");
        
        // Adjust toggle switch position
        toggleSwitch.classList.toggle("active");
    });
    
    toggleButton.addEventListener("click", function() {
        resultsContainer.classList.toggle("hidden");
    });
});
