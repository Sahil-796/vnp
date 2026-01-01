import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div
      className={cn(
        "font-serif text-2xl font-bold tracking-tight text-foreground flex items-center whitespace-nowrap select-none",
        className,
      )}
    >
      Vision <span className="text-primary italic mx-1 font-medium">&</span>{" "}
      Path
    </div>
  );
};
