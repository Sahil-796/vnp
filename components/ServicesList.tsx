"use client";

import { useRef, useState } from "react";
import { servicesPageData } from "@/constants";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PageTitle } from "./PageTitle";
import { Sparkles, ArrowRight } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Map generic themes to Hex colors for MagicCard gradient
const getGradientColor = (bgClass: string) => {
  if (bgClass.includes("stone")) return "#d6d3d1"; // Stone-300
  if (bgClass.includes("emerald")) return "#6ee7b7"; // Emerald-300
  if (bgClass.includes("rose")) return "#fda4af"; // Rose-300
  if (bgClass.includes("indigo")) return "#a5b4fc"; // Indigo-300
  if (bgClass.includes("amber")) return "#fcd34d"; // Amber-300
  if (bgClass.includes("sky")) return "#7dd3fc"; // Sky-300
  if (bgClass.includes("purple")) return "#d8b4fe"; // Purple-300
  return "#262626"; // Default
};

const AnimatedCheckIcon = ({ color }: { color?: string }) => {
  return (
    <div
      className={cn(
        "rounded-full p-0.5 relative",
        "bg-black/5 dark:bg-white/10",
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("w-4 h-4", color || "text-primary")}
      >
        <motion.path
          d="M20 6L9 17l-5-5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </svg>
    </div>
  );
};

// Helper: Magnetic Button
const MagneticButton = ({ children, className, ...props }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    // Pull the button towards the mouse (max 15px)
    x.set((clientX - centerX) / 4);
    y.set((clientY - centerY) / 4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      <Button className={className} {...props}>
        {children}
      </Button>
    </motion.div>
  );
};

// Noise Texture (SVG Data URI)
const noiseTexture = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
};

export function ServicesList() {
  const { content, header } = servicesPageData;

  return (
    <div className="w-full py-24">
      <PageTitle
        badge={header.badge}
        title={header.title}
        description={header.description}
        icon={Sparkles}
        className="mb-24"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {content.map((service, index) => {
          const gradientColor = getGradientColor(service.color?.bg || "");
          // Bento Grid Logic: 0, 3, 4 are Large (Span 2). 1, 2, 5 are Small (Span 1).
          const isLarge = index === 0 || index === 3 || index === 4;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "w-full h-full",
                isLarge ? "md:col-span-2" : "md:col-span-1",
              )}
            >
              <Link
                href={`/services/${service.slug}`}
                className="block w-full h-full"
              >
                <MagicCard
                  className={cn(
                    "rounded-3xl transition-all duration-300 cursor-pointer group h-full overflow-hidden",
                    service.color?.bg || "bg-card",
                  )}
                  gradientColor={gradientColor}
                  gradientOpacity={0.4}
                >
                  {/* Noise Overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay z-0"
                    style={noiseTexture}
                  />

                  <div className="relative flex flex-col items-stretch h-full">
                    {/* Image Section */}
                    <div
                      className={cn(
                        "group overflow-hidden w-full shrink-0",
                        isLarge
                          ? "h-56 md:absolute md:top-0 md:right-0 md:bottom-0 md:w-1/2 md:h-full z-0"
                          : "h-48 relative",
                      )}
                    >
                      <div
                        className={cn(
                          "absolute inset-0 transform rotate-3 transition-transform duration-300 group-hover:rotate-0 opacity-60",
                          service.color?.blob || "bg-primary/10",
                        )}
                      />
                      <div className="absolute inset-0 w-full h-full">
                        <Image
                          src={service.imgsrc}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div
                      className={cn(
                        "flex flex-col p-5 gap-3 z-10 relative flex-grow",
                        isLarge && "md:w-1/2 md:p-8 md:justify-center",
                      )}
                    >
                      <div className="flex-grow">
                        <h3
                          className={cn(
                            "font-bold mb-2",
                            isLarge
                              ? "text-xl md:text-2xl"
                              : "text-lg md:text-xl",
                            service.color?.accent || "text-foreground",
                          )}
                        >
                          {service.title}
                        </h3>
                        <p
                          className={cn(
                            "text-muted-foreground leading-relaxed mb-4",
                            isLarge ? "text-base" : "text-sm line-clamp-3",
                          )}
                        >
                          {service.desc}
                        </p>

                        {/* Features List */}
                        <ul className="space-y-2 mb-4">
                          {service.features
                            ?.slice(0, isLarge ? 3 : 2)
                            .map((feature, i) => (
                              <li
                                key={i}
                                className={cn(
                                  "flex items-start gap-2 text-muted-foreground/90",
                                  isLarge
                                    ? "text-sm md:text-base"
                                    : "text-xs md:text-sm",
                                )}
                              >
                                <AnimatedCheckIcon
                                  color={service.color?.accent}
                                />
                                <span
                                  className={cn(
                                    "leading-tight",
                                    !isLarge && "line-clamp-2",
                                  )}
                                >
                                  {feature}
                                </span>
                              </li>
                            ))}
                        </ul>
                      </div>

                      <div className={cn("pt-2 mt-auto", isLarge && "mt-4")}>
                        <MagneticButton className="group text-sm font-semibold px-5 py-2.5 h-auto rounded-lg shadow-md transition-all duration-300 hover:shadow-lg bg-primary text-primary-foreground flex items-center w-fit">
                          {service.ctaText ||
                            servicesPageData.labels.getStarted}
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </MagneticButton>
                      </div>
                    </div>
                  </div>
                </MagicCard>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
