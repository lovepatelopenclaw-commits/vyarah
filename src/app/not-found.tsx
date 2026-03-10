import Link from "next/link";
import Section from "@/components/Section";

export default function NotFound() {
  return (
    <Section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display font-bold text-6xl text-text">404</h1>
        <p className="mt-4 text-sm text-muted">
          This page doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 text-sm bg-gradient-to-r from-primary via-purple-500 to-secondary text-white px-5 py-2.5 rounded-full hover:shadow-[0_0_20px_-4px_rgba(168,85,247,0.5)] transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </Section>
  );
}
