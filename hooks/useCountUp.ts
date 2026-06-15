"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

/**
 * Animates a number from 0 to `value` when it scrolls into view, writing
 * straight to the DOM node (no per-frame re-renders). Honors reduced motion
 * by snapping to the final value.
 */
export function useCountUp(value: number, duration = 1.6) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const format = (n: number) => Math.round(n).toLocaleString("en-US");

    if (reduce || !inView) {
      if (inView) node.textContent = format(value);
      return;
    }

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        node.textContent = format(latest);
      },
    });

    return () => controls.stop();
  }, [inView, value, duration, reduce]);

  return ref;
}
