"use client";

import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const clients = [
    { name: "Google", src: "/google.jpg" },
    { name: "Amazon", src: "/amazon.png" },
    { name: "Microsoft", src: "/microsoft.png" },
    { name: "Nvidia", src: "/nvidia.png" },
    { name: "Apple", src: "/apple.jpg" },
];

export default function ClientsSection() {
    return (
        <section className="bg-background/50">
            <div className="container px-4 md:px-6 mx-auto">
                <p className="text-center text-muted-foreground mb-8 text-sm font-semibold uppercase tracking-widest">
                    Trusted by Top Giants
                </p>
                <div className="relative w-full overflow-hidden">
                    <Marquee className="[--duration:30s] [--gap:3rem] md:[--gap:5rem]">
                        {clients.map((client) => (
                            <div
                                key={client.name}
                                className="flex items-center justify-center relative h-12 w-28 md:h-16 md:w-36 transition-all duration-300 cursor-pointer"
                            >
                                <Image
                                    src={client.src}
                                    alt={client.name}
                                    fill
                                    className="object-contain mix-blend-multiply"
                                />
                            </div>
                        ))}
                    </Marquee>

                    {/* Gradient Fade Edges */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent"></div>
                </div>
            </div>
        </section>
    );
}
