// jshint esversion: 6

// Main Quiz
document.addEventListener("DOMContentLoaded", function () {
    let spaceQuiz = [
        {
            question: "What is the approximate diameter of the observable universe?",
            options: ["93 million light-years", "93 billion light-years", "93 trillion light-years", "930 billion light-years"],
            answer: "93 billion light-years"
        },
        {
            question: "What is the mass of the black hole at the center of our galaxy?",
            options: ["1 million Suns", "4 billion Suns", "10 billion Suns", "100 billion Suns"],
            answer: "4 billion Suns"
        },
        {
            question: "Who was the first person to set foot on the lunar surface?",
            options: ["Buzz Aldrin", "Neil Armstrong", "Alan Shepard", "John Glenn"],
            answer: "Neil Armstrong"
        },
        {
            question: "What was the name of the first living being sent into orbit around the Earth?",
            options: ["Rover", "Laika", "Astro", "Luna"],
            answer: "Laika"
        },
        {
            question: "What milestone did Valentina Tereshkova achieve in space exploration?",
            options: ["First woman to orbit Mars", "First woman in space", "First woman to walk on the Moon", "First woman to reach the International Space Station"],
            answer: "First woman in space"
        },
        {
            question: "What is the expected outcome of the collision between the Milky Way and the Andromeda galaxy?",
            options: ["Formation of a new star", "Formation of a black hole", "Formation of a supernova", "Formation of an elliptical galaxy"],
            answer: "Formation of an elliptical galaxy"
        },
        {
            question: "What is the speed of light in miles per second?",
            options: ["186,000", "669.6 million", "93 billion", "4 billion"],
            answer: "186,000"
        },
        {
            question: "How many times did Valentina Tereshkova orbit the Earth during her mission?",
            options: ["24", "36", "48", "60"],
            answer: "48"
        },
        {
            question: "Who became the first Canadian to command the International Space Station (ISS)?",
            options: ["Chris Hadfield", "Roberta Bondar", "Marc Garneau", "Julie Payette"],
            answer: "Chris Hadfield"
        },
        {
            question: "What percentage of the universe's gravity is believed to be due to dark matter?",
            options: ["50%", "65%", "85%", "100%"],
            answer: "85%"
        }
    ]
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

    
    

        

    
