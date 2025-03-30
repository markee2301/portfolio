"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function DebugTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme, themes } = useTheme();
  const [htmlClass, setHtmlClass] = useState("");
  const [localStorage, setLocalStorage] = useState("");

  useEffect(() => {
    setMounted(true);

    // Check HTML class
    const htmlElement = document.documentElement;
    setHtmlClass(htmlElement.className);

    // Check localStorage
    try {
      const themeFromStorage = window.localStorage.getItem(
        "mark-portfolio-theme"
      );
      setLocalStorage(themeFromStorage || "not found");
    } catch (error) {
      setLocalStorage("error accessing");
    }

    // Add event listener for class changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setHtmlClass((document.documentElement as HTMLElement).className);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!mounted) return null;

  const forceTheme = (newTheme: string) => {
    // Force the theme directly on HTML element
    const htmlElement = document.documentElement;
    if (newTheme === "dark") {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
    // Also set the theme in next-themes
    setTheme(newTheme);
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg text-sm">
      <h3 className="font-bold mb-2">Theme Debug</h3>
      <div className="space-y-1">
        <div>Theme: {theme || "undefined"}</div>
        <div>Resolved: {resolvedTheme || "undefined"}</div>
        <div>Available themes: {themes.join(", ")}</div>
        <div>HTML class: "{htmlClass}"</div>
        <div>LocalStorage: {localStorage}</div>
      </div>
      <div className="mt-3 space-x-2">
        <button
          onClick={() => forceTheme("light")}
          className="px-2 py-1 bg-yellow-400 text-black rounded"
        >
          Force Light
        </button>
        <button
          onClick={() => forceTheme("dark")}
          className="px-2 py-1 bg-gray-700 text-white rounded"
        >
          Force Dark
        </button>
      </div>
    </div>
  );
}
