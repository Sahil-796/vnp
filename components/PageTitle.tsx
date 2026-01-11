"use client";

import { motion, type Variants } from "framer-motion";
import { Zap } from "lucide-react";

interface PageTitleProps {
    badge: string;
    title: string;
    description: string;
    className?: string;
    variants?: Variants;
    icon?: React.ElementType;
}

export const PageTitle = ({
    badge,
    title,
    description,
    className,
    variants,
    icon: Icon = Zap,
}: PageTitleProps) => {
    const defaultVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const itemVariants = variants || defaultVariants;

    return (
        <>
            <motion.div
                className={`flex flex-col items-center mb-6 ${className || ""}`}
                variants={itemVariants}
            >
                <motion.span
                    className="text-muted-foreground text-sm font-medium mb-2 flex items-center gap-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Icon className="w-4 h-4" />
                    {badge}
                </motion.span>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
                    {title}
                </h2>
                <motion.div
                    className="w-24 h-1 bg-secondary"
                    initial={{ width: 0 }}
                    animate={{ width: 96 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />
            </motion.div>

            <motion.p
                className="text-center max-w-2xl mx-auto mb-16 text-muted-foreground"
                variants={itemVariants}
            >
                {description}
            </motion.p>
        </>
    );
};
