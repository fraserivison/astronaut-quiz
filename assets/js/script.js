if (window.location.pathname === "/index.html" || window.location.pathname === "/") {
    document.getElementById("name").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        let userName = document.getElementById("username").value;

        // Store the username in localStorage for future use
        localStorage.setItem("username", userName);

        // Redirect to home.html
        window.location.href = "home.html";
    });
}

        // Display the username in the when called upon
        let userGreetings = document.getElementsByClassName("userGreeting");
        for (let i = 0; i < userGreetings.length; i++) {
            userGreetings[i].textContent = userName;
        }
        
// Quiz
const spaceQuiz = [
    {
        question: "What is the name of the closest star to Earth?",
        options: ["Alpha Centauri", "Proxima Centauri", "Betelgeuse", "Sirius"],
        answer: "Proxima Centauri"
    },
    {
        question: "What is the speed of light in miles per second?",
        options: ["186,000", "669.6 million", "93 billion", "4 billion"],
        answer: "186,000"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Venus", "Mercury", "Mars", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Who was the first person to set foot on the moon?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Alan Shepard", "John Glenn"],
        answer: "Neil Armstrong"
    },
    {
        question: "What is the name of the rover that NASA landed on Mars in 2012?",
        options: ["Curiosity", "Opportunity", "Spirit", "Perseverance"],
        answer: "Curiosity"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Mars", "Saturn", "Jupiter", "Neptune"],
        answer: "Jupiter"
    },
    {
        question: "What is the name of the galaxy that contains our solar system?",
        options: ["Andromeda", "Milky Way", "Sombrero", "Whirlpool"],
        answer: "Milky Way"
    },
    {
        question: "Who was the first woman to fly in space?",
        options: ["Sally Ride", "Valentina Tereshkova", "Mae Jemison", "Peggy Whitson"],
        answer: "Valentina Tereshkova"
    },
    {
        question: "What is the name of the spacecraft that carried humans to the moon for the first time?",
        options: ["Gemini", "Apollo", "Mercury", "Voyager"],
        answer: "Apollo"
    },
    {
        question: "What is the expected fate of the Milky Way galaxy in around 4.5 billion years?",
        options: ["It will collide with the Andromeda galaxy", "It will implode into a black hole", "It will drift into intergalactic space", "It will merge with the Triangulum galaxy"],
        answer: "It will collide with the Andromeda galaxy"
    }
];

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
    const answer = spaceQuiz[currentQuestion].answer;

    if (selectedButton.innerText === answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < spaceQuiz.length) {
        showQuestion();
    } else {
        showResult();
    }
}

showQuestion();
function showResult(username) {
    let resultText, linkText, userName;

    userName = localStorage.getItem("username");

    
    if (score >= 7) {
        resultText = `Congratulations <span class="userGreeting">${userName}</span>, you've got what it takes to be an astronaut!`;
        linkText = "Apply Now"; // Text for the link
        linkHref = "apply.html"; // Redirect to the home section of the same page
    } else {
        resultText = `Sorry <span class="userGreeting">${userName}</span>, not this time, but try again soon.`;
        linkText = "Back to Home"; // Text for the link
        linkHref = "home.html";
    }

    quiz.innerHTML = `
                <h1>Quiz Completed!</h1>
                <p>Score: ${score}/${spaceQuiz.length}</p>
                <p>${resultText}</p>
                <a href="${linkHref}">${linkText}</a>
            `;

}