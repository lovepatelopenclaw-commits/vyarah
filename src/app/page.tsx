import Link from "next/link";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";

const services = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
    ),
    title: "Web Development",
    desc: "Fast, responsive websites & web apps",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></svg>
    ),
    title: "Mobile Apps",
    desc: "iOS & Android apps that users love",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" /><path d="M8.24 9.93A4 4 0 0 1 8 6a4 4 0 0 1 4-4" /><path d="M14.5 13.5L12 16l-2.5-2.5" /><rect x="3" y="16" width="18" height="6" rx="1" /><path d="M7 19h.01M12 19h.01M17 19h.01" /></svg>
    ),
    title: "AI/ML Solutions",
    desc: "Smart automation & data-driven features",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
    ),
    title: "Automation",
    desc: "Save time with intelligent workflows",
  },
];

const projects = [
  {
    title: "ATS Resume Analyzer",
    desc: "AI-powered tool that analyzes resumes against job descriptions, scores match %, and gives improvement tips.",
    tags: ["Python", "OpenAI API", "Next.js"],
    category: "AI/ML",
  },
  {
    title: "E-Commerce Platform",
    desc: "Full-featured e-commerce store for a Gujarat-based retailer with payment gateway and inventory management.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    category: "Web Development",
  },
  {
    title: "WhatsApp Lead Bot",
    desc: "Automated WhatsApp bot for lead capture and qualification, sending 500+ messages daily with zero manual effort.",
    tags: ["Python", "WhatsApp API", "n8n"],
    category: "Automation",
  },
];

const strengths = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
    ),
    title: "Fast Delivery",
    desc: "Most projects delivered in 2–6 weeks",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
    ),
    title: "Transparent Pricing",
    desc: "No hidden fees, clear project scoping",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
    ),
    title: "Modern Tech Stack",
    desc: "React, Next.js, Python, Flutter, Node.js",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
    ),
    title: "Post-launch Support",
    desc: "Ongoing maintenance and iterations",
  },
];

const testimonials = [
  {
    quote:
      "Vyarah delivered our app in 3 weeks — exceeded expectations. The team was responsive and really understood our needs.",
    name: "Startup Founder",
    role: "EdTech Startup, Mumbai",
  },
  {
    quote:
      "Professional, punctual, and the final product was exactly what we envisioned. Highly recommend for any business.",
    name: "Business Owner",
    role: "Retail, Ahmedabad",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center">
        <div className="max-w-container mx-auto px-6 py-24 md:py-32 w-full">
        <FadeIn>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-text max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            We Build Digital Dreams
          </h1>
          <p className="mt-4 text-muted text-base md:text-lg max-w-xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
            From idea to launch — web apps, mobile apps, AI tools &amp;
            automation for modern businesses.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 items-center">
            <AnimatedCtaButton href="/contact" />
            <Link
              href="/portfolio"
              className="text-sm border border-border text-muted px-5 py-2.5 rounded-lg hover:text-text hover:border-muted transition-colors duration-150 bg-bg/60"
            >
              See Our Work
            </Link>
          </div>
          <p className="mt-10 text-xs text-muted drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
            AWS Certified &middot; 10+ Projects Delivered &middot; Gujarat,
            India &middot; Serving Clients Globally
          </p>
        </FadeIn>
        </div>
      </section>

      {/* Services Overview */}
      <Section>
        <FadeIn>
          <h2 className="font-display font-bold text-2xl text-text">
            What We Do
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((s) => (
              <Link
                key={s.title}
                href="/services"
                className="flex gap-4 p-5 bg-surface/70 backdrop-blur-sm border border-border rounded-lg hover:border-muted transition-colors duration-150"
              >
                <span className="text-primary mt-0.5 shrink-0">{s.icon}</span>
                <div>
                  <h3 className="text-sm font-medium text-text">{s.title}</h3>
                  <p className="text-sm text-muted mt-1">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Portfolio Showcase */}
      <Section>
        <FadeIn>
          <div className="flex items-center justify-between">
            <h2 className="font-display font-bold text-2xl text-text">
              Recent Work
            </h2>
            <Link
              href="/portfolio"
              className="text-sm text-muted hover:text-text transition-colors duration-150"
            >
              View all →
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map((p) => (
              <div
                key={p.title}
                className="p-5 bg-surface/70 backdrop-blur-sm border border-border rounded-lg"
              >
                <span className="text-xs text-primary">{p.category}</span>
                <h3 className="text-sm font-medium text-text mt-2">
                  {p.title}
                </h3>
                <p className="text-sm text-muted mt-2">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Why Choose Vyarah */}
      <Section>
        <FadeIn>
          <h2 className="font-display font-bold text-2xl text-text">
            Why Choose Vyarah
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {strengths.map((s) => (
              <div key={s.title} className="flex gap-3">
                <span className="text-accent mt-0.5 shrink-0">{s.icon}</span>
                <div>
                  <h3 className="text-sm font-medium text-text">{s.title}</h3>
                  <p className="text-xs text-muted mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Testimonials */}
      <Section>
        <FadeIn>
          <h2 className="font-display font-bold text-2xl text-text">
            What Clients Say
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-5 border-l-2 border-primary bg-surface/70 backdrop-blur-sm rounded-lg"
              >
                <p className="text-sm text-muted">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-3 text-sm text-text">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* CTA */}
      <Section>
        <FadeIn>
          <div className="bg-surface/70 backdrop-blur-sm border border-border rounded-lg p-8 md:p-12 text-center">
            <h2 className="font-display font-bold text-2xl text-text">
              Ready to Build Something Great?
            </h2>
            <p className="mt-3 text-sm text-muted max-w-md mx-auto">
              Tell us about your project and get a free consultation. No
              commitment, no pressure.
            </p>
            <AnimatedCtaButton
              href="/contact"
              idleText="Book Free Consultation"
              activeText="Start Your Project"
              className="mt-6"
            />
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
