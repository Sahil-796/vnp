import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import FAQSection from "@/components/FAQSection";
import { PlacementBridge } from "@/components/PlacementBridge";

const siteUrl = "https://visionandpath.com";

// Homepage-specific FAQ Schema for rich snippets - explicitly defined for Google validation
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does your job placement service work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our job placement service connects qualified candidates with top employers through personalized career matching, resume optimization, and direct employer partnerships. We assess your skills, experience, and career goals to match you with relevant job opportunities that align with your professional aspirations and salary expectations.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it typically take to get placed in a job?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Job placement timelines vary based on your industry, experience level, and job market conditions. On average, our candidates receive job offers within 2-6 weeks. We expedite the process through our extensive employer network, professional resume services, and interview coaching to help you land your dream job faster.",
      },
    },
    {
      "@type": "Question",
      name: "What types of jobs and industries do you specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in placing candidates across multiple industries including technology, finance, healthcare, marketing, sales, operations, and management. Our job placement services cover entry-level positions, mid-career roles, senior management, and executive positions in both Fortune 500 companies and high-growth startups.",
      },
    },
    {
      "@type": "Question",
      name: "What is your job placement success rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We maintain a 95% job placement success rate within 2-6 weeks for active candidates. Our high success rate is achieved through personalized career counseling, extensive employer partnerships, professional development resources, and ongoing support throughout your entire job search journey.",
      },
    },
    {
      "@type": "Question",
      name: "What career counseling services do you provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our comprehensive career counseling includes one-on-one career coaching, skills assessment, career path planning, industry insights, professional development guidance, and personalized job search strategies. We help you identify your strengths, set achievable career goals, and create actionable plans for professional growth.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer remote job placement services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we actively place candidates in remote, hybrid, and flexible work arrangements. Our extensive network includes employers offering work-from-home opportunities, remote-first positions, and location-independent careers across various industries.",
      },
    },
    {
      "@type": "Question",
      name: "How will the resume services help?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We have experts who have worked on ATS portals of our Direct Clients who will create ATS-optimized, professionally formatted resumes that highlight your achievements, skills, and experience with enhanced ATS Score to maximize your visibility to recruiters and hiring managers.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide salary negotiation assistance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our career coaches provide expert salary negotiation strategies, market salary research, compensation benchmarking, and negotiation scripts. We help you understand your market value, confidently discuss compensation packages, and secure offers that reflect your worth and experience.",
      },
    },
  ],
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
