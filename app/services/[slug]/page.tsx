import { servicesPageData } from "@/constants";
import { notFound } from "next/navigation";
import { ServiceDetailClient } from "@/components/ServiceDetailClient";

export async function generateStaticParams() {
    return servicesPageData.content.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServiceDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const service = servicesPageData.content.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return <ServiceDetailClient service={service} />;
}
