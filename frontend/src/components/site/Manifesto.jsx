import { motion } from "framer-motion";
import { CHAPTERS } from "@/lib/site-data";

export default function Manifesto() {
  return (
    <section id="about" data-testid="about-section" className="relative bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-28 md:py-40">
        <div className="flex items-center gap-4 mb-20">
          <span className="font-mono uppercase text-xs tracking-[0.3em] text-prochem-red">
            (About)
          </span>
          <span className="h-px flex-1 bg-black/10" />
          <span className="font-mono uppercase text-xs tracking-[0.3em] text-ink/50">
            Single-Stop Solution Provider
          </span>
        </div>

        <div className="space-y-24 md:space-y-32">
          {CHAPTERS.map((c, i) => (
            <motion.div
              key={c.n}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
            >
              <div
                aria-hidden
                className="pointer-events-none select-none absolute -top-16 -left-4 md:-left-2 font-display font-bold text-[9rem] md:text-[16rem] leading-none text-black/[0.035]"
              >
                {c.n}
              </div>
              <div className="md:col-span-4 relative z-10">
                <span className="font-mono uppercase text-sm tracking-[0.2em] text-tapasya-blue">
                  {c.n} /
                </span>
                <h3 className="mt-3 font-display font-bold uppercase tracking-tight leading-none text-4xl md:text-6xl text-ink">
                  {c.title}
                </h3>
              </div>
              <p className="md:col-span-7 md:col-start-6 relative z-10 text-lg md:text-2xl leading-relaxed text-ink/75">
                {c.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
