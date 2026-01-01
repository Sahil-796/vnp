"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CtaButton } from "@/components/ui/cta-button";

const Hero = () => {
  return (
    <div className="relative mb-32">
      <div className="relative overflow-hidden rounded-4xl">
        <div className="rounded-4xl overflow-hidden relative h-[70vh] w-full">
          <Image
            src="/hero-footer.png"
            alt="background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute top-1/2 left-12 md:left-24 -translate-y-1/2 z-10 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight drop-shadow-md">
              Elevate Your <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-background to-background/70">
                Digital Presence
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground mb-8 font-medium max-w-lg leading-relaxed shadow-black/5 drop-shadow-sm"
          >
            Crafting superior experiences with precision and innovative design
            solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CtaButton
              size="lg"
              variant="default"
              className="rounded-full text-lg h-14 px-8 shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              Get Started Now
            </CtaButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute h-[60vh] w-auto bottom-0 -right-12 z-10 pointer-events-none"
        >
          <Image
            src="/hero-man.png"
            alt="avatar"
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-auto object-contain"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, type: "spring", bounce: 0.3 }}
        className="absolute h-auto min-h-[20vh] w-[85vw] md:w-[60vw] -bottom-42 left-1/2 -translate-x-1/2 rounded-[2rem] bg-secondary/70 backdrop-blur-lg border border-border shadow-2xl flex flex-col gap-6 items-center justify-center p-8 z-20"
      >
        <p className="text-center text-lg md:text-2xl font-medium text-secondary-foreground max-w-3xl leading-relaxed relative z-10">
          Unlock the potential of your business with our comprehensive suite of
          tools designed to streamline your workflow and boost productivity.
        </p>
        <CtaButton
          variant="secondary"
          size="lg"
          className="relative z-10 rounded-full text-base h-12 px-8 transition-all duration-300 cursor-pointer"
        >
          Learn More
        </CtaButton>
      </motion.div>
    </div>
  );
};

export default Hero;
