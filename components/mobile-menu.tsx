"use client";

import {
  Menu,
  X,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Download,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import AnimatedText from "./animated-text";

interface NavItem {
  readonly name: string;
  readonly href: string;
}

interface MobileMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  activeSection: string;
  navItems: readonly NavItem[];
}

export default function MobileMenu({
  mobileMenuOpen,
  setMobileMenuOpen,
  activeSection,
  navItems,
}: MobileMenuProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  if (!mobileMenuOpen) return null;

  return (
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
        <AnimatedText
          text="MARK ANTHONY NAVARRO"
          isLink={true}
          href="/"
          fontSize="text-xl"
        />
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
                    activeSection === item.href ? "text-cyan-400 font-bold" : ""
                  }`}
                  onClick={(e) => {
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
          <div className="flex space-x-4 sm:space-x-5 md:space-x-6 mb-8">
            <a
              href="https://github.com/markee2301"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <Github
                size={24}
                className="sm:h-[26px] sm:w-[26px] md:h-7 md:w-7"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/markee2301"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <Linkedin
                size={24}
                className="sm:h-[26px] sm:w-[26px] md:h-7 md:w-7"
              />
            </a>
            <a
              href="https://www.facebook.com/markee2301/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <Facebook
                size={24}
                className="sm:h-[26px] sm:w-[26px] md:h-7 md:w-7"
              />
            </a>
            <a
              href="https://www.instagram.com/super.markee/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <Instagram
                size={24}
                className="sm:h-[26px] sm:w-[26px] md:h-7 md:w-7"
              />
            </a>
          </div>
          <div className="flex flex-col gap-4 w-full max-w-[400px] mx-auto">
            <button
              onClick={() => {
                window.Calendly?.initPopupWidget({
                  url: "https://calendly.com/mark-anthony-b-navarro/30min",
                });
                setMobileMenuOpen(false);
                return false;
              }}
              className={`w-full ${
                isDark
                  ? "bg-cyan-500 hover:bg-cyan-600 text-white"
                  : "bg-cyan-500 hover:bg-cyan-600 text-white"
              } flex items-center font-medium px-4 py-3 text-base rounded-md justify-center space-x-2`}
            >
              <Calendar size={18} className="shrink-0" />
              <span>Book a Meeting</span>
            </button>
            <a
              href="https://docs.google.com/document/d/1LTJZiF-yWdTXZjN_I84EL6Ak8Zbr6Q_SeFw5_2lBp8U/edit?usp=sharing"
              target="_blank"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full ${
                isDark
                  ? "bg-transparent border-white hover:bg-white/10 text-white"
                  : "bg-transparent border-gray-800 hover:bg-black/5 text-black"
              } flex items-center font-medium px-4 py-3 border text-base rounded-md justify-center space-x-2`}
            >
              <Download size={18} className="shrink-0" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
