import { servicesPageData } from "@/constants";
import { notFound } from "next/navigation";
import { ServiceDetailClient } from "@/components/ServiceDetailClient";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;

    // Search in both main content and hidden services
    const service = servicesPageData.content.find((s) => s.slug === slug)
        || servicesPageData.hiddenServices.find((s) => s.slug === slug);

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: `${service.title} - Vision & Path`,
        description: service.desc,
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Search in both main content and hidden services
    const service = servicesPageData.content.find((s) => s.slug === slug)
        || servicesPageData.hiddenServices.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return <ServiceDetailClient service={service} />;
}