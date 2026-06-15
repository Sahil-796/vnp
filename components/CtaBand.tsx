"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { siteInfo } from "@/constants";

export function CtaBand() {
  const reduce = useReducedMotion();

  return (
    <section className="mx-auto max-w-[1500px] px-4 py-12 md:px-6">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-secondary px-6 py-16 md:px-16 md:py-24">
        <div className="relative flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-ink md:text-6xl lg:text-7xl">
              Your next move
              <br />
              starts here.
            </h2>
            <p className="mt-5 max-w-md text-lg text-ink/70">
              Job-hunting or hiring, let&apos;s talk about where you want to go
              and how we get you there.
            </p>
          </motion.div>

          <div className="flex flex-col items-start gap-4">
            <Link
              href="/contact"
              aria-label="Book a session"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.97]"
            >
              Book a session
              <ArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href={`mailto:${siteInfo.email}`}
              className="pl-2 text-sm font-medium text-ink/70 underline-offset-4 hover:text-ink hover:underline"
            >
              Prefer email? {siteInfo.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaBand;
