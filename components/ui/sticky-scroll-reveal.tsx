"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

interface ContentItem {
  title: string;
  description: string;
  content?: React.ReactNode | any;
  pillColor?: string;
  bullets?: string[];
  cta?: { label: string; href: string };
  cardGradient?: string;
}

// Custom Check Icon Component
const CustomCheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const StickyCard = ({
  item,
  index,
  cardLength,
  scrollYProgress,
  contentClassName,
}: {
  item: ContentItem;
  index: number;
  cardLength: number;
  scrollYProgress: MotionValue<number>;
  contentClassName?: string;
}) => {
  // N = cardLength.
  // We have N-1 transitions (Card 0->1, 1->2, ... N-2->N-1).
  // We want the transitions to take up most of the scroll space, and the last card to have a shorter static phase.
  // By dividing by (cardLength - alpha), we extend the range of each index so they consume more space.
  const calibration = 0.7; // How much of the last card's "slot" to remove. 0.7 means last slot is 30% of normal.
  const totalUnits = cardLength - calibration;

  const start = index / totalUnits;
  const end = (index + 1) / totalUnits;

  // Dynamic transform based on index
  const y = useTransform(scrollYProgress, [start, end], ["0%", "-100%"]);

  const isLast = index === cardLength - 1;
  // If it's the last card, we don't transform it away, but we also don't need to worry about 'end' exceeding 1.
  // The useTransform clamps values outside [start, end].
  // However, since we condensed the range, 'end' for the last card would be > 1.
  // e.g. for N=4, total=3.3. Last card start=3/3.3=0.9. End=4/3.3=1.2.
  // So it effectively stays at 0% for 0.9->1.0 (which is the end of scroll).

  const yValue = isLast ? "0%" : y;

  return (
    <motion.div
      style={{
        y: yValue,
        zIndex: cardLength - index,
      }}
      className={cn(
        "absolute inset-0 h-full w-full flex flex-col justify-center",
        item.cardGradient || "bg-background",
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      )}
    >
      {/* Text Section - Mobile: Vertically centered, Left aligned, Padded top */}
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center px-6 pb-6 pt-24 lg:p-16 relative">
        <div className="max-w-xl flex flex-col items-start text-left w-full">
          {item.pillColor ? (
            <h2
              className={cn(
                "text-2xl lg:text-3xl font-bold px-3 py-1 lg:px-4 lg:py-2 rounded-xl inline-block mb-3 lg:mb-6",
                item.pillColor
              )}
            >
              {item.title}
            </h2>
          ) : (
            <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-4 lg:mb-6">
              {item.title}
            </h2>
          )}

          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed line-clamp-3 lg:line-clamp-none">
            {item.description}
          </p>

          {item.bullets && (
            <ul className="mt-4 lg:mt-8 space-y-2 lg:space-y-3">
              {item.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 lg:gap-3 text-muted-foreground"
                >
                  <div className="flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CustomCheckIcon className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
                  </div>
                  <span className="text-xs lg:text-sm font-medium leading-tight">{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {item.cta && (
            <div className="mt-6 lg:mt-10">
              <Link
                href={item.cta.href}
                className="inline-flex items-center gap-2 px-4 py-2 lg:px-6 lg:py-3 rounded-full bg-primary text-primary-foreground text-sm lg:text-base font-medium hover:opacity-90 transition-opacity"
              >
                {item.cta.label}
                <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4" />
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Image Section */}
      <div
        className={cn(
          "w-full lg:w-1/2 h-1/2 lg:h-full overflow-hidden bg-muted",
          contentClassName
        )}
      >
        {item.content ?? null}
      </div>
    </motion.div>
  );
};

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: ContentItem[];
  contentClassName?: string;
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const cardLength = content.length;

  return (
    <div
      ref={targetRef}
      className="relative w-full"
      style={{
        // 100vh per card allows for natural scrolling duration
        height: `${cardLength * 100}vh`,
      }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {content.map((item, index) => (
          <StickyCard
            key={index}
            item={item}
            index={index}
            cardLength={cardLength}
            scrollYProgress={scrollYProgress}
            contentClassName={contentClassName}
          />
        ))}
      </div>
    </div>
  );
};