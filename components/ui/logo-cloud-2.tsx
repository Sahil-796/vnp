import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div">;

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x md:grid-cols-4",
        className
      )}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t" />

      <LogoCard
        className="relative border-r border-b bg-secondary/50"
        logo={{
          src: "https://svgl.app/library/nvidia-wordmark-light.svg",
          alt: "Nvidia Logo",
        }}
        isSvg
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="border-b md:border-r"
        logo={{
          src: "/google.jpg",
          alt: "Google Logo",
        }}
      />

      <LogoCard
        className="relative border-r border-b md:bg-secondary/50"
        logo={{
          src: "/microsoft.png",
          alt: "Microsoft Logo",
        }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6"
          strokeWidth={1}
        />
        <PlusIcon
          className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="relative border-b bg-secondary/50 md:bg-background"
        logo={{
          src: "/amazon.png",
          alt: "Amazon Logo",
        }}
      />

      <LogoCard
        className="relative border-r border-b bg-secondary/50 md:border-b-0 md:bg-background dark:bg-secondary/30 md:dark:bg-background"
        logo={{
          src: "/apple.jpg",
          alt: "Apple Logo",
        }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 size-6 md:hidden"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="border-b bg-background md:border-r md:border-b-0 md:bg-secondary/50 dark:md:bg-secondary/30"
        logo={{
          src: "https://svgl.app/library/openai_wordmark_light.svg",
          alt: "OpenAI Logo",
        }}
        isSvg
      />

      <LogoCard
        className="border-r"
        logo={{
          src: "https://svgl.app/library/github_wordmark_light.svg",
          alt: "GitHub Logo",
        }}
        isSvg
      />

      <LogoCard
        className="bg-secondary/50 dark:bg-secondary/30"
        logo={{
          src: "https://svgl.app/library/vercel_wordmark.svg",
          alt: "Vercel Logo",
        }}
        isSvg
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b" />
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
  isSvg?: boolean;
};

function LogoCard({ logo, className, children, isSvg, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-background px-4 py-8 md:p-8",
        className
      )}
      {...props}
    >
      <img
        alt={logo.alt}
        className={cn(
          "pointer-events-none h-12 w-auto object-contain select-none",
          isSvg ? "h-6 md:h-8 dark:brightness-0 dark:invert" : "h-10 md:h-12 mix-blend-multiply dark:mix-blend-screen transition-all duration-300"
        )}
        height={logo.height || "auto"}
        src={logo.src}
        width={logo.width || "auto"}
      />
      {children}
    </div>
  );
}
