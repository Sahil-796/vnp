import AboutUsSection from "@/components/ui/about-us-section";
import type { Metadata } from "next";

import { aboutPageData } from "@/constants";

export const metadata: Metadata = {
  title: aboutPageData.metadata.title,
  description: aboutPageData.metadata.description,
  openGraph: {
    title: aboutPageData.metadata.title,
    description: aboutPageData.metadata.description,
    type: "website",
  },
};

// AboutPage and BreadcrumbList Schema for SEO
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Vision and Path",
  description:
    "Vision and Path is a leading job placement and career services company helping professionals advance their careers through expert coaching, resume optimization, and proven placement strategies.",
  mainEntity: {
    "@type": "Organization",
    name: "Vision and Path",
    description:
      "Professional job placement and career services.",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 50,
    },
    foundingDate: "2009",
    knowsAbout: [
      "Career Coaching",
      "Job Placement",
      "Resume Writing",
      "Interview Preparation",
      "Salary Negotiation",
      "Career Development",
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://visionandpath.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item: "https://visionandpath.com/about",
    },
  ],
};

const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutUsSection />
    </>
  );
};

export default page;
