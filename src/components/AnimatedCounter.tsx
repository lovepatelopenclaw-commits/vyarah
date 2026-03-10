"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  target: string;
  className?: string;
}

export default function AnimatedCounter({
  target,
  className = "",
}: AnimatedCounterProps) {
  const [display, setDisplay] = useState(target);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const numericMatch = target.match(/^(\d+)/);
          if (!numericMatch) return;

          const end = parseInt(numericMatch[1], 10);
          const suffix = target.slice(numericMatch[1].length);
          const duration = 1500;
          const steps = 40;
          const increment = end / steps;
          let current = 0;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            current = Math.min(Math.round(increment * step), end);
            setDisplay(`${current}${suffix}`);
            if (step >= steps) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
