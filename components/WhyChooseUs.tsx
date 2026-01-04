"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { data } from "@/constants";

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
                                animate={{ strokeDashoffset: 20 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="opacity-50"
                            />
                        </svg>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-10 items-start">
                        {data.whyChooseUs.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={cn(
                                        "group relative flex flex-col items-start p-6 rounded-3xl bg-white dark:bg-card border border-border/50 shadow-md hover:shadow-xl",
                                        "overflow-hidden",
                                        index % 2 === 1 ? "lg:mt-12" : ""
                                    )}
                                >
                                    {/* Ambient Background Gradient (derived from feature color) */}
                                    <div className={cn(
                                        "absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-transparent to-transparent opacity-20 rounded-full blur-3xl group-hover:opacity-40 transition-opacity duration-500",
                                        feature.color.replace('bg-', 'from-') // Hacky but works if colors are standard bg-*-100
                                    )} />

                                    {/* Icon Container */}
                                    <div className={cn(
                                        "relative mb-6 p-4 rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500",
                                        feature.color // Use the light color for background
                                    )}>
                                        <Icon className={cn("w-8 h-8", feature.iconColor)} />
                                    </div>

                                    <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                                        {feature.title}
                                    </h3>

                                    <p className="text-muted-foreground leading-relaxed text-base">
                                        {feature.description}
                                    </p>

                                    {/* Decorative arrow/line on hover */}
                                    <div className="mt-6 w-12 h-1 rounded-full bg-border group-hover:w-full group-hover:bg-secondary transition-all duration-500" />
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
