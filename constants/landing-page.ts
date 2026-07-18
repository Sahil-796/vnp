import {
  Award,
  BarChart3,
  Lightbulb,
  Settings,
  Users,
  Zap,
} from "lucide-react";
import { siteInfo } from "./site-info";

export const landingPageData = {
  hero: {
    titlep1: "Where talent and enterprises finds",
    titlep2: "Their path towards excellence",
    highlight: ["talent", "enterprises", "excellence"],
    subtitle:
      "We help students and professionals build the right career path, while helping companies find dependable, role-ready candidates.",
    ctap: "Get Career or Hiring Support",
    desc: "Move your career forward with focused guidance, practical coaching, and services designed around real employment outcomes.",
    ctad: "Explore Services",
  },

  services: {
    title: "Our Services",
    desc: "We provide career-focused services designed to guide, support, and accelerate your professional growth.",
    content: [
      {
        title: "Personalized Career Assessment",
        slug: "career-assessment",
        desc: "Understand your strengths, work style, experience, and career direction through a guided assessment. We help you identify the right roles, industries, growth gaps, and next moves so your career decisions feel focused instead of random.",
        imgsrc:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop",
        ctaText: "Start Assessment",
      },
      {
        title: "Goal Setting & Action Planning",
        slug: "goal-setting",
        desc: "Turn broad ambitions into a practical roadmap with clear milestones, weekly priorities, and measurable outcomes. We help you plan applications, learning, networking, interview prep, and career moves with structure.",
        imgsrc:
          "https://images.unsplash.com/photo-1507209696998-3c532be9b2b5?q=80&w=2070&auto=format&fit=crop",
        ctaText: "Create Your Plan",
      },
      {
        title: "Skill Development",
        slug: "skill-development",
        desc: "Build the technical, communication, leadership, and job-readiness skills employers look for. We map your current capabilities against target roles and guide you toward the highest-impact learning first.",
        imgsrc:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
        ctaText: "Explore Programs",
      },
      {
        title: "Interview Preparation",
        slug: "interview-preparation",
        desc: "Prepare for recruiter screens, hiring manager rounds, behavioral interviews, technical discussions, and final conversations. Practice with realistic questions, sharper stories, and feedback that improves both content and delivery.",
        imgsrc:
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
        ctaText: "Start Practicing",
      },
      {
        title: "Job Search Strategies",
        slug: "job-search-strategies",
        desc: "Replace scattered applications with a targeted search system. We help you choose better roles, improve outreach, track applications, use referrals, strengthen LinkedIn, and follow up with confidence.",
        imgsrc:
          "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format&fit=crop",
        ctaText: "Improve Your Search",
      },
      {
        title: "Hiring Services",
        slug: "hiring-services",
        desc: "For businesses that need dependable talent, we support hiring from role definition to candidate shortlisting. We help clarify requirements, screen profiles, coordinate interviews, and connect teams with candidates who match the work, culture, and timeline.",
        imgsrc:
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2070&auto=format&fit=crop",
        ctaText: "Hire With Us",
      },
    ],
  },

  whyChooseUs: {
    title: "Why Choose Us for Your Career Success?",
    description:
      "Discover why top professionals trust us for career advancement, job placement, and professional development solutions",
    content: [
      {
        title: "Proven Career Placement Expertise",
        description:
          "With our experts having years of experience in job placement and career consulting, we deliver personalized employment solutions that accelerate your professional growth.",
        icon: Award,
        iconColor: "text-yellow-600",
        color: "#F7F3E8", // Pastel Yellow/Beige
        pinColor: "bg-yellow-600",
        iconBg: "bg-yellow-200",
        shadow: "shadow-[0_10px_40px_-15px_rgba(234,179,8,0.2)]",
      },
      {
        title: "Personalized Career Roadmaps",
        description:
          "Tailored job search strategies and career development plans designed specifically for your skills, goals, and target industry opportunities.",
        icon: Zap,
        iconColor: "text-purple-600",
        color: "#EBE8F3", // Pastel Purple
        pinColor: "bg-purple-600",
        iconBg: "bg-purple-200",
        shadow: "shadow-[0_10px_40px_-15px_rgba(147,51,234,0.2)]",
      },
      {
        title: "Candidate-Centric Approach",
        description:
          "Your career success is our priority. We provide dedicated support, interview coaching, and resume optimization to exceed your professional aspirations.",
        icon: Users,
        iconColor: "text-pink-600",
        color: "#F9EDF0", // Pastel Pink
        pinColor: "bg-pink-600",
        iconBg: "bg-pink-200",
        shadow: "shadow-[0_10px_40px_-15px_rgba(236,72,153,0.2)]",
      },
      {
        title: "Cutting-Edge Recruitment Technology",
        description:
          "Leveraging advanced AI-powered job matching, applicant tracking systems, and market analytics to connect you with premier employment opportunities faster.",
        icon: Lightbulb,
        iconColor: "text-blue-600",
        color: "#CDE1E4", // Pastel Blue
        pinColor: "bg-blue-600",
        iconBg: "bg-blue-200",
        shadow: "shadow-[0_10px_40px_-15px_rgba(37,99,235,0.2)]",
      },
      {
        title: "Flexible Career Solutions",
        description:
          "Whether seeking full-time positions, contract roles, remote work, or career transitions, we adapt our job placement services to your evolving professional needs.",
        icon: Settings,
        iconColor: "text-green-600",
        color: "#D6E3D6", // Pastel Green
        pinColor: "bg-green-600",
        iconBg: "bg-green-200",
        shadow: "shadow-[0_10px_40px_-15px_rgba(22,163,74,0.2)]",
      },
      {
        title: "Guaranteed Quality Placements",
        description:
          "Committed to matching you with top employers and high-quality career opportunities that ensure long-term job satisfaction and professional advancement.",
        icon: BarChart3,
        iconColor: "text-orange-600",
        color: "#F3EBE8", // Pastel Orange
        pinColor: "bg-orange-600",
        iconBg: "bg-orange-200",
        shadow: "shadow-[0_10px_40px_-15px_rgba(234,88,12,0.2)]",
      },
    ],
  },

  testimonials: {
    title: "Success Stories from Our Placed Candidates",
    desc: "Discover how thousands of professionals landed their dream jobs and accelerated their careers with our expert job placement services.",
    content: [
      {
        text: "This career placement service transformed my job search journey. Within 3 weeks, I landed my dream role at a Fortune 500 company. Their resume optimization and interview coaching were game-changers!",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Sarah Mitchell",
        role: "Senior Software Engineer",
      },
      {
        text: "After struggling with my job search for months, their personalized career consulting helped me secure multiple offers. The professional network connections and industry insights were invaluable.",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Rajesh Kumar",
        role: "IT Director",
      },
      {
        text: "The recruitment team provided exceptional support throughout my career transition. From resume building to salary negotiation, they guided me every step, landing me a 40% salary increase!",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Priya Sharma",
        role: "Customer Success Manager",
      },
      {
        text: "Their job placement expertise and employer partnerships helped me transition from startup to enterprise. The professional development resources and career coaching exceeded all expectations.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Michael Johnson",
        role: "Product Manager",
      },
      {
        text: "Outstanding career placement service! Their AI-powered job matching connected me with roles perfectly aligned with my skills. Secured my ideal position in just 2 weeks with competitive compensation.",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Emily Chen",
        role: "Senior Project Manager",
      },
      {
        text: "The employment services exceeded my expectations. Their industry expertise, interview preparation, and LinkedIn profile optimization helped me land multiple job offers from top tech companies.",
        image:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Ankit Patel",
        role: "Data Analyst",
      },
      {
        text: "Thanks to their career advancement strategies and professional networking events, I successfully pivoted my career into digital marketing. The personalized job search support was phenomenal!",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
        name: "David Rodriguez",
        role: "Marketing Director",
      },
      {
        text: "They understood my career goals perfectly and connected me with premium employment opportunities. The dedicated career coach and recruitment specialists made my job placement seamless and stress-free.",
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Neha Gupta",
        role: "Sales Director",
      },
      {
        text: "Using their professional job placement services, I secured a remote position with excellent work-life balance. Their career counseling and employer connections significantly boosted my job search success.",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
        name: "James Anderson",
        role: "E-commerce Specialist",
      },
    ],
  },

  faq: {
    title: "Frequently Asked Questions About Job Placement Services",
    subtitle: "Everything you need to know about landing your dream job",
    categories: {
      "job-search": "Job Search & Placement",
      "career-services": "Career Services",
      "resume-interview": "Resume & Interview Prep",
      "salary-benefits": "Salary & Benefits",
    },
    faqData: {
      "job-search": [
        {
          question: "How does your job placement service work?",
          answer:
            "Our job placement service connects qualified candidates with top employers through personalized career matching, resume optimization, and direct employer partnerships. We assess your skills, experience, and career goals to match you with relevant job opportunities that align with your professional aspirations and salary expectations.",
        },
        {
          question: "How long does it typically take to get placed in a job?",
          answer:
            "Job placement timelines vary based on your industry, experience level, and job market conditions. On average, our candidates receive job offers within 2-6 weeks. We expedite the process through our extensive employer network, professional resume services, and interview coaching to help you land your dream job faster.",
        },
        {
          question: "What types of jobs and industries do you specialize in?",
          answer:
            "We specialize in placing candidates across multiple industries including technology, finance, healthcare, marketing, sales, operations, and management. Our job placement services cover entry-level positions, mid-career roles, senior management, and executive positions in both Fortune 500 companies and high-growth startups.",
        },
        {
          question: "Do you charge for job placement services?",
          answer:
            "Our job placement services will be bringing value to you & your profile, So you have to provide some value(service charge) to receive some value anywhere you go to get professional services. You will receive professional career coaching, ATS optimization, interview preparation, and job mapping services at no cost while we help you advance your career.",
        },
        {
          question: "What is your job placement success rate?",
          answer:
            "We maintain an 95% job placement success rate within 2-6 weeks for active candidates. Our high success rate is achieved through personalized career counseling, extensive employer partnerships, professional development resources, and ongoing support throughout your entire job search journey until you secure your ideal position.",
        },
      ],
      "career-services": [
        {
          question: "What career counseling services do you provide?",
          answer:
            "Our comprehensive career counseling includes one-on-one career coaching, skills assessment, career path planning, industry insights, professional development guidance, and personalized job search strategies. We help you identify your strengths, set achievable career goals, and create actionable plans for professional growth and advancement.",
        },
        {
          question:
            "Can you help with career transitions and industry changes?",
          answer:
            "Absolutely! We specialize in career transition services for professionals changing industries or roles. Our career coaches provide skills gap analysis, transferable skills identification, industry research, networking strategies, and targeted training recommendations to successfully pivot your career into new fields and opportunities.",
        },
        {
          question: "Do you offer remote job placement services?",
          answer:
            "Yes, we actively place candidates in remote, hybrid, and flexible work arrangements. Our extensive network includes employers offering work-from-home opportunities, remote-first positions, and location-independent careers across various industries, giving you access to global job opportunities and improved work-life balance.",
        },
        {
          question: "How do you match candidates with the right companies?",
          answer:
            "We use advanced AI-powered matching algorithms combined with personalized career counseling to align your skills, experience, values, and career goals with company culture, job requirements, and growth opportunities. Our recruitment specialists conduct in-depth assessments to ensure optimal employer-candidate fit for long-term career success.",
        },
        {
          question: "What ongoing support do you provide after job placement?",
          answer:
            "We provide continuous career support including onboarding assistance, 90-day follow-ups, performance coaching, salary negotiation guidance for future roles, and career advancement planning. Our commitment extends beyond initial placement to ensure your long-term professional success and job satisfaction.",
        },
      ],
      "resume-interview": [
        {
          question: "How will the resume services help ?",
          answer:
            "We have experts who have worked on ATS portals of our Direct Clients who will create ATS-optimized, professionally formatted resumes that highlight your achievements, skills, and experience with enhanced ATS Score to maximize your visibility to recruiters and hiring managers in your target industry.",
        },
        {
          question: "How do you prepare candidates for job interviews?",
          answer:
            "Our comprehensive interview preparation includes mock interviews, behavioral question coaching, technical interview practice, company research guidance, and personalized feedback. We teach proven interview techniques, help you craft compelling stories, and build confidence to excel in phone screens, video interviews, and in-person meetings.",
        },
        {
          question: "What is ATS optimization and why is it important?",
          answer:
            "ATS (Applicant Tracking System) optimization ensures your resume passes through automated screening software used by 90% of employers. We format your resume with proper keywords, relevant skills, and structured content so it ranks highly in ATS systems, significantly increasing your chances of getting noticed by recruiters and landing interviews.",
        },
        {
          question: "Can you help optimize my LinkedIn profile for job search?",
          answer:
            "Our LinkedIn optimization services include professional headline creation, compelling summary writing, experience highlighting, skills endorsements, recommendation strategies, and networking tips. An optimized LinkedIn profile increases recruiter visibility by 40%, generates more job opportunities, and establishes your professional brand in your industry.",
        },
        {
          question: "What interview questions should I prepare for?",
          answer:
            "We prepare you for common interview questions including behavioral (STAR method), situational, technical, competency-based, and culture-fit questions. Our interview coaching covers questions about strengths/weaknesses, career goals, conflict resolution, leadership examples, and salary expectations tailored to your specific industry and target role.",
        },
      ],
      "salary-benefits": [
        {
          question: "Do you provide salary negotiation assistance?",
          answer:
            "Yes, our career coaches provide expert salary negotiation strategies, market salary research, compensation benchmarking, and negotiation scripts. We help you understand your market value, confidently discuss compensation packages, negotiate benefits, sign-on bonuses, stock options, and secure offers that reflect your worth and experience.",
        },
        {
          question:
            "What is the average salary increase through your services?",
          answer:
            "Candidates using our job placement and salary negotiation services achieve an average salary increase of 15-40% compared to their previous positions. We leverage market data, employer insights, and proven negotiation techniques to help you maximize your earning potential and secure competitive compensation packages.",
        },
        {
          question: "How do you determine fair market value for a position?",
          answer:
            "We use comprehensive salary databases, industry reports, location-based cost of living analysis, years of experience, skill level assessment, and current market demand to determine fair compensation. Our data-driven approach ensures you understand competitive salary ranges and benefits packages for your target role and location.",
        },
        {
          question: "Can you help negotiate benefits beyond base salary?",
          answer:
            "Absolutely! We assist with negotiating comprehensive benefits including health insurance, retirement plans (401k matching), paid time off, flexible work arrangements, professional development budgets, performance bonuses, stock options, relocation assistance, and other perks that enhance your total compensation package.",
        },
        {
          question: "What should I know about job offer evaluation?",
          answer:
            "Proper job offer evaluation involves analyzing total compensation (base salary, bonuses, equity), benefits quality, career growth opportunities, company culture, work-life balance, commute/remote options, and long-term career prospects. We provide detailed offer analysis and comparison tools to help you make informed decisions about your career moves.",
        },
      ],
    },
  },

  footer: {
    titlep1: "Vision",
    titlep2: "& Path",
    address: siteInfo.addressDisplay,
    phone: siteInfo.phoneDisplay,
    companyLinks: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
    socialLinks: [
      {
        label: "LinkedIn",
        href: siteInfo.social.linkedin,
      },
      {
        label: "Instagram",
        href: siteInfo.social.instagram,
      },
      // { label: "Facebook", href: "#" },
      // { label: "Twitter", href: "#" },
    ],
    copyright: "Copyright © 2026 Vision & Path. All Rights Reserved.",
  },
};
