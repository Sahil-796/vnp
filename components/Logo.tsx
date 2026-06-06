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
        height={55}
        width={55}
        alt="Logo"
        style={{ height: "auto" }}
        className={cn(
          "h-auto",
          isFullLogo ? "w-[55px]" : "w-14",
          imageClassName,
        )}
      />
    </div>
  );
};
