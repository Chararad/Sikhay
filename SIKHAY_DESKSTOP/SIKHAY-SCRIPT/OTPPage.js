const otpPin1 = document.getElementById("first");
const otpPin2 = document.getElementById("second");
const otpPin3 = document.getElementById("third");
const otpPin4 = document.getElementById("last");

const pins = [otpPin1, otpPin2, otpPin3, otpPin4];

pins.forEach((pin, index) => {
    pin.addEventListener('input', (e) => {
        
        if (e.target.value.length === 1) {
            
            if (index === 3) {
                otpPin1.focus();
            } else {
                
                pins[index + 1].focus();
            }
        }
    });

    
    pin.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
            pins[index - 1].focus();
        }
    });
});

const focusFirstEmpty = () => {
    const emptyPin = pins.find(pin => pin.value === "");
    if (emptyPin) {
        emptyPin.focus();
    }
};


otpPin4.addEventListener('click', focusFirstEmpty);


otpPin4.addEventListener('input', () => {
    if (otpPin3.value.length === 1) {
        focusFirstEmpty();
    }
});

otpPin3.addEventListener('click', focusFirstEmpty);


otpPin3.addEventListener('input', () => {
    if (otpPin3.value.length === 1) {
        focusFirstEmpty();
    }
});

otpPin2.addEventListener('click', focusFirstEmpty);


otpPin2.addEventListener('input', () => {
    if (otpPin2.value.length === 1) {
        focusFirstEmpty();
    }
});

const OTPBtn = document.querySelector(".confirm-btn");
function isOtpComplete() {

    return pins.every(pin => pin.value.trim() !== "");
}
OTPBtn.addEventListener("click", () =>{
    if (isOtpComplete()) {
        window.location.href = "MainPage.html";
    } else {
        alert("Please fill in all digits.");
    }
});