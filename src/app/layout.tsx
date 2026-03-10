import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Analytics from "@/components/Analytics";
import TawkTo from "@/components/TawkTo";
import TubesBackground from "@/components/TubesBackground";
import JsonLd from "@/components/JsonLd";
import PageTransition from "@/components/PageTransition";

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
  metadataBase: new URL("https://vyarah.in"),
  openGraph: {
    title: "Vyarah | Web Development, Mobile Apps & AI Solutions",
    description:
      "Custom websites, mobile apps, and AI tools for startups and businesses. Based in Gujarat, serving globally.",
    type: "website",
    locale: "en_IN",
    siteName: "Vyarah",
    url: "https://vyarah.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vyarah | Web Development, Mobile Apps & AI Solutions",
    description:
      "Custom websites, mobile apps, and AI tools for startups and businesses. Gujarat, India.",
  },
  alternates: {
    canonical: "https://vyarah.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://api.web3forms.com" />
        <JsonLd />
      </head>
      <body className="font-body antialiased bg-bg text-text">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-text focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm"
        >
          Skip to content
        </a>
        <TubesBackground />
        <div className="relative z-10">
          <Navbar />
          <main id="main-content">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </div>
        <WhatsAppButton />
        <Analytics />
        <TawkTo />
      </body>
    </html>
  );
}
