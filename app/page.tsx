import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import FAQSection from "@/components/FAQSection";
import ClientsSection from "@/components/ClientsSection";
import { Metadata } from "next";

const siteUrl = "https://visionandpath.com";

export const metadata: Metadata = {
  title: "Expert Job Placement & Career Services",
  description:
    "Land your dream job with Vision and Path's comprehensive career services. Get personalized career coaching, ATS-optimized resume writing, interview preparation, skill development, goal setting, and professional job placement support tailored to your career goals.",
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
      "Transform your career with expert career coaching, resume optimization, interview preparation, skill development, and personalized job placement services designed to accelerate your professional success.",
    url: siteUrl,
    siteName: "Vision and Path",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Vision and Path - Professional Job Placement Services",
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
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Job Placement Services | Vision and Path",
    description:
      "Transform your career with expert career coaching, resume optimization, interview preparation, skill development, and personalized job placement services designed to accelerate your professional success.",
    images: [`${siteUrl}/og-image.png`],
    site: "@visionandpath",
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
        text: "Our comprehensive job placement service connects qualified candidates with top employers through personalized career matching, resume optimization, and strategic employer partnerships. We assess your skills, experience, and career goals to match you with relevant opportunities that align with your professional aspirations.",
      },
    },
    {
      "@type": "Question",
      name: "What types of career services do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer a comprehensive range of career services including personalized career assessment, goal setting and action planning, skill development programs, professional interview preparation, job search strategies, ATS-optimized resume building, and dedicated job placement support tailored to your unique career path.",
      },
    },
    {
      "@type": "Question",
      name: "Do you charge for job placement services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our job placement services provide professional value to enhance your career profile. We offer various service packages including comprehensive career coaching, ATS optimization, interview preparation, and personalized job placement support designed to deliver measurable results for your career advancement.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get placed in a job?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Job placement timelines vary based on your industry, experience level, and job market conditions. We work diligently to expedite your job search through our extensive employer network, professional resume services, strategic interview coaching, and personalized career guidance throughout the entire process.",
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

      <ClientsSection />

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
