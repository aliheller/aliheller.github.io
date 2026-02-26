/* About Page - Quiet Modernism - Meta-first framing */

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

const experience = [
  {
    org: "Meta",
    location: "Menlo Park, CA & Seattle, WA",
    role: "Senior UX Researcher",
    period: "2019 - Present",
    bullets: [
      "Research Lead, Central Youth - Age-Appropriate Experiences (2022-Present): Driving centralized product strategy for age-appropriate content and teen well-being; leading foundational research with teens and parents; scoping research related to upcoming regulatory mandates.",
      "Qualitative Research Lead, Health (2020-2022): Led large-scale global foundational research on Covid-19, childhood vaccination, blood donation, and other health initiatives; served as physical health research lead.",
      "Research Lead, Business & Ads Growth (2019-2020): Oversaw research across nine teams; led in-field research in India, Brazil, and Indonesia with 30+ cross-functional partners; trained and mentored seven researchers.",
    ],
  },
  {
    org: "University of Maryland",
    location: "College Park, MD",
    role: "Assistant Professor, Anthropology",
    period: "2017 - 2019",
    bullets: [
      "Taught courses on qualitative research methods, anthropology of global health, health disparities, bioethics, and women's health.",
      "Conducted large-scale, grant-funded mixed-methods research projects spanning Uganda, Mali, Baltimore, and Niger.",
      "Published widely on reproductive health in West Africa, including peer-reviewed articles and a book.",
    ],
  },
  {
    org: "World Learning International Honors Program",
    location: "Global",
    role: "Professor of Global Health",
    period: "2015 - 2016",
    bullets: [
      "Led undergraduate students in a comparative medical anthropology program across four continents.",
      "Taught courses on research methods, global public health, and globalization and health.",
    ],
  },
];

const highlights = [
  "Senior UX Researcher, Meta (2019-Present)",
  "Research Lead: Central Youth, Health, and Business & Ads Growth at Meta",
  "Former tenure-track Assistant Professor, University of Maryland",
  "Author, Fistula Politics (Rutgers University Press, 2018)",
  "Society for Medical Anthropology Dissertation Award",
  "School for Advanced Research Campbell Fellow (2016-2017)",
  "Research funded by NSF, Fulbright Hays, Wenner-Gren Foundation",
  "Documentary photographer and ethnographic filmmaker",
];

const grants = [
  "University of Maryland Division of Research Tier 1 Faculty Grant (2018-2019)",
  "School for Advanced Research Campbell Fellowship (2016-2017)",
  "Society for Medical Anthropology Dissertation Award (2015)",
  "P.E.O. International Scholar Award (2014-2015)",
  "Mr. & Mrs. Spencer T. Olin Fellowship for Women (2009-2015)",
  "National Science Foundation DDRI Grant (2013-2014)",
  "Fulbright Hays DDRA Fellowship (2013-2014)",
  "Wenner-Gren Foundation Dissertation Fieldwork Grant (2013-2014)",
  "Worldwide Fistula Fund Research Grant (2013-2014)",
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#F8F4EF]">
      <Navigation />

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
          <p className="text-white/50 text-xl mt-3 italic" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Ph.D. - Senior UX Researcher, Meta
          </p>
        </div>
      </div>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Main bio */}
            <div className="lg:col-span-2 space-y-10">
              <FadeSection>
                <p className="section-label mb-4">Profile</p>
                <hr className="sage-rule mb-8" />
                <p className="text-[#1A1714] text-xl leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  Senior UX Researcher in Central Youth at Meta, with a Ph.D. in Cultural Anthropology. Expert in qualitative research, accomplished ethnographer, data analyst, and team leader with a passion for centering product thinking and strategy around user needs.
                </p>
              </FadeSection>

              <FadeSection delay={100}>
                <p className="text-[#4A4440] leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                  I have been the research lead at Meta for the past seven years, leading teams focused on age-appropriate content experiences and interactions, teen well-being, and social media and health. Before Meta, I was a tenure-track professor of Medical Anthropology and Public Health at the University of Maryland.
                </p>
              </FadeSection>

              <FadeSection delay={150}>
                <p className="text-[#4A4440] leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                  My expertise spans gender and health, humanitarianism and global health, stigma and human suffering, reproductive health and health disparities, and technology and well-being. I am an accomplished grant-writer, ethnographer, qualitative data analyst, team leader, photographer, and ethnographic filmmaker, with extensive practice in course development, active learning pedagogies, and experiential education.
                </p>
              </FadeSection>

              <FadeSection delay={200}>
                <div className="pull-quote">
                  The skills that make a good ethnographer - sitting with ambiguity, listening without an agenda, finding the story beneath the story - are exactly the skills that make a good UX researcher.
                </div>
              </FadeSection>

              {/* Experience */}
              <FadeSection delay={250}>
                <p className="section-label mb-6 mt-4">Experience</p>
                <hr className="sage-rule mb-8" />
                <div className="space-y-10">
                  {experience.map((exp, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="shrink-0 pt-2">
                        <div className="w-2 h-2 rounded-full bg-[#7A9E7E]" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                          <h3
                            className="text-[#1A1714] text-lg"
                            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}
                          >
                            {exp.role}
                          </h3>
                          <span
                            className="text-[#8A8480] text-xs tracking-wide"
                            style={{ fontFamily: "'Jost', system-ui, sans-serif" }}
                          >
                            {exp.period}
                          </span>
                        </div>
                        <p
                          className="text-[#7A9E7E] text-xs mb-3 tracking-wide"
                          style={{ fontFamily: "'Jost', system-ui, sans-serif" }}
                        >
                          {exp.org} / {exp.location}
                        </p>
                        <ul className="space-y-2">
                          {exp.bullets.map((b, j) => (
                            <li key={j} className="flex gap-3 text-sm text-[#4A4440]" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                              <span className="text-[#C5B9AF] mt-1 shrink-0">-</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeSection>
            </div>

            {/* Sidebar */}
            <div className="space-y-10">
              {/* Portrait */}
              <FadeSection>
                <div className="overflow-hidden">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/WeDswaXfzArfgpkt.jpg"
                    alt="Ali Heller"
                    className="w-full object-cover"
                    style={{ aspectRatio: '4/5', objectPosition: 'center top' }}
                  />
                </div>
              </FadeSection>

              <FadeSection delay={100}>
                <div>
                  <p className="section-label mb-4">Highlights</p>
                  <hr className="rule-divider mb-6" />
                  <ul className="space-y-3 text-[#4A4440] text-sm" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                    {highlights.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-[#7A9E7E] mt-1 shrink-0">-</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeSection>

              <FadeSection delay={200}>
                <div>
                  <p className="section-label mb-4">Education</p>
                  <hr className="rule-divider mb-6" />
                  <ul className="space-y-5 text-sm" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                    <li>
                      <p className="text-[#1A1714] font-medium">Ph.D., Anthropology</p>
                      <p className="text-[#8A8480]">Washington University in St. Louis, 2015</p>
                      <p className="text-[#8A8480] text-xs italic mt-1">Cultural Anthropology, Medical Anthropology</p>
                    </li>
                    <li>
                      <p className="text-[#1A1714] font-medium">M.A., Anthropology</p>
                      <p className="text-[#8A8480]">Washington University in St. Louis, 2011</p>
                    </li>
                    <li>
                      <p className="text-[#1A1714] font-medium">B.A., Interdisciplinary Studies</p>
                      <p className="text-[#8A8480]">University of Arizona, Tucson, 2005</p>
                    </li>
                  </ul>
                </div>
              </FadeSection>

              <FadeSection delay={300}>
                <div>
                  <p className="section-label mb-4">Grants & Fellowships</p>
                  <hr className="rule-divider mb-6" />
                  <ul className="space-y-2 text-sm text-[#4A4440]" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                    {grants.map((g, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-[#7A9E7E] shrink-0">-</span>
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeSection>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
