import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://linkedin.com/company/vyarah", label: "LinkedIn" },
  { href: "https://github.com/vyarah", label: "GitHub" },
  { href: "https://instagram.com/vyarah", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg/80 backdrop-blur-md">
      <div className="max-w-container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <Link href="/" className="font-display font-bold text-lg text-text">
            Vyarah
          </Link>
          <p className="mt-2 text-sm text-muted">We Build Digital Dreams</p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-sm font-medium text-text mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-muted hover:text-text transition-colors duration-150"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & socials */}
        <div>
          <h3 className="text-sm font-medium text-text mb-3">Get in Touch</h3>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <a
                href="mailto:contact@vyarah.in"
                className="hover:text-text transition-colors duration-150"
              >
                contact@vyarah.in
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/918160208841?text=Hi+Vyarah,+I'm+interested+in+your+services"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text transition-colors duration-150"
              >
                Chat on WhatsApp
              </a>
            </li>
            <li>Gujarat, India</li>
          </ul>
          <div className="flex gap-4 mt-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-text transition-colors duration-150"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-container mx-auto px-6 py-4 text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} Vyarah. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
