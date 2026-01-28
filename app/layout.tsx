import type { Metadata, Viewport } from "next";
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

// ✅ Canonical domain (no www - consistent across all files)
const siteUrl = "https://visionandpath.com";

// Cache-busting version for OG image (update this when you change the og-image.png)
const ogImageVersion = "v2";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  alternates: {
    canonical: "/",
  },

  title: {
    template: "%s | Vision and Path",
    default: "Vision and Path | Expert Job Placement & Career Coaching Services",
  },

  description:
    "Vision and Path provides expert career services including job placement, career coaching, resume optimization, interview preparation, and skill development. Transform your career with personalized guidance from industry professionals.",

  keywords: [
    "Vision and Path",
    "vision and path",
    "job placement services",
    "career coaching",
    "resume optimization",
    "interview preparation",
    "career counseling",
    "job search assistance",
    "employment services",
    "professional recruitment",
    "career services",
    "career development",
    "job placement agency",
    "career guidance",
    "professional career coaching",
  ],

  authors: [{ name: "Vision and Path", url: siteUrl }],
  creator: "Vision and Path",
  publisher: "Vision and Path",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Favicon setup
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "Vision and Path | Expert Job Placement & Career Coaching Services",
    description:
      "Transform your career with Vision and Path. Expert job placement, career coaching, resume optimization, interview preparation, and personalized career guidance.",
    url: siteUrl,
    siteName: "Vision and Path",
    images: [
      {
        url: `${siteUrl}/og-image.png?${ogImageVersion}`,
        width: 1200,
        height: 630,
        alt: "Vision and Path - Expert Career Services & Job Placement",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vision and Path | Expert Job Placement & Career Coaching Services",
    description:
      "Transform your career with Vision and Path. Expert job placement, career coaching, resume optimization, and interview preparation.",
    images: [`${siteUrl}/og-image.png?${ogImageVersion}`],
    creator: "@visionandpath",
    site: "@visionandpath",
  },

  // Additional SEO verification and metadata
  verification: {
    google: "6f761cd5625cb86b",
  },

  category: "Career Services",

  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Vision and Path",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
  },
};

// --- Structured Data Schemas ---
// (siteUrl already defined above)

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Vision and Path",
  alternateName: ["Vision & Path", "VisionandPath", "VP Career Services"],
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/logo.png`,
    width: 512,
    height: 512,
  },
  image: `${siteUrl}/og-image.png`,
  description: "Expert job placement services, career coaching, and professional development to accelerate your career success.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5900 Balcones Dr",
    addressLocality: "Laredo",
    addressRegion: "TX",
    postalCode: "78046",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-210-530-1296",
    contactType: "customer service",
    email: "careers@visionandpath.com",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://www.linkedin.com/company/visionandpath",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Vision and Path",
  alternateName: "Vision & Path",
  url: siteUrl,
  description: "Expert job placement & career coaching services",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/services?search={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#localbusiness`,
  name: "Vision and Path",
  image: `${siteUrl}/og-image.png`,
  url: siteUrl,
  telephone: "+1-210-530-1296",
  email: "careers@visionandpath.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5900 Balcones Dr",
    addressLocality: "Laredo",
    addressRegion: "TX",
    postalCode: "78046",
    addressCountry: "US",
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: [
    "Job Placement",
    "Career Coaching",
    "Resume Writing",
    "Interview Preparation",
    "Career Assessment",
    "Skill Development",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        
        {/* DNS prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Structured data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        
        {/* Structured data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        
        {/* Structured data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        
        {/* Structured data - Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
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
