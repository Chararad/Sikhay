const pp = document.getElementById("pp");
const tos = document.getElementById("tos");
const logout = document.getElementById("logout");
const faq = document.getElementById("faq");
const rap = document.getElementById("rap");
const about = document.getElementById("about");
const profile = document.getElementById("profile");

pp.addEventListener("click", ()=>{
    window.location.href = "PrivacyPolicyPage.html";
});

tos.addEventListener("click", ()=>{
    window.location.href = "TOSPage.html";
});

logout.addEventListener("click", ()=>{
    window.location.href = "HomePage.html";
});

faq.addEventListener("click", ()=>{
    window.location.href = "FAQPage.html";
});

rap.addEventListener("click", ()=>{
    window.location.href = "NonUserReportAProblemPage.html";
});

about.addEventListener("click", ()=>{
    window.location.href = "AboutUsPage.html";
});

profile.addEventListener("click", ()=>{
    window.location.href = "ProfilePage.html";
});