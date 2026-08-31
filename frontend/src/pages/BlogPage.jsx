import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import PageShell from "@/components/site/PageShell";
import { PageHero, Section, reveal } from "@/components/site/PageParts";
import { BLOG_POSTS } from "@/data/blog";
import { IMAGES } from "@/lib/site-data";

const fmt = (iso) => new Date(iso).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

export default function BlogPage() {
  const [feature, ...rest] = BLOG_POSTS;
  return (
    <PageShell testid="blog-page">
      <PageHero
        kicker="Blog"
        title={<>Engineering<br />perspectives.</>}
        intro="Field notes, process observations and regulatory reads from the Prochem Tapasya engineering, process and quality teams."
        testid="blog-hero"
      />

      <Section index={1} kicker="Featured" title="Latest read." testid="section-blog-featured">
        <Link to={`/blog/${feature.slug}`} data-testid={`blog-card-${feature.slug}`} className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border border-black/10 bg-white overflow-hidden">
          <div className="lg:col-span-7 clip-frame aspect-[4/3] lg:aspect-auto">
            <img src={IMAGES[feature.hero]} alt="" className="h-full w-full object-cover grayscale-[15%] group-hover:grayscale-0" />
          </div>
          <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-between gap-6">
            <div>
              <span className="font-mono uppercase text-[0.65rem] tracking-[0.25em] text-prochem-red">{feature.category}</span>
              <h3 className="mt-4 font-display font-bold uppercase tracking-tighter leading-[0.95] text-3xl md:text-5xl text-ink group-hover:text-prochem-red transition-colors">{feature.title}</h3>
              <p className="mt-5 text-ink/70 text-base md:text-lg">{feature.excerpt}</p>
            </div>
            <div className="flex items-center justify-between font-mono uppercase text-[0.65rem] tracking-[0.25em] text-ink/50">
              <span className="inline-flex items-center gap-2"><Calendar size={12} /> {fmt(feature.date)}</span>
              <span className="inline-flex items-center gap-2"><Clock size={12} /> {feature.readTime}</span>
              <ArrowUpRight size={16} className="text-ink group-hover:text-prochem-red transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </Link>
      </Section>

      <Section alt index={2} kicker="More Articles" title="From the team." testid="section-blog-list">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((p, i) => (
            <motion.div key={p.slug} custom={i} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Link to={`/blog/${p.slug}`} data-testid={`blog-card-${p.slug}`} className="group block bg-white border border-black/10 overflow-hidden h-full">
                <div className="clip-frame aspect-[16/10]">
                  <img src={IMAGES[p.hero]} alt="" className="h-full w-full object-cover grayscale-[15%] group-hover:grayscale-0" />
                </div>
                <div className="p-6 md:p-8">
                  <span className="font-mono uppercase text-[0.65rem] tracking-[0.25em] text-prochem-red">{p.category}</span>
                  <h3 className="mt-3 font-display uppercase tracking-tight leading-tight text-xl md:text-2xl text-ink group-hover:text-prochem-red transition-colors">{p.title}</h3>
                  <p className="mt-3 text-ink/70">{p.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between font-mono uppercase text-[0.65rem] tracking-[0.25em] text-ink/50">
                    <span className="inline-flex items-center gap-2"><Calendar size={12} /> {fmt(p.date)}</span>
                    <span>{p.readTime}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
