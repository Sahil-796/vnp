"use client";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface FAQItemType {
  question: string;
  answer: string;
}

interface FAQProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  categories: Record<string, string>;
  faqData: Record<string, FAQItemType[]>;
  className?: string;
}

export const FAQ = ({
  title = "FAQs",
  subtitle = "Frequently Asked Questions",
  categories,
  faqData,
  className = "",
  ...props
}: FAQProps) => {
  const categoryKeys = Object.keys(categories);
  const [selected, setSelected] = useState(categoryKeys[0]);
  // single-open accordion: only one question expanded at a time
  const [openQ, setOpenQ] = useState<string | null>(null);

  return (
    <section
      className={cn(
        "mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-28",
        className,
      )}
      {...props}
    >
      <div className="grid gap-12 lg:grid-cols-12">
        {/* Left: heading + category tabs (sticky on desktop) */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
              {title}
            </h2>
            <p className="mt-4 max-w-sm text-lg text-ink-soft">{subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {Object.entries(categories).map(([key, label]) => (
                <button
                  type="button"
                  key={key}
                  onClick={() => {
                    setSelected(key);
                    setOpenQ(null);
                  }}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                    selected === key
                      ? "bg-blue text-white shadow-sm"
                      : "border border-ink/15 text-ink-soft hover:border-blue/50 hover:text-blue",
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: accordion */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3"
            >
              {faqData[selected]?.map((faq) => (
                <FAQItem
                  key={faq.question}
                  {...faq}
                  isOpen={openQ === faq.question}
                  onToggle={() =>
                    setOpenQ((q) => (q === faq.question ? null : faq.question))
                  }
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: FAQItemType & { isOpen: boolean; onToggle: () => void }) => {
  return (
    <div
      className={cn(
        "rounded-2xl border transition-colors duration-300",
        isOpen ? "border-blue/30 bg-blue-100/50" : "border-ink/10 bg-paper-2",
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <h3
          className={cn(
            "flex-1 text-base font-semibold transition-colors md:text-lg",
            isOpen ? "text-ink" : "text-ink/80",
          )}
        >
          {question}
        </h3>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
            isOpen ? "bg-blue text-white" : "bg-blue-100 text-blue",
          )}
        >
          <Plus className="h-4 w-4" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-5 leading-relaxed text-ink-soft">{answer}</p>
      </motion.div>
    </div>
  );
};
