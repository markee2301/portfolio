"use client";

import {
  Zap,
  Workflow,
  Cpu,
  Mic,
  Bot,
  Database,
  Globe,
  Code,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const techCategories = [
  {
    name: "Automation",
    tools: [
      { name: "Zapier", icon: <Zap className="h-5 w-5" /> },
      { name: "Make.com", icon: <Workflow className="h-5 w-5" /> },
      { name: "n8n", icon: <Workflow className="h-5 w-5" /> },
      { name: "Power Automate", icon: <Workflow className="h-5 w-5" /> },
    ],
  },
  {
    name: "AI Voice Agents",
    tools: [
      { name: "VAPI", icon: <Mic className="h-5 w-5" /> },
      { name: "Retell AI", icon: <Mic className="h-5 w-5" /> },
      { name: "Voiceflow", icon: <Bot className="h-5 w-5" /> },
      { name: "OpenAI", icon: <Cpu className="h-5 w-5" /> },
    ],
  },
  {
    name: "CRM & Databases",
    tools: [
      { name: "GoHighLevel", icon: <Database className="h-5 w-5" /> },
      { name: "Airtable", icon: <Database className="h-5 w-5" /> },
      { name: "SQL", icon: <Database className="h-5 w-5" /> },
      { name: "HubSpot", icon: <Database className="h-5 w-5" /> },
    ],
  },
  {
    name: "Web Development",
    tools: [
      { name: "WordPress", icon: <Globe className="h-5 w-5" /> },
      { name: "Elementor", icon: <Code className="h-5 w-5" /> },
      { name: "JavaScript", icon: <Code className="h-5 w-5" /> },
      { name: "HTML/CSS", icon: <Code className="h-5 w-5" /> },
    ],
  },
];

export default function TechStack() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {techCategories.map((category, index) => (
        <div
          key={index}
          className={`${
            isDark ? "bg-gray-800" : "bg-white shadow-md"
          } rounded-xl overflow-hidden`}
        >
          <div
            className={`p-4 sm:p-5 ${isDark ? "bg-gray-700" : "bg-gray-200"}`}
          >
            <h3 className="text-base sm:text-lg md:text-xl font-bold">
              {category.name}
            </h3>
          </div>
          <div className="p-4 sm:p-6 grid grid-cols-2 gap-3 sm:gap-4">
            {category.tools.map((tool, idx) => (
              <div
                key={idx}
                className={`${
                  isDark
                    ? "bg-gray-900 hover:bg-gray-700"
                    : "bg-gray-100 hover:bg-gray-200"
                } p-3 sm:p-4 rounded-lg flex items-center justify-center gap-2 sm:gap-3 h-14 sm:h-16 transition-colors`}
              >
                <span className="text-cyan-400">{tool.icon}</span>
                <span className="text-xs sm:text-sm md:text-base">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
