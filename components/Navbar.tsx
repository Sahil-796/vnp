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
import { usePathname } from "next/navigation";

import GlassSurface from "@/components/GlassSurface";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

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
        isScrolled ? "py-2" : "py-4",
      )}
    >
      <header className="flex items-center justify-between container mx-auto px-6 md:px-10 relative">
        <Link
          href="/"
          className={cn(
            "relative z-10 transition-all duration-500 flex items-center justify-center",
            isScrolled ? "px-5 py-2" : "px-0 py-0",
          )}
        >
          {/* Glass Background - Mobile Only/Scrolled */}
          <div
            className={cn(
              "absolute inset-0 -z-10 transition-opacity duration-500",
              isScrolled ? "opacity-100" : "opacity-0",
            )}
          >
            {isScrolled && (
              <GlassSurface
                width="100%"
                height="100%"
                borderRadius={40}
                blur={10}
                opacity={0.6}
                borderWidth={0.5}
              />
            )}
          </div>

          <motion.div
            className="relative z-10"
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

        {/* Desktop Navbar - Pill Shape */}
        {/* Desktop Navbar - Pill Shape */}
        {/* Desktop Navbar - Pill Shape */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <GlassSurface
            borderRadius={40}
            width="auto"
            height="auto"
            blur={8}
            opacity={0.2}
            borderWidth={0.5}
            className="p-1"
          >
            <nav className="flex items-center gap-16 relative px-8">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "px-5 py-2 text-md font-medium rounded-full transition-colors duration-299 relative z-10",
                      isActive
                        ? "text-black"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navbar-pill"
                        className="absolute inset-0 rounded-full -z-10 backdrop-blur-md"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{
                          scale: { duration: 0.35, ease: "easeInOut" },
                          layout: {
                            delay: 0.2,
                            type: "spring",
                            stiffness: 200,
                            damping: 25,
                          },
                        }}
                        style={{
                          background: "rgba(255, 255, 255, 0.1)",
                          border: "1px solid rgba(255, 255, 255, 0.18)",
                          boxShadow:
                            "0 8px 32px 0 rgba(0, 0, 0, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.3)",
                        }}
                      />
                    )}

                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </GlassSurface>
        </div>
        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/contact">
            <FlowButton text="Book a Session" />
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Dialog.Root modal={false} open={isOpen} onOpenChange={setIsOpen}>
            <Dialog.Trigger asChild>
              <motion.button
                className={cn(
                  "group outline-none cursor-pointer transition-all duration-500 relative flex items-center justify-center",
                  isScrolled ? "p-3" : "p-2",
                )}
                aria-label="Open menu"
                initial="initial"
                animate={isHovered ? "hover" : "animate"}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Glass Background for Menu */}
                <div
                  className={cn(
                    "absolute inset-0 -z-10 transition-opacity duration-500",
                    isScrolled ? "opacity-100" : "opacity-0",
                  )}
                >
                  {isScrolled && (
                    <GlassSurface
                      width="100%"
                      height="100%"
                      borderRadius={99}
                      blur={10}
                      opacity={0.6}
                      borderWidth={0.5}
                    />
                  )}
                </div>

                <motion.div className="flex flex-col gap-1.5 items-end relative z-10">
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
                          x: i === 0 ? 0 : i === 1 ? -8 : -16,
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
              <Dialog.Content className="fixed inset-0 z-60 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-top-[2%] data-[state=open]:slide-in-from-top-[2%] duration-300">
                <Dialog.Close asChild>
                  <Button
                    variant="default"
                    className="absolute top-12 right-10 md:top-16 md:right-38 px-8 py-7 rounded-full transition-colors cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="size-8" />
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
                      textClassName="text-5xl md:text-7xl font-medium text-muted-foreground group-hover:text-primary duration-300 tracking-tight block pb-1"
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
        </div>
      </header>
    </div>
  );
};
