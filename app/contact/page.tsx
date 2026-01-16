import { ContactUs } from "@/components/ContactUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Vision and Path. We're here to help you with your digital journey.",
};

export default function ContactPage() {
    return <ContactUs />;
}
