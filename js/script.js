
document.addEventListener("DOMContentLoaded", () => {

  // =====================================
  // NAVBAR SCROLL EFFECT
  // =====================================

  const header = document.getElementById("header");

  function updateHeader() {
    if (!header) return;

    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();


  // =====================================
  // MOBILE NAVIGATION
  // =====================================

  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = navMenu
    ? navMenu.querySelectorAll("a")
    : [];

  function closeMenu() {
    if (!menuToggle || !navMenu) return;

    navMenu.classList.remove("active");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("active");

      menuToggle.classList.toggle("active", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", event => {
      const clickedInsideMenu = navMenu.contains(event.target);
      const clickedToggle = menuToggle.contains(event.target);

      if (!clickedInsideMenu && !clickedToggle) {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) {
        closeMenu();
      }
    });

  }


  // =====================================
  // FAQ ACCORDION
  // =====================================

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    if (!question) return;

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Tutup semua FAQ lainnya
      faqItems.forEach(otherItem => {
        otherItem.classList.remove("active");

        const otherButton = otherItem.querySelector(".faq-question");

        if (otherButton) {
          otherButton.setAttribute("aria-expanded", "false");
        }
      });

      // Buka FAQ yang dipilih
      if (!isActive) {
        item.classList.add("active");
        question.setAttribute("aria-expanded", "true");
      }
    });
  });


  // =====================================
  // FLOATING SOCIAL MENU
  // =====================================

  const floatingSocial = document.getElementById("floatingSocial");
  const socialToggle = document.getElementById("socialToggle");
  const socialLinks = document.getElementById("floatingSocialLinks");

  function closeSocialMenu() {
    if (!floatingSocial || !socialToggle) return;

    floatingSocial.classList.remove("open");
    socialToggle.setAttribute("aria-expanded", "false");
  }

  if (floatingSocial && socialToggle) {

    socialToggle.addEventListener("click", () => {
      const isOpen = floatingSocial.classList.toggle("open");

      socialToggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", event => {
      const clickedInside = floatingSocial.contains(event.target);

      if (!clickedInside) {
        closeSocialMenu();
      }
    });

    if (socialLinks) {
      socialLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeSocialMenu);
      });
    }

  }


  // =====================================
  // SCROLL REVEAL ANIMATION
  // =====================================

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px"
      }
    );

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });

  } else {

    revealElements.forEach(element => {
      element.classList.add("visible");
    });

  }


  // =====================================
  // FOOTER YEAR
  // =====================================

  const currentYear = document.getElementById("currentYear");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }


  // =====================================
  // SMOOTH INTERNAL NAVIGATION
  // =====================================

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


  console.log("Solusi Klinik website initialized successfully.");

});
