/**
 * Centralized metadata configuration for the Mark Anthony Navarro portfolio site
 */

export const siteConfig = {
  name: "Mark Anthony Navarro",
  title: "Mark Anthony Navarro | AI Automation Developer & Freelancer",
  description:
    "Mark Anthony Navarro is a freelance AI Automation Developer specializing in workflow automation, AI agents, and system integration to help businesses optimize operations.",
  url: "https://markanthonynavarro.dev",
  keywords: [
    "Mark Anthony Navarro",
    "AI automation",
    "workflow automation",
    "AI agents",
    "freelance developer",
    "Zapier expert",
    "Make.com developer",
    "VAPI",
    "Voiceflow",
    "Manila developer",
    "automation expert",
  ],
  author: {
    name: "Mark Anthony Navarro",
    email: "hello@markanthonynavarro.dev",
    website: "https://markanthonynavarro.dev",
    github: "https://github.com/markee2301",
    linkedin: "https://www.linkedin.com/in/markee2301",
    facebook: "https://www.facebook.com/markee2301/",
    instagram: "https://www.instagram.com/super.markee/",
  },
  socialProfiles: [
    { name: "GitHub", url: "https://github.com/markee2301" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/markee2301" },
    { name: "Facebook", url: "https://www.facebook.com/markee2301/" },
    { name: "Instagram", url: "https://www.instagram.com/super.markee/" },
  ],
  sections: [
    { id: "home", name: "Home" },
    { id: "experience", name: "Experience" },
    { id: "services", name: "Services" },
    { id: "tools", name: "Tools" },
    { id: "testimonials", name: "Testimonials" },
    { id: "portfolio", name: "Portfolio" },
    { id: "about", name: "About" },
    { id: "contact", name: "Contact" },
  ],
  // Cache configuration
  cacheTTL: {
    images: 31536000, // 1 year in seconds
    staticAssets: 31536000, // 1 year in seconds
    api: 3600, // 1 hour in seconds
    html: 86400, // 1 day in seconds
  },
};
