import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Analytics from "@/components/Analytics";
import TawkTo from "@/components/TawkTo";
import TubesBackground from "@/components/TubesBackground";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vyarah | Web Development, Mobile Apps & AI Solutions — Gujarat, India",
  description:
    "Vyarah builds custom websites, mobile apps, and AI tools for startups and businesses. Based in Gujarat, serving clients globally. Get a free consultation today.",
  openGraph: {
    title: "Vyarah | Web Development, Mobile Apps & AI Solutions",
    description:
      "Custom websites, mobile apps, and AI tools for startups and businesses. Based in Gujarat, serving globally.",
    type: "website",
    locale: "en_IN",
    siteName: "Vyarah",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased bg-bg text-text">
        <TubesBackground />
        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
        <WhatsAppButton />
        <Analytics />
        <TawkTo />
      </body>
    </html>
  );
}
