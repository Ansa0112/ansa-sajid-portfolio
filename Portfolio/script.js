
document.addEventListener("DOMContentLoaded", () => {

 
  // Mobile Navigation
  
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Close menu when a navigation link is clicked
    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }



  // Header Effect on Scroll
  
  const header = document.querySelector(".header");

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }


  // Reveal Animation

  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          // Stop observing once the element is visible
          observer.unobserve(entry.target);
        }

      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach(element => {
    observer.observe(element);
  });


 
  // Current Year in Footer
  
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }



  // Placeholder Project Links
 
  const placeholderLinks = document.querySelectorAll(".disabled-link");

  placeholderLinks.forEach(link => {

    link.addEventListener("click", (event) => {

      if (link.getAttribute("href") === "#") {
        event.preventDefault();

        alert(
          "Replace this # with your GitHub repository or live project URL."
        );
      }

    });

  });

});