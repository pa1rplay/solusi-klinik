
document.addEventListener("DOMContentLoaded", () => {

  // =====================================
  // MOBILE NAVIGATION
  // =====================================

  const menuButton = document.querySelector(".menu-button");
  const navLinks = document.querySelector(".nav-links");

  if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("active");

      menuButton.setAttribute("aria-expanded", String(isOpen));

      menuButton.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    });

    // Close menu after selecting a link
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        menuButton.setAttribute("aria-expanded", "false");
        menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", event => {
      const clickedInside =
        navLinks.contains(event.target) ||
        menuButton.contains(event.target);

      if (!clickedInside) {
        navLinks.classList.remove("active");

        menuButton.setAttribute("aria-expanded", "false");
        menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
      }
    });

  }


  // =====================================
  // FLOATING SOCIAL MENU
  // =====================================

  const floatingSocial = document.querySelector("#floatingSocial");
  const socialToggle = document.querySelector(".social-toggle");
  const socialMenu = document.querySelector("#socialMenu");

  if (floatingSocial && socialToggle && socialMenu) {

    socialToggle.addEventListener("click", () => {

      const isOpen = floatingSocial.classList.toggle("active");

      socialToggle.setAttribute("aria-expanded", String(isOpen));
      socialMenu.setAttribute("aria-hidden", String(!isOpen));

      socialToggle.setAttribute(
        "aria-label",
        isOpen ? "Tutup media sosial" : "Buka media sosial"
      );

    });

    // Close when clicking outside
    document.addEventListener("click", event => {

      if (!floatingSocial.contains(event.target)) {

        floatingSocial.classList.remove("active");

        socialToggle.setAttribute("aria-expanded", "false");
        socialMenu.setAttribute("aria-hidden", "true");
        socialToggle.setAttribute("aria-label", "Buka media sosial");

      }

    });

    // Close with Escape key
    document.addEventListener("keydown", event => {

      if (event.key === "Escape") {

        floatingSocial.classList.remove("active");

        socialToggle.setAttribute("aria-expanded", "false");
        socialMenu.setAttribute("aria-hidden", "true");
        socialToggle.setAttribute("aria-label", "Buka media sosial");

      }

    });

  }


  // =====================================
  // AUTOMATIC FOOTER YEAR
  // =====================================

  const yearElement = document.querySelector("#year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  // =====================================
  // SCROLL REVEAL ANIMATION
  // =====================================

  const revealElements = document.querySelectorAll(
    ".section-kicker, " +
    ".about-grid, " +
    ".identity-item, " +
    ".service-row, " +
    ".process-list article, " +
    ".advantage-grid article, " +
    ".testimonial-card, " +
    ".contact-inner"
  );

  revealElements.forEach(element => {
    element.classList.add("reveal");
  });

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if ("IntersectionObserver" in window && !prefersReducedMotion) {

    const observer = new IntersectionObserver((entries, observerInstance) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("revealed");
          observerInstance.unobserve(entry.target);

        }

      });

    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -35px 0px"
    });

    revealElements.forEach(element => {
      observer.observe(element);
    });

  } else {

    revealElements.forEach(element => {
      element.classList.add("revealed");
    });

  }


  // =====================================
  // SMOOTH SCROLL
  // =====================================

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", event => {

      const targetId = anchor.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {

        event.preventDefault();

        target.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
          block: "start"
        });

      }

    });

  });


  console.log("Solusi Klinik website initialized successfully.");

});
