import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Navbar}  from "@/components/Navbar";
import { ExpandableChatDemo } from "@/components/AI";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

// ✅ Canonical domain (important)
const siteUrl = "https://visionandpath.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  alternates: {
    canonical: siteUrl,
  },

  title: {
    template: "%s | Vision and Path",
    default: "Vision and Path - Expert Job Placement & Career Services",
  },

  description:
    "Transform your career with Vision and Path's comprehensive career services. Expert career coaching, resume optimization, interview preparation, skill development, and personalized job placement support.",

  keywords: [
    "job placement services",
    "career coaching",
    "resume optimization",
    "interview preparation",
    "career counseling",
    "job search assistance",
    "employment services",
    "professional recruitment",
  ],

  authors: [{ name: "Vision and Path" }],
  creator: "Vision and Path",
  publisher: "Vision and Path",

  robots: {
    index: true,
    follow: true,
  },

  // ✅ Simple, clean, Google-safe favicon setup
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Vision and Path - Expert Job Placement & Career Services",
    description:
      "Comprehensive career services including job placement, career coaching, resume optimization, and interview preparation.",
    url: siteUrl,
    siteName: "Vision and Path",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Vision and Path",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vision and Path - Expert Job Placement & Career Services",
    description:
      "Comprehensive career services including job placement, career coaching, resume optimization, and interview preparation.",
    images: [`${siteUrl}/og-image.png`],
  },
};

// --- Schema stays fine ---
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vision and Path",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Minimal, clean fallback (no conflicts) */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="canonical" href={siteUrl} />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>

      <body
        className={`${outfit.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <Navbar />
        {children}
        <Analytics />
        <ExpandableChatDemo />
        <Footer />
      </body>
    </html>
  );
}
