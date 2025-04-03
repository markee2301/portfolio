"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/metadata";

interface OptimizedImageProps {
  src: string;
  width?: number;
  height?: number;
  quality?: number;
  priority?: boolean;
}

interface OptimizedImageResult {
  optimizedSrc: string;
  isLoading: boolean;
  error: Error | null;
}

/**
 * Hook for optimized image loading with caching
 * This hook automatically adds parameters for image optimization and cache busting
 */
export function useOptimizedImage({
  src,
  width,
  height,
  quality = 90,
  priority = false,
}: OptimizedImageProps): OptimizedImageResult {
  const [optimizedSrc, setOptimizedSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const createOptimizedImageUrl = (imageSrc: string) => {
      try {
        // Check if this is an external URL
        if (
          imageSrc.startsWith("http") &&
          !imageSrc.includes(window.location.hostname)
        ) {
          // For external images, return as is (no optimization possible)
          return imageSrc;
        }

        // Check if this is already an optimized Next.js image
        if (imageSrc.includes("_next/image")) {
          return imageSrc;
        }

        // Create a URL object
        const url = new URL(
          imageSrc.startsWith("/")
            ? `${window.location.origin}${imageSrc}`
            : imageSrc
        );

        // Set width and height as query parameters if provided
        if (width) {
          url.searchParams.set("width", width.toString());
        }
        if (height) {
          url.searchParams.set("height", height.toString());
        }

        // Set quality
        url.searchParams.set("quality", quality.toString());

        // Add cache busting parameter based on deployment timestamp
        // Note: This is only needed during development for cache invalidation
        if (process.env.NODE_ENV === "development") {
          const timestamp = new Date().getTime();
          url.searchParams.set("cb", timestamp.toString());
        }

        return url.toString();
      } catch (err) {
        console.error("Error creating optimized image URL:", err);
        setError(err instanceof Error ? err : new Error("Unknown error"));
        return imageSrc; // Return original source in case of error
      }
    };

    // If the image is priority, preload it
    if (priority && typeof window !== "undefined") {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = createOptimizedImageUrl(src);
      document.head.appendChild(link);

      return () => {
        document.head.removeChild(link);
      };
    }

    setOptimizedSrc(createOptimizedImageUrl(src));
    setIsLoading(false);

    return () => {
      // Cleanup if needed
    };
  }, [src, width, height, quality, priority]);

  return { optimizedSrc, isLoading, error };
}

export default useOptimizedImage;
