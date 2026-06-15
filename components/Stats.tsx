"use client";

import { aboutPageData } from "@/constants";
import { useCountUp } from "@/hooks/useCountUp";

const stats = aboutPageData.stats;

function Stat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useCountUp(value);
  return (
    <div className="flex flex-col items-start px-2 py-6 md:px-8">
      <div className="font-display flex items-baseline text-5xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
        <span ref={ref} className="tabular-nums">
          0
        </span>
        <span className="text-yellow">{suffix}</span>
      </div>
      <p className="mt-3 text-sm font-medium uppercase tracking-wide text-white/60 md:text-base">
        {label}
      </p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="mx-auto max-w-[1500px] px-4 py-12 md:px-6">
      <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-12 md:px-12 md:py-16">
        <div className="relative mb-10 max-w-xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            Numbers that hold up.
          </h2>
          <p className="mt-3 text-white/60">
            A decade of moving careers forward and filling roles that stick.
          </p>
        </div>

        <div className="relative grid grid-cols-2 gap-y-4 divide-white/10 lg:grid-cols-4 lg:divide-x">
          {stats.map((s) => (
            <Stat
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
