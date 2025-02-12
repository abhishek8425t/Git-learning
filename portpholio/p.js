// Smooth Scroll for anchor links
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default anchor action
            const targetSection = document.querySelector(this.getAttribute('href')); // Get target section
            targetSection.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling effect
                block: 'start' // Align to the start of the section
            });
        });
    });
});
