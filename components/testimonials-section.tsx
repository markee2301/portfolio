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
    onTouchStart,
    onTouchEnd,
    onClick,
  }: {
    testimonial: (typeof testimonials)[0];
    isDark: boolean;
    index: number;
    onTouchStart?: () => void;
    onTouchEnd?: () => void;
    onClick?: () => void;
  }) => {
    return (
      <div
        key={`${testimonial.name}-${index}`}
        className={`${
          isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        } p-6 rounded-xl border-2 min-w-[300px] w-[300px] md:min-w-[320px] md:w-[320px] flex-shrink-0 h-[520px] md:h-[540px] flex flex-col relative overflow-hidden cursor-pointer`}
        style={{
          willChange: "transform",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          WebkitFontSmoothing: "antialiased",
        }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onClick={onClick}
      >
        {/* Main content */}
        <div className="flex-grow flex flex-col z-10">
          <div className="mb-2">
            <span className="text-5xl text-blue-500 font-serif leading-none">
              &ldquo;
            </span>
          </div>
          <p
            className={`${
              isDark ? "text-gray-300" : "text-gray-700"
            } text-sm leading-[1.7] flex-grow text-justify mb-6 -mt-3`}
          >
            {testimonial.content}
          </p>
        </div>

        {/* Author info with decorative element */}
        <div className="mt-auto pt-2">
          <div
            className={`w-10 h-1 mb-4 ${
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
  const [isPaused, setIsPaused] = useState(false);

  // Touch event handlers for mobile
  const handleTouchStart = () => {
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    // Use a slight delay to prevent immediate resuming when switching between cards
    setTimeout(() => {
      setIsPaused(false);
    }, 100);
  };

  // Click handler (works better for some mobile browsers)
  const handleClick = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div
      className="testimonials-container overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
    >
      <div
        className={`testimonials-track flex gap-8 ${isPaused ? "paused" : ""}`}
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
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onClick={handleClick}
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

        /* For touch devices and mobile */
        .testimonials-track.paused {
          animation-play-state: paused;
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
