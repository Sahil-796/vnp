"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { landingPageData } from "@/constants";
import { cn } from "@/lib/utils";

type Column = (typeof landingPageData.twoPaths.columns)[number];

const PathColumn = ({ column, delay }: { column: Column; delay: number }) => {
  const isDark = column.theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "flex flex-col p-8 md:p-12 lg:p-16",
        isDark
          ? "bg-foreground text-background"
          : "bg-primary/10 text-foreground",
      )}
    >
      {/* Index */}
      <span
        className={cn(
          "text-sm font-semibold tracking-wide",
          isDark ? "text-secondary" : "text-primary",
        )}
      >
        {column.index}
      </span>

      {/* Heading */}
      <h3 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter">
        {column.title}
      </h3>

      {/* Description */}
      <p
        className={cn(
          "mt-5 max-w-md text-base md:text-lg leading-relaxed",
          isDark ? "text-background/70" : "text-muted-foreground",
        )}
      >
        {column.desc}
      </p>

      {/* Points */}
      <ul className="mt-10 flex-1">
        {column.points.map((point, idx) => (
          <li
            key={point}
            className={cn(
              "flex items-center gap-4 py-4 text-base md:text-lg font-medium",
              idx > 0 && "border-t",
              isDark ? "border-background/15" : "border-foreground/10",
            )}
          >
            <span
              className={cn(
                "h-2 w-2 shrink-0 rounded-full",
                isDark ? "bg-secondary" : "bg-primary",
              )}
            />
            {point}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-10">
        <Link
          href={column.cta.href}
          className={cn(
            "group/cta inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm md:text-base font-semibold shadow-lg transition-all duration-300 hover:scale-[1.03]",
            isDark
              ? "bg-secondary text-secondary-foreground hover:shadow-secondary/30"
              : "bg-primary text-primary-foreground hover:shadow-primary/30",
          )}
        >
          {column.cta.label}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
        </Link>
      </div>
    </motion.div>
  );
};

export const TwoPaths = () => {
  const { title, desc, columns } = landingPageData.twoPaths;

  return (
    <section className="py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mb-16">
          <SectionTitle title={title} description={desc} />
        </div>

        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl md:rounded-4xl shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {columns.map((column, idx) => (
              <PathColumn
                key={column.index}
                column={column}
                delay={idx * 0.15}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoPaths;
