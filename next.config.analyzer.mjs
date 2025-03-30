import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

// @ts-check
import nextConfig from "./next.config.mjs";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true,
});

// Export the config with the bundle analyzer
export default withBundleAnalyzer(nextConfig);
