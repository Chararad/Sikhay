document.addEventListener("DOMContentLoaded", function () {

    const sideToggle = document.getElementById("sideToggle");
    const rightPanel = document.getElementById("rightPanel");

    sideToggle.addEventListener("click", function (e) {
        e.stopPropagation();
        rightPanel.classList.toggle("active");
    });

    document.addEventListener("click", function (e) {
        if (!rightPanel.contains(e.target) && e.target !== sideToggle) {
            rightPanel.classList.remove("active");
        }
    });

});


document.querySelectorAll(".more-icon").forEach(icon => {
    icon.addEventListener("click", function (e) {
        e.stopPropagation();

        const message = this.closest(".message");
        const menu = message.querySelector(".message-menu");

        
        document.querySelectorAll(".message-menu").forEach(m => {
            if (m !== menu) m.style.display = "none";
        });

   
        menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
    });
});


document.addEventListener("click", function () {
    document.querySelectorAll(".message-menu").forEach(menu => {
        menu.style.display = "none";
    });
});


//Notification Bar
const notificationBar = document.getElementById("bell");
const notificationPopup = document.querySelector(".popup-notification-container");
let notificationSwitch = false;

function notificationClose(){
    notificationPopup.classList.remove("active");
    notificationPopup.classList.add("close");
}

function notificationOpen(){
    notificationPopup.classList.remove("close");
    notificationPopup.classList.add("active");
}

notificationBar.addEventListener("click", (e)=>{
    e.preventDefault();
    notificationSwitch = !notificationSwitch;

    if(notificationSwitch){
        notificationOpen();
    }
    else{
        notificationClose();
    }
});


const menu = document.querySelector(".menu-icon");
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

const avatar = document.getElementById("avatar");

avatar.addEventListener("click", ()=>{
    window.location.href = "ProfilePage.html";
});