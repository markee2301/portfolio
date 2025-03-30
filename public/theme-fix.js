// This script ensures the theme is applied immediately
(function () {
  try {
    const theme = localStorage.getItem("mark-portfolio-theme") || "dark";

    // Apply the theme class immediately
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Set a data attribute for debugging
    document.documentElement.setAttribute("data-theme-set-by", "theme-fix.js");

    console.log("Theme fix applied:", theme);
  } catch (e) {
    console.error("Error applying theme fix:", e);
    // Default to dark theme if there's an error
    document.documentElement.classList.add("dark");
  }
})();
