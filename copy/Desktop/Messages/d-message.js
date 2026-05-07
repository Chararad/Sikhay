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

        // 🔥 FIX: always go to correct message container
        const message = this.closest(".message");
        const menu = message.querySelector(".message-menu");

        // close all other menus
        document.querySelectorAll(".message-menu").forEach(m => {
            if (m !== menu) m.style.display = "none";
        });

        // toggle current
        menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
    });
});

// click outside closes everything
document.addEventListener("click", function () {
    document.querySelectorAll(".message-menu").forEach(menu => {
        menu.style.display = "none";
    });
});
