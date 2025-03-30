"use client";

import { Bot, Workflow, Code, Database, Cpu, Layout } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import React from "react";

const services = [
  {
    icon: <Bot className="h-8 w-8" />,
    title: "AI Agent Development",
    description:
      "Build custom AI voice and chat agents that automate customer interactions and provide 24/7 support.",
  },
  {
    icon: <Workflow className="h-8 w-8" />,
    title: "Automation Solutions",
    description:
      "Create complex automation workflows that connect apps, reduce manual tasks, and optimize business processes.",
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "API Integration",
    description:
      "Connect different software platforms together through API integrations for seamless data flow across systems.",
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "CRM Management",
    description:
      "Set up and automate CRM systems to improve lead tracking, customer engagement, and sales processes.",
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "Custom AI Solutions",
    description:
      "Develop tailored AI solutions that address specific business challenges and create competitive advantages.",
  },
  {
    icon: <Layout className="h-8 w-8" />,
    title: "Landing Page Development",
    description:
      "Create stunning, conversion-focused landing pages using WordPress/Elementor or custom coding with JavaScript, HTML, and CSS.",
  },
];

export default function ServicesGrid() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <div
          key={index}
          className={`${
            isDark
              ? "bg-gray-800 hover:bg-gray-700 border-gray-700"
              : "bg-white hover:bg-gray-100 border-gray-200 shadow-md"
          } rounded-lg p-6 transition-colors border hover:border-cyan-400`}
        >
          <div
            className={`${
              isDark ? "bg-black/50" : "bg-gray-100"
            } rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-4 text-cyan-400`}
          >
            {React.cloneElement(service.icon, {
              className: "h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8",
            })}
          </div>
          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">
            {service.title}
          </h3>
          <p
            className={`text-sm sm:text-base ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
}
