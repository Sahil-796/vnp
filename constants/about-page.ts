import {
  Award,
  Building2,
  Calendar,
  Home,
  PaintBucket,
  Pen,
  PenTool,
  Ruler,
  TrendingUp,
  Users,
} from "lucide-react";

export const aboutPageData = {
  hero: {
    badge: "DISCOVER OUR MISSION",
    title: "Empowering Careers, Transforming Lives",
    description:
      "We are a dedicated team of career experts, recruiters, and industry professionals committed to connecting talented individuals with their dream careers. With personalized guidance and proven strategies, we transform job searches into career success stories.",
  },
  values: [
    {
      title: "People-First Guidance",
      description:
        "Every recommendation starts with your goals, strengths, and long-term growth.",
    },
    {
      title: "Honest Expertise",
      description:
        "We give direct, practical coaching based on real hiring and recruiting experience.",
    },
    {
      title: "Measurable Outcomes",
      description:
        "Our process is designed around results you can track: interviews, offers, and career progress.",
    },
  ],
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
      "Learn how Vision and Path helps professionals land dream jobs through expert career coaching, resume optimization, and proven placement strategies.",
  },
  labels: {
    learnMore: "Learn more",
  },
};
