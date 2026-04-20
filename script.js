/* =============================================
   SƏNƏN ƏT — script.js
   ============================================= */

"use strict";

// -----------------------------------------------
// i18n Translations
// -----------------------------------------------
const translations = {
  az: {
    nav_about: "Haqqımda",
    nav_gallery: "Məhsullar",
    nav_order: "Sifariş",
    nav_contact: "Əlaqə",
    hero_tag: "Sumqayıt • Keyfiyyətli Ət",
    hero_sub: "Təzə · Halal · Kənd əti",
    hero_cta: "Sifariş Et",
    hero_gallery: "Məhsullara Bax",
    about_tag: "Mən kiməm?",
    about_title: "Peşəkar Qəssab,\nƏsl Dadı",
    about_p1:
      "Sənən Ət — Sumqayıtda fəaliyyət göstərən, təzə və halal ət satan ixtisaslaşmış qəssab mağazasıdır. Hər gün yeni mal, quzu və digər növ ətlər müştərilərimizin xidmətindədir.",
    about_p2:
      "Peşəkar kəsim texnikası, gigiyenik mühit və mehriban xidmətlə sizin üçün ən yaxşısını hazırlayırıq. Hər parça ət əlimizdən keçir — keyfiyyətə zəmanət veririk.",
    stat_years: "İllik Təcrübə",
    stat_halal: "Halal",
    stat_fresh: "Təzəlik",
    about_cta: "WhatsApp ilə Əlaqə",
    
    order_tag: "Ön Sifariş",
    order_title: "Sifarişinizi\nƏvvəlcədən Verin",
    order_desc:
      "Formu doldurun, sifarişiniz birbaşa WhatsApp-a göndərilsin. Tez, rahat, etibarlı.",
    form_name: "Ad",
    form_surname: "Soyad",
    form_phone: "Telefon",
    form_meat: "Nə istəyirsiniz?",
    form_date: "Tarix",
    form_time: "Saat",
    form_note: "Əlavə qeyd",
    form_send: "WhatsApp-a Göndər",
    ph_name: "Adınız",
    ph_surname: "Soyadınız",
    ph_meat: "Məs: 3 kq quzu əti, 2 kq dana döş...",
    ph_note: "Hər hansı xahiş...",
    footer_tagline: "Sumqayıtın ən keyfiyyətli ət mağazası",
    footer_menu: "Menyu",
    footer_follow: "Bizi izləyin",
    footer_rights: "Bütün hüquqlar qorunur.",
    map_tag: "Bizim Ünvan",
    map_title: "Bizi Tapın",
    map_directions: "Yol Göstər",
    // WhatsApp message template
    wa_hello: "Salam! Mən sifariş etmək istəyirəm.",
    wa_name: "Ad Soyad",
    wa_phone: "Telefon",
    wa_order: "Sifariş",
    wa_date: "Tarix",
    wa_time: "Saat",
    wa_note: "Qeyd",
    wa_no_time: "Göstərilməyib",
    wa_no_note: "Yoxdur",
    // Validation
    val_name: "Ad mütləq doldurulmalıdır.",
    val_phone: "Telefon nömrəsi mütləq doldurulmalıdır.",
    val_meat: "Sifariş məzmunu mütləq doldurulmalıdır.",
    val_date: "Tarix seçilməlidir.",
  },
  ru: {
    nav_about: "Обо мне",
    nav_gallery: "Продукты",
    nav_order: "Заказ",
    nav_contact: "Контакты",
    hero_tag: "Сумгаит • Качественное мясо",
    hero_sub: "Свежее · Халяль · Фермерское",
    hero_cta: "Сделать заказ",
    hero_gallery: "Смотреть продукты",
    about_tag: "Кто я?",
    about_title: "Профессиональный\nмясник",
    about_p1:
      "Sənən Ət — специализированный мясной магазин в Сумгаите, торгующий свежим халяльным мясом. Каждый день в наличии говядина, баранина и другие виды мяса.",
    about_p2:
      "Профессиональная разделка, гигиеничная среда и дружелюбный сервис. Каждый кусок мяса проходит через наши руки — гарантируем качество.",
    stat_years: "Лет опыта",
    stat_halal: "Халяль",
    stat_fresh: "Свежесть",
    about_cta: "Написать в WhatsApp",
    
    order_tag: "Предзаказ",
    order_title: "Оформите заказ\nзаранее",
    order_desc:
      "Заполните форму — заказ отправится прямо в WhatsApp. Быстро, удобно, надёжно.",
    form_name: "Имя",
    form_surname: "Фамилия",
    form_phone: "Телефон",
    form_meat: "Что хотите?",
    form_date: "Дата",
    form_time: "Время",
    form_note: "Дополнительно",
    form_send: "Отправить в WhatsApp",
    ph_name: "Ваше имя",
    ph_surname: "Ваша фамилия",
    ph_meat: "Напр.: 3 кг баранины, 2 кг говядины...",
    ph_note: "Любые пожелания...",
    footer_tagline: "Лучший мясной магазин в Сумгаите",
    footer_menu: "Меню",
    footer_follow: "Следите за нами",
    footer_rights: "Все права защищены.",
    map_tag: "Наш адрес",
    map_title: "Найдите нас",
    map_directions: "Маршрут",
    wa_hello: "Здравствуйте! Хочу сделать заказ.",
    wa_name: "Имя Фамилия",
    wa_phone: "Телефон",
    wa_order: "Заказ",
    wa_date: "Дата",
    wa_time: "Время",
    wa_note: "Заметка",
    wa_no_time: "Не указано",
    wa_no_note: "Нет",
    val_name: 'Необходимо заполнить поле "Имя".',
    val_phone: 'Необходимо заполнить поле "Телефон".',
    val_meat: "Необходимо указать содержание заказа.",
    val_date: "Необходимо выбрать дату.",
  },
  en: {
    nav_about: "About Me",
    nav_gallery: "Products",
    nav_order: "Order",
    nav_contact: "Contact",
    hero_tag: "Sumqayit • Premium Meat",
    hero_sub: "Fresh · Halal · Farm-to-table",
    hero_cta: "Place Order",
    hero_gallery: "View Products",
    about_tag: "Who am I?",
    about_title: "Master Butcher,\nReal Taste",
    about_p1:
      "Sənən Ət is a specialized butcher shop in Sumqayit, offering fresh halal beef, lamb, and other premium cuts every day for our valued customers.",
    about_p2:
      "Professional cutting technique, hygienic environment, and friendly service. Every piece of meat passes through our hands — we guarantee quality.",
    stat_years: "Years Experience",
    stat_halal: "Halal",
    stat_fresh: "Freshness",
    about_cta: "Contact via WhatsApp",
    
    order_tag: "Pre-Order",
    order_title: "Place Your Order\nin Advance",
    order_desc:
      "Fill the form and your order goes straight to WhatsApp. Fast, easy, reliable.",
    form_name: "First Name",
    form_surname: "Last Name",
    form_phone: "Phone",
    form_meat: "What do you want?",
    form_date: "Date",
    form_time: "Time",
    form_note: "Additional notes",
    form_send: "Send via WhatsApp",
    ph_name: "Your first name",
    ph_surname: "Your last name",
    ph_meat: "E.g.: 3 kg lamb, 2 kg beef brisket...",
    ph_note: "Any special requests...",
    footer_tagline: "Sumqayit's finest butcher shop",
    footer_menu: "Menu",
    footer_follow: "Follow us",
    footer_rights: "All rights reserved.",
    map_tag: "Our Location",
    map_title: "Find Us",
    map_directions: "Get Directions",
    wa_hello: "Hello! I would like to place an order.",
    wa_name: "Full Name",
    wa_phone: "Phone",
    wa_order: "Order",
    wa_date: "Date",
    wa_time: "Time",
    wa_note: "Note",
    wa_no_time: "Not specified",
    wa_no_note: "None",
    val_name: "First name is required.",
    val_phone: "Phone number is required.",
    val_meat: "Please describe your order.",
    val_date: "Please select a date.",
  },
};

// -----------------------------------------------
// State
// -----------------------------------------------
let currentLang = "az";

// -----------------------------------------------
// Apply translations
// -----------------------------------------------
function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  // Update text content
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      // Handle newlines for section titles
      if (el.classList.contains("section-title")) {
        el.innerHTML = t[key].replace(/\n/g, "<br>");
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Update placeholders
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  // Update lang attribute
  document.documentElement.setAttribute("lang", lang);
  currentLang = lang;
}

// -----------------------------------------------
// Language switcher
// -----------------------------------------------
function initLangSwitcher() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      // Mark active on ALL lang buttons (desktop + mobile)
      document.querySelectorAll(".lang-btn").forEach((b) => {
        b.classList.toggle("active", b.getAttribute("data-lang") === lang);
      });
      applyTranslations(lang);
    });
  });
}

// -----------------------------------------------
// Navbar: scroll behavior
// -----------------------------------------------
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const onScroll = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// -----------------------------------------------
// Burger / Mobile menu
// -----------------------------------------------
function initBurger() {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("mobileMenu");

  burger.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
  });

  // Close on link click
  document.querySelectorAll(".mob-link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      burger.classList.remove("open");
    });
  });
}

// -----------------------------------------------
// Scroll reveal
// -----------------------------------------------
function initReveal() {
  const targets = document.querySelectorAll(
    ".about-images, .about-text, .gallery-item, .order-info, .order-form, .footer-brand, .footer-links, .footer-social",
  );

  targets.forEach((el) => el.classList.add("reveal"));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          // Stagger gallery items
          const delay = entry.target.closest(".gallery-grid") ? idx * 60 : 0;
          setTimeout(() => entry.target.classList.add("visible"), delay);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  targets.forEach((el) => io.observe(el));
}

// -----------------------------------------------
// Order Form → WhatsApp
// -----------------------------------------------
function initOrderForm() {
  const form = document.getElementById("orderForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const t = translations[currentLang];

    const name = document.getElementById("f-name").value.trim();
    const surname = document.getElementById("f-surname").value.trim();
    const phone = document.getElementById("f-phone").value.trim();
    const meat = document.getElementById("f-meat").value.trim();
    const date = document.getElementById("f-date").value;
    const time = document.getElementById("f-time").value;
    const note = document.getElementById("f-note").value.trim();

    // Validation
    if (!name) {
      showError("f-name", t.val_name);
      return;
    }
    if (!phone) {
      showError("f-phone", t.val_phone);
      return;
    }
    if (!meat) {
      showError("f-meat", t.val_meat);
      return;
    }
    if (!date) {
      showError("f-date", t.val_date);
      return;
    }

    const fullName = surname ? `${name} ${surname}` : name;
    const timeStr = time || t.wa_no_time;
    const noteStr = note || t.wa_no_note;

    // Format date nicely
    let dateStr = date;
    if (date) {
      const d = new Date(date);
      dateStr = d.toLocaleDateString(
        currentLang === "az"
          ? "az-AZ"
          : currentLang === "ru"
            ? "ru-RU"
            : "en-GB",
        { day: "2-digit", month: "long", year: "numeric" },
      );
    }

    const msg = [
      `🥩 *Sənən Ət — ${t.order_tag || "Sifariş"}*`,
      ``,
      `👤 *${t.wa_name}:* ${fullName}`,
      `📞 *${t.wa_phone}:* ${phone}`,
      ``,
      `🛒 *${t.wa_order}:*`,
      meat,
      ``,
      `📅 *${t.wa_date}:* ${dateStr}`,
      `⏰ *${t.wa_time}:* ${timeStr}`,
      ``,
      `📝 *${t.wa_note}:* ${noteStr}`,
    ].join("\n");

    const url = `https://wa.me/994516500099?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  });
}

// -----------------------------------------------
// Show field error
// -----------------------------------------------
function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  field.style.borderColor = "#e74c3c";
  field.style.boxShadow = "0 0 0 3px rgba(231,76,60,0.15)";
  field.focus();

  // Remove error styling on input
  const clear = () => {
    field.style.borderColor = "";
    field.style.boxShadow = "";
    field.removeEventListener("input", clear);
    field.removeEventListener("change", clear);
  };
  field.addEventListener("input", clear);
  field.addEventListener("change", clear);

  // Shake animation
  field.animate(
    [
      { transform: "translateX(0)" },
      { transform: "translateX(-8px)" },
      { transform: "translateX(8px)" },
      { transform: "translateX(-5px)" },
      { transform: "translateX(5px)" },
      { transform: "translateX(0)" },
    ],
    { duration: 400, easing: "ease-out" },
  );
}

// -----------------------------------------------
// Set min date on date input (today)
// -----------------------------------------------
function initDateInput() {
  const dateInput = document.getElementById("f-date");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
  }
}

// -----------------------------------------------
// Smooth scroll for anchor links
// -----------------------------------------------
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const offset =
          parseInt(
            getComputedStyle(document.documentElement).getPropertyValue(
              "--nav-h",
            ),
          ) || 72;
        const top =
          target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });
}
initLightbox();
function initLightbox() {
  const lb    = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbClose = document.getElementById('lbClose');

  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      lbImg.src = img.src;
      lb.classList.add('open');
    });
  });

  lbClose.addEventListener('click', () => lb.classList.remove('open'));
  lb.addEventListener('click', (e) => {
    if (e.target === lb) lb.classList.remove('open');
  });
}
// -----------------------------------------------
// Init all
// -----------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initBurger();
  initLangSwitcher();
  initReveal();
  initOrderForm();
  initDateInput();
  initSmoothScroll();
  applyTranslations("az"); // default language
});
