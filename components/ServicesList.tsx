"use client";

import { useRef, useState } from "react";
import { servicesPageData } from "@/constants";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { PageTitle } from "./PageTitle";
import { Sparkles, ArrowRight } from "lucide-react";

// Helper: Spotlight Card
const SpotlightCard = ({ children, className = "" }: any) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setOpacity(1);
    };

    const handleBlur = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleFocus}
            onMouseLeave={handleBlur}
            className={`relative overflow-hidden ${className}`}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-30"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
                }}
            />
            {children}
        </div>
    );
};

const AnimatedCheckIcon = ({ color }: { color?: string }) => {
    return (
        <div
            className={cn(
                "rounded-full p-0.5 relative",
                "bg-black/5 dark:bg-white/10",
            )}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn("w-4 h-4", color || "text-primary")}
            >
                <motion.path
                    d="M20 6L9 17l-5-5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                />
            </svg>
        </div>
    );
};

// Helper: Magnetic Button
const MagneticButton = ({ children, className, ...props }: any) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        // Pull the button towards the mouse (max 15px)
        x.set((clientX - centerX) / 4);
        y.set((clientY - centerY) / 4);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className="inline-block"
        >
            <Button className={className} {...props}>
                {children}
            </Button>
        </motion.div>
    );
};

// Noise Texture (SVG Data URI)
const noiseTexture = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
};

export function ServicesList() {
    const { content, header } = servicesPageData;

    return (
        <div className="w-full py-12">
            <PageTitle
                badge={header.badge}
                title={header.title}
                description={header.description}
                icon={Sparkles}
                className="mb-24"
            />

            <div className="flex flex-col gap-8">
                {content.map((service, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="w-full"
                        >
                            <SpotlightCard
                                className={cn(
                                    "rounded-3xl transition-all duration-300",
                                    service.color?.bg || "bg-card",
                                    "flex flex-col md:flex-row items-stretch",
                                    !isEven && "md:flex-row-reverse",
                                )}
                            >
                                {/* Noise Overlay */}
                                <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay z-0" style={noiseTexture} />

                                {/* Image Section */}
                                <div className="w-full md:w-1/2 relative group min-h-[250px] md:min-h-[320px]">
                                    <div
                                        className={cn(
                                            "absolute inset-0 transform rotate-3 transition-transform duration-300 group-hover:rotate-0 opacity-60",
                                            service.color?.blob || "bg-primary/10"
                                        )}
                                    />

                                    {/* Image Container */}
                                    <div className="absolute inset-0 w-full h-full">
                                        <Image
                                            src={service.imgsrc}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-10 gap-4 z-10 relative">
                                    <h3
                                        className={cn(
                                            "text-2xl md:text-3xl font-bold",
                                            service.color?.accent || "text-foreground",
                                        )}
                                    >
                                        {service.title}
                                    </h3>
                                    <p className="text-base text-muted-foreground leading-relaxed">
                                        {service.desc}
                                    </p>

                                    {/* Features List */}
                                    <ul className="space-y-2">
                                        {service.features?.map((feature, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-3 text-muted-foreground/90 text-sm md:text-base"
                                            >
                                                <AnimatedCheckIcon color={service.color?.accent} />
                                                <span className="leading-tight">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="pt-2">
                                        <Link href="/contact">
                                            <MagneticButton
                                                className="group text-sm font-semibold px-5 py-2.5 h-auto rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
                                            >
                                                {service.ctaText || "Get Started"}
                                                <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                                            </MagneticButton>
                                        </Link>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
