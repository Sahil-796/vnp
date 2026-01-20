import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import FAQSection from "@/components/FAQSection";
import { LogoCloud } from "@/components/ui/logo-cloud-2";

const siteUrl = "https://www.visionandpath.com";

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

      <div className="mb-12 md:mb-24 max-w-[85vw] mx-auto">
        <p className="text-center text-muted-foreground mb-8 text-sm font-semibold uppercase tracking-widest">
          Trusted by Top Innovators
        </p>
        <LogoCloud />
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
