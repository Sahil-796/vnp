"use client";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import SectionTitle from "./SectionTitle";

import { data } from "@/constants";

export function Services() {
  const content = data.services.content.map((item) => {
    let cardGradient = "bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-background"; // fallback
    if (item.pillColor.includes("blue")) {
      cardGradient = "bg-gradient-to-br from-blue-100 via-blue-50 to-white dark:from-blue-950 dark:via-gray-900 dark:to-background";
    } else if (item.pillColor.includes("emerald")) {
      cardGradient = "bg-gradient-to-br from-emerald-100 via-emerald-50 to-white dark:from-emerald-950 dark:via-gray-900 dark:to-background";
    } else if (item.pillColor.includes("orange")) {
      cardGradient = "bg-gradient-to-br from-orange-100 via-orange-50 to-white dark:from-orange-950 dark:via-gray-900 dark:to-background";
    } else if (item.pillColor.includes("purple")) {
      cardGradient = "bg-gradient-to-br from-purple-100 via-purple-50 to-white dark:from-purple-950 dark:via-gray-900 dark:to-background";
    }

    return {
      title: item.title,
      description: item.desc,
      pillColor: item.pillColor,
      bullets: item.bullets,
      cta: item.cta,
      cardGradient,
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
    };
  });

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
