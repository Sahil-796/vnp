import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
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

const siteUrl = "https://visionandpath.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | Vision and Path",
    default: "Vision and Path - Expert Job Placement & Career Services",
  },
  description:
    "Transform your career with Vision and Path's comprehensive career services. Expert career coaching, resume optimization, interview preparation, skill development, and personalized job placement support to help you achieve your professional goals.",
  keywords: [
    "job placement services",
    "career coaching",
    "resume optimization",
    "interview preparation",
    "career counseling",
    "job search assistance",
    "employment services",
    "professional recruitment",
    "career development",
    "salary negotiation",
    "ATS resume optimization",
    "LinkedIn profile optimization",
    "career transition services",
    "remote job placement",
    "executive job placement",
    "career advancement",
    "job matching services",
    "professional development",
    "hiring solutions",
    "talent acquisition",
  ],
  authors: [{ name: "Vision and Path" }],
  creator: "Vision and Path",
  publisher: "Vision and Path",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Vision and Path - Expert Job Placement & Career Services",
    description:
      "Comprehensive career services including professional job placement, career coaching, resume optimization, interview preparation, and skill development to accelerate your career success.",
    url: siteUrl,
    siteName: "Vision and Path",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Vision and Path - Job Placement and Career Services",
        type: "image/png",
      },
      {
        url: `${siteUrl}/logo.png`,
        width: 800,
        height: 600,
        alt: "Vision and Path Logo",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision and Path - Expert Job Placement & Career Services",
    description:
      "Comprehensive career services including professional job placement, career coaching, resume optimization, interview preparation, and skill development to accelerate your career success.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@visionandpath",
    site: "@visionandpath",
  },
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code", // Replace with actual code from Google Search Console
  },
};

// Organization Schema for SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vision and Path",
  alternateName: "VP Career Services",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/og-image.png`,
  description:
    "Professional job placement and career services helping candidates land their dream jobs with expert coaching, resume optimization, and interview preparation.",
  foundingDate: "2014",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Innovation Drive",
    addressLocality: "Tech City",
    addressRegion: "CA",
    postalCode: "94043",
    addressCountry: "US",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "Career Services",
      email: "hello@visionandpath.com",
      areaServed: "US",
      availableLanguage: ["English"],
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/visionandpath",
    "https://twitter.com/visionandpath",
    "https://www.facebook.com/visionandpath",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    bestRating: "5",
    worstRating: "1",
  },
};

// WebSite Schema for SEO
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Vision and Path",
  alternateName: "VP Career Services",
  url: siteUrl,
  description:
    "Expert job placement services, career coaching, and professional development to accelerate your career success.",
  publisher: {
    "@type": "Organization",
    name: "Vision and Path",
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo.png`,
    },
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/services?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Hardcoded Favicon Fallbacks for Maximum Compatibility */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Additional OG Tags as Fallback for WhatsApp/Telegram */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Vision and Path" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta
          property="og:image:secure_url"
          content={`${siteUrl}/og-image.png`}
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Vision and Path - Job Placement and Career Services"
        />
        <meta property="og:url" content={siteUrl} />
        <meta
          property="og:title"
          content="Vision and Path - Expert Job Placement & Career Services"
        />
        <meta
          property="og:description"
          content="Comprehensive career services including professional job placement, career coaching, resume optimization, interview preparation, and skill development to accelerate your career success."
        />

        {/* Twitter Card Fallback */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@visionandpath" />
        <meta name="twitter:creator" content="@visionandpath" />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
        <meta
          name="twitter:title"
          content="Vision and Path - Expert Job Placement & Career Services"
        />
        <meta
          name="twitter:description"
          content="Comprehensive career services including professional job placement, career coaching, resume optimization, interview preparation, and skill development to accelerate your career success."
        />

        {/* Theme Color */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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
