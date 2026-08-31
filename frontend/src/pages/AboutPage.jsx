import { motion } from "framer-motion";
import { Check } from "lucide-react";
import PageShell from "@/components/site/PageShell";
import { PageHero, Section, reveal } from "@/components/site/PageParts";
import { IMAGES } from "@/lib/site-data";

const TIMELINE = [
  { year: "1962", title: "Founded", body: "Prochem Tapasya begins engineering process equipment for Indian pharma manufacturers." },
  { year: "1980s", title: "Saizoner Launch", body: "The Saizoner high-shear mixer granulator establishes Tapasya as the market leader." },
  { year: "2000s", title: "cGMP Scale-up", body: "Complete cGMP execution across granulation, drying, blending and coating." },
  { year: "2010s", title: "Global Export", body: "Installed base grows to 30+ countries with export-quality documentation." },
  { year: "Today", title: "Integrated Lines", body: "Delivering turnkey solid-formulation lines with automation and validation." },
];

const CERTS = ["cGMP", "ISO 9001:2015", "WHO-GMP compliant", "CE marked variants", "ATEX compatible", "21 CFR Part 11 ready"];
const APPROACH = [
  { n: "01", title: "Consult", body: "URS review, scale-up analysis and compliance mapping." },
  { n: "02", title: "Design", body: "3D CAD, P&IDs, process simulations and thermal calculations." },
  { n: "03", title: "Build", body: "In-house SS 316 fabrication, welding and finishing." },
  { n: "04", title: "Install", body: "On-site erection, commissioning and FAT / SAT / IQ / OQ / PQ." },
  { n: "05", title: "Support", body: "Spare parts, preventive maintenance and remote diagnostics." },
];

const LEADERSHIP = [
  { role: "Managing Director", name: "R. Patel", note: "40+ years of pharma engineering" },
  { role: "Head of Engineering", name: "S. Kulkarni", note: "Process design & scale-up" },
  { role: "Head of Manufacturing", name: "A. Mehta", note: "SS fabrication & finishing" },
  { role: "Head of Quality", name: "P. Shah", note: "cGMP & validation" },
  { role: "Global Business", name: "V. Iyer", note: "Export projects & service" },
];

export default function AboutPage() {
  return (
    <PageShell testid="about-page">
      <PageHero
        kicker="About"
        title={<>Six decades of<br />granulation engineering.</>}
        intro="Prochem Tapasya is an innovative granulation company offering integrated process and validated solutions to pharmaceutical, nutraceutical, food, chemical and cosmetics manufacturers worldwide — from lab scale to many tonnes a day."
        testid="about-hero"
      />

      <Section index={1} kicker="Who We Are" title="A single-stop solution provider." testid="section-who-we-are"
        note="Renowned for our contribution to the solid-formulation industry, our machines are used by leading names across India and 30+ export markets.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { k: "60+", l: "Years of engineering" },
            { k: "30+", l: "Countries served" },
            { k: "#1", l: "Saizoner market leader" },
          ].map((s, i) => (
            <motion.div key={s.l} custom={i} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="border-t border-black/15 pt-4">
              <p className="font-display font-bold uppercase text-5xl md:text-6xl text-ink leading-none">{s.k}</p>
              <p className="mt-3 font-mono uppercase text-[0.65rem] tracking-[0.25em] text-ink/50">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section alt index={2} kicker="Our Story" title="From 1962 to now." testid="section-our-story">
        <div className="border-t border-black/15">
          {TIMELINE.map((t, i) => (
            <motion.div key={t.year} custom={i} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b border-black/10">
              <p className="md:col-span-2 font-mono text-lg md:text-xl tracking-widest text-prochem-red">{t.year}</p>
              <h3 className="md:col-span-3 font-display uppercase tracking-tight text-2xl text-ink">{t.title}</h3>
              <p className="md:col-span-7 text-ink/70 text-lg">{t.body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section index={3} kicker="What We Do" title="Solid formulation, end to end." testid="section-what-we-do"
        note="From dispensary to compression, we deliver individual machines and complete integrated lines.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {[
            "Granulation — wet & dry, high-shear & rapid",
            "Drying — fluid bed, tray, vacuum",
            "Milling & sizing — multi, cone, oscillating",
            "Blending — bin, conta, ribbon, tumble",
            "Coating — perforated pan, pellet coating",
            "Pelletising — extrusion & spheronisation",
            "Micronising — air-jet & fluid-energy",
            "Bins & material handling — IBCs, tippers, lifters",
          ].map((li, i) => (
            <div key={li} className="flex items-start gap-3 py-4 border-b border-black/10">
              <span className="font-mono text-xs text-prochem-red pt-1">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-ink/80 text-lg">{li}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section alt index={4} kicker="Our Expertise" title="Where our engineering runs deep." testid="section-expertise">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Process Design", body: "Recipe-driven scale-up from R&D through to multi-tonne output." },
            { title: "Sanitary Fabrication", body: "SS 316 / 316L construction with Ra ≤ 0.4 µm on contact parts." },
            { title: "Validation Support", body: "URS to PQ documentation aligned to regulator expectations." },
          ].map((c) => (
            <div key={c.title} className="bg-white border border-black/10 p-6">
              <h3 className="font-display uppercase tracking-tight text-2xl text-ink">{c.title}</h3>
              <p className="mt-3 text-ink/70">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section index={5} kicker="Manufacturing & Engineering" title="Built in India, to global standard." testid="section-manufacturing"
        note="In-house fabrication, machining, polishing, assembly and testing under one roof.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src={IMAGES.plant_1} alt="Manufacturing facility" className="w-full aspect-[4/3] object-cover border border-black/10" />
          <ul className="space-y-4">
            {[
              "Dedicated SS 316 / 316L fabrication bays",
              "TIG welding with pickling & passivation lines",
              "CNC machining and electropolishing",
              "In-house paint shop and clean assembly area",
              "Water & compressed-air quality aligned to product needs",
              "Instrument calibration and functional test bay",
            ].map((li) => (
              <li key={li} className="flex items-start gap-3 border-b border-black/10 pb-3">
                <Check size={18} className="text-prochem-red mt-1 shrink-0" />
                <span className="text-ink/80 text-lg">{li}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section dark index={6} kicker="Quality & Certifications" title="Regulatory-ready by default." testid="section-certifications">
        <div className="flex flex-wrap gap-3">
          {CERTS.map((c) => (
            <span key={c} className="font-mono uppercase text-xs tracking-[0.2em] border border-white/25 px-4 py-2.5 text-white/85">{c}</span>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-white/60 text-lg">
          Documentation packages include material traceability, weld maps, surface-finish reports and full DQ / IQ / OQ / PQ protocols aligned to client SOPs.
        </p>
      </Section>

      <Section index={7} kicker="Our Approach" title="How we work." testid="section-approach">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {APPROACH.map((s, i) => (
            <motion.div key={s.n} custom={i} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="bg-white border border-black/10 p-5">
              <span className="font-mono text-xs text-prochem-red">{s.n}</span>
              <h3 className="mt-3 font-display uppercase tracking-tight text-xl text-ink">{s.title}</h3>
              <p className="mt-2 text-ink/70 text-sm">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section alt index={8} kicker="Leadership / Team" title="The people behind the machines." testid="section-leadership">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {LEADERSHIP.map((p) => (
            <div key={p.role} className="bg-white border border-black/10 p-5">
              <p className="font-mono uppercase text-[0.65rem] tracking-[0.2em] text-ink/50">{p.role}</p>
              <p className="mt-3 font-display uppercase tracking-tight text-xl text-ink">{p.name}</p>
              <p className="mt-2 text-ink/60 text-sm">{p.note}</p>
            </div>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
