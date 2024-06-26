// jshint esversion: 6

// Event listener for when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Event listener for the form submission on index.html
    let form = document.getElementById("name");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission
            let userName = document.getElementById("username").value;
            // Store the username in localStorage for future use
            localStorage.setItem("username", userName);
            // Redirect to home.html
            window.location.href = "home.html";
        });
    }

    // Preload main image on home.html
    const image = new Image();
    image.src = "assets/images/astronaut.jpeg";

    // Retrieve the username from local storage
    let username = localStorage.getItem("username");
    document.querySelectorAll(".username").forEach(element => {
        element.textContent = username;
    });

    // Apply specific styles to .username only on index.html
    if (window.location.pathname === "/index.html" || window.location.pathname === "/") {
        document.querySelectorAll(".username").forEach(element => {
            element.style.border = "2px solid #fff";
            element.style.padding = "10px";
        });
    }
});

// Function to check for animations on scroll
const fadeElements = document.querySelectorAll('.fade-in');
const slideElements = document.querySelectorAll('.slide-in');

function checkAnimations() {
    fadeElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.9) {
            element.classList.add('active');
        }
    });

    slideElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.9) {
            element.classList.add('active');
        }
    });
}

// Event listener for scroll to trigger animation checks
window.addEventListener('scroll', checkAnimations);
checkAnimations();

// Event listener for smooth scroll on navigation links in home.html
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjusted offset for the fixed navbar
                behavior: 'smooth'
            });
        }
    });
});







