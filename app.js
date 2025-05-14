// script.js
function toggleDropdown() {
  const langDiv = document.querySelector(".lang");
  langDiv.classList.toggle("active");
}

// Lokalizatsiya qilingan so'zlar
const translations = {
  en: {
    home: "Home",
    about: "About Us",
    projects: "Projects",
    services: "Services",
    contact: "Contact",

    banner_title: "TOTAL CONTROL OF YOUR BUILDING",
    banner_desc:
      "Integration of IoT devices and software to monitor, control and optimize all building engineering systems.",
    banner_button1: "Request demo",
    banner_button2: "Download info PDF",

    problmes_title: "Problems that we are solving",
    problem1: "❌ High energy bills",
    problem2: "❌ No control over air conditioning and lighting",
    problem3: "❌ Water and gas leaks - not detected in time",
    problem4: "❌ Building security not automated",
    problem5: "❌ Cannot be controlled remotely",
    solution: "Solution",
    solution_desc: "✅ Complete control 24/7 from <br> single control panel",

    // for work title
    how_part: "How ",
    works_part: " works",
    work_card1: "Analysis on your current building",
    work_card2: "Installation of devices",
    work_card2_desc: "sensors, controllers, locks, lighting",
    work_card3: "Connecting to the cloud",
    work_card3_desc: "all data in a secure server",
    work_card4: "Automation",
    work_card4_desc: "create scenarios: turn on when a person is in the room",
    work_card5: "Control",
    work_card5_desc: "access from phone and web",
    work_button: " Watch demo video",

    feature_title: "Features and functions",
    feature_desc_title1: "Supported devices:",
    feature_desc1_desc1: "Motion, leakage, CO2, gas sensors",
    feature_desc1_desc2: "Control of curtains, lamps, locks",
    feature_desc1_desc3: "Control of chiller and sockets",
    feature_desc_title2: "Program services:",
    feature_desc2_desc1: "Web and mobile application for easy access",
    feature_desc2_desc2: "Energy monitoring and reports for analysis",
    feature_desc2_desc3: "Notifications and alarms for improver security",
    feature_desc2_desc4: "User authorization and amangement",
    feature_desc2_desc5: "Smart automation rules",

    results_title: "Results of implementation in a real building",
    results_card1: "Reduction of energy consumption by 23%",
    results_card2: "Security: +2 new levels of control",
    results_green_card1: "Office",
    results_green_card2: "Installed: devices",
    results_green_card3: "ROI in",
    results_green_card_year: "1 year",

    clients_title: "Our customers",

    contact_title: "Ready to connect the Smart X360?",
    name_input: "Name",
    phone_input: "Phone",
    company_input: "Company",
    contact_button: "Request a demo",

    footer_logo_desc:
      "Control, Control and optimization of all engineering systems in a building through the integration of IoT devices and software",
    footer_sections: "Sections",
    footer_sections1: "- Main page",
    footer_sections2: "- Solutions",
    footer_sections3: "- How it work",
    footer_sections4: "- What you get",
    footer_sections5: "- Real case",
    footer_sections6: "- Testimonials",
    footer_sections7: "- Call to action",
    footer_services: "Services",
    footer_services1: "- Analysis on your current building",
    footer_services2: "- Installation of devices",
    footer_services3: "- Connecting to the cloud",
    footer_services4: "- Automation",
    footer_services5: "- Control",
    footer_link: "Link",
    footer_link1: "Khorezm province,",
    footer_link2: "Peace Street,",
    footer_link3: "House 6",
    footer_link4: "Phone",
  },

  uz: {
    home: "Bosh sahifa",
    about: "Biz haqimizda",
    projects: "Loyihalar",
    services: "Xizmatlar",
    contact: "Bog‘lanish",

    banner_title: "BINOYINGIZNI TO‘LIQ NAZORAT QILING",
    banner_desc:
      "IoT qurilmalari va dasturiy ta'minotni integratsiyalash orqali binodagi barcha muhandislik tizimlarini nazorat qilish, boshqarish va optimallashtirish.",
    banner_button1: "Demo so‘rash",
    banner_button2: "PDF ma`lumotni yuklab olish",

    problmes_title: "Biz hal qilayotgan muammolar",
    problem1: "❌ Yuqori energiya to‘lovlari",
    problem2: "❌ Konditsioner va yoritishni boshqarib bo‘lmaydi",
    problem3: "❌ Suv va gaz sizishlari – vaqtida aniqlanmaydi",
    problem4: "❌ Binoni xavfsizlik tizimi avtomatlashtirilmagan",
    problem5: "❌ Masofadan turib boshqarib bo‘lmaydi",
    solution: "Yechim",
    solution_desc: "✅ Yagona boshqaruv paneli orqali <br> 24/7 to‘liq nazorat",

    //work title uchun

    how_part: "",
    works_part: " qanday ishlaydi",
    work_card1: "Binoyingizning joriy holatini tahlil qilish",
    work_card2: "Qurilmalarni o‘rnatish",
    work_card2_desc: "datchiklar, kontrollerlar, qulf va chiroqlar",
    work_card3: "Bulutga ulanish",
    work_card3_desc: "barcha ma'lumotlar xavfsiz serverda",
    work_card4: "Avtomatlashtirish",
    work_card4_desc:
      "senariylar yaratish – odam xonaga kirganda chiroq yoqiladi",
    work_card5: "Boshqaruv",
    work_card5_desc: "telefon va veb orqali kirish imkoniyati",
    work_button: "Demo videoni ko‘rish",

    feature_title: "Xususiyatlar va funksiyalar",
    feature_desc_title1: "Qo‘llab-quvvatlanadigan qurilmalar:",
    feature_desc1_desc1: "Harakat, sizish, CO2, gaz datchiklari",
    feature_desc1_desc2: "Parda, chiroq, qulfni boshqarish",
    feature_desc1_desc3: "Chiller va rozetkalarni boshqarish",
    feature_desc_title2: "Dasturiy xizmatlar:",
    feature_desc2_desc1: "Oson kirish uchun veb va mobil ilova",
    feature_desc2_desc2: "Energiya monitoringi va tahlil uchun hisobotlar",
    feature_desc2_desc3:
      "Xavfsizlikni oshiruvchi xabarnomalar va ogohlantirishlar",
    feature_desc2_desc4: "Foydalanuvchini avtorizatsiya qilish va boshqarish",
    feature_desc2_desc5: "Aqlli avtomatlashtirish qoidalari",

    results_title: "Haqiqiy binoda joriy etish natijalari",
    results_card1: "Energiyani sarflash 23% ga kamaydi",
    results_card2: "Xavfsizlik: +2 yangi nazorat darajalari",
    results_green_card1: "Ofis",
    results_green_card2: "O‘rnatilgan qurilmalar",
    results_green_card3: "ROI (investitsiya qaytimi)",
    results_green_card_year: "1 yil",

    clients_title: "Mijozlarimiz",

    contact_title: "Smart X360’ga ulanmoqchimisiz?",
    name_input: "F.I.O",
    phone_input: "Telefon",
    company_input: "Kompaniya",
    contact_button: "Demo so‘rash",

    footer_logo_desc:
      "IoT qurilmalari va dasturiy ta'minotni integratsiyalash orqali binodagi barcha muhandislik tizimlarini nazorat qilish, boshqarish va optimallashtirish",
    footer_sections: "Bo'limlar",
    footer_sections1: "- Bosh sahifa",
    footer_sections2: "- Yechim",
    footer_sections3: "- Qanday ishlaydi",
    footer_sections4: "- Nima olasiz",
    footer_sections5: "- Haqiqiy holat",
    footer_sections6: "- Mijozlar fikri",
    footer_sections7: "- Bog'lanish",
    footer_services: "Xizmatlar",
    footer_services1: "- Binoyingizning joriy holatini tahlil qilish",
    footer_services2: "- Qurilmalarni o‘rnatish",
    footer_services3: "- Bulutga ulanish",
    footer_services4: "- Avtomatlashtirish",
    footer_services5: "- Boshqaruv",
    footer_link: "Bog'lanish",
    footer_link1: "Xorazm viloyati,",
    footer_link2: "Tinchlik ko‘chasi,",
    footer_link3: "6-uy",
    footer_link4: "Telefon",
  },
};

// Til va Icon almashtirish
function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-lang-key]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-lang-key");

    // HTML tegi bor elementlar uchun innerHTML ishlatish
    if (
      key === "solution_desc" ||
      key.startsWith("footer_") ||
      translations[lang][key].includes("<br>")
    ) {
      el.innerHTML = translations[lang][key];
    } else {
      el.textContent = translations[lang][key];
    }
  });

  // Icon almashtirish
  const langIcon = document.querySelector(".lang-img");
  if (lang === "en") {
    langIcon.src = "./images/us.svg"; // Ingliz tili uchun flag
  } else if (lang === "uz") {
    langIcon.src = "./images/uz.svg"; // O'zbek tili uchun flag
  }

  // Tanlangan tilni localStorage'da saqlash
  localStorage.setItem("lang", lang);
  document.querySelector(".lang").classList.remove("active");
}

// Sahifa yuklanganda localStorage'dan tilni o'qish
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "uz";
  changeLanguage(savedLang);
});

// Parallax problems section va Scroll Animation
const problemItems = document.querySelectorAll(".problem-item");
const solution = document.querySelector(".solution");

const observerOptions = {
  threshold: 0.1, // 10% ekranga kirsa trigger bo'ladi
};

const problemObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
}, observerOptions);

problemItems.forEach((item) => problemObserver.observe(item));

// Parallax uchun scroll hodisasi
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  solution.style.transform = `translateY(${scrollPosition * 0.02}px)`;
});

// parallax kodi Smart Section
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.2, // 20% ekranga chiqqanda animatsiya boshlanadi
  }
);

cards.forEach((card) => {
  observer.observe(card);
});

// client parallax
const clientCards = document.querySelectorAll(".clients-card");

const clientObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.2, // 20% qismi ekranga chiqqanda animatsiya ishlaydi
  }
);

clientCards.forEach((card) => {
  clientObserver.observe(card);
});
