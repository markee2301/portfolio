"use client";

import EducationTimeline from "./education-timeline";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const skillCategories = [
  {
    name: "Programming",
    skills: [
      { name: "HTML/CSS", level: 9 },
      { name: "JavaScript", level: 8 },
      { name: "Python", level: 8 },
      { name: "SQL", level: 8 },
    ],
  },
  {
    name: "Automation",
    skills: [
      { name: "Make.com", level: 9 },
      { name: "Zapier", level: 9 },
      { name: "n8n", level: 9 },
      { name: "Power Automate", level: 8 },
    ],
  },
  {
    name: "AI Development",
    skills: [
      { name: "VAPI", level: 9 },
      { name: "Voiceflow", level: 9 },
      { name: "Relevance.ai", level: 9 },
      { name: "OpenAI", level: 9 },
    ],
  },
  {
    name: "CRM & Web",
    skills: [
      { name: "WordPress/Elementor", level: 9 },
      { name: "Airtable", level: 9 },
      { name: "GoHighLevel", level: 8 },
      { name: "HubSpot", level: 8 },
    ],
  },
];

export default function AboutSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-center mb-8">
        About Me
      </h2>

      <div className="mb-10">
        <h3 className="text-2xl font-bold mb-4 text-cyan-400">Education</h3>
        <EducationTimeline />
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-6 text-cyan-400">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`${
                isDark ? "bg-gray-800" : "bg-white shadow-md"
              } p-6 rounded-lg`}
            >
              <h4 className="text-xl font-bold mb-4">{category.name}</h4>
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}/10</span>
                    </div>
                    <div
                      className={`w-full ${
                        isDark ? "bg-gray-700" : "bg-gray-200"
                      } rounded-full h-2.5`}
                    >
                      <div
                        className="bg-cyan-400 h-2.5 rounded-full"
                        style={{ width: `${skill.level * 10}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-center text-cyan-400">
          My Journey
        </h3>
        <p className="text-lg leading-relaxed mb-6">
          I've always been drawn to technology—not just for the sake of building
          things, but for how it can solve real problems. My journey started in
          college as an aspiring full-stack developer, where I spent my first
          few years immersed in web development. I built booking systems,
          registration platforms, and other practical tools using PHP,
          JavaScript, and the usual front-end stack (HTML, CSS). Over time, I
          dove into frameworks like Tailwind CSS, Vue.js, Laravel, Django, Flask
          and even React, always eager to learn how things worked under the
          hood.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          But in my fourth year, something shifted. I stumbled into Machine
          Learning and AI, and it completely changed my perspective. Seeing how
          AI could automate repetitive tasks and help businesses streamline
          their operation 24/7 was a game-changer. Suddenly, I wasn't just
          coding—I was teaching machines to think.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Now, I focus on AI Automation and No-Code/Low-Code Development, using
          the latest tools to build smart, scalable solutions that help
          businesses work smarter. My background in programming and web
          development gives me a unique lens—I don't just think about
          algorithms; I think about how they fit into real-world workflows.
        </p>
        <p className="text-lg leading-relaxed mb-10">
          At the end of the day, I'm all about making tech work for people, not
          the other way around.
        </p>
      </div>
    </div>
  );
}
