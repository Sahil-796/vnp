import { ServicesList } from "@/components/ServicesList";
import type { Metadata } from "next";
import { servicesPageData } from "@/constants";

const siteUrl = "https://visionandpath.com";

export const metadata: Metadata = {
  title: servicesPageData.metadata.title,
  description: servicesPageData.metadata.description,
  keywords: [
    "career services",
    "job placement services",
    "career coaching services",
    "resume services",
    "interview coaching",
    "career assessment",
    "professional development services",
    "skill development",
    "goal setting services",
    "job search strategies",
    "career planning services",
    "employment services",
  ],
  openGraph: {
    title: `${servicesPageData.metadata.title} | Vision and Path`,
    description: servicesPageData.metadata.description,
    url: `${siteUrl}/services`,
    siteName: "Vision and Path",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vision and Path Services - Career Coaching & Job Placement",
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
    title: `${servicesPageData.metadata.title} | Vision and Path`,
    description: servicesPageData.metadata.description,
    images: ["/og-image.png"],
    creator: "@visionandpath",
  },
  alternates: {
    canonical: `${siteUrl}/services`,
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

// ItemList Schema for services
const servicesListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Career Services",
  description:
    "Comprehensive career services to guide and accelerate your professional growth",
  itemListElement: servicesPageData.content.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.desc,
      url: `${siteUrl}/services/${service.slug}`,
      image: service.imgsrc,
      provider: {
        "@type": "Organization",
        name: "Vision and Path",
        url: siteUrl,
      },
    },
  })),
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
      name: "Services",
      item: `${siteUrl}/services`,
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
          __html: JSON.stringify(servicesListSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <ServicesList />
    </>
  );
}
