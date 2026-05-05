const menu = document.querySelector(".hamburger-icon-btn");
const menubar = document.querySelector(".menu-bar");
const blackBG = document.querySelector(".black-bg");

let menuSwitch = false;

menu.addEventListener("click", () =>{

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
    
});