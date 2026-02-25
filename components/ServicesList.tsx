"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Download,
  ExternalLink,
  FileText,
  Layers3,
  Puzzle,
  Sparkles,
  UserRound,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { ComponentProps, ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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

const themeSecondaryHex = "#E6C775";

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
  const [activePackagePdf, setActivePackagePdf] = useState<{
    name: string;
    url: string;
  } | null>(null);

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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {softwareServices.packages.slice(0, 3).map((pkg, index) => {
                const isCenter = index === 1;
                const PlanIcon =
                  index === 0
                    ? UserRound
                    : index === 1
                      ? BriefcaseBusiness
                      : Building2;
                return (
                  <motion.div
                    key={pkg.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className={cn(
                      "rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10",
                      isCenter &&
                        "lg:scale-[1.07] lg:-translate-y-3 z-10 shadow-2xl shadow-secondary/30",
                    )}
                  >
                    <MagicCard
                      className={cn(
                        "rounded-[inherit] overflow-hidden p-6 md:p-7 h-full",
                        isCenter ? "min-h-[420px]" : "min-h-[400px]",
                        isCenter && "ring-1 ring-secondary/60",
                      )}
                      gradientColor={themeSecondaryHex}
                      gradientFrom={themeSecondaryHex}
                      gradientTo={themeSecondaryHex}
                      gradientSize={160}
                      gradientOpacity={isCenter ? 0.75 : 0.55}
                    >
                      <div className="h-full flex flex-col">
                        <div
                          className={cn(
                            "rounded-2xl border p-5 md:p-6",
                            !isCenter
                              ? "border-primary/30 bg-card/70"
                              : "border-secondary/50 bg-linear-to-br from-card via-card to-secondary/20 shadow-md shadow-secondary/20",
                          )}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-center gap-2">
                              <PlanIcon
                                className={cn(
                                  "h-5 w-5 text-primary",
                                  isCenter && "text-secondary",
                                )}
                              />
                              <h4 className="text-base md:text-lg font-semibold leading-tight">
                                {pkg.name}
                              </h4>
                            </div>
                            {pkg.popular && (
                              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground shadow-sm shadow-secondary/60">
                                Popular
                              </span>
                            )}
                          </div>

                          <p
                            className={cn(
                              "mt-4 rounded-xl border px-3.5 py-2.5 text-sm leading-relaxed",
                              !isCenter
                                ? "border-primary/20 bg-primary/5 text-foreground/90"
                                : "border-secondary/35 bg-secondary/10 text-foreground",
                            )}
                          >
                            <span className="mr-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                              Ideal for:
                            </span>
                            {pkg.idealFor}
                          </p>

                          <Button
                            type="button"
                            variant="outline"
                            className={cn(
                              "mt-3 w-full justify-center rounded-xl border-dashed text-sm font-medium hover:text-foreground",
                              !isCenter
                                ? "border-primary/35 hover:bg-primary/5"
                                : "border-secondary/45 hover:bg-secondary/10",
                            )}
                            onClick={() =>
                              setActivePackagePdf({
                                name: pkg.name,
                                url: pkg.pdfUrl,
                              })
                            }
                          >
                            <FileText className="mr-2 h-4 w-4" />
                            View package PDF
                          </Button>

                          <Link
                            href={buildContactHref(
                              "specific-package",
                              pkg.name,
                            )}
                            className="inline-flex mt-5 w-full"
                          >
                            <Button
                              size="sm"
                              className={cn(
                                "w-full justify-center group text-sm font-semibold transition-all duration-300 rounded-xl",
                                !isCenter
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-secondary text-secondary-foreground shadow-md shadow-secondary/40 hover:bg-secondary/90",
                              )}
                            >
                              Discuss this package
                            </Button>
                          </Link>
                        </div>

                        <ul className="space-y-2 mt-5">
                          {pkg.includes.map((item) => (
                            <li
                              key={`${pkg.name}-${item}`}
                              className="flex items-start gap-2 text-xs md:text-sm"
                            >
                              <AnimatedCheckIcon />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </MagicCard>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-border p-6 bg-muted/40">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Wrench className="h-5 w-5 text-primary" />
              Add-Ons
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Extend any package with focused improvements and ongoing support.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {softwareServices.addOns.map((addon) => (
                <span
                  key={addon}
                  className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {addon}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 flex items-center gap-2">
              <Puzzle className="h-5 w-5 text-primary" />
              {softwareServices.createYourOwn.title}
            </h3>
            <p className="text-muted-foreground mb-4">
              {softwareServices.createYourOwn.description}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ol className="space-y-3">
                {softwareServices.createYourOwn.steps.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 rounded-xl border border-border bg-background p-3"
                  >
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-sm md:text-base">{step}</span>
                  </li>
                ))}
              </ol>
              <div className="rounded-xl border border-border bg-background p-5">
                <p className="text-sm font-medium mb-3 text-foreground">
                  Popular Custom Mixes
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {softwareServices.createYourOwn.suggestedMixes.map((mix) => (
                    <li key={mix} className="flex items-start gap-2">
                      <AnimatedCheckIcon />
                      <span>{mix}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={buildContactHref("build-own-package")}
                  className="inline-flex mt-5 w-full"
                >
                  <Button className="w-full rounded-lg">
                    Build my package
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-primary/10 p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="text-lg font-semibold">Need a recommendation?</p>
              <p className="text-sm text-muted-foreground">
                Tell us your business stage and goals, and we will suggest the
                best-fit package and add-ons.
              </p>
            </div>
            <Link
              href={buildContactHref("package-recommendation")}
              className="inline-flex"
            >
              <Button className="rounded-lg">
                Get package recommendation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </TabsContent>
      </Tabs>

      <Dialog
        open={Boolean(activePackagePdf)}
        onOpenChange={(open) => {
          if (!open) setActivePackagePdf(null);
        }}
      >
        <DialogContent className="max-w-5xl p-0 overflow-hidden">
          <DialogHeader className="p-5 pb-2 border-b">
            <DialogTitle className="text-base md:text-lg">
              {activePackagePdf?.name} PDF
            </DialogTitle>
            <DialogDescription>
              Review the package details here, or open/download the PDF.
            </DialogDescription>
          </DialogHeader>

          <div className="h-[68vh] w-full bg-muted/20">
            {activePackagePdf ? (
              <iframe
                src={`${activePackagePdf.url}#view=FitH`}
                title={`${activePackagePdf.name} PDF`}
                className="h-full w-full"
              />
            ) : null}
          </div>

          <div className="flex items-center justify-end gap-2 p-4 border-t">
            <Button asChild variant="outline" className="rounded-lg">
              <a
                href={activePackagePdf?.url}
                target="_blank"
                rel="noreferrer"
                aria-label="Open PDF in new tab"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Open in new tab
              </a>
            </Button>
            <Button asChild className="rounded-lg">
              <a
                href={activePackagePdf?.url}
                download
                aria-label="Download package PDF"
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
