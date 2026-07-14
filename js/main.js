const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const year = document.querySelector("[data-year]");
const cookieBanner = document.querySelector("[data-cookie-banner]");
const cookieAccept = document.querySelector("[data-cookie-accept]");

const closeMenu = (restoreFocus = false) => {
  if (!menuToggle || !nav) return;
  const wasOpen = nav.classList.contains("is-open");
  menuToggle.classList.remove("is-open");
  nav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  if (restoreFocus && wasOpen) menuToggle.focus();
};

const toggleMenu = () => {
  if (!menuToggle || !nav) return;
  const isOpen = menuToggle.classList.toggle("is-open");
  nav.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  if (isOpen) nav.querySelector("a")?.focus();
};

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
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

  const updateCookieOffset = () => {
    const spacing = 18;
    document.documentElement.style.setProperty(
      "--cookie-banner-offset",
      `${cookieBanner.offsetHeight + spacing}px`
    );
  };

  if (localStorage.getItem("leliaCookiesAccepted") !== "true") {
    cookieBanner.classList.add("is-visible");
    document.body.classList.add("cookies-visible");
    updateCookieOffset();
  }

  window.addEventListener("resize", updateCookieOffset, { passive: true });

  if ("ResizeObserver" in window) {
    const cookieObserver = new ResizeObserver(updateCookieOffset);
    cookieObserver.observe(cookieBanner);
  }

  cookieAccept.addEventListener("click", () => {
    localStorage.setItem("leliaCookiesAccepted", "true");
    cookieBanner.classList.remove("is-visible");
    document.body.classList.remove("cookies-visible");
    document.documentElement.style.removeProperty("--cookie-banner-offset");
  });
};

menuToggle?.addEventListener("click", toggleMenu);

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => closeMenu());
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu(true);
  }
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

if (year) {
  year.textContent = String(new Date().getFullYear());
}

initAccordion();
initReveal();
initCookies();
