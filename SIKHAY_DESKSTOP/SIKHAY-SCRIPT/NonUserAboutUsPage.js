const backspace = document.querySelector(".backpage"); 
const navigateBtn =  document.querySelector(".cta-btn");

backspace.addEventListener("click", () =>{
    window.history.back();
});

navigateBtn.addEventListener("click", ()=>{
    alert("You must create an account first before accessing SIKHAY.");
});