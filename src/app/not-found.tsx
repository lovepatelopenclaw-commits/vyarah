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
          className="inline-block mt-6 text-sm bg-primary text-text px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity duration-150"
        >
          Back to Home
        </Link>
      </div>
    </Section>
  );
}
