const backBtn = document.querySelector(".hamburger-icon");
const reportBtn = document.querySelector(".report-div");


reportBtn.addEventListener("click", ()=>{
    window.location.href = "NonUserReportAProblemPage.html";
});

backBtn.addEventListener("click", ()=>{
    window.history.back();
});