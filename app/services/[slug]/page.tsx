"use client";

import { servicesPageData } from "@/constants";
import { PageTitle } from "@/components/PageTitle";
import { Sparkles, ArrowLeft, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function ServiceDetailPage({
    params,
}: {
    params: { slug: string };
}) {
    const service = servicesPageData.content.find((s) => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="min-h-screen py-24 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header / Nav */}
                <div className="flex items-center gap-4">
                    <Link href="/services">
                        <Button variant="ghost" className="gap-2 pl-0 hover:pl-2 transition-all">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Services
                        </Button>
                    </Link>
                </div>

                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <h1 className={cn("text-4xl md:text-5xl lg:text-6xl font-bold mb-6", service.color?.accent)}>
                                {service.title}
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                {service.details?.longDescription || service.desc}
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <Link href="/contact">
                                <Button size="lg" className="rounded-full text-lg px-8 py-6">
                                    {service.ctaText || "Get Started"}
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src={service.imgsrc}
                            alt={service.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </div>

                {/* Details Section */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 pt-12">
                    {/* Benefits */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className={cn("p-8 rounded-3xl", service.color?.bg)}
                    >
                        <h2 className={cn("text-2xl font-bold mb-6", service.color?.accent)}>
                            Key Benefits
                        </h2>
                        <ul className="space-y-4">
                            {(service.details?.benefits || service.features)?.map((benefit, i) => (
                                <li key={i} className="flex gap-3 text-lg items-start">
                                    <CheckCircle2 className={cn("w-6 h-6 shrink-0 mt-0.5", service.color?.accent)} />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Process */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="border border-border p-8 rounded-3xl"
                    >
                        <h2 className="text-2xl font-bold mb-6">How It Works</h2>
                        <div className="space-y-8">
                            {(service.details?.process || []).map((step, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className={cn(
                                        "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0",
                                        service.color?.blob, service.color?.accent
                                    )}>
                                        {i + 1}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-lg">Step {i + 1}</p>
                                        <p className="text-muted-foreground">{step}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
