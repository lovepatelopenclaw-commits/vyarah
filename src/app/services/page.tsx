import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Services — Vyarah",
  description:
    "Web development, mobile apps, AI/ML solutions, and automation services for startups and businesses. Based in Gujarat, India.",
};

const services = [
  {
    title: "Web Development",
    price: "Starting ₹25,000",
    desc: "Custom websites, e-commerce stores, SaaS dashboards, and landing pages built with modern frameworks and best practices.",
    features: [
      "Responsive design that works on all devices",
      "SEO-optimized from the ground up",
      "CMS integration (WordPress, Strapi, Sanity)",
      "Payment gateway setup (Razorpay, Stripe)",
      "Fast loading — optimized Core Web Vitals",
    ],
    tech: "Next.js, React, Node.js, PostgreSQL, Tailwind CSS",
    timeline: "2–6 weeks",
  },
  {
    title: "Mobile App Development",
    price: "Starting ₹75,000",
    desc: "Cross-platform mobile applications for iOS and Android — from MVP to production-ready apps with store submissions.",
    features: [
      "User authentication and profile management",
      "Push notifications",
      "REST API / GraphQL integration",
      "Offline-first architecture",
      "App Store and Play Store submission",
    ],
    tech: "React Native, Flutter, Firebase, REST APIs",
    timeline: "6–12 weeks",
  },
  {
    title: "AI/ML Solutions",
    price: "Starting ₹50,000",
    desc: "Chatbots, resume analyzers, recommendation engines, and NLP tools powered by the latest AI models and custom training.",
    features: [
      "Custom model training and fine-tuning",
      "OpenAI / Gemini API integration",
      "Data processing pipelines",
      "Interactive dashboards for results",
      "Ongoing model monitoring",
    ],
    tech: "Python, TensorFlow, LangChain, FastAPI",
    timeline: "4–8 weeks",
  },
  {
    title: "Automation & Workflows",
    price: "Starting ₹30,000",
    desc: "Automate repetitive business tasks — emails, reports, data processing, and more. Save hours every week.",
    features: [
      "n8n / Zapier workflow design",
      "Custom Python scripts",
      "API integrations with your existing tools",
      "Scheduled tasks and cron jobs",
      "Google Workspace automation",
    ],
    tech: "Python, n8n, Make.com, Google Workspace APIs",
    timeline: "1–4 weeks",
  },
];

export default function ServicesPage() {
  return (
    <Section>
      <FadeIn>
        <h1 className="font-display font-bold text-3xl text-text">
          Our Services
        </h1>
        <p className="mt-3 text-sm text-muted max-w-xl">
          End-to-end digital solutions for startups and businesses. Every
          project starts with a free consultation.
        </p>
      </FadeIn>

      <div className="mt-12 space-y-8">
        {services.map((s) => (
          <FadeIn key={s.title}>
            <div className="bg-surface/70 backdrop-blur-sm border border-border rounded-lg p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-display font-bold text-xl text-text">
                  {s.title}
                </h2>
                <span className="text-sm text-primary">{s.price}</span>
              </div>
              <p className="mt-3 text-sm text-muted">{s.desc}</p>

              <ul className="mt-4 space-y-1.5">
                {s.features.map((f) => (
                  <li key={f} className="text-sm text-muted flex gap-2">
                    <span className="text-accent shrink-0">–</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted">
                <span>Tech: {s.tech}</span>
                <span>Timeline: {s.timeline}</span>
              </div>

              <Link
                href="/contact"
                className="inline-block mt-5 text-sm bg-gradient-to-r from-primary via-purple-500 to-secondary text-white px-5 py-2 rounded-full hover:shadow-[0_0_20px_-4px_rgba(168,85,247,0.5)] transition-all duration-300"
              >
                Get a Quote
              </Link>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
