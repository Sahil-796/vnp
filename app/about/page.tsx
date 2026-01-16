import AboutUsSection from "@/components/ui/about-us-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Vision and Path.",
};

const page = () => {
  return <AboutUsSection />;
};

export default page;
