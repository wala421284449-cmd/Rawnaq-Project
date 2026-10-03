document.addEventListener("DOMContentLoaded", function () {
  // 1. منطق الوضع الليلي والنهاري (Theme Toggle)
  const themeToggle = document.getElementById("themeToggle");
  const htmlRoot = document.getElementById("htmlRoot");

  if (themeToggle && htmlRoot) {
    themeToggle.addEventListener("click", () => {
      if (htmlRoot.getAttribute("data-theme") === "dark") {
        htmlRoot.removeAttribute("data-theme");
        themeToggle.textContent = "🌙";
      } else {
        htmlRoot.setAttribute("data-theme", "dark");
        themeToggle.textContent = "☀️";
      }
    });
  }

  // 2. منطق تبديل اللغة (Language Switcher EN/AR)
  const langToggle = document.getElementById("langToggle");
  if (langToggle && htmlRoot) {
    langToggle.addEventListener("click", () => {
      if (langToggle.textContent === "En") {
        langToggle.textContent = "عربي";
        htmlRoot.setAttribute("dir", "ltr");
        htmlRoot.setAttribute("lang", "en");
      } else {
        langToggle.textContent = "En";
        htmlRoot.setAttribute("dir", "rtl");
        htmlRoot.setAttribute("lang", "ar");
      }
    });
  }
});
