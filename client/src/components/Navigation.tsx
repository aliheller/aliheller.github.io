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
        </nav>
      </div>
    </header>
  );
}
