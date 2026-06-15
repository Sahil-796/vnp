"use client";

import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

const clients = [
  { name: "Google", src: "/google.png" },
  { name: "Amazon", src: "/amazon.png" },
  { name: "Microsoft", src: "/microsoft.png" },
  { name: "Nvidia", src: "/nvidia.png" },
  { name: "Apple", src: "/apple.png" },
];

export default function ClientsSection() {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4 md:px-6">
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.18em] text-ink-soft">
          Our candidates now work at
        </p>
        <div className="relative w-full overflow-hidden">
          <Marquee className="[--duration:32s] [--gap:3rem] md:[--gap:5rem]">
            {clients.map((client) => (
              <div
                key={client.name}
                className="relative flex h-12 w-28 items-center justify-center opacity-70 transition-opacity duration-300 hover:opacity-100 md:h-16 md:w-36"
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

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-paper to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-paper to-transparent" />
        </div>
      </div>
    </section>
  );
}
