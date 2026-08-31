import { motion } from "framer-motion";
import { Wrench, Cog, Zap, ShieldCheck, Truck, Timer, ArrowUpRight } from "lucide-react";
import PageShell from "@/components/site/PageShell";
import { PageHero, Section, reveal } from "@/components/site/PageParts";
import { CONTACT } from "@/lib/site-data";

const enquiryHref = (subject) =>
  `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}`;

const SPARE_TYPES = [
  { icon: Cog, title: "OEM Parts", body: "Genuine parts manufactured to the original drawing, material and finish spec." },
  { icon: Wrench, title: "Wear Parts", body: "Fast-moving items — screens, blades, gaskets, seals, filter bags." },
  { icon: ShieldCheck, title: "Replacement Parts", body: "Like-for-like replacements with traceability and inspection certificate." },
];

const SERVICE_TYPES = [
  { icon: Timer, title: "Preventive Maintenance", body: "AMC contracts with scheduled visits, part replacements and calibration." },
  { icon: Zap, title: "Breakdown Support", body: "24 × 7 breakdown hotline with remote diagnostics and field-engineer dispatch." },
  { icon: Truck, title: "Machine Upgrades", body: "Retrofits — HMI upgrade, PLC replacement, containment retrofits, 21 CFR compliance." },
];

export default function SparesPage() {
  return (
    <PageShell testid="spares-page">
      <PageHero
        kicker="Spares & Service"
        title={<>Keep every machine<br />running.</>}
        intro="Genuine OEM spares, preventive-maintenance contracts and rapid breakdown support for every Prochem Tapasya machine — regardless of installation year or geography."
        testid="spares-hero"
      />

      <Section index={1} kicker="Spare Parts" title="Available for every machine we've built." testid="section-spare-parts"
        note="Send us the machine tag or GA number and we'll return an availability & delivery quote within one business day.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SPARE_TYPES.map((s, i) => (
            <motion.div key={s.title} custom={i} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="bg-white border border-black/10 p-6">
              <s.icon size={24} className="text-prochem-red" />
              <h3 className="mt-5 font-display uppercase tracking-tight text-2xl text-ink">{s.title}</h3>
              <p className="mt-3 text-ink/70">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section alt index={2} kicker="OEM Parts" title="Genuine parts, unchanged specs." testid="section-oem"
        note="Every OEM part is manufactured against the original drawing with material traceability and inspection report.">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {[
            "Impellers, choppers and shafts — Saizoner / RMG / RG",
            "FBD product containers, bag filters and gaskets",
            "Blender container clamps, seals and drive components",
            "Coating pan drives, spray guns and nozzles",
            "PLC / HMI panels and I/O cards",
            "Instrumentation — load cells, RTDs, pressure transducers",
          ].map((li) => (
            <li key={li} className="flex items-start gap-3 border-b border-black/10 py-4">
              <span className="font-mono text-xs text-prochem-red pt-1">•</span>
              <span className="text-ink/80 text-lg">{li}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section index={3} kicker="Wear & Replacement Parts" title="Fast movers, always stocked." testid="section-wear">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {["Screens & sieves", "Beaters & blades", "Filter bags", "Gaskets & O-rings", "Bushings & seals", "Spray nozzles", "Load-cell cables", "Sight-glass sets"].map((i) => (
            <span key={i} className="border border-black/15 bg-white px-4 py-3 font-mono uppercase text-xs tracking-[0.15em] text-ink/70">
              {i}
            </span>
          ))}
        </div>
      </Section>

      <Section dark index={4} kicker="Service" title="Preventive & responsive." testid="section-service">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICE_TYPES.map((s, i) => (
            <motion.div key={s.title} custom={i} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="border border-white/15 p-6">
              <s.icon size={24} className="text-prochem-red" />
              <h3 className="mt-5 font-display uppercase tracking-tight text-2xl text-white">{s.title}</h3>
              <p className="mt-3 text-white/70">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section index={5} kicker="Machine Upgrades" title="Modernise, don't replace." testid="section-upgrades"
        note="Extend the life of your installed base with targeted upgrades.">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {[
            "Legacy relay-logic to modern PLC (Siemens / Allen-Bradley)",
            "Colour HMI upgrade with recipe control and audit trail",
            "21 CFR Part 11 compliance retrofit",
            "Containment retrofit — split-butterfly / RTP valves",
            "Load-cell & torque monitoring for endpoint detection",
            "Energy-efficiency retrofit on drives (VFD conversion)",
          ].map((li) => (
            <li key={li} className="flex items-start gap-3 border-b border-black/10 py-4">
              <span className="font-mono text-xs text-prochem-red pt-1">→</span>
              <span className="text-ink/80 text-lg">{li}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section alt index={6} kicker="Spare Parts Enquiry" title="Send us a quick note." testid="section-spares-enquiry"
        note="Include machine tag, GA number and required part / quantity. We usually respond with availability & delivery within one business day.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
          <a
            data-testid="spares-email-cta"
            href={enquiryHref("Spare Parts Enquiry")}
            className="group flex items-center justify-between gap-4 bg-ink text-white pl-6 pr-5 py-5 hover:bg-prochem-red transition-colors"
          >
            <span className="font-mono uppercase text-xs tracking-[0.2em]">Email spare parts team</span>
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            data-testid="service-email-cta"
            href={enquiryHref("Service / AMC Enquiry")}
            className="group flex items-center justify-between gap-4 border border-ink text-ink pl-6 pr-5 py-5 hover:bg-ink hover:text-white transition-colors"
          >
            <span className="font-mono uppercase text-xs tracking-[0.2em]">Email service team</span>
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Section>
    </PageShell>
  );
}
