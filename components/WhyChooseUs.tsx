"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { data } from "@/constants";

// Custom SVG Icons
const Icons = {
    Expertise: (props: any) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
            <path d="M12 15l-2 5l2 2l2-2l-2-5z" fill="currentColor" fillOpacity="0.2" />
            <path d="M12 4a4 4 0 0 1 4 4c0 1.25-.5 2.4-1.4 3.1L12 15l-2.6-3.9A3.99 3.99 0 0 1 8 8a4 4 0 0 1 4-4z" />
            <circle cx="12" cy="8" r="1.5" />
            <path d="M16 8h6M16 12h5M2 8h6M3 12h5" strokeOpacity="0.5" />
        </svg>
    ),
    "Custom Solutions": (props: any) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
            <rect x="4" y="4" width="7" height="7" rx="1" fill="currentColor" fillOpacity="0.1" />
            <rect x="13" y="13" width="7" height="7" rx="1" fill="currentColor" fillOpacity="0.12" />
            <path d="M11 11h2v2h-2z" strokeWidth="2" />
            <path d="M7 7h1v1H7zM16 16h1v1h-1z" fill="currentColor" />
            <path d="M11 7h6M7 11v6" strokeOpacity="0.5" strokeDasharray="2 2" />
        </svg>
    ),
    "Customer-Focused": (props: any) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" fillOpacity="0.1" />
            <path d="M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
            <path d="M8 17c0-2.21 1.79-4 4-4s4 1.79 4 4" />
        </svg>
    ),
    Innovation: (props: any) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
            <path d="M9 18h6" />
            <path d="M10 22h4" />
            <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" fill="currentColor" fillOpacity="0.1" />
            <path d="M12 6v4" strokeLinecap="round" />
            <path d="M9.5 7.5l1 1M14.5 7.5l-1 1" />
        </svg>
    ),
    Flexibility: (props: any) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeOpacity="0.5" />
            <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.1" />
            <path d="M12 8a4 4 0 0 1 0 8 4 4 0 0 1 0-8z" strokeDasharray="2 2" />
        </svg>
    ),
    "Quality Commitment": (props: any) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
            <path d="M12 2L9.09 8.26L2 9.27l5.14 5.01L5.92 21.18L12 17.77l6.08 3.41l-1.21-6.9L22 9.27l-7.09-1.01L12 2z" fill="currentColor" fillOpacity="0.15" />
            <path d="M9 12l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
};

export const WhyChooseUs = () => {
    return (
        <section className="relative py-24 overflow-hidden bg-background">
            <div className="container px-4 mx-auto relative z-10">
                <SectionTitle
                    title="Why Choose Us?"
                    description="Here's why businesses choose us to handle their digital needs"
                    containerClassName="mb-16"
                />

                <div className="relative max-w-4xl mx-auto pt-10">
                    {/* Connecting String Line (Desktop Only) - Aligned to Content */}
                    <div className="absolute inset-0 hidden lg:block pointer-events-none -z-10">
                        <svg
                            className="w-full h-full"
                            viewBox="0 0 1024 1200"
                            fill="none"
                            preserveAspectRatio="none"
                        >
                            <motion.path
                                d="M230,100 C500,100 500,300 790,300 C500,300 500,500 230,500 C500,500 500,700 790,700 C500,700 500,900 230,900 C500,900 500,1100 790,1100"
                                stroke="var(--muted-foreground)"
                                strokeWidth="3"
                                strokeDasharray="10 10"
                                initial={{ strokeDashoffset: 0 }}
                                animate={{ strokeDashoffset: 20 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="opacity-50"
                            />
                        </svg>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 items-start">
                        {data.whyChooseUs.map((feature, index) => {
                            // @ts-ignore
                            const Icon = Icons[feature.title] || feature.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50, rotate: index % 2 === 0 ? -2 : 2 }}
                                    whileInView={{ opacity: 1, y: 0, x: 0, rotate: index % 2 === 0 ? -2 : 2 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={cn(
                                        "group relative flex flex-col items-start p-6 rounded-[2rem] border-[6px] border-white shadow-xl hover:shadow-2xl transition-all duration-300",
                                        index % 2 === 1 ? "lg:mt-12" : ""
                                    )}
                                    style={{ backgroundColor: feature.color }}
                                >
                                    {/* Decorative Pin */}
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                                        <div className="relative">
                                            {/* Pin Head */}
                                            <div className={cn(
                                                "w-8 h-8 rounded-full shadow-lg flex items-center justify-center border-2 border-white/50 z-10",
                                                // @ts-ignore
                                                feature.pinColor || "bg-secondary"
                                            )}>
                                                <div className="w-3 h-3 rounded-full bg-white/30" />
                                            </div>
                                            {/* Pin Needle/Shadow illusion */}
                                        </div>
                                    </div>

                                    {/* Icon - Simplified, no container */}
                                    <div className="relative mb-4">
                                        <Icon className={cn("w-10 h-10", feature.iconColor)} />
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-800 mb-2 tracking-tight">
                                        {feature.title}
                                    </h3>

                                    <p className="text-slate-600 leading-relaxed text-sm font-medium">
                                        {feature.description}
                                    </p>

                                    {/* Decorative arrow/line on hover - kept but made subtle */}
                                    <div className="mt-4 w-12 h-1 rounded-full bg-slate-800/20 group-hover:w-full group-hover:bg-primary transition-all duration-500" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
