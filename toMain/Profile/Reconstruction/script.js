const options =  document.querySelectorAll(".option");
const posts = document.querySelector(".posts2");

const usernameInput = document.querySelector(".edit-username");
const usernameCounter = document.querySelector(".username-counter");

usernameInput.addEventListener("input", () =>{
    usernameCounter.textContent = `${usernameInput.value.length}/40`;
});

posts.classList.add("active");

options.forEach(option => {
    option.addEventListener("click", () =>{
        options.forEach(o => 
            o.classList.remove("active"));
            option.classList.add("active");
    });
});

const bioInput = document.querySelector(".edit-bio");
const bioCounter = document.querySelector(".bio-counter");

bioInput.addEventListener("input", () =>{
    bioCounter.textContent = `${bioInput.value.length}/200`;
});


const hometownInput = document.querySelector(".edit-hometown");
const hometownCounter = document.querySelector(".hometown-counter");

hometownInput.addEventListener("input", () =>{
    hometownCounter.textContent = `${hometownInput.value.length}/40`;
});

const editProfile = document.querySelector(".edit-frame");
const whiteBG = document.querySelector(".white-bg");
const editProfilePanel = document.querySelector(".edit-profile");
const save = document.querySelector(".save-btn");



let EditSwitch = false;

editProfile.addEventListener("click", () =>{

    EditSwitch = !EditSwitch

    if(EditSwitch){
        editProfilePanel.classList.add("active");
        editProfilePanel.classList.remove("close");
        whiteBG.classList.add("active");
    }
    else{
        editProfilePanel.classList.remove("active");
        editProfilePanel.classList.add("close");
        whiteBG.classList.remove("active");
    }
    
});

save.onclick = function (){
    editProfilePanel.classList.remove("active");
    editProfilePanel.classList.add("close");
    whiteBG.classList.remove("active");
    EditSwitch = !EditSwitch
}