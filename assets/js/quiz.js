// quiz.html

let questionElement = document.getElementById("question");
let optionsElement = document.getElementById("options");

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
        <a href="${linkHref}" style="background-color: #4CAF50; color: white; padding: 15px 30px; border: none; border-radius: 5px; cursor: pointer; font-size: 0.8em; margin-top: 20px; text-transform: uppercase; font-family: monospace; text-decoration: none;">${linkText}</a>`;
}

showQuestion();
