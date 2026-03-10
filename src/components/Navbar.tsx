"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MagneticButton } from "@/components/ui/magnetic-button";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <div className="max-w-container mx-auto flex items-center justify-between px-6 h-14">
        <Link href="/" className="font-display font-bold text-lg text-text">
          Vyarah
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors duration-150 ${
                isActive(l.href)
                  ? "text-text border-b border-primary pb-0.5"
                  : "text-muted hover:text-text"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <MagneticButton distance={0.4}>
            <Link
              href="/contact"
              className="text-sm bg-primary text-text px-5 py-2 rounded-full hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 border border-primary/30 hover:border-primary/60"
            >
              Get Free Consultation
            </Link>
          </MagneticButton>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-muted hover:text-text p-1"
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-bg/80 backdrop-blur-md px-6 pb-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm transition-colors duration-150 ${
                isActive(l.href)
                  ? "text-text font-medium"
                  : "text-muted hover:text-text"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block mt-2 text-sm text-center bg-primary text-text px-4 py-2 rounded-full hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 border border-primary/30 hover:border-primary/60"
          >
            Get Free Consultation
          </Link>
        </div>
      )}
    </nav>
  );
}
