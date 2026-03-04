import Image from "next/image";
import { cn } from "@/lib/utils";

export const Logo = ({
  size = "icon",
  className,
}: {
  size: "icon" | "full";
  className?: string;
}) => {
  return (
    <div className={cn("inline-flex", className)}>
      <Image
        src={size === "icon" ? "/logo.png" : "/logo-full.png"}
        height={55}
        width={55}
        alt="Logo"
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  );
};
