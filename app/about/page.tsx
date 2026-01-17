import AboutUsSection from "@/components/ui/about-us-section";
import type { Metadata } from "next";

import { aboutPageData } from "@/constants";

export const metadata: Metadata = {
  title: aboutPageData.metadata.title,
  description: aboutPageData.metadata.description,
};

const page = () => {
  return <AboutUsSection />;
};

export default page;
