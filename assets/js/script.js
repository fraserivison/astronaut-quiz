// jshint esversion: 6

// Main Quiz
document.addEventListener("DOMContentLoaded", function () {
// index.html
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
    // Set the username as the text content of the span element
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

    let element = document.getElementById("home");
    let index = 0;

    let userName = localStorage.getItem("username") || "";

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

    window.addEventListener('scroll', checkAnimations);
    checkAnimations();

// home.html 
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

    
    

        

    
