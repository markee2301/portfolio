/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://markanthonynavarro.dev",
  generateRobotsTxt: false, // We're using the Next.js API routes for robots.txt
  generateIndexSitemap: true,
  outDir: "./.next/static",
  exclude: ["/api/*", "/server-sitemap.xml"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
  },
  transform: async (config, path) => {
    // Custom transformation for each page
    return {
      loc: path,
      changefreq: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
    };
  },
};
