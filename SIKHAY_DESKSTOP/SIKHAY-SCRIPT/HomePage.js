document.addEventListener("DOMContentLoaded", function () {
const form = document.getElementById("login");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");


form.addEventListener("submit", function (event) {
event.preventDefault();

const emailValue = emailInput.value.trim().toLowerCase();
const passwordValue = passwordInput.value.trim();

if (emailValue === "" || passwordValue === "") {
alert("Please fill in all fields.");
return;
}

if (passwordValue.length < 8) {
alert("Password must be at least 8 characters long.");
passwordInput.focus();
return;
}

if (passwordValue != "password123") {
alert("Incorrect password. Please try again.");
passwordInput.focus();
return;
}

if (!emailValue.endsWith("@pampangastateu.edu.ph")) {
alert("Only @pampangastateu.edu.ph emails are allowed.");
emailInput.focus();
return;
}

window.location.href = "Mainpagecopy.html";
});
});