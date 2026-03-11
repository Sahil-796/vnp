"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  FileText,
  Layers3,
  Puzzle,
  Sparkles,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { ComponentProps, ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import MagicBento from "@/components/MagicBento";
import { Button } from "@/components/ui/button";
import { CtaButton } from "@/components/ui/cta-button";
import { MagicCard } from "@/components/ui/magic-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { servicesPageData } from "@/constants";
import { cn } from "@/lib/utils";
import { PageTitle } from "./PageTitle";

// Map generic themes to Hex colors for MagicCard gradient
const getGradientColor = (bgClass: string) => {
  if (bgClass.includes("stone")) return "#d6d3d1"; // Stone-300
  if (bgClass.includes("emerald")) return "#6ee7b7"; // Emerald-300
  if (bgClass.includes("rose")) return "#fda4af"; // Rose-300
  if (bgClass.includes("indigo")) return "#a5b4fc"; // Indigo-300
  if (bgClass.includes("amber")) return "#fcd34d"; // Amber-300
  if (bgClass.includes("sky")) return "#7dd3fc"; // Sky-300
  if (bgClass.includes("purple")) return "#d8b4fe"; // Purple-300
  return "#262626"; // Default
};

const AnimatedCheckIcon = ({ color }: { color?: string }) => {
  return (
    <div className={cn("rounded-full p-0.5 relative", "bg-black/5")}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("w-4 h-4", color || "text-primary")}
        aria-hidden="true"
      >
        <title>Check icon</title>
        <motion.path
          d="M20 6L9 17l-5-5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </svg>
    </div>
  );
};

// Helper: Magnetic Button
type MagneticButtonProps = ComponentProps<typeof Button> & {
  children: ReactNode;
};

const MagneticButton = ({
  children,
  className,
  ...props
}: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    // Pull the button towards the mouse (max 15px)
    x.set((clientX - centerX) / 4);
    y.set((clientY - centerY) / 4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      <Button className={className} {...props}>
        {children}
      </Button>
    </motion.div>
  );
};

// Noise Texture (SVG Data URI)
const noiseTexture = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
};

const servicesTiltStrength = 4;

export function ServicesList() {
  const { content, header, softwareServices, labels } = servicesPageData;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const resolvedTab = useMemo(() => {
    const rawTab = searchParams.get("tab");
    if (rawTab === "software-building") return "software-building";
    if (rawTab === "career-consultation") return "career-development";
    if (rawTab === "career-development") return "career-development";
    return "career-development";
  }, [searchParams]);

  const [activeTab, setActiveTab] = useState<
    "career-development" | "software-building"
  >(resolvedTab);

  useEffect(() => {
    setActiveTab(resolvedTab);
  }, [resolvedTab]);

  const syncTabInUrl = (tab: "career-development" | "software-building") => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tab);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const buildContactHref = (intent: string, packageName?: string) => ({
    pathname: "/contact",
    query: {
      source: "services",
      intent,
      ...(packageName ? { package: packageName } : {}),
    },
  });

  return (
    <div className="w-full pt-32 pb-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <PageTitle
          badge={header.badge}
          title={header.title}
          description={header.description}
          icon={Sparkles}
          className="mb-10"
        />
      </motion.div>

      <Tabs
        value={activeTab}
        onValueChange={(value) => {
          const nextTab = value as "career-development" | "software-building";
          setActiveTab(nextTab);
          syncTabInUrl(nextTab);
        }}
        className="max-w-7xl mx-auto px-4"
      >
        <TabsList className="mx-auto">
          <TabsTrigger value="career-development">
            {labels.careerDevelopmentTab}
          </TabsTrigger>
          <TabsTrigger value="software-building">
            {labels.softwareBuildingTab}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="career-development" className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.map((service, index) => {
              const gradientColor = getGradientColor(service.color?.bg || "");
              const isLarge = index === 0 || index === 3 || index === 4;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={cn(
                    "w-full h-full",
                    isLarge ? "md:col-span-2" : "md:col-span-1",
                  )}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="block w-full h-full"
                  >
                    <MagicCard
                      className={cn(
                        "rounded-3xl transition-all duration-300 cursor-pointer group h-full overflow-hidden",
                        service.color?.bg || "bg-card",
                      )}
                      gradientColor={gradientColor}
                      gradientOpacity={0.4}
                    >
                      <div
                        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay z-0"
                        style={noiseTexture}
                      />

                      <div className="relative flex flex-col items-stretch h-full">
                        <div
                          className={cn(
                            "group overflow-hidden w-full shrink-0",
                            isLarge
                              ? "h-48 relative md:absolute md:top-0 md:right-0 md:bottom-0 md:w-1/2 md:h-full z-0"
                              : "h-48 relative",
                          )}
                        >
                          <div
                            className={cn(
                              "absolute inset-0 transform rotate-3 transition-transform duration-300 group-hover:rotate-0 opacity-60",
                              service.color?.blob || "bg-primary/10",
                            )}
                          />
                          <div className="absolute inset-0 w-full h-full">
                            <Image
                              src={service.imgsrc}
                              alt={service.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          </div>
                        </div>

                        <div
                          className={cn(
                            "flex flex-col p-5 gap-3 z-10 relative flex-1",
                            isLarge && "md:w-1/2 md:p-8 md:justify-center",
                          )}
                        >
                          <div className="flex-1">
                            <h3
                              className={cn(
                                "font-bold mb-2",
                                isLarge
                                  ? "text-xl md:text-2xl"
                                  : "text-lg md:text-xl",
                                service.color?.accent || "text-foreground",
                              )}
                            >
                              {service.title}
                            </h3>
                            <p
                              className={cn(
                                "text-muted-foreground leading-relaxed mb-4",
                                isLarge ? "text-base" : "text-sm line-clamp-3",
                              )}
                            >
                              {service.desc}
                            </p>

                            <ul className="space-y-2 mb-4">
                              {service.features
                                ?.slice(0, isLarge ? 3 : 2)
                                .map((feature) => (
                                  <li
                                    key={feature}
                                    className={cn(
                                      "flex items-start gap-2 text-muted-foreground/90",
                                      isLarge
                                        ? "text-sm md:text-base"
                                        : "text-xs md:text-sm",
                                    )}
                                  >
                                    <AnimatedCheckIcon
                                      color={service.color?.accent}
                                    />
                                    <span
                                      className={cn(
                                        "leading-tight",
                                        !isLarge && "line-clamp-2",
                                      )}
                                    >
                                      {feature}
                                    </span>
                                  </li>
                                ))}
                            </ul>
                          </div>

                          <div
                            className={cn("pt-2 mt-auto", isLarge && "mt-4")}
                          >
                            <MagneticButton className="group text-sm font-semibold px-5 py-2.5 h-auto rounded-lg shadow-md transition-all duration-300 hover:shadow-lg bg-primary text-primary-foreground flex items-center w-fit">
                              {service.ctaText || labels.getStarted}
                              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                            </MagneticButton>
                          </div>
                        </div>
                      </div>
                    </MagicCard>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="software-building" className="mt-10 space-y-10">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-5 flex items-center gap-2">
              <Layers3 className="h-5 w-5 text-primary" />
              Package-Based Services
            </h3>
            <p className="mb-6 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {softwareServices.packageIntro}
            </p>
            <MagicBento
              className="software-packages-bento max-w-none p-0"
              gridClassName="grid grid-cols-1 gap-6 md:grid-cols-2"
              enableStars={true}
              enableSpotlight
              enableBorderGlow
              enableTilt={true}
              tiltStrength={servicesTiltStrength}
              enableMagnetism={false}
              clickEffect={true}
              glowColor="secondary"
              spotlightRadius={260}
            >
              {softwareServices.packages.map((pkg, index) => {
                const PlanIcon =
                  index === 0
                    ? UserRound
                    : index === 1
                      ? BriefcaseBusiness
                      : Building2;
                return (
                  <motion.article
                    key={pkg.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="magic-bento-card card--border-glow group relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-[2rem] border border-secondary/35 bg-gradient-to-br from-secondary/25 via-card to-background p-5 shadow-[0_24px_60px_-36px_rgba(230,199,117,0.55)] backdrop-blur-sm md:p-6"
                  >
                    <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full border border-secondary/35 bg-secondary/20 blur-2xl" />
                    <div className="pointer-events-none absolute -bottom-14 -left-10 h-36 w-36 rounded-full border border-secondary/20 bg-secondary/15 blur-3xl" />
                    <div className="relative flex h-full flex-col">
                      <div className="rounded-[1.6rem] border border-secondary/30 bg-background/80 p-5 md:p-6">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="rounded-2xl border border-secondary/35 bg-secondary/15 p-3 text-primary">
                              <PlanIcon className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="text-base font-semibold leading-tight md:text-lg">
                                {pkg.name}
                              </h4>
                              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                                {pkg.subtitle}
                              </p>
                            </div>
                          </div>
                        </div>

                        <p className="mt-4 rounded-2xl border border-secondary/25 bg-secondary/10 px-4 py-3 text-sm leading-relaxed text-foreground/90">
                          <span className="mr-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/80">
                            Ideal for:
                          </span>
                          {pkg.idealFor}
                        </p>

                        <Button
                          asChild
                          type="button"
                          variant="outline"
                          className="mt-4 w-full justify-center rounded-xl border-dashed border-secondary/40 bg-background/65 text-sm font-medium hover:bg-secondary/10 hover:text-foreground"
                        >
                          <a
                            href={pkg.pdfUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Open ${pkg.name} PDF in a new tab`}
                          >
                            <FileText className="mr-2 h-4 w-4" />
                            View package PDF
                          </a>
                        </Button>

                        <Link
                          href={buildContactHref("specific-package", pkg.name)}
                          className="mt-5 inline-flex w-full"
                        >
                          <CtaButton
                            size="sm"
                            className="w-full justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/95"
                          >
                            Discuss this package
                          </CtaButton>
                        </Link>
                      </div>

                      <div className="mt-4 rounded-[1.6rem] border border-secondary/20 bg-background/60 p-3.5">
                        <ul className="space-y-0">
                          {pkg.includes.slice(0, 4).map((item, itemIndex) => (
                            <li
                              key={`${pkg.name}-${item}`}
                              className={cn(
                                "flex items-start gap-2.5 px-1 py-2 text-xs md:text-sm",
                                itemIndex !== 0 &&
                                  "border-t border-secondary/15",
                              )}
                            >
                              <AnimatedCheckIcon color="text-primary" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </MagicBento>
          </div>

          <MagicBento
            className="software-packages-bento max-w-none p-0"
            gridClassName="grid grid-cols-1 gap-6"
            enableStars={true}
            enableSpotlight
            enableBorderGlow
            enableTilt={true}
            tiltStrength={servicesTiltStrength}
            enableMagnetism={false}
            clickEffect={true}
            glowColor="secondary"
            spotlightRadius={240}
          >
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="magic-bento-card card--border-glow relative overflow-hidden rounded-[2rem] border border-secondary/30 bg-gradient-to-br from-secondary/18 via-card to-background p-6 backdrop-blur-sm md:p-7"
            >
              <div className="pointer-events-none absolute -right-10 top-0 h-28 w-28 rounded-full border border-secondary/25 bg-secondary/15 blur-2xl" />
              <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold md:text-xl">
                <Puzzle className="h-5 w-5 text-primary" />
                {softwareServices.createYourOwn.title}
              </h3>
              <p className="mb-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                {softwareServices.createYourOwn.description}
              </p>
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <ol className="rounded-[1.6rem] border border-secondary/20 bg-background/70 p-3.5">
                  {softwareServices.createYourOwn.steps.map((step, index) => (
                    <li
                      key={step}
                      className={cn(
                        "flex items-start gap-3 px-1 py-2.5",
                        index !== 0 && "border-t border-secondary/15",
                      )}
                    >
                      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                        {index + 1}
                      </span>
                      <span className="text-sm md:text-base">{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="rounded-[1.6rem] border border-secondary/20 bg-background/70 p-5">
                  <p className="mb-3 text-sm font-medium text-foreground">
                    Popular Custom Mixes
                  </p>
                  <ul className="space-y-0 text-sm text-muted-foreground">
                    {softwareServices.createYourOwn.suggestedMixes.map(
                      (mix, index) => (
                        <li
                          key={mix}
                          className={cn(
                            "flex items-start gap-2 px-0 py-2.5",
                            index !== 0 && "border-t border-secondary/15",
                          )}
                        >
                          <AnimatedCheckIcon />
                          <span>{mix}</span>
                        </li>
                      ),
                    )}
                  </ul>
                  <Link
                    href={buildContactHref("build-own-package")}
                    className="mt-5 inline-flex w-full"
                  >
                    <CtaButton className="w-full rounded-xl">
                      Build my package
                    </CtaButton>
                  </Link>
                </div>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              viewport={{ once: true }}
              className="magic-bento-card card--border-glow relative h-full overflow-hidden rounded-[2rem] border border-secondary/30 bg-gradient-to-br from-secondary/20 via-card to-primary/5 p-6 backdrop-blur-sm md:p-7"
            >
              <div className="pointer-events-none absolute -bottom-10 -right-8 h-32 w-32 rounded-full border border-secondary/25 bg-secondary/15 blur-3xl" />
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="max-w-xl">
                  <p className="text-lg font-semibold">
                    Need a recommendation?
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Tell us your business stage and goals, and we will suggest
                    the best-fit package and add-ons.
                  </p>
                </div>
                <Link
                  href={buildContactHref("package-recommendation")}
                  className="inline-flex md:shrink-0"
                >
                  <CtaButton className="w-full rounded-xl md:w-auto">
                    <div className="flex items-center">
                      Get package recommendation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CtaButton>
                </Link>
              </div>
            </motion.article>
          </MagicBento>
        </TabsContent>
      </Tabs>
      <style jsx>{`
        :global(.software-packages-bento .card--border-glow:hover) {
          box-shadow:
            0 12px 34px oklch(from var(--secondary) l c h / 0.24),
            0 0 30px oklch(from var(--secondary) l c h / 0.2);
        }

        :global(.software-packages-bento .magic-bento-card:hover) {
          box-shadow:
            0 16px 40px oklch(from var(--secondary) l c h / 0.22),
            0 0 26px oklch(from var(--secondary) l c h / 0.18);
        }
      `}</style>
    </div>
  );
}
