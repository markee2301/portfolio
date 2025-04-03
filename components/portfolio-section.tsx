"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const portfolioItems = [
  {
    title: "Make.com Automation Projects",
    description:
      "Engineered and implemented complex automation workflows utilizing Make.com's powerful integration capabilities to streamline business processes, connect multiple APIs, and establish efficient data flow architectures across various platforms.",
    technologies: [
      "System Integration",
      "API Integration",
      "Workflow",
      "Business Process Automation",
      "Make.com",
      "Webhooks",
    ],
    link: "https://docs.google.com/presentation/d/1-jpW8dv84fuBKxQxUKR8d73_1RhMEcenuUA_Dp8EZf8/edit?usp=sharing",
    category: "Automation",
  },
  {
    title: "Zapier Automation Solutions",
    description:
      "Developed sophisticated automated workflows through Zapier's platform to seamlessly connect multiple applications, implement custom integrations, and create efficient trigger-action relationships for optimized business operations.",
    technologies: [
      "Zapier",
      "System Integration",
      "Workflow",
      "Business Process Automation",
      "Webhooks",
      "API Integration",
    ],
    link: "https://docs.google.com/presentation/d/1yNjasVyMnC6WyOLij1GfGTOiD9T4KrCnmr4oALXESqU/edit?usp=sharing",
    category: "Automation",
  },
  {
    title: "VAPI Voice Agents",
    description:
      "Created an advanced AI communication system using VAPI that integrates GPT-4 for intelligent conversations, Eleven Labs for voice synthesis, and Make.com for webhooks, enabling both inbound and outbound communication capabilities.",
    technologies: [
      "AI Agent",
      "VAPI",
      "GPT4",
      "ElevenLabs",
      "VoiceAI",
      "System Integration",
      "API Integration",
    ],
    link: "https://docs.google.com/presentation/d/1Fd9TgNqNO-vtLqYnC1ZzY1VpNHq1fprIzXtHaEI6CNA/edit?usp=sharing",
    category: "AI Agents",
  },
  {
    title: "Voiceflow Chatbot Development",
    description:
      "Engineered sophisticated chatbot solutions using Voiceflow's platform, incorporating custom API integrations, advanced conversation flows, and third-party services to create interactive and intelligent user experiences.",
    technologies: [
      "AI Chatbot",
      "Voiceflow",
      "Conversational AI",
      "API Integration",
      "System Integration",
      "JavaScript",
    ],
    link: "https://docs.google.com/presentation/d/1taLWHZtjdo1CWxOX4V-1Vt41Ry0nxjhQxecDZNwvaGQ/edit?usp=sharing",
    category: "AI Agents",
  },
  {
    title: "Relevance.ai Autonomous Agent",
    description:
      "Built autonomous AI agents using Relevance.ai's framework to create sophisticated systems capable of mimicking human actions, decision-making processes, and complex interaction patterns.",
    technologies: [
      "AI Agent",
      "Automated Agents",
      "Relevance.ai",
      "GPT4",
      "Automation",
      "Web Scraping",
    ],
    link: "https://docs.google.com/presentation/d/1GS4DKjEE92SSI9I5lKwbPrW6QaexsS8LOt3-sNEmwso/edit?usp=sharing",
    category: "AI Agents",
  },
  {
    title: "Elementor Portfolio Build",
    description:
      "Designed and developed a comprehensive portfolio website using Elementor, implementing responsive design principles, modern visual aesthetics, and optimized user experience features.",
    technologies: [
      "Web Design",
      "Elementor",
      "Portfolio",
      "UI/UX",
      "ResponsiveDesign",
    ],
    link: "https://docs.google.com/presentation/d/1x3G2wHynFJh7KFeekvmouqfiiCQAqyFi4M-hWO1hUzA/edit?usp=sharing",
    category: "Web Development",
  },
  {
    title: "RAG Agent Landing Page",
    description:
      "Built a custom landing page using HTML, CSS, and JavaScript for a RAG (Retrieval-Augmented Generation) agent project, featuring seamless integration with Python backend for advanced AI functionality and data processing.",
    technologies: [
      "Web Development",
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "RAG",
      "AI",
      "OpenAI",
      "Huggingface",
    ],
    link: "https://intellibro.netlify.app/",
    category: "Web Development",
  },
];

// Categories available for filtering
const categories = [
  { id: "all", name: "All Projects" },
  { id: "Automation", name: "Automation" },
  { id: "AI Agents", name: "AI Agents" },
  { id: "Web Development", name: "Web Development" },
];

export default function PortfolioSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  // Filter items based on the selected category
  const filteredItems = portfolioItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            variant={activeCategory === category.id ? "default" : "outline"}
            className={`${
              activeCategory === category.id
                ? "bg-cyan-400 text-black hover:bg-cyan-500"
                : isDark
                ? "border-white text-white hover:bg-white/10"
                : "border-black text-black hover:bg-black/10"
            }`}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="space-y-8">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className={`${
              isDark
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200 shadow-md"
            } rounded-lg overflow-hidden border hover:border-cyan-400 transition-colors`}
          >
            <div className="p-6 md:p-8">
              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex flex-col gap-2 mb-3">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                      {item.title}
                    </h3>
                    <span
                      className={`text-xs px-2 py-1 rounded w-fit ${
                        isDark ? "bg-gray-700" : "bg-gray-200"
                      }`}
                    >
                      {item.category}
                    </span>
                  </div>
                  <p
                    className={`text-sm sm:text-base ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    } mb-4`}
                  >
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.slice(0, 6).map((tech, idx) => (
                      <span
                        key={idx}
                        className={`${
                          isDark ? "bg-gray-900" : "bg-gray-100"
                        } text-xs px-2 py-1 rounded`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-end">
                  <Link
                    href={item.link}
                    target="_blank"
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2 text-sm sm:text-base"
                  >
                    View Project{" "}
                    <ExternalLink
                      size={16}
                      className="sm:h-[18px] sm:w-[18px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
