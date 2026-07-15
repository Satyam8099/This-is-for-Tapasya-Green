import { motion } from "framer-motion";
import { IMAGES } from "@/lib/site-data";

const REGIONS = [
  { region: "India", note: "Headquarters & Manufacturing" },
  { region: "Middle East", note: "Distribution & Service" },
  { region: "South East Asia", note: "Installed Base" },
  { region: "Africa", note: "Project Partnerships" },
  { region: "Europe", note: "Technical Collaboration" },
];

export default function GlobalOps() {
  return (
    <section id="global" data-testid="global-section" className="relative bg-ink text-white overflow-hidden">
      <div className="absolute inset-0">
        <img src={IMAGES.plant_1} alt="" className="h-full w-full object-cover opacity-10" />
      </div>
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12 py-28 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="font-mono uppercase text-xs tracking-[0.3em] text-prochem-red">
              (Global Operations)
            </span>
            <h2 className="mt-6 font-display font-bold uppercase tracking-tighter leading-[0.9] text-5xl md:text-7xl">
              Engineered in India.<br />
              <span className="text-stroke-light">Trusted worldwide.</span>
            </h2>
            <p className="mt-8 max-w-md text-white/60 text-lg leading-relaxed">
              Our systems power solid formulation lines across continents, backed by responsive
              service and validated documentation wherever regulation demands it.
            </p>
          </div>

          <ul className="border-t border-white/15">
            {REGIONS.map((r, i) => (
              <motion.li
                key={r.region}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group flex items-center justify-between border-b border-white/15 py-6"
              >
                <span className="font-display font-bold uppercase tracking-tight text-3xl md:text-4xl group-hover:text-prochem-red transition-colors">
                  {r.region}
                </span>
                <span className="font-mono uppercase text-[0.7rem] tracking-[0.2em] text-white/50 text-right">
                  {r.note}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
