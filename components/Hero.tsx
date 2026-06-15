"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { HeroCanvas } from "@/components/three/HeroCanvas";
import { CtaButton } from "@/components/ui/cta-button";

const Hero = () => {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-paper">
      <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-40" />

      <div className="relative z-10 mx-auto grid min-h-[100dvh] max-w-[1400px] grid-cols-1 items-center gap-8 px-5 pt-28 pb-14 md:px-8 lg:grid-cols-12 lg:gap-10 lg:pt-24">
        {/* Copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-6"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-paper-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft"
          >
            <span className="h-2 w-2 rounded-full bg-blue" />
            Talent meets teams
            <span className="h-2 w-2 rounded-full bg-yellow" />
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display mt-5 text-[2.5rem] font-extrabold leading-[0.96] tracking-tight text-ink sm:text-5xl lg:text-[3.7rem] xl:text-[4.1rem]"
          >
            Career guidance for <span className="text-blue">talent.</span>
            <br />
            Hiring support for{" "}
            <span className="mark-yellow text-ink">teams.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl"
          >
            We help students and professionals build the right career path, and
            help companies hire dependable, role-ready talent.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link href="/contact" aria-label="Book a session">
              <CtaButton size="lg" className="px-8 text-base">
                Book a session
              </CtaButton>
            </Link>
            <Link href="/services">
              <CtaButton variant="outline" size="lg" className="px-8 text-base">
                Explore services
              </CtaButton>
            </Link>
          </motion.div>
        </motion.div>

        {/* 3D stage: contained world + grounded mascot */}
        <div className="relative h-[48vh] min-h-[360px] lg:col-span-6 lg:h-[80vh]">
          {/* solid stage that frames and bounds the 3D world */}
          <div className="absolute inset-0 overflow-hidden rounded-[2.25rem] bg-blue-100">
            <HeroCanvas />
          </div>
          {/* mascot grounded at the base of the stage, in front of the world */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 bottom-0 z-10 flex justify-center"
          >
            <Image
              src="/hero-man.png"
              alt="Vision and Path career mentor"
              width={620}
              height={760}
              priority
              className="h-[46vh] w-auto object-contain object-bottom drop-shadow-2xl lg:h-[74vh]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
