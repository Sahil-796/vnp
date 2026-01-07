"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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

// Card component for reuse
function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
    const indexStr = (index + 1).toString().padStart(2, "0");

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative w-full md:w-[400px] flex-shrink-0 rounded-3xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500"
            style={{ backgroundColor: service.bgColor || undefined }}
        >
            {/* Card Image */}
            {service.imgsrc && (
                <div className="relative h-48 md:h-56 w-full overflow-hidden">
                    <Image
                        src={service.imgsrc}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
            )}

            {/* Card Content */}
            <div className="p-6 md:p-8">
                {/* Number Badge */}
                <span className="text-sm font-medium text-primary/70 mb-3 block">
                    {indexStr}
                </span>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-light text-foreground tracking-tight leading-tight mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                </h3>

                {/* Bullets */}
                {service.bullets && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {service.bullets.map((bullet, idx) => (
                            <span
                                key={idx}
                                className="text-xs font-medium text-muted-foreground/70 bg-secondary/20 px-3 py-1 rounded-full"
                            >
                                {bullet}
                            </span>
                        ))}
                    </div>
                )}

                {/* Description */}
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 font-light line-clamp-3">
                    {service.desc}
                </p>

                {/* CTA */}
                {service.cta && (
                    <Link
                        href={service.cta.href}
                        className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold tracking-widest uppercase border border-foreground/50 rounded-full hover:bg-foreground hover:text-background transition-colors duration-300"
                    >
                        {service.cta.label}
                    </Link>
                )}
            </div>
        </motion.div>
    );
}

export function ServiceAccordion({ services }: ServiceAccordionProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Transform vertical scroll to horizontal translation (desktop only)
    // Start with first card at right edge, then move left as user scrolls
    const x = useTransform(scrollYProgress, [0, 1], ["calc(100vw - 450px)", "-100%"]);

    return (
        <>
            {/* Mobile: Vertical stack with swipe scroll */}
            <div className="md:hidden w-full px-4 pb-16">
                <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory">
                    <div className="flex gap-4 w-max">
                        {services.map((service, index) => (
                            <div key={index} className="w-[85vw] snap-center flex-shrink-0">
                                <ServiceCard service={service} index={index} />
                            </div>
                        ))}
                    </div>
                </div>
                {/* Scroll indicator dots */}
                <div className="flex justify-center mt-6 gap-2">
                    {services.map((_, index) => (
                        <div
                            key={index}
                            className="w-2 h-2 rounded-full bg-border/50"
                        />
                    ))}
                </div>
            </div>

            {/* Desktop: Scroll-linked horizontal translation */}
            <div
                ref={containerRef}
                className="hidden md:block relative w-full h-[150vh] pb-24"
            >
                <div className="sticky top-[20vh] overflow-hidden">
                    {/* Horizontal Scroll Container - driven by vertical scroll */}
                    <motion.div
                        className="flex gap-6"
                        style={{ x }}
                    >
                        {services.map((service, index) => (
                            <ServiceCard key={index} service={service} index={index} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </>
    );
}
