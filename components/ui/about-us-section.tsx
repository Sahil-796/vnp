"use client";

import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image"; // Added this import
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { PageTitle } from "@/components/PageTitle";
import { aboutPageData } from "@/constants";

// Custom SVG Icons
const Icons = {
  Interior: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <title>Interior Design</title>
      <path d="M3 21h18M5 21v-7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7" />
      <path d="M19 10a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2" strokeOpacity="0.5" />
      <path d="M9 12v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
      <circle cx="12" cy="5" r="2" fill="currentColor" fillOpacity="0.1" />
    </svg>
  ),
  Exterior: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <title>Exterior Design</title>
      <path
        d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
        fill="currentColor"
        fillOpacity="0.05"
      />
      <path d="M9 22V12h6v10" />
      <path d="M18 6L21 9M3 9l3-3" strokeOpacity="0.5" />
    </svg>
  ),
  Design: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <title>Design Planning</title>
      <path d="M12 2L2 12l10 10 10-10L12 2z" strokeOpacity="0.5" />
      <path d="M12 6L6 12l6 6 6-6-6-6z" fill="currentColor" fillOpacity="0.1" />
      <path d="M12 2v20M2 12h20" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  ),
  Decoration: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <title>Decoration</title>
      <path
        d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26C17.81 13.47 19 11.38 19 9a7 7 0 0 0-7-7z"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <path d="M9 22h6" strokeWidth="2" />
      <path d="M12 6v4" strokeLinecap="round" />
      <path d="M8 8l1 1M16 8l-1 1" />
    </svg>
  ),
  Planning: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <title>Project Planning</title>
      <rect
        x="3"
        y="4"
        width="18"
        height="18"
        rx="2"
        ry="2"
        fill="currentColor"
        fillOpacity="0.05"
      />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" strokeOpacity="0.5" />
      <path
        d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"
        strokeWidth="2"
      />
    </svg>
  ),
  Execution: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <title>Execution</title>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeOpacity="0.5" />
      <path d="M22 4L12 14.01l-3-3" strokeWidth="2" />
      <circle cx="12" cy="12" r="6" fill="currentColor" fillOpacity="0.1" />
    </svg>
  ),
};

export default function AboutUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });

  // Parallax effect for decorative elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const { hero, features, stats, cta, centerImage } = aboutPageData;

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="w-full py-24 px-4 bg-background text-foreground overflow-hidden relative"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <PageTitle
          badge={hero.badge}
          title={hero.title}
          description={hero.description}
          variants={itemVariants}
          icon={Zap}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Left Column */}
          <div className="space-y-16">
            {features
              .filter((feature) => feature.position === "left")
              .map((feature, index) => {
                const Icon =
                  Icons[feature.title as keyof typeof Icons] || feature.icon;
                return (
                  <ServiceItem
                    key={feature.title}
                    icon={<Icon className="w-6 h-6" />}
                    title={feature.title}
                    description={feature.description}
                    variants={itemVariants}
                    delay={index * 0.2}
                    direction="left"
                    variant={index % 2 !== 0 ? "primary" : "secondary"}
                  />
                );
              })}
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
            <motion.div
              className="relative w-full max-w-xs"
              variants={itemVariants}
            >
              <motion.div
                className="rounded-md overflow-hidden shadow-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <img
                  src={centerImage.src}
                  alt={centerImage.alt}
                  className="w-full h-full object-cover"
                  width={400}
                  height={500}
                />
                <motion.div
                  className="absolute inset-0 flex items-end justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <motion.button
                    className="scale-95 bg-card text-card-foreground px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium"
                    whileTap={{ scale: 0.95 }}
                  >
                    {centerImage.badge}
                  </motion.button>
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute inset-0 border-4 border-muted rounded-md -m-3 z-[-1]"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              ></motion.div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-4 -right-8 w-16 h-16 rounded-full bg-primary/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                style={{ y: y1 }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-6 -left-10 w-20 h-20 rounded-full bg-secondary/15"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                style={{ y: y2 }}
              ></motion.div>

              {/* Additional decorative elements */}
              <motion.div className="absolute -top-10 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary"></motion.div>
              <motion.div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-secondary"></motion.div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-16">
            {features
              .filter((feature) => feature.position === "right")
              .map((feature, index) => {
                const Icon =
                  Icons[feature.title as keyof typeof Icons] || feature.icon;
                return (
                  <ServiceItem
                    key={feature.title}
                    icon={<Icon className="w-6 h-6" />}
                    title={feature.title}
                    description={feature.description}
                    variants={itemVariants}
                    delay={index * 0.2}
                    direction="right"
                    variant={index % 2 === 0 ? "primary" : "secondary"}
                  />
                );
              })}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <StatCounter
              key={stat.label}
              icon={<stat.icon />}
              value={stat.value}
              label={stat.label }
              label2={stat.label2 || ""}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 bg-primary/10 text-foreground p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex-1">
            <h3 className="text-2xl font-medium mb-2">{cta.title}</h3>
            <p className="text-muted-foreground">{cta.description}</p>
          </div>
          <motion.button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-colors">
            {cta.buttonText} <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variants: Variants;
  delay: number;
  direction: "left" | "right";
  variant?: "primary" | "secondary";
}

function ServiceItem({
  icon,
  title,
  description,
  variants,
  delay,
  direction,
  variant = "primary",
}: ServiceItemProps) {
  return (
    <motion.div
      className="flex flex-col group"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="flex items-center gap-3 mb-3"
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div
          className={`p-3 rounded-lg transition-colors duration-300 relative ${variant === "primary"
            ? "bg-primary/10 text-primary"
            : "bg-secondary/10 text-secondary"
            }`}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
      </motion.div>
      <motion.p
        className="text-sm text-muted-foreground leading-relaxed pl-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>
      <motion.div
        className="mt-3 pl-12 flex items-center text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
      >
        <span className="flex items-center gap-1">
          {aboutPageData.labels.learnMore} <ArrowRight className="w-3 h-3" />
        </span>
      </motion.div>
    </motion.div>
  );
}

interface StatCounterProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  label2: string;
  suffix: string;
  delay: number;
}

function StatCounter({ icon, value, label, label2, suffix, delay }: StatCounterProps) {
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 10,
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value);
      setHasAnimated(true);
    } else if (!isInView && hasAnimated) {
      springValue.set(0);
      setHasAnimated(false);
    }
  }, [isInView, value, springValue, hasAnimated]);

  const displayValue = useTransform(springValue, (latest) =>
    Math.floor(latest),
  );

  return (
    <motion.div
      className="bg-card/50 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-center group hover:bg-card transition-colors duration-300"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-4 text-primary group-hover:bg-primary/10 transition-colors duration-300"
        whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
      >
        {icon}
      </motion.div>
      <motion.div
        ref={countRef}
        className="text-3xl font-bold text-foreground flex items-center"
      >
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="text-muted-foreground text-sm mt-1">{label}</p>
      <p className="text-muted-foreground text-sm mt-1">{label2}</p>

      <motion.div className="w-10 h-0.5 bg-primary mt-3 group-hover:w-16 transition-all duration-300" />
    </motion.div>
  );
}
