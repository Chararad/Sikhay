//Input fields and register variables
const firstName = document.getElementById("firstName");
const middleName = document.getElementById("middleName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const sex = document.getElementById("sex");
const campus = document.getElementById("campus");
const registerBtn = document.getElementById("register");


function CheckInputFields(firstNameValue, lastNameValue, sexValue, campusValue, emailValue, passwordValue, confirmPasswordValue){
    if (firstNameValue === "" || lastNameValue === "" || sexValue === "" || campusValue === "" || emailValue === "" || passwordValue === "" || confirmPasswordValue === "") {
        alert("Please fill in all fields.");
        return false;
    }
    return true;
}

function CheckConfirmPasswords(passwordValue, confirmPasswordValue){
    if(passwordValue !== confirmPasswordValue){
        alert("Password do not match");
        return false;
    }
    return true;
}

function CheckPasswordLength(emailValue, passwordValue){
    if (passwordValue.length < 8) {
        alert("Password must be at least 8 characters long.");
        passwordInput.focus();
        return false;
    }
    return true;
}

function CheckEmailUsed(emailValue, passwordValue){
    if (!emailValue.endsWith("@pampangastateu.edu.ph")) {
        alert("Only @pampangastateu.edu.ph emails are allowed.");
        emailInput.focus();
        return false;
    }
    return true;
}

registerBtn.addEventListener("click", function(event){
    event.preventDefault();

    //Values
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const sexValue = sex.value.trim();
    const campusValue = campus.value.trim();
    const emailValue = email.value.trim().toLowerCase();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if(!CheckInputFields(firstNameValue, lastNameValue, sexValue, campusValue, emailValue, passwordValue, confirmPasswordValue)) return;
    if(!CheckEmailUsed(emailValue, passwordValue)) return;
    if(!CheckPasswordLength(emailValue, passwordValue)) return;
    if(!CheckConfirmPasswords(passwordValue, confirmPasswordValue)) return;

    window.location.href = "MainPage.html";
})