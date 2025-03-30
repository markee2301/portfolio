import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: "https://markanthonynavarro.dev/sitemap.xml",
    host: "https://markanthonynavarro.dev",
  };
}
