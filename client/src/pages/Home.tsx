/* Home Page — Quiet Modernism
   Reframed for Meta/industry identity while preserving academic depth */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HERO_BG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/BbJfpJpSNFHxKVVb.jpg";

const PHOTO_BG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/DYhqrxYhUKNRzCfk.jpg";

function FadeSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.unobserve(el); } },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`fade-in-up ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F4EF]">
      <Navigation />

      {/* ── HERO ── */}
      <section
        className="relative h-screen min-h-[600px] flex items-end pb-20 md:pb-28"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <p
              className="text-white/60 text-xs tracking-[0.2em] uppercase mb-4"
              style={{ fontFamily: "'Jost', system-ui, sans-serif" }}
            >
              Senior UX Researcher · Ph.D. Cultural Anthropology
            </p>
            <h1
              className="text-white text-6xl md:text-8xl lg:text-9xl leading-none mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900, letterSpacing: "-0.03em" }}
            >
              Ali<br />Heller
            </h1>
            <div className="flex gap-4 flex-wrap">
              <Link href="/about">
                <span className="btn-dark text-sm">About Ali</span>
              </Link>
              <Link href="/work">
                <span
                  className="text-xs tracking-[0.12em] uppercase py-3 px-6 border border-white/50 text-white hover:bg-white/10 transition-all duration-250 inline-block"
                  style={{ fontFamily: "'Jost', system-ui, sans-serif" }}
                >
                  Work & Research
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <div className="w-px h-12 bg-white animate-pulse" />
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <FadeSection>
              <p className="section-label mb-6">About</p>
              <hr className="sage-rule mb-8" />
            </FadeSection>
            <FadeSection delay={100}>
              <p
                className="text-[#1A1714] text-xl md:text-2xl leading-relaxed mb-8"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
              >
                Senior UX Researcher at Meta, where I lead research on teen well-being, age-appropriate content experiences, and social media and health — bringing a decade of ethnographic fieldwork to the challenge of building technology that genuinely serves people.
              </p>
            </FadeSection>
            <FadeSection delay={200}>
              <p className="text-[#4A4440] leading-relaxed mb-6" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                I hold a Ph.D. in Cultural Anthropology from Washington University in St. Louis and spent seven years as a tenure-track professor of Medical Anthropology at the University of Maryland before joining Meta in 2019. My academic research — funded by the NSF, Fulbright Hays, and Wenner-Gren Foundation — focused on reproductive health, humanitarianism, and the social dynamics of illness in West Africa.
              </p>
            </FadeSection>
            <FadeSection delay={300}>
              <p className="text-[#4A4440] leading-relaxed mb-10" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                That background — eighteen months of ethnographic fieldwork, a published book, peer-reviewed research — is what I bring to industry. I know how to sit with complexity, listen without an agenda, and translate human experience into strategy.
              </p>
            </FadeSection>
            <FadeSection delay={400}>
              <Link href="/about">
                <span className="btn-sage">Full Profile</span>
              </Link>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ── META WORK HIGHLIGHTS ── */}
      <section className="py-0">
        <div className="container"><hr className="rule-divider" /></div>
        <div className="container py-20 md:py-28">
          <FadeSection>
            <p className="section-label mb-4">Industry Work</p>
            <hr className="sage-rule mb-12" />
          </FadeSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                role: "Research Lead, Central Youth",
                period: "2022 – Present",
                desc: "Driving centralized product strategy for age-appropriate content experiences and teen well-being. Leading foundational research with teens and parents to create company-wide frameworks for age-inappropriate content and age-positive experiences. Scoping research related to upcoming regulatory mandates on teens' social media use.",
              },
              {
                role: "Qualitative Research Lead, Health",
                period: "2020 – 2022",
                desc: "Led large-scale, high-complexity global foundational research on health topics including Covid-19, childhood vaccination, and blood donation. Supported product strategy across multiple health teams and served as physical health research lead, overseeing team quality, rigor, and cross-functional collaboration.",
              },
              {
                role: "Research Lead, Business & Ads Growth",
                period: "2019 – 2020",
                desc: "Oversaw the scope, rigor, and impact of research across nine teams. Led in-field foundational research in India, Brazil, and Indonesia with 30+ cross-functional partners. Trained and mentored seven researchers. Shaped team and org-level product strategy, roadmaps, metrics, and goals.",
              },
            ].map((item, i) => (
              <FadeSection key={i} delay={i * 80}>
                <div className="border-t-2 border-[#7A9E7E] pt-6 h-full">
                  <p
                    className="text-[#1A1714] text-lg mb-1 leading-snug"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}
                  >
                    {item.role}
                  </p>
                  <p
                    className="text-[#8A8480] text-xs mb-4 tracking-wide"
                    style={{ fontFamily: "'Jost', system-ui, sans-serif" }}
                  >
                    Meta · {item.period}
                  </p>
                  <p className="text-[#4A4440] text-sm leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                    {item.desc}
                  </p>
                </div>
              </FadeSection>
            ))}
          </div>
          <FadeSection delay={300} className="mt-12">
            <Link href="/work">
              <span className="btn-sage">Work & Research</span>
            </Link>
          </FadeSection>
        </div>
      </section>

      {/* ── BOOK FEATURE ── */}
      <section className="py-0 bg-[#F0EBE4]">
        <div className="container py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <FadeSection className="order-2 md:order-1">
              <div className="img-hover max-w-xs mx-auto md:mx-0">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/ygMyuxSifadbUTtf.jpg"
                  alt="Fistula Politics book cover"
                  className="w-full shadow-2xl"
                />
              </div>
            </FadeSection>
            <FadeSection delay={150} className="order-1 md:order-2">
              <p className="section-label mb-6">Book</p>
              <hr className="sage-rule mb-8" />
              <h2
                className="text-[#1A1714] text-4xl md:text-5xl leading-tight mb-4"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
              >
                Fistula Politics
              </h2>
              <p className="text-[#8A8480] text-lg mb-6 italic" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Birthing Injuries and the Quest for Continence in Niger
              </p>
              <p className="text-[#4A4440] leading-relaxed mb-6" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                Published by Rutgers University Press in 2018, based on eighteen months of ethnographic fieldwork at fistula repair centers across Niger. The book challenges dominant humanitarian narratives and examines how women's stories are shaped — and distorted — by the institutions meant to help them.
              </p>
              <p className="text-[#4A4440] leading-relaxed mb-8 text-sm italic" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                Winner of the Society for Medical Anthropology Dissertation Award.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://www.amazon.com/Fistula-Politics-Birthing-Injuries-Continence/dp/0813595665"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-dark"
                >
                  Buy on Amazon
                </a>
                <Link href="/book">
                  <span className="btn-sage">Learn More</span>
                </Link>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ── PHOTOGRAPHY TEASER ── */}
      <section
        className="relative py-32 md:py-48 overflow-hidden"
        style={{
          backgroundImage: `url(${PHOTO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10">
          <FadeSection>
            <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "'Jost', system-ui, sans-serif" }}>
              Photography
            </p>
            <h2
              className="text-white text-5xl md:text-7xl leading-tight mb-6 max-w-xl"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300 }}
            >
              Documenting Lives
            </h2>
            <p className="text-white/80 max-w-lg leading-relaxed mb-10" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              From the Sahel to Southeast Asia — a visual record of the people and places encountered across fifteen years of fieldwork and travel.
            </p>
            <Link href="/photography">
              <span
                className="text-xs tracking-[0.12em] uppercase py-3 px-6 border border-white/60 text-white hover:bg-white/15 transition-all duration-250 inline-block"
                style={{ fontFamily: "'Jost', system-ui, sans-serif" }}
              >
                View Photography
              </span>
            </Link>
          </FadeSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
