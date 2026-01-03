"use client";
import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion, AnimatePresence, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
    pillColor?: string;
    bullets?: string[];
    cta?: { label: string; href: string };
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
  
  const background = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "linear-gradient(135deg, #e8fff2 0%, #c9efdd 55%, #aecdff 100%)",
      "linear-gradient(135deg, #ebfff8 0%, #cfe8e1 55%, #b9c8ff 100%)",
      "linear-gradient(135deg, #effff9 0%, #d8ede4 55%, #c6beff 100%)",

    ]
  );


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

  // Initially shift the content up (closer to title) then slide to center
  const verticalOffset = useTransform(scrollYProgress, [0, 0.05], ["-10vh", "0vh"]);

  return (
    <motion.div
      className="flex px-5 justify-center relative w-full border rounded-4xl"
      ref={ref}
      style={{
        height: content.length * 60 + "vh",
        background,
      }}
    >
      {/* 2. Sticky container to hold the view in the center while parent scrolls */}
      <div className="sticky top-0 flex h-[calc(100vh-10vh)] items-center justify-center w-full overflow-hidden">
        <motion.div
          style={{ y: verticalOffset }}
          className="max-w-7xl w-full px-4"
        >
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
              className={cn(
                "flex flex-col justify-between items-center gap-10",
                activeCard % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              )}
            >
              {/* Text Section */}
              <div className="lg:w-[45%] flex flex-col justify-center items-center text-center lg:items-start lg:text-left">




                {/* Re-doing the title logic based on "give title a bg color" literally means the text background. */}
                {content[activeCard].pillColor ? (
                  <h2 className={cn(
                    "text-3xl font-bold px-4 py-2 rounded-xl inline-block mb-6",
                    content[activeCard].pillColor
                  )}>
                    {content[activeCard].title}
                  </h2>
                ) : (
                  <h2 className="text-3xl font-bold text-secondary mb-6">{content[activeCard].title}</h2>
                )}

                <p className="text-lg text-muted-foreground/80 mt-2 leading-relaxed">
                  {content[activeCard].description}
                </p>

                {content[activeCard].bullets && (
                  <ul className="mt-8 space-y-3">
                    {content[activeCard].bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                        <div className="p-1 rounded-full bg-primary/10 text-primary">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-sm font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {content[activeCard].cta && (
                  <div className="mt-10">
                    <Link
                      href={content[activeCard].cta.href}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                    >
                      {content[activeCard].cta.label}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Image/Content Section */}
              <div
                className={cn(
                  "block w-full lg:w-[50%] aspect-video lg:aspect-square xl:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl mt-8 lg:mt-0 bg-background border border-white/20 ring-1 ring-black/5 mx-auto",
                  contentClassName
                )}
              >
                {content[activeCard].content ?? null}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};