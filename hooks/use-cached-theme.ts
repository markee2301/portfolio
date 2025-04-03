"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface UseCachedThemeResult {
  isDark: boolean;
  mounted: boolean;
  toggleTheme: () => void;
}

const THEME_CACHE_KEY = "theme-preference";

const useCachedTheme = (): UseCachedThemeResult => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load cached theme preference
    const cachedTheme = localStorage.getItem(THEME_CACHE_KEY);
    if (cachedTheme) {
      setTheme(cachedTheme);
    }
    setMounted(true);
  }, [setTheme]);

  useEffect(() => {
    // Cache theme preference whenever it changes
    if (mounted && resolvedTheme) {
      localStorage.setItem(THEME_CACHE_KEY, resolvedTheme);
    }
  }, [mounted, resolvedTheme]);

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem(THEME_CACHE_KEY, newTheme);
  };

  return {
    isDark: mounted && resolvedTheme === "dark",
    mounted,
    toggleTheme,
  };
};

export default useCachedTheme;
