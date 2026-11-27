
/* =========================================
   SOLUSI KLINIK — MAIN JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =====================================
     1. NAVBAR SCROLL EFFECT
  ===================================== */

  const header = document.querySelector(".header");

  function handleHeaderScroll() {
    if (!header) return;

    header.classList.toggle("scrolled", window.scrollY > 30);
  }

  handleHeaderScroll();
  window.addEventListener("scroll", handleHeaderScroll);


  /* =====================================
     2. MOBILE NAVIGATION
  ===================================== */

  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  function closeMobileMenu() {
    if (!menuToggle || !navMenu) return;

    menuToggle.classList.remove("active");
    navMenu.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  if (menuToggle && navMenu) {
    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("active");

      menuToggle.classList.toggle("active", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMobileMenu);
    });

    document.addEventListener("click", event => {
      if (
        !navMenu.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        closeMobileMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 800) {
        closeMobileMenu();
      }
    });
  }


  /* =====================================
     3. FAQ ACCORDION
  ===================================== */

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    if (!question) return;

    question.setAttribute(
      "aria-expanded",
      item.classList.contains("active") ? "true" : "false"
    );

    question.addEventListener("click", () => {
      const wasActive = item.classList.contains("active");

      faqItems.forEach(otherItem => {
        otherItem.classList.remove("active");

        const otherQuestion =
          otherItem.querySelector(".faq-question");

        if (otherQuestion) {
          otherQuestion.setAttribute("aria-expanded", "false");
        }
      });

      if (!wasActive) {
        item.classList.add("active");
        question.setAttribute("aria-expanded", "true");
      }
    });
  });


  /* =====================================
     4. FLOATING SOCIAL MENU
  ===================================== */

  const floatingSocial = document.querySelector(".floating-social");
  const socialToggle = document.querySelector(".floating-social-toggle");

  if (floatingSocial && socialToggle) {
    socialToggle.setAttribute("aria-expanded", "false");

    socialToggle.addEventListener("click", () => {
      const isOpen = floatingSocial.classList.toggle("open");

      socialToggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", event => {
      if (!floatingSocial.contains(event.target)) {
        floatingSocial.classList.remove("open");
        socialToggle.setAttribute("aria-expanded", "false");
      }
    });
  }


  /* =====================================
     5. REVEAL ANIMATION
  ===================================== */

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
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


  /* =====================================
     6. LANGUAGE TRANSLATION
     Supports data-i18n and data-id/data-en
  ===================================== */

  const languageButtons = document.querySelectorAll(".language-btn");

  const translations = {
    id: {
      "nav-home": "Beranda",
      "nav-about": "Tentang Kami",
      "nav-services": "Layanan",
      "nav-process": "Proses",
      "nav-content": "Konten",
      "nav-faq": "FAQ",
      "nav-contact": "Kontak",
      "nav-consult": "Konsultasi",

      "hero-label": "PENDAMPINGAN PERIZINAN KESEHATAN",
      "hero-title": "Bangun Praktik Kesehatan dengan Fondasi yang Tepat",
      "hero-description": "Pendampingan profesional untuk membantu kebutuhan perizinan dan legalitas fasilitas kesehatan Anda.",
      "hero-button": "Konsultasi Sekarang",
      "hero-secondary": "Pelajari Layanan",

      "about-label": "TENTANG KAMI",
      "about-title": "Mendampingi Langkah Anda di Dunia Kesehatan",
      "about-description": "Solusi Klinik adalah layanan pendampingan profesional yang membantu dokter pemilik klinik dan pelaku usaha kesehatan dalam mengurus berbagai kebutuhan perizinan dan legalitas fasilitas kesehatan.",

      "services-label": "LAYANAN KAMI",
      "services-title": "Pendampingan yang Tepat untuk Kebutuhan Anda",
      "services-description": "Kami membantu proses administrasi dan legalitas fasilitas kesehatan melalui pendampingan yang terarah.",

      "process-label": "ALUR PENDAMPINGAN",
      "process-title": "Proses yang Terarah dan Transparan",

      "commitment-label": "KOMITMEN KAMI",
      "commitment-title": "Setiap Proses Dimulai dengan Fondasi yang Tepat",

      "content-label": "KONTEN KAMI",
      "tiktok-title": "TikTok",
      "instagram-title": "Instagram",

      "faq-label": "PERTANYAAN UMUM",
      "faq-title": "Hal yang Sering Ditanyakan",

      "contact-label": "HUBUNGI KAMI",
      "contact-title": "Mari Diskusikan Kebutuhan Perizinan Anda",
      "contact-button": "Hubungi Solusi Klinik",

      "footer-description": "Pendampingan perizinan dan legalitas fasilitas kesehatan di Bali."
    },

    en: {
      "nav-home": "Home",
      "nav-about": "About Us",
      "nav-services": "Services",
      "nav-process": "Process",
      "nav-content": "Content",
      "nav-faq": "FAQ",
      "nav-contact": "Contact",
      "nav-consult": "Consultation",

      "hero-label": "HEALTHCARE LICENSING ASSISTANCE",
      "hero-title": "Build Your Healthcare Practice on the Right Foundation",
      "hero-description": "Professional assistance for the licensing and legal requirements of your healthcare facility.",
      "hero-button": "Consult Now",
      "hero-secondary": "Explore Services",

      "about-label": "ABOUT US",
      "about-title": "Supporting Your Journey in Healthcare",
      "about-description": "Solusi Klinik is a professional assistance service that helps clinic-owning doctors and healthcare business operators manage licensing and legal requirements for healthcare facilities.",

      "services-label": "OUR SERVICES",
      "services-title": "The Right Assistance for Your Needs",
      "services-description": "We assist with administrative and legal processes for healthcare facilities through structured guidance.",

      "process-label": "OUR PROCESS",
      "process-title": "A Structured and Transparent Process",

      "commitment-label": "OUR COMMITMENT",
      "commitment-title": "Every Process Begins with the Right Foundation",

      "content-label": "OUR CONTENT",
      "tiktok-title": "TikTok",
      "instagram-title": "Instagram",

      "faq-label": "FREQUENTLY ASKED QUESTIONS",
      "faq-title": "Frequently Asked Questions",

      "contact-label": "CONTACT US",
      "contact-title": "Let's Discuss Your Licensing Needs",
      "contact-button": "Contact Solusi Klinik",

      "footer-description": "Healthcare facility licensing and legal assistance in Bali."
    }
  };

  function changeLanguage(language) {
    const selectedLanguage = translations[language];

    if (!selectedLanguage) return;

    document.documentElement.lang = language;

    // Translate elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.dataset.i18n;

      if (selectedLanguage[key] !== undefined) {
        element.textContent = selectedLanguage[key];
      }
    });

    // Translate elements with data-id and data-en
    document.querySelectorAll("[data-id][data-en]").forEach(element => {
      const translatedText = element.getAttribute(
        language === "id" ? "data-id" : "data-en"
      );

      if (translatedText !== null) {
        element.textContent = translatedText;
      }
    });

    // Update language button appearance
    languageButtons.forEach(button => {
      const buttonLanguage =
        button.dataset.lang ||
        button.textContent.trim().toLowerCase();

      const isActive = buttonLanguage === language;

      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    try {
      localStorage.setItem("solusiKlinikLanguage", language);
    } catch (error) {
      // Continue even if browser storage is unavailable.
    }
  }

  languageButtons.forEach(button => {
    button.addEventListener("click", () => {
      const language =
        button.dataset.lang ||
        button.textContent.trim().toLowerCase();

      if (language === "id" || language === "en") {
        changeLanguage(language);
      }
    });
  });

  let savedLanguage = "id";

  try {
    savedLanguage =
      localStorage.getItem("solusiKlinikLanguage") || "id";
  } catch (error) {
    savedLanguage = "id";
  }

  changeLanguage(savedLanguage);


  /* =====================================
     7. FOOTER YEAR
  ===================================== */

  document.querySelectorAll(".footer-year").forEach(element => {
    element.textContent = "2015";
  });


  /* =====================================
     8. SMOOTH INTERNAL NAVIGATION
  ===================================== */

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


  console.log("Solusi Klinik website is ready.");
});
