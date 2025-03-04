// Galeri efek
// Get modal elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("imageCaption");
const closeBtn = document.getElementsByClassName("close")[0];

// Get all gallery images
const images = document.getElementsByClassName("gallery-img");

// Initial fade in for images in viewport
document.addEventListener('DOMContentLoaded', () => {
    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                // Unobserve after animation is added
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    // Observe all gallery images
    Array.from(images).forEach(img => {
        observer.observe(img);
    });
});

// Modal functionality
Array.from(images).forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

closeBtn.onclick = function() {
    modal.style.display = "none";
}

modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && modal.style.display === "block") {
        modal.style.display = "none";
    }
});

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