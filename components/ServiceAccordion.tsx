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
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 pb-24">
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
                                !isActive && "bg-transparent hover:bg-accent/50"
                            )}
                            style={{ backgroundColor: isActive && service.bgColor ? service.bgColor : undefined }}
                        >
                            <div
                                onMouseEnter={() => setActiveIndex(index)}
                                className="cursor-pointer py-8 px-4 md:px-8 transition-colors duration-300"
                            >
                                <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
                                    {/* Number */}
                                    <div className="flex-shrink-0 pt-1">
                                        <span className="text-sm font-medium text-muted-foreground">
                                            {indexStr}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-grow w-full">
                                        {/* Header: Title + Bullets */}
                                        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 w-full">
                                            <h3 className="text-2xl md:text-4xl font-light text-foreground">
                                                {service.title}
                                            </h3>


                                            <div className="hidden md:flex flex-wrap gap-2 md:gap-3 text-sm text-gray-500 font-normal mt-2 md:mt-0">
                                                {!isActive && service.bullets?.map((bullet, idx) => (
                                                    <span key={idx} className="after:content-['•'] after:ml-2 last:after:content-none whitespace-nowrap">
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
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pt-4 md:pt-6 max-w-3xl">
                                                        <div className="flex flex-wrap gap-2 mb-4 text-sm text-muted-foreground/80 font-normal">
                                                            {service.bullets?.map((bullet, idx) => (
                                                                <span key={idx} className="after:content-['•'] after:ml-2 last:after:content-none whitespace-nowrap">
                                                                    {bullet}
                                                                </span>
                                                            ))}
                                                        </div>

                                                        <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-6">
                                                            {service.desc}
                                                        </p>

                                                        {service.cta && (
                                                            <Link
                                                                href={service.cta.href}
                                                                className="inline-flex items-center justify-center px-6 py-2 text-xs font-medium tracking-widest uppercase border border-foreground rounded-full hover:bg-foreground hover:text-background transition-colors"
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
