import { useEffect, useState, useRef } from "react";

interface UseInViewOptions extends IntersectionObserverInit {
    once?: boolean;
}

export function useInView(options?: UseInViewOptions) {
    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                if (options?.once) {
                    observer.disconnect();
                }
            } else {
                if (!options?.once) {
                    setIsInView(false);
                }
            }
        }, options);

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [options?.threshold, options?.root, options?.rootMargin, options?.once]);

    return { ref, isInView };
}
