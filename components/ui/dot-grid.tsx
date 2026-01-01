import { cn } from "@/lib/utils";

const DotGrid = ({ size, className }: { size: number; className?: string }) => {
  return (
    <div
      className={cn("grid gap-4 w-fit", className)}
      style={{
        gridTemplateColumns: `repeat(${size}, 1fr)`,
      }}
    >
      {Array.from({ length: size * size }).map((_, i) => (
        <div key={i} className="h-2 w-2 rounded-full bg-primary" />
      ))}
    </div>
  );
};

export { DotGrid };
