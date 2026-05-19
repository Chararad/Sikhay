const backspace = document.querySelector(".Back-icon");

backspace.addEventListener("click", () =>{
    window.history.back();
});

const tosBtn = document.querySelector(".terms-and-conditions2");

tosBtn.addEventListener("click", () =>{
    window.location.href = "NonUserTOSPage.html";
});