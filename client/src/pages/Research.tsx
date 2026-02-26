/* Work & Research Page — Quiet Modernism
   Industry work at Meta + academic publications */

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

const metaWork = [
  {
    role: "Research Lead, Central Youth",
    period: "2022 – Present",
    focus: "Age-Appropriate Experiences & Teen Well-Being",
    desc: "Driving centralized product strategy related to age-appropriate content experiences and teen well-being. Leading foundational research with teens and parents to create company-wide frameworks for non-policy-violating, age-inappropriate content as well as age-positive content. Scoping and executing research related to upcoming regulatory mandates on teens' use of social media. Developing centralized product strategy for unwanted, unsafe, and age-inappropriate contact from large-scale pathfinding qualitative research.",
  },
  {
    role: "Qualitative Research Lead, Health",
    period: "2020 – 2022",
    focus: "Global Health Research & Product Strategy",
    desc: "Scoped, planned, executed, analyzed, and socialized large-scale, high-complexity, global foundational and strategic qualitative health research. Supported product strategy, goaling, and future directions of multiple health teams. Collaborated closely with product management, design, data science, engineering, and partnerships to identify user needs and product opportunities related to Covid-19, childhood vaccination, blood donation, and other health initiatives. Served as physical health research lead, overseeing team quality, rigor, and cross-functional collaboration.",
  },
  {
    role: "Research Lead, Business & Ads Growth",
    period: "2019 – 2020",
    focus: "Foundational & Strategic Research",
    desc: "Oversaw the scope, rigor, and impact of research across nine teams. Scoped, planned, executed, analyzed, and socialized large-scale foundational and strategic research. Informed and shaped team and org-level product strategy, roadmaps, metrics, and goals. Brought over 30 product managers, data scientists, designers, engineers, and content designers to India, Brazil, and Indonesia for in-field foundational research. Trained and mentored seven researchers.",
  },
];

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
    title: "Concealment and the Art of Passing: The Search for Dignity Among Women with Birthing Injuries in Niger",
    journal: "Human Organization",
    details: "77(3)",
  },
  {
    year: "2018",
    type: "Article",
    title: "Gurya Cutting and Female Genital Fistulas in Niger: Ten Cases",
    journal: "International Urogynecology Journal",
    details: "29(3): 363–368",
    coauthors: "Ouedraogo, McConley, Payne, Heller, and Wall",
  },
  {
    year: "2018",
    type: "Article",
    title: "The Hidden Harm of Surgery: How the Data Obfuscates Surgical Outcomes for Obstetric Fistula",
    journal: "Anthropology News",
    details: "59(1): 6–10",
  },
  {
    year: "2017",
    type: "Article",
    title: "Demographic Profile and Treatment Outcomes of 100 Women with Obstetric Fistula in Niger",
    journal: "Proceedings in Obstetrics and Gynecology",
    details: "7(2): 1–15",
  },
  {
    year: "2017",
    type: "Article",
    title: "Unsettling the Fistula Narrative: Cultural Pathology, Biomedical Redemption, and Inequities of Health Access in Niger and Ethiopia",
    journal: "Anthropology & Medicine",
    details: "24(1): 81–95",
    coauthors: "Heller and Hannig",
  },
  {
    year: "2016",
    type: "Article",
    title: "Spaces of Waiting",
    journal: "Sapiens",
    details: "5 May",
  },
  {
    year: "2016",
    type: "Article",
    title: "Exigencies in the Field: Shifting Social, Political, and Theoretical Realities of Health Research in Niger",
    journal: "Medicine Anthropology Theory",
    details: "24 March",
  },
  {
    year: "2014",
    type: "Article",
    title: "Bedside Manner and the Invisible Patient: The Silence Surrounding Women's Gynaecological Health in Niger",
    journal: "Anthropology Today",
    details: "30(1): 20–23",
  },
];

const researchAreas = [
  { title: "Teen Well-Being & Social Media", desc: "Research on age-appropriate content experiences, teen safety, and the intersection of social media use and adolescent health." },
  { title: "Health & Technology", desc: "How people seek, share, and act on health information through digital platforms; product strategy for health-related features." },
  { title: "Qualitative Methods at Scale", desc: "Designing and executing large-scale foundational qualitative research across global markets, translating findings into product strategy." },
  { title: "Reproductive Health", desc: "Academic research on obstetric fistula, maternal health, and reproductive health disparities in Niger and West Africa." },
  { title: "Humanitarianism & Global Health", desc: "Critical analysis of humanitarian narratives, global health interventions, and their effects on local communities." },
  { title: "Gender, Stigma & Social Networks", desc: "How illness, stigma, and treatment affect social relationships, community belonging, and marital dynamics." },
];

export default function Research() {
  return (
    <div className="min-h-screen bg-[#F8F4EF]">
      <Navigation />

      <div className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#1A1714]">
        <div className="container">
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "'Jost', system-ui, sans-serif" }}>
            Work & Research
          </p>
          <h1
            className="text-white text-5xl md:text-7xl leading-none"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300 }}
          >
            Industry Work &<br />Publications
          </h1>
        </div>
      </div>

      {/* Meta work */}
      <section className="py-20 md:py-28">
        <div className="container">
          <FadeSection>
            <p className="section-label mb-4">Meta — Senior UX Researcher</p>
            <hr className="sage-rule mb-4" />
            <p className="text-[#8A8480] text-sm mb-12 max-w-2xl" style={{ fontFamily: "'Lora', Georgia, serif", fontStyle: "italic" }}>
              2019 – Present · Menlo Park, CA & Seattle, WA
            </p>
          </FadeSection>
          <div className="space-y-12 max-w-4xl">
            {metaWork.map((item, i) => (
              <FadeSection key={i} delay={i * 80}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12 border-b border-[#E5DED6] last:border-0">
                  <div className="md:col-span-1">
                    <p
                      className="text-[#8A8480] text-xs tracking-wide mb-1"
                      style={{ fontFamily: "'Jost', system-ui, sans-serif" }}
                    >
                      {item.period}
                    </p>
                    <p
                      className="text-[#7A9E7E] text-xs tracking-wide"
                      style={{ fontFamily: "'Jost', system-ui, sans-serif" }}
                    >
                      {item.focus}
                    </p>
                  </div>
                  <div className="md:col-span-3">
                    <h3
                      className="text-[#1A1714] text-xl mb-3"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}
                    >
                      {item.role}
                    </h3>
                    <p className="text-[#4A4440] text-sm leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Research areas */}
      <section className="py-20 md:py-24 bg-[#F0EBE4]">
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
      <section className="py-20 md:py-28">
        <div className="container">
          <FadeSection>
            <p className="section-label mb-4">Academic Publications</p>
            <hr className="sage-rule mb-12" />
          </FadeSection>
          <div className="max-w-4xl space-y-0">
            {publications.map((pub, i) => (
              <FadeSection key={i} delay={i * 40}>
                <div className="flex gap-6 py-8 border-b border-[#E5DED6] last:border-0">
                  <div className="shrink-0 w-14 pt-1">
                    <span
                      className="text-[#8A8480] text-xs"
                      style={{ fontFamily: "'Jost', system-ui, sans-serif", letterSpacing: "0.08em" }}
                    >
                      {pub.year}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span
                      className="text-[#7A9E7E] text-xs tracking-widest uppercase block mb-2"
                      style={{ fontFamily: "'Jost', system-ui, sans-serif" }}
                    >
                      {pub.type}
                    </span>
                    {pub.link ? (
                      <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-[#1A1714] hover:text-[#7A9E7E] transition-colors">
                        <h3 className="text-lg leading-snug mb-2" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                          {pub.title}
                        </h3>
                      </a>
                    ) : (
                      <h3 className="text-[#1A1714] text-lg leading-snug mb-2" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                        {pub.title}
                      </h3>
                    )}
                    <p className="text-[#8A8480] text-sm italic" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                      {pub.journal}{pub.details ? `, ${pub.details}` : ""}{pub.series ? `. ${pub.series}` : ""}
                    </p>
                    {pub.coauthors && (
                      <p className="text-[#8A8480] text-xs mt-1" style={{ fontFamily: "'Jost', system-ui, sans-serif" }}>
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
      <section className="py-16 bg-[#F0EBE4]">
        <div className="container">
          <FadeSection>
            <p className="section-label mb-4">Academic Grants & Funding</p>
            <hr className="sage-rule mb-10" />
          </FadeSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Fulbright Hays",
              "National Science Foundation",
              "Wenner-Gren Foundation",
              "Worldwide Fistula Fund",
              "Univ. of Maryland",
              "Washington Univ. in St. Louis",
              "P.E.O. International",
              "Olin Fellowship for Women",
              "School for Advanced Research",
              "Society for Medical Anthropology",
            ].map((funder, i) => (
              <FadeSection key={i} delay={i * 30}>
                <div className="border border-[#E5DED6] p-4 text-center bg-[#F8F4EF]">
                  <p
                    className="text-[#4A4440] text-xs leading-relaxed"
                    style={{ fontFamily: "'Jost', system-ui, sans-serif", letterSpacing: "0.04em" }}
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
