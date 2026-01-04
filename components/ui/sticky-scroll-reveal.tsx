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
}

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
  const start = index / cardLength;
  const end = (index + 1) / cardLength;

  // Dynamic transform based on index
  const y = useTransform(scrollYProgress, [start, end], ["0%", "-100%"]);

  // Last card behavior: let it slide up too or stay?
  // If we want it to stay, we check index.
  // Standard "stack reveal" usually has the last one stay or we scroll past it.
  // If the container ends, and last card is at y=0, and we scroll past, it gets scrolled out by normal document flow (because the sticky container hits bottom).
  // BUT the sticky container is h-screen.
  // When scroll hits bottom of parent container (height N*100vh), the sticky container un-sticks and moves up.
  // So the last card doesn't need to animate away. It moves away with the container.

  const isLast = index === cardLength - 1;
  const yValue = isLast ? "0%" : y;

  return (
    <motion.div
      style={{
        y: yValue,
        zIndex: cardLength - index,
      }}
      className={cn(
        "absolute inset-0 h-full w-full flex flex-col justify-center bg-background",
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      )}
    >
      {/* Text Section */}
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-8 lg:p-16 relative">
        <div className="max-w-xl flex flex-col items-start text-left">
          {item.pillColor ? (
            <h2
              className={cn(
                "text-3xl font-bold px-4 py-2 rounded-xl inline-block mb-6",
                item.pillColor
              )}
            >
              {item.title}
            </h2>
          ) : (
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              {item.title}
            </h2>
          )}

          <p className="text-lg text-muted-foreground leading-relaxed">
            {item.description}
          </p>

          {item.bullets && (
            <ul className="mt-8 space-y-3">
              {item.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <div className="p-1 rounded-full bg-primary/10 text-primary">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-medium">{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {item.cta && (
            <div className="mt-10">
              <Link
                href={item.cta.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                {item.cta.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Image Section */}
      <div
        className={cn(
          "w-full lg:w-1/2 h-full overflow-hidden bg-muted",
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