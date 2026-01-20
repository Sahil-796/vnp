import { ContactUs } from "@/components/ContactUs";
import type { Metadata } from "next";
import { contactPageData } from "@/constants";

const siteUrl = "https://visionandpath.com";

export const metadata: Metadata = {
  title: contactPageData.metadata.title,
  description: contactPageData.metadata.description,
  keywords: [
    "contact vision and path",
    "career services contact",
    "job placement inquiry",
    "career coaching contact",
    "get in touch",
    "career counseling contact",
    "employment services contact",
    "schedule consultation",
    "career services email",
    "job placement phone",
  ],
  openGraph: {
    title: `${contactPageData.metadata.title} | Vision and Path`,
    description: contactPageData.metadata.description,
    url: `${siteUrl}/contact`,
    siteName: "Vision and Path",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Vision and Path - Career Services",
      },
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Vision and Path Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${contactPageData.metadata.title} | Vision and Path`,
    description: contactPageData.metadata.description,
    images: ["/og-image.png"],
    creator: "@visionandpath",
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
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

// ContactPage Schema
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Vision and Path",
  description: contactPageData.metadata.description,
  url: `${siteUrl}/contact`,
  mainEntity: {
    "@type": "Organization",
    name: "Vision and Path",
    url: siteUrl,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-555-123-4567",
        contactType: "Career Services",
        email: "hello@visionandpath.com",
        areaServed: "US",
        availableLanguage: ["English"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "17:00",
        },
      },
    ],
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
      name: "Contact Us",
      item: `${siteUrl}/contact`,
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
          __html: JSON.stringify(contactPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <ContactUs />
    </>
  );
}
