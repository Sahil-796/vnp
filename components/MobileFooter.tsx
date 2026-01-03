"use client";

import Image from "next/image";
import { Logo } from "./Logo";
import Link from "next/link";
import { data } from "@/constants";

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
                                {data.footer.titlep1}
                                <br />
                                {data.footer.titlep2}
                            </h3>
                            <div className="flex flex-col gap-1 mt-2">
                                <p className="text-sm font-medium opacity-70">
                                    {data.footer.address}
                                </p>
                                <p className="text-sm font-medium opacity-70">
                                    {data.footer.phone}
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
                                {data.footer.companyLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="font-bold text-xs tracking-widest uppercase">
                                Social Media
                            </h4>
                            <div className="flex flex-col gap-3 text-sm font-medium text-muted-foreground">
                                {data.footer.socialLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Content - Copyright */}
                <div className="w-full mt-12 relative z-20 border-t border-foreground pt-6 bg-transparent">
                    <p className="text-xs font-medium opacity-60">
                        {data.footer.copyright}
                    </p>
                </div>
            </div>
        </div>
    );
};
