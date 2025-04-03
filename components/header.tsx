"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import ModeToggle from "./mode-toggle";
import { Menu } from "lucide-react";
import { GlowLink } from "@/components/ui";
import AnimatedText from "./animated-text";
import { useTheme } from "next-themes";
import { useIsMobile } from "@/components/ui";
import MobileMenu from "./mobile-menu";

interface NavItem {
  readonly name: string;
  readonly href: string;
}

export const navItems: readonly NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#tools" },
  { name: "Experience", href: "#experience" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
] as const;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("/");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Memoize sections to prevent unnecessary recalculations
  const sections = useMemo(
    () =>
      navItems
        .filter((item) => item.href.startsWith("#"))
        .map((item) => ({
          id: item.href.substring(1),
          href: item.href,
        })),
    []
  );

  // Create the scroll handler with useCallback to optimize performance
  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollPosition = scrollTop + clientHeight;
    const scrolledToBottom = Math.abs(scrollHeight - scrollPosition) < 100;

    // Check if we're near the bottom of the page (for Contact section)
    if (scrolledToBottom) {
      if (activeSection !== "#contact") {
        setActiveSection("#contact");
      }
      return;
    }

    // Check if we're at the very top of the page for Home section
    if (scrollTop < 100) {
      if (activeSection !== "/") {
        setActiveSection("/");
      }
      return;
    }

    // Find the section that's currently visible in the viewport
    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (!element) continue;

      const rect = element.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        if (activeSection !== section.href) {
          setActiveSection(section.href);
        }
        break;
      }
    }
  }, [activeSection, sections]);

  useEffect(() => {
    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [handleScroll]);

  const isDark = mounted && resolvedTheme === "dark";

  // Memoize the desktop navigation to prevent unnecessary re-renders
  const desktopNavigation = useMemo(
    () => (
      <nav className="hidden lg:flex items-center gap-4">
        <div className="flex items-center gap-4">
          {navItems.map((item) => (
            <GlowLink
              key={item.name}
              href={item.href}
              className="text-sm font-medium whitespace-nowrap"
              isActive={activeSection === item.href}
              onClick={
                item.href === "/"
                  ? (e) => {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  : (e) => {
                      if (item.href.startsWith("#")) {
                        e.preventDefault();
                        const element = document.getElementById(
                          item.href.substring(1)
                        );
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }
              }
            >
              {item.name}
            </GlowLink>
          ))}
        </div>
        <ModeToggle />
      </nav>
    ),
    [activeSection]
  );

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className={`max-w-6xl mx-auto border-b ${
          isDark
            ? "border-gray-800 bg-black text-white"
            : "border-gray-200 bg-white text-gray-800"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 md:px-8">
          <div className="flex items-center">
            <AnimatedText
              text="MARK ANTHONY NAVARRO"
              isLink={true}
              href="/"
              fontSize="text-xl"
            />
          </div>

          {/* Desktop Navigation */}
          {desktopNavigation}

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <ModeToggle />
            <button
              aria-label="Toggle Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center"
            >
              <Menu
                className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"
                strokeWidth={1.5}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activeSection={activeSection}
        navItems={navItems}
      />
    </header>
  );
}
