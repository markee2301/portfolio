"use client";

import { useTheme } from "next-themes";
import { useState, useEffect, useMemo, memo } from "react";
import { testimonials } from "@/data/testimonials";

// Calculate the width of each testimonial card plus its margin
const CARD_WIDTH = 320; // width of each card
const CARD_MARGIN = 32; // 8px gap * 2 sides
const TOTAL_CARD_WIDTH = CARD_WIDTH + CARD_MARGIN;

// Memoized testimonial card component for better performance
const TestimonialCard = memo(
  ({
    testimonial,
    isDark,
    index,
  }: {
    testimonial: (typeof testimonials)[0];
    isDark: boolean;
    index: number;
  }) => {
    return (
      <div
        key={`${testimonial.name}-${index}`}
        className={`${
          isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        } p-5 rounded-xl border-2 min-w-[300px] w-[300px] md:min-w-[320px] md:w-[320px] flex-shrink-0 h-[450px] md:h-[480px] flex flex-col relative overflow-hidden`}
        style={{
          willChange: "transform",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        {/* Main content */}
        <div className="flex-grow flex flex-col z-10">
          <div className="mb-1">
            <span className="text-5xl text-blue-500 font-serif leading-none">
              &ldquo;
            </span>
          </div>
          <p
            className={`${
              isDark ? "text-gray-300" : "text-gray-700"
            } text-sm leading-relaxed flex-grow text-justify mb-5 -mt-2`}
          >
            {testimonial.content}
          </p>
        </div>

        {/* Author info with decorative element */}
        <div className="mt-auto">
          <div
            className={`w-10 h-1 mb-3 ${
              isDark ? "bg-blue-500" : "bg-blue-600"
            }`}
          ></div>
          <h3 className="font-semibold text-base">{testimonial.name}</h3>
          <p
            className={`text-sm font-medium ${
              isDark ? "text-blue-400" : "text-blue-600"
            } mb-0 leading-tight uppercase tracking-wide`}
          >
            {testimonial.company}
          </p>
          <p
            className={`text-xs ${
              isDark ? "text-gray-400" : "text-gray-600"
            } leading-tight`}
          >
            {testimonial.position}
          </p>
        </div>
      </div>
    );
  }
);

TestimonialCard.displayName = "TestimonialCard";

function TestimonialsSectionContent({
  isDark,
  duplicatedTestimonials,
}: {
  isDark: boolean;
  duplicatedTestimonials: typeof testimonials;
}) {
  return (
    <div className="testimonials-container overflow-hidden">
      <div
        className="testimonials-track flex gap-8"
        style={{
          width: `${testimonials.length * TOTAL_CARD_WIDTH * 2}px`,
        }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.name}-${index}`}
            testimonial={testimonial}
            isDark={isDark}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

// Memoize the main component
const MemoizedTestimonialsSectionContent = memo(TestimonialsSectionContent);

export default function TestimonialsSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Double the testimonials for smooth infinite scroll
  const duplicatedTestimonials = useMemo(
    () => [...testimonials, ...testimonials],
    []
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <section id="testimonials" className="w-full">
      <div
        className={`max-w-6xl mx-auto ${
          isDark ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Testimonials
            </h2>
            <p
              className={`text-lg ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              What others say about my work and expertise
            </p>
          </div>

          <MemoizedTestimonialsSectionContent
            isDark={isDark}
            duplicatedTestimonials={duplicatedTestimonials}
          />
        </div>
      </div>

      <style jsx global>{`
        .testimonials-container {
          width: 100%;
          position: relative;
          will-change: transform;
          contain: content;
        }

        .testimonials-track {
          display: flex;
          animation: testimonial-scroll 30s linear infinite;
          backface-visibility: hidden;
          perspective: 1000px;
          /* Enable hardware acceleration */
          transform: translateZ(0);
        }

        @keyframes testimonial-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${testimonials.length * TOTAL_CARD_WIDTH}px);
          }
        }

        /* Pause animation on hover for devices that support hover */
        @media (hover: hover) {
          .testimonials-track:hover {
            animation-play-state: paused;
          }
        }

        /* Optimize for mobile */
        @media (max-width: 768px) {
          .testimonials-track {
            animation-duration: 20s;
            will-change: transform;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
          }
        }
      `}</style>
    </section>
  );
}
