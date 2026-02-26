/* Photography Page — Quiet Modernism
   Five categories: Niger, Babies, South America, Asia, Nature
   Accordion expand with photo grid + lightbox */

import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PHOTO_HERO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/cswccTvUXInUnByg.jpg";

const nigerPhotos = [
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/cswccTvUXInUnByg.jpg", caption: "Amina" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/qLLzvYIZnBvDjmKq.jpg", caption: "Aminata" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/FoHldVkFBKSDReNQ.jpg", caption: "Mariama" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/ppyBztkVoTAUTetK.jpg", caption: "Zeinabou" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/OWTfoXbIAqAGFOLX.jpg", caption: "Kadi" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/hsjMsStKUTiSfkNX.jpg", caption: "Fulani woman" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/OEpXCFsfYdEkLiWL.jpg", caption: "Women waiting" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/soWSAGsoqHsIfyLz.jpg", caption: "Rabi" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/UpklkYJhoWyhecxU.jpg", caption: "Rahmatou praying" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/hwNVrsFYphgzqyUd.jpg", caption: "Zeinabou praying" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/xcuVbsWPeKfIXDfS.jpg", caption: "Boy" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/SxOpmQuSqybOofWL.jpg", caption: "Little girl" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/eorceVzCqWnkbett.jpg", caption: "Baby" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/vdLKFMJAoIRtCqgc.jpg", caption: "Baptism" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/TImolSguBGxUqWsM.jpg", caption: "With mom" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/aZnjadRnBfNTnnGi.jpg", caption: "Harmattan" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/TRBYnIIZvfyaPjqp.jpg", caption: "Market" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/jDnPWCgVTGueGgFa.jpg", caption: "Niamey" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/uYxdHSjyENWhYJnf.jpg", caption: "Beading" },
];

const babiesPhotos = [
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/sdvRkXHXRttTSERq.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/npaiclFwiflNzrZP.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/lBVaywwLKHQhqHPs.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/FbBEYyvHoYgqVYwx.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/CcHovSUoZXQzoehT.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/mmmfixxxpJOgzdEf.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/xYnjjjQakydDFcvS.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/mSWiaaqhGIcCPtJI.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/RcZhbpuvBLjGpLLj.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/rGWIBrvgymClXtVa.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/nWixpvmpIeihsYvi.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/iJSbrajkYLptQvyj.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/gkwCodhoDgiAtPmc.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/jWkzgcGVLPBdPlye.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/TkGNShMtPzAVUVlT.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/iveqQxaIWCQLnWFD.jpg", caption: "Sleeping" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/EhAKMLdbChjECliY.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/vDGiUOtLoAhkylnh.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/mpFKSqMKhVanDDgk.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/uAhrrhpmSDFQUJuN.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/RELzHdCrigzYNPCK.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/zigbOkcpTurBQmWI.jpg", caption: "" },
];

const southAmericaPhotos = [
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/sLBVSZtkpYlnFoKU.jpg", caption: "Taganga" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/nCuaDWdzbTXnZblc.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/iNQVYKvkbSMfanXU.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/DMomkEBnfYlaHYPK.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/xAICruSBwfaTRcBK.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/HTRKdriPIavKhDdP.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/xcwsoaQQmCfVogEm.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/pPtFyVYOjXegnsxo.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/mlKbAYXWvbURVPvF.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/mYhWIJAMOdUKJLku.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/RfYVPmWYOtHLIqlI.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/vWgMbjDJMCrihkJu.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/HottcrLgnWZkTeZg.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/JGZgKmExPEONFtJm.jpg", caption: "Cacao" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/JqmATayFfvHTwNNy.jpg", caption: "Guard" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/dziuUVuwqCoianGM.jpg", caption: "Kogi boy" },
];

const asiaPhotos = [
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/sgXUUlgjxmBvZhgD.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/DHSrdBaolJOLVFRx.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/svdtxnjmbohGFiaE.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/NGYFhSSIUFpBKGbi.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/JxRMpqTuBGKhrfrD.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/mfzpADLiOvITYQME.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/HFuotsPWHEOsNRNH.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/zmVXzYodMCqQqGCz.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/jOSlpBmSKqKyEtWt.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/VeMhdjVAXEkhEecZ.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/VxtwteWvehAtQudI.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/YQXngguNAMQBsKDi.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/PEEWvsBOUhYKlXwp.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/xTKLYlICHPOMvRou.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/uKkVBoBELkwIrFbv.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/ynlxMYeIqTbYoHVU.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/eqYkEVYSWIRNbvGx.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/yjRASmgRfdQRyoOw.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/HCLXlHBLejlGiQnW.jpg", caption: "" },
];

const naturePhotos = [
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/CXFVVyruutNvgxEj.jpg", caption: "Bird" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/wShqeFOscmFQOpHe.jpg", caption: "Macaw" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/CQZWTfjPKcNyWUiO.jpg", caption: "Shakira" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/cSWiMMKYSmzNGJfW.jpg", caption: "Toucan" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/AmIWSGEpebvRluqJ.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/WDFIDAJtutQDVKlr.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/QQtnOlNJONzNMDAN.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/LdDksjXgmtutrRpM.jpg", caption: "Civet" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/PgFnLJDACmxspSmY.jpg", caption: "" },
];

const categories = [
  {
    id: "niger",
    title: "Niger",
    desc: "Portraits, daily life, and fieldwork across the Sahel — documenting women navigating health systems, community, and resilience over a decade of research.",
    cover: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/OWTfoXbIAqAGFOLX.jpg",
    photos: nigerPhotos,
  },
  {
    id: "babies",
    title: "Babies",
    desc: "A personal documentary series — the tender, exhausting, luminous first years of new life.",
    cover: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/iveqQxaIWCQLnWFD.jpg",
    photos: babiesPhotos,
  },
  {
    id: "south-america",
    title: "South America",
    desc: "Colombia, Peru, and beyond — markets, coastlines, Indigenous communities, and the textures of everyday life.",
    cover: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/dziuUVuwqCoianGM.jpg",
    photos: southAmericaPhotos,
  },
  {
    id: "asia",
    title: "Asia",
    desc: "India, Southeast Asia, and the landscapes in between — color, devotion, and the quiet moments between.",
    cover: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/sgXUUlgjxmBvZhgD.jpg",
    photos: asiaPhotos,
  },
  {
    id: "nature",
    title: "Nature",
    desc: "Wildlife encountered across three continents — toucans in Colombia, civets in the forest, birds of every kind.",
    cover: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/cSWiMMKYSmzNGJfW.jpg",
    photos: naturePhotos,
  },
];

function FadeSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.unobserve(el); } },
      { threshold: 0.06 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`fade-in-up ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

function Lightbox({ photos, initialIndex, onClose }: {
  photos: { src: string; caption: string }[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(initialIndex);
  const prev = () => setIdx(i => (i - 1 + photos.length) % photos.length);
  const next = () => setIdx(i => (i + 1) % photos.length);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95" onClick={onClose}>
      <button
        className="absolute top-6 right-8 text-white/60 hover:text-white text-4xl z-10 transition-colors leading-none"
        onClick={onClose}
      >
        ×
      </button>
      <button
        className="absolute left-4 md:left-8 text-white/60 hover:text-white text-5xl z-10 transition-colors px-2 py-4 leading-none"
        onClick={e => { e.stopPropagation(); prev(); }}
      >
        ‹
      </button>
      <div className="max-w-5xl max-h-screen w-full px-16 flex flex-col items-center" onClick={e => e.stopPropagation()}>
        <img
          src={photos[idx].src}
          alt={photos[idx].caption}
          className="max-h-[80vh] max-w-full object-contain"
        />
        {photos[idx].caption && (
          <p className="text-white/50 text-sm mt-4" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            {photos[idx].caption}
          </p>
        )}
        <p className="text-white/30 text-xs mt-2 tracking-widest" style={{ fontFamily: "'Jost', system-ui, sans-serif" }}>
          {idx + 1} / {photos.length}
        </p>
      </div>
      <button
        className="absolute right-4 md:right-8 text-white/60 hover:text-white text-5xl z-10 transition-colors px-2 py-4 leading-none"
        onClick={e => { e.stopPropagation(); next(); }}
      >
        ›
      </button>
    </div>
  );
}

function CategorySection({ cat, index }: { cat: typeof categories[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  return (
    <FadeSection delay={index * 80}>
      <div className="border-t border-white/10">
        {/* Header — click to expand */}
        <button
          className="w-full text-left py-8 flex items-center gap-6 group"
          onClick={() => setExpanded(e => !e)}
        >
          {/* Cover thumbnail */}
          <div className="w-20 h-14 flex-shrink-0 overflow-hidden">
            <img
              src={cat.cover}
              alt={cat.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          {/* Title + count */}
          <div className="flex-1 min-w-0">
            <h2
              className="text-white text-2xl md:text-3xl leading-none mb-1"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300 }}
            >
              {cat.title}
            </h2>
            <p
              className="text-white/40 text-xs tracking-widest uppercase"
              style={{ fontFamily: "'Jost', system-ui, sans-serif" }}
            >
              {cat.photos.length} photos
            </p>
          </div>
          {/* Arrow */}
          <span
            className="text-white/40 text-2xl transition-transform duration-300 flex-shrink-0 leading-none"
            style={{ transform: expanded ? "rotate(90deg)" : "rotate(0deg)" }}
          >
            ›
          </span>
        </button>

        {/* Expanded grid */}
        {expanded && (
          <div className="pb-12">
            <p
              className="text-white/50 text-sm leading-relaxed mb-8 max-w-2xl"
              style={{ fontFamily: "'Lora', Georgia, serif" }}
            >
              {cat.desc}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {cat.photos.map((photo, i) => (
                <div
                  key={i}
                  className="aspect-square overflow-hidden cursor-pointer group relative"
                  onClick={() => setLightboxIdx(i)}
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <Lightbox
          photos={cat.photos}
          initialIndex={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
        />
      )}
    </FadeSection>
  );
}

export default function Photography() {
  return (
    <div className="min-h-screen bg-[#1A1714]">
      <Navigation />

      {/* Hero */}
      <div
        className="relative h-[60vh] min-h-[400px] flex items-end pb-16"
        style={{
          backgroundImage: `url(${PHOTO_HERO})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714] via-black/30 to-transparent" />
        <div className="container relative z-10 pt-32">
          <p
            className="text-white/40 text-xs tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "'Jost', system-ui, sans-serif" }}
          >
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
            <p
              className="text-white/60 max-w-2xl text-lg leading-relaxed"
              style={{ fontFamily: "'Lora', Georgia, serif" }}
            >
              Across fifteen years of fieldwork in West Africa, South America, and Southeast Asia, photography has been a constant companion — a way of seeing, remembering, and bearing witness to the lives of the people I have been privileged to know.
            </p>
          </FadeSection>
        </div>
      </section>

      {/* Category accordion */}
      <section className="pb-24">
        <div className="container">
          {categories.map((cat, i) => (
            <CategorySection key={cat.id} cat={cat} index={i} />
          ))}
          <div className="border-t border-white/10" />
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 border-t border-white/10">
        <div className="container text-center">
          <FadeSection>
            <p
              className="text-white/40 text-xs tracking-widest uppercase mb-4"
              style={{ fontFamily: "'Jost', system-ui, sans-serif" }}
            >
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
