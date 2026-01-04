import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div
    >
      <Image src="/logo.png" height={50} width={50} alt="Logo" />
    </div>
  );
};
