import AboutUsSection from "@/components/ui/about-us-section";
import type { Metadata } from "next";
import { aboutPageData } from "@/constants";

const siteUrl = "https://visionandpath.com";

export const metadata: Metadata = {
  title: aboutPageData.metadata.title,
  description: aboutPageData.metadata.description,
  keywords: [
    "about vision and path",
    "career services company",
    "job placement experts",
    "career coaching team",
    "professional recruiters",
    "career counselors",
    "employment agency",
    "career development company",
    "job placement history",
    "career services expertise",
  ],
  openGraph: {
    title: `${aboutPageData.metadata.title} | Vision and Path`,
    description: aboutPageData.metadata.description,
    url: `${siteUrl}/about`,
    siteName: "Vision and Path",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "About Vision and Path - Career Services Team",
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
    title: `${aboutPageData.metadata.title} | Vision and Path`,
    description: aboutPageData.metadata.description,
    images: [`${siteUrl}/og-image.png`],
    creator: "@visionandpath",
    site: "@visionandpath",
  },
  alternates: {
    canonical: `${siteUrl}/about`,
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
};

// AboutPage Schema
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Vision and Path",
  description: aboutPageData.metadata.description,
  url: `${siteUrl}/about`,
  mainEntity: {
    "@type": "Organization",
    name: "Vision and Path",
    url: siteUrl,
    description:
      "Professional job placement and career services helping candidates land their dream jobs with expert coaching, resume optimization, and interview preparation.",
  },
};

// BreadcrumbList Schema
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
    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item: `${siteUrl}/about`,
    },
  ],
};

export default function Page() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <AboutUsSection />
    </>
  );
}
