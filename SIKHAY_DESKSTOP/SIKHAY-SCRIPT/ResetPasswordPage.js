const learnMoreBtn = document.getElementById("learn");
const supportBtn = document.getElementById("support");
const tosBtn = document.getElementById("tos");
const ppBtn = document.getElementById("pp");
const refBtn = document.getElementById("ref");
const newPassword = document.getElementById("newPass");
const conPassword = document.getElementById("conPass");
const submitBtn = document.querySelector(".group-child");

learnMoreBtn.addEventListener("click", ()=>{
    window.location.href = "NonUserAboutUsPage.html";
});

supportBtn.addEventListener("click", ()=>{

});

tosBtn.addEventListener("click", ()=>{
    window.location.href = "NonUserTOSPage.html";
});

ppBtn.addEventListener("click", ()=>{
    window.location.href = "NonUserPrivacyPolicyPage.html";
});

refBtn.addEventListener("click", ()=>{

});

submitBtn.addEventListener("click", ()=>{
    const passwordValue = newPassword.value.trim();
    const confirmPasswordValue = conPassword.value.trim();
    if(!checkConfirmPassword(passwordValue, confirmPasswordValue)){
        return;
    }
    if(!CheckInputFields(passwordValue, confirmPasswordValue)) return;
    window.location.href = "HomePage.html";
});

function checkConfirmPassword(passwordValue, confirmPasswordValue){
    if(passwordValue !== confirmPasswordValue){
        alert("Password do not match");
        return false;
    }
    return true;
}

function CheckInputFields(passwordValue, confirmPasswordValue){
    if(passwordValue === "" || confirmPasswordValue === ""){
        alert("Empty Input Fields");
        return false;
    }
    return true;
}