import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ExpandableChatDemo } from "@/components/AI";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { siteInfo } from "@/constants";

const outfit = Outfit({
  variable: "--font-sans-src",
  subsets: ["latin"],
  display: "swap",
});

// Display face: characterful Gen-Z grotesque for headlines
const bricolage = Bricolage_Grotesque({
  variable: "--font-display-src",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono-src",
  subsets: ["latin"],
  display: "swap",
});

// ✅ Canonical domain (no www - consistent across all files)
const siteUrl = siteInfo.url;

// Cache-busting version for OG image and logo (update this when you change images)
const ogImageVersion = "v3";
const logoVersion = "v2";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f6fe" },
    { media: "(prefers-color-scheme: dark)", color: "#07103a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  alternates: {
    canonical: "/",
  },

  title: {
    template: "%s | Vision and Path",
    default:
      "Vision and Path | Expert Job Placement & Career Coaching Services",
  },

  description:
    "Vision and Path provides expert career services including job placement, career coaching, resume optimization, interview preparation, and skill development. Transform your career with personalized guidance from industry professionals.",

  keywords: [
    "Vision and Path",
    "vision and path",
    "visionandpath",
    "vision & path",
    "Vision and Path career services",
    "Vision and Path job placement",
    "Vision and Path Wyoming",
    "Vision and Path Sheridan",
    "visionandpath.com",
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
    "VP Career Services",
    "Wyoming job placement",
    "Sheridan career services",
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
    url: `${siteUrl}/logo.png?${logoVersion}`,
    width: 512,
    height: 512,
  },
  image: `${siteUrl}/og-image.png?${ogImageVersion}`,
  description:
    "Expert job placement services, career coaching, and professional development to accelerate your career success.",
  address: {
    "@type": "PostalAddress",
    ...siteInfo.address,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteInfo.phoneSchema,
    contactType: "customer service",
    email: siteInfo.email,
    availableLanguage: ["English"],
  },
  sameAs: [siteInfo.social.linkedin],
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
  telephone: siteInfo.phoneSchema,
  email: siteInfo.email,
  address: {
    "@type": "PostalAddress",
    ...siteInfo.address,
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
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
        className={`${outfit.variable} ${bricolage.variable} ${geistMono.variable} antialiased font-sans`}
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
