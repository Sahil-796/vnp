import { ContactUs } from "@/components/ContactUs";
import type { Metadata } from "next";

import { contactPageData } from "@/constants";

export const metadata: Metadata = {
    title: contactPageData.metadata.title,
    description: contactPageData.metadata.description,
};

export default function ContactPage() {
    return <ContactUs />;
}
