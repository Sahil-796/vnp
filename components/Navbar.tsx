"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ChevronDown, X } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { FlowButton } from "./ui/flow-button";
import { TextRollLink } from "./ui/text-roll-link";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 12);
  });

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-50 w-full transition-all duration-500 ease-out",
        isScrolled ? "py-2" : "py-4",
      )}
    >
      <header className="relative mx-auto flex max-w-[1400px] items-center justify-between px-5 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "relative z-10 flex items-center rounded-full transition-all duration-500",
            isScrolled
              ? "bg-paper-2/70 px-4 py-1.5 shadow-sm backdrop-blur-md"
              : "px-0 py-0",
          )}
        >
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.35 }}
          >
            <Logo size="full" />
          </motion.div>
        </Link>

        {/* Desktop pill nav */}
        <div className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 md:block">
          <nav className="flex items-center gap-1 rounded-full border border-ink/10 bg-paper-2/70 p-1.5 shadow-sm backdrop-blur-md">
            {menuItems.map((item) => {
              const isActive =
                item.href === "/services"
                  ? pathname.startsWith("/services")
                  : pathname === item.href;

              if (item.name === "Services") {
                return (
                  <div key={item.name} className="group/services relative">
                    <span
                      className={cn(
                        "relative flex cursor-default items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                        isActive
                          ? "text-blue"
                          : "text-ink-soft group-hover/services:text-ink",
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-blue-100"
                          transition={{
                            type: "spring",
                            stiffness: 320,
                            damping: 30,
                          }}
                        />
                      )}
                      Services
                      <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover/services:rotate-180" />
                    </span>
                    <div className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover/services:pointer-events-auto group-hover/services:opacity-100">
                      <div className="w-60 rounded-2xl border border-ink/10 bg-paper-2 p-2 shadow-lg">
                        <Link
                          href="/services?tab=career-development"
                          className="block rounded-xl px-3 py-2.5 text-sm font-medium text-ink hover:bg-blue-100 hover:text-blue"
                        >
                          Career Consultation
                        </Link>
                        <Link
                          href="/services?tab=software-building"
                          className="mt-1 block rounded-xl px-3 py-2.5 text-sm font-medium text-ink hover:bg-blue-100 hover:text-blue"
                        >
                          Software Building
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    isActive ? "text-blue" : "text-ink-soft hover:text-ink",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-blue-100"
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 30,
                      }}
                    />
                  )}
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/contact">
            <FlowButton text="Book a session" />
          </Link>
        </div>

        {/* Mobile trigger */}
        <div className="md:hidden">
          <Dialog.Root modal={false} open={isOpen} onOpenChange={setIsOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="flex items-center justify-center rounded-full bg-paper-2/70 p-3 shadow-sm backdrop-blur-md"
              >
                <span className="flex flex-col items-end gap-1.5">
                  <span className="h-0.5 w-7 rounded-full bg-ink" />
                  <span className="h-0.5 w-5 rounded-full bg-ink" />
                  <span className="h-0.5 w-6 rounded-full bg-ink" />
                </span>
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Content className="fixed inset-0 z-60 flex flex-col items-center justify-center bg-paper/95 backdrop-blur-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-300">
                <Dialog.Close asChild>
                  <button
                    type="button"
                    aria-label="Close menu"
                    className="absolute right-6 top-8 flex h-12 w-12 items-center justify-center rounded-full bg-blue text-white"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </Dialog.Close>

                <Dialog.Title className="sr-only">Menu</Dialog.Title>

                <nav className="flex flex-col items-center gap-7">
                  {menuItems.map((item, i) => (
                    <TextRollLink
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="overflow-hidden"
                      textClassName="font-display block pb-1 text-5xl font-bold tracking-tight text-ink-soft duration-300 group-hover:text-blue md:text-7xl"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      {item.name}
                    </TextRollLink>
                  ))}
                </nav>

                <div className="mt-14">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <FlowButton text="Book a session" />
                  </Link>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </header>
    </div>
  );
};
