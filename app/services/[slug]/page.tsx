import { servicesPageData } from "@/constants";
import { notFound } from "next/navigation";
import { ServiceDetailClient } from "@/components/ServiceDetailClient";
import { Metadata } from "next";

const siteUrl = "https://visionandpath.com";

// Service-specific metadata mapping
const serviceMetadata: Record<
  string,
  {
    keywords: string[];
    ogDescription: string;
  }
> = {
  "career-assessment": {
    keywords: [
      "career assessment",
      "career evaluation",
      "skills assessment",
      "career direction",
      "career clarity",
      "strengths assessment",
      "career counseling",
      "professional assessment",
      "personality assessment",
      "career aptitude test",
      "vocational assessment",
      "career planning assessment",
    ],
    ogDescription:
      "Discover your professional strengths with our comprehensive career assessment services. Get clarity on your ideal career path with expert guidance.",
  },
  "goal-setting": {
    keywords: [
      "career goals",
      "goal setting",
      "action planning",
      "career roadmap",
      "career planning",
      "professional goals",
      "career strategy",
      "milestone planning",
      "career objectives",
      "professional planning",
      "career development plan",
      "goal achievement",
    ],
    ogDescription:
      "Turn your career ambitions into achievable goals. Build a clear, structured roadmap for consistent professional progress and success.",
  },
  "skill-development": {
    keywords: [
      "skill development",
      "professional skills",
      "technical skills",
      "soft skills",
      "career skills",
      "skill training",
      "professional development",
      "employability skills",
      "upskilling",
      "reskilling",
      "competency development",
      "career advancement skills",
    ],
    ogDescription:
      "Build in-demand technical and soft skills through guided learning programs. Stay competitive in today's evolving job market.",
  },
  "interview-preparation": {
    keywords: [
      "interview preparation",
      "mock interviews",
      "interview coaching",
      "interview skills",
      "job interview tips",
      "interview practice",
      "interview confidence",
      "behavioral interviews",
      "technical interview prep",
      "interview questions",
      "interview techniques",
      "interview success",
    ],
    ogDescription:
      "Master job interviews with mock sessions, real-world questions, and personalized feedback. Build confidence and perform at your best.",
  },
  "job-search-strategies": {
    keywords: [
      "job search",
      "job hunting",
      "job search strategies",
      "networking",
      "job applications",
      "career search",
      "employment search",
      "job opportunities",
      "job search tips",
      "effective job search",
      "job hunting techniques",
      "finding jobs",
    ],
    ogDescription:
      "Learn proven strategies for finding opportunities, networking effectively, and applying smartly. Get hired faster with our expert guidance.",
  },
  "resume-building": {
    keywords: [
      "resume writing",
      "resume optimization",
      "ATS resume",
      "professional resume",
      "resume builder",
      "CV writing",
      "resume review",
      "resume formatting",
      "resume services",
      "ATS optimization",
      "resume keywords",
      "career resume",
    ],
    ogDescription:
      "Get a professional, ATS-optimized resume that showcases your true potential and increases interview callbacks. Expert resume writing services.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  // Search in both main content and hidden services
  const service =
    servicesPageData.content.find((s) => s.slug === slug) ||
    servicesPageData.hiddenServices.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    };
  }

  const canonicalUrl = `${siteUrl}/services/${slug}`;
  const serviceKeywords = serviceMetadata[slug]?.keywords || [];
  const ogDescription = serviceMetadata[slug]?.ogDescription || service.desc;

  return {
    title: service.title,
    description: service.desc,
    keywords: [
      ...serviceKeywords,
      "vision and path",
      "career services",
      "professional development",
      "job placement",
      "career coaching",
      "career growth",
    ],
    openGraph: {
      title: `${service.title} | Vision and Path`,
      description: ogDescription,
      url: canonicalUrl,
      siteName: "Vision and Path",
      images: [
        {
          url: service.imgsrc || "/og-image.png",
          width: 1200,
          height: 630,
          alt: service.title,
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
      title: `${service.title} | Vision and Path`,
      description: ogDescription,
      images: [service.imgsrc || "/og-image.png"],
      creator: "@visionandpath",
    },
    alternates: {
      canonical: canonicalUrl,
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
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Search in both main content and hidden services
  const service =
    servicesPageData.content.find((s) => s.slug === slug) ||
    servicesPageData.hiddenServices.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Generate structured data for the service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: service.desc,
    image: service.imgsrc,
    provider: {
      "@type": "Organization",
      name: "Vision and Path",
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} Benefits`,
      itemListElement: service.details.benefits.map((benefit, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: benefit,
        },
        position: index + 1,
      })),
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      url: `${siteUrl}/services/${slug}`,
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
        name: "Services",
        item: `${siteUrl}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${siteUrl}/services/${slug}`,
      },
    ],
  };

  // HowTo Schema for process steps
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How ${service.title} Works`,
    description: service.desc,
    step: service.details.process.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: `Step ${index + 1}`,
      text: step,
    })),
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
        }}
      />
      <ServiceDetailClient service={service} />
    </>
  );
}

// Generate static params for all services at build time
export async function generateStaticParams() {
  const allServices = [
    ...servicesPageData.content,
    ...servicesPageData.hiddenServices,
  ];

  return allServices.map((service) => ({
    slug: service.slug,
  }));
}
