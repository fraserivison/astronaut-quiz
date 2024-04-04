// Splash Page
document.getElementById("name-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let userName = document.getElementById("username").value;

    // Store the username in localStorage for future use, MAYBE DELETE
    localStorage.setItem("username", userName);

    // Hide the splash content and show the main content
    document.getElementById("splash-content").style.display = "none";
    document.getElementById("main-content").style.display = "block";

    // Display the username in the when called upon
    let userGreetings = document.getElementsByClassName("user-greeting");
    for (let i = 0; i < userGreetings.length; i++) {
        userGreetings[i].textContent = userName;
    }

});