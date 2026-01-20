import {
  Award,
  BarChart3,
  Building2,
  Calendar,
  Home,
  Lightbulb,
  PaintBucket,
  Pen,
  PenTool,
  Ruler,
  Settings,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export const landingPageData = {
  hero: {
    titlep1: "Career guidance that",
    titlep2: "Leads to Real Career Growth",
    subtitle:
      "Get the Right Career Advice from Industry Experts",
    ctap: "Get Started Now",
    desc: "Unlock the potential of your business with our comprehensive suite of tools designed to streamline your workflow and boost productivity.",
    ctad: "Learn More",
  },

  services: {
    title: "Our Services",
    desc: "We provide career-focused services designed to guide, support, and accelerate your professional growth.",
    content: [
      {
        title: "Personalized Career Assessment",
        desc: "Understand your strengths, interests, and career direction with a detailed assessment. Gain clarity and make informed decisions about your future with expert guidance.",
        imgsrc:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop",
        ctaText: "Start Assessment",
      },
      {
        title: "Goal Setting & Action Planning",
        desc: "Turn your ambitions into achievable goals. We help you build a clear, structured career roadmap so you can stay focused and make consistent progress.",
        imgsrc:
          "https://images.unsplash.com/photo-1507209696998-3c532be9b2b5?q=80&w=2070&auto=format&fit=crop",
        ctaText: "Create Your Plan",
      },
      {
        title: "Skill Development",
        desc: "Build in-demand technical and soft skills through guided learning programs. Strengthen your profile and stay competitive in today’s evolving job market.",
        imgsrc:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
        ctaText: "Explore Programs",
      },
      {
        title: "Interview Preparation",
        desc: "Prepare confidently with mock interviews, real-world questions, and personalized feedback. Improve communication, structure better answers, and perform at your best.",
        imgsrc:
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
        ctaText: "Start Practicing",
      },
      {
        title: "Job Search Strategies",
        desc: "Learn proven strategies for finding opportunities, networking effectively, and applying smartly. Increase your chances of getting hired faster.",
        imgsrc:
          "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format&fit=crop",
        ctaText: "Improve Your Search",
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
    address: "123 Innovation Drive, Tech City, CA 94043",
    phone: "+1 (555) 123-4567",
    companyLinks: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
    socialLinks: [
      { label: "LinkedIn", href: "#" },
      // { label: "Facebook", href: "#" },
      // { label: "Instagram", href: "#" },
      // { label: "Twitter", href: "#" },
    ],
    copyright: "Copyright © 2025 Vision & Path. All Rights Reserved.",
  },
};

export const aboutPageData = {
  hero: {
    badge: "DISCOVER OUR MISSION",
    title: "Empowering Careers, Transforming Lives",
    description:
      "We are a dedicated team of career experts, recruiters, and industry professionals committed to connecting talented individuals with their dream careers. With personalized guidance and proven strategies, we transform job searches into career success stories.",
  },
  features: [
    {
      icon: Pen,
      title: "Career Assessment",
      description:
        "Discover your professional strengths with our comprehensive career assessment services. We identify your unique skills, values, and goals to create a personalized roadmap for your ideal career path.",
      position: "left",
      iconBg: "bg-purple-100 dark:bg-purple-900/20",
      iconColor: "text-purple-600",
    },
    {
      icon: Home,
      title: "Job Matching",
      description:
        "Find your perfect career fit with our advanced job matching technology. We connect qualified candidates with top employers seeking talent that aligns with your experience and aspirations.",
      position: "left",
      iconBg: "bg-green-100 dark:bg-green-900/20",
      iconColor: "text-green-600",
    },
    {
      icon: PenTool,
      title: "Resume Building",
      description:
        "Create compelling, ATS-optimized resumes that get noticed. Our expert writers craft professional documents that highlight your achievements and position you as the ideal candidate.",
      position: "left",
      iconBg: "bg-blue-100 dark:bg-blue-900/20",
      iconColor: "text-blue-600",
    },
    {
      icon: PaintBucket,
      title: "Interview Coaching",
      description:
        "Master the art of interviewing with our expert coaching services. From behavioral questions to salary negotiations, we prepare you to confidently showcase your value to employers.",
      position: "right",
      iconBg: "bg-pink-100 dark:bg-pink-900/20",
      iconColor: "text-pink-600",
    },
    {
      icon: Ruler,
      title: "Career Strategy",
      description:
        "Our strategic planning approach ensures your job search stays on track from start to finish. We create detailed action plans with timelines, goals, and measurable milestones for success.",
      position: "right",
      iconBg: "bg-orange-100 dark:bg-orange-900/20",
      iconColor: "text-orange-600",
    },
    {
      icon: Building2,
      title: "Career Placement",
      description:
        "Watch your career goals become reality through our proven placement process. Our experienced team manages every step of your job search with dedication and professional expertise.",
      position: "right",
      iconBg: "bg-yellow-100 dark:bg-yellow-900/20",
      iconColor: "text-yellow-600",
    },
  ],
  stats: [
    {
      icon: Award,
      value: 1500,
      label: "Successful Placements",
      label2: "",
      suffix: "+",
    },
    {
      icon: Users,
      value: 500,
      label: "Direct Clients",
      label2: "(Including Fortune 500 companies)",
      suffix: "+",
    },
    { icon: Calendar, value: 10, label: "Years Experience", suffix: "+" },
    {
      icon: TrendingUp,
      value: 95,
      label: "Placement Success Rate",
      suffix: "%",
    },
  ],
  cta: {
    title: "Ready to advance your career?",
    description: "Let's unlock your professional potential together.",
    buttonText: "Start Your Journey",
  },
  centerImage: {
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcontent.imageresizer.com%2Fimages%2Fmemes%2Fgiga-chad-meme-2.jpg&f=1&nofb=1&ipt=4e05823b396caf9d0ca231beeafab284f07dbafe4a4e2793685dadf909d5ea6a",
    alt: "Vision and Path CEO - Career Success Leader",
    badge: "Aayush (CEO & Founder)",
  },
  metadata: {
    title: "About Us",
    description:
      "Learn how Vision and Path helps professionals land dream jobs through expert career coaching, resume optimization, and proven placement strategies. 15+ years experience, 85% success rate.",
  },
  labels: {
    learnMore: "Learn more",
  },
};

export const contactPageData = {
  header: {
    title: "Contact Us",
    badge: "HAVE A CHAT WITH US",
    description:
      "We'd love to hear from you. Whether you have a question about our services, want to discuss a potential project, or just want to say hello, we're here to help you start your journey.",
  },
  metadata: {
    title: "Contact Us",
    description:
      "Get in touch with Vision and Path. We're here to help you with your digital journey.",
  },
  contactInfo: [
    {
      title: "Email Us",
      description:
        "Drop us a line anytime. Our friendly team is ready to answer your questions and provide the support you need.",
      value: "hello@visionandpath.com",
      link: "mailto:hello@visionandpath.com",
    },
    {
      title: "Visit Us",
      description:
        "Come say hello at our headquarters. We believe in face-to-face connections and would love to welcome you to our office.",
      value: "123 Innovation Drive, Tech City, CA 94043",
      link: "https://maps.google.com",
    },
    {
      title: "Call Us",
      description:
        "Prefer to talk? Give us a call. We are available Monday to Friday from 8am to 5pm to discuss your needs.",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
  ],
  calendlyUrl: "https://calendly.com/rudranpatel0980/vp", // Placeholder
};

export const servicesPageData = {
  header: {
    badge: "WHAT WE OFFER",
    title: "Our Services",
    description:
      "We provide career-focused services designed to guide, support, and accelerate your professional growth.",
  },
  labels: {
    backToServices: "Back to Services",
    getStarted: "Get Started",
    keyBenefits: "Key Benefits",
    howItWorks: "How It Works",
    step: "Step",
  },
  metadata: {
    title: "Services",
    description:
      "Explore our comprehensive range of services designed to help you succeed.",
  },
  content: [
    {
      title: "Personalized Career Assessment",
      slug: "career-assessment",
      desc: "Understand your strengths, interests, and career direction with a detailed assessment. Gain clarity and make informed decisions about your future with expert guidance.",
      details: {
        longDescription:
          "Our Career Assessment service helps you understand your personality, skills, and aspirations so you can make confident, informed career decisions. Through structured evaluation and expert consultation, we help you discover your unique strengths and identify the career paths that align with your goals.",
        benefits: [
          "Clear understanding of strengths and interests",
          "Better career clarity and direction",
          "Reduced confusion about future choices",
          "More confident career decisions",
        ],
        process: [
          "Comprehensive assessment of skills, interests, and goals",
          "In-depth one-on-one discussion with career expert",
          "Personalized insights and tailored recommendations",
          "Clear action plan with next steps for growth",
        ],
      },
      features: [
        "Personalized evaluation tailored to your unique profile",
        "Expert guidance for clarity and strategic direction",
        "Actionable recommendations for career improvement",
      ],
      imgsrc:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop",
      ctaText: "Start Assessment",
      color: {
        bg: "bg-emerald-100 dark:bg-emerald-900/20",
        accent: "text-emerald-700 dark:text-emerald-300",
        blob: "bg-emerald-200 dark:bg-emerald-800/40",
      },
    },

    {
      title: "Goal Setting & Action Planning",
      slug: "goal-setting",
      desc: "Turn your ambitions into achievable goals. We help you build a clear, structured career roadmap so you can stay focused and make consistent progress.",
      details: {
        longDescription:
          "This service helps you define meaningful goals and break them into actionable steps so you stay focused and consistent. We work with you to create a realistic, personalized roadmap that turns your career aspirations into concrete milestones.",
        benefits: [
          "Clear short-term and long-term career goals",
          "Stronger focus and sustained motivation",
          "Structured roadmap for measurable success",
          "Better accountability and consistency in progress",
        ],
        process: [
          "Understanding your current situation and aspirations",
          "Defining realistic and meaningful career goals",
          "Breaking goals into actionable, manageable steps",
          "Tracking progress and refining your approach",
        ],
      },
      features: [
        "Personalized career roadmap aligned with your goals",
        "Step-by-step execution plan with clear milestones",
        "Practical strategies for maintaining consistency",
      ],
      imgsrc:
        "https://images.unsplash.com/photo-1507209696998-3c532be9b2b5?q=80&w=2070&auto=format&fit=crop",
      ctaText: "Create Your Plan",
      color: {
        bg: "bg-rose-100 dark:bg-rose-900/20",
        accent: "text-rose-700 dark:text-rose-300",
        blob: "bg-rose-200 dark:bg-rose-800/40",
      },
    },

    {
      title: "Skill Development",
      slug: "skill-development",
      desc: "Build in-demand technical and soft skills through guided learning programs. Strengthen your profile and stay competitive in today's evolving job market.",
      details: {
        longDescription:
          "We help you identify skill gaps and focus on the most relevant skills for your career so your growth is intentional and impactful. Our structured approach ensures you develop both technical expertise and essential soft skills that employers value.",
        benefits: [
          "Improved employability and market competitiveness",
          "Stronger professional confidence and capability",
          "Better alignment with current industry needs",
          "Sustainable long-term career growth",
        ],
        process: [
          "Identifying current skill gaps and opportunities",
          "Selecting high-impact skills to focus on first",
          "Guided learning direction with resources and support",
          "Tracking improvement and celebrating progress",
        ],
      },
      features: [
        "Career-focused skill guidance tailored to your industry",
        "Support for both technical and essential soft skills",
        "Structured improvement approach with clear milestones",
      ],
      imgsrc:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
      ctaText: "Explore Programs",
      color: {
        bg: "bg-indigo-100 dark:bg-indigo-900/20",
        accent: "text-indigo-700 dark:text-indigo-300",
        blob: "bg-indigo-200 dark:bg-indigo-800/40",
      },
    },

    {
      title: "Interview Preparation",
      slug: "interview-preparation",
      desc: "Prepare confidently with mock interviews, real-world questions, and personalized feedback. Improve communication, structure better answers, and perform at your best.",
      details: {
        longDescription:
          "Our Interview Preparation service helps you build confidence and master the art of interviewing. Through realistic mock interviews, expert feedback, and proven frameworks, you'll learn to communicate your value effectively and handle any interview situation with poise.",
        benefits: [
          "Sharper and more impactful interview answers",
          "Higher confidence under pressure and in challenging situations",
          "Stronger communication skills and executive presence",
          "Better performance in competitive interview processes",
        ],
        process: [
          "Evaluation of your current interview skills and experience",
          "High-quality mock interview sessions with real-world scenarios",
          "Detailed, actionable feedback and answer refinement",
          "Coaching on delivery, body language, and presence",
        ],
      },
      features: [
        "Realistic mock interviews with industry-specific questions",
        "Deep personalized feedback on content and delivery",
        "Proven frameworks for structuring compelling answers",
      ],
      imgsrc:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
      ctaText: "Start Practicing",
      color: {
        bg: "bg-amber-100 dark:bg-amber-900/20",
        accent: "text-amber-700 dark:text-amber-300",
        blob: "bg-amber-200 dark:bg-amber-800/40",
      },
    },

    {
      title: "Job Search Strategies",
      slug: "job-search-strategies",
      desc: "Learn proven strategies for finding opportunities, networking effectively, and applying smartly. Increase your chances of getting hired faster.",
      details: {
        longDescription:
          "This service helps you design a strategic, system-based job search approach that consistently generates interviews instead of wasted effort. Learn how to target the right opportunities, network effectively, and present yourself as the ideal candidate.",
        benefits: [
          "Higher quality job opportunities aligned with your goals",
          "Reduced wasted effort on random applications",
          "More interview callbacks and meaningful conversations",
          "Better control and efficiency in your job search",
        ],
        process: [
          "Understanding your ideal roles and target companies",
          "Designing your personalized job search system",
          "Improving outreach, networking, and application strategy",
          "Tracking results and optimizing your approach",
        ],
      },
      features: [
        "System-based job search approach for consistency",
        "Strategic targeting instead of mass applying",
        "Proven networking and outreach strategies",
      ],
      imgsrc:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format&fit=crop",
      ctaText: "Improve Your Search",
      color: {
        bg: "bg-sky-100 dark:bg-sky-900/20",
        accent: "text-sky-700 dark:text-sky-300",
        blob: "bg-sky-200 dark:bg-sky-800/40",
      },
    },
  ],
  additionalServices: {
    title: "Additional Services",
    items: [
      {
        title: "Resume Building",
        slug: "resume-building",
        desc: "Professional, ATS-optimized resumes that showcase your true potential.",
        ctaText: "Learn More",
      },
    ],
  },
  // Hidden service - accessible via direct URL but not shown in main grid
  hiddenServices: [
    {
      title: "Resume Building",
      slug: "resume-building",
      desc: "Your resume is often the first impression you make on a potential employer. We craft professional, ATS-optimized resumes that showcase your true potential.",
      details: {
        longDescription:
          "Stand out in a crowded job market with a resume that tells your unique professional story. Our expert resume builders work closely with you to create a compelling, ATS-optimized resume that highlights your achievements and positions you as the ideal candidate for your target roles.",
        benefits: [
          "Increased interview callback rates",
          "ATS-compliant formatting ensuring deliverability",
          "Clear and concise articulation of your value proposition",
          "Tailored content for your target industry and role",
        ],
        process: [
          "Initial consultation to understand your career goals",
          "In-depth analysis of your existing resume and experience",
          "Drafting a new, optimized resume with keyword targeting",
          "Final review and refinements based on your feedback",
        ],
      },
      features: [
        "Expert analysis of your career history to highlight achievements",
        "Modern formatting and keyword optimization for ATS compliance",
        "Compelling storytelling to present your professional journey",
      ],
      imgsrc:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
      ctaText: "Get Your Resume Review",
      color: {
        bg: "bg-stone-100 dark:bg-stone-900/20",
        accent: "text-stone-700 dark:text-stone-300",
        blob: "bg-stone-200 dark:bg-stone-800/40",
      },
    },
  ],
};
