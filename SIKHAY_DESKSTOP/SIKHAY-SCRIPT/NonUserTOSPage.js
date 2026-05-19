const backspace = document.querySelector(".hamburger-icon");

backspace.addEventListener("click", () =>{
    window.history.back();
});

const ppBtn = document.querySelector(".privacy-policy2");

ppBtn.addEventListener("click", () =>{
    window.location.href = "NonUserPrivacyPolicyPage.html";
});