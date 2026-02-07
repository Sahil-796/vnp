import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("inline-flex", className)}>
      <Image
        src="/logo.png"
        height={75}
        width={75}
        alt="Logo"
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  );
};
