/* Blog Page — Quiet Modernism */

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

const posts = [
  {
    date: "July 25, 2015",
    title: "Sai Hankuri: Fieldnotes from Niger",
    excerpt: "Sai hankuri means 'have patience' — an exhortation, invocation, and code to live by that proved particularly salient both to the women I came to know in Niger and for me personally throughout my time in the field and beyond.",
    category: "Field Notes",
    slug: "sai-hankuri-fieldnotes-from-niger",
    featured: true,
  },
  {
    date: "March 12, 2016",
    title: "On Waiting: Time, Illness, and the Fistula Ward",
    excerpt: "The fistula ward operates on a different temporal logic than the rest of the hospital. Women arrive, wait, are evaluated, wait again, and sometimes wait for months before a surgery date is confirmed.",
    category: "Research",
    slug: "on-waiting",
    featured: false,
  },
  {
    date: "November 3, 2016",
    title: "The Humanitarian Gaze and Its Discontents",
    excerpt: "What does it mean when a woman's suffering becomes a fundraising tool? When her story — simplified, sensationalized, stripped of context — is used to solicit donations from strangers on the other side of the world?",
    category: "Commentary",
    slug: "humanitarian-gaze",
    featured: false,
  },
  {
    date: "April 8, 2017",
    title: "Concealment as Strategy: How Women Navigate Fistula Stigma",
    excerpt: "Contrary to the dominant narrative, many women with fistula in Niger are not abandoned or exiled. Instead, they develop sophisticated strategies of concealment that allow them to maintain social relationships and community standing.",
    category: "Research",
    slug: "concealment-as-strategy",
    featured: false,
  },
  {
    date: "September 20, 2018",
    title: "Photographs from the Field: Women of Niger",
    excerpt: "A selection of photographs from eighteen months of fieldwork at fistula repair centers across Niger, accompanied by brief reflections on the ethics and practice of documentary photography in clinical settings.",
    category: "Photography",
    slug: "photographs-women-of-niger",
    featured: false,
  },
];

export default function Blog() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-[#F8F4EF]">
      <Navigation />

      {/* Page header */}
      <div className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#1A1714]">
        <div className="container">
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "'Jost', system-ui, sans-serif" }}>
            Writing
          </p>
          <h1
            className="text-white text-5xl md:text-7xl leading-none"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300 }}
          >
            Blog
          </h1>
        </div>
      </div>

      {/* Featured post */}
      {featured && (
        <section className="py-20 md:py-28 border-b border-[#E5DED6]">
          <div className="container">
            <FadeSection>
              <p className="section-label mb-6">Featured Post</p>
              <hr className="sage-rule mb-10" />
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-5">
                  <span
                    className="text-[#7A9E7E] text-xs tracking-widest uppercase"
                    style={{ fontFamily: "'Jost', system-ui, sans-serif" }}
                  >
                    {featured.category}
                  </span>
                  <span className="text-[#8A8480] text-xs" style={{ fontFamily: "'Jost', system-ui, sans-serif" }}>
                    {featured.date}
                  </span>
                </div>
                <h2
                  className="text-[#1A1714] text-4xl md:text-5xl leading-tight mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
                >
                  {featured.title}
                </h2>
                <p className="text-[#4A4440] text-lg leading-relaxed mb-8" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                  {featured.excerpt}
                </p>
                <a
                  href={`https://ali-heller.com/index.php/${featured.slug}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sage"
                >
                  Read Post
                </a>
              </div>
            </FadeSection>
          </div>
        </section>
      )}

      {/* Post list */}
      <section className="py-20 md:py-28">
        <div className="container">
          <FadeSection>
            <p className="section-label mb-4">All Posts</p>
            <hr className="sage-rule mb-12" />
          </FadeSection>
          <div className="max-w-3xl space-y-0">
            {rest.map((post, i) => (
              <FadeSection key={i} delay={i * 60}>
                <article className="py-10 border-b border-[#E5DED6] last:border-0">
                  <div className="flex items-center gap-4 mb-4">
                    <span
                      className="text-[#7A9E7E] text-xs tracking-widest uppercase"
                      style={{ fontFamily: "'Jost', system-ui, sans-serif" }}
                    >
                      {post.category}
                    </span>
                    <span className="text-[#8A8480] text-xs" style={{ fontFamily: "'Jost', system-ui, sans-serif" }}>
                      {post.date}
                    </span>
                  </div>
                  <h3
                    className="text-[#1A1714] text-2xl md:text-3xl leading-snug mb-4 hover:text-[#7A9E7E] transition-colors cursor-pointer"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-[#6A6460] leading-relaxed mb-5" style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "0.95rem" }}>
                    {post.excerpt}
                  </p>
                  <a
                    href={`https://ali-heller.com/index.php/${post.slug}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7A9E7E] text-xs tracking-widest uppercase hover:text-[#5a7e5e] transition-colors"
                    style={{ fontFamily: "'Jost', system-ui, sans-serif" }}
                  >
                    Read More →
                  </a>
                </article>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
