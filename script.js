document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    // Add shadow to navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Highlight active section in navbar
        updateActiveSection();
    });
    
    // Smooth scrolling for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 64, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Function to update active section in navbar
    function updateActiveSection() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkSection = link.getAttribute('data-section');
            
            if (linkSection === currentSection) {
                link.classList.add('active');
            }
        });
        
        // If at the top of the page and no section is active, activate home
        if (window.scrollY < 100) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-section') === 'home') {
                    link.classList.add('active');
                }
            });
        }
    }
    
    // Initialize active section on page load
    updateActiveSection();
});