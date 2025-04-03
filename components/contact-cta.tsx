"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Mail } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import AnimatedText from "@/components/animated-text";

export default function ContactCTA() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div
      className={`${
        isDark ? "bg-gray-800" : "bg-gray-100"
      } rounded-lg p-4 md:p-5 lg:p-6`}
    >
      <AnimatedText
        text="Ready to automate your business?"
        className="mb-2 md:mb-3"
        fontSize="text-lg md:text-xl"
      />
      <p className="mb-4 md:mb-5 text-sm md:text-base">
        Let's discuss how automation and AI can streamline your operations and
        boost productivity.
      </p>
      <div className="flex flex-col gap-3">
        <button
          onClick={() => {
            window.Calendly?.initPopupWidget({
              url: "https://calendly.com/mark-anthony-b-navarro/30min",
            });
            return false;
          }}
          className="bg-cyan-400 hover:bg-cyan-500 text-black w-full md:w-auto rounded-md px-4 py-2 flex items-center justify-center text-base font-bold"
        >
          <Calendar size={20} className="mr-2 font-bold" />
          <span className="font-bold">Book a Meeting</span>
        </button>
        <a
          href="mailto:hello@markanthonynavarro.dev"
          className="bg-white hover:bg-gray-50 text-black w-full md:w-auto rounded-md px-4 py-2 flex items-center justify-center text-base font-bold border-2 border-white"
        >
          <Mail size={20} className="mr-2 font-bold" />
          <span className="font-bold">Send an Email</span>
        </a>
      </div>
    </div>
  );
}
