"use client";

import { useTheme } from "next-themes";
import { useState, useEffect, useMemo, memo } from "react";
import Image from "next/image";

// Define the tool type
interface Tool {
  name: string;
  logo: string;
  needsSmaller?: boolean | "extra" | "super-extra";
  needsLarger?: boolean | "super-large";
}

// Cache-busting timestamp
const timestamp =
  "v=" + new Date().toISOString().split("T")[0].replace(/-/g, "");

// Array of tools with their logos and names - using only uploaded logos and correct file extensions
const tools: Tool[] = [
  { name: "Make.com", logo: "/images/tools/make.png" },
  { name: "Zapier", logo: "/images/tools/zapier.svg" },
  { name: "n8n", logo: "/images/tools/n8n.png" },
  { name: "Power Automate", logo: "/images/tools/power automate.webp" },
  { name: "OpenAI", logo: "/images/tools/openai.png" },
  { name: "VAPI", logo: "/images/tools/vapi.png" },
  { name: "Retell", logo: "/images/tools/retell.svg" },
  {
    name: "Relevance AI",
    logo: "/images/tools/relevance ai.png",
    needsLarger: "super-large",
  },
  {
    name: "Voiceflow",
    logo: "/images/tools/voiceflow.svg",
    needsLarger: "super-large",
  },
  { name: "HTML", logo: "/images/tools/html.png", needsSmaller: "extra" },
  { name: "CSS", logo: "/images/tools/css.png", needsSmaller: "super-extra" },
  {
    name: "JavaScript",
    logo: "/images/tools/javascript.png",
    needsSmaller: "extra",
  },
  {
    name: "Python",
    logo: "/images/tools/python.png",
    needsSmaller: "super-extra",
  },
  {
    name: "JSON",
    logo: "/images/tools/json.png",
  },
  {
    name: "REST API",
    logo: "/images/tools/rest API.png",
    needsSmaller: "extra",
  },
  {
    name: "Postman",
    logo: "/images/tools/postman.png",
  },
  { name: "SQL", logo: "/images/tools/sql.png", needsSmaller: "extra" },
  { name: "Twilio", logo: "/images/tools/twilio.png" },
  {
    name: "ActiveCampaign",
    logo: "/images/tools/activecampaign.png",
    needsSmaller: "super-extra",
  },
  { name: "GoHighLevel", logo: "/images/tools/gohighlevel.png" },
  { name: "HubSpot", logo: "/images/tools/hubspot.png" },
  { name: "WordPress", logo: "/images/tools/wordpress.png", needsLarger: true },
];

// Helper functions memoized to prevent recreating on each render
const getLogoSize = (tool: Tool) => {
  if (tool.needsLarger === "super-large") return 160; // Extra large size
  if (tool.needsLarger) return 140; // Larger size for specified logos
  if (tool.needsSmaller === "super-extra") return 55;
  if (tool.needsSmaller === "extra") return 80;
  if (tool.needsSmaller === true) return 100;
  return 120;
};

// Helper function to determine max size percentage
const getMaxSizePercentage = (tool: Tool) => {
  if (tool.needsLarger === "super-large") return "100%"; // Full size for super-large
  if (tool.needsLarger) return "95%"; // Larger percentage for specified logos
  if (tool.needsSmaller === "super-extra") return "45%";
  if (tool.needsSmaller === "extra") return "60%";
  if (tool.needsSmaller === true) return "75%";
  return "90%";
};

// Memoized tool item component for better performance
const ToolItem = memo(
  ({
    tool,
    index,
    toolItemWidth,
  }: {
    tool: Tool;
    index: number;
    toolItemWidth: number;
  }) => {
    const logoSize = useMemo(() => getLogoSize(tool), [tool]);
    const maxSizePercentage = useMemo(() => getMaxSizePercentage(tool), [tool]);

    return (
      <div
        key={`${tool.name}-${index}`}
        className="tool-item flex flex-col items-center justify-center px-6 group"
        style={{ width: `${toolItemWidth}px` }}
      >
        <div className="w-32 h-32 flex items-center justify-center relative">
          <div
            style={{
              position: "relative",
              width: logoSize,
              height: logoSize,
              maxWidth: maxSizePercentage,
              maxHeight: maxSizePercentage,
            }}
          >
            <Image
              src={tool.logo}
              alt={`${tool.name} logo`}
              fill
              unoptimized={true}
              priority={tool.name === "ActiveCampaign"}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          {/* Tool name visible only on hover - positioned closer */}
          <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-full text-center">
            <span className="text-white/90 text-sm font-medium whitespace-nowrap">
              {tool.name}
            </span>
          </div>
        </div>
      </div>
    );
  }
);

ToolItem.displayName = "ToolItem";

export default function ToolsCarousel() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Create two copies for smoother animation transition
  const duplicatedTools = useMemo(() => [...tools, ...tools], []);

  const isDark = mounted && resolvedTheme === "dark";

  // Fixed width for all tool items for consistent spacing
  const toolItemWidth = 160;

  return (
    <div className="w-full overflow-hidden pt-0 pb-4 mb-6">
      <div className="relative w-full">
        {/* Carousel wrapper with animation */}
        <div className="carousel-container overflow-hidden">
          <div className="carousel-track flex">
            {duplicatedTools.map((tool, index) => (
              <ToolItem
                key={`${tool.name}-${index}`}
                tool={tool}
                index={index}
                toolItemWidth={toolItemWidth}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .carousel-container {
          width: 100%;
          position: relative;
          will-change: transform;
          contain: content;
        }

        .carousel-track {
          display: flex;
          animation: scroll 40s linear infinite;
          width: calc(${tools.length * toolItemWidth}px * 2);
          backface-visibility: hidden;
          perspective: 1000px;
          /* Enable hardware acceleration */
          transform: translateZ(0);
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${tools.length * toolItemWidth}px);
          }
        }

        .tool-item {
          min-width: ${toolItemWidth}px;
        }
      `}</style>
    </div>
  );
}
