import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Clickable E-Verify participation badge. Opens the signed E-Verify
 * Memorandum of Understanding (MOU) PDF in a new tab.
 */
export const EVerifyBadge = ({
  className,
  imageClassName,
}: {
  className?: string;
  imageClassName?: string;
}) => {
  return (
    <a
      href="/e-verify-mou.pdf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View our E-Verify Memorandum of Understanding (PDF)"
      title="E-Verify participant — view MOU (PDF)"
      className={cn(
        "group inline-flex w-fit items-center justify-center rounded-2xl bg-white/90 px-4 py-2.5 shadow-sm ring-1 ring-black/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md",
        className,
      )}
    >
      <Image
        src="/E-Verify_logo.png"
        width={3840}
        height={1225}
        alt="E-Verify"
        className={cn("h-auto w-28 md:w-32", imageClassName)}
      />
    </a>
  );
};
