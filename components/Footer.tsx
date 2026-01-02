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
        <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 md:p-16 text-foreground">
          <div className="flex flex-col md:flex-row justify-between w-full h-full relative">
            {/* Left Content */}
            <div className="flex flex-col gap-8 md:w-1/3">
              {/* Logo Mark */}
              <Logo />

              <div className="flex flex-col gap-1 mt-auto md:mt-0 pt-20">
                <h3 className="text-lg font-medium">Go digital with us</h3>
                <p className="text-sm opacity-80">50 Raya Building</p>
                <p className="text-sm opacity-80">Call us: 123-456-678</p>
              </div>
            </div>

            {/* Right Content - Links */}
            <div className="flex gap-12 md:gap-24 mt-10 md:mt-10 mr-0 md:mr-20 z-20">
              <div className="flex flex-col gap-6">
                <h4 className="font-semibold text-lg">Company</h4>
                <div className="flex flex-col gap-4 text-sm font-medium opacity-80">
                  <Link
                    href="/about"
                    className="hover:opacity-100 transition-opacity"
                  >
                    About
                  </Link>
                  <Link
                    href="/blog"
                    className="hover:opacity-100 transition-opacity"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/gallery"
                    className="hover:opacity-100 transition-opacity"
                  >
                    Gallery
                  </Link>
                  <Link
                    href="/contact"
                    className="hover:opacity-100 transition-opacity"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <h4 className="font-semibold text-lg">Social Media</h4>
                <div className="flex flex-col gap-4 text-sm font-medium opacity-80">
                  <Link
                    href="#"
                    className="hover:opacity-100 transition-opacity"
                  >
                    Facebook
                  </Link>
                  <Link
                    href="#"
                    className="hover:opacity-100 transition-opacity"
                  >
                    Instagram
                  </Link>
                  <Link
                    href="#"
                    className="hover:opacity-100 transition-opacity"
                  >
                    Twitter
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 relative z-20">
            <p className="text-sm opacity-60">
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
