

const menu = document.querySelector(".hamburger-con");
const menubar = document.querySelector(".menu-bar");
const blackBG = document.querySelector(".black-bg");
const whiteBG = document.querySelector(".white-bg");
const cm1 = document.getElementById("comment1");

let menuSwitch = false;


menu.addEventListener("click", () =>{
    menuClicked();
});

function menuClicked(){
    menuSwitch = !menuSwitch

    if(menuSwitch){
        menubar.classList.add("active");
        menubar.classList.remove("close");
        blackBG.classList.add("active");
    }
    else{
        menubar.classList.remove("active");
        menubar.classList.add("close");
        blackBG.classList.remove("active");
    }
}

//Notification Bar
const notificationBar = document.querySelector(".bell-icon");
const notificationPopup = document.querySelector(".popup-notification-container");
let notificationSwitch = false;

console.log("connected");

function notificationClose(){
    notificationPopup.classList.remove("active");
    notificationPopup.classList.add("close");
}

function notificationOpen(){
    notificationPopup.classList.remove("close");
    notificationPopup.classList.add("active");
}

notificationBar.addEventListener("click", ()=>{
    console.log("clicked");
    notificationSwitch = !notificationSwitch;

    if(notificationSwitch){
        notificationOpen();
    }
    else{
        notificationClose();
    }
});