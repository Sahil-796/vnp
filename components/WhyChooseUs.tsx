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

                {/* Dashed Line Background (Desktop Only) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[80%] hidden lg:block -z-10 opacity-30 pointer-events-none">
                    <svg
                        className="w-full h-full"
                        viewBox="0 0 1000 800"
                        fill="none"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M150,100 C150,300 850,300 850,500 C850,700 150,700 150,900"
                            stroke="hsl(var(--foreground))"
                            strokeWidth="2"
                            strokeDasharray="10 10"
                            className="opacity-20"
                        />
                        {/* Snake path attempt:
                 Starting top left-ish.
                 Curve right to middle.
                 Curve left to bottom. 
             */}
                        <path
                            d="M200,80 Q500,80 500,200 T800,320 T500,440 T200,560 T500,680 T800,800"
                            stroke="hsl(var(--foreground))"
                            strokeWidth="2"
                            strokeDasharray="8 8"
                            className="opacity-20 hidden" // Hiding this one, using simple S curve logic visualized in grid instead
                        />
                        {/* 
                Connecting the cards conceptually:
                Card 1 (Left, Top) -> Card 2 (Right, Top-mid)
                Card 2 -> Card 3 (Left, Mid)
                Card 3 -> Card 4 (Right, Mid-low)
                Card 4 -> Card 5 (Left, Low)
                Card 5 -> Card 6 (Right, Bottom)
            */}
                        <path
                            d="M250,150 C600,150 600,280 750,280 C600,280 600,410 250,410 C600,410 600,540 750,540 C600,540 600,670 250,670 C600,670 600,800 750,800"
                            stroke="hsl(var(--muted-foreground))"
                            strokeWidth="2"
                            strokeDasharray="6 6"
                            fill="none"
                        />

                    </svg>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20 max-w-5xl mx-auto pt-10">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={cn(
                                "group relative bg-card rounded-[2.5rem] p-4 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:rotate-1",
                                // Stagger offset for desktop
                                index % 2 === 1 ? "lg:mt-24" : "",
                                // Slight random rotations for that playful feel
                                index % 2 === 0 ? "-rotate-1" : "rotate-1"
                            )}
                        >
                            {/* Floating 3D Discs Decoration */}
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex items-center justify-center">
                                <div className={cn("relative w-16 h-16 rounded-full shadow-lg", feature.iconBg)}>
                                    <div className={cn("absolute top-0 right-0 w-12 h-12 rounded-full opacity-60 mix-blend-multiply", feature.color)} />
                                    <div className={cn("absolute bottom-1 left-1 w-14 h-14 rounded-full opacity-40 mix-blend-screen bg-white/50")} />
                                </div>
                            </div>

                            {/* Inner Colored Content Card */}
                            <div className={cn("h-full rounded-[2rem] p-8 pt-10 flex flex-col items-start gap-4", feature.color)}>
                                {/* Icon */}
                                <div className="mb-2">
                                    {React.cloneElement(feature.icon as React.ReactElement<{ className?: string }>, { className: "w-10 h-10" })}
                                </div>

                                <h3 className="text-2xl font-bold text-foreground/90 tracking-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground/80 leading-relaxed text-lg font-medium">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
