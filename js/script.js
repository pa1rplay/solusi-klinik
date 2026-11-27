
/* =========================================
   SOLUSI KLINIK — MAIN JAVASCRIPT
   Complete Responsive Version
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

  window.addEventListener("scroll", handleHeaderScroll, {
    passive: true
  });


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
      const isOpen = !navMenu.classList.contains("active");

      navMenu.classList.toggle("active", isOpen);
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

  const floatingSocial =
    document.querySelector(".floating-social");

  const socialToggle =
    document.querySelector(".floating-social-toggle");

  function closeSocialMenu() {
    if (!floatingSocial || !socialToggle) return;

    floatingSocial.classList.remove("open");
    socialToggle.setAttribute("aria-expanded", "false");
  }

  if (floatingSocial && socialToggle) {
    socialToggle.setAttribute("aria-expanded", "false");

    socialToggle.addEventListener("click", () => {
      const isOpen = !floatingSocial.classList.contains("open");

      floatingSocial.classList.toggle("open", isOpen);
      socialToggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", event => {
      if (!floatingSocial.contains(event.target)) {
        closeSocialMenu();
      }
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        closeSocialMenu();
      }
    });
  }


  /* =====================================
     5. REVEAL ANIMATION
  ===================================== */

  const revealElements =
    document.querySelectorAll(".reveal");

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
     Indonesian & English
  ===================================== */

  const languageButtons =
    document.querySelectorAll(".language-btn");

  const translations = {

    id: {
      navHome: "Beranda",
      navAbout: "Tentang Kami",
      navServices: "Layanan",
      navProcess: "Proses",
      navContent: "Konten",
      navFaq: "FAQ",
      navContact: "Kontak",
      navConsult: "Konsultasi",

      heroLabel: "PENDAMPINGAN PERIZINAN KESEHATAN",
      heroTitle: "Bangun Praktik Kesehatan dengan Fondasi yang Tepat",
      heroDescription: "Pendampingan profesional untuk membantu kebutuhan perizinan dan legalitas fasilitas kesehatan Anda.",
      heroButton: "Konsultasi Sekarang",
      heroSecondary: "Pelajari Layanan",

      aboutLabel: "TENTANG KAMI",
      aboutTitle: "Mendampingi Langkah Anda di Dunia Kesehatan",
      aboutDescription: "Solusi Klinik adalah layanan pendampingan profesional yang membantu dokter pemilik klinik dan pelaku usaha kesehatan dalam mengurus berbagai kebutuhan perizinan dan legalitas fasilitas kesehatan.",

      servicesLabel: "LAYANAN KAMI",
      servicesTitle: "Pendampingan yang Tepat untuk Kebutuhan Anda",
      servicesDescription: "Kami membantu proses administrasi dan legalitas fasilitas kesehatan melalui pendampingan yang terarah.",

      processLabel: "ALUR PENDAMPINGAN",
      processTitle: "Proses yang Terarah dan Transparan",

      commitmentLabel: "KOMITMEN KAMI",
      commitmentTitle: "Setiap Proses Dimulai dengan Fondasi yang Tepat",

      contentLabel: "KONTEN KAMI",
      tiktokTitle: "TikTok",
      instagramTitle: "Instagram",

      faqLabel: "PERTANYAAN UMUM",
      faqTitle: "Hal yang Sering Ditanyakan",

      contactLabel: "HUBUNGI KAMI",
      contactTitle: "Mari Diskusikan Kebutuhan Perizinan Anda",
      contactButton: "Hubungi Solusi Klinik",

      footerDescription: "Pendampingan perizinan dan legalitas fasilitas kesehatan di Bali."
    },

    en: {
      navHome: "Home",
      navAbout: "About Us",
      navServices: "Services",
      navProcess: "Process",
      navContent: "Content",
      navFaq: "FAQ",
      navContact: "Contact",
      navConsult: "Consultation",

      heroLabel: "HEALTHCARE LICENSING ASSISTANCE",
      heroTitle: "Build Your Healthcare Practice on the Right Foundation",
      heroDescription: "Professional assistance for the licensing and legal requirements of your healthcare facility.",
      heroButton: "Consult Now",
      heroSecondary: "Explore Services",

      aboutLabel: "ABOUT US",
      aboutTitle: "Supporting Your Journey in Healthcare",
      aboutDescription: "Solusi Klinik is a professional assistance service that helps clinic-owning doctors and healthcare business operators manage licensing and legal requirements for healthcare facilities.",

      servicesLabel: "OUR SERVICES",
      servicesTitle: "The Right Assistance for Your Needs",
      servicesDescription: "We assist with administrative and legal processes for healthcare facilities through structured guidance.",

      processLabel: "OUR PROCESS",
      processTitle: "A Structured and Transparent Process",

      commitmentLabel: "OUR COMMITMENT",
      commitmentTitle: "Every Process Begins with the Right Foundation",

      contentLabel: "OUR CONTENT",
      tiktokTitle: "TikTok",
      instagramTitle: "Instagram",

      faqLabel: "FREQUENTLY ASKED QUESTIONS",
      faqTitle: "Frequently Asked Questions",

      contactLabel: "CONTACT US",
      contactTitle: "Let's Discuss Your Licensing Needs",
      contactButton: "Contact Solusi Klinik",

      footerDescription: "Healthcare facility licensing and legal assistance in Bali."
    }

  };


  /* =====================================
     7. LANGUAGE SWITCHER
  ===================================== */

  function changeLanguage(language) {

    const selectedLanguage = translations[language];

    if (!selectedLanguage) return;

    document.documentElement.lang = language;

    // Translate data-i18n elements
    document.querySelectorAll("[data-i18n]").forEach(element => {

      const key = element.dataset.i18n;

      if (selectedLanguage[key] !== undefined) {

        // Preserve nested HTML such as spans and icons
        const textNode = Array.from(element.childNodes).find(
          node => node.nodeType === Node.TEXT_NODE &&
          node.textContent.trim() !== ""
        );

        if (textNode) {
          textNode.textContent = selectedLanguage[key];
        } else {
          element.textContent = selectedLanguage[key];
        }

      }

    });


    // Translate data-id and data-en elements
    document.querySelectorAll("[data-id][data-en]").forEach(element => {

      const translatedText = element.getAttribute(
        language === "id" ? "data-id" : "data-en"
      );

      if (translatedText !== null) {
        element.textContent = translatedText;
      }

    });


    // Update all language buttons
    languageButtons.forEach(button => {

      const buttonLanguage =
        button.dataset.language ||
        button.dataset.lang ||
        button.textContent.trim().toLowerCase();

      const isActive = buttonLanguage === language;

      button.classList.toggle("active", isActive);

      button.setAttribute(
        "aria-pressed",
        String(isActive)
      );

    });


    // Save selected language
    try {

      localStorage.setItem(
        "solusiKlinikLanguage",
        language
      );

    } catch (error) {

      console.warn("Language preference could not be saved.");

    }

  }


  // Language button click events
  languageButtons.forEach(button => {

    button.addEventListener("click", () => {

      const language =
        button.dataset.language ||
        button.dataset.lang ||
        button.textContent.trim().toLowerCase();

      if (language === "id" || language === "en") {
        changeLanguage(language);
      }

    });

  });


  // Load saved language
  let savedLanguage = "id";

  try {

    savedLanguage =
      localStorage.getItem("solusiKlinikLanguage") || "id";

  } catch (error) {

    savedLanguage = "id";

  }

  if (!translations[savedLanguage]) {
    savedLanguage = "id";
  }

  changeLanguage(savedLanguage);


  /* =====================================
     8. SMOOTH INTERNAL NAVIGATION
  ===================================== */

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      let target;

      try {
        target = document.querySelector(targetId);
      } catch (error) {
        return;
      }

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches ? "auto" : "smooth",
        block: "start"
      });

    });

  });


  /* =====================================
     9. ACCESSIBILITY
  ===================================== */

  // Close mobile navigation using Escape
  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
      closeMobileMenu();
    }

  });


  /* =====================================
     10. INITIALIZATION
  ===================================== */

  console.log("Solusi Klinik website is ready.");

});
