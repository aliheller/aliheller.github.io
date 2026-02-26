/* Footer — Quiet Modernism
   Minimal, warm, typographic */

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
              Anthropologist, Researcher, Photographer.<br />
              Assistant Professor, University of Maryland.
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
                { href: "/", label: "Welcome" },
                { href: "/book", label: "Book" },
                { href: "/photography", label: "Photography" },
                { href: "/research", label: "Research" },
                { href: "/blog", label: "Blog" },
                { href: "/about", label: "About Ali" },
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
              Contact
            </p>
            <p className="text-sm leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              Department of Anthropology<br />
              University of Maryland<br />
              College Park, MD
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com/ali.heller/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F8F4EF]/50 hover:text-[#7A9E7E] transition-colors duration-200"
                style={{ fontFamily: "'Jost', system-ui, sans-serif", fontSize: "0.75rem", letterSpacing: "0.1em" }}
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#F8F4EF]/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p
            className="text-xs text-[#F8F4EF]/30"
            style={{ fontFamily: "'Jost', system-ui, sans-serif", letterSpacing: "0.06em" }}
          >
            © {new Date().getFullYear()} Ali Heller. All rights reserved.
          </p>
          <a
            href="https://ali-heller.com/index.php/book/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#7A9E7E] hover:text-[#7A9E7E]/80 transition-colors"
            style={{ fontFamily: "'Jost', system-ui, sans-serif", letterSpacing: "0.06em" }}
          >
            Fistula Politics — Rutgers University Press
          </a>
        </div>
      </div>
    </footer>
  );
}
