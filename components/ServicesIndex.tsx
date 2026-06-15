"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { landingPageData } from "@/constants";
import { cn } from "@/lib/utils";

const services = landingPageData.services.content;

export function ServicesIndex() {
  const [hovered, setHovered] = useState<number | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 250, damping: 28, mass: 0.5 });
  const y = useSpring(my, { stiffness: 250, damping: 28, mass: 0.5 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-32">
      <div className="mb-12 max-w-2xl md:mb-16">
        <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-6xl">
          Everything you need,
          <br />
          <span className="text-blue">from first step to placed.</span>
        </h2>
        <p className="mt-5 text-lg text-ink-soft">
          {landingPageData.services.desc}
        </p>
      </div>

      {/* biome-ignore lint/a11y/noStaticElementInteractions: decorative cursor-follow preview only; the rows below are keyboard-accessible links */}
      <div
        className="relative"
        onMouseMove={handleMove}
        onMouseLeave={() => setHovered(null)}
      >
        {/* cursor-following preview (pointer-fine only) */}
        <motion.div
          aria-hidden
          style={{ x, y }}
          className="pointer-events-none absolute left-0 top-0 z-30 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
        >
          <motion.div
            animate={{
              opacity: hovered !== null ? 1 : 0,
              scale: hovered !== null ? 1 : 0.8,
            }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="h-56 w-72 overflow-hidden rounded-2xl shadow-2xl ring-1 ring-ink/10"
          >
            {hovered !== null && (
              <Image
                src={services[hovered].imgsrc}
                alt=""
                width={400}
                height={300}
                className="h-full w-full object-cover"
              />
            )}
          </motion.div>
        </motion.div>

        <ul className="border-t border-ink/10">
          {services.map((service, i) => {
            const dimmed = hovered !== null && hovered !== i;
            return (
              <motion.li
                key={service.slug}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="border-b border-ink/10"
              >
                <Link
                  href={`/services/${service.slug}`}
                  onMouseEnter={() => setHovered(i)}
                  className={cn(
                    "group relative flex items-center justify-between gap-6 overflow-hidden rounded-2xl px-4 py-6 transition-[opacity,transform] duration-300 md:px-6 md:py-7",
                    dimmed ? "opacity-40" : "opacity-100",
                  )}
                >
                  {/* wipe fill from the left */}
                  <span className="absolute inset-0 -z-0 origin-left scale-x-0 rounded-2xl bg-blue transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />

                  <div className="relative z-10 flex items-baseline gap-5 md:gap-8">
                    <span className="font-mono text-sm text-ink-soft transition-colors duration-300 group-hover:text-white/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-2xl font-semibold tracking-tight text-ink transition-[color,transform] duration-300 group-hover:translate-x-2 group-hover:text-white md:text-4xl">
                      {service.title}
                    </span>
                  </div>
                  <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-blue">
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>

      <div className="mt-12">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-base font-semibold text-blue hover:underline"
        >
          Explore services
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

export default ServicesIndex;
