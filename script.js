const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.querySelector(".theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');
const root = document.documentElement;

function setTheme(theme) {
  const isLight = theme === "light";
  root.dataset.theme = theme;
  if (themeToggle) {
    themeToggle.setAttribute("aria-label", `Switch to ${isLight ? "dark" : "light"} theme`);
  }
  if (themeColor) {
    themeColor.setAttribute("content", isLight ? "#f5f4ee" : "#101110");
  }
}

const savedTheme = localStorage.getItem("portfolio-theme");
setTheme(savedTheme === "light" ? "light" : "dark");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
  });
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation menu" : "Close navigation menu");
    navLinks.classList.toggle("is-open", !isExpanded);
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      navLinks.classList.remove("is-open");
    }
  });
}

const year = document.querySelector("#year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}
