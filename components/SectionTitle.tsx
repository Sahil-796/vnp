import { cn } from "@/lib/utils";
import React from "react";

interface SectionTitleProps {
    title: string;
    description?: string;
    className?: string; // For the text container or heading
    containerClassName?: string; // For the outer wrapper
    id?: string;
}

export const SectionTitle = ({
    title,
    description,
    className,
    containerClassName,
    id,
}: SectionTitleProps) => {
    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center max-w-4xl mx-auto mb-16",
                containerClassName
            )}
        >

            <h2
                id={id}
                className={cn(
                    "text-3xl md:text-5xl font-extrabold tracking-tight text-center text-primary transition-colors",
                    className
                )}
            >
                {title}
            </h2>
            {description && (
                <p className="text-center mt-5 text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto transition-colors">
                    {description}
                </p>
            )}
        </div>
    );
};
