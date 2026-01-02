"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        id: 1,
        name: "Sarah Chen",
        role: "Product Manager at TechFlow",
        quote: "The attention to detail and premium aesthetic completely transformed our brand perception. It's not just a website; it's an experience.",
        image: "/avatar-1.png", // Placeholder, will fallback or use a color
    },
    {
        id: 2,
        name: "Michael Ross",
        role: "Director of Marketing, OmniCorp",
        quote: "Working with this team was seamless. They understood our vision immediately and delivered a product that exceeded our expectations in every way.",
        image: "/avatar-2.png",
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        role: "Founder, Artiste Studios",
        quote: "Absolutely stunning design work. The 'liquid glass' effect on our landing page has become a major talking point for our clients.",
        image: "/avatar-3.png",
    },
    {
        id: 4,
        name: "David Kim",
        role: "CTO, FutureSystems",
        quote: "The code quality is just as impressive as the visuals. Clean, performant, and scalable. A rare combination in today's market.",
        image: "/avatar-4.png",
    },
    {
        id: 5,
        name: "Jessica Park",
        role: "VP of Sales, CloudScale",
        quote: "Our conversion rates doubled after the redesign. The intuitive layout and engaging animations guide users exactly where they need to go.",
        image: "/avatar-5.png",
    },
];

const Testimonials = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth / 3; // Roughly one card width

            if (direction === "left") {
                if (scrollLeft < 10) {
                    // If near start, loop to end
                    scrollRef.current.scrollTo({
                        left: scrollWidth,
                        behavior: "smooth",
                    });
                } else {
                    scrollRef.current.scrollBy({
                        left: -scrollAmount,
                        behavior: "smooth",
                    });
                }
            } else {
                // If near end, loop to start
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    scrollRef.current.scrollTo({
                        left: 0,
                        behavior: "smooth",
                    });
                } else {
                    scrollRef.current.scrollBy({
                        left: scrollAmount,
                        behavior: "smooth",
                    });
                }
            }
        }
    };

    return (
        <section className="py-24 w-full bg-background overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header with Navigation */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
                            What our clients say
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Trusted by leading companies around the world.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={() => scroll("left")}
                            className="p-3 rounded-full border border-border hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="w-5 h-5 text-foreground" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="p-3 rounded-full border border-border hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="w-5 h-5 text-foreground" />
                        </button>
                    </div>
                </div>

                {/* Carousel Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-10"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="min-w-full md:min-w-[calc(33.333%_-_16px)] snap-center md:snap-start flex-shrink-0"
                        >
                            <div className="h-full p-8 rounded-3xl bg-muted/30 border border-border hover:border-primary/50 transition-colors flex flex-col justify-between">
                                <div>
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                        ))}
                                    </div>
                                    <blockquote className="text-lg font-medium leading-relaxed mb-8 text-foreground/90">
                                        &ldquo;{testimonial.quote}&rdquo;
                                    </blockquote>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-linear-to-tr from-primary/20 to-secondary/20 flex items-center justify-center text-lg font-bold text-primary shrink-0 relative overflow-hidden">
                                        {/* Fallback initials if no image - or implement Image if assets exist. Using initials for safety */}
                                        {testimonial.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-foreground">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {testimonial.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
