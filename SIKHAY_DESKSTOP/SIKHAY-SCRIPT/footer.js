document.querySelectorAll(".footer-links a").forEach(link => {

  link.addEventListener("click", (e) => {

    const text = link.textContent.trim();

    if(text === "Learn more"){
      window.location.href = "AboutUsPage.html";
    }

    if(text === "Support"){
      window.location.href = "FAQPage.html";
    }

    if(text === "Terms and Conditions"){
      window.location.href = "TOSPage.html";
    }

    if(text === "Privacy Policy"){
      window.location.href = "PrivacyPolicyPage.html";
    }

  });

});