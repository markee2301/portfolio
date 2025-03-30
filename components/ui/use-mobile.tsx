"use client";

import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined
  );

  React.useEffect(() => {
    // Function to check for mobile viewport
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Register event listener
    window.addEventListener("resize", checkMobile);

    // Set initial value
    checkMobile();

    // Clean up
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}

// Add throttled version to prevent too many re-renders
export function useIsMobileThrottled(delay = 200) {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined
  );
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    // Function to check for mobile viewport with throttling
    const checkMobile = () => {
      if (timeoutRef.current) return;

      timeoutRef.current = setTimeout(() => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        timeoutRef.current = null;
      }, delay);
    };

    // Register event listener
    window.addEventListener("resize", checkMobile);

    // Set initial value immediately without throttling
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    // Clean up
    return () => {
      window.removeEventListener("resize", checkMobile);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [delay]);

  return isMobile;
}
