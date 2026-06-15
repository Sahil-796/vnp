"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import { landingPageData } from "@/constants";
import { cn } from "@/lib/utils";

const reasons = landingPageData.whyChooseUs.content;

type Tone = "blue" | "navy" | "yellow" | "blueTint" | "yellowTint";

const toneStyles: Record<
  Tone,
  { tile: string; title: string; body: string; chip: string }
> = {
  blue: {
    tile: "bg-blue text-white",
    title: "text-white",
    body: "text-white/75",
    chip: "bg-white/15 text-white",
  },
  navy: {
    tile: "bg-navy text-white",
    title: "text-white",
    body: "text-white/70",
    chip: "bg-yellow/20 text-yellow",
  },
  yellow: {
    tile: "bg-secondary text-ink",
    title: "text-ink",
    body: "text-ink/70",
    chip: "bg-ink/10 text-ink",
  },
  blueTint: {
    tile: "bg-blue-100 text-ink",
    title: "text-ink",
    body: "text-ink-soft",
    chip: "bg-blue text-white",
  },
  yellowTint: {
    tile: "bg-yellow-50 text-ink",
    title: "text-ink",
    body: "text-ink-soft",
    chip: "bg-ink text-white",
  },
};

// asymmetric 6-cell layout, exact count, rhythmic spans. No plain-white tiles.
const layout: { tone: Tone; span: string }[] = [
  { tone: "blue", span: "lg:col-span-8" },
  { tone: "navy", span: "lg:col-span-4" },
  { tone: "yellow", span: "lg:col-span-4" },
  { tone: "blueTint", span: "lg:col-span-4" },
  { tone: "yellowTint", span: "lg:col-span-4" },
  { tone: "blueTint", span: "md:col-span-2 lg:col-span-12 lg:bg-dotgrid" },
];

function Tile({
  index,
  icon: Icon,
  title,
  description,
}: {
  index: number;
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  const { tone, span } = layout[index];
  const s = toneStyles[tone];
  const wide = span.includes("col-span-12");
  const big = span.includes("col-span-8");

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.55,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "group relative flex flex-col justify-between gap-8 overflow-hidden rounded-[1.75rem] p-7 md:p-9",
        s.tile,
        span,
        big && "lg:min-h-[20rem]",
      )}
    >
      <span
        className={cn(
          "inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:-translate-y-1",
          s.chip,
        )}
      >
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </span>
      <div className={cn(wide && "lg:max-w-2xl")}>
        <h3
          className={cn(
            "font-display text-xl font-bold tracking-tight md:text-2xl",
            s.title,
            big && "md:text-3xl",
          )}
        >
          {title}
        </h3>
        <p className={cn("mt-3 text-sm leading-relaxed md:text-base", s.body)}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-28">
      <div className="mb-12 max-w-2xl">
        <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-6xl">
          {landingPageData.whyChooseUs.title}
        </h2>
        <p className="mt-4 text-lg text-ink-soft">
          {landingPageData.whyChooseUs.description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
        {reasons.map((r, i) => (
          <Tile
            key={r.title}
            index={i}
            icon={r.icon}
            title={r.title}
            description={r.description}
          />
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
