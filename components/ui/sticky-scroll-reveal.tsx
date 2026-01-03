"use client";
import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "motion/react";
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
      className="flex justify-center relative rounded-md"
      ref={ref}
      // 1. Dynamic height ensures the user has space to scroll through all cards.
      // Adjust the multiplier (e.g., 60vh) to change how fast the cards switch.
      style={{ height: content.length * 60 + "vh" }}
    >
      {/* 2. Sticky container to hold the view in the center while parent scrolls */}
      <div className="sticky top-0 flex h-[calc(100vh-10vh)] items-center justify-center w-full overflow-hidden">
        <div className="max-w-7xl w-full px-4">
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
                {content[activeCard].pillColor && (
                  <span
                    className={cn(
                      "inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 tracking-wide uppercase",
                      content[activeCard].pillColor
                    )}
                  >
                    {content[activeCard].title}
                  </span>
                )}

                {/* Fallback title if no pillColor, or maybe just render it as main title? 
                    User asked to "give title a bg color". The above span does that. 
                    Let's also keep a main semantic H3 if desired, but user might mean the main heading itself has bg. 
                    I'll treat the pill AS the title header for now, or add a larger heading below?
                    Re-reading: "give title a bg color".
                    The previous layout had `h2` for title. 
                    Let's keep h2 but maybe style it? No, standard design is Pill + Heading. 
                    But if I replace H2 with Pill, it might be too small. 
                    Let's Render the Pill (Title) and then maybe the subtitle/description?
                    Actually, let's keep the existing title logic but style it?
                    OR: Render Pill (Category/Title) -> H2 (Headline?) -> Desc.
                    The data has `title` = "Collaborative Editing".
                    Let's use that as the H2, but wrapped in a container that gives it background?
                    "give title a bg color" -> `bg-blue-100` on the H2 element?
                    Let's try: Inline-block H2 with rounded corners and bg color.
                */}
                <h2
                  className={cn(
                    "text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70",
                    // If user meant the ACTUAL title text should have bg box:
                    // content[activeCard].pillColor ? cn("bg-transparent text-inherit", content[activeCard].pillColor) : ""
                    // Let's stick to the pill approach for "variety" as requested (common SaaS pattern)
                    // OR: Render the title AS the pill.
                  )}
                >
                  {/* If we used the pill above for title, maybe we don't need this h2? 
                       But semantic hierarchy...
                       Let's go with: Pill (Title) then maybe a summary phrase? 
                       The `title` in data IS "Collaborative Editing". 
                       So I will use the Pill logic I wrote above for the title.
                    */}
                </h2>

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
        </div>
      </div>
    </motion.div>
  );
};