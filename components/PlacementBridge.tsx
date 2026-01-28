"use client";

import React from "react";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import Image from "next/image";

const companies = [
  { name: "Google", src: "/google.jpg" },
  { name: "Microsoft", src: "/microsoft.png" },
  { name: "Amazon", src: "/amazon.png" },
  { name: "Nvidia", src: "/nvidia.png" },
  { name: "Apple", src: "/apple.jpg" },
];

const students = [
  { name: "Alex M.", role: "Full Stack", src: "https://api.dicebear.com/7.x/notionists/svg?seed=Alex" },
  { name: "Sarah K.", role: "Data Scientist", src: "https://api.dicebear.com/7.x/notionists/svg?seed=Sarah" },
  { name: "James R.", role: "Backend Dev", src: "https://api.dicebear.com/7.x/notionists/svg?seed=James" },
  { name: "Emily T.", role: "Product Manager", src: "https://api.dicebear.com/7.x/notionists/svg?seed=Emily" },
  { name: "Michael C.", role: "AI Engineer", src: "https://api.dicebear.com/7.x/notionists/svg?seed=Michael" },
];

export const PlacementBridge = () => {
  return (
    <section className="py-24 overflow-hidden bg-background/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            From Learning to Leading
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our placement program bridges the gap between ambitious talent and
            world-class organizations.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch justify-center h-[650px] w-full max-w-6xl mx-auto relative px-4">
          
          {/* Left Column: Students */}
          <div className="w-full md:w-48 flex flex-col z-20 md:py-8 order-1 h-full">
            <div className="flex-1 flex flex-col justify-between items-center bg-transparent">
                {students.map((student, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative group cursor-pointer"
                >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-background bg-card shadow-xl">
                    <Image
                        src={student.src}
                        alt={student.name}
                        width={64}
                        height={64}
                        className="object-cover"
                        unoptimized
                    />
                    </div>
                    {/* Floating Tooltip */}
                    <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-3 py-1.5 bg-card/90 backdrop-blur border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50 hidden md:block">
                    <p className="font-semibold text-xs text-foreground">{student.name}</p>
                    <p className="text-[10px] text-muted-foreground">{student.role}</p>
                    </div>
                </motion.div>
                ))}
            </div>
            {/* Label below column with spacing */}
            <div className="hidden md:block text-center mt-8">
                <h3 className="font-bold text-primary uppercase tracking-widest text-sm">Talent</h3>
            </div>
          </div>

          {/* Center Column: Bridge (SVG) */}
          <div className="flex-1 relative hidden md:block order-2 mx-8 self-start h-[600px] mt-8"> 
             {/* Note: SVG height matches the flex content excluding the bottom label area approximately */}
            <svg
              className="absolute inset-0 w-full h-full text-foreground/20"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <defs>
                <linearGradient id="bridgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="var(--secondary)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="var(--chart-1)" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* Connecting Lines */}
              {students.map((_, i) => {
                // Adjust yStart/yEnd to match the item positions in the flex-col containers.
                // It was 10 + i * 20. The container is full height.
                // 5 items distributed evenly. 0%, 25%, 50%, 75%, 100% of the available vertical space for items.
                // The SVG spans the same height as the items container.
                const yStart = 10 + i * 20;
                const yEnd = 10 + i * 20;
                
                return (
                    <g key={`path-${i}`}>
                        {/* Left merging to center hub */}
                         <motion.path
                          d={`M 0,${yStart} C 35,${yStart} 35,50 45,50`}
                          fill="none"
                          stroke="url(#bridgeGradient)"
                          strokeWidth="0.4"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 1.5, delay: i * 0.1 }}
                        />
                         {/* Diverging from center hub to right */}
                        <motion.path
                          d={`M 55,50 C 65,50 65,${yEnd} 100,${yEnd}`}
                          fill="none"
                          stroke="url(#bridgeGradient)"
                          strokeWidth="0.4"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 1.5, delay: 0.8 + i * 0.1 }}
                        />
                        
                        {/* Animated Particles */}
                        <circle r="0.8" fill="var(--secondary)">
                           <animateMotion 
                                dur={`${4 + i * 0.5}s`}
                                repeatCount="indefinite"
                                keyPoints="0;0.45;0.55;1"
                                keyTimes="0;0.45;0.55;1"
                                calcMode="linear"
                                path={`M 0,${yStart} C 35,${yStart} 35,50 45,50 L 55,50 C 65,50 65,${yEnd} 100,${yEnd}`}
                           />
                        </circle>
                    </g>
                );
              })}
              
              {/* Central Bridge Connection (The missing line) */}
              <line x1="45" y1="50" x2="55" y2="50" stroke="url(#bridgeGradient)" strokeWidth="0.8" />

              {/* Central Hub Decorative Elements */}
              <circle cx="50" cy="50" r="8" stroke="url(#bridgeGradient)" strokeWidth="0.15" strokeDasharray="1 1" fill="none" className="animate-spin-slow origin-center" />

            </svg>

            {/* Center Icon */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-12 w-12 rounded-full bg-secondary/15 border border-secondary/40 shadow-md flex items-center justify-center">
                <Handshake className="h-5 w-5 text-secondary" />
              </div>
            </div>
          </div>

          {/* Right Column: Companies */}
          <div className="w-full md:w-48 flex flex-col z-20 md:py-8 order-3 h-full">
            <div className="flex-1 flex flex-col justify-between items-center">
                {companies.map((company, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 + 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative group p-3 bg-card border rounded-xl shadow-sm w-32 md:w-40 flex items-center justify-center h-16 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                    <Image
                        src={company.src}
                        alt={company.name}
                        width={100}
                        height={40}
                        className="object-contain max-h-12 w-auto"
                    />
                </motion.div>
                ))}
            </div>
             {/* Label below column with spacing */}
             <div className="hidden md:block text-center mt-8">
                <h3 className="font-bold text-chart-5 uppercase tracking-widest text-sm text-secondary">Careers</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
