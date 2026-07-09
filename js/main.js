const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const year = document.querySelector("[data-year]");
const cookieBanner = document.querySelector("[data-cookie-banner]");
const cookieAccept = document.querySelector("[data-cookie-accept]");
const form = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");
const phoneInput = document.querySelector("[data-phone]");

const closeMenu = () => {
  if (!menuToggle || !nav) return;
  menuToggle.classList.remove("is-open");
  nav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
};

const toggleMenu = () => {
  if (!menuToggle || !nav) return;
  const isOpen = menuToggle.classList.toggle("is-open");
  nav.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
};

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

const formatPhone = (value) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 2) {
    return digits;
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const setError = (field, message) => {
  const row = field.closest(".form-row");
  const error = row?.querySelector(".field-error");
  field.classList.toggle("is-invalid", Boolean(message));
  field.setAttribute("aria-invalid", String(Boolean(message)));

  if (error) {
    error.textContent = message;
  }
};

const validateField = (field) => {
  const value = field.value.trim();

  if (field.required && !value) {
    setError(field, "Preencha este campo.");
    return false;
  }

  if (field.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    setError(field, "Informe um e-mail válido.");
    return false;
  }

  if (field.matches("[data-phone]")) {
    const digits = value.replace(/\D/g, "");
    if (digits.length < 10) {
      setError(field, "Informe um telefone válido.");
      return false;
    }
  }

  setError(field, "");
  return true;
};

const initAccordion = () => {
  document.querySelectorAll("[data-accordion] .faq-item").forEach((item) => {
    const button = item.querySelector("button");

    button?.addEventListener("click", () => {
      const isOpen = item.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
};

const initReveal = () => {
  const items = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  items.forEach((item) => observer.observe(item));
};

const initCookies = () => {
  if (!cookieBanner || !cookieAccept) return;

  if (localStorage.getItem("promulherCookiesAccepted") !== "true") {
    cookieBanner.classList.add("is-visible");
  }

  cookieAccept.addEventListener("click", () => {
    localStorage.setItem("promulherCookiesAccepted", "true");
    cookieBanner.classList.remove("is-visible");
  });
};

menuToggle?.addEventListener("click", toggleMenu);

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

if (year) {
  year.textContent = String(new Date().getFullYear());
}

phoneInput?.addEventListener("input", (event) => {
  event.target.value = formatPhone(event.target.value);
});

form?.querySelectorAll("input, select, textarea").forEach((field) => {
  field.addEventListener("blur", () => validateField(field));
  field.addEventListener("input", () => {
    if (field.classList.contains("is-invalid")) {
      validateField(field);
    }
  });
});

form?.addEventListener("submit", (event) => {
  const fields = Array.from(form.querySelectorAll("input:not([type='hidden']), select, textarea"));
  const isValid = fields.map(validateField).every(Boolean);

  if (!isValid) {
    event.preventDefault();
    if (formStatus) {
      formStatus.textContent = "Revise os campos destacados antes de enviar.";
    }
    fields.find((field) => field.classList.contains("is-invalid"))?.focus();
    return;
  }

  if (formStatus) {
    formStatus.textContent = "Enviando sua solicitação com segurança...";
  }
});

initAccordion();
initReveal();
initCookies();
