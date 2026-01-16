"use client";

import { servicesPageData } from "@/constants";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { PageTitle } from "./PageTitle";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

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

            <div className="flex flex-col gap-24">
                {content.map((service, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={cn(
                                "flex flex-col md:flex-row gap-8 md:gap-16 items-center",
                                !isEven && "md:flex-row-reverse"
                            )}
                        >
                            {/* Image Section */}
                            <div className="w-full md:w-1/2 relative group">
                                <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3 transition-transform duration-300 group-hover:rotate-0" />
                                <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-2xl shadow-xl">
                                    <Image
                                        src={service.imgsrc}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-1/2 flex flex-col gap-6">
                                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                                    {service.title}
                                </h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {service.desc}
                                </p>

                                {/* Features List */}
                                <ul className="space-y-3">
                                    {service.features?.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-muted-foreground/90">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <span className="leading-tight">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-2">
                                    <Link href="/contact">
                                        <Button
                                            size="lg"
                                            className="group text-base font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-1"
                                        >
                                            {service.ctaText || "Get Started"}
                                            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
