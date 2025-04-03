"use client";

import { useState, useEffect, useCallback } from "react";

interface ScrollPosition {
  x: number;
  y: number;
}

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  });
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );

  const getScrollPosition = useCallback(
    (): ScrollPosition => ({
      x: window.pageXOffset,
      y: window.pageYOffset,
    }),
    []
  );

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let lastKnownScrollPosition = getScrollPosition();
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentPosition = getScrollPosition();
          setScrollPosition(currentPosition);

          // Determine scroll direction
          if (currentPosition.y > lastKnownScrollPosition.y) {
            setScrollDirection("down");
          } else if (currentPosition.y < lastKnownScrollPosition.y) {
            setScrollDirection("up");
          }

          lastKnownScrollPosition = currentPosition;
          ticking = false;
        });

        ticking = true;
      }

      // Update isScrolling state
      setIsScrolling(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 150); // Debounce time
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [getScrollPosition]);

  return {
    scrollPosition,
    isScrolling,
    scrollDirection,
  };
};

export default useScrollPosition;
