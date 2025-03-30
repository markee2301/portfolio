"use client";

import { useState, useEffect, useCallback } from "react";
import ModeToggle from "./mode-toggle";
import { Button } from "@/components/ui";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Facebook,
  Download,
  Calendar,
} from "lucide-react";
import { GlowLink } from "@/components/ui";
import AnimatedName from "./animated-name";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useIsMobile } from "@/components/ui";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Tools", href: "#tools" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("/");

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

    // Get all section elements that have IDs matching our nav items
    const sections = navItems
      .filter((item) => item.href.startsWith("#"))
      .map((item) => {
        const id = item.href.substring(1);
        const element = document.getElementById(id);
        return { id, element, href: item.href };
      })
      .filter((item) => item.element);

    // Sort sections by their position in the document
    // This ensures we check them in order from top to bottom
    sections.sort((a, b) => {
      const rectA = a.element!.getBoundingClientRect();
      const rectB = b.element!.getBoundingClientRect();
      return rectA.top - rectB.top;
    });

    // Find the section that's currently visible in the viewport
    let newActiveSection = "/"; // Default to home if no section is found

    for (const section of sections) {
      if (!section.element) continue;

      const rect = section.element.getBoundingClientRect();

      // Check if the section is in the viewport (with buffer for the header)
      if (rect.top <= 150 && rect.bottom >= 0) {
        newActiveSection = section.href;

        // If we're near the top of the section, definitely use it
        if (rect.top >= -150) {
          break;
        }

        // If we've scrolled significantly into the section, keep it as active
        if (rect.top < -150 && rect.bottom > clientHeight / 2) {
          break;
        }

        // Otherwise, continue checking to see if there's a better match
        // But keep this as our best candidate so far
      }
    }

    // Only update state if it changed (performance optimization)
    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  }, [activeSection]);

  useEffect(() => {
    setMounted(true);

    // Initial check
    if (mounted) {
      handleScroll();
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mounted, handleScroll]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b ${
        isDark
          ? "border-gray-800 bg-black text-white"
          : "border-gray-200 bg-white text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <AnimatedName />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <GlowLink
              key={item.name}
              href={item.href}
              className="text-sm font-medium"
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
          <ModeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 lg:hidden">
          <ModeToggle />
          <button
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center"
          >
            {mobileMenuOpen ? (
              <X
                className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"
                strokeWidth={1.5}
              />
            ) : (
              <Menu
                className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"
                strokeWidth={1.5}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 top-0 z-50 ${
            isDark ? "bg-black" : "bg-white"
          } lg:hidden flex flex-col`}
        >
          <div
            className={`max-w-6xl mx-auto w-full flex justify-between items-center h-16 border-b px-4 sm:px-6 md:px-8 ${
              isDark ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <AnimatedName />
            <button
              aria-label="Close Menu"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center"
            >
              <X
                className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"
                strokeWidth={1.5}
              />
            </button>
          </div>

          <div className="flex flex-col justify-between h-[calc(100vh-4rem)]">
            <div className="flex flex-col items-center justify-center flex-grow">
              <nav className="space-y-4 sm:space-y-5 md:space-y-6 py-6 sm:py-7 md:py-8 text-center">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className={`text-lg sm:text-xl md:text-2xl font-medium block py-1 sm:py-1.5 md:py-2 hover:text-cyan-400 transition-colors ${
                        activeSection === item.href
                          ? "text-cyan-400 font-bold"
                          : ""
                      }`}
                      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                        if (item.href === "/") {
                          e.preventDefault();
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        } else if (item.href.startsWith("#")) {
                          e.preventDefault();
                          const element = document.getElementById(
                            item.href.substring(1)
                          );
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }
                        setMobileMenuOpen(false);
                      }}
                    >
                      {item.name}
                      {activeSection === item.href && (
                        <span className="block mx-auto mt-1 w-10 sm:w-12 h-0.5 bg-cyan-400 rounded-full" />
                      )}
                    </a>
                  </div>
                ))}
              </nav>
            </div>

            <div className="py-6 sm:py-7 md:py-8 flex flex-col items-center px-4 sm:px-6">
              <div className="flex space-x-4 sm:space-x-5 md:space-x-6 mb-5 sm:mb-6">
                <a
                  href="https://github.com/markee2301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400"
                >
                  <Github
                    size={18}
                    className="sm:h-[19px] sm:w-[19px] md:h-5 md:w-5"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/markee2301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400"
                >
                  <Linkedin
                    size={18}
                    className="sm:h-[19px] sm:w-[19px] md:h-5 md:w-5"
                  />
                </a>
                <a
                  href="https://www.facebook.com/markee2301/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400"
                >
                  <Facebook
                    size={18}
                    className="sm:h-[19px] sm:w-[19px] md:h-5 md:w-5"
                  />
                </a>
              </div>

              <div className="flex flex-row gap-2 sm:gap-3">
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="bg-cyan-400 hover:bg-cyan-500 text-black whitespace-nowrap">
                    Hire Me
                  </Button>
                </Link>
                <Link
                  href="https://docs.google.com/document/d/1LTJZiF-yWdTXZjN_I84EL6Ak8Zbr6Q_SeFw5_2lBp8U/edit?usp=sharing"
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    className={`${
                      isDark
                        ? "border-white text-white hover:bg-white/10"
                        : "border-black text-black hover:bg-black/10"
                    } flex items-center gap-1 whitespace-nowrap`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Download size={16} />
                    CV
                  </Button>
                </Link>
                <Link
                  href="https://calendly.com/mark-anthony-b-navarro/30min"
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    className={`${
                      isDark
                        ? "border-white text-white hover:bg-white/10"
                        : "border-black text-black hover:bg-black/10"
                    } flex items-center gap-1 whitespace-nowrap`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Calendar size={16} />
                    Meeting
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
