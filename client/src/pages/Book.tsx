/* Book Page — Quiet Modernism */

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

const reviews = [
  {
    quote: "Alison Heller has transformed the discourse on fistula with her brilliantly detailed ethnography of the lives of affected women in Niger. Fistula Politics is an inspiring account of the real lives of determined women facing the hardships of birthing injuries: pregnancy losses and social suffering, persistent wetness and months-long waiting for treatment in the context of 'regional poverty' and mismanaged care. Transformed my understanding! Truly brilliant!",
    author: "Ellen Gruenbaum",
    title: "Author of The Female Circumcision Controversy: An Anthropological Perspective",
  },
  {
    quote: "Most of us know the 'fistula narrative,' a story of innocent girls who suffer the dreadful consequences of early childbearing and can be saved through a simple biomedical intervention. Ali Heller's evocative and meticulously empirical book reveals the complexities that this sensational narrative fails to capture. The alternative accounts told here raise vital questions about fistula's true causes, consequences, cures, and costs—and about the marketing of humanitarian biomedicine.",
    author: "Claire L. Wendland",
    title: "Author of A Heart for the Work: Journeys through an African Medical School",
  },
];

export default function Book() {
  return (
    <div className="min-h-screen bg-[#F8F4EF]">
      <Navigation />

      {/* Page header */}
      <div className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#1A1714]">
        <div className="container">
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "'Jost', system-ui, sans-serif" }}>
            Book
          </p>
          <h1
            className="text-white text-5xl md:text-7xl leading-none"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300 }}
          >
            Fistula Politics
          </h1>
          <p className="text-white/50 text-xl mt-3 italic" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Birthing Injuries and the Quest for Continence in Niger
          </p>
        </div>
      </div>

      {/* Main content */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Book cover */}
            <FadeSection>
              <div className="img-hover max-w-sm mx-auto lg:mx-0 sticky top-28">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/ygMyuxSifadbUTtf.jpg"
                  alt="Fistula Politics: Birthing Injuries and the Quest for Continence in Niger — book cover"
                  className="w-full shadow-2xl"
                  onError={(e) => {
                    // fallback to a placeholder if Amazon CDN fails
                    const img = e.target as HTMLImageElement;
                    img.style.display = "none";
                  }}
                />
                <div className="mt-8 flex flex-col gap-3">
                  <a
                    href="https://www.amazon.com/Fistula-Politics-Birthing-Injuries-Continence/dp/0813595665"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-dark text-center"
                  >
                    Buy on Amazon
                  </a>
                  <a
                    href="https://www.rutgersuniversitypress.org/fistula-politics/9780813595665"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sage text-center"
                  >
                    Rutgers University Press
                  </a>
                </div>
              </div>
            </FadeSection>

            {/* Book description */}
            <div className="space-y-10">
              <FadeSection delay={100}>
                <p className="section-label mb-4">About the Book</p>
                <hr className="sage-rule mb-8" />
                <p className="text-[#1A1714] text-xl leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  Obstetric fistula is a birthing injury caused by prolonged obstructed labor that results in urinary and fecal incontinence. It is nearly non-existent in the Global North. In contrast, Niger, in West Africa, has one of the highest rates of fistula in the world.
                </p>
              </FadeSection>

              <FadeSection delay={150}>
                <p className="text-[#4A4440] leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                  In Western humanitarian and media narratives, fistula is presented as deeply stigmatizing, resulting in divorce, abandonment by kin, exile from communities, depression, and suicide. In <em>Fistula Politics</em>, Alison Heller illustrates the inaccuracy of these popular narratives and shows how they serve the interests not of the women so affected, but of humanitarian organizations, the media, and local clinics.
                </p>
              </FadeSection>

              <FadeSection delay={200}>
                <p className="text-[#4A4440] leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                  Based on eighteen months of ethnographic research at four fistula repair centers in Niger, Dr. Heller complicates this narrative by demonstrating that most women with fistula are not abandoned or divorced, but rather are supported by their families and communities. She argues that the dominant fistula narrative is characteristic of longstanding and historically embedded patterns of engagement with women's bodies in Africa.
                </p>
              </FadeSection>

              <FadeSection delay={250}>
                <div className="bg-[#1A1714] p-8">
                  <p className="text-white/50 text-xs tracking-widest uppercase mb-4" style={{ fontFamily: "'Jost', system-ui, sans-serif" }}>
                    Publication Details
                  </p>
                  <dl className="space-y-3 text-sm">
                    {[
                      { label: "Publisher", value: "Rutgers University Press" },
                      { label: "Series", value: "Medical Anthropology: Health, Inequality, and Social Justice" },
                      { label: "ISBN", value: "978-0-8135-9566-5" },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex gap-4">
                        <dt className="text-white/40 w-24 shrink-0" style={{ fontFamily: "'Jost', system-ui, sans-serif", letterSpacing: "0.04em" }}>
                          {label}
                        </dt>
                        <dd className="text-white/80" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </FadeSection>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 md:py-28 bg-[#F0EBE4]">
        <div className="container">
          <FadeSection>
            <p className="section-label mb-4 text-center">Praise</p>
            <hr className="sage-rule mb-16 mx-auto" />
          </FadeSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {reviews.map((review, i) => (
              <FadeSection key={i} delay={i * 100}>
                <blockquote className="space-y-4">
                  <p
                    className="text-[#4A4440] leading-relaxed italic text-lg"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    "{review.quote}"
                  </p>
                  <footer>
                    <p className="text-[#1A1714] font-medium text-sm" style={{ fontFamily: "'Jost', system-ui, sans-serif" }}>
                      {review.author}
                    </p>
                    <p className="text-[#8A8480] text-xs italic" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                      {review.title}
                    </p>
                  </footer>
                </blockquote>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
