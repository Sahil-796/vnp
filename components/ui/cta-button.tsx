import * as React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaButtonProps extends ButtonProps {
    children: React.ReactNode;
}

const CtaButton = React.forwardRef<HTMLButtonElement, CtaButtonProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <Button
                ref={ref}
                className={cn("group relative overflow-hidden", className)}
                {...props}
            >
                {/* Original text - slides up and out */}
                <span
                    className={cn(
                        "block transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[150%]",
                    )}
                >
                    {children}
                </span>

                {/* Duplicate text - slides up and in */}
                <span
                    className={cn(
                        "absolute top-0 left-0 flex h-full w-full items-center justify-center translate-y-[150%] transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0",
                    )}
                >
                    {children}
                </span>
            </Button>
        );
    }
);
CtaButton.displayName = "CtaButton";

export { CtaButton };
