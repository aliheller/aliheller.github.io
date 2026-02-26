/* Photography Page — Quiet Modernism
   Grid of categories with hover captions, full-bleed hero */

import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PHOTO_HERO = "https://private-us-east-1.manuscdn.com/sessionFile/DYd9v69j2vqOCzKYnE64aF/sandbox/kLxrEY7LX6RFMHjNE43B4P-img-3_1772082142000_na1fn_cGhvdG9ncmFwaHktaGVybw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRFlkOXY2OWoydnFPQ3pLWW5FNjRhRi9zYW5kYm94L2tMeHJFWTdMWDZSRk1Iak5FNDNCNFAtaW1nLTNfMTc3MjA4MjE0MjAwMF9uYTFmbl9jR2h2ZEc5bmNtRndhSGt0YUdWeWJ3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=mm9HloQCvT0jcs~SiZIljKutCkq-RDLczHVAv0BcyvKtXy2jnvmpet19ZvLWgnDeU2cyT~0ZIYlJrHcK5PPxBrFZHBOFvxNuKiHlOA3fW6D2gwzqGsexzAP4eL4Wn2eXnTDduZ1HaJkpSiurWBULzdWMRD7rXqp8L~oH8S0OE28ocn-fgF-rnjvxeSyHKZfK8ObdLkwhYmH4~Ov-01mOW5q~b0g~3dYMmHpsvFc5fU91DSwpBrX1yVw5jLTRMoWfadH5RjbieI7nKvpkvSsiS~ys4dKKuYoprs-sr06mzpoY-NVdflcfcQKZIE4kvf1~T6FhXL0Ut8DVROl7Psj-1Q__";

// Unsplash images for each category
const categories = [
  {
    title: "Animals",
    desc: "Wildlife and animal encounters from fieldwork across three continents.",
    img: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=800&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Love",
    desc: "Intimate moments and human connection.",
    img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=80",
    span: "col-span-1 row-span-2",
  },
  {
    title: "Peru",
    desc: "Portraits and landscapes from the Andes.",
    img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Baby Ashaan",
    desc: "A personal documentary series.",
    img: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Women of Niger",
    desc: "Portraits of strength and resilience in the Sahel.",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Kids of Niger",
    desc: "Childhood and play in West Africa.",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    title: "India",
    desc: "Color, texture, and daily life.",
    img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Southeast Asia",
    desc: "Landscapes and people from Thailand, Vietnam, and beyond.",
    img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    title: "The U.S.A.",
    desc: "Domestic scenes and American landscapes.",
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Colombia",
    desc: "Color and culture in South America.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Science",
    desc: "Research environments and fieldwork documentation.",
    img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&q=80",
    span: "col-span-1 row-span-1",
  },
];

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

function CategoryCard({ cat, index }: { cat: typeof categories[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeSection delay={index * 50}>
      <div
        className="relative overflow-hidden cursor-pointer group aspect-[4/3]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={cat.img}
          alt={cat.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Always-visible title */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3
            className="text-white text-xl leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
          >
            {cat.title}
          </h3>
        </div>
        {/* Hover description */}
        <div
          className={`absolute inset-0 bg-black/70 flex items-center justify-center p-6 transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center">
            <h3
              className="text-white text-2xl mb-3"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
            >
              {cat.title}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              {cat.desc}
            </p>
          </div>
        </div>
      </div>
    </FadeSection>
  );
}

export default function Photography() {
  return (
    <div className="min-h-screen bg-[#1A1714]">
      <Navigation />

      {/* Full-bleed hero */}
      <div
        className="relative h-[60vh] min-h-[400px] flex items-end pb-16"
        style={{
          backgroundImage: `url(${PHOTO_HERO})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714] via-black/20 to-transparent" />
        <div className="container relative z-10 pt-32">
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "'Jost', system-ui, sans-serif" }}>
            Photography
          </p>
          <h1
            className="text-white text-5xl md:text-7xl leading-none"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300 }}
          >
            Visual Work
          </h1>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 md:py-20">
        <div className="container">
          <FadeSection>
            <p className="text-white/60 max-w-2xl text-lg leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              Across fifteen years of fieldwork in West Africa, South America, and Southeast Asia, photography has been a constant companion — a way of seeing, remembering, and bearing witness to the lives of the people I have been privileged to know.
            </p>
          </FadeSection>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat, i) => (
              <CategoryCard key={cat.title} cat={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 border-t border-white/10">
        <div className="container text-center">
          <FadeSection>
            <p className="text-white/40 text-xs tracking-widest uppercase mb-4" style={{ fontFamily: "'Jost', system-ui, sans-serif" }}>
              Follow Along
            </p>
            <h2
              className="text-white text-3xl md:text-4xl mb-6"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300 }}
            >
              More on Instagram
            </h2>
            <a
              href="https://www.instagram.com/ali.heller/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs tracking-[0.12em] uppercase py-3 px-8 border border-white/40 text-white/80 hover:bg-white/10 transition-all duration-250"
              style={{ fontFamily: "'Jost', system-ui, sans-serif" }}
            >
              @ali.heller
            </a>
          </FadeSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
