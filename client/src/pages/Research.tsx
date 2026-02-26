/* Research Page — Quiet Modernism */

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
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`fade-in-up ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

const publications = [
  {
    year: "2019",
    type: "Book",
    title: "Fistula Politics: Birthing Injuries and the Quest for Continence in Niger",
    journal: "Rutgers University Press",
    series: "Medical Anthropology: Health, Inequality, and Social Justice",
    link: "https://www.rutgersuniversitypress.org/fistula-politics/9780813595665",
  },
  {
    year: "2018",
    type: "Article",
    title: "Transforming Obstetric Fistula through Concealment in Niger",
    journal: "Human Organization",
    details: "77(3): 239–248",
  },
  {
    year: "2017",
    type: "Article",
    title: "Unsettling the Fistula Narrative: Cultural Pathology, Biomedical Redemption, and Inequities of Health Access in Niger",
    journal: "Anthropology & Medicine",
  },
  {
    year: "2017",
    type: "Article",
    title: "Demographic Profile and Treatment Outcomes of 100 Women with Obstetric Fistula in Niger",
    journal: "Proceedings in Obstetrics and Gynecology",
    coauthors: "with Judith VanderEnde, Erin Anastasi, Maggie Bangser, and Lauri Romanzi",
  },
  {
    year: "2015",
    type: "Article",
    title: "Sai Hankuri: Patience, Endurance, and an Anthropology of Fistula in Niger",
    journal: "Africa Today",
    details: "62(1): 21–40",
  },
  {
    year: "2014",
    type: "Article",
    title: "Bedside Manner and the Invisible Patient: The Silence Surrounding Women's Gynaecological Health in Niger",
    journal: "Anthropology Today",
    details: "30(1): 20–23",
  },
  {
    year: "2014",
    type: "Article",
    title: "Navigating the Fistula Narrative: Ethnographic Perspectives on Obstetric Fistula in Niger",
    journal: "Anthropology & Medicine",
    details: "21(3): 274–285",
  },
];

const researchAreas = [
  { title: "Gender & Health", desc: "Examining how gender structures health experiences, care-seeking behaviors, and treatment outcomes in West Africa." },
  { title: "Reproductive Health", desc: "Research on obstetric fistula, maternal health, and reproductive health disparities in Niger and the broader Sahel region." },
  { title: "Humanitarianism & Global Health", desc: "Critical analysis of humanitarian narratives, global health interventions, and their effects on local communities." },
  { title: "Social Networks & Illness", desc: "How illness and treatment affect the size and strength of social networks, marital relationships, and community belonging." },
  { title: "Religion & Bioethics", desc: "The intersection of Islamic practice, local belief systems, and biomedical ethics in treatment-seeking contexts." },
  { title: "Stigma & Human Suffering", desc: "Ethnographic approaches to understanding stigma, shame, and resilience in the context of chronic illness." },
];

export default function Research() {
  return (
    <div className="min-h-screen bg-[#F8F4EF]">
      <Navigation />

      {/* Page header */}
      <div className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#1A1714]">
        <div className="container">
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "'Jost', system-ui, sans-serif" }}>
            Research
          </p>
          <h1
            className="text-white text-5xl md:text-7xl leading-none"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300 }}
          >
            Publications &<br />Research Areas
          </h1>
        </div>
      </div>

      {/* Research areas */}
      <section className="py-20 md:py-28">
        <div className="container">
          <FadeSection>
            <p className="section-label mb-4">Research Interests</p>
            <hr className="sage-rule mb-12" />
          </FadeSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, i) => (
              <FadeSection key={i} delay={i * 60}>
                <div className="border-t-2 border-[#7A9E7E] pt-6">
                  <h3
                    className="text-[#1A1714] text-xl mb-3"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}
                  >
                    {area.title}
                  </h3>
                  <p className="text-[#6A6460] text-sm leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                    {area.desc}
                  </p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 md:py-28 bg-[#F0EBE4]">
        <div className="container">
          <FadeSection>
            <p className="section-label mb-4">Selected Publications</p>
            <hr className="sage-rule mb-12" />
          </FadeSection>

          <div className="max-w-4xl space-y-0">
            {publications.map((pub, i) => (
              <FadeSection key={i} delay={i * 50}>
                <div className="flex gap-6 py-8 border-b border-[#E5DED6] last:border-0 group">
                  <div className="shrink-0 w-16 pt-1">
                    <span
                      className="text-[#8A8480] text-xs"
                      style={{ fontFamily: "'Jost', system-ui, sans-serif", letterSpacing: "0.08em" }}
                    >
                      {pub.year}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <span
                        className="text-[#7A9E7E] text-xs tracking-widest uppercase shrink-0 mt-1"
                        style={{ fontFamily: "'Jost', system-ui, sans-serif" }}
                      >
                        {pub.type}
                      </span>
                    </div>
                    {pub.link ? (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1A1714] hover:text-[#7A9E7E] transition-colors"
                      >
                        <h3
                          className="text-lg leading-snug mb-2"
                          style={{ fontFamily: "'Lora', Georgia, serif" }}
                        >
                          {pub.title}
                        </h3>
                      </a>
                    ) : (
                      <h3
                        className="text-[#1A1714] text-lg leading-snug mb-2"
                        style={{ fontFamily: "'Lora', Georgia, serif" }}
                      >
                        {pub.title}
                      </h3>
                    )}
                    <p className="text-[#8A8480] text-sm italic" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                      {pub.journal}{pub.details ? `, ${pub.details}` : ""}{pub.series ? `. ${pub.series}` : ""}
                    </p>
                    {pub.coauthors && (
                      <p className="text-[#8A8480] text-xs mt-1" style={{ fontFamily: "'Jost', system-ui, sans-serif", letterSpacing: "0.03em" }}>
                        {pub.coauthors}
                      </p>
                    )}
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Funding */}
      <section className="py-20 md:py-24">
        <div className="container">
          <FadeSection>
            <p className="section-label mb-4">Grants & Funding</p>
            <hr className="sage-rule mb-10" />
          </FadeSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Fulbright Hays",
              "National Science Foundation",
              "Wenner-Gren Foundation",
              "Worldwide Fistula Fund",
              "Washington University in St. Louis",
              "University of Maryland",
            ].map((funder, i) => (
              <FadeSection key={i} delay={i * 40}>
                <div className="border border-[#E5DED6] p-5 text-center">
                  <p
                    className="text-[#4A4440] text-xs leading-relaxed"
                    style={{ fontFamily: "'Jost', system-ui, sans-serif", letterSpacing: "0.05em" }}
                  >
                    {funder}
                  </p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
