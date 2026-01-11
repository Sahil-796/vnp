"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { InlineWidget } from "react-calendly";
import { SectionTitle } from "@/components/SectionTitle";
import { contactPageData } from "@/constants";
import { cn } from "@/lib/utils";

// Custom Designer Icons
const Icons = {
    "Email Us": (props: React.SVGProps<SVGSVGElement>) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            {...props}
        >
            <title>Email Us</title>
            <rect x="2" y="4" width="20" height="16" rx="2" strokeOpacity="0.5" />
            <path d="M22 6L12 13L2 6" />
            <path d="M2 15h20" strokeOpacity="0.1" strokeDasharray="2 2" />
        </svg>
    ),
    "Visit Us": (props: React.SVGProps<SVGSVGElement>) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            {...props}
        >
            <title>Visit Us</title>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" fill="currentColor" fillOpacity="0.1" />
            <path d="M12 18v3" strokeOpacity="0.5" />
            <ellipse
                cx="12"
                cy="21"
                rx="5"
                ry="1"
                fill="currentColor"
                fillOpacity="0.1"
            />
        </svg>
    ),
    "Call Us": (props: React.SVGProps<SVGSVGElement>) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            {...props}
        >
            <title>Call Us</title>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            <path
                d="M14.05 2a9 9 0 0 1 8 7.94"
                strokeOpacity="0.5"
                strokeDasharray="4 4"
            />
            <path d="M14.05 6A5 5 0 0 1 18 10" strokeOpacity="0.5" />
        </svg>
    ),
};

export const ContactUs = () => {
    return (
        <section className="py-24 bg-background w-full relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-10 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -z-10" />

            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionTitle
                        title={contactPageData.header.title}
                        description={contactPageData.header.description}
                        containerClassName="mb-16"
                    />
                </motion.div>

                {/* Layout Reordered: Calendly First */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full bg-card border border-border/50 rounded-3xl overflow-hidden shadow-xl mb-20"
                >
                    <div className="w-full h-[700px]">
                        <InlineWidget
                            url={contactPageData.calendlyUrl}
                            styles={{ height: "700px", width: "100%" }}
                        />
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {contactPageData.contactInfo.map((item, index) => {
                        const Icon = Icons[item.title as keyof typeof Icons];
                        const isPrimary = index % 2 === 0;

                        return (
                            <motion.a
                                key={item.title}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 flex flex-col items-start gap-4"
                            >
                                <div
                                    className={cn(
                                        "p-4 rounded-xl transition-all duration-300 group-hover:scale-110",
                                        isPrimary
                                            ? "bg-primary/10 text-primary"
                                            : "bg-secondary/10 text-secondary",
                                    )}
                                >
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-foreground">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-4 text-sm">
                                        {item.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                                        {item.value} <MoveRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
