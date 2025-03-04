// Smooth Fade In
document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("loaded");
});

// Navbar Background Change on Scroll
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    } else {
        header.style.backgroundColor = "white";
    }
});