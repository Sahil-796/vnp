import { useEffect, useRef, useState } from "react";

interface UseInViewOptions extends IntersectionObserverInit {
  once?: boolean;
}

export function useInView(options?: UseInViewOptions) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  const { threshold, root, rootMargin, once } = options ?? {};

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            observer.disconnect();
          }
        } else {
          if (!once) {
            setIsInView(false);
          }
        }
      },
      { threshold, root, rootMargin },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, once]);

  return { ref, isInView };
}
