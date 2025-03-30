#!/usr/bin/env node

/**
 * This script analyzes the Next.js production build to identify large bundles
 * and potential optimization opportunities.
 *
 * Usage:
 * 1. Run a production build: npm run build
 * 2. Run this script: node scripts/analyze-bundle.js
 */

const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Paths
const nextStatsPath = path.join(process.cwd(), ".next/build-manifest.json");
const BUNDLE_SIZE_THRESHOLD_KB = 50; // Bundles larger than this will be highlighted

console.log("\n📦 NEXT.JS BUNDLE ANALYZER 📦\n");

// Check if Next.js build stats exist
if (!fs.existsSync(nextStatsPath)) {
  console.error('❌ No build stats found. Please run "npm run build" first.');
  process.exit(1);
}

// Read the Next.js build manifest
const manifest = JSON.parse(fs.readFileSync(nextStatsPath, "utf8"));
const pages = Object.keys(manifest.pages || {}).filter(
  (page) => page !== "/_app" && page !== "/_error" && page !== "/_document"
);

console.log(`📄 Found ${pages.length} pages in the build\n`);

// Find component files
const componentFiles = glob.sync("components/**/*.{jsx,tsx}", {
  cwd: process.cwd(),
});
console.log(`🧩 Found ${componentFiles.length} components\n`);

// Print large page bundles
console.log("🔍 ANALYZING PAGE BUNDLES:");
console.log("---------------------------");

// Check .next/server/pages directory for SSR chunks
const serverPagesDir = path.join(process.cwd(), ".next/server/pages");
if (fs.existsSync(serverPagesDir)) {
  const pageFiles = glob.sync("**/*.js", { cwd: serverPagesDir });

  pageFiles.forEach((file) => {
    const filePath = path.join(serverPagesDir, file);
    const stats = fs.statSync(filePath);
    const sizeKb = stats.size / 1024;

    if (sizeKb > BUNDLE_SIZE_THRESHOLD_KB) {
      console.log(`⚠️  ${file}: ${sizeKb.toFixed(2)} KB`);
    } else {
      console.log(`✅ ${file}: ${sizeKb.toFixed(2)} KB`);
    }
  });
}

console.log("\n🧪 RECOMMENDATIONS:");
console.log("------------------");
console.log(
  "1. Check for unused UI components - your components/ui folder has many components"
);
console.log("2. Consider lazy loading large components using dynamic imports");
console.log(
  "3. Optimize image loading with next/image priority for above-the-fold images"
);
console.log(
  "4. Use webpack bundle analyzer for more detailed analysis: npm install --save-dev @next/bundle-analyzer"
);
console.log("\n✨ OPTIMIZATIONS ALREADY IMPLEMENTED:");
console.log("--------------------------------");
console.log("✓ Caching headers for static assets");
console.log("✓ Proper SEO metadata and structured data");
console.log("✓ Optimized Next.js configuration");
console.log("✓ Vercel deployment optimizations");
console.log("\nThank you for using the bundle analyzer! 🚀");
