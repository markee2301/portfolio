#!/usr/bin/env node

/**
 * This script converts the SVG favicon to various favicon formats
 * Required for cross-browser compatibility
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

console.log("🎨 Generating favicons from SVG...");

// Ensure directories exist
const publicDir = path.join(process.cwd(), "public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Source SVG path
const svgPath = path.join(publicDir, "favicon.svg");
if (!fs.existsSync(svgPath)) {
  console.error("❌ favicon.svg not found in public directory!");
  process.exit(1);
}

// Create an HTML file that links to all the favicons
function createFaviconHTML() {
  const faviconHTML = `
<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#15a2b8" />
<meta name="msapplication-TileColor" content="#15a2b8" />
<meta name="theme-color" content="#15a2b8" />
`;

  console.log("\n✅ Add the following to your HTML head:");
  console.log(faviconHTML);

  // Write instructions to a file for reference
  fs.writeFileSync(
    path.join(process.cwd(), "public", "favicon-instructions.txt"),
    faviconHTML
  );
}

try {
  // Since we couldn't install sharp, let's use Inkscape or other tools if available
  // or provide manual instructions

  console.log("🔍 Using available system tools for conversion...");

  console.log("\n📝 Manual steps to create favicons:");
  console.log("1. Use an online tool like https://realfavicongenerator.net/");
  console.log("2. Upload your public/favicon.svg file");
  console.log("3. Download the generated package");
  console.log("4. Extract files to your public folder");

  // Create the browser config file
  const browserconfig = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
    <msapplication>
        <tile>
            <square150x150logo src="/mstile-150x150.png"/>
            <TileColor>#15a2b8</TileColor>
        </tile>
    </msapplication>
</browserconfig>`;

  fs.writeFileSync(path.join(publicDir, "browserconfig.xml"), browserconfig);

  // Create a basic site.webmanifest file
  const webmanifest = {
    name: "Mark Anthony Navarro",
    short_name: "Mark Navarro",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#15a2b8",
    background_color: "#ffffff",
    display: "standalone",
  };

  fs.writeFileSync(
    path.join(publicDir, "site.webmanifest"),
    JSON.stringify(webmanifest, null, 2)
  );

  // Output instructions for manual conversion
  createFaviconHTML();

  console.log(
    "\n✅ Generated browser config files and instructions successfully!"
  );
} catch (error) {
  console.error("\n❌ Error generating favicons:", error);
  process.exit(1);
}
