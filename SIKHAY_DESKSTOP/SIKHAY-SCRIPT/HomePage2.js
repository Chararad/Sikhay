//Input fields and Submit Variables
const submit = document.getElementById("sign");
const password = document.getElementById("password");
const email = document.getElementById("email");
const register = document.getElementById("register");

//Email and Passwords Map 
const users = new Map();
//Inserts your email and passwords here with same format below
users.set("chad@pampangastateu.edu.ph", "12345678");
//

//Functions for correct email and passwords
function CheckInputFields(emailValue, passwordValue){
    if (emailValue === "" || passwordValue === "") {
        alert("Please fill in all fields.");
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

function login(email, password){
    if(users.has(email) && users.get(email) === password){
        alert("Login Access");
        return true;
    }
    alert("Invalid Credentials");
    return false;
}

submit.addEventListener("click", function (event){
    event.preventDefault();
    //Inserted email and password values
    const emailValue = email.value.trim().toLowerCase();
    const passwordValue = password.value.trim();

    if(!CheckInputFields(emailValue, passwordValue)) return;
    if(!CheckPasswordLength(emailValue, passwordValue)) return;
    if(!CheckEmailUsed(emailValue, passwordValue)) return;
    if(!login(emailValue, passwordValue)) return;

    window.location.href = "MainPage.html";
})

register.onclick = function(){
    window.location.href = "RegisterPage.html";
}