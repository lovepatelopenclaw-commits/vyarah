"use client";

import { useState, FormEvent } from "react";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import { LoadingIndicator } from "@/components/LoadingIndicator";

const serviceOptions = [
  "Web Development",
  "Mobile App",
  "AI/ML",
  "Automation",
  "Other",
];

const budgetOptions = [
  "Under ₹25,000",
  "₹25,000 – ₹75,000",
  "₹75,000 – ₹2,00,000",
  "₹2,00,000+",
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ""
    );
    data.append("subject", "New Contact from Vyarah Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section>
      <FadeIn>
        <h1 className="font-display font-bold text-3xl text-text">
          Let&apos;s Build Something Together
        </h1>
        <p className="mt-3 text-sm text-muted max-w-xl">
          Tell us about your project. We&apos;ll get back to you within 24
          hours with a free consultation.
        </p>
      </FadeIn>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Form */}
        <FadeIn className="md:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot for spam */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-muted mb-1.5"
                >
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full bg-surface/70 backdrop-blur-sm border border-border rounded-lg px-3 py-2 text-sm text-text focus:outline-none focus:border-primary transition-colors duration-150"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-muted mb-1.5"
                >
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-surface/70 backdrop-blur-sm border border-border rounded-lg px-3 py-2 text-sm text-text focus:outline-none focus:border-primary transition-colors duration-150"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm text-muted mb-1.5"
              >
                Phone / WhatsApp
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full bg-surface/70 backdrop-blur-sm border border-border rounded-lg px-3 py-2 text-sm text-text focus:outline-none focus:border-primary transition-colors duration-150"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm text-muted mb-1.5"
                >
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full bg-surface/70 backdrop-blur-sm border border-border rounded-lg px-3 py-2 text-sm text-text focus:outline-none focus:border-primary transition-colors duration-150 [&>option]:bg-surface [&>option]:text-text"
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm text-muted mb-1.5"
                >
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full bg-surface/70 backdrop-blur-sm border border-border rounded-lg px-3 py-2 text-sm text-text focus:outline-none focus:border-primary transition-colors duration-150 [&>option]:bg-surface [&>option]:text-text"
                >
                  <option value="">Select a range</option>
                  {budgetOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-muted mb-1.5"
              >
                Project Description
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full bg-surface/70 backdrop-blur-sm border border-border rounded-lg px-3 py-2 text-sm text-text focus:outline-none focus:border-primary transition-colors duration-150 resize-y"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="text-sm bg-primary text-text px-6 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 border border-primary/30 hover:border-primary/60 disabled:opacity-50 flex items-center gap-2"
            >
              {status === "sending" ? (
                <LoadingIndicator text="Sending" showChevron={false} className="text-sm" />
              ) : (
                "Send Message"
              )}
            </button>

            {status === "sent" && (
              <p className="text-sm text-accent">
                Message sent. We&apos;ll be in touch within 24 hours.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-secondary">
                Something went wrong. Please try again or reach out via
                WhatsApp.
              </p>
            )}
          </form>
        </FadeIn>

        {/* Contact info sidebar */}
        <FadeIn>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-text">Email</h3>
              <a
                href="mailto:contact@vyarah.in"
                className="text-sm text-muted hover:text-text transition-colors duration-150"
              >
                contact@vyarah.in
              </a>
            </div>
            <div>
              <h3 className="text-sm font-medium text-text">WhatsApp</h3>
              <a
                href="https://wa.me/918160208841?text=Hi+Vyarah,+I'm+interested+in+your+services"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-text transition-colors duration-150"
              >
                Chat Now
              </a>
            </div>
            <div>
              <h3 className="text-sm font-medium text-text">Location</h3>
              <p className="text-sm text-muted">Gujarat, India</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-text">Response Time</h3>
              <p className="text-sm text-muted">Within 24 hours</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
