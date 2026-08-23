(function () {
  "use strict";

  const STORAGE_KEY = "python-course-theme";
  const root = document.documentElement;

  function storedTheme() {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      return value === "light" || value === "dark" ? value : null;
    } catch (_error) {
      return null;
    }
  }

  function systemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function setTheme(theme, persist) {
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch (_error) {
        // Temat fungerar fortfarande om lagring är blockerad.
      }
    }
    updateButton(theme);
  }

  function updateButton(theme) {
    const button = document.getElementById("theme-toggle");
    if (!button) return;
    const nextTheme = theme === "dark" ? "ljust" : "mörkt";
    const label = `Byt till ${nextTheme} tema`;
    button.textContent = theme === "dark" ? "☀️" : "🌙";
    button.title = label;
    button.setAttribute("aria-label", label);
    button.setAttribute("aria-pressed", String(theme === "dark"));
  }

  setTheme(storedTheme() || systemTheme(), false);

  document.addEventListener("DOMContentLoaded", function () {
    const host =
      document.querySelector(".navbar") ||
      document.querySelector(".presentation-topbar");
    if (!host || document.getElementById("theme-toggle")) return;

    const button = document.createElement("button");
    button.type = "button";
    button.id = "theme-toggle";
    button.className = "theme-toggle";
    host.appendChild(button);
    updateButton(root.dataset.theme);

    button.addEventListener("click", function () {
      setTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
    });
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (event) {
    if (!storedTheme()) setTheme(event.matches ? "dark" : "light", false);
  });
})();
