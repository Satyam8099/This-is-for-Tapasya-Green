import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/site-data";
import { scrollToId } from "@/hooks/useLenis";

const Logo = () => (
  <button
    data-testid="nav-logo"
    onClick={() => scrollToId("top")}
    className="font-display uppercase tracking-tight text-xl md:text-2xl leading-none"
  >
    <span className="text-prochem-red font-bold">PROCHEM</span>
    <span className="text-tapasya-blue font-bold"> TAPASYA</span>
  </button>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <motion.header
      data-testid="site-navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/70 backdrop-blur-xl border-b border-black/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 h-20 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-${l.id}`}
              onClick={() => go(l.id)}
              className="link-underline font-mono uppercase text-xs tracking-[0.2em] text-ink/70 hover:text-ink"
            >
              {l.label}
            </button>
          ))}
          <button
            data-testid="nav-cta"
            onClick={() => go("contact")}
            className="group inline-flex items-center gap-2 bg-ink text-white px-5 py-2.5 font-mono uppercase text-xs tracking-[0.15em] hover:bg-prochem-red transition-colors"
          >
            Enquire
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </nav>

        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-ink"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            data-testid="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden overflow-hidden bg-white border-b border-black/10"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.id}
                  data-testid={`mobile-nav-${l.id}`}
                  onClick={() => go(l.id)}
                  className="text-left font-display uppercase text-2xl tracking-tight text-ink"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
