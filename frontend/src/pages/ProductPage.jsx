import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Download,
  Play,
  ChevronRight,
} from "lucide-react";
import useLenis from "@/hooks/useLenis";
import { PRODUCT_DETAILS, img, CONTACT } from "@/lib/site-data";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import EnquiryForm from "@/components/site/EnquiryForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] },
  }),
};

function SectionHeader({ index, kicker, title, note }) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="flex items-center gap-4 mb-6">
        <span className="font-mono uppercase text-[0.65rem] tracking-[0.3em] text-prochem-red">
          ({String(index).padStart(2, "0")}) {kicker}
        </span>
        <span className="h-px flex-1 bg-black/10" />
      </div>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <h2 className="font-display font-bold uppercase tracking-tighter leading-[0.9] text-4xl md:text-6xl text-ink">
          {title}
        </h2>
        {note && (
          <p className="max-w-md text-ink/60 text-base md:text-lg">{note}</p>
        )}
      </div>
    </div>
  );
}

export default function ProductPage() {
  useLenis();
  const { slug } = useParams();
  const [selectedModel, setSelectedModel] = useState(0);
  const p = PRODUCT_DETAILS[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedModel(0);
  }, [slug]);

  if (!p) {
    return (
      <div className="App bg-background min-h-screen" data-testid="product-not-found">
        <Navbar />
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 pt-40 pb-32 min-h-[70vh]">
          <p className="font-mono uppercase text-[0.65rem] tracking-[0.3em] text-prochem-red">
            404 · Product Not Found
          </p>
          <h1 className="mt-6 font-display font-bold uppercase tracking-tighter leading-[0.9] text-4xl md:text-6xl text-ink">
            This machine is no longer in the lineup.
          </h1>
          <p className="mt-6 max-w-md text-ink/60 text-base md:text-lg">
            The product you are looking for may have been renamed or retired.
            Browse the current catalogue or send us an enquiry.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/"
              data-testid="not-found-home-link"
              className="inline-flex items-center gap-2 bg-prochem-red text-white font-mono uppercase text-xs tracking-[0.2em] px-8 py-4 hover:bg-ink transition-colors duration-300"
            >
              Back to Home
            </Link>
            <Link
              to="/contact"
              data-testid="not-found-contact-link"
              className="inline-flex items-center gap-2 border border-ink/20 text-ink font-mono uppercase text-xs tracking-[0.2em] px-8 py-4 hover:border-prochem-red hover:text-prochem-red transition-colors duration-300"
            >
              Enquire
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const enquiryHref = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    `RFQ · ${p.name}`,
  )}&body=${encodeURIComponent(
    `Product: ${p.name}\nCategory: ${p.categoryName}\n\nPlease share pricing, delivery and documentation details for the model / configuration below:\n\nBatch size:\nApplication:\nCompliance requirement:\nTarget country:\n`,
  )}`;

  return (
    <div className="App bg-background min-h-screen" data-testid="product-page" data-slug={slug}>
      <div className="noise-overlay" aria-hidden />
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-24 md:pt-28 border-b border-black/10 bg-white/60 backdrop-blur-sm">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-4 flex items-center gap-2 font-mono uppercase text-[0.65rem] tracking-[0.25em] text-ink/60">
          <Link to="/" className="hover:text-prochem-red">Home</Link>
          <ChevronRight size={12} />
          <span className="hover:text-prochem-red">{p.categoryName}</span>
          <ChevronRight size={12} />
          <span className="text-ink">{p.name}</span>
        </div>
      </div>

      {/* 01. HERO */}
      <section className="grid-lines" data-testid="product-hero">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="show"
            className="lg:col-span-6"
          >
            <span data-testid="product-series" className="font-mono uppercase text-xs tracking-[0.3em] text-prochem-red">
              {p.tag}
            </span>
            <h1 data-testid="product-name" className="mt-5 font-display font-bold uppercase tracking-tighter leading-[0.9] text-5xl md:text-7xl text-ink">
              {p.name}
            </h1>
            <p className="mt-8 max-w-xl text-lg text-ink/70 leading-relaxed">
              {p.short}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 max-w-xl">
              {p.quickSpecs.map((qs) => (
                <div key={qs.label} className="border-t border-black/15 pt-3">
                  <p className="font-mono uppercase text-[0.65rem] tracking-[0.2em] text-ink/50">
                    {qs.label}
                  </p>
                  <p className="mt-1 font-display uppercase tracking-tight text-lg text-ink">
                    {qs.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={enquiryHref}
                data-testid="hero-rfq"
                className="group inline-flex items-center gap-3 bg-prochem-red text-white pl-6 pr-5 py-3.5 font-mono uppercase text-xs tracking-[0.15em] hover:bg-ink transition-colors"
              >
                Request Quote
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="#downloads"
                data-testid="hero-datasheet"
                className="inline-flex items-center gap-3 border border-black/20 text-ink px-6 py-3.5 font-mono uppercase text-xs tracking-[0.15em] hover:border-ink transition-colors"
              >
                Download Datasheet
                <Download size={14} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 aspect-[4/3] overflow-hidden border border-black/10"
          >
            <img src={img(p.hero)} alt={p.name} className="h-full w-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* 02. QUICK SPECIFICATIONS */}
      <section className="bg-ink text-white" data-testid="section-quick-specs">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-16 md:py-20">
          <p className="font-mono uppercase text-[0.65rem] tracking-[0.3em] text-white/40 mb-8">
            (02) Quick Specifications
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/20 pt-8">
            {p.quickSpecs.map((qs, i) => (
              <motion.div
                key={qs.label}
                custom={i}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <p className="font-mono uppercase text-[0.65rem] tracking-[0.25em] text-white/50">
                  {qs.label}
                </p>
                <p className="mt-3 font-display font-bold uppercase tracking-tight text-3xl md:text-4xl">
                  {qs.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. PRODUCT OVERVIEW */}
      <section className="bg-white" data-testid="section-overview">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-28">
          <SectionHeader
            index={3}
            kicker="Product Overview"
            title={<>Built for <br className="hidden md:block" />repeatable output.</>}
            note={p.short}
          />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-7">
              <p className="text-lg md:text-xl text-ink/80 leading-relaxed">
                The {p.name} is engineered as part of a coordinated {p.categoryName.toLowerCase()} line. Every unit is
                designed for pharmaceutical-grade construction, straightforward operation and full
                validation support.
              </p>
              <p className="mt-6 text-lg md:text-xl text-ink/70 leading-relaxed">
                Machines are sized to match your batch profile and are shipped with the
                documentation package required by regulated environments — from URS through PQ.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="border-l border-black/10 pl-6">
                <p className="font-mono uppercase text-[0.65rem] tracking-[0.25em] text-ink/40">
                  Category
                </p>
                <p className="mt-2 font-display uppercase tracking-tight text-2xl text-ink">
                  {p.categoryName}
                </p>
                <p className="mt-6 font-mono uppercase text-[0.65rem] tracking-[0.25em] text-ink/40">
                  Series
                </p>
                <p className="mt-2 font-display uppercase tracking-tight text-2xl text-ink">
                  {p.tag}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. HOW IT WORKS */}
      <section className="bg-background border-y border-black/10" data-testid="section-how">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-28">
          <SectionHeader index={4} kicker="How it Works" title="Process Sequence" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {p.howItWorks.map((s, i) => (
              <motion.div
                key={s.n}
                custom={i}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white border border-black/10 p-6 relative"
              >
                <span className="font-mono text-xs tracking-widest text-prochem-red">
                  {s.n}
                </span>
                <h3 className="mt-4 font-display font-bold uppercase tracking-tight text-2xl text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-ink/70 text-sm leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. PROCESS ANIMATION / VIDEO */}
      <section className="bg-ink text-white overflow-hidden" data-testid="section-video">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-28">
          <p className="font-mono uppercase text-[0.65rem] tracking-[0.3em] text-white/40 mb-6">
            (05) Process Animation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-10">
            <h2 className="md:col-span-8 font-display font-bold uppercase tracking-tighter leading-[0.9] text-4xl md:text-6xl">
              See it in motion.
            </h2>
            <p className="md:col-span-4 text-white/60 max-w-sm">
              A 3D process animation and demonstration footage are available on request as part
              of technical discussions.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[16/9] overflow-hidden border border-white/15 group"
          >
            <motion.img
              src={img(p.hero)}
              alt=""
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 6, ease: "linear" }}
              className="absolute inset-0 h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
            <a
              href={enquiryHref}
              data-testid="request-video"
              className="absolute left-8 bottom-8 md:left-10 md:bottom-10 group/btn inline-flex items-center gap-4"
            >
              <span className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-prochem-red text-white grid place-items-center group-hover/btn:scale-105 transition-transform">
                <Play size={22} />
              </span>
              <span className="font-mono uppercase text-xs tracking-[0.25em] text-white">
                Request demo footage
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 06. KEY FEATURES */}
      <section className="bg-white" data-testid="section-features">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-28">
          <SectionHeader
            index={6}
            kicker="Key Features"
            title="Engineered essentials."
            note="What makes the machine reliable, cGMP-ready and easy to operate."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
            {p.keyFeatures.map((f, i) => (
              <motion.div
                key={f}
                custom={i}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-start gap-4 border-b border-black/10 py-5"
              >
                <Check size={18} className="text-prochem-red mt-1 shrink-0" />
                <span className="text-lg text-ink/85">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 07. TECHNICAL SPECIFICATIONS */}
      <section className="bg-background border-y border-black/10" data-testid="section-tech-specs">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-28">
          <SectionHeader index={7} kicker="Technical Specifications" title="Reference data." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 border-t border-black/15">
            {p.techSpecs.map((s, i) => (
              <div
                key={s.k}
                className="flex items-baseline justify-between gap-6 border-b border-black/10 py-5"
              >
                <span className="font-mono uppercase text-[0.7rem] tracking-[0.2em] text-ink/50">
                  {s.k}
                </span>
                <span className="font-display uppercase tracking-tight text-lg md:text-xl text-ink text-right">
                  {s.v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08. MODEL / CAPACITY SELECTOR */}
      <section className="bg-white" data-testid="section-models">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-28">
          <SectionHeader
            index={8}
            kicker="Capacity / Model Selector"
            title="Choose your scale."
            note="Standard model range. Custom sizing available on request."
          />

          <div className="flex flex-wrap gap-2 mb-8">
            {p.models.rows.map((row, i) => (
              <button
                key={row[0]}
                data-testid={`model-tab-${i}`}
                onClick={() => setSelectedModel(i)}
                className={`px-4 py-2 border font-mono uppercase text-[0.7rem] tracking-[0.2em] transition-colors ${
                  selectedModel === i
                    ? "border-prochem-red bg-prochem-red text-white"
                    : "border-black/15 text-ink/70 hover:border-ink"
                }`}
              >
                {row[0]}
              </button>
            ))}
          </div>

          <div className="overflow-x-auto border border-black/10">
            <table className="w-full text-left">
              <thead className="bg-ink text-white">
                <tr>
                  {p.models.headers.map((h) => (
                    <th
                      key={h}
                      className="font-mono uppercase text-[0.65rem] tracking-[0.2em] px-6 py-4"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {p.models.rows.map((row, i) => (
                  <tr
                    key={row[0]}
                    className={`${
                      selectedModel === i ? "bg-prochem-red/5" : "bg-white"
                    } border-t border-black/10`}
                  >
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`px-6 py-4 ${
                          j === 0
                            ? "font-display uppercase tracking-tight text-ink"
                            : "text-ink/75"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 09. APPLICATIONS */}
      <section className="bg-background border-y border-black/10" data-testid="section-applications">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-28">
          <SectionHeader index={9} kicker="Applications" title="Where it's used." />
          <div className="flex flex-wrap gap-3">
            {p.applications.map((a) => (
              <span
                key={a}
                className="font-mono uppercase text-xs tracking-[0.2em] border border-black/15 bg-white px-4 py-2.5 text-ink/80"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 10. PROCESS INTEGRATION */}
      <section className="bg-white" data-testid="section-integration">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-28">
          <SectionHeader
            index={10}
            kicker="Process Integration"
            title="Fits into your line."
            note="Delivered with the interfaces your plant already speaks."
          />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
            {p.integration.map((li, i) => (
              <li
                key={li}
                className="flex items-start gap-4 border-b border-black/10 py-5"
              >
                <span className="font-mono text-xs text-prochem-red pt-1 tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-ink/80 text-lg">{li}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 11. CUSTOMISATION */}
      <section className="bg-ink text-white" data-testid="section-customisation">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-28">
          <p className="font-mono uppercase text-[0.65rem] tracking-[0.3em] text-white/40 mb-6">
            (11) Customisation Options
          </p>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end mb-10">
            <h2 className="md:col-span-8 font-display font-bold uppercase tracking-tighter leading-[0.9] text-4xl md:text-6xl">
              Configured to your batch.
            </h2>
            <p className="md:col-span-4 text-white/60">
              Every project is scoped from a URS. These are the most common variables we adjust.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
            {p.customisation.map((c) => (
              <li key={c} className="flex items-start gap-4 border-b border-white/15 py-5">
                <Check size={18} className="text-prochem-red mt-1 shrink-0" />
                <span className="text-white/85">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 12. COMPLIANCE & DOCUMENTATION */}
      <section className="bg-white" data-testid="section-compliance">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-28">
          <SectionHeader index={12} kicker="Compliance & Documentation" title="Regulatory-ready." />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
            {p.compliance.map((c) => (
              <li key={c} className="flex items-start gap-4 border-b border-black/10 py-5">
                <Check size={18} className="text-prochem-red mt-1 shrink-0" />
                <span className="text-ink/80 text-lg">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 13. GALLERY */}
      <section className="bg-background" data-testid="section-gallery">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-28">
          <SectionHeader index={13} kicker="Product Gallery" title="From every angle." />
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="md:col-span-4 aspect-[16/10] overflow-hidden border border-black/10 clip-frame group">
              <img src={img(p.hero)} alt="" className="h-full w-full object-cover grayscale-[25%] group-hover:grayscale-0" />
            </div>
            {p.gallery.slice(0, 2).map((g, i) => (
              <div
                key={`g-${i}`}
                className="md:col-span-2 aspect-[4/3] md:aspect-auto overflow-hidden border border-black/10 clip-frame group"
              >
                <img src={img(g)} alt="" className="h-full w-full object-cover grayscale-[25%] group-hover:grayscale-0" />
              </div>
            ))}
            {p.gallery.slice(2, 5).map((g, i) => (
              <div
                key={`g2-${i}`}
                className="md:col-span-2 aspect-[4/3] overflow-hidden border border-black/10 clip-frame group"
              >
                <img src={img(g)} alt="" className="h-full w-full object-cover grayscale-[25%] group-hover:grayscale-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. DOWNLOADS */}
      <section id="downloads" className="bg-white border-y border-black/10" data-testid="section-downloads">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-28">
          <SectionHeader
            index={14}
            kicker="Downloads"
            title="Datasheets & documents."
            note="Send us a note and we'll email the latest revision within one business day."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {p.downloads.map((d, i) => (
              <a
                key={d.label}
                data-testid={`download-${i}`}
                href={
                  d.href ||
                  `mailto:${CONTACT.email}?subject=${encodeURIComponent(
                    `${d.label} · ${p.name}`,
                  )}`
                }
                {...(d.href ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center justify-between gap-4 border border-black/15 px-6 py-5 hover:border-ink transition-colors"
              >
                <div>
                  <p className="font-display uppercase tracking-tight text-lg text-ink">
                    {d.label}
                  </p>
                  <p className="font-mono uppercase text-[0.65rem] tracking-[0.2em] text-ink/50 mt-1">
                    {d.type} · {d.size}
                  </p>
                </div>
                <Download
                  size={20}
                  className="text-ink/40 group-hover:text-prochem-red transition-colors"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 15. RELATED PRODUCTS */}
      {p.related.length > 0 && (
        <section className="bg-background" data-testid="section-related">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-28">
            <SectionHeader
              index={15}
              kicker={`More in ${p.categoryName}`}
              title="Related machines."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {p.related.map((r, i) => {
                const rp = PRODUCT_DETAILS[r.slug];
                if (!rp) return null;
                return (
                  <Link
                    key={r.slug}
                    to={`/product/${r.slug}`}
                    data-testid={`related-${r.slug}`}
                    className="group bg-white border border-black/10 overflow-hidden"
                  >
                    <div className="aspect-[4/3] overflow-hidden clip-frame">
                      <img
                        src={img(rp.hero)}
                        alt=""
                        className="h-full w-full object-cover grayscale-[35%] group-hover:grayscale-0"
                      />
                    </div>
                    <div className="p-5 flex items-center justify-between gap-3">
                      <div>
                        <p className="font-mono uppercase text-[0.65rem] tracking-[0.2em] text-ink/50">
                          {rp.tag}
                        </p>
                        <h3 className="mt-1 font-display uppercase tracking-tight text-xl text-ink group-hover:text-prochem-red transition-colors">
                          {rp.name}
                        </h3>
                      </div>
                      <ArrowUpRight size={18} className="text-ink/40 group-hover:text-prochem-red" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 16. FAQ */}
      <section className="bg-white border-y border-black/10" data-testid="section-faq">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-28">
          <SectionHeader index={16} kicker="FAQ" title="Frequently asked." />
          <Accordion type="single" collapsible className="border-t border-black/10">
            {p.faq.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`faq-${i}`}
                className="border-b border-black/10"
              >
                <AccordionTrigger
                  data-testid={`faq-${i}`}
                  className="text-left font-display uppercase tracking-tight text-lg md:text-xl text-ink hover:no-underline py-6"
                >
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-ink/70 text-base md:text-lg leading-relaxed pb-6 max-w-3xl">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 17. RFQ / ENQUIRY */}
      <EnquiryForm
        testid="product-rfq"
        index={17}
        kicker="Request For Quotation"
        title={<>Get a quote for<br /><span className="text-prochem-red">{p.name}.</span></>}
        description="Share your batch size, application and compliance requirement. We usually respond with an indicative quotation and delivery window within two business days."
        subject={`RFQ · ${p.name}`}
        submitLabel="Send RFQ"
        fields={[
          { name: "product", label: "Product", defaultValue: p.name, placeholder: p.name },
          { name: "category", label: "Category", defaultValue: p.categoryName, placeholder: p.categoryName },
          { name: "name", label: "Full Name", placeholder: "Your name", required: true },
          { name: "company", label: "Company", placeholder: "Company name", required: true },
          { name: "email", label: "Email", placeholder: "you@company.com", type: "email", required: true },
          { name: "phone", label: "Phone", placeholder: "+91 ..." },
          { name: "batch-size", label: "Batch Size", placeholder: "e.g. 400 L / 250 kg", required: true },
          { name: "application", label: "Application", type: "select", options: ["Pharmaceutical", "Nutraceutical", "Food", "Chemical", "Cosmetics", "Other"] },
          { name: "compliance", label: "Compliance Requirement", type: "select", options: ["cGMP", "cGMP + 21 CFR Part 11", "OEB-3 Contained", "OEB-4 Contained", "ATEX / IECEx", "Industrial (non-regulated)"] },
          { name: "target-country", label: "Target Country", placeholder: "e.g. India / UAE / Vietnam" },
          { name: "message", label: "Notes", placeholder: "Utilities available, timelines, integration constraints.", type: "textarea", colspan: 2 },
        ]}
      />

      {/* Direct-contact banner */}
      <section className="bg-white border-t border-black/10" data-testid="section-rfq">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="font-display uppercase tracking-tight text-2xl md:text-3xl text-ink">
            Prefer to talk?
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={enquiryHref}
              data-testid="rfq-email"
              className="group inline-flex items-center gap-3 bg-prochem-red text-white pl-6 pr-5 py-3.5 font-mono uppercase text-xs tracking-[0.15em] hover:bg-ink transition-colors"
            >
              Email RFQ
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`}
              data-testid="rfq-call"
              className="inline-flex items-center gap-3 border border-ink text-ink px-6 py-3.5 font-mono uppercase text-xs tracking-[0.15em] hover:bg-ink hover:text-white transition-colors"
            >
              Call {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
