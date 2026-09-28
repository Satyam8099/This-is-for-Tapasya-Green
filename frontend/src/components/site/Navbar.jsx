import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS, CATEGORIES } from "@/lib/site-data";
import { useNavigate } from "react-router-dom";

const Logo = () => (
  <Link
    to="/"
    data-testid="nav-logo"
    className="flex items-center leading-none"
  >
    <img
      src="/logo.png"
      alt="Prochem Tapasya"
      className="h-11 md:h-12 w-auto"
    />
  </Link>
);

function MegaMenu({ open, onClose }) {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const go = (slug) => {
    onClose();
    navigate(`/product/${slug}`);
  };

  const category = CATEGORIES[active];

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-20 bg-ink/30 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            data-testid="mega-menu"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-20 inset-x-0 z-50 bg-white border-b border-black/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]"
          >
            <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-10 grid grid-cols-1 md:grid-cols-12 gap-10">
              <div className="md:col-span-5 border-r border-black/10 pr-6">
                <p className="font-mono uppercase text-[0.65rem] tracking-[0.25em] text-ink/40 mb-6">
                  (Product Categories · {CATEGORIES.length.toString().padStart(2, "0")})
                </p>
                <ul>
                  {CATEGORIES.map((c, i) => (
                    <li key={c.slug}>
                      <button
                        data-testid={`mega-category-${c.slug}`}
                        onMouseEnter={() => setActive(i)}
                        onFocus={() => setActive(i)}
                        className={`group w-full text-left py-3 border-b border-black/5 flex items-center gap-5 ${
                          active === i ? "text-prochem-red" : "text-ink"
                        }`}
                      >
                        <span className="font-mono text-xs tracking-widest text-ink/40 w-8">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display font-bold uppercase tracking-tight text-lg md:text-xl flex-1">
                          {c.name}
                        </span>
                        <span
                          className={`h-1.5 w-1.5 rounded-full transition-colors ${
                            active === i ? "bg-prochem-red" : "bg-transparent"
                          }`}
                        />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-7">
                <div className="flex items-baseline justify-between mb-6">
                  <p className="font-mono uppercase text-[0.65rem] tracking-[0.25em] text-ink/40">
                    ({category.tagline})
                  </p>
                  <span className="font-mono text-[0.65rem] tracking-widest text-ink/40">
                    {category.products.length.toString().padStart(2, "0")} systems
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
                  {category.products.map((p) => (
                    <button
                      key={p.slug}
                      data-testid={`mega-product-${p.slug}`}
                      onClick={() => go(p.slug)}
                      className="group flex items-center justify-between gap-4 py-4 border-b border-black/10 text-left hover:text-prochem-red transition-colors"
                    >
                      <span className="font-display uppercase tracking-tight text-lg text-ink group-hover:text-prochem-red">
                        {p.name}
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="text-ink/40 group-hover:text-prochem-red transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </button>
                  ))}
                </div>
                <div className="mt-8 flex items-center justify-between pt-4 border-t border-black/10">
                  <span className="font-mono uppercase text-[0.65rem] tracking-[0.25em] text-ink/40">
                    Made in India · Trusted since 1962
                  </span>
                  <Link
                    to="/contact"
                    onClick={onClose}
                    className="group inline-flex items-center gap-2 font-mono uppercase text-xs tracking-[0.2em] text-ink hover:text-prochem-red transition-colors"
                  >
                    Request a Quote
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function MobileMenu({ open, onClose }) {
  const [openCat, setOpenCat] = useState(null);
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          data-testid="mobile-menu"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-40 bg-white md:hidden overflow-y-auto pt-24 pb-16 px-6"
        >
          <div className="space-y-4">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                data-testid={`mobile-nav-${l.to.slice(1) || "home"}`}
                onClick={onClose}
                className="block text-left w-full font-display uppercase text-3xl tracking-tight text-ink border-b border-black/10 pb-4"
              >
                {l.label}
              </Link>
            ))}

            <div className="pt-6">
              <p className="font-mono uppercase text-[0.65rem] tracking-[0.25em] text-ink/40 mb-4">
                (Products)
              </p>
              {CATEGORIES.map((c) => (
                <div key={c.slug} className="border-b border-black/10">
                  <button
                    onClick={() => setOpenCat(openCat === c.slug ? null : c.slug)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-display uppercase text-lg tracking-tight text-ink">
                      {c.name}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${openCat === c.slug ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openCat === c.slug && (
                    <div className="pb-4 space-y-2">
                      {c.products.map((p) => (
                        <button
                          key={p.slug}
                          onClick={() => {
                            onClose();
                            navigate(`/product/${p.slug}`);
                          }}
                          className="block text-left w-full font-mono uppercase text-xs tracking-[0.15em] text-ink/70 hover:text-prochem-red py-2 pl-4"
                        >
                          {p.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenMenu(false);
    setOpenMobile(false);
  }, [location.pathname]);

  const isActive = (to) => location.pathname === to;

  return (
    <>
      <motion.header
        data-testid="site-navbar"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled || openMenu || location.pathname !== "/"
            ? "bg-white/80 backdrop-blur-xl border-b border-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 h-20 flex items-center justify-between">
          <Logo />

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.slice(0, 2).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                data-testid={`nav-${l.to.slice(1)}`}
                className={`px-3 py-2 font-mono uppercase text-xs tracking-[0.2em] transition-colors ${
                  isActive(l.to) ? "text-prochem-red" : "text-ink/70 hover:text-prochem-red"
                }`}
              >
                {l.label}
              </Link>
            ))}

            <button
              data-testid="nav-products"
              onClick={() => setOpenMenu((v) => !v)}
              onMouseEnter={() => setOpenMenu(true)}
              className={`px-3 py-2 font-mono uppercase text-xs tracking-[0.2em] transition-colors inline-flex items-center gap-1 ${
                openMenu ? "text-prochem-red" : "text-ink/70 hover:text-prochem-red"
              }`}
            >
              Products
              <ChevronDown
                size={13}
                className={`transition-transform ${openMenu ? "rotate-180" : ""}`}
              />
            </button>

            {NAV_LINKS.slice(2).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                data-testid={`nav-${l.to.slice(1)}`}
                className={`px-3 py-2 font-mono uppercase text-xs tracking-[0.2em] transition-colors ${
                  isActive(l.to) ? "text-prochem-red" : "text-ink/70 hover:text-prochem-red"
                }`}
              >
                {l.label}
              </Link>
            ))}

            <Link
              to="/contact"
              data-testid="nav-cta"
              className="group ml-3 inline-flex items-center gap-2 bg-ink text-white px-5 py-2.5 font-mono uppercase text-xs tracking-[0.15em] hover:bg-prochem-red transition-colors"
            >
              Enquire
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </nav>

          <button
            data-testid="nav-mobile-toggle"
            onClick={() => setOpenMobile((v) => !v)}
            className="md:hidden text-ink"
            aria-label="Toggle menu"
          >
            {openMobile ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        <div
          onMouseLeave={() => setOpenMenu(false)}
          className={openMenu ? "block" : "hidden"}
        >
          <MegaMenu open={openMenu} onClose={() => setOpenMenu(false)} />
        </div>
      </motion.header>

      <MobileMenu open={openMobile} onClose={() => setOpenMobile(false)} />
    </>
  );
}
