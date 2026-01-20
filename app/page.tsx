import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import FAQSection from "@/components/FAQSection";
import { Metadata } from "next";

const siteUrl = "https://visionandpath.com";

export const metadata: Metadata = {
  title: "Expert Job Placement & Career Services",
  description:
    "Land your dream job with Vision and Path's expert job placement services. Get personalized career coaching, ATS-optimized resume writing, interview preparation, and salary negotiation support. 95% success rate in 90 days.",
  keywords: [
    "job placement",
    "career services",
    "career coaching",
    "resume writing",
    "interview preparation",
    "job search",
    "career counseling",
    "employment services",
    "professional development",
    "career assessment",
    "salary negotiation",
    "job matching",
  ],
  openGraph: {
    title:
      "Professional Job Placement Services | Career Coaching & Resume Help",
    description:
      "Land your dream job with expert career coaching, resume optimization, and interview prep. 95% success rate.",
    url: siteUrl,
    siteName: "Vision and Path",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vision and Path - Professional Job Placement Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Job Placement Services | Vision and Path",
    description:
      "Land your dream job with expert career coaching, resume optimization, and interview prep. 95% success rate.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

// FAQ Schema for home page
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does your job placement service work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our job placement service connects qualified candidates with top employers through personalized career matching, resume optimization, and direct employer partnerships. We assess your skills, experience, and career goals to match you with relevant job opportunities.",
      },
    },
    {
      "@type": "Question",
      name: "What is your job placement success rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We maintain a 95% job placement success rate within 2-6 weeks for active candidates through personalized career counseling, extensive employer partnerships, and ongoing support throughout your entire job search journey.",
      },
    },
    {
      "@type": "Question",
      name: "Do you charge for job placement services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our job placement services provide professional value to enhance your career profile, so there is a service charge for our comprehensive career coaching, ATS optimization, interview preparation, and job mapping services.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get placed in a job?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On average, our candidates receive job offers within 2-6 weeks. We expedite the process through our extensive employer network, professional resume services, and interview coaching to help you land your dream job faster.",
      },
    },
  ],
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
      item: siteUrl,
    },
  ],
};

export default function Page() {
  return (
    <div>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
