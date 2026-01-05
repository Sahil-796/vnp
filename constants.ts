import {
  Lightbulb,
  Settings,
  Users,
  Zap,
  BarChart3,
  Award,
} from "lucide-react";

export const data = {
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
    desc: "We offer a comprehensive suite of tools designed to streamline your workflow and enhance collaboration. Discover how we can help you achieve more.",
    content: [
      {
        title: "Product design",
        desc: "We create visually compelling and user-friendly websites that reflect your brand's identity and engage your target audience. Our designs are tailored to provide seamless navigation and a memorable user experience.",
        imgsrc: "/process-1.png", // Keeping placeholders for now, though design doesn't explicitly show images in the list view the same way
        pillColor: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
        bullets: ["Saas Platform", "Web Platform", "Mobile App"],
        cta: { label: "DISCUSS PROJECT", href: "/contact" }
      },
      {
        title: "UX Design",
        desc: "We create visually compelling and user-friendly websites that reflect your brand's identity and engage your target audience. Our designs are tailored to provide seamless navigation and a memorable user experience.",
        imgsrc: "/process-2.png",
        pillColor: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
        bullets: ["UX Audit", "Analysis", "Research"],
        cta: { label: "DISCUSS PROJECT", href: "/contact" }
      },
      {
        title: "Development",
        desc: "We build robust and scalable applications using the latest technologies. Our development team ensures high performance and security for your digital products.",
        imgsrc: "/process-3.png",
        pillColor: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
        bullets: ["Net Core", "PHP", "React", "Node.js", "Angular"],
        cta: { label: "DISCUSS PROJECT", href: "/contact" }
      },
      {
        title: "Quality Assurance",
        desc: "We ensure your software is bug-free and performs optimally. Our QA team conducts rigorous testing to guarantee a smooth user experience.",
        imgsrc: "/process-4.png",
        pillColor: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
        bullets: ["Testing", "Planning, creating following KPI's", "Documentation"],
        cta: { label: "DISCUSS PROJECT", href: "/contact" }
      },
    ],
  },

  whyChooseUs: [
    {
      title: "Expertise",
      description:
        "We leverage over 15 years of experience to deliver high-quality, tailored solutions for every client.",
      icon: Award,
      iconColor: "text-yellow-600",
      color: "bg-yellow-100",
      iconBg: "bg-yellow-200",
      shadow: "shadow-[0_10px_40px_-15px_rgba(234,179,8,0.2)]",
    },
    {
      title: "Custom Solutions",
      description:
        "Each solution is personalized, ensuring that your business gets the exact tools it needs to succeed.",
      icon: Zap,
      iconColor: "text-purple-600",
      color: "bg-purple-100",
      iconBg: "bg-purple-200",
      shadow: "shadow-[0_10px_40px_-15px_rgba(147,51,234,0.2)]",
    },
    {
      title: "Customer-Focused",
      description:
        "We prioritize your satisfaction and aim to exceed your expectations in every project we take on.",
      icon: Users,
      iconColor: "text-pink-600",
      color: "bg-pink-100",
      iconBg: "bg-pink-200",
      shadow: "shadow-[0_10px_40px_-15px_rgba(236,72,153,0.2)]",
    },
    {
      title: "Innovation",
      description:
        "We stay ahead of the curve, implementing the latest technologies to keep your business on the cutting edge.",
      icon: Lightbulb,
      iconColor: "text-blue-600",
      color: "bg-blue-100",
      iconBg: "bg-blue-200",
      shadow: "shadow-[0_10px_40px_-15px_rgba(37,99,235,0.2)]",
    },
    {
      title: "Flexibility",
      description:
        "We understand that businesses change, and we offer solutions that can adapt to your evolving needs.",
      icon: Settings,
      iconColor: "text-green-600",
      color: "bg-green-100",
      iconBg: "bg-green-200",
      shadow: "shadow-[0_10px_40px_-15px_rgba(22,163,74,0.2)]",
    },
    {
      title: "Quality Commitment",
      description:
        "We are committed to delivering solutions that meet the highest standards of quality, ensuring long-term success.",
      icon: BarChart3,
      iconColor: "text-orange-600",
      color: "bg-orange-100",
      iconBg: "bg-orange-200",
      shadow: "shadow-[0_10px_40px_-15px_rgba(234,88,12,0.2)]",
    },
  ],

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
    categories: {
      "web-dev": "Web Development",
      "mobile-dev": "Mobile Development",
      "ui-ux": "UI/UX Design",
      "copywriting": "Copywriting"
    },
    faqData: {
      "web-dev": [
        {
          question: "What is web development?",
          answer: "Web development is the process of building and maintaining websites. It involves a combination of client-side and server-side programming, database management, and other web-related technologies."
        },
        {
          question: "What programming languages are essential for web development?",
          answer: "Essential languages for web development include HTML, CSS, and JavaScript for front-end development. For back-end development, popular languages include Python, Ruby, PHP, Java, and Node.js."
        },
        {
          question: "What's the difference between front-end and back-end development?",
          answer: "Front-end development focuses on the user interface and user experience of a website, while back-end development deals with server-side logic, databases, and application integration."
        },
        {
          question: "How long does it typically take to develop a website?",
          answer: "The time to develop a website can vary greatly depending on its complexity. A simple static website might take a few days, while a complex web application could take several months or even years."
        },
        {
          question: "What is responsive web design?",
          answer: "Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. It ensures that websites are accessible and visually appealing across different platforms."
        }
      ],
      "mobile-dev": [
        {
          question: "What is mobile development?",
          answer: "Mobile development is the process of creating software applications that run on mobile devices such as smartphones and tablets. It involves designing, coding, and testing applications for mobile operating systems like iOS and Android."
        },
        {
          question: "What's the difference between native and cross-platform mobile development?",
          answer: "Native development involves building separate apps for each platform using platform-specific languages (Swift for iOS, Java/Kotlin for Android). Cross-platform development uses frameworks like React Native or Flutter to build a single codebase that works on multiple platforms."
        },
        {
          question: "What are some popular mobile app development frameworks?",
          answer: "Popular mobile app development frameworks include React Native, Flutter, Xamarin, Ionic, and NativeScript. Each has its own strengths and is suited for different types of projects."
        },
        {
          question: "How do you ensure mobile app security?",
          answer: "Mobile app security involves practices such as secure coding, data encryption, secure authentication methods, regular security audits, and staying up-to-date with the latest security patches and best practices."
        },
        {
          question: "What is the typical mobile app development lifecycle?",
          answer: "The typical mobile app development lifecycle includes stages such as planning, design, development, testing, deployment, and maintenance. It often follows an iterative process with continuous updates and improvements."
        }
      ],
      "ui-ux": [
        {
          question: "What is UI/UX design?",
          answer: "UI (User Interface) design focuses on the visual elements of a digital product, while UX (User Experience) design deals with the overall feel and functionality of the product. Together, they aim to create products that are both visually appealing and easy to use."
        },
        {
          question: "What's the difference between UI and UX design?",
          answer: "UI design focuses on the look and layout of a product's interface, including colors, typography, and visual elements. UX design is broader, encompassing the entire user journey and how users interact with the product."
        },
        {
          question: "What tools do UI/UX designers commonly use?",
          answer: "Common tools for UI/UX design include Sketch, Figma, Adobe XD, InVision, and Protopie for design and prototyping. Research and testing tools might include UserTesting, Hotjar, and Optimal Workshop."
        },
        {
          question: "What is a user persona?",
          answer: "A user persona is a fictional representation of your ideal user or customer. It's based on user research and includes details about the persona's background, goals, challenges, and behaviors. Personas help guide design decisions by keeping the focus on the end-user."
        },
        {
          question: "What is the importance of user testing in UI/UX design?",
          answer: "User testing is crucial in UI/UX design as it provides direct feedback from actual users. It helps identify usability issues, validate design decisions, and ensure that the product meets user needs and expectations."
        }
      ],
      "copywriting": [
        {
          question: "What is copywriting?",
          answer: "Copywriting is the act of writing text for the purpose of advertising or other forms of marketing. The product, called copy, is written content that aims to increase brand awareness and ultimately persuade a person or group to take a particular action."
        },
        {
          question: "What's the difference between copywriting and content writing?",
          answer: "While both involve writing, copywriting is specifically aimed at persuasion and driving action (like making a purchase), while content writing is more focused on informing, educating, or entertaining the reader."
        },
        {
          question: "What are some key elements of effective copywriting?",
          answer: "Key elements of effective copywriting include understanding the target audience, crafting compelling headlines, focusing on benefits rather than features, using persuasive language, and including a clear call-to-action."
        },
        {
          question: "How important is SEO in copywriting?",
          answer: "SEO (Search Engine Optimization) is very important in copywriting, especially for digital content. It helps ensure that your copy reaches your target audience by making it more visible in search engine results. This involves using relevant keywords, creating quality content, and following SEO best practices."
        },
        {
          question: "What is a call-to-action (CTA) in copywriting?",
          answer: "A call-to-action (CTA) is a prompt in your copy that tells the reader what to do next. It's usually a command verb like 'Buy Now,' 'Sign Up,' or 'Learn More.' An effective CTA is clear, compelling, and creates a sense of urgency."
        }
      ]
    }
  },

  footer: {
    titlep1: "Elevating Digital",
    titlep2: "Experiences",
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
