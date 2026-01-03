"use client";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import SectionTitle from "./SectionTitle";

import { data } from "@/constansts";

export function Services() {
  const content = data.services.content.map((item) => ({
    title: item.title,
    description: item.desc,
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <Image
          src={item.imgsrc}
          width={300}
          height={300}
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
        containerClassName="max-w-[85vw] py-4"
      />
      <StickyScroll content={content} />
    </div>
  );
}
