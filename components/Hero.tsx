"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CtaButton } from "@/components/ui/cta-button";
import { landingPageData } from "@/constants";

const Hero = () => {
  return (
    <div className="relative mb-48 md:mb-32">
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
          {/* <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-0" /> */}
        </div>

        <div className="absolute top-[20%] md:top-1/2 left-6 md:left-24 md:-translate-y-1/2 z-10 max-w-xl md:max-w-2xl lg:max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-md">
              {landingPageData.hero.titlep1}
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/70">
                {landingPageData.hero.titlep2}
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 md:mb-8 font-medium max-w-sm md:max-w-lg leading-relaxed drop-shadow-sm"
          >
            {landingPageData.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CtaButton
              size="lg"
              variant="default"
              className="rounded-2xl text-base md:text-lg h-12 md:h-14 px-6 md:px-8 shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              {landingPageData.hero.ctap}
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

    </div>
  );
};

export default Hero;