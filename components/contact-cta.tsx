"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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
      <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
        Ready to automate your business?
      </h3>
      <p className="mb-4 md:mb-5 text-sm md:text-base">
        Let's discuss how automation and AI can streamline your operations and
        boost productivity.
      </p>
      <Link
        href="https://calendly.com/mark-anthony-b-navarro/30min"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="bg-cyan-400 hover:bg-cyan-500 text-black w-full md:w-auto">
          Book a Meeting
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
            className="ml-2"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </Button>
      </Link>
    </div>
  );
}
