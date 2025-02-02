
document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const rememberMe = document.getElementById("checkbox").checked;

 
  if (rememberMe) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  alert(`Logged in as ${username}`);
});
const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");


if (savedUsername && savedPassword) {
  const existingUserButton = document.getElementById("existing");
  existingUserButton.style.display = "block";

  existingUserButton.addEventListener("click", function () {
    alert(`Logged in as ${savedUsername}`);
  });
}
