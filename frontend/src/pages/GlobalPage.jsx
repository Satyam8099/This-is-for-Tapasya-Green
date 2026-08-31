import { motion } from "framer-motion";
import { Check, MapPin } from "lucide-react";
import PageShell from "@/components/site/PageShell";
import { PageHero, Section, reveal } from "@/components/site/PageParts";
import { IMAGES } from "@/lib/site-data";

const REGIONS = [
  { region: "South Asia", countries: ["India (HQ)", "Bangladesh", "Sri Lanka", "Nepal"] },
  { region: "Middle East", countries: ["UAE", "Saudi Arabia", "Oman", "Jordan"] },
  { region: "Africa", countries: ["Kenya", "Nigeria", "Egypt", "South Africa", "Morocco"] },
  { region: "South East Asia", countries: ["Vietnam", "Indonesia", "Malaysia", "Philippines", "Thailand"] },
  { region: "Europe", countries: ["Germany", "Turkey", "Poland", "Spain"] },
  { region: "Americas", countries: ["Brazil", "Mexico", "Colombia"] },
];

const PROJECTS = [
  { client: "Top-5 Indian Pharma", scope: "Complete solid-dosage line — dispensary to compression, 400 L Saizoner + FBD + coating." },
  { client: "African Nutraceutical Group", scope: "150 L RMG, 120 kg FBD, bin blender and material transfer — 12-week delivery." },
  { client: "European Contract Manufacturer", scope: "OEB-4 contained line with conta blender and split-butterfly valves." },
  { client: "South-East Asia MNC", scope: "Pellet coating suite with Wurster insert and integrated automation." },
];

const STANDARDS = ["cGMP", "WHO-GMP", "ISO 9001:2015", "CE (execution variants)", "ATEX / IECEx", "21 CFR Part 11", "USFDA-friendly documentation"];

export default function GlobalPage() {
  return (
    <PageShell testid="global-page">
      <PageHero
        kicker="Global"
        title={<>Engineered in India.<br />Trusted worldwide.</>}
        intro="Prochem Tapasya machines run across pharma, nutraceutical, food and chemical sites in 30+ countries — backed by responsive service and validated documentation."
        testid="global-hero"
      />

      <Section index={1} kicker="Global Presence" title="One HQ, four continents." testid="section-global-presence"
        note="Manufacturing in India with distribution, service and project partners across the world.">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { k: "30+", l: "Countries served" },
            { k: "500+", l: "Machines exported" },
            { k: "24/7", l: "Global service coverage" },
            { k: "60+", l: "Years of engineering" },
          ].map((s, i) => (
            <motion.div key={s.l} custom={i} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="border-t border-black/15 pt-4">
              <p className="font-display font-bold uppercase text-4xl md:text-5xl text-ink leading-none">{s.k}</p>
              <p className="mt-3 font-mono uppercase text-[0.65rem] tracking-[0.25em] text-ink/50">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section alt index={2} kicker="Countries Served" title="Where our machines run." testid="section-countries-served">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REGIONS.map((r, i) => (
            <motion.div key={r.region} custom={i} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="bg-white border border-black/10 p-6">
              <p className="font-mono uppercase text-[0.65rem] tracking-[0.25em] text-prochem-red">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 font-display uppercase tracking-tight text-2xl text-ink">{r.region}</h3>
              <ul className="mt-4 space-y-2">
                {r.countries.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-ink/70">
                    <MapPin size={14} className="text-tapasya-blue" />
                    {c}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section index={3} kicker="Industries Served" title="Five verticals, one machine line." testid="section-industries-served">
        <div className="flex flex-wrap gap-3">
          {["Pharmaceutical", "Nutraceutical", "Food", "Chemical", "Cosmetics"].map((i) => (
            <span key={i} className="font-mono uppercase text-xs tracking-[0.2em] border border-black/15 px-4 py-2.5 text-ink/80">{i}</span>
          ))}
        </div>
      </Section>

      <Section alt index={4} kicker="Export & Logistics" title="Ready for freight, on any lane." testid="section-export-logistics">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {[
            "Export-grade wooden and steel crating (ISPM-15)",
            "Sea and air freight coordination via preferred forwarders",
            "Rust-preventive packing and desiccant sachets",
            "Photo-documented handover before dispatch",
            "Incoterms flexibility — EXW, FOB, CIF, DAP, DDP",
            "Insurance-ready documentation and packing lists",
          ].map((li) => (
            <div key={li} className="flex items-start gap-3 border-b border-black/10 py-4">
              <Check size={18} className="text-prochem-red mt-1 shrink-0" />
              <span className="text-ink/80 text-lg">{li}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section index={5} kicker="International Projects" title="Selected references." testid="section-international-projects">
        <div className="border-t border-black/15">
          {PROJECTS.map((p, i) => (
            <motion.div key={p.client} custom={i} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 py-6 border-b border-black/10">
              <p className="md:col-span-2 font-mono text-xs tracking-widest text-prochem-red pt-1">CASE {String(i + 1).padStart(2, "0")}</p>
              <h3 className="md:col-span-4 font-display uppercase tracking-tight text-xl text-ink">{p.client}</h3>
              <p className="md:col-span-6 text-ink/70">{p.scope}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section dark index={6} kicker="Global Service & Support" title="Support that follows the machine." testid="section-global-service">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <img src={IMAGES.plant_1} alt="" className="w-full aspect-[4/3] object-cover border border-white/15 opacity-90" />
          </div>
          <ul className="space-y-4">
            {[
              "Regional service partners in key export markets",
              "Remote diagnostics via VPN for control-system faults",
              "Spare-part kits shipped by air on breakdown SLAs",
              "Field engineer travel for major upgrades",
              "Multi-language documentation on request",
            ].map((li) => (
              <li key={li} className="flex items-start gap-3 border-b border-white/15 pb-4">
                <Check size={18} className="text-prochem-red mt-1 shrink-0" />
                <span className="text-white/85 text-lg">{li}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section index={7} kicker="Certifications / Standards" title="Regulatory ready." testid="section-standards">
        <div className="flex flex-wrap gap-3">
          {STANDARDS.map((s) => (
            <span key={s} className="font-mono uppercase text-xs tracking-[0.2em] border border-black/15 bg-white px-4 py-2.5 text-ink/80">{s}</span>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
