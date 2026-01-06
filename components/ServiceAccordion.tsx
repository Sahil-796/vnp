"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ServiceItem {
    title: string;
    desc: string;
    pillColor?: string;
    bullets?: string[];
    cta?: { label: string; href: string };
    imgsrc?: string;
    bgColor?: string;
}

interface ServiceAccordionProps {
    services: ServiceItem[];
}

export function ServiceAccordion({ services }: ServiceAccordionProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(1); // Default to 2nd item open as per design

    return (
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8 pb-32">
            <div
                className="flex flex-col"
                onMouseLeave={() => setActiveIndex(null)}
            >
                {services.map((service, index) => {
                    const isActive = index === activeIndex;
                    const indexStr = (index + 1).toString().padStart(2, "0");

                    return (
                        <div
                            key={index}
                            className={cn(
                                "group border-b border-border last:border-b-0",
                                !isActive && "bg-transparent"
                            )}
                            style={{ backgroundColor: isActive && service.bgColor ? service.bgColor : undefined }}
                        >
                            <div
                                onMouseEnter={() => setActiveIndex(index)}
                                onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                                className="cursor-pointer py-8 md:py-12 px-5 md:px-10 transition-colors duration-300"
                            >
                                <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-start">
                                    {/* Number */}
                                    <div className="flex-shrink-0 pt-2">
                                        <span className="text-base md:text-lg font-medium text-muted-foreground/70">
                                            {indexStr}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-grow w-full">
                                        {/* Header: Title + Bullets */}
                                        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-5 w-full overflow-hidden">
                                            <div className="overflow-hidden flex-shrink min-w-0 relative">
                                                <motion.h3
                                                    className="text-3xl md:text-[2.75rem] font-light text-foreground tracking-tight leading-tight whitespace-nowrap inline-flex"
                                                    animate={isActive ? { x: [0, -300] } : { x: 0 }}
                                                    transition={isActive ? {
                                                        x: {
                                                            duration: 6,
                                                            repeat: Infinity,
                                                            ease: "linear"
                                                        }
                                                    } : { duration: 0.3 }}
                                                >
                                                    <span>{service.title}</span>
                                                    {isActive && <span className="mx-12">•</span>}
                                                    {isActive && <span>{service.title}</span>}
                                                    {isActive && <span className="mx-12">•</span>}
                                                    {isActive && <span>{service.title}</span>}
                                                    {isActive && <span className="mx-12">•</span>}
                                                    {isActive && <span>{service.title}</span>}
                                                    {isActive && <span className="mx-12">•</span>}
                                                    {isActive && <span>{service.title}</span>}
                                                    {isActive && <span className="mx-12">•</span>}
                                                    {isActive && <span>{service.title}</span>}
                                                    {isActive && <span className="mx-12">•</span>}
                                                    {isActive && <span>{service.title}</span>}
                                                </motion.h3>
                                            </div>


                                            <div className="hidden md:flex flex-wrap gap-3 md:gap-4 text-sm md:text-base text-muted-foreground/60 font-medium mt-2 md:mt-0 flex-shrink-0">
                                                {!isActive && service.bullets?.map((bullet, idx) => (
                                                    <span key={idx} className="after:content-['•'] after:ml-3 last:after:content-none whitespace-nowrap">
                                                        {bullet}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Expanded Content */}
                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pt-5 md:pt-8 max-w-4xl">
                                                        <div className="flex flex-wrap gap-3 mb-5 text-sm md:text-base text-muted-foreground/80 font-normal">
                                                            {service.bullets?.map((bullet, idx) => (
                                                                <span key={idx} className="after:content-['•'] after:ml-3 last:after:content-none whitespace-nowrap">
                                                                    {bullet}
                                                                </span>
                                                            ))}
                                                        </div>

                                                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8 font-light">
                                                            {service.desc}
                                                        </p>

                                                        {service.cta && (
                                                            <Link
                                                                href={service.cta.href}
                                                                className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold tracking-widest uppercase border-2 border-foreground rounded-full hover:bg-foreground hover:text-background transition-colors"
                                                            >
                                                                {service.cta.label}
                                                            </Link>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
