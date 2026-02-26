/* Home Page — Quiet Modernism
   Full-bleed hero with Sahel landscape, name in large serif,
   then sections: intro, book teaser, research teaser, photography teaser */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/DYd9v69j2vqOCzKYnE64aF/sandbox/kLxrEY7LX6RFMHjNE43B4P-img-1_1772082145000_na1fn_aGVyby1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRFlkOXY2OWoydnFPQ3pLWW5FNjRhRi9zYW5kYm94L2tMeHJFWTdMWDZSRk1Iak5FNDNCNFAtaW1nLTFfMTc3MjA4MjE0NTAwMF9uYTFmbl9hR1Z5YnkxaVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=VRiDEsaYW-R1RMHqo1JKvxJ9JJaqDcUrwSXjb6v8BV-3fjIzKXR5pHg2h89ZWoLw6Jyiisu9jeROCEvJd4BWkSoqphfw3O8M5HkqxzUmk3rRoxotHvO9sl3nDgDyquCPpC3b53Vllc58K1ycyZ3iQe9XHAO13-j84X3IydffbUBIE1dehUMyQbZJXZJ~E70YKMXrOHqvmgUJKXbxi-U98-ycmyD-DRfpLfb5P6iiIN1RvgnSUigtWvL5cmhCNYGHPWC6pumv82dXmJOC6V2bM-GTguT7AcT5sLAfqc66y4ZtABn~3A6QE0u3tRKfrpV6ADjeSF1Clyxd~b2o7ZZGOQ__";

const PHOTO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/DYd9v69j2vqOCzKYnE64aF/sandbox/kLxrEY7LX6RFMHjNE43B4P-img-3_1772082142000_na1fn_cGhvdG9ncmFwaHktaGVybw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRFlkOXY2OWoydnFPQ3pLWW5FNjRhRi9zYW5kYm94L2tMeHJFWTdMWDZSRk1Iak5FNDNCNFAtaW1nLTNfMTc3MjA4MjE0MjAwMF9uYTFmbl9jR2h2ZEc5bmNtRndhSGt0YUdWeWJ3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=mm9HloQCvT0jcs~SiZIljKutCkq-RDLczHVAv0BcyvKtXy2jnvmpet19ZvLWgnDeU2cyT~0ZIYlJrHcK5PPxBrFZHBOFvxNuKiHlOA3fW6D2gwzqGsexzAP4eL4Wn2eXnTDduZ1HaJkpSiurWBULzdWMRD7rXqp8L~oH8S0OE28ocn-fgF-rnjvxeSyHKZfK8ObdLkwhYmH4~Ov-01mOW5q~b0g~3dYMmHpsvFc5fU91DSwpBrX1yVw5jLTRMoWfadH5RjbieI7nKvpkvSsiS~ys4dKKuYoprs-sr06mzpoY-NVdflcfcQKZIE4kvf1~T6FhXL0Ut8DVROl7Psj-1Q__";

const RESEARCH_BG = "https://private-us-east-1.manuscdn.com/sessionFile/DYd9v69j2vqOCzKYnE64aF/sandbox/kLxrEY7LX6RFMHjNE43B4P-img-2_1772082140000_na1fn_cmVzZWFyY2gtYmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRFlkOXY2OWoydnFPQ3pLWW5FNjRhRi9zYW5kYm94L2tMeHJFWTdMWDZSRk1Iak5FNDNCNFAtaW1nLTJfMTc3MjA4MjE0MDAwMF9uYTFmbl9jbVZ6WldGeVkyZ3RZbWMuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=naPX~-9-TwnHAFvKDOsJGHoBN04hEpT-gOYGeQrE0vyw5f~9olwKV~Z-MhISzPLudvkYXpDVL6gD1xZHi4z09jdpSQL3A0X6QcH5mb0rNrTaZOodv7OJscGH-gEeGv~-98ngNK5ub370K64mRtQOK9zRjKz-EAyHxK7mUe3fp3Ra7RnqrBm1Yl4jvgMq6rMnUBfibt8GozZixjuK~OUJH7tBIK6eFA2-7zdt847245bpl1PQATbwZKem2b2046zaDFbmP2GVr0n06s-Eb7sHaWstOewp4tiLenDvHjrgopX1ZHO7r3PQmZ2CDbNzI4Lmmtvt4bYnkCb0VVWy1jYFqQ__";

function useFadeInUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function FadeSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useFadeInUp();
  return (
    <div
      ref={ref}
      className={`fade-in-up ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
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
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <p
              className="text-white/60 text-xs tracking-[0.2em] uppercase mb-4"
              style={{ fontFamily: "'Jost', system-ui, sans-serif" }}
            >
              Anthropologist · Researcher · Photographer
            </p>
            <h1
              className="text-white text-6xl md:text-8xl lg:text-9xl leading-none mb-6"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300 }}
            >
              Ali<br />Heller
            </h1>
            <div className="flex gap-4 flex-wrap">
              <Link href="/about">
                <span className="btn-dark text-sm">About Ali</span>
              </Link>
              <Link href="/book">
                <span
                  className="text-xs tracking-[0.12em] uppercase py-3 px-6 border border-white/50 text-white hover:bg-white/10 transition-all duration-250 inline-block"
                  style={{ fontFamily: "'Jost', system-ui, sans-serif" }}
                >
                  Fistula Politics
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <div className="w-px h-12 bg-white animate-pulse" />
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <FadeSection>
              <p className="section-label mb-6">Welcome</p>
              <hr className="sage-rule mb-8" />
            </FadeSection>
            <FadeSection delay={100}>
              <p
                className="text-[#1A1714] text-xl md:text-2xl leading-relaxed mb-8"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
              >
                I am an Assistant Professor in the Department of Anthropology at the University of Maryland and an experienced qualitative researcher in West Africa.
              </p>
            </FadeSection>
            <FadeSection delay={200}>
              <p className="text-[#4A4440] leading-relaxed mb-8" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                Over the past 15 years, across sub-Saharan Africa, South and Central America, and East and Southeast Asia, my research has focused on the social dynamics of health and illness. I explore how people interface with health systems and technologies, how illness and treatment affect social networks, why people get sick, how they think about their bodies, and how and when they seek care.
              </p>
            </FadeSection>
            <FadeSection delay={300}>
              <Link href="/about">
                <span className="btn-sage">Read More</span>
              </Link>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ── BOOK FEATURE ── */}
      <section className="py-0">
        <div className="container">
          <hr className="rule-divider" />
        </div>
        <div className="container py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Book cover */}
            <FadeSection className="order-2 md:order-1">
              <div className="img-hover max-w-xs mx-auto md:mx-0">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/ygMyuxSifadbUTtf.jpg"
                  alt="Fistula Politics book cover"
                  className="w-full shadow-2xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png";
                  }}
                />
              </div>
            </FadeSection>

            {/* Book info */}
            <FadeSection delay={150} className="order-1 md:order-2">
              <p className="section-label mb-6">Book</p>
              <hr className="sage-rule mb-8" />
              <h2
                className="text-[#1A1714] text-4xl md:text-5xl leading-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
              >
                Fistula Politics
              </h2>
              <p
                className="text-[#8A8480] text-lg mb-6 italic"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Birthing Injuries and the Quest for Continence in Niger
              </p>
              <p className="text-[#4A4440] leading-relaxed mb-8" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                Obstetric fistula is a birthing injury caused by prolonged obstructed labor that results in urinary and fecal incontinence. In <em>Fistula Politics</em>, Alison Heller illustrates the inaccuracy of popular humanitarian narratives and shows how they serve the interests not of the women so affected, but of humanitarian organizations, the media, and local clinics.
              </p>
              <div className="pull-quote">
                "Alison Heller has transformed the discourse on fistula with her brilliantly detailed ethnography of the lives of affected women in Niger."
                <footer className="text-sm mt-2 not-italic text-[#8A8480]" style={{ fontFamily: "'Jost', system-ui, sans-serif", letterSpacing: "0.04em" }}>
                  — Ellen Gruenbaum
                </footer>
              </div>
              <div className="flex gap-4 flex-wrap mt-8">
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
            <p
              className="text-white/60 text-xs tracking-[0.2em] uppercase mb-4"
              style={{ fontFamily: "'Jost', system-ui, sans-serif" }}
            >
              Photography
            </p>
            <h2
              className="text-white text-5xl md:text-7xl leading-tight mb-6 max-w-xl"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300 }}
            >
              Documenting Lives
            </h2>
            <p className="text-white/80 max-w-lg leading-relaxed mb-10" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              From the Sahel to Southeast Asia, a visual record of the people and places encountered across fifteen years of fieldwork.
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

      {/* ── RESEARCH TEASER ── */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <FadeSection>
              <p className="section-label mb-6">Research</p>
              <hr className="sage-rule mb-8" />
              <h2
                className="text-[#1A1714] text-4xl md:text-5xl leading-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
              >
                Health, Illness & Social Life
              </h2>
              <p className="text-[#4A4440] leading-relaxed mb-8" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                Funded by the Fulbright Hays, the National Science Foundation, the Wenner-Gren Foundation, and the Worldwide Fistula Fund, my research examines the lived experience of women with fistula, their negotiation of treatment seeking, social dynamics, and marital relationships.
              </p>
              <Link href="/research">
                <span className="btn-sage">Selected Publications</span>
              </Link>
            </FadeSection>

            <FadeSection delay={150}>
              <div className="space-y-6">
                {[
                  {
                    year: "2018",
                    title: "Transforming Obstetric Fistula through Concealment in Niger",
                    journal: "Human Organization 77(3): 239–248",
                  },
                  {
                    year: "2017",
                    title: "Unsettling the Fistula Narrative: Cultural Pathology, Biomedical Redemption, and Inequities of Health Access",
                    journal: "Anthropology & Medicine",
                  },
                  {
                    year: "2017",
                    title: "Demographic Profile and Treatment Outcomes of 100 Women with Obstetric Fistula in Niger",
                    journal: "Proceedings in Obstetrics and Gynecology",
                  },
                  {
                    year: "2014",
                    title: "Bedside Manner and the Invisible Patient: The Silence Surrounding Women's Gynaecological Health in Niger",
                    journal: "Anthropology Today 30(1): 20–23",
                  },
                ].map((pub, i) => (
                  <div key={i} className="flex gap-5 pb-6 border-b border-[#E5DED6] last:border-0">
                    <span
                      className="text-[#8A8480] text-xs pt-1 shrink-0 w-10"
                      style={{ fontFamily: "'Jost', system-ui, sans-serif", letterSpacing: "0.06em" }}
                    >
                      {pub.year}
                    </span>
                    <div>
                      <p className="text-[#1A1714] leading-snug mb-1" style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "0.9rem" }}>
                        {pub.title}
                      </p>
                      <p className="text-[#8A8480] text-xs italic" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                        {pub.journal}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
