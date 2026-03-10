import type { Metadata } from "next";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import AnimatedCounter from "@/components/AnimatedCounter";

export const metadata: Metadata = {
  title: "About — Vyarah",
  description:
    "Learn about Vyarah — a Gujarat-based digital agency building world-class websites, mobile apps, and AI tools for startups and businesses.",
};

const stats = [
  { value: "10+", label: "Projects" },
  { value: "5+", label: "Happy Clients" },
  { value: "3", label: "Countries Served" },
  { value: "2", label: "Years Building" },
];

const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Flutter",
  "PostgreSQL",
  "TensorFlow",
  "Firebase",
  "Tailwind CSS",
  "FastAPI",
];

export default function AboutPage() {
  return (
    <Section>
      <FadeIn>
        <h1 className="font-display font-bold text-3xl text-text">
          About Vyarah
        </h1>
      </FadeIn>

      {/* Story */}
      <FadeIn className="mt-10">
        <div className="max-w-2xl">
          <h2 className="font-display font-bold text-lg text-text">
            Our Story
          </h2>
          <p className="mt-3 text-sm text-muted leading-relaxed">
            Vyarah was born from a simple belief: every business deserves
            world-class technology. Based in Gujarat, we&apos;re a team of
            developers, designers, and AI engineers who help startups and
            businesses build digital products that actually work — on time and on
            budget.
          </p>
          <p className="mt-3 text-sm text-muted leading-relaxed">
            We started by solving our own problems — building tools to automate
            tedious workflows, designing websites that load fast and convert, and
            training AI models that provide real value. Now we bring that same
            energy and expertise to our clients.
          </p>
        </div>
      </FadeIn>

      {/* Mission */}
      <FadeIn className="mt-10">
        <div className="max-w-2xl">
          <h2 className="font-display font-bold text-lg text-text">
            Our Mission
          </h2>
          <p className="mt-3 text-sm text-muted leading-relaxed">
            To make cutting-edge technology accessible, affordable, and
            impactful for Indian businesses and beyond.
          </p>
        </div>
      </FadeIn>

      {/* Team */}
      <FadeIn className="mt-10">
        <h2 className="font-display font-bold text-lg text-text">Team</h2>
        <div className="mt-4 bg-surface/70 backdrop-blur-sm border border-border rounded-lg p-5 max-w-sm">
          <h3 className="text-sm font-medium text-text">Founder</h3>
          <p className="text-sm text-muted mt-1">
            Full-stack developer and AI engineer with a passion for building
            products that solve real problems.
          </p>
          <a
            href="https://linkedin.com/company/vyarah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent hover:text-text transition-colors duration-150 mt-2 inline-block"
          >
            LinkedIn →
          </a>
        </div>
        <p className="text-sm text-muted mt-4">
          Backed by an expert network of developers, designers &amp; AI
          specialists.
        </p>
      </FadeIn>

      {/* Stats */}
      <FadeIn className="mt-10">
        <div className="flex flex-wrap gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <AnimatedCounter
                target={s.value}
                className="font-display font-bold text-2xl text-text"
              />
              <p className="text-xs text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Certifications & Tech */}
      <FadeIn className="mt-10">
        <h2 className="font-display font-bold text-lg text-text">
          Certifications &amp; Tech
        </h2>
        <p className="text-sm text-muted mt-2">AWS Certified</p>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
          {techStack.map((t) => (
            <span key={t} className="text-xs text-muted">
              {t}
            </span>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
