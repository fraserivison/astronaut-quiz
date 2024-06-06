// jshint esversion: 6

// Define the quiz questions, options, and correct answers
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
];

// Select HTML elements for displaying questions and options
let questionElement = document.getElementById("question");
let optionsElement = document.getElementById("options");

let currentQuestion = 0;
let score = 0;

// Function to display the current question and its options
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

// Function to handle the selection of an answer
function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = spaceQuiz[currentQuestion].answer.trim().toLowerCase();

    // Check if the selected answer is correct and update the score
    if (selectedButton.innerText.trim().toLowerCase() === answer) {
        score++;
    }

    // Move to the next question or show the result if all questions have been answered
    currentQuestion++;

    if (currentQuestion < spaceQuiz.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Function to display the quiz result
function showResult() {
    let resultText, linkText, linkHref;
    let userName = localStorage.getItem("username") || "";

    // Determine the result message and link based on the score
    if (score >= 7) {
        resultText = `Congratulations <span class="userGreeting">${userName}</span>, you've got what it takes to become an astronaut!`;
        linkText = "Apply Now"; // Text for the link
        linkHref = "apply.html"; // Redirect to the home section of the same page
    } else {
        resultText = `Sorry <span class="userGreeting">${userName}</span>, not this time, but try again soon.`;
        linkText = "Back to Home"; // Text for the link
        linkHref = "home.html";
    }

    // Display the quiz completion message with score and result
    const quiz = document.getElementById("quiz");
    quiz.innerHTML = `
        <h1>Quiz Completed!</h1>
        <p style="font-family: 'Space Mono', monospace; ">Score: ${score}/${spaceQuiz.length}</p>
        <p style="font-family: 'Space Mono', monospace; ">${resultText}</p>
        <br>
        <br>
        <a href="${linkHref}" style="background-color: #4CAF50; color: white; padding: 15px 30px; border: none; border-radius: 5px; cursor: pointer; font-size: 0.8em; margin-top: 20px; text-transform: uppercase; font-family: monospace; text-decoration: none;">${linkText}</a>`;
}

// Initialise the quiz by displaying the first question when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
    showQuestion();

});
