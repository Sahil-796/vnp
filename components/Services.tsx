import { Timeline } from "@/components/ui/timeline";
import { SectionTitle } from "@/components/SectionTitle";
import { landingPageData } from "../constants";
import { CtaButton } from "@/components/ui/cta-button";
import Link from "next/link";

export function Services() {
  const data = landingPageData.services.content.map((service, index) => ({
    id: String(index),
    title: service.title,
    content: (
      <div key={index}>
        <p className="mb-8 text-muted-foreground text-xs md:text-sm font-normal">
          {service.desc}
        </p>
        <div className="grid grid-cols-1 gap-4 mb-6">
          <img
            src={service.imgsrc}
            alt={service.title}
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-2xl"
          />
        </div>
        <Link href={`/services/${(service as any).slug}`}>
          <CtaButton variant="outline" className="rounded-full">
            Learn More
          </CtaButton>
        </Link>
      </div>
    ),
  }));

  return (
    <div className="w-full relative overflow-clip">
      <SectionTitle
        title={landingPageData.services.title}
        description={landingPageData.services.desc}
      />
      <Timeline data={data} />
      <div className="flex justify-center mt-8 pb-12 relative z-20">
        <Link href="/services">
          <CtaButton size="lg" className="rounded-full px-8 text-lg">
            View All Services
          </CtaButton>
        </Link>
      </div>
    </div>
  );
}
