"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface TextRollLinkProps {
  href: string;
  children: string;
  className?: string; // Class for the wrapper
  textClassName?: string; // Class specifically for the text elements if needed differently
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const TextRollLink = ({
  href,
  children,
  className,
  textClassName,
  onClick,
  style,
}: TextRollLinkProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn("group relative block overflow-hidden", className)}
      style={style}
    >
      {/* Original text - slides up and out */}
      <span
        className={cn(
          "block transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full",
          textClassName,
        )}
      >
        {children}
      </span>

      {/* Duplicate text - slides up and in */}
      <span
        className={cn(
          "absolute top-0 left-0 block translate-y-full transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0",
          textClassName,
        )}
      >
        {children}
      </span>
    </Link>
  );
};
