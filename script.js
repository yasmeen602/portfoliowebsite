// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  
  // Contact Form Validation
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
  
    if (!name || !email) {
      alert("Please fill in all required fields.");
    } else {
      alert("Thank you for reaching out!");
    }
  });
  
  // Adding Fade-in Animation to the About Section on Scroll
  window.addEventListener("scroll", function() {
    const aboutSection = document.querySelector("#about");
    const sectionPosition = aboutSection.getBoundingClientRect().top;
  
    if (sectionPosition < window.innerHeight) {
      aboutSection.classList.add("fade-in");
    }
  });
  
  // Check if a <style> tag exists, if not, create one
  let styleTag = document.querySelector("style");
  if (!styleTag) {
    styleTag = document.createElement("style");
    document.head.appendChild(styleTag);
  }
  
  // Adding the fade-in CSS class for animation
  styleTag.insertAdjacentHTML("beforeend", `
    #about.fade-in {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
  
    #about {
      opacity: 0;
      transform: translateY(50px);
    }
  `);