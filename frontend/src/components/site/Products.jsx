import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PRODUCTS, IMAGES } from "@/lib/site-data";

export default function Products() {
  const navigate = useNavigate();
  return (
    <section id="products" data-testid="products-section" className="bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-28 md:py-40">
        <div className="mb-16 flex items-end justify-between flex-wrap gap-6">
          <div>
            <span className="font-mono uppercase text-xs tracking-[0.3em] text-prochem-red">
              (Products)
            </span>
            <h2 className="mt-4 font-display font-bold uppercase tracking-tighter leading-none text-5xl md:text-7xl text-ink">
              The Machine Line
            </h2>
          </div>
          <p className="max-w-sm text-ink/60 text-base md:text-lg">
            Twelve validated systems covering the complete solid dosage workflow — built for
            lab scale to commercial output.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {PRODUCTS.map((p, i) => (
            <motion.article
              key={p.name}
              data-testid={`product-card-${i}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onClick={p.to ? () => navigate(p.to) : undefined}
              className={`group relative ${p.span} bg-white border border-black/10 overflow-hidden ${p.to ? "cursor-pointer" : ""}`}
            >
              <div className={`clip-frame ${p.feature ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
                <img
                  src={IMAGES[p.img]}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[35%] group-hover:grayscale-0"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-90" />
              <div className="absolute top-4 left-4">
                <span className="font-mono text-xs tracking-[0.2em] bg-white text-ink px-2 py-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-5 md:p-6 flex items-end justify-between gap-3">
                <div>
                  <p className="font-mono uppercase text-[0.7rem] tracking-[0.2em] text-white/70">
                    {p.tag}
                  </p>
                  <h3
                    className={`mt-1 font-display font-bold uppercase tracking-tight text-white leading-none ${
                      p.feature ? "text-3xl md:text-5xl" : "text-xl md:text-2xl"
                    }`}
                  >
                    {p.name}
                  </h3>
                </div>
                <span className={`shrink-0 grid place-items-center h-10 w-10 bg-prochem-red text-white transition-all duration-300 ${p.to ? "opacity-100 translate-y-0" : "translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"}`}>
                  <ArrowUpRight size={18} />
                </span>
              </div>
              {p.to && (
                <div className="absolute top-4 right-4">
                  <span data-testid="product-view-details" className="font-mono uppercase text-[0.65rem] tracking-[0.2em] bg-prochem-red text-white px-2.5 py-1">
                    View Details
                  </span>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
