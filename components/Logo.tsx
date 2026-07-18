import Image from "next/image";
import { cn } from "@/lib/utils";

export const Logo = ({
  size = "icon",
  className,
  imageClassName,
}: {
  size: "icon" | "full";
  className?: string;
  imageClassName?: string;
}) => {
  const isFullLogo = size === "full";

  return (
    <div className={cn("inline-flex", className)}>
      <Image
        src={isFullLogo ? "/logo-full.png" : "/logo.png"}
        height={72}
        width={72}
        alt="Logo"
        style={{ height: "auto" }}
        className={cn(
          "h-auto",
          isFullLogo ? "w-[72px]" : "w-[72px]",
          imageClassName,
        )}
      />
    </div>
  );
};
