"use client";

import Image from "next/image";
import { DotGrid } from "@/components/ui/dot-grid";
import { Logo } from "./Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="p-4 md:p-10">
      <div className="rounded-4xl relative h-[50vh] w-full bg-[#EBE9D6]">
        {/* Background Image */}
        <Image
          src="/hero-footer.png"
          alt="background"
          fill
          className="object-cover opacity-80 rounded-4xl"
          priority
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 md:p-16 text-[#161C2D]">
          <div className="flex flex-col md:flex-row justify-between w-full h-full relative">
            {/* Left Content */}
            <div className="flex flex-col gap-14 md:w-1/3">
              {/* Logo Mark */}
              <Logo />

              <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-bold tracking-tight leading-tight">Elevating Digital<br />Experiences</h3>
                <div className="flex flex-col gap-1 mt-2">
                  <p className="text-base font-medium opacity-70">123 Innovation Drive, Tech City, CA 94043</p>
                  <p className="text-base font-medium opacity-70">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            {/* Right Content - Links */}
            <div className="flex gap-12 md:gap-24 mt-10 md:mt-10 mr-0 md:mr-20 z-20">
              <div className="flex flex-col gap-6">
                <h4 className="font-bold text-sm tracking-widest uppercase opacity-40">Company</h4>
                <div className="flex flex-col gap-4 text-base font-medium text-[#161C2D]/80">
                  <Link
                    href="/about"
                    className="hover:text-[#161C2D] hover:translate-x-1 transition-all duration-300"
                  >
                    About
                  </Link>
                  <Link
                    href="/blog"
                    className="hover:text-[#161C2D] hover:translate-x-1 transition-all duration-300"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/gallery"
                    className="hover:text-[#161C2D] hover:translate-x-1 transition-all duration-300"
                  >
                    Gallery
                  </Link>
                  <Link
                    href="/contact"
                    className="hover:text-[#161C2D] hover:translate-x-1 transition-all duration-300"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <h4 className="font-bold text-sm tracking-widest uppercase opacity-40">Social Media</h4>
                <div className="flex flex-col gap-4 text-base font-medium text-[#161C2D]/80">
                  <Link
                    href="#"
                    className="hover:text-[#161C2D] hover:translate-x-1 transition-all duration-300"
                  >
                    Facebook
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-[#161C2D] hover:translate-x-1 transition-all duration-300"
                  >
                    Instagram
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-[#161C2D] hover:translate-x-1 transition-all duration-300"
                  >
                    Twitter
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/3 mt-8 relative z-20 border-t border-[#161C2D] pt-8">
            <p className="text-sm font-medium">
              Copyright © 2025 Vision & Path. All Rights Reserved.
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
          <div className="w-full h-full border border-[#161C2D] rounded-3xl relative">
            <div className="absolute top-5 -left-10 w-15 h-15 bg-[#161C2D] rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
