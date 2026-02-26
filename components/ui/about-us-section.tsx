"use client";

import { motion, type Variants } from "framer-motion";
import { Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MagicBento from "@/components/MagicBento";
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

        <motion.div className="mt-12" variants={containerVariants}>
          <MagicBento
            className="max-w-none p-0"
            gridClassName="grid auto-rows-[minmax(170px,auto)] grid-cols-1 gap-5 md:grid-cols-6"
            enableStars={true}
            enableSpotlight
            enableBorderGlow
            enableTilt={true}
            enableMagnetism={false}
            clickEffect={true}
            glowColor="primary"
            spotlightRadius={280}
          >
            <motion.article
              variants={itemVariants}
              className="magic-bento-card card--border-glow group relative overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/20 via-card to-card p-8 shadow-[0_20px_50px_-30px_hsl(var(--primary)/0.7)] backdrop-blur-sm md:col-span-2"
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
              className="magic-bento-card card--border-glow relative overflow-hidden rounded-3xl border border-secondary/25 bg-gradient-to-tr from-secondary/20 via-card to-card p-8 shadow-[0_20px_50px_-30px_hsl(var(--secondary)/0.8)] backdrop-blur-sm md:col-span-4"
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
              className="magic-bento-card card--border-glow rounded-3xl border border-border/60 bg-gradient-to-b from-card to-secondary/10 p-8 backdrop-blur-sm md:col-span-3"
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
              className="magic-bento-card card--border-glow relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-card to-secondary/15 p-8 backdrop-blur-sm md:col-span-3"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-primary/30 bg-primary/10 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full border border-secondary/30 bg-secondary/10 blur-2xl" />
              <div className="relative mb-6 rounded-2xl border border-primary/20 bg-background/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  Numbers
                </p>
                <p className="mt-2 text-lg font-semibold text-foreground">
                  Results that prove the process
                </p>
                <p className="text-sm text-muted-foreground">
                  Real placement momentum across candidates and employers.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.label}
                      className={`rounded-2xl border p-4 transition-transform duration-300 hover:-translate-y-1 ${
                        index % 2 === 0
                          ? "border-primary/30 bg-primary/10"
                          : "border-secondary/30 bg-secondary/10"
                      }`}
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <Icon
                          className={`h-4 w-4 ${
                            index % 2 === 0 ? "text-primary" : "text-secondary"
                          }`}
                        />
                      </div>
                      <p className="mt-1 text-3xl font-bold leading-none text-foreground">
                        {stat.value}
                        {stat.suffix}
                      </p>
                      <p className="mt-2 text-sm font-medium text-foreground/90">
                        {stat.label}
                      </p>
                      {stat.label2 ? (
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground/80">
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
              className="magic-bento-card card--border-glow relative overflow-hidden rounded-3xl border border-secondary/30 bg-gradient-to-br from-secondary/20 via-card to-primary/10 p-8 backdrop-blur-sm md:col-span-6"
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
                  <p className="mt-2 text-muted-foreground">
                    {cta.description}
                  </p>
                </div>
                <Button
                  asChild
                  className="h-12 rounded-xl bg-secondary px-8 text-secondary-foreground hover:bg-secondary/90"
                >
                  <Link href="/contact">{cta.buttonText}</Link>
                </Button>
              </div>
            </motion.article>
          </MagicBento>
        </motion.div>

        <motion.div className="mt-24 space-y-12" variants={itemVariants}>
          <div>
            <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Trusted by Tech Giants
            </p>
            <div className="relative w-full overflow-hidden">
              <Marquee className="[--duration:30s] [--gap:3rem] md:[--gap:5rem]">
                {clients.map((client) => (
                  <div
                    key={client.name}
                    className="relative flex h-12 w-28 cursor-pointer items-center justify-center transition-all duration-300 md:h-16 md:w-36"
                  >
                    <Image
                      src={client.src}
                      alt={client.name}
                      fill
                      className="object-contain mix-blend-multiply"
                    />
                  </div>
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent" />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="mb-6 text-center text-2xl font-semibold">
              Industries We Serve
            </h3>
            <Marquee className="[--duration:45s]">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="mx-4 whitespace-nowrap rounded-xl bg-secondary px-6 py-3 font-medium text-secondary-foreground"
                >
                  {industry}
                </div>
              ))}
            </Marquee>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

const industries = [
  "Technology",
  "Finance",
  "Healthcare",
  "Consulting",
  "Manufacturing",
  "Education",
  "E-Commerce",
  "Telecommunications",
  "Energy",
  "Media",
];

const clients = [
  { name: "Google", src: "/google.png" },
  { name: "Amazon", src: "/amazon.png" },
  { name: "Microsoft", src: "/microsoft.png" },
  { name: "Nvidia", src: "/nvidia.png" },
  { name: "Apple", src: "/apple.png" },
];
