"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCtaButtonProps {
  text?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  className?: string;
}

export default function AnimatedCtaButton({
  text = "Get Free Consultation",
  href,
  onClick,
  variant = "primary",
  className,
}: AnimatedCtaButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const isPrimary = variant === "primary";

  const content = (
    <span className="relative z-10 flex items-center gap-2">
      <span>{text}</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className={cn(
          "transition-all duration-300",
          isHovered ? "translate-x-1 opacity-100" : "translate-x-0 opacity-0"
        )}
      >
        <path
          d="M3.5 8H12.5M12.5 8L9 4.5M12.5 8L9 11.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );

  const sharedClasses = cn(
    "group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-full overflow-hidden transition-all duration-300",
    isPrimary
      ? [
          "bg-gradient-to-r from-primary via-purple-500 to-secondary text-white",
          "shadow-[0_0_0_0_rgba(168,85,247,0)] hover:shadow-[0_0_24px_-4px_rgba(168,85,247,0.5)]",
        ]
      : [
          "bg-transparent text-muted hover:text-text",
          "border border-border hover:border-primary/50",
          "hover:shadow-[0_0_20px_-6px_rgba(168,85,247,0.3)]",
        ],
    className
  );

  const handlers = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  if (href) {
    return (
      <a href={href} className={sharedClasses} {...handlers}>
        {isPrimary && (
          <span
            className={cn(
              "absolute inset-0 bg-gradient-to-r from-secondary via-primary to-purple-500 opacity-0 transition-opacity duration-500",
              isHovered && "opacity-100"
            )}
          />
        )}
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={sharedClasses} {...handlers}>
      {isPrimary && (
        <span
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-secondary via-primary to-purple-500 opacity-0 transition-opacity duration-500",
            isHovered && "opacity-100"
          )}
        />
      )}
      {content}
    </button>
  );
}
