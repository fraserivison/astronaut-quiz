// code from https://codepen.io/wheresdara/pen/wvXBpwa
// moving star background
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const STAR_COUNT = 400;
let result = "";
for (let i = 0; i < STAR_COUNT; i++) {
    result += `${randomNumber(-100, 100)}vw ${randomNumber(-100, 100)}vh ${randomNumber(0, 1)}px ${randomNumber(0, 1)}px #fff,`;
}
console.log(result.substring(0, result.length - 1));

// index.html
document.addEventListener("DOMContentLoaded", function () {
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

// home.html 

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjusted offset for the fixed navbar
            behavior: 'smooth'
        });
    });
});

// Main Heading

document.addEventListener("DOMContentLoaded", function () {
    let element = document.getElementById("home");
    let index = 0;

    // Retrieve username from localStorage
    let userName = localStorage.getItem("username") || "";

    // If username is found, set up typing effect
    if (userName) {
        const textToType = `<span>So <span class="userGreeting">${userName}</span>, you want to be an Astronaut?</span>`;
        typeText(textToType);
    }

    function typeText(textToType) {
        if (index <= textToType.length) {
            element.innerHTML = textToType.substring(0, index) + `<span id="cursor">|</span>`;
            index++;
            const typingSpeed = Math.floor(Math.random() * (100 - 25 + 1)) + 25; // Decreased range for faster typing
            setTimeout(() => typeText(textToType), typingSpeed);
        } else {
            blinkCursor();
        }
    }

    function blinkCursor() {
        const cursor = document.getElementById("cursor");
        setInterval(() => {
            cursor.style.visibility = (cursor.style.visibility === 'visible') ? 'hidden' : 'visible';
        }, 300); // Adjusted blink speed
    }
});

document.addEventListener("DOMContentLoaded", function () {
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
});




// quiz.html
document.addEventListener("DOMContentLoaded", function () {
    const spaceQuiz = [
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
        ;

    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const submitButton = document.getElementById("submit");

    let currentQuestion = 0;
    let score = 0;

    function showQuestion() {
        const question = spaceQuiz[currentQuestion];
        questionElement.innerText = question.question;

        optionsElement.innerHTML = "";
        question.options.forEach(option => {
            const button = document.createElement("button");
            button.innerText = option;
            optionsElement.appendChild(button);
            button.addEventListener("click", selectAnswer);
        });
    }

    function selectAnswer(e) {
        const selectedButton = e.target;
        const answer = spaceQuiz[currentQuestion].answer.trim().toLowerCase();

        if (selectedButton.innerText.trim().toLowerCase() === answer) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < spaceQuiz.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        let resultText, linkText, linkHref;
        let userName = localStorage.getItem("username") || "";

        if (score >= 7) {
            resultText = `Congratulations <span class="userGreeting">${userName}</span>, you've got what it takes to become an astronaut!`;
            linkText = "Apply Now"; // Text for the link
            linkHref = "apply.html"; // Redirect to the home section of the same page
        } else {
            resultText = `Sorry <span class="userGreeting">${userName}</span>, not this time, but try again soon.`;
            linkText = "Back to Home"; // Text for the link
            linkHref = "home.html";
        }

        const quiz = document.getElementById("quiz");
        quiz.innerHTML = `
            <h1>Quiz Completed!</h1>
            <p style="font-family: 'Space Mono', monospace; ">Score: ${score}/${spaceQuiz.length}</p>
            <p style="font-family: 'Space Mono', monospace; ">${resultText}</p>
            <br>
            <br>
            <a href="${linkHref}" style="background-color: #4CAF50; color: white; padding: 15px 30px; border: none; border-radius: 5px; cursor: pointer; font-size: 0.8em; margin-top: 20px; text-transform: uppercase; font-family: Courier; text-decoration: none;">${linkText}</a>`;
    }

    showQuestion();
});
