import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/lib/site-data";

function Counter({ value, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const dur = 1400;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {n}
      {suffix}
    </span>
  );
}

export default function StatsBand() {
  return (
    <section className="bg-ink text-white" data-testid="stats-band">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-28 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-white/20 pt-6"
          >
            <div className="font-display font-bold uppercase leading-none tracking-tight text-6xl md:text-7xl">
              <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
            </div>
            <p className="mt-4 font-mono uppercase text-xs tracking-[0.25em] text-white/50">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
