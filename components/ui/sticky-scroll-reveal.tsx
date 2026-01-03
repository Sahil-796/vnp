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
  const [direction, setDirection] = useState("down");
  const ref = useRef<any>(null);
  const activeCardRef = useRef(0);

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
    );
    if (closestBreakpointIndex !== activeCardRef.current) {
      setDirection(closestBreakpointIndex > activeCardRef.current ? "down" : "up");
      setActiveCard(closestBreakpointIndex);
      activeCardRef.current = closestBreakpointIndex;
    }
  });

  const variants = {
    initial: (direction: string) => ({
      opacity: 0,
      y: direction === "down" ? 50 : -50,
      filter: "blur(10px)",
    }),
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
    exit: (direction: string) => ({
      opacity: 0,
      y: direction === "down" ? -50 : 50,
      filter: "blur(10px)",
    }),
  };

  return (
    <motion.div
      className="flex justify-center relative space-x-10 rounded-md"
      ref={ref}
      // 1. Dynamic height ensures the user has space to scroll through all cards.
      // Adjust the multiplier (e.g., 60vh) to change how fast the cards switch.
      style={{ height: content.length * 60 + "vh" }}
    >
      {/* 2. Sticky container to hold the view in the center while parent scrolls */}
      <div className="sticky top-0 flex h-[calc(100vh-10vh)] items-center justify-center w-full overflow-hidden">
        <div className="max-w-6xl w-full px-4">
          {/* 3. AnimatePresence handles the Exit/Enter animations */}
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={activeCard}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={direction}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="flex flex-col lg:flex-row justify-between items-center gap-10"
            >
              {/* Text Section */}
              <div className="lg:w-1/2 flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
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
                  "block w-full lg:w-1/2 aspect-video lg:aspect-square xl:aspect-video rounded-2xl overflow-hidden shadow-xl mt-8 lg:mt-0 bg-background mx-auto",
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