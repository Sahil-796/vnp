"use client";

import Image from "next/image";
import { Logo } from "./Logo";
import Link from "next/link";

export const MobileFooter = () => {
    return (
        <div className="relative w-full bg-muted overflow-hidden flex flex-col rounded-t-3xl mt-12">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-footer.png"
                    alt="background"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 flex flex-col justify-between p-8 text-foreground min-h-[500px]">
                <div className="flex flex-col w-full relative h-full gap-10">
                    {/* Top Content - Logo & Address */}
                    <div className="flex flex-col gap-8 w-full">
                        <Logo />

                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl font-bold tracking-tight leading-tight">
                                Elevating Digital
                                <br />
                                Experiences
                            </h3>
                            <div className="flex flex-col gap-1 mt-2">
                                <p className="text-sm font-medium opacity-70">
                                    123 Innovation Drive, Tech City, CA 94043
                                </p>
                                <p className="text-sm font-medium opacity-70">
                                    +1 (555) 123-4567
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Middle Content - Links */}
                    <div className="flex flex-wrap gap-10 w-full z-20">
                        <div className="flex flex-col gap-4">
                            <h4 className="font-bold text-xs tracking-widest uppercase">
                                Company
                            </h4>
                            <div className="flex flex-col gap-3 text-sm font-medium text-muted-foreground">
                                <Link href="/about" className="hover:text-foreground transition-colors">
                                    About
                                </Link>
                                <Link href="/blog" className="hover:text-foreground transition-colors">
                                    Blog
                                </Link>
                                <Link href="/gallery" className="hover:text-foreground transition-colors">
                                    Gallery
                                </Link>
                                <Link href="/contact" className="hover:text-foreground transition-colors">
                                    Contact
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="font-bold text-xs tracking-widest uppercase">
                                Social Media
                            </h4>
                            <div className="flex flex-col gap-3 text-sm font-medium text-muted-foreground">
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    Facebook
                                </Link>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    Instagram
                                </Link>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    Twitter
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Content - Copyright */}
                <div className="w-full mt-12 relative z-20 border-t border-foreground pt-6 bg-transparent">
                    <p className="text-xs font-medium opacity-60">
                        Copyright © 2025 Vision & Path. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};
