"use client";

import { Facebook, Github, Linkedin, Map, Bot } from "lucide-react";
import { GlowLink } from "@/components/ui";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <footer
      className={`border-t ${
        isDark
          ? "border-gray-800 bg-black text-white"
          : "border-gray-200 bg-white text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto py-6 sm:py-7 md:py-8 lg:py-12 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8">
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
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById("services");
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
                  href="#tools"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById("tools");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Tools
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
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
              Socials
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li>
                <GlowLink
                  href="https://github.com/markee2301"
                  target="_blank"
                  className="flex items-center gap-2"
                  onClick={() => {}}
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </GlowLink>
              </li>
              <li>
                <GlowLink
                  href="https://www.linkedin.com/in/markee2301"
                  target="_blank"
                  className="flex items-center gap-2"
                  onClick={() => {}}
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </GlowLink>
              </li>
              <li>
                <GlowLink
                  href="https://www.facebook.com/markee2301/"
                  target="_blank"
                  className="flex items-center gap-2"
                  onClick={() => {}}
                >
                  <Facebook size={18} />
                  <span>Facebook</span>
                </GlowLink>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`mt-6 sm:mt-7 md:mt-8 pt-6 sm:pt-7 md:pt-8 border-t ${
            isDark ? "border-gray-800" : "border-gray-200"
          } text-center text-sm sm:text-base`}
        >
          <p>© {currentYear} Mark Anthony Navarro | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
