import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDownRight } from "lucide-react";
import { scrollToId } from "@/hooks/useLenis";

const LINES = ["INTEGRATED", "PROCESS", "SOLUTIONS"];

const lineWrap = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const lineVar = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yShapeA = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const yShapeB = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen grid-lines overflow-hidden">
      {/* Floating parallax geometry */}
      <motion.div
        style={{ y: yShapeA }}
        className="pointer-events-none absolute -right-16 top-32 h-72 w-72 md:h-[26rem] md:w-[26rem] rounded-full border border-tapasya-blue/30"
      />
      <motion.div
        style={{ y: yShapeB }}
        className="pointer-events-none absolute right-24 top-56 h-40 w-40 md:h-64 md:w-64 bg-prochem-red/10"
      />
      <motion.div
        style={{ y: yShapeA }}
        className="pointer-events-none absolute right-40 top-40 h-4 w-4 bg-prochem-red"
      />

      <div className="relative mx-auto max-w-[1600px] w-full px-6 md:px-12 pt-40 md:pt-52 pb-24 flex flex-col justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="h-px w-16 bg-ink/40" />
          <span className="font-mono uppercase text-xs tracking-[0.3em] text-ink/60">
            Est. 1962 — Granulation Engineering
          </span>
        </motion.div>

        <motion.h1
          style={{ y: yText }}
          variants={lineWrap}
          initial="hidden"
          animate="show"
          className="font-display font-bold uppercase leading-[0.85] tracking-tighter text-[3.4rem] sm:text-7xl md:text-8xl lg:text-[8.5rem] text-ink"
        >
          {LINES.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span variants={lineVar} className="block">
                {i === 2 ? (
                  <span>
                    SOLUTIONS<span className="text-prochem-red">.</span>
                  </span>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 flex flex-col md:flex-row md:items-end gap-8 md:justify-between"
        >
          <p className="max-w-md text-base md:text-lg text-ink/70 leading-relaxed">
            An innovative granulation company partnering pharmaceutical, nutraceutical and food
            entities worldwide — from lab scale to many tonnes a day.
          </p>
          <button
            data-testid="hero-cta"
            onClick={() => scrollToId("products")}
            className="group inline-flex items-center gap-3 bg-prochem-red text-white pl-8 pr-6 py-4 font-mono uppercase text-sm tracking-[0.15em] hover:bg-ink transition-colors self-start"
          >
            Explore Machines
            <ArrowDownRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
