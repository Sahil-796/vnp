"use client";
import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);

  // Track scroll progress of the entire container
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / (cardLength - 1));
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      className="flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
      // 1. Dynamic height ensures the user has space to scroll through all cards.
      // Adjust the multiplier (e.g., 60vh) to change how fast the cards switch.
      style={{ height: content.length * 80 + "vh" }}
    >
      {/* 2. Sticky container to hold the view in the center while parent scrolls */}
      <div className="sticky top-0 flex h-screen items-center -mt-60 justify-center w-full overflow-hidden">
        <div className="max-w-6xl w-full px-4">
          {/* 3. AnimatePresence handles the Exit/Enter animations */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, y: 50 }}  // Enters from bottom
              animate={{ opacity: 1, y: 0 }}   // Centers
              exit={{ opacity: 0, y: -50 }}    // Exits to top
              transition={{
                duration: 0.5,
                ease: "easeInOut"
              }}
              className="flex flex-col lg:flex-row justify-between items-center gap-10"
            >
              {/* Text Section */}
              <div className="lg:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-secondary">
                  {content[activeCard].title}
                </h2>
                <p className="text-lg text-muted-foreground max-w-sm mt-10">
                  {content[activeCard].description}
                </p>
              </div>

              {/* Image/Content Section */}
              <div
                className={cn(
                  "hidden lg:block w-[40rem] aspect-video rounded-md overflow-hidden",
                  contentClassName
                )}
              >
                {content[activeCard].content ?? null}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};