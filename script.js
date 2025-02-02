// Function to handle form submission
document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting the traditional way

  // Get user input values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const rememberMe = document.getElementById("checkbox").checked;

  // If "Remember me" is checked, store username and password in localStorage
  if (rememberMe) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    // If not checked, remove stored details from localStorage
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  // Display an alert with the username
  alert(`Logged in as ${username}`);
});

// Check if there are saved login details in localStorage
const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

// If saved details are found, show the "Login as existing user" button
if (savedUsername && savedPassword) {
  const existingUserButton = document.getElementById("existing");
  existingUserButton.style.display = "block";

  // Add event listener for the existing user login button
  existingUserButton.addEventListener("click", function () {
    alert(`Logged in as ${savedUsername}`);
  });
}
