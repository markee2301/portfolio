// This index file only exports UI components that are actually used in the project
// to optimize bundle size and tree-shaking

// Button - used in header, mode-toggle, and page components
export { Button, buttonVariants } from "./button";

// Badge - used in experience-cards
export { Badge } from "./badge";

// Glow effect - used in navigation links
export { GlowLink } from "./glow-effect";

// Mobile hooks - used in header
export { useIsMobile } from "./use-mobile";
