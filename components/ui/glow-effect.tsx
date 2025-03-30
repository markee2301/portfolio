"use client";

import { useTheme } from "next-themes";
import { type ReactNode, useState, useEffect } from "react";

interface GlowLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  isActive?: boolean;
  target?: string;
  rel?: string;
}

export function GlowLink({
  href,
  children,
  className = "",
  onClick = () => {},
  isActive = false,
  target,
  rel,
}: GlowLinkProps) {
  const { resolvedTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkTheme = mounted && resolvedTheme === "dark";

  // Don't render the active effects until after hydration
  const shouldShowEffects = mounted && (isHovered || isActive);

  const textShadowStyle = shouldShowEffects
    ? isDarkTheme
      ? "0 0 8px rgba(6, 182, 212, 0.7), 0 0 5px rgba(6, 182, 212, 0.4)"
      : "0 0 5px rgba(6, 182, 212, 0.5)"
    : "none";

  const boxShadowStyle = mounted
    ? isDarkTheme
      ? "0 0 8px rgba(6, 182, 212, 0.7)"
      : "0 0 5px rgba(6, 182, 212, 0.5)"
    : "none";

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={href}
        className={`relative z-10 transition-colors duration-200 ${
          isActive && mounted ? "text-cyan-400 font-semibold" : ""
        } ${isHovered && mounted ? "text-cyan-400" : ""} ${className}`}
        onClick={onClick}
        style={{
          textShadow: textShadowStyle,
        }}
        target={target}
        rel={target ? rel || "noopener noreferrer" : undefined}
      >
        {children}
        {isActive && mounted && (
          <span
            className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-cyan-400 rounded-full"
            style={{
              boxShadow: boxShadowStyle,
            }}
          ></span>
        )}
      </a>
    </div>
  );
}
