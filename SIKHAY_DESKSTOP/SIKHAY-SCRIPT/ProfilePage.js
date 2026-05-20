//Edit Profile 
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

//Menu bar
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


//Comment bar
const commentBar = document.querySelectorAll(".comment-wrapper");
const popupComment = document.querySelector(".popup-comment-container");
const cancelCommentBtn = document.querySelector(".cancel-comment-icon");


commentBar.forEach(function (feed){
    feed.addEventListener("click",function(e){
        e.preventDefault();
        openComment();
    });
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
