import { ServicesList } from "@/components/ServicesList";
import type { Metadata } from "next";

import { servicesPageData } from "@/constants";

export const metadata: Metadata = {
    title: servicesPageData.metadata.title,
    description: servicesPageData.metadata.description,
};

export default function ServicesPage() {
    return (
        <div className="container mx-auto px-4 md:px-8 min-h-screen">
            <ServicesList />
        </div>
    );
}
