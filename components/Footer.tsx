"use client";

import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DotGrid } from "@/components/ui/dot-grid";
import { landingPageData } from "@/constants";
import { Logo } from "./Logo";
import { MobileFooter } from "./MobileFooter";

const socialIcons = {
  Instagram,
  LinkedIn: Linkedin,
};

const Footer = () => {
  return (
    <>
      <div className="block md:hidden">
        <MobileFooter />
      </div>
      <div className="hidden md:block p-4 md:p-10 pb-20 md:pb-10">
        <div className="rounded-3xl md:rounded-4xl relative w-full bg-muted overflow-hidden flex flex-col">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/new-hero.jpg"
              alt="background"
              fill
              sizes="(min-width: 768px) 100vw, 100vw"
              className="object-cover opacity-80"
              priority
            />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 flex flex-col justify-between p-6 sm:p-10 md:p-16 text-foreground min-h-[500px] md:h-[50vh]">
            <div className="flex flex-col md:flex-row justify-between w-full relative gap-10 md:gap-0 h-full">
              {/* Left Content */}
              <div className="flex flex-col gap-8 md:gap-14 w-full md:w-1/3">
                {/* Logo Mark */}
                <Logo size="full" imageClassName="w-36 md:w-44" />

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1 mt-2">
                    <p className="text-sm md:text-base font-medium opacity-70">
                      {landingPageData.footer.address}
                    </p>
                    <p className="text-sm md:text-base font-medium opacity-70">
                      {landingPageData.footer.phone}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content - Links */}
              <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-24 mr-0 md:mr-20 z-20">
                <div className="flex flex-col gap-4 md:gap-6">
                  <h4 className="font-bold text-xs md:text-sm tracking-widest uppercase">
                    Company
                  </h4>
                  <div className="flex flex-col gap-3 md:gap-4 text-sm md:text-base font-medium text-muted-foreground">
                    {landingPageData.footer.companyLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="hover:text-foreground hover:translate-x-1 transition-all duration-300"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4 md:gap-6">
                  <h4 className="font-bold text-xs md:text-sm tracking-widest uppercase">
                    Social Media
                  </h4>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    {landingPageData.footer.socialLinks.map((link) => {
                      const Icon =
                        socialIcons[link.label as keyof typeof socialIcons];

                      return (
                        <Link
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={link.label}
                          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/20 bg-background/55 text-foreground shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-background/80 hover:text-primary"
                        >
                          {Icon ? (
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          ) : (
                            <span className="text-xs font-semibold">
                              {link.label.slice(0, 1)}
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 mt-12 md:mt-0 relative z-20 border-t border-foreground pt-6 md:pt-8 bg-transparent">
              <p className="text-xs md:text-sm font-medium opacity-60 md:opacity-100">
                {landingPageData.footer.copyright}
              </p>
            </div>
          </div>

          {/* Decorations */}

          {/* Top Right DotGrid Container */}
          <div className="absolute top-[18%] -right-[4%] z-10 hidden md:block opacity-70">
            <DotGrid size={4} />
          </div>

          {/* Bottom Left DotGrid */}
          <div className="absolute bottom-[20%] -left-[5%] z-20 hidden md:block">
            <DotGrid size={5} />
          </div>

          {/* Bottom Right Box Decoration */}
          <div className="absolute bottom-10 right-10 w-30 h-30 z-0 hidden md:block pointer-events-none">
            <div className="w-full h-full border border-foreground rounded-3xl relative">
              <div className="absolute top-5 -left-10 w-15 h-15 bg-foreground rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
