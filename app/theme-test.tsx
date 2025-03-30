"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeTest() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading theme...</div>;
  }

  const toggleTheme = (newTheme: string) => {
    // Set theme via next-themes
    setTheme(newTheme);

    // Direct DOM manipulation for immediate effect
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Also update localStorage manually
    try {
      localStorage.setItem("mark-portfolio-theme", newTheme);
    } catch (e) {
      console.error("Error updating localStorage", e);
    }
  };

  return (
    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
      <div>Current theme: {theme}</div>
      <div>Resolved theme: {resolvedTheme}</div>
      <div className="flex gap-4 mt-2">
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded-md"
          onClick={() => toggleTheme("light")}
        >
          <Sun size={16} className="inline mr-2" />
          Light
        </button>
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded-md"
          onClick={() => toggleTheme("dark")}
        >
          <Moon size={16} className="inline mr-2" />
          Dark
        </button>
      </div>
    </div>
  );
}
