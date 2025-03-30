const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true,
});

// Use the regular Next.js config
const nextConfig = require("./next.config.mjs");

// Export the config with the bundle analyzer
module.exports = withBundleAnalyzer(nextConfig);
