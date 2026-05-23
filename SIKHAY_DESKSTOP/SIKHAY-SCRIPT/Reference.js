document.addEventListener("DOMContentLoaded", function () {

  // CREATE POPUP
  const popup = document.createElement("div");

  popup.id = "referencesPopup";

  popup.style.display = "none";
  popup.style.position = "fixed";
  popup.style.top = "0";
  popup.style.left = "0";
  popup.style.width = "100%";
  popup.style.height = "100%";
  popup.style.justifyContent = "center";
  popup.style.alignItems = "center";
  popup.style.zIndex = "999";

  popup.innerHTML = `
    <div style="
      background:rgba(84, 22, 22, 0.9);
      padding:25px;
      width:400px;
      border-radius:10px;
      position:relative;
      font-family:sans-serif;
      color:white;
    ">

      <span id="closePopup" style="
        position:absolute;
        top:10px;
        right:15px;
        font-size:28px;
        cursor:pointer;
      ">
        &times;
      </span>

      <h2>References</h2>

      <p> All Photos used are Property of Pampanga State University and Group 1</p>
      

    </div>
  `;

  document.body.appendChild(popup);

  // BUTTON
  const openBtn = document.getElementById("openReferences");

  // CLOSE BUTTON
  const closeBtn = document.getElementById("closePopup");

  // OPEN POPUP
  openBtn.addEventListener("click", function (e) {
    e.preventDefault();
    popup.style.display = "flex";
  });

  // CLOSE POPUP
  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });

  // CLICK OUTSIDE
  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });

});