"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Download, Calendar } from "lucide-react";
import Link from "next/link";
import ExperienceCards from "@/components/experience-cards";
import ServicesGrid from "@/components/services-grid";
import PortfolioSection from "@/components/portfolio-section";
import AboutSection from "@/components/about-section";
import ContactCTA from "@/components/contact-cta";
import { useTheme } from "next-themes";
import Script from "next/script";
import ToolsCarousel from "@/components/tools-carousel";
import TestimonialsSection from "@/components/testimonials-section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpwork } from "@fortawesome/free-brands-svg-icons";
import AnimatedText from "@/components/animated-text";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mark Anthony Navarro",
    url: "https://markanthonynavarro.dev",
    image: "https://markanthonynavarro.dev/images/profile.png",
    sameAs: [
      "https://github.com/markee2301",
      "https://www.linkedin.com/in/markee2301",
      "https://www.facebook.com/markee2301/",
    ],
    jobTitle: "AI Automation Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    description:
      "Freelance AI Automation Developer specializing in workflow automation, AI agents, and system integration.",
  };

  return (
    <>
      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      {/* Calendly Widget */}
      <Script id="calendly-css" strategy="afterInteractive">
        {`
          var link = document.createElement('link');
          link.href = 'https://assets.calendly.com/assets/external/widget.css';
          link.rel = 'stylesheet';
          document.head.appendChild(link);
        `}
      </Script>
      <Script
        id="calendly-js"
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section
          className="w-full"
          aria-label="Introduction"
          itemScope
          itemType="http://schema.org/Person"
        >
          <div
            className={`flex flex-col lg:flex-row items-center justify-between py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto ${
              isDark ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <div className="flex-1 space-y-3 sm:space-y-4 max-w-full lg:max-w-[60%] w-full">
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-cyan-400"></div>
                <p className="text-base" itemProp="jobTitle">
                  AI Automation Developer
                </p>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                Hello, I'm{" "}
                <span className="text-cyan-400" itemProp="name">
                  Mark Anthony
                  <br />
                  Navarro
                </span>
              </h1>
              <p
                className="text-lg leading-relaxed text-justify"
                itemProp="description"
              >
                I help businesses transform their operations through{" "}
                <span className="text-cyan-400 font-semibold">
                  AI Automation
                </span>{" "}
                and{" "}
                <span className="text-cyan-400 font-semibold">
                  Low-code Development
                </span>
                , significantly reducing manual effort by 60-80%. By combining
                traditional programming with cutting-edge AI technology, I
                create solutions that automate repetitive tasks and streamline
                workflows to help companies save thousands of work hours while
                increasing accuracy and productivity, enabling them to focus on
                growth rather than routine operations.
              </p>
              <div className="flex flex-row gap-2 pt-4 pb-2 pr-1">
                <button
                  onClick={() => {
                    // @ts-ignore - Calendly is loaded from the external script
                    window.Calendly &&
                      window.Calendly.initPopupWidget({
                        url: "https://calendly.com/mark-anthony-b-navarro/30min",
                      });
                    return false;
                  }}
                  className="bg-cyan-400 hover:bg-cyan-500 text-black flex items-center gap-1 whitespace-nowrap font-bold px-3 py-2 border-2 border-cyan-400 text-sm sm:text-base rounded-md w-1/2 sm:w-auto justify-center"
                >
                  <Calendar
                    size={18}
                    strokeWidth={2.5}
                    className="flex-shrink-0"
                  />
                  <span className="font-bold">Book a Meeting</span>
                </button>
                <a
                  href="https://docs.google.com/document/d/1LTJZiF-yWdTXZjN_I84EL6Ak8Zbr6Q_SeFw5_2lBp8U/edit?usp=sharing"
                  target="_blank"
                  rel="noopener"
                  className={`${
                    isDark
                      ? "bg-white border-2 border-white text-black hover:bg-white/90"
                      : "bg-white border-2 border-black text-black hover:bg-white/90"
                  } flex items-center gap-1 whitespace-nowrap font-bold px-3 py-2 text-sm sm:text-base rounded-md w-1/2 sm:w-auto justify-center`}
                >
                  <Download
                    size={18}
                    strokeWidth={2.5}
                    className="flex-shrink-0"
                  />
                  <span className="font-bold">Download CV</span>
                </a>
              </div>
            </div>
            <div className="relative w-[70%] sm:w-[60%] lg:w-[40%] aspect-square rounded-full overflow-hidden border-4 border-cyan-400 max-w-[250px] mx-auto lg:mx-0 lg:ml-auto">
              <Image
                src="/images/profile.png"
                alt="Mark Anthony Navarro - AI Automation Developer"
                fill
                priority
                sizes="(max-width: 640px) 70vw, (max-width: 768px) 60vw, 40vw"
                className="object-cover"
                itemProp="image"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full" aria-label="Experience Statistics">
          <div
            className={`py-8 sm:py-9 md:py-10 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto ${
              isDark ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              <div
                className={`border ${
                  isDark ? "border-gray-700" : "border-gray-300"
                } rounded-lg p-3 sm:p-4 lg:p-6 text-center`}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-400">
                  3+
                </h3>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                  Years of Experience
                </p>
              </div>
              <div
                className={`border ${
                  isDark ? "border-gray-700" : "border-gray-300"
                } rounded-lg p-3 sm:p-4 lg:p-6 text-center`}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-400">
                  50+
                </h3>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                  Completed Projects
                </p>
              </div>
              <div
                className={`border ${
                  isDark ? "border-gray-700" : "border-gray-300"
                } rounded-lg p-3 sm:p-4 lg:p-6 text-center sm:col-span-2 md:col-span-1`}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-400">
                  20+
                </h3>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                  Satisfied Clients
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tools and Services Section */}
        <section className="w-full" id="tools" aria-label="Services">
          <div
            className={`py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto ${
              isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
            }`}
          >
            {/* Tools Carousel */}
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-3">
              Tools I Frequently Use
            </h2>
            <p
              className={`text-sm sm:text-base text-center ${
                isDark ? "text-gray-300" : "text-gray-700"
              } mb-4 max-w-3xl mx-auto`}
            >
              Technologies and platforms I work with regularly
            </p>
            <ToolsCarousel />

            <div className="mt-12 mb-4">
              <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-3">
                My Services
              </h2>
              <p
                className={`text-sm sm:text-base text-center ${
                  isDark ? "text-gray-300" : "text-gray-700"
                } mb-8 max-w-3xl mx-auto`}
              >
                I provide specialized services focused on automation, AI
                development, and system integration to help businesses optimize
                their operations and enhance customer experiences.
              </p>
            </div>

            {/* Services Grid */}
            <ServicesGrid />
          </div>
        </section>

        {/* Experience Highlights Section */}
        <section
          className="w-full"
          id="experience"
          aria-label="Experience Highlights"
        >
          <div
            className={`py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto ${
              isDark ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-3">
              Experience Highlights
            </h2>
            <p
              className={`text-sm sm:text-base text-center ${
                isDark ? "text-gray-300" : "text-gray-700"
              } mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto`}
            >
              I've worked with innovative companies to build intelligent
              automation solutions and AI systems that drive business growth.
            </p>
            <ExperienceCards />
          </div>
        </section>

        {/* Portfolio Section */}
        <section
          className="w-full"
          id="portfolio"
          aria-label="Portfolio"
          itemScope
          itemType="http://schema.org/CollectionPage"
        >
          <div
            className={`py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto ${
              isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
            }`}
          >
            <h2
              className="text-2xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-3"
              itemProp="name"
            >
              Portfolio
            </h2>
            <p
              className={`text-sm sm:text-base text-center ${
                isDark ? "text-gray-300" : "text-gray-700"
              } mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto`}
              itemProp="description"
            >
              Explore my projects and case studies showcasing automation
              solutions, AI agents, and web development work.
            </p>
            <PortfolioSection />
          </div>
        </section>

        <TestimonialsSection />

        <AboutSection />

        {/* Contact Section */}
        <section
          className="w-full"
          id="contact"
          aria-label="Contact Information"
          itemScope
          itemType="http://schema.org/ContactPage"
        >
          <div
            className={`py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto ${
              isDark ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-3">
              Get in Touch
            </h2>
            <p
              className={`text-sm sm:text-base text-center ${
                isDark ? "text-gray-300" : "text-gray-700"
              } mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto`}
            >
              I'm always open to discussing new projects, opportunities or
              partnerships.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              <div className="space-y-6 sm:space-y-7 md:space-y-8">
                <div
                  className="flex items-start gap-3 md:gap-4"
                  itemScope
                  itemType="http://schema.org/Person"
                >
                  <div className="bg-cyan-400 rounded-full p-2 md:p-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-black md:w-5 md:h-5"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:hello@markanthonynavarro.dev"
                      className={
                        isDark
                          ? "text-gray-300 hover:text-cyan-400"
                          : "text-gray-700 hover:text-cyan-600"
                      }
                      itemProp="email"
                    >
                      hello@markanthonynavarro.dev
                    </a>
                  </div>
                </div>

                <div
                  className="flex items-start gap-3 md:gap-4"
                  itemScope
                  itemType="http://schema.org/PostalAddress"
                >
                  <div className="bg-cyan-400 rounded-full p-2 md:p-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-black md:w-5 md:h-5"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
                      Location
                    </h3>
                    <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                      <span itemProp="addressLocality">Manila</span>,{" "}
                      <span itemProp="addressRegion">Metro Manila</span>,{" "}
                      <span itemProp="postalCode">1003</span>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                    Connect With Me
                  </h3>
                  <div className="flex gap-3 md:gap-4">
                    <Link
                      href="https://github.com/markee2301"
                      target="_blank"
                      rel="noopener"
                      aria-label="GitHub Profile"
                      className={`${
                        isDark
                          ? "bg-gray-800 hover:bg-gray-700"
                          : "bg-gray-200 hover:bg-gray-300"
                      } p-2 md:p-3 rounded-lg transition-colors`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="md:w-5 md:h-5"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/markee2301"
                      target="_blank"
                      rel="noopener"
                      aria-label="LinkedIn Profile"
                      className={`${
                        isDark
                          ? "bg-gray-800 hover:bg-gray-700"
                          : "bg-gray-200 hover:bg-gray-300"
                      } p-2 md:p-3 rounded-lg transition-colors`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="md:w-5 md:h-5"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </Link>
                    <Link
                      href="https://www.facebook.com/markee2301/"
                      target="_blank"
                      rel="noopener"
                      aria-label="Facebook Profile"
                      className={`${
                        isDark
                          ? "bg-gray-800 hover:bg-gray-700"
                          : "bg-gray-200 hover:bg-gray-300"
                      } p-2 md:p-3 rounded-lg transition-colors`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="md:w-5 md:h-5"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </Link>
                    <Link
                      href="https://www.instagram.com/super.markee/"
                      target="_blank"
                      rel="noopener"
                      aria-label="Instagram Profile"
                      className={`${
                        isDark
                          ? "bg-gray-800 hover:bg-gray-700"
                          : "bg-gray-200 hover:bg-gray-300"
                      } p-2 md:p-3 rounded-lg transition-colors`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="md:w-5 md:h-5"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div>
                  <AnimatedText
                    text="Hire Me"
                    className="mb-3 md:mb-4"
                    fontSize="text-lg md:text-xl"
                  />
                  <div className="flex flex-row flex-wrap gap-3 md:gap-4">
                    <Link
                      href="https://www.virtualstaff.ph/jobseeker/674d17617519440053e898dd/automation-expert-zapier-ma"
                      target="_blank"
                      rel="noopener"
                      className="bg-cyan-400 hover:bg-cyan-500 text-black px-4 md:px-5 py-2 md:py-3 rounded-lg transition-colors flex items-center gap-2 text-sm md:text-base font-bold"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="md:w-[18px] md:h-[18px]"
                      >
                        <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                        <path d="m21 3-9 9" />
                        <path d="M15 3h6v6" />
                      </svg>
                      Virtual Staff
                    </Link>
                    <Link
                      href="https://www.onlinejobs.ph/jobseekers/info/3221526"
                      target="_blank"
                      rel="noopener"
                      className="bg-cyan-400 hover:bg-cyan-500 text-black px-4 md:px-5 py-2 md:py-3 rounded-lg transition-colors flex items-center gap-2 text-sm md:text-base font-bold"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="md:w-[18px] md:h-[18px]"
                      >
                        <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                        <path d="m21 3-9 9" />
                        <path d="M15 3h6v6" />
                      </svg>
                      Onlinejobs.ph
                    </Link>
                    <Link
                      href="https://www.upwork.com/freelancers/~014ae84c2a9f94c2a0"
                      target="_blank"
                      rel="noopener"
                      className="bg-cyan-400 hover:bg-cyan-500 text-black px-4 md:px-5 py-2 md:py-3 rounded-lg transition-colors flex items-center gap-2 text-sm md:text-base font-bold"
                    >
                      <FontAwesomeIcon
                        icon={faUpwork}
                        className="w-5 h-5 md:w-6 md:h-6"
                      />
                      Upwork
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <ContactCTA />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
