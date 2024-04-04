document.getElementById("name-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var userName = document.getElementById("username").value;
  
    // Store the username in localStorage for future use
    localStorage.setItem("username", username);
  
    // Hide the splash content and show the main content
    document.getElementById("splash-content").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  
    // Display the username in the greeting
    document.getElementById("user-greeting").textContent = userName;
  });