//Menu Bar
const menu = document.querySelector(".hamburger-icon-btn");
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


cm1.addEventListener("click", () =>{
    popup.classList.add("child");
});

/*document.addEventListener("click", function(e) {
    if(!popup.contains(e.target) && e.target !== sideToggle){
        popup.classList.remove("child");
        popup.classList.add("child2");
    }
    
}) */

//Profile Page
const feedProfile = document.querySelectorAll(".profile-pic-frame");

feedProfile.forEach(function(feed){
    feed.addEventListener("click", function(){
        window.location.href = "ProfilePage.html";
    });
});

//Comment bar
const commentBar = document.querySelectorAll(".comment-wrapper");
const popup = document.querySelector(".popup-comment-container");
const cancelCommentBtn = document.querySelector(".cancel-comment-icon");


commentBar.forEach(function (feed){
    feed.addEventListener("click",function(){
        openComment();
    });
});

cancelCommentBtn.addEventListener("click", () =>{
    closeComment();
})

function openComment(){
    popup.classList.add("child");
    whiteBG.classList.add("active");
}

function closeComment(){
    popup.classList.remove("child")
    whiteBG.classList.remove("active");
}

//Notification Bar
const notificationBar = document.querySelector(".bell-icon");
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

notificationBar.addEventListener("click", ()=>{
    notificationSwitch = !notificationSwitch;

    if(notificationSwitch){
        if(conversationSwitch){
            conversationClose();
            conversationSwitch = false;
        }
        notificationOpen();
    }
    else{
        
        notificationClose();
    }
});

//Conversation Bar

const conversationBar = document.querySelector(".chat-icon");
const conversationPopup = document.querySelector(".popup-conversation-container");

let conversationSwitch = false

function conversationClose(){
    conversationPopup.classList.remove("active");
    conversationPopup.classList.add("close");
}

function conversationOpen(){
    conversationPopup.classList.remove("close");
    conversationPopup.classList.add("active");
}

conversationBar.addEventListener("click", ()=>{
    conversationSwitch = !conversationSwitch;
    if(conversationSwitch){
        if(notificationSwitch){
            notificationClose();
            notificationSwitch = false;
        }
        conversationOpen();
    }
    else{
        conversationClose();
    }
});

function closeAll() {
    notificationPopup.classList.replace("active", "close");
    conversationPopup.classList.replace("active", "close");
    notificationSwitch = false;
    conversationSwitch = false;
}

const allConversationBtn = document.querySelector(".popup-conversation-see-all-text");

allConversationBtn.addEventListener("click", ()=>{
    window.location.href = "MessagingPage.html";
});

//Popular Resources
const popResourceBtn = document.querySelector(".popular-resources-wrapper");

popResourceBtn.addEventListener("click", ()=>{
    window.location.href = "PopularResourcesPage.html"
});

//Top Contributors
const topContributorBtn = document.querySelector(".top-contributors-wrapper");
topContributorBtn.addEventListener("click", ()=>{
    window.location.href = "TopContributorPage.html"
});