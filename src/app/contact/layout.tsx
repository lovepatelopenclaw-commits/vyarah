import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Vyarah",
  description:
    "Get in touch with Vyarah. Free consultation for web development, mobile apps, AI/ML, and automation projects.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
