"use client";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import SectionTitle from "./SectionTitle";

import { data } from "@/constants";

export function Services() {
  const content = data.services.content.map((item) => ({
    title: item.title,
    description: item.desc,
    pillColor: item.pillColor,
    bullets: item.bullets,
    cta: item.cta,
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <Image
          src={item.imgsrc}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt={item.title}
        />
      </div>
    ),
  }));

  return (
    <div className="w-full relative pt-24">
      <SectionTitle
        title={data.services.title}
        description={data.services.desc}
      />
      <StickyScroll content={content} />
    </div>
  );
}
