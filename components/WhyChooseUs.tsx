"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { data } from "@/constansts";

export const WhyChooseUs = () => {
    return (
        <section className="relative py-24 overflow-hidden bg-background">
            <div className="container px-4 mx-auto relative z-10">
                <SectionTitle
                    title="Why Choose Us?"
                    description="Here's why businesses choose us to handle their digital needs"
                    containerClassName="mb-16"
                />

                <div className="relative max-w-5xl mx-auto pt-10">
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
                                animate={{ strokeDashoffset: -20 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="opacity-50"
                            />
                        </svg>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-12 items-start">
                        {data.whyChooseUs.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        x: index % 2 === 0 ? -50 : 50,
                                        y: 50,
                                        rotate: index % 2 === 0 ? -2 : 2
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        y: 0,
                                        rotate: index % 2 === 0 ? -2 : 2
                                    }}
                                    whileHover={{
                                        y: -5,
                                        rotate: 0
                                    }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className={cn(
                                        "group relative bg-card rounded-[2rem] p-3 shadow-xl transition-shadow duration-300",
                                        index % 2 === 1 ? "lg:mt-16" : ""
                                    )}
                                >
                                    {/* Floating 3D Discs Decoration */}
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center justify-center">
                                        <div
                                            className={cn(
                                                "relative w-14 h-14 rounded-full shadow-lg",
                                                feature.iconBg,
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    "absolute top-0 right-0 w-10 h-10 rounded-full opacity-60 mix-blend-multiply",
                                                    feature.color,
                                                )}
                                            />
                                            <div
                                                className={cn(
                                                    "absolute bottom-1 left-1 w-12 h-12 rounded-full opacity-40 mix-blend-screen bg-white/50",
                                                )}
                                            />
                                        </div>
                                    </div>

                                    {/* Inner Colored Content Card */}
                                    <div
                                        className={cn(
                                            "h-full rounded-[1.5rem] p-6 pt-10 flex flex-col items-start gap-3",
                                            feature.color,
                                        )}
                                    >
                                        {/* Icon */}
                                        <div className="mb-1">
                                            <Icon className={cn("w-8 h-8", feature.iconColor)} />
                                        </div>

                                        <h3 className="text-xl font-bold text-foreground/90 tracking-tight">
                                            {feature.title}
                                        </h3>
                                        <p className="text-muted-foreground/80 leading-relaxed text-sm font-medium">
                                            {feature.description}
                                        </p>
                                    </div>
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
