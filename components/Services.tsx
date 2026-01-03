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
          width={800}
          height={800}
          className="h-full w-full object-cover rounded-4xl"
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
        containerClassName="max-w-[85vw]"
      />
      <StickyScroll content={content} />
    </div>
  );
}
