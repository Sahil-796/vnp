import { siteInfo } from "./site-info";

export const contactPageData = {
  header: {
    title: "Contact Us",
    badge: "HAVE A CHAT WITH US",
    description:
      "We'd love to hear from you. Whether you have a question about our career services, want to discuss a software project, or just want to say hello, we're here to help you start your journey.",
  },
  metadata: {
    title: "Contact Us",
    description:
      "Get in touch with Vision and Path for career guidance, job placement support, resume services, interview coaching, or software project inquiries.",
  },
  contactInfo: [
    {
      title: "Email Us",
      description:
        "Drop us a line anytime. Our friendly team is ready to answer your questions and provide the support you need.",
      value: siteInfo.email,
      link: `mailto:${siteInfo.email}`,
    },
    {
      title: "Visit Us",
      description:
        "Come say hello at our headquarters. We believe in face-to-face connections and would love to welcome you to our office.",
      value: siteInfo.addressDisplay,
      link: "https://maps.google.com",
    },
    {
      title: "Call Us",
      description:
        "Prefer to talk? Give us a call. We are available Monday to Friday from 8am to 5pm to discuss your needs.",
      value: siteInfo.phoneDisplay,
      link: siteInfo.phoneHref,
    },
  ],
  calendlyUrl: "https://calendly.com/aayushranpura2302/30min",
};
