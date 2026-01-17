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
    titlep2: "moves you forward",
    subtitle:
      "Crafting superior experiences with precision and innovative design solutions.",
    ctap: "Get Started Now",
    desc: "Unlock the potential of your business with our comprehensive suite of tools designed to streamline your workflow and boost productivity.",
    ctad: "Learn More",
  },

  services: {
    title: "Our Services",
    desc: "We offer a wide range of services to help you achieve your career goals.",
    content: [
      {
        title: "Resume Building",
        slug: "resume-building",
        desc: "We craft professional, ATS-optimized resumes that showcase your true potential. Our experts analyze your career history to highlight your strongest achievements, ensuring you stand out in the competitive job market.",
        imgsrc:
          "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
        ctaText: "Get Your Resume Review",
      },
      {
        title: "Career Counseling",
        slug: "career-counseling",
        desc: "Navigate your professional journey with confidence. Our personalized career counseling sessions help you identify your strengths, set achievable goals, and create a roadmap for long-term success.",
        imgsrc:
          "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format&fit=crop",
        ctaText: "Book a Session",
      },
      {
        title: "Interview Prep",
        slug: "interview-prep",
        desc: "Ace your next interview with our comprehensive preparation services. From mock interviews to behavioral question strategies, we provide the feedback and practice you need to make a lasting impression.",
        imgsrc:
          "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=2070&auto=format&fit=crop",
        ctaText: "Start Practicing",
      },
    ],
  },

  whyChooseUs: {
    title: "Why Choose Us?",
    description: "Here's why businesses choose us to handle their digital needs",
    content: [
      {
        title: "Expertise",
        description:
          "We leverage over 15 years of experience to deliver high-quality, tailored solutions for every client.",
        icon: Award,
        iconColor: "text-yellow-600",
        color: "#F7F3E8", // Pastel Yellow/Beige
        pinColor: "bg-yellow-600",
        iconBg: "bg-yellow-200",
        shadow: "shadow-[0_10px_40px_-15px_rgba(234,179,8,0.2)]",
      },
      {
        title: "Custom Solutions",
        description:
          "Each solution is personalized, ensuring that your business gets the exact tools it needs to succeed.",
        icon: Zap,
        iconColor: "text-purple-600",
        color: "#EBE8F3", // Pastel Purple
        pinColor: "bg-purple-600",
        iconBg: "bg-purple-200",
        shadow: "shadow-[0_10px_40px_-15px_rgba(147,51,234,0.2)]",
      },
      {
        title: "Customer-Focused",
        description:
          "We prioritize your satisfaction and aim to exceed your expectations in every project we take on.",
        icon: Users,
        iconColor: "text-pink-600",
        color: "#F9EDF0", // Pastel Pink
        pinColor: "bg-pink-600",
        iconBg: "bg-pink-200",
        shadow: "shadow-[0_10px_40px_-15px_rgba(236,72,153,0.2)]",
      },
      {
        title: "Innovation",
        description:
          "We stay ahead of the curve, implementing the latest technologies to keep your business on the cutting edge.",
        icon: Lightbulb,
        iconColor: "text-blue-600",
        color: "#CDE1E4", // Pastel Blue
        pinColor: "bg-blue-600",
        iconBg: "bg-blue-200",
        shadow: "shadow-[0_10px_40px_-15px_rgba(37,99,235,0.2)]",
      },
      {
        title: "Flexibility",
        description:
          "We understand that businesses change, and we offer solutions that can adapt to your evolving needs.",
        icon: Settings,
        iconColor: "text-green-600",
        color: "#D6E3D6", // Pastel Green
        pinColor: "bg-green-600",
        iconBg: "bg-green-200",
        shadow: "shadow-[0_10px_40px_-15px_rgba(22,163,74,0.2)]",
      },
      {
        title: "Quality Commitment",
        description:
          "We are committed to delivering solutions that meet the highest standards of quality, ensuring long-term success.",
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
    title: "What our users say",
    desc: "Discover how thousands of teams streamline their operations with our platform.",
    content: [
      {
        text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Briana Patton",
        role: "Operations Manager",
      },
      {
        text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Bilal Ahmed",
        role: "IT Manager",
      },
      {
        text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Saman Malik",
        role: "Customer Support Lead",
      },
      {
        text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Omar Raza",
        role: "CEO",
      },
      {
        text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Zainab Hussain",
        role: "Project Manager",
      },
      {
        text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
        image:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Aliza Khan",
        role: "Business Analyst",
      },
      {
        text: "Our business functions improved with a user-friendly design and positive customer feedback.",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Farhan Siddiqui",
        role: "Marketing Director",
      },
      {
        text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Sana Sheikh",
        role: "Sales Manager",
      },
      {
        text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Hassan Ali",
        role: "E-commerce Manager",
      },
    ],
  },

  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Let's answer some questions",
    categories: {
      "web-dev": "Web Development",
      "mobile-dev": "Mobile Development",
      "ui-ux": "UI/UX Design",
      copywriting: "Copywriting",
    },
    faqData: {
      "web-dev": [
        {
          question: "What is web development?",
          answer:
            "Web development is the process of building and maintaining websites. It involves a combination of client-side and server-side programming, database management, and other web-related technologies.",
        },
        {
          question:
            "What programming languages are essential for web development?",
          answer:
            "Essential languages for web development include HTML, CSS, and JavaScript for front-end development. For back-end development, popular languages include Python, Ruby, PHP, Java, and Node.js.",
        },
        {
          question:
            "What's the difference between front-end and back-end development?",
          answer:
            "Front-end development focuses on the user interface and user experience of a website, while back-end development deals with server-side logic, databases, and application integration.",
        },
        {
          question: "How long does it typically take to develop a website?",
          answer:
            "The time to develop a website can vary greatly depending on its complexity. A simple static website might take a few days, while a complex web application could take several months or even years.",
        },
        {
          question: "What is responsive web design?",
          answer:
            "Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. It ensures that websites are accessible and visually appealing across different platforms.",
        },
      ],
      "mobile-dev": [
        {
          question: "What is mobile development?",
          answer:
            "Mobile development is the process of creating software applications that run on mobile devices such as smartphones and tablets. It involves designing, coding, and testing applications for mobile operating systems like iOS and Android.",
        },
        {
          question:
            "What's the difference between native and cross-platform mobile development?",
          answer:
            "Native development involves building separate apps for each platform using platform-specific languages (Swift for iOS, Java/Kotlin for Android). Cross-platform development uses frameworks like React Native or Flutter to build a single codebase that works on multiple platforms.",
        },
        {
          question: "What are some popular mobile app development frameworks?",
          answer:
            "Popular mobile app development frameworks include React Native, Flutter, Xamarin, Ionic, and NativeScript. Each has its own strengths and is suited for different types of projects.",
        },
        {
          question: "How do you ensure mobile app security?",
          answer:
            "Mobile app security involves practices such as secure coding, data encryption, secure authentication methods, regular security audits, and staying up-to-date with the latest security patches and best practices.",
        },
        {
          question: "What is the typical mobile app development lifecycle?",
          answer:
            "The typical mobile app development lifecycle includes stages such as planning, design, development, testing, deployment, and maintenance. It often follows an iterative process with continuous updates and improvements.",
        },
      ],
      "ui-ux": [
        {
          question: "What is UI/UX design?",
          answer:
            "UI (User Interface) design focuses on the visual elements of a digital product, while UX (User Experience) design deals with the overall feel and functionality of the product. Together, they aim to create products that are both visually appealing and easy to use.",
        },
        {
          question: "What's the difference between UI and UX design?",
          answer:
            "UI design focuses on the look and layout of a product's interface, including colors, typography, and visual elements. UX design is broader, encompassing the entire user journey and how users interact with the product.",
        },
        {
          question: "What tools do UI/UX designers commonly use?",
          answer:
            "Common tools for UI/UX design include Sketch, Figma, Adobe XD, InVision, and Protopie for design and prototyping. Research and testing tools might include UserTesting, Hotjar, and Optimal Workshop.",
        },
        {
          question: "What is a user persona?",
          answer:
            "A user persona is a fictional representation of your ideal user or customer. It's based on user research and includes details about the persona's background, goals, challenges, and behaviors. Personas help guide design decisions by keeping the focus on the end-user.",
        },
        {
          question: "What is the importance of user testing in UI/UX design?",
          answer:
            "User testing is crucial in UI/UX design as it provides direct feedback from actual users. It helps identify usability issues, validate design decisions, and ensure that the product meets user needs and expectations.",
        },
      ],
      copywriting: [
        {
          question: "What is copywriting?",
          answer:
            "Copywriting is the act of writing text for the purpose of advertising or other forms of marketing. The product, called copy, is written content that aims to increase brand awareness and ultimately persuade a person or group to take a particular action.",
        },
        {
          question:
            "What's the difference between copywriting and content writing?",
          answer:
            "While both involve writing, copywriting is specifically aimed at persuasion and driving action (like making a purchase), while content writing is more focused on informing, educating, or entertaining the reader.",
        },
        {
          question: "What are some key elements of effective copywriting?",
          answer:
            "Key elements of effective copywriting include understanding the target audience, crafting compelling headlines, focusing on benefits rather than features, using persuasive language, and including a clear call-to-action.",
        },
        {
          question: "How important is SEO in copywriting?",
          answer:
            "SEO (Search Engine Optimization) is very important in copywriting, especially for digital content. It helps ensure that your copy reaches your target audience by making it more visible in search engine results. This involves using relevant keywords, creating quality content, and following SEO best practices.",
        },
        {
          question: "What is a call-to-action (CTA) in copywriting?",
          answer:
            "A call-to-action (CTA) is a prompt in your copy that tells the reader what to do next. It's usually a command verb like 'Buy Now,' 'Sign Up,' or 'Learn More.' An effective CTA is clear, compelling, and creates a sense of urgency.",
        },
      ],
    },
  },

  footer: {
    titlep1: "Vision & Path",
    titlep2: "",
    address: "123 Innovation Drive, Tech City, CA 94043",
    phone: "+1 (555) 123-4567",
    companyLinks: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
    socialLinks: [
      { label: "Facebook", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Twitter", href: "#" },
    ],
    copyright: "Copyright © 2025 Vision & Path. All Rights Reserved.",
  },
};

export const aboutPageData = {
  hero: {
    badge: "DISCOVER OUR STORY",
    title: "About Us",
    description:
      "We are a passionate team of designers and architects dedicated to creating beautiful, functional spaces that inspire and elevate everyday living. With attention to detail and commitment to excellence, we transform visions into reality.",
  },
  features: [
    {
      icon: Pen,
      title: "Interior",
      description:
        "Transform your living spaces with our expert interior design services. We blend functionality and aesthetics to create spaces that reflect your unique style and personality.",
      position: "left",
      iconBg: "bg-purple-100 dark:bg-purple-900/20",
      iconColor: "text-purple-600",
    },
    {
      icon: Home,
      title: "Exterior",
      description:
        "Make a lasting impression with stunning exterior designs that enhance curb appeal and create harmonious connections between architecture and landscape.",
      position: "left",
      iconBg: "bg-green-100 dark:bg-green-900/20",
      iconColor: "text-green-600",
    },
    {
      icon: PenTool,
      title: "Design",
      description:
        "Our innovative design process combines creativity with practicality, resulting in spaces that are both beautiful and functional for everyday living.",
      position: "left",
      iconBg: "bg-blue-100 dark:bg-blue-900/20",
      iconColor: "text-blue-600",
    },
    {
      icon: PaintBucket,
      title: "Decoration",
      description:
        "Elevate your space with our curated decoration services. From color schemes to textiles and accessories, we perfect every detail to bring your vision to life.",
      position: "right",
      iconBg: "bg-pink-100 dark:bg-pink-900/20",
      iconColor: "text-pink-600",
    },
    {
      icon: Ruler,
      title: "Planning",
      description:
        "Our meticulous planning process ensures every project runs smoothly from concept to completion, with careful attention to timelines, budgets, and requirements.",
      position: "right",
      iconBg: "bg-orange-100 dark:bg-orange-900/20",
      iconColor: "text-orange-600",
    },
    {
      icon: Building2,
      title: "Execution",
      description:
        "Watch your dream space come to life through our flawless execution. Our skilled team handles every aspect of implementation with precision and care.",
      position: "right",
      iconBg: "bg-yellow-100 dark:bg-yellow-900/20",
      iconColor: "text-yellow-600",
    },
  ],
  stats: [
    { icon: Award, value: 150, label: "Projects Completed", suffix: "+" },
    { icon: Users, value: 1200, label: "Happy Clients", suffix: "+" },
    { icon: Calendar, value: 12, label: "Years Experience", suffix: "" },
    { icon: TrendingUp, value: 98, label: "Satisfaction Rate", suffix: "%" },
  ],
  cta: {
    title: "Ready to transform your space?",
    description: "Let's create something beautiful together.",
    buttonText: "Get Started",
  },
  centerImage: {
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcontent.imageresizer.com%2Fimages%2Fmemes%2Fgiga-chad-meme-2.jpg&f=1&nofb=1&ipt=4e05823b396caf9d0ca231beeafab284f07dbafe4a4e2793685dadf909d5ea6a",
    alt: "Image of Aayush",
    badge: "Aayush (CEO)",
  },
  metadata: {
    title: "About",
    description: "Learn more about Vision and Path.",
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
    description: "Get in touch with Vision and Path. We're here to help you with your digital journey.",
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
    description: "We offer a wide range of services to help you achieve your career goals. Discover how we can help you move forward.",
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
    description: "Explore our comprehensive range of services designed to help you succeed.",
  },
  content: [
    {
      title: "Resume Building",
      slug: "resume-building",
      desc: "Your resume is often the first impression you make on a potential employer. We craft professional, ATS-optimized resumes that showcase your true potential.",
      details: {
        longDescription: "Stand out in a crowded job market with a resume that tells your unique professional story. Our Resume Building service goes beyond simple formatting; we analyze your career trajectory, identify your key achievements, and present them in a compelling narrative that resonates with recruiters and hiring managers. We ensure your document is not only visually appealing but also optimized for Applicant Tracking Systems (ATS) to maximize your chances of getting noticed.",
        benefits: [
          "Increased interview callback rates",
          "ATS-compliant formatting ensuring deliverability",
          "Clear and concise articulation of your value proposition",
          "Tailored content for your target industry and role"
        ],
        process: [
          "Initial consultation to understand your career goals",
          "In-depth analysis of your existing resume and experience",
          "Drafting a new, optimized resume with keyword targeting",
          "Final review and refinements based on your feedback"
        ]
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
    {
      title: "Career Counseling",
      slug: "career-counseling",
      desc: "Navigate your professional journey with confidence. Our personalized career counseling sessions help you identify your strengths and set achievable goals.",
      details: {
        longDescription: "Feeling stuck or unsure about your next career move? Our Career Counseling service provides you with the clarity and direction you need. We work one-on-one with you to assess your skills, interests, and values to build a personalized roadmap for success. Whether you are a recent graduate, looking for a career pivot, or aiming for a promotion, our expert counselors offer actionable advice and support to help you achieve your professional aspirations.",
        benefits: [
          "Clarity on your career path and long-term goals",
          "Identification of your unique strengths and transferrable skills",
          "Strategies to overcome career obstacles and burnout",
          "Confidence to make informed career decisions"
        ],
        process: [
          "skills and interest assessment",
          "one-on-one coaching sessions",
          "Goal setting and action planning",
          "Ongoing support and accountability"
        ]
      },
      features: [
        "Personalized roadmap designed for your long-term success",
        "Actionable advice for recent graduates and career pivoters",
        "1-on-1 mentorship tailored to your unique aspirations",
      ],
      imgsrc:
        "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format&fit=crop",
      ctaText: "Book a Session",
      color: {
        bg: "bg-emerald-50 dark:bg-emerald-950/20",
        accent: "text-emerald-700 dark:text-emerald-400",
        blob: "bg-emerald-200 dark:bg-emerald-900/40",
      },
    },
    {
      title: "Interview Prep",
      slug: "interview-prep",
      desc: "Ace your next interview with our comprehensive preparation services. From mock interviews to behavioral question strategies, we provide the practice you need.",
      details: {
        longDescription: "Nervous about your upcoming interview? Our Interview Prep service helps you walk into the room with confidence. We conduct realistic mock interviews tailored to the role you are applying for and provide detailed feedback on your answers, body language, and delivery. Learn how to tackle tough behavioral questions using the STAR method and effectively communicate your value to potential employers.",
        benefits: [
          "Reduced interview anxiety and increased confidence",
          "Mastery of the STAR method for behavioral questions",
          "Polished and professional communication skills",
          "Ability to handle difficult questions with ease"
        ],
        process: [
          "Review of job description and company research",
          "Mock interview simulation with role-specific questions",
          "Detailed performance feedback and coaching",
          "Salary negotiation strategies"
        ]
      },
      features: [
        "Simulated real-world interview scenarios",
        "Refining answers to common and tough behavioral questions",
        "Guidance on communication, body language, and negotiation",
      ],
      imgsrc:
        "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=2070&auto=format&fit=crop",
      ctaText: "Start Practicing",
      color: {
        bg: "bg-rose-50 dark:bg-rose-950/20",
        accent: "text-rose-700 dark:text-rose-400",
        blob: "bg-rose-200 dark:bg-rose-900/40",
      },
    },
    {
      title: "LinkedIn Optimization",
      slug: "linkedin-optimization",
      desc: "Transform your LinkedIn profile into a powerful magnet for recruiters and opportunities. We help you build a professional brand that stands out.",
      details: {
        longDescription: "Your LinkedIn profile is your 24/7 digital resume. Our LinkedIn Optimization service ensures you are making the best impression online. We optimize your headline, summary, and experience sections with relevant keywords to increase your visibility in search results. Additionally, we provide guidance on how to effectively network and engage with content to build your professional brand and attract new opportunities.",
        benefits: [
          "Increased visibility to recruiters and hiring managers",
          "A professional and credible online presence",
          "Expanded professional network and connections",
          "Inbound job opportunities coming to you"
        ],
        process: [
          "Audit of your current LinkedIn profile",
          "Keyword research and optimization strategy",
          "Rewrite of headline, summary, and experience sections",
          "Guide on networking best practices"
        ]
      },
      features: [
        "Headline and summary optimization for maximum visibility",
        "Strategic keyword placement to appear in recruiter searches",
        "Guidance on networking and content creation strategies",
      ],
      imgsrc:
        "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=2070&auto=format&fit=crop",
      ctaText: "Optimize Profile",
      color: {
        bg: "bg-indigo-50 dark:bg-indigo-950/20",
        accent: "text-indigo-700 dark:text-indigo-400",
        blob: "bg-indigo-200 dark:bg-indigo-900/40",
      },
    },
    {
      title: "Job Search Strategy",
      slug: "job-search-strategy",
      desc: "Stop applying aimlessly. We help you create a targeted job search strategy to find the hidden opportunities that match your career goals.",
      details: {
        longDescription: "Applying to hundreds of jobs online with no response? It's time for a smarter approach. Our Job Search Strategy service helps you tap into the hidden job market where most opportunities exist. We help you identify target companies that align with your values, create a networking plan, and craft effective outreach messages to get you in front of decision-makers.",
        benefits: [
          "Access to unadvertised job opportunities",
          "More efficient use of your time and energy",
          "Higher response rate from applications",
          "Targeted approach aligned with your career goals"
        ],
        process: [
          "Defining your ideal role and target companies",
          "Developing a strategic networking plan",
          "Crafting cold outreach templates and scripts",
          "Tracking and analyzing your search progress"
        ]
      },
      features: [
        "Identifying target companies and roles aligned with your values",
        "Strategies for accessing the hidden job market",
        "Techniques for effective networking and cold outreach",
      ],
      imgsrc:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format&fit=crop",
      ctaText: "Plan Your Search",
      color: {
        bg: "bg-amber-50 dark:bg-amber-950/20",
        accent: "text-amber-700 dark:text-amber-400",
        blob: "bg-amber-100 dark:bg-amber-900/40",
      },
    },
    {
      title: "Personal Branding",
      slug: "personal-branding",
      desc: "Define who you are as a professional. We help you articulate your unique value proposition and build a consistent brand across all platforms.",
      details: {
        longDescription: "In today's digital world, your personal brand is your reputation. Our Personal Branding service helps you take control of your narrative. We work with you to define your unique value proposition, expertise, and voice. From your social media presence to your professional portfolio, we ensure that every touchpoint consistently reflects who you are and what you stand for.",
        benefits: [
          "Established authority and thought leadership in your field",
          "Consistent and memorable professional identity",
          "Increased trust and credibility with your audience",
          "Attraction of career opportunities aligned with your brand"
        ],
        process: [
          "Brand discovery workshop to define your UVP",
          "Creation of visual and tonal brand guidelines",
          "Content strategy for thought leadership",
          "Cross-platform profile optimization"
        ]
      },
      features: [
        "Defining your unique professional value proposition",
        "Consistent visual and tonal identity across platforms",
        "Content strategy to establish thought leadership",
      ],
      imgsrc:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
      ctaText: "Build Your Brand",
      color: {
        bg: "bg-sky-50 dark:bg-sky-950/20",
        accent: "text-sky-700 dark:text-sky-400",
        blob: "bg-sky-200 dark:bg-sky-900/40",
      },
    },
  ],
};
