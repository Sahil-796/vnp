import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import FAQSection from "@/components/FAQSection";
import { PlacementBridge } from "@/components/PlacementBridge";
import { landingPageData } from "@/constants";

const siteUrl = "https://visionandpath.com";

// Homepage-specific FAQ Schema for rich snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: Object.values(landingPageData.faq.faqData)
    .flat()
    .slice(0, 10)
    .map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
};

// Service schema for rich snippets
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Career Placement Services",
  provider: {
    "@type": "Organization",
    name: "Vision and Path",
    url: siteUrl,
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Career Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Career Assessment",
          description: "Comprehensive career evaluation to identify strengths and ideal career paths",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Job Placement",
          description: "Expert job placement services connecting candidates with top employers",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Interview Preparation",
          description: "Professional interview coaching with mock interviews and personalized feedback",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Resume Optimization",
          description: "ATS-optimized resume writing and professional document creation",
        },
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      {/* Homepage-specific structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <div className="max-w-[85vw] mx-auto mt-24">
        <Hero />
      </div>

      <div className="max-w-[85vw] mx-auto">
        <PlacementBridge />
      </div>

      <div className="max-w-[85vw] mx-auto">
        <Services />
      </div>

      <div className="max-w-[85vw] mx-auto">
        <WhyChooseUs />
        <Testimonials />
        <FAQSection />
      </div>
    </>
  );
}
