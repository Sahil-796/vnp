import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import FAQSection from "@/components/FAQSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision and Path",
  description:
    "Land your dream job with Vision and Path's expert job placement services. Get personalized career coaching, ATS-optimized resume writing, interview preparation, and salary negotiation support. 85% success rate in 90 days.",
  openGraph: {
    title:
      "Professional Job Placement Services | Career Coaching & Resume Help",
    description:
      "Land your dream job with expert career coaching, resume optimization, and interview prep. 85% success rate.",
  },
};

// BreadcrumbList Schema for home page
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
  ],
};

export default function Page() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-[85vw] mx-auto mt-24">
        <Hero />
      </div>

      <div className="max-w-[85vw] mx-auto">
        <Services />
      </div>

      <div className="max-w-[85vw] mx-auto">
        <WhyChooseUs />
        <Testimonials />
        <FAQSection />
      </div>
    </div>
  );
}
