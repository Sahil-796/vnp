"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { FlowButton } from "./ui/flow-button";
import { TextRollLink } from "./ui/text-roll-link";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed z-50 w-full top-0 left-0 transition-all duration-500 ease-in-out",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-sm py-2"
          : "bg-transparent py-4",
      )}
    >
      <header className="flex items-center justify-between container mx-auto">
        <Link href="/" className="relative z-10">
          <motion.div
            initial={{
              x: -100,
              opacity: 0,
              filter: "drop-shadow(0 0 0px rgba(59, 130, 246, 0))",
            }}
            animate={{
              x: 0,
              opacity: 1,
              filter: [
                "drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))",
                "drop-shadow(0 0 0px rgba(59, 130, 246, 0))",
              ],
            }}
            transition={{
              x: { duration: 0.8, type: "spring", bounce: 0.4 },
              opacity: { duration: 0.8 },
              filter: { duration: 1.5, times: [0.5, 1] },
            }}
          >
            <Logo className="w-25 md:w-30" />
          </motion.div>
        </Link>

        <Dialog.Root modal={false} open={isOpen} onOpenChange={setIsOpen}>
          <Dialog.Trigger asChild>
            <motion.button
              className="p-2 group outline-none cursor-pointer"
              aria-label="Open menu"
              initial="initial"
              animate={isHovered ? "hover" : "animate"}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div className="flex flex-col gap-1.5 items-end">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    variants={{
                      initial: { x: 20, opacity: 0, skewX: -15 },
                      animate: {
                        x: 0,
                        opacity: 1,
                        skewX: -15,
                        transition: {
                          delay: i * 0.1,
                          duration: 0.4,
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          skewX: { duration: 0.3, delay: 0 },
                          x: { duration: 0.3, delay: 0 },
                        },
                      },
                      hover: {
                        x: i === 0 ? 0 : i === 1 ? -8 : -16, // Move left to simulate left alignment (32px container)
                        opacity: 1,
                        skewX: 15,
                        transition: {
                          duration: 0.3,
                          delay: i * 0.1,
                        },
                      },
                    }}
                    className={cn(
                      "h-0.5 bg-foreground rounded-full transition-colors duration-300 group-hover:bg-primary",
                      i === 0 ? "w-8" : i === 1 ? "w-6" : "w-4",
                    )}
                  />
                ))}
              </motion.div>
            </motion.button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Content className="fixed inset-0 z-60 flex flex-col items-center justify-center bg-background/95 backdrop-blur-3xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-top-[2%] data-[state=open]:slide-in-from-top-[2%] duration-300">
              <Dialog.Close asChild>
                <Button
                  className="absolute top-12 right-10 md:top-16 md:right-38 p-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X size={32} />
                </Button>
              </Dialog.Close>

              <Dialog.Title className="sr-only">Mobile Menu</Dialog.Title>

              <nav className="flex flex-col items-center gap-8">
                {menuItems.map((item, i) => (
                  <TextRollLink
                    key={item.name}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="overflow-hidden"
                    textClassName="font-serif text-5xl md:text-7xl font-medium text-muted-foreground group-hover:text-primary duration-300 tracking-tight block pb-1"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    {item.name}
                  </TextRollLink>
                ))}
              </nav>

              <div className="mt-16">
                <Link href="/contact" onClick={handleLinkClick}>
                  <FlowButton text="Book a Session" />
                </Link>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </header>
    </div>
  );
};
