"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";
import { useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    n: "01",
    title: "Discover",
    desc: "We map your strengths, experience, and goals so the next move is obvious instead of overwhelming.",
    img: "/process-1.png",
    chip: "bg-blue-100 text-blue-700",
    frame: "bg-blue-100",
    tick: "text-blue",
    points: [
      "Strengths and work-style profile",
      "Target roles and industries shortlisted",
      "An honest skill-gap read",
    ],
  },
  {
    n: "02",
    title: "Plan",
    desc: "A roadmap with real milestones for applications, skills, and outreach that you can actually keep up with.",
    img: "/process-2.png",
    chip: "bg-yellow-50 text-ink",
    frame: "bg-yellow-50",
    tick: "text-ink",
    points: [
      "Weekly priorities and milestones",
      "Application and outreach targets",
      "A learning plan that fits your time",
    ],
  },
  {
    n: "03",
    title: "Prepare",
    desc: "Sharpen the skills that matter and rehearse interviews until the answers feel like yours, not a script.",
    img: "/process-3.png",
    chip: "bg-blue-100 text-blue-700",
    frame: "bg-blue-100",
    tick: "text-blue",
    points: [
      "Mock interviews with real feedback",
      "Sharper STAR stories",
      "Resume and LinkedIn polish",
    ],
  },
  {
    n: "04",
    title: "Placed",
    desc: "Land the offer, negotiate with confidence, and start the new role on solid footing from day one.",
    img: "/process-4.png",
    chip: "bg-yellow-50 text-ink",
    frame: "bg-yellow-50",
    tick: "text-ink",
    points: [
      "Offer review and negotiation",
      "A clear start and onboarding plan",
      "90-day check-ins after you land",
    ],
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !ref.current) return;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".stack-card");
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: cards[cards.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
        });
        gsap.to(card, {
          scale: 0.93,
          opacity: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-8">
      <div className="mb-10 max-w-2xl">
        <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-6xl">
          How it works
        </h2>
        <p className="mt-4 text-lg text-ink-soft">
          Four steps from where you are now to the offer you want. No fluff,
          just momentum.
        </p>
      </div>

      <div ref={ref} className="relative">
        {steps.map((s) => (
          <div
            key={s.n}
            className="stack-card sticky top-20 flex min-h-[78vh] items-center md:min-h-[80vh]"
          >
            <div className="grid w-full items-center gap-8 rounded-[2rem] border border-ink/10 bg-paper-2 p-7 shadow-md md:grid-cols-2 md:gap-12 md:p-12 lg:p-16">
              <div>
                <span
                  className={`inline-flex rounded-full px-3 py-1 font-mono text-sm font-medium ${s.chip}`}
                >
                  Step {s.n}
                </span>
                <h3 className="font-display mt-5 text-5xl font-bold tracking-tight text-ink md:text-7xl">
                  {s.title}
                </h3>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
                  {s.desc}
                </p>
                <ul className="mt-7 space-y-3">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-3 text-base font-medium text-ink"
                    >
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-paper ${s.tick}`}
                      >
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* image framed by a larger same-shape panel */}
              <div className={`rounded-[1.85rem] ${s.frame} p-3 md:p-4`}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem]">
                  <Image
                    src={s.img}
                    alt={`${s.title} step`}
                    fill
                    sizes="(min-width: 768px) 40vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;
