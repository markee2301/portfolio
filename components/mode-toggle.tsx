"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui";

export default function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // Only show UI after mount to avoid hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="flex items-center justify-center"
        aria-label="Toggle theme (loading)"
      >
        <span className="sr-only">Toggle theme</span>
        <Sun
          className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
          strokeWidth={1.5}
        />
      </button>
    );
  }

  return (
    <button
      className="flex items-center justify-center"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      {resolvedTheme === "dark" ? (
        <Sun
          className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
          strokeWidth={1.5}
        />
      ) : (
        <Moon
          className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
          strokeWidth={1.5}
        />
      )}
    </button>
  );
}
