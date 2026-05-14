const menu = document.querySelector(".hamburger-icon-btn");
const menubar = document.querySelector(".menu-bar");
const blackBG = document.querySelector(".black-bg");
const cm1 = document.getElementById("comment1");
const popup = document.querySelector(".popup-comment");


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



cm1.addEventListener("click", () =>{
    popup.classList.add("child");
});

/*document.addEventListener("click", function(e) {
    if(!popup.contains(e.target) && e.target !== sideToggle){
        popup.classList.remove("child");
        popup.classList.add("child2");
    }
    
}) */
