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