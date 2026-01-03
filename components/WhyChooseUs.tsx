"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
    Lightbulb,
    Settings,
    Users,
    Zap,
    BarChart3,
    Award,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const features = [
    {
        title: "Expertise",
        description:
            "We leverage over 15 years of experience to deliver high-quality, tailored solutions for every client.",
        icon: <Award className="w-8 h-8 text-yellow-600" />,
        color: "bg-yellow-100",
        iconBg: "bg-yellow-200",
        shadow: "shadow-[0_10px_40px_-15px_rgba(234,179,8,0.2)]",
    },
    {
        title: "Custom Solutions",
        description:
            "Each solution is personalized, ensuring that your business gets the exact tools it needs to succeed.",
        icon: <Zap className="w-8 h-8 text-purple-600" />,
        color: "bg-purple-100",
        iconBg: "bg-purple-200",
        shadow: "shadow-[0_10px_40px_-15px_rgba(147,51,234,0.2)]",
    },
    {
        title: "Customer-Focused",
        description:
            "We prioritize your satisfaction and aim to exceed your expectations in every project we take on.",
        icon: <Users className="w-8 h-8 text-pink-600" />,
        color: "bg-pink-100",
        iconBg: "bg-pink-200",
        shadow: "shadow-[0_10px_40px_-15px_rgba(236,72,153,0.2)]",
    },
    {
        title: "Innovation",
        description:
            "We stay ahead of the curve, implementing the latest technologies to keep your business on the cutting edge.",
        icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
        color: "bg-blue-100",
        iconBg: "bg-blue-200",
        shadow: "shadow-[0_10px_40px_-15px_rgba(37,99,235,0.2)]",
    },
    {
        title: "Flexibility",
        description:
            "We understand that businesses change, and we offer solutions that can adapt to your evolving needs.",
        icon: <Settings className="w-8 h-8 text-green-600" />,
        color: "bg-green-100",
        iconBg: "bg-green-200",
        shadow: "shadow-[0_10px_40px_-15px_rgba(22,163,74,0.2)]",
    },
    {
        title: "Quality Commitment",
        description:
            "We are committed to delivering solutions that meet the highest standards of quality, ensuring long-term success.",
        icon: <BarChart3 className="w-8 h-8 text-orange-600" />,
        color: "bg-orange-100",
        iconBg: "bg-orange-200",
        shadow: "shadow-[0_10px_40px_-15px_rgba(234,88,12,0.2)]",
    },
];

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
                        {features.map((feature, index) => (
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
                                    y: -5, // mimic hover:-translate-y-2
                                    rotate: 0
                                }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className={cn(
                                    "group relative bg-card rounded-[2rem] p-3 shadow-xl transition-shadow duration-300",
                                    // Removed hover properties handled by motion
                                    // Stagger offset for desktop
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
                                        {React.cloneElement(
                                            feature.icon as React.ReactElement<{ className?: string }>,
                                            { className: "w-8 h-8" },
                                        )}
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground/90 tracking-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground/80 leading-relaxed text-sm font-medium">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
