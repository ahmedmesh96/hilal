const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');
    const links = navLinks.querySelectorAll('a');
  
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  
    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault(); // Prevent default jump
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
  
        // Smooth scroll with slower effect
        window.scrollTo({
          top: targetSection.offsetTop - 70, // adjust for fixed navbar
          behavior: 'smooth'
        });
  
        // Close menu after click
        navLinks.classList.remove('active');
      });
    });
 





import translations from "./translations.js";

const languageSelector = document.querySelector("select");

languageSelector.addEventListener("change", (event) => {
  setLanguage(event.target.value);
  localStorage.setItem("lang", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang") || "en";
  setLanguage(language);
});

const setLanguage = (language) => {
  // Update text content
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[language][key]) {
      el.textContent = translations[language][key];
    }
  });

  // Update placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((input) => {
    const key = input.getAttribute("data-i18n-placeholder");
    if (translations[language][key]) {
      input.placeholder = translations[language][key];
    }
  });

  // Update input button values
  document.querySelectorAll("[data-i18n-value]").forEach((input) => {
    const key = input.getAttribute("data-i18n-value");
    if (translations[language][key]) {
      input.value = translations[language][key];
    }
  });

  // Set text direction
  document.dir = (language === "ar" || language === "ku") ? "rtl" : "ltr";
};






const container = document.getElementById("scrollContainer");
const gallery = document.getElementById("gallery");
let scrollSpeed = 1; // pixels per frame
let isScrolling = true;

function autoScroll() {
  if (isScrolling) {
    container.scrollLeft += scrollSpeed;
    if (container.scrollLeft + container.clientWidth >= gallery.clientWidth) {
      container.scrollLeft = 0; // loop back to start
    }
  }
  requestAnimationFrame(autoScroll);
}

autoScroll();

// Handle click to stop scroll + zoom image
const images = gallery.querySelectorAll("img");
images.forEach(img => {
  img.addEventListener("click", () => {
    isScrolling = false;
    images.forEach(i => i.classList.remove("active"));
    img.classList.add("active");
  });
});




  
    
