var button = document.getElementById("login-button");


function logIn() {
if (button.innerText === "Login") {
  button.innerText = "Logout"
} 
}

function hide(element) {
  element.remove();
}

function message() {
  alert("Ninja was liked!");
}