import type { Metadata } from "next";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Portfolio — Vyarah",
  description:
    "See our recent work — AI tools, web apps, mobile apps, and automation projects for businesses across India and globally.",
};

interface Project {
  title: string;
  category: string;
  desc: string;
  tech: string[];
  links: { demo?: string; caseStudy: string };
}

const projects: Project[] = [
  {
    title: "ATS Resume Analyzer",
    category: "AI/ML",
    desc: "AI-powered tool that analyzes resumes against job descriptions, scores match percentage, and gives actionable improvement tips. Used by 200+ job seekers.",
    tech: ["Python", "OpenAI API", "Next.js", "Streamlit"],
    links: { demo: "#", caseStudy: "#" },
  },
  {
    title: "RetailKart E-Commerce",
    category: "Web Development",
    desc: "Full-featured e-commerce platform for a Gujarat-based retailer. Razorpay integration, inventory tracking, and admin dashboard.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    links: { caseStudy: "#" },
  },
  {
    title: "StockSync Dashboard",
    category: "Web Development",
    desc: "Real-time inventory management dashboard for an SMB with 3 warehouse locations. Automated low-stock alerts and supplier ordering.",
    tech: ["React", "Node.js", "MongoDB", "Chart.js"],
    links: { caseStudy: "#" },
  },
  {
    title: "LeadBot WhatsApp",
    category: "Automation",
    desc: "Automated WhatsApp bot for lead capture and qualification. Handles 500+ conversations daily with zero manual effort.",
    tech: ["Python", "WhatsApp Business API", "n8n", "PostgreSQL"],
    links: { caseStudy: "#" },
  },
  {
    title: "HRFlow Automation",
    category: "Automation",
    desc: "End-to-end HR automation tool — leave management, attendance tracking, and payroll calculations for a 50-person team.",
    tech: ["Python", "Google Workspace APIs", "React", "FastAPI"],
    links: { caseStudy: "#" },
  },
];

export default function PortfolioPage() {
  return (
    <Section>
      <FadeIn>
        <h1 className="font-display font-bold text-3xl text-text">Our Work</h1>
        <p className="mt-3 text-sm text-muted max-w-xl">
          A selection of projects we&apos;ve delivered for startups and
          businesses.
        </p>
      </FadeIn>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <FadeIn key={p.title}>
            <div className="h-full bg-surface/70 backdrop-blur-sm border border-border rounded-lg p-5">
              <span className="text-xs text-primary">{p.category}</span>
              <h2 className="text-base font-medium text-text mt-2">
                {p.title}
              </h2>
              <p className="text-sm text-muted mt-2">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs text-muted">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-4">
                {p.links.demo && (
                  <a
                    href={p.links.demo}
                    className="text-sm text-accent hover:text-text transition-colors duration-150"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={p.links.caseStudy}
                  className="text-sm text-muted hover:text-text transition-colors duration-150"
                >
                  Case Study
                </a>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
