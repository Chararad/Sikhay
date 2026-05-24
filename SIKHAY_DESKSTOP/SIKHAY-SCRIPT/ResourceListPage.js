
//Menu bar
const menu = document.querySelector(".hamburger");
const menubar = document.querySelector(".menu-bar");
const blackBG = document.querySelector(".black-bg");
const cm1 = document.getElementById("comment1");
const popup = document.querySelector(".popup-comment");

const resourceBtn = document.getElementById("task-panel");
const popResourcesBtn = document.getElementById("pop-resources-panel");

resourceBtn.addEventListener("click", ()=>{
    window.location.href = "TaskListPage.html";
});

popResourcesBtn.addEventListener("click", ()=>{
    window.location.href = "PopularResourcesPage.html";
});


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


//Comment bar
const commentBar = document.getElementById("comment-box");
const popupComment = document.querySelector(".popup-comment-container");
const cancelCommentBtn = document.querySelector(".cancel-comment-icon");


commentBar.addEventListener("click",function(e){
        e.preventDefault();
        openComment();
    });

cancelCommentBtn.addEventListener("click", () =>{
    closeComment();
})

function openComment(){
    popupComment.classList.add("child");
    whiteBG.classList.add("active");
}

function closeComment(){
    popupComment.classList.remove("child")
    whiteBG.classList.remove("active");
}

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

const conversationBar = document.getElementById("chat");
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

conversationBar.addEventListener("click", (e)=>{
    e.preventDefault();
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