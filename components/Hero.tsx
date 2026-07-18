"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "@/components/ui/cta-button";
import { landingPageData } from "@/constants";
import { EVerifyBadge } from "./EVerifyBadge";

const renderTitle = (text: string, highlight: string[]) =>
  text.split(/(\s+)/).map((token, i) => {
    const clean = token.replace(/[^a-zA-Z]/g, "").toLowerCase();
    if (clean && highlight.includes(clean)) {
      return (
        <span
          // biome-ignore lint/suspicious/noArrayIndexKey: static title tokens, never reordered
          key={i}
          className="box-decoration-clone bg-linear-to-b from-transparent from-[62%] to-secondary to-[62%] px-1 -mx-0.5"
        >
          {token}
        </span>
      );
    }
    return token;
  });

const Hero = () => {
  return (
    <div className="relative mt-32 mb-48 md:mb-32">
      <div className="relative overflow-hidden rounded-3xl md:rounded-4xl shadow-2xl">
        <div className="rounded-3xl md:rounded-4xl overflow-hidden relative h-[85vh] md:h-[70vh] w-full">
          <Image
            src="/new-hero.jpg"
            alt="background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute top-[18%] md:top-1/2 left-6 md:left-24 md:-translate-y-1/2 z-10 max-w-xl md:max-w-2xl lg:max-w-[54rem]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 md:mb-6"
          >
            <EVerifyBadge imageClassName="w-24 md:w-28" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.1rem] xl:text-[3.35rem] font-bold text-primary mb-3 md:mb-5 leading-[1.12] text-balance drop-shadow-md">
              {renderTitle(
                landingPageData.hero.titlep1,
                landingPageData.hero.highlight,
              )}
              <br />
              {renderTitle(
                landingPageData.hero.titlep2,
                landingPageData.hero.highlight,
              )}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-[#3A566D] mb-6 md:mb-8 font-medium max-w-sm md:max-w-lg leading-relaxed drop-shadow-sm"
          >
            {landingPageData.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link href="/contact">
              <CtaButton
                size="lg"
                className="rounded-2xl text-base md:text-lg h-12 md:h-14 px-6 md:px-8 shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                {landingPageData.hero.ctap}
              </CtaButton>
            </Link>
            <Link href="/services">
              <CtaButton
                size="lg"
                variant="outline"
                className="rounded-2xl text-base md:text-lg h-12 md:h-14 px-6 md:px-8 bg-background/50 shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                {landingPageData.hero.ctad}
              </CtaButton>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute h-[40vh] md:h-[50vh] lg:h-[60vh] w-auto -bottom-10 right-0 md:-right-6 lg:-right-12 z-0 md:z-10 pointer-events-none"
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
