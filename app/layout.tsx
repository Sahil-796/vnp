import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ExpandableChat } from "@/components/ui/expandable-chat";
import { ExpandableChatDemo } from "@/components/AI";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "Vision and Path | %s",
    default: "Vision and Path - Expert Job Placement & Career Services",
  },
  description:
    "Transform your career with Vision and Path's professional job placement services. Get expert career coaching, resume optimization, interview preparation, and connect with top employers. 85% placement success rate.",
  keywords: [
    "job placement services",
    "career coaching",
    "resume optimization",
    "interview preparation",
    "career counseling",
    "job search assistance",
    "employment services",
    "professional recruitment",
    "career development",
    "salary negotiation",
    "ATS resume optimization",
    "LinkedIn profile optimization",
    "career transition services",
    "remote job placement",
    "executive job placement",
    "career advancement",
    "job matching services",
    "professional development",
    "hiring solutions",
    "talent acquisition",
  ],

  openGraph: {
    title: "Vision and Path - Expert Job Placement & Career Services",
    description:
      "Professional job placement services. Career coaching, resume optimization, and interview prep to land your dream job.",
    url: "https://visionandpath.com",
    siteName: "Vision and Path",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Vision and Path - Job Placement and Career Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
  },
};

// Organization Schema for SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vision and Path",
  url: "https://visionandpath.com",
  logo: "https://visionandpath.com/logo.png",
  description:
    "Professional job placement and career services helping candidates land their dream jobs with expert coaching, resume optimization, and interview preparation.",
  sameAs: [
    "https://www.linkedin.com/company/visionandpath",
    "https://twitter.com/visionandpath",
    "https://www.facebook.com/visionandpath",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Career Services",
    email: "contact@visionandpath.com",
  },
};

// WebSite Schema for SEO
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Vision and Path",
  url: "https://visionandpath.com",
  description:
    "Expert job placement services, career coaching, and professional development to accelerate your career success.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://visionandpath.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${outfit.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <Navbar />
        {children}
        <ExpandableChatDemo />
        <Footer />
      </body>
    </html>
  );
}
