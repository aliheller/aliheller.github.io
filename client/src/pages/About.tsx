/* About Page — Quiet Modernism */

import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

function FadeSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.unobserve(el); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`fade-in-up ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export default function About() {
  return (
    <div className="min-h-screen bg-[#F8F4EF]">
      <Navigation />

      {/* Page header */}
      <div className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#1A1714]">
        <div className="container">
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "'Jost', system-ui, sans-serif" }}>
            About
          </p>
          <h1
            className="text-white text-5xl md:text-7xl leading-none"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300 }}
          >
            Ali Heller
          </h1>
        </div>
      </div>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main bio */}
            <div className="lg:col-span-2 space-y-8">
              <FadeSection>
                <p className="section-label mb-4">Professional Profile</p>
                <hr className="sage-rule mb-8" />
                <p className="text-[#1A1714] text-xl leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  Assistant Professor in the Department of Anthropology at the University of Maryland and an experienced qualitative researcher in West Africa.
                </p>
              </FadeSection>

              <FadeSection delay={100}>
                <p className="text-[#4A4440] leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                  My expertise spans gender and health, religion and bioethics, globalization and global health, stigma and human suffering, reproductive health and health disparities, and development and humanitarianism. I am an accomplished grant-writer, ethnographer, qualitative data analyst, team-leader, photographer, and ethnographic filmmaker, with extensive practice in course development, active learning pedagogies, and experiential education.
                </p>
              </FadeSection>

              <FadeSection delay={150}>
                <p className="text-[#4A4440] leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                  Over the past 15 years, in sub-Saharan Africa, South and Central America, and East and Southeast Asia, my research has focused on the social dynamics of health and illness. I explore how people interface with health systems and health technologies, how illness and treatment affect the size and strength of social networks, why people get sick, how they think about their bodies, and how and when they seek care.
                </p>
              </FadeSection>

              <FadeSection delay={200}>
                <div className="pull-quote">
                  "Sai hankuri means 'have patience,' an exhortation, invocation, and code to live by that proved particularly salient — and challenging — both to the women I came to know in Niger and for me personally throughout my time in the field and beyond."
                </div>
              </FadeSection>
            </div>

            {/* Sidebar */}
            <div className="space-y-10">
              <FadeSection delay={100}>
                <div>
                  <p className="section-label mb-4">Highlights</p>
                  <hr className="rule-divider mb-6" />
                  <ul className="space-y-3 text-[#4A4440] text-sm" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                    <li className="flex gap-3">
                      <span className="text-[#7A9E7E] mt-1">—</span>
                      <span>Assistant Professor, Department of Anthropology, University of Maryland</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#7A9E7E] mt-1">—</span>
                      <span>Vera Campbell Resident Scholar, School for Advanced Research, Santa Fe (2016–2017)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#7A9E7E] mt-1">—</span>
                      <span>Author of <em>Fistula Politics: Birthing Injuries and the Quest for Continence in Niger</em> (Rutgers University Press)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#7A9E7E] mt-1">—</span>
                      <span>18+ months of ethnographic fieldwork at fistula repair centers in Niger</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#7A9E7E] mt-1">—</span>
                      <span>Documentary photographer and ethnographic filmmaker</span>
                    </li>
                  </ul>
                </div>
              </FadeSection>

              <FadeSection delay={200}>
                <div>
                  <p className="section-label mb-4">Education</p>
                  <hr className="rule-divider mb-6" />
                  <ul className="space-y-4 text-sm" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                    <li>
                      <p className="text-[#1A1714] font-medium">Ph.D., Anthropology</p>
                      <p className="text-[#8A8480] italic">Washington University in St. Louis</p>
                    </li>
                    <li>
                      <p className="text-[#1A1714] font-medium">B.A., Anthropology</p>
                      <p className="text-[#8A8480] italic">University of Arizona, Tucson</p>
                    </li>
                  </ul>
                </div>
              </FadeSection>

              <FadeSection delay={300}>
                <div>
                  <p className="section-label mb-4">Grants & Fellowships</p>
                  <hr className="rule-divider mb-6" />
                  <ul className="space-y-2 text-sm text-[#4A4440]" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                    {[
                      "Fulbright Hays",
                      "National Science Foundation",
                      "Wenner-Gren Foundation",
                      "Worldwide Fistula Fund",
                      "Washington University in St. Louis",
                      "University of Maryland",
                    ].map((g) => (
                      <li key={g} className="flex gap-3">
                        <span className="text-[#7A9E7E]">—</span>
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeSection>

              <FadeSection delay={400}>
                <a
                  href="https://ali-heller.com/index.php/sample-page/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sage inline-block"
                >
                  Download CV
                </a>
              </FadeSection>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
