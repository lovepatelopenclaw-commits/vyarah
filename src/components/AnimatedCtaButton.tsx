"use client";

import { useState, useEffect, useCallback } from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedCtaButtonProps {
  idleText?: string;
  activeText?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function AnimatedCtaButton({
  idleText = "Get Free Consultation",
  activeText = "Let\u2019s Build Together",
  href,
  onClick,
  className,
}: AnimatedCtaButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState(idleText);
  const [isAnimating, setIsAnimating] = useState(false);

  const animateText = useCallback(
    (target: string) => {
      if (isAnimating) return;
      setIsAnimating(true);

      const chars = target.split("");
      let current = "";
      let i = 0;

      const interval = setInterval(() => {
        if (i < chars.length) {
          current += chars[i];
          setDisplayText(current + "\u00A0".repeat(target.length - current.length));
          i++;
        } else {
          clearInterval(interval);
          setDisplayText(target);
          setIsAnimating(false);
        }
      }, 30);

      return () => clearInterval(interval);
    },
    [isAnimating]
  );

  useEffect(() => {
    if (isHovered) {
      const cleanup = animateText(activeText);
      return cleanup;
    } else {
      setDisplayText(idleText);
      setIsAnimating(false);
    }
  }, [isHovered, idleText, activeText, animateText]);

  const content = (
    <>
      <Sparkles
        size={16}
        className={cn(
          "shrink-0 transition-transform duration-300",
          isHovered ? "rotate-12 scale-110" : ""
        )}
      />
      <span className="relative overflow-hidden whitespace-nowrap font-medium">
        {displayText}
      </span>
    </>
  );

  const sharedClasses = cn(
    "inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm",
    "bg-primary text-text",
    "hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
    "transition-all duration-300",
    "border border-primary/30 hover:border-primary/60",
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={sharedClasses}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={sharedClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {content}
    </button>
  );
}
