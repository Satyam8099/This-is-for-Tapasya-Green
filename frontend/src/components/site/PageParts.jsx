import { motion } from "framer-motion";

export function PageHero({ kicker, title, intro, testid }) {
  return (
    <section className="grid-lines border-b border-black/10" data-testid={testid}>
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono uppercase text-[0.65rem] tracking-[0.3em] text-prochem-red"
        >
          ({kicker})
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 font-display font-bold uppercase tracking-tighter leading-[0.85] text-5xl md:text-8xl text-ink"
        >
          {title}
        </motion.h1>
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 max-w-2xl text-lg md:text-xl text-ink/70 leading-relaxed"
          >
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  );
}

export function Section({ index, kicker, title, note, dark = false, alt = false, children, testid }) {
  const bg = dark
    ? "bg-ink text-white"
    : alt
      ? "bg-background border-y border-black/10"
      : "bg-white";
  return (
    <section className={bg} data-testid={testid}>
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-16 md:py-24">
        <div className="mb-10 md:mb-14">
          <div className="flex items-center gap-4 mb-6">
            <span className={`font-mono uppercase text-[0.65rem] tracking-[0.3em] ${dark ? "text-white/40" : "text-prochem-red"}`}>
              ({String(index).padStart(2, "0")}) {kicker}
            </span>
            <span className={`h-px flex-1 ${dark ? "bg-white/15" : "bg-black/10"}`} />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className={`font-display font-bold uppercase tracking-tighter leading-[0.9] text-3xl md:text-5xl ${dark ? "text-white" : "text-ink"}`}>
              {title}
            </h2>
            {note && (
              <p className={`max-w-md text-base md:text-lg ${dark ? "text-white/60" : "text-ink/60"}`}>
                {note}
              </p>
            )}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

export const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] },
  }),
};
