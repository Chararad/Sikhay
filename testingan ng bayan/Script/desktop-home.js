document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  if (!form || !emailInput || !passwordInput) {
    console.error("Form or input elements not found.");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const allowedDomain = "@pampangastateu.edu.ph";

    if (emailValue === "" || passwordValue === "") {
      alert("Please fill in all fields.");
      return;
    }

    if (!emailValue.endsWith(allowedDomain)) {
      alert("Only @pampangastateu.edu.ph emails are allowed.");
      emailInput.focus();
      return;
    }

    alert("Login successful with PSU email!");

  });
});