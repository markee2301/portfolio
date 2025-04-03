"use client";

import { Facebook, Github, Linkedin, Map, Bot, Instagram } from "lucide-react";
import { GlowLink } from "@/components/ui";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <footer className="w-full">
      <div
        className={`max-w-6xl mx-auto border-t ${
          isDark
            ? "bg-black text-white border-gray-800"
            : "bg-white text-black border-gray-200"
        }`}
      >
        <div className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
                Contact
              </h3>
              <p className="mb-2 text-sm sm:text-base">
                hello@markanthonynavarro.dev
              </p>
              <p className="text-sm sm:text-base">Manila City, Philippines</p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
                Links
              </h3>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>
                  <GlowLink
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Home
                  </GlowLink>
                </li>
                <li>
                  <GlowLink
                    href="#tools"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById("tools");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Services
                  </GlowLink>
                </li>
                <li>
                  <GlowLink
                    href="#experience"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById("experience");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Experience
                  </GlowLink>
                </li>
                <li>
                  <GlowLink
                    href="#portfolio"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById("portfolio");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Portfolio
                  </GlowLink>
                </li>
                <li>
                  <GlowLink
                    href="#testimonials"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById("testimonials");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Testimonials
                  </GlowLink>
                </li>
                <li>
                  <GlowLink
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById("about");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    About
                  </GlowLink>
                </li>
                <li>
                  <GlowLink
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById("contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Contact
                  </GlowLink>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
                Resources
              </h3>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>
                  <GlowLink
                    href="/sitemap.xml"
                    target="_blank"
                    className="flex items-center gap-2"
                    onClick={() => {}}
                  >
                    <Map size={18} />
                    <span>Sitemap</span>
                  </GlowLink>
                </li>
              </ul>
            </div>
            <div className="col-span-1 sm:col-span-2 md:col-span-1">
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
                About
              </h3>
              <p
                className={`text-sm sm:text-base ${
                  isDark ? "text-gray-400" : "text-gray-600"
                } mb-4`}
              >
                AI Automation Developer specializing in workflow automation, AI
                agents, and system integration.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/markee2301"
                  target="_blank"
                  className={`${
                    isDark
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-black"
                  } transition-colors`}
                >
                  <Github className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/markee2301"
                  target="_blank"
                  className={`${
                    isDark
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-black"
                  } transition-colors`}
                >
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
                <Link
                  href="https://www.facebook.com/markee2301/"
                  target="_blank"
                  className={`${
                    isDark
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-black"
                  } transition-colors`}
                >
                  <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
                <Link
                  href="https://www.instagram.com/super.markee/"
                  target="_blank"
                  className={`${
                    isDark
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-black"
                  } transition-colors`}
                >
                  <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`mt-8 pt-8 border-t ${
              isDark ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <p
              className={`text-sm text-center ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              © {currentYear} Mark Anthony Navarro. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
