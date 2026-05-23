const backspace = document.querySelector(".backpage");

if (backspace) {
  backspace.addEventListener("click", () => {
    window.history.back();
  });
}

const navigateBtn = document.getElementById("navigateBtn");

if (navigateBtn) {
  navigateBtn.onclick = () => {
    window.location.href = "../SIKHAY-DESIGN/MainPage.html";
  };
}

const nonUserBtn = document.getElementById("navigateBtn-nonuser");

if (nonUserBtn) {
  nonUserBtn.addEventListener("click", function () {
    alert("You must create an account first before accessing SIKHAY.");
  });
}