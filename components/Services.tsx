"use client";
import { ServiceAccordion } from "./ServiceAccordion";
import SectionTitle from "./SectionTitle";

import { data } from "@/constants";

export function Services() {
  const content = data.services.content;

  return (
    <div className="w-full relative pt-24 bg-white dark:bg-black">
      <SectionTitle
        title={data.services.title}
        description={data.services.desc}
      />
      <ServiceAccordion services={content} />
    </div>
  );
}
