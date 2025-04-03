"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui";
import useCachedTheme from "@/hooks/use-cached-theme";
import { useIsMobile } from "@/components/ui";

export default function ModeToggle() {
  const { isDark, mounted, toggleTheme } = useCachedTheme();
  const isMobile = useIsMobile();

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="w-12 h-12 overflow-visible hover:bg-transparent group"
        disabled
      >
        <Sun
          className="h-8 w-8 rotate-0 scale-100 transition-all group-hover:text-primary"
          strokeWidth={1.5}
        />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="w-12 h-12 overflow-visible hover:bg-transparent group"
    >
      {isDark ? (
        <Moon
          className="h-8 w-8 rotate-0 scale-100 transition-all group-hover:text-primary"
          strokeWidth={1.5}
        />
      ) : (
        <Sun
          className="h-8 w-8 rotate-0 scale-100 transition-all group-hover:text-primary"
          strokeWidth={1.5}
        />
      )}
    </Button>
  );
}
