import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { siteConfig } from "@/lib/metadata";

/**
 * Middleware for Next.js that adds appropriate cache headers based on route type
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const pathname = request.nextUrl.pathname;

  // Set default security headers
  response.headers.set("X-DNS-Prefetch-Control", "on");
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  );
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );

  // Apply cache control headers based on path patterns
  if (pathname.match(/^\/_next\/image/)) {
    // Next.js optimized images
    response.headers.set(
      "Cache-Control",
      `public, max-age=${siteConfig.cacheTTL.images}, immutable`
    );
  } else if (pathname.match(/^\/_next\/static/)) {
    // Static assets (JS, CSS)
    response.headers.set(
      "Cache-Control",
      `public, max-age=${siteConfig.cacheTTL.staticAssets}, immutable`
    );
  } else if (pathname.match(/^\/api\//)) {
    // API routes
    response.headers.set(
      "Cache-Control",
      `public, max-age=${siteConfig.cacheTTL.api}, s-maxage=${
        siteConfig.cacheTTL.api
      }, stale-while-revalidate=${siteConfig.cacheTTL.api * 2}`
    );
  } else if (
    pathname.match(/\.(jpe?g|png|gif|svg|webp|avif|ico|woff2?|ttf|eot)$/) ||
    pathname.match(/^\/images\//) ||
    pathname.match(/^\/fonts\//)
  ) {
    // Static files like images and fonts
    response.headers.set(
      "Cache-Control",
      `public, max-age=${siteConfig.cacheTTL.staticAssets}, immutable`
    );
  } else {
    // HTML pages
    response.headers.set(
      "Cache-Control",
      `public, max-age=${siteConfig.cacheTTL.html}, s-maxage=${
        siteConfig.cacheTTL.html * 2
      }, stale-while-revalidate=${siteConfig.cacheTTL.html * 4}`
    );
  }

  return response;
}

// Configure which paths this middleware will run for
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
