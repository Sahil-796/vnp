import { ServicesList } from "@/components/ServicesList";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services",
    description: "Explore our comprehensive range of services designed to help you succeed.",
};

export default function ServicesPage() {
    return (
        <div className="container mx-auto px-4 md:px-8 min-h-screen">
            <ServicesList />
        </div>
    );
}
