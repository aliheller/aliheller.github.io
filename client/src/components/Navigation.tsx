/* Navigation - Quiet Modernism
   Sticky minimal nav: name left, links right
   Transparent on hero, solid on scroll */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work & Research" },
  { href: "/book", label: "Book" },
  { href: "/photography", label: "Photography" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (href: string) => {
    if (href === "/work") return location === "/work" || location === "/research";
    return location === href;
  };

  const bg = scrolled || menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        bg
          ? "bg-[#F8F4EF]/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(26,23,20,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Name */}
        <Link href="/">
          <span
            className={`text-xl md:text-2xl tracking-wide transition-colors duration-300 ${
              bg ? "text-[#1A1714]" : "text-white"
            }`}
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
          >
            Ali Heller
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`nav-link transition-colors duration-300 ${
                  bg ? "" : "!text-white/80 hover:!text-white"
                } ${isActive(link.href) ? "active" : ""}`}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/ali-heller-ph-d-23367775/"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-300 ${bg ? "text-[#1A1714]/50 hover:text-[#1A1714]" : "text-white/60 hover:text-white"}`}
            aria-label="LinkedIn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px transition-all duration-300 ${
              bg ? "bg-[#1A1714]" : "bg-white"
            } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-px transition-all duration-300 ${
              bg ? "bg-[#1A1714]" : "bg-white"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px transition-all duration-300 ${
              bg ? "bg-[#1A1714]" : "bg-white"
            } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[#F8F4EF]/98 backdrop-blur-sm`}
      >
        <nav className="container py-6 flex flex-col gap-5 border-t border-[#E5DED6]">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`nav-link !text-[#1A1714] text-base ${
                  isActive(link.href) ? "active" : ""
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/ali-heller-ph-d-23367775/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1A1714]/60 hover:text-[#7A9E7E] transition-colors duration-200 text-sm"
            style={{ fontFamily: "'Jost', system-ui, sans-serif", letterSpacing: "0.06em" }}
          >
            LinkedIn ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
