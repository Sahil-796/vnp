"use client";

import { useReducedMotion } from "motion/react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Lazy, client-only. Keeps three.js off the critical path so the LCP stays
// the headline text, not the canvas.
const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl2") || canvas.getContext("webgl"))
    );
  } catch {
    return false;
  }
}

/** Static brand visual for reduced-motion / no-WebGL. */
function StaticFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute left-[14%] top-[20%] h-48 w-48 rounded-full bg-blue blur-[2px] md:h-64 md:w-64" />
      <div className="absolute right-[20%] top-[16%] h-24 w-24 rounded-full border-[14px] border-yellow" />
      <div className="absolute bottom-[22%] right-[26%] h-20 w-20 rounded-full bg-paper-2 shadow-lg" />
      <div className="absolute bottom-[28%] left-[24%] h-12 w-12 rounded-full bg-yellow" />
    </div>
  );
}

export function HeroCanvas() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!reduce && supportsWebGL()) setEnabled(true);
  }, [reduce]);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {enabled ? <HeroScene /> : <StaticFallback />}
    </div>
  );
}

export default HeroCanvas;
