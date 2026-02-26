"use client";

import { motion, type Variants } from "framer-motion";
import { Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PageTitle } from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import { aboutPageData } from "@/constants";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function AboutUsSection() {
  const { hero, values, stats, cta } = aboutPageData;

  return (
    <section className="relative overflow-hidden bg-background px-4 py-24 text-foreground md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-8 right-[-10rem] h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <motion.div
        className="container relative z-10 mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <PageTitle
            badge={hero.badge}
            title={hero.title}
            description="A quick look at who we are and why professionals trust Vision and Path."
            icon={Zap}
          />
        </motion.div>

        <motion.div
          className="mt-12 grid auto-rows-[minmax(170px,auto)] grid-cols-1 gap-5 md:grid-cols-6"
          variants={containerVariants}
        >
          <motion.article
            variants={itemVariants}
            className="group relative overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/20 via-card to-card p-8 shadow-[0_20px_50px_-30px_hsl(var(--primary)/0.7)] backdrop-blur-sm md:col-span-2"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full border border-primary/30 bg-primary/15 blur-xl" />
            <div className="flex h-full min-h-[190px] items-center justify-center rounded-2xl border border-dashed border-primary/30 bg-background/65 p-4">
              <Image
                src="/logo.png"
                alt="Vision and Path"
                width={280}
                height={280}
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.article>

          <motion.article
            variants={itemVariants}
            className="relative overflow-hidden rounded-3xl border border-secondary/25 bg-gradient-to-tr from-secondary/20 via-card to-card p-8 shadow-[0_20px_50px_-30px_hsl(var(--secondary)/0.8)] backdrop-blur-sm md:col-span-4"
          >
            <div className="pointer-events-none absolute -left-12 bottom-2 h-32 w-32 rounded-full border border-secondary/30 bg-secondary/10 blur-xl" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Mission
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-foreground/90">
              {hero.description}
            </p>
          </motion.article>

          <motion.article
            variants={itemVariants}
            className="rounded-3xl border border-border/60 bg-gradient-to-b from-card to-secondary/10 p-8 backdrop-blur-sm md:col-span-3"
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Values
              </p>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                What Drives Us
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-secondary/20 bg-background/70 p-4"
                >
                  <h3 className="text-sm font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article
            variants={itemVariants}
            className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-card via-card to-primary/10 p-8 backdrop-blur-sm md:col-span-3"
          >
            <div className="pointer-events-none absolute right-6 top-4 h-20 w-20 rounded-full border border-primary/30 bg-primary/10 blur-xl" />
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Numbers
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-primary/20 bg-background/70 p-4"
                  >
                    <Icon className="h-4 w-4 text-primary" />
                    <p className="mt-3 text-3xl font-bold text-foreground">
                      {stat.value}
                      {stat.suffix}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                    {stat.label2 ? (
                      <p className="mt-1 text-xs text-muted-foreground/80">
                        {stat.label2}
                      </p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </motion.article>

          <motion.article
            variants={itemVariants}
            className="relative overflow-hidden rounded-3xl border border-secondary/30 bg-gradient-to-br from-secondary/20 via-card to-primary/10 p-8 backdrop-blur-sm md:col-span-6"
          >
            <div className="pointer-events-none absolute -bottom-12 right-8 h-40 w-40 rounded-full border border-secondary/25 bg-secondary/10 blur-2xl" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Contact
            </p>
            <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <h3 className="text-2xl font-semibold text-foreground">
                  {cta.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{cta.description}</p>
              </div>
              <Button
                asChild
                className="h-12 rounded-xl bg-secondary px-8 text-secondary-foreground hover:bg-secondary/90"
              >
                <Link href="/contact">{cta.buttonText}</Link>
              </Button>
            </div>
          </motion.article>
        </motion.div>

        <motion.div className="mt-14 space-y-4" variants={itemVariants}>
          <Marquee className="[--duration:48s]" pauseOnHover>
            {industriesPrimary.map((industry) => (
              <div
                key={industry}
                className="rounded-xl border border-primary/25 bg-primary/10 px-5 py-2 text-sm font-medium text-foreground"
              >
                {industry}
              </div>
            ))}
          </Marquee>
          <Marquee className="[--duration:44s]" pauseOnHover reverse>
            {industriesSecondary.map((industry) => (
              <div
                key={industry}
                className="rounded-xl border border-secondary/25 bg-secondary/10 px-5 py-2 text-sm font-medium text-foreground"
              >
                {industry}
              </div>
            ))}
          </Marquee>
        </motion.div>
      </motion.div>
    </section>
  );
}

const industriesPrimary = [
  "Technology",
  "Finance",
  "Healthcare",
  "Consulting",
  "Manufacturing",
];

const industriesSecondary = [
  "Education",
  "E-Commerce",
  "Telecommunications",
  "Energy",
  "Media",
];
