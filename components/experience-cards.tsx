"use client";

import React from "react";
import { Badge } from "@/components/ui";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Simpliscale.io",
    location: "USA",
    period: "2025 - Present",
    title: "Senior Automation Developer",
    description:
      "Led the development of complex automation workflows using Zapier, n8n, and Make.com to streamline business operations and enhance productivity for enterprise clients.",
    color: "border-cyan-400",
    bgColor: "bg-cyan-400",
  },
  {
    company: "InnovareAI",
    location: "San Francisco, USA",
    period: "2025",
    title: "AI Agent Developer",
    description:
      "Developed custom AI voice and chat agents using OpenAI, Retell AI, and Relevance.ai for creating autonomous systems capable of mimicking human interactions and business processes.",
    color: "border-purple-500",
    bgColor: "bg-purple-500",
  },
  {
    company: "Simpliscale.io",
    location: "USA",
    period: "2025",
    title: "Automation and AI Voice Agent Developer",
    description:
      "Developed AI voice agents for customer service automation and created automated business processes using multiple integration platforms.",
    color: "border-teal-500",
    bgColor: "bg-teal-500",
  },
  {
    company: "Silverline Solar",
    location: "California, USA",
    period: "2024-2025",
    title: "Automation Developer",
    description:
      "Implemented CRM automation and lead management processes that increased conversion rates and improved customer follow-up efficiency.",
    color: "border-blue-500",
    bgColor: "bg-blue-500",
  },
  {
    company: "JRR Marketing PTE LTD",
    location: "Singapore",
    period: "2024",
    title: "AI Specialist",
    description:
      "Leveraged AI technologies to develop innovative marketing solutions and automate customer engagement processes.",
    color: "border-teal-500",
    bgColor: "bg-teal-500",
  },
  {
    company: "UiSiY",
    location: "USA",
    period: "2024",
    title: "Python Developer",
    description:
      "Developed Python applications and scripts to automate business processes and improve operational efficiency.",
    color: "border-purple-500",
    bgColor: "bg-purple-500",
  },
  {
    company: "PGX Group Inc.",
    location: "San Juan City, Metro Manila, Philippines",
    period: "2024",
    title: "Software Quality Assurance Analyst (QA) Intern",
    description:
      "Conducted thorough testing of software applications to ensure quality and reliability of products before deployment.",
    color: "border-blue-500",
    bgColor: "bg-blue-500",
  },
];

export default function ExperienceCards() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div className="relative max-w-3xl mx-auto">
      {experiences.map((exp, index) => (
        <div key={index} className="relative mb-12 ml-6 md:ml-8">
          {/* Timeline line */}
          {index < experiences.length - 1 && (
            <div className="absolute left-[-24px] md:left-[-32px] top-6 bottom-[-48px] w-0.5 bg-gray-700"></div>
          )}

          {/* Timeline dot */}
          <div
            className={`absolute left-[-28px] md:left-[-36px] top-6 h-8 w-8 rounded-full ${exp.bgColor} flex items-center justify-center`}
          >
            <div className="h-3 w-3 rounded-full bg-gray-900"></div>
          </div>

          {/* Content card */}
          <div
            className={`${
              isDark ? "bg-gray-800" : "bg-white shadow-md"
            } rounded-lg p-5 sm:p-6 border-l-4 ${exp.color} hover:${
              isDark ? "bg-gray-700" : "bg-gray-50"
            } transition-colors`}
          >
            <div className="mb-3 sm:mb-4">
              <h3 className="text-base sm:text-lg md:text-xl font-bold">
                {exp.company}
              </h3>
              <p
                className={`text-xs sm:text-sm ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {exp.location} | {exp.period}
              </p>
            </div>
            <Badge className="bg-cyan-400 text-black hover:bg-cyan-500 mb-3 sm:mb-4 text-xs sm:text-sm">
              {exp.title}
            </Badge>
            <p
              className={`text-sm sm:text-base ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {exp.description}
            </p>
          </div>

          {/* Current position indicator */}
          {index === 0 && (
            <div className="absolute left-[-120px] top-4 hidden md:block">
              <span className="bg-cyan-400 text-black text-xs font-bold px-2 py-1 rounded">
                CURRENT
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
