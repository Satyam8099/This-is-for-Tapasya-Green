import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CAPABILITIES, IMAGES } from "@/lib/site-data";

export default function Capabilities() {
  const [active, setActive] = useState(0);

  return (
    <section id="capabilities" data-testid="capabilities-section" className="bg-white border-y border-black/10">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-28 md:py-40">
        <div className="mb-16 flex items-end justify-between flex-wrap gap-4">
          <h2 className="font-display font-bold uppercase tracking-tighter leading-none text-5xl md:text-7xl text-ink">
            Process<br />Capabilities
          </h2>
          <span className="font-mono uppercase text-xs tracking-[0.3em] text-ink/50 max-w-xs">
            Seven core competencies, one integrated line — engineered end to end.
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* interactive list */}
          <ul className="lg:col-span-7 divide-y divide-black/10 border-t border-black/10">
            {CAPABILITIES.map((c, i) => (
              <li key={c.name}>
                <button
                  data-testid={`capability-${i}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group w-full text-left py-6 md:py-8 flex items-start gap-6"
                >
                  <span
                    className={`font-mono text-sm pt-2 tracking-widest transition-colors ${
                      active === i ? "text-prochem-red" : "text-ink/40"
                    }`}
                  >
                    {c.n}
                  </span>
                  <div className="flex-1">
                    <span
                      className={`block font-display font-bold uppercase tracking-tight leading-none text-3xl md:text-5xl transition-colors ${
                        active === i ? "text-prochem-red" : "text-ink"
                      }`}
                    >
                      {c.name}
                    </span>
                    <AnimatePresence initial={false}>
                      {active === i && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="overflow-hidden text-ink/60 text-base md:text-lg mt-3 max-w-lg"
                        >
                          {c.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </li>
            ))}
          </ul>

          {/* sticky image reveal */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 aspect-[4/5] w-full overflow-hidden bg-background border border-black/10">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={IMAGES[CAPABILITIES[active].img]}
                  alt={CAPABILITIES[active].name}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
