import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  description?: string;
  className?: string;
  containerClassName?: string;
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
        "relative flex flex-col items-center justify-center max-w-4xl mx-auto mb-20 md:mb-24 pt-10",
        containerClassName,
      )}
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-primary/10 blur-[60px] rounded-full -z-10 pointer-events-none" />

      <h2
        id={id}
        className={cn(
          "text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-center text-primary transition-colors",
          className,
        )}
      >
        {title}
      </h2>

      {/* Decorative Separator */}
      <div className="w-24 h-1.5 mt-6 mb-8 rounded-full bg-gradient-to-r from-transparent via-primary/80 to-transparent" />

      {description && (
        <p className="text-center text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
