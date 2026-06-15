"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const talent = {
  kicker: "01",
  heading: "For talent",
  promise:
    "Build a career on purpose. We turn scattered applications into a focused plan with real momentum.",
  items: [
    "Career assessment + direction",
    "Goal setting and skill development",
    "Interview prep that builds confidence",
    "A job-search system, not guesswork",
  ],
  cta: { label: "Explore services", href: "/services" },
};

const teams = {
  kicker: "02",
  heading: "For teams",
  promise:
    "Hire people who actually fit the work. We run the search end to end so your roles close faster.",
  items: [
    "Role definition and intake",
    "Sourcing and profile screening",
    "Shortlists matched to your bar",
    "Interview coordination to offer",
  ],
  cta: { label: "Book a session", href: "/contact" },
};

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function TwoPaths() {
  return (
    <section className="relative mx-auto mt-8 max-w-[1500px] px-4 md:px-6">
      <div className="grid overflow-hidden rounded-[2rem] shadow-lg md:grid-cols-2">
        {/* Talent: light blue world */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative flex flex-col justify-between gap-12 bg-blue-100 p-8 md:p-12 lg:p-16"
        >
          <div>
            <span className="font-mono text-sm font-medium text-blue">
              {talent.kicker}
            </span>
            <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-ink md:text-5xl">
              {talent.heading}
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-soft">
              {talent.promise}
            </p>
          </div>
          <ul className="divide-y divide-ink/10">
            {talent.items.map((it) => (
              <li
                key={it}
                className="flex items-center gap-3 py-3.5 text-base font-medium text-ink"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                {it}
              </li>
            ))}
          </ul>
          <Link
            href={talent.cta.href}
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-blue px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            {talent.cta.label}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        {/* Teams: deep navy world */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.08 }}
          className="relative flex flex-col justify-between gap-12 bg-navy p-8 text-white md:p-12 lg:p-16"
        >
          <div>
            <span className="font-mono text-sm font-medium text-yellow">
              {teams.kicker}
            </span>
            <h2 className="font-display mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              {teams.heading}
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-white/70">
              {teams.promise}
            </p>
          </div>
          <ul className="divide-y divide-white/10">
            {teams.items.map((it) => (
              <li
                key={it}
                className="flex items-center gap-3 py-3.5 text-base font-medium text-white/90"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-yellow" />
                {it}
              </li>
            ))}
          </ul>
          <Link
            href={teams.cta.href}
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-yellow px-6 py-3 text-sm font-semibold text-ink transition-transform duration-200 hover:-translate-y-0.5"
          >
            {teams.cta.label}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default TwoPaths;
