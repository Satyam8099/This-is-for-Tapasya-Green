import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import useLenis from "@/hooks/useLenis";
import { PRODUCT_DETAILS, IMAGES, CONTACT } from "@/lib/site-data";

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function ProductPage() {
  useLenis();
  const { slug } = useParams();
  const p = PRODUCT_DETAILS[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!p) return <Navigate to="/" replace />;

  return (
    <div className="App bg-background min-h-screen" data-testid="product-page" data-slug={slug}>
      <div className="noise-overlay" aria-hidden />

      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-xl border-b border-black/10">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 h-20 flex items-center justify-between">
          <Link to="/" data-testid="product-logo" className="font-display uppercase tracking-tight text-xl md:text-2xl leading-none">
            <span className="text-prochem-red font-bold">PROCHEM</span>
            <span className="text-tapasya-blue font-bold"> TAPASYA</span>
          </Link>
          <Link
            to="/"
            data-testid="back-to-home"
            className="group inline-flex items-center gap-2 font-mono uppercase text-xs tracking-[0.2em] text-ink/70 hover:text-prochem-red transition-colors"
          >
            <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-0.5" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="grid-lines pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={reveal} initial="hidden" animate="show">
            <span data-testid="product-series" className="font-mono uppercase text-xs tracking-[0.3em] text-prochem-red">
              {p.series}
            </span>
            <h1 data-testid="product-name" className="mt-5 font-display font-bold uppercase tracking-tighter leading-[0.9] text-5xl md:text-7xl text-ink">
              {p.name}
            </h1>
            <p className="mt-8 max-w-md text-lg text-ink/70 leading-relaxed">{p.intro}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              {p.applications.map((a) => (
                <span key={a} className="font-mono uppercase text-[0.7rem] tracking-[0.2em] border border-black/15 px-3 py-1.5 text-ink/70">
                  {a}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="aspect-[4/3] overflow-hidden border border-black/10"
          >
            <img src={IMAGES[p.hero]} alt={p.name} className="h-full w-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-ink text-white" data-testid="product-highlights">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          <h2 className="font-display font-bold uppercase tracking-tighter leading-none text-4xl md:text-6xl">
            Why<br />this machine
          </h2>
          <ul className="space-y-6">
            {p.highlights.map((h, i) => (
              <motion.li
                key={h}
                custom={i}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-start gap-4 border-b border-white/15 pb-6"
              >
                <Check size={20} className="text-prochem-red mt-1 shrink-0" />
                <span className="text-lg text-white/80">{h}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Specifications */}
      <section className="bg-white border-b border-black/10" data-testid="product-specs">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-28">
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono uppercase text-xs tracking-[0.3em] text-prochem-red">(Technical Specs)</span>
            <span className="h-px flex-1 bg-black/10" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0 border-t border-black/10">
            {p.specs.map((s, i) => (
              <motion.div
                key={s.k}
                custom={i}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-baseline justify-between gap-6 border-b border-black/10 py-6"
              >
                <span className="font-mono uppercase text-xs tracking-[0.2em] text-ink/50">{s.k}</span>
                <span className="font-display uppercase tracking-tight text-xl md:text-2xl text-ink text-right">{s.v}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-background" data-testid="product-gallery">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-28 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {p.gallery.map((g, i) => (
            <motion.div
              key={`${g}-${i}`}
              custom={i}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group aspect-[4/3] overflow-hidden border border-black/10 clip-frame"
            >
              <img src={IMAGES[g]} alt="" className="h-full w-full object-cover grayscale-[35%] group-hover:grayscale-0" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-24 md:py-32">
          <h2 className="font-display font-bold uppercase tracking-tighter leading-[0.85] text-5xl md:text-8xl">
            Specify this machine<span className="text-prochem-red">.</span>
          </h2>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(p.name + " Enquiry")}`}
              data-testid="product-enquire"
              className="group inline-flex items-center gap-3 bg-prochem-red text-white pl-8 pr-6 py-4 font-mono uppercase text-sm tracking-[0.15em] hover:bg-white hover:text-ink transition-colors"
            >
              Request a Quote
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <Link
              to="/"
              data-testid="product-back-cta"
              className="inline-flex items-center gap-3 border border-white/25 text-white px-8 py-4 font-mono uppercase text-sm tracking-[0.15em] hover:border-white transition-colors"
            >
              View All Machines
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
