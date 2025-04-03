import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const metadata: Metadata = {
  title: "Mark Anthony Navarro | AI Automation Developer & Freelancer",
  description:
    "Mark Anthony Navarro is a freelance AI Automation Developer specializing in workflow automation, AI agents, and system integration to help businesses optimize operations.",
  keywords:
    "Mark Anthony Navarro, AI automation, workflow automation, AI agents, freelance developer, Zapier expert, Make.com developer, VAPI, Voiceflow",
  openGraph: {
    title: "Mark Anthony Navarro | AI Automation Developer & Freelancer",
    description:
      "Mark Anthony Navarro is a freelance developer specializing in workflow automation, AI agents, and system integration.",
    url: "https://markanthonynavarro.dev",
    siteName: "Mark Anthony Navarro",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://markanthonynavarro.dev/images/profile.png",
        width: 800,
        height: 800,
        alt: "Mark Anthony Navarro - AI Automation Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark Anthony Navarro | AI Automation Developer",
    description:
      "Mark Anthony Navarro is a freelance developer specializing in workflow automation, AI agents, and system integration.",
    images: ["https://markanthonynavarro.dev/images/profile.png"],
  },
  alternates: {
    canonical: "https://markanthonynavarro.dev",
  },
  verification: {
    google: "verification_token",
  },
  metadataBase: new URL("https://markanthonynavarro.dev"),
  authors: [
    { name: "Mark Anthony Navarro", url: "https://markanthonynavarro.dev" },
  ],
  category: "Technology",
  creator: "Mark Anthony Navarro",
  publisher: "Mark Anthony Navarro",
  generator: "Next.js",
  applicationName: "Mark Anthony Navarro Portfolio",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    title: "Mark Anthony Navarro",
    statusBarStyle: "black-translucent",
    capable: true,
  },
  formatDetection: {
    telephone: true,
    date: false,
    address: false,
    email: true,
    url: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="author" content="Mark Anthony Navarro" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#15a2b8" />
        <meta name="theme-color" content="#15a2b8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta
          name="format-detection"
          content="telephone=yes,address=no,email=yes"
        />
        <Script
          id="schema-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mark Anthony Navarro",
              url: "https://markanthonynavarro.dev",
              image: "https://markanthonynavarro.dev/images/profile.png",
              jobTitle: "AI Automation Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              description:
                "Freelance AI Automation Developer specializing in workflow automation, AI agents, and system integration",
              sameAs: [
                "https://github.com/markee2301",
                "https://www.linkedin.com/in/markee2301",
                "https://www.facebook.com/markee2301/",
                "https://www.instagram.com/super.markee/",
              ],
              skills: [
                "AI Automation",
                "Workflow Development",
                "System Integration",
                "Zapier",
                "Make.com",
                "VAPI",
                "Voiceflow",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
