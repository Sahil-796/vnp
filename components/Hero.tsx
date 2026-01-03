"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CtaButton } from "@/components/ui/cta-button";
import { data } from "@/constansts";

const Hero = () => {
  return (
    <div className="relative mb-48 md:mb-64">
      <div className="relative overflow-hidden rounded-3xl md:rounded-4xl shadow-2xl">
        <div className="rounded-3xl md:rounded-4xl overflow-hidden relative h-[85vh] md:h-[70vh] w-full">
          <Image
            src="/hero-footer.png"
            alt="background"
            fill
            className="object-cover"
            priority
          />
          {/* Contrast Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-0" />
        </div>

        <div className="absolute top-[20%] md:top-1/2 left-6 md:left-24 md:-translate-y-1/2 z-10 max-w-xl md:max-w-2xl lg:max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-md">
              {data.hero.titlep1}
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/70">
                {data.hero.titlep2}
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 md:mb-8 font-medium max-w-sm md:max-w-lg leading-relaxed drop-shadow-sm"
          >
            {data.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CtaButton
              size="lg"
              variant="default"
              className="rounded-full text-base md:text-lg h-12 md:h-14 px-6 md:px-8 shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              {data.hero.ctap}
            </CtaButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute h-[40vh] md:h-[50vh] lg:h-[60vh] w-auto bottom-0 right-0 md:-right-6 lg:-right-12 z-0 md:z-10 pointer-events-none"
        >
          <Image
            src="/hero-man.png"
            alt="avatar"
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-auto object-contain opacity-80 md:opacity-100"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, type: "spring", bounce: 0.3 }}
        className="absolute h-auto min-h-[15vh] md:min-h-[20vh] w-[90vw] md:w-[60vw] -bottom-36 md:-bottom-42 left-1/2 -translate-x-1/2 rounded-3xl md:rounded-4xl bg-background/80 backdrop-blur-lg border border-border shadow-2xl flex flex-col gap-4 md:gap-6 items-center justify-center p-6 md:p-8 z-20"
      >
        <p className="text-center text-base md:text-2xl font-medium text-foreground max-w-3xl leading-relaxed relative z-10">
          {data.hero.desc}
        </p>
        <CtaButton
          variant="default"
          size="lg"
          className="bg-gray-500 hover:bg-gray-600 relative z-10 rounded-full text-sm md:text-base h-10 md:h-12 px-6 md:px-8 transition-all duration-300 cursor-pointer"
        >
          {data.hero.ctad}
        </CtaButton>
      </motion.div>
    </div>
  );
};

export default Hero;
