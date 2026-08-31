import { motion } from "framer-motion";
import { Check } from "lucide-react";
import PageShell from "@/components/site/PageShell";
import { PageHero, Section, reveal } from "@/components/site/PageParts";
import { IMAGES } from "@/lib/site-data";

const BLOCKS = [
  {
    kicker: "Engineering & Design",
    title: "Design for scale.",
    body: "3D CAD design, P&IDs, thermal and mechanical calculations for every machine. Recipe-driven scale-up from lab to commercial batches.",
    items: ["3D CAD with SolidWorks / AutoCAD", "P&ID and functional design specs", "Scale-up analysis with rheology data", "FEA on stressed components"],
    img: "machinery_1",
  },
  {
    kicker: "Manufacturing",
    title: "In-house fabrication.",
    body: "Dedicated bays for SS 316 / 316L fabrication, welding, polishing and clean assembly.",
    items: ["TIG welding with pickling & passivation", "CNC machining and electropolishing", "Ra ≤ 0.4 µm contact-surface finishing", "Clean assembly area with utilities"],
    img: "plant_1",
  },
  {
    kicker: "Process Development",
    title: "Pilot before you produce.",
    body: "Customer trials at our pilot facility. Batch data, PSD reports and process parameters delivered before design freeze.",
    items: ["Trial batches from 1 kg to 30 kg", "PSD reports & particle imaging", "Rheology & flow characterisation", "Documented process parameter sheet"],
    img: "laboratory_1",
  },
  {
    kicker: "Custom Engineering",
    title: "Bespoke, when needed.",
    body: "Special executions built to URS — containment, ATEX, non-standard capacities, product-specific tooling.",
    items: ["OEB-4 / OEB-5 containment executions", "ATEX / IECEx variants", "Non-standard geometries and capacities", "Product-contact tooling design"],
    img: "machinery_2",
  },
  {
    kicker: "Automation & Controls",
    title: "PLC, HMI and up.",
    body: "Siemens or Allen-Bradley PLCs, colour HMIs, batch reports and MES integration ready for 21 CFR Part 11 environments.",
    items: ["Siemens / Allen-Bradley PLC platforms", "Colour HMI with recipe control", "Audit trail, user roles and e-signature", "OPC-UA / Modbus TCP interfaces"],
    img: "laboratory_2",
  },
  {
    kicker: "Testing & Validation",
    title: "FAT to PQ.",
    body: "Machine testing at our works followed by on-site SAT and full IQ / OQ / PQ. Every batch traceable via documented protocols.",
    items: ["Factory Acceptance Testing (FAT)", "Site Acceptance Testing (SAT)", "DQ / IQ / OQ / PQ documentation", "Regulator-ready evidence trail"],
    img: "machinery_3",
  },
  {
    kicker: "Installation & Commissioning",
    title: "On-site, on-time.",
    body: "Trained field engineers erect, level and commission machines on your line. Operator training included.",
    items: ["Erection & alignment", "Utility hook-up assistance", "Commissioning with test batches", "Operator & maintenance training"],
    img: "plant_1",
  },
  {
    kicker: "After-Sales Support",
    title: "Backing you up.",
    body: "Genuine spare parts, AMC contracts, breakdown response and remote diagnostics.",
    items: ["OEM spare parts", "Preventive maintenance plans", "Breakdown response SLAs", "Remote diagnostics on request"],
    img: "machinery_1",
  },
  {
    kicker: "Turnkey Solutions",
    title: "End-to-end lines.",
    body: "Complete solid-formulation lines — dispensary, granulation, drying, milling, blending, compression interfaces and packaging tie-in.",
    items: ["Dispensary → compression scope", "Common PLC / SCADA layer", "Utilities & HVAC coordination", "Single project responsibility"],
    img: "laboratory_1",
  },
];

export default function CapabilitiesPage() {
  return (
    <PageShell testid="capabilities-page">
      <PageHero
        kicker="Capabilities"
        title={<>Design, build,<br />install, support.</>}
        intro="Nine capabilities delivered under one roof — from initial URS through decades of on-site support. Every project is scoped end-to-end so you deal with a single engineering team."
        testid="capabilities-hero"
      />

      {BLOCKS.map((b, i) => (
        <Section
          key={b.kicker}
          index={i + 1}
          kicker={b.kicker}
          title={b.title}
          note={b.body}
          alt={i % 2 === 1}
          testid={`section-cap-${b.kicker.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 border-t border-black/10">
                {b.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 border-b border-black/10 py-4">
                    <Check size={18} className="text-prochem-red mt-1 shrink-0" />
                    <span className="text-ink/80 text-base md:text-lg">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-5 aspect-[4/3] overflow-hidden border border-black/10"
            >
              <img src={IMAGES[b.img]} alt="" className="h-full w-full object-cover grayscale-[25%]" />
            </motion.div>
          </div>
        </Section>
      ))}
    </PageShell>
  );
}
