"use client";

import EducationTimeline from "./education-timeline";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AboutSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <section id="about" className="w-full">
      <div
        className={`max-w-6xl mx-auto py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 ${
          isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
        }`}
      >
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-center mb-8">
          About Me
        </h2>

        <div className="mb-10 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-cyan-400">Education</h3>
          <EducationTimeline />
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center text-cyan-400">
            My Journey
          </h3>
          <p className="text-lg leading-relaxed mb-6 text-justify">
            I've always been drawn to technology—not just for the sake of
            building things, but for how it can solve real problems. My journey
            started in college as an aspiring full-stack developer, where I
            spent my first few years immersed in web development. I built
            booking systems, registration platforms, and other practical tools
            using PHP, JavaScript, and the usual front-end stack (HTML, CSS).
            Over time, I dove into frameworks like Tailwind CSS, Vue.js,
            Laravel, Django, Flask and even React, always eager to learn how
            things worked under the hood.
          </p>
          <p className="text-lg leading-relaxed mb-6 text-justify">
            But in my fourth year, something shifted. I stumbled into Machine
            Learning and AI, and it completely changed my perspective. Seeing
            how AI could automate repetitive tasks and help businesses
            streamline their operation 24/7 was a game-changer. Suddenly, I
            wasn't just coding—I was teaching machines to think.
          </p>
          <p className="text-lg leading-relaxed mb-6 text-justify">
            Now, I focus on AI Automation and No-Code/Low-Code Development,
            using the latest tools to build smart, scalable solutions that help
            businesses work smarter. My background in programming and web
            development gives me a unique lens—I don't just think about
            algorithms; I think about how they fit into real-world workflows.
          </p>
          <p className="text-lg leading-relaxed mb-10 text-justify">
            At the end of the day, I'm all about making tech work for people,
            not the other way around.
          </p>
        </div>
      </div>
    </section>
  );
}
