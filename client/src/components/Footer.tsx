/* Footer - Quiet Modernism - Updated for Meta/industry framing */

import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#1A1714] text-[#F8F4EF]/70 py-16 mt-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Name & tagline */}
          <div>
            <h3
              className="text-[#F8F4EF] text-2xl mb-3"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
            >
              Ali Heller
            </h3>
            <p className="text-sm leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              Senior UX Researcher.<br />
              Ph.D. Cultural Anthropology.<br />
              Author. Photographer.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-[#F8F4EF]/40 text-xs tracking-widest uppercase mb-4"
              style={{ fontFamily: "'Jost', system-ui, sans-serif" }}
            >
              Navigate
            </p>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/work", label: "Work & Research" },
                { href: "/book", label: "Book" },
                { href: "/photography", label: "Photography" },
                { href: "/blog", label: "Blog" },
                { href: "/about", label: "About" },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="text-sm text-[#F8F4EF]/60 hover:text-[#7A9E7E] transition-colors duration-200"
                    style={{ fontFamily: "'Jost', system-ui, sans-serif", letterSpacing: "0.04em" }}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-[#F8F4EF]/40 text-xs tracking-widest uppercase mb-4"
              style={{ fontFamily: "'Jost', system-ui, sans-serif" }}
            >
              Connect
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              Seattle, WA
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/in/ali-heller-ph-d-23367775/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F8F4EF]/50 hover:text-[#7A9E7E] transition-colors duration-200 text-xs tracking-widest uppercase"
                style={{ fontFamily: "'Jost', system-ui, sans-serif" }}
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/ali.heller/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F8F4EF]/50 hover:text-[#7A9E7E] transition-colors duration-200 text-xs tracking-widest uppercase"
                style={{ fontFamily: "'Jost', system-ui, sans-serif" }}
              >
                Instagram
              </a>
              <a
                href="mailto:ali.heller@gmail.com"
                className="text-[#F8F4EF]/50 hover:text-[#7A9E7E] transition-colors duration-200 text-xs tracking-widest uppercase"
                style={{ fontFamily: "'Jost', system-ui, sans-serif" }}
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#F8F4EF]/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p
            className="text-xs text-[#F8F4EF]/30"
            style={{ fontFamily: "'Jost', system-ui, sans-serif", letterSpacing: "0.06em" }}
          >
            {new Date().getFullYear()} Ali Heller
          </p>
          <a
            href="https://www.rutgersuniversitypress.org/fistula-politics/9780813595665"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#7A9E7E] hover:text-[#7A9E7E]/80 transition-colors"
            style={{ fontFamily: "'Jost', system-ui, sans-serif", letterSpacing: "0.06em" }}
          >
            Fistula Politics -- Rutgers University Press
          </a>
        </div>
      </div>
    </footer>
  );
}
