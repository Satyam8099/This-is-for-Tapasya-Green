import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { CONTACT } from "@/lib/site-data";
import { scrollToId } from "@/hooks/useLenis";

export default function Footer() {
  return (
    <footer id="contact" data-testid="contact-section" className="bg-background border-t border-black/10">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 pt-24 md:pt-32 pb-12">
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border-b border-black/10 pb-16 md:pb-24"
        >
          <span className="font-mono uppercase text-xs tracking-[0.3em] text-prochem-red">
            (Start a Project)
          </span>
          <h2 className="mt-6 font-display font-bold uppercase tracking-tighter leading-[0.85] text-6xl md:text-8xl lg:text-9xl text-ink">
            Let's build<br />your line
            <span className="text-prochem-red">.</span>
          </h2>
          <a
            data-testid="contact-email-cta"
            href={`mailto:${CONTACT.email}`}
            className="group mt-10 inline-flex items-center gap-3 bg-ink text-white pl-8 pr-6 py-4 font-mono uppercase text-sm tracking-[0.15em] hover:bg-prochem-red transition-colors"
          >
            {CONTACT.email}
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>

        {/* details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-16">
          <div className="md:col-span-5">
            <div className="font-display uppercase tracking-tight text-2xl">
              <span className="text-prochem-red font-bold">PROCHEM</span>
              <span className="text-tapasya-blue font-bold"> TAPASYA</span>
            </div>
            <p className="mt-4 max-w-sm text-ink/60">
              An innovative granulation company offering integrated process & validated solutions
              since 1962.
            </p>
          </div>

          <div className="md:col-span-4 space-y-5">
            <div className="flex items-start gap-3 text-ink/70">
              <Phone size={18} className="text-tapasya-blue mt-0.5" />
              <a href={`tel:${CONTACT.phone}`} data-testid="contact-phone" className="link-underline">{CONTACT.phone}</a>
            </div>
            <div className="flex items-start gap-3 text-ink/70">
              <Mail size={18} className="text-tapasya-blue mt-0.5" />
              <a href={`mailto:${CONTACT.email}`} className="link-underline">{CONTACT.email}</a>
            </div>
            <div className="flex items-start gap-3 text-ink/70">
              <MapPin size={18} className="text-tapasya-blue mt-0.5" />
              <span>{CONTACT.address}</span>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono uppercase text-xs tracking-[0.25em] text-ink/40 mb-4">Navigate</p>
            <div className="flex flex-col gap-3">
              {["about", "capabilities", "products", "global"].map((id) => (
                <button
                  key={id}
                  data-testid={`footer-nav-${id}`}
                  onClick={() => scrollToId(id)}
                  className="text-left capitalize link-underline text-ink/70 w-fit"
                >
                  {id}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between gap-4 font-mono uppercase text-[0.7rem] tracking-[0.2em] text-ink/40">
          <span>© {new Date().getFullYear()} Prochem Tapasya. All rights reserved.</span>
          <span>Granulation · Drying · Milling · Blending · Coating</span>
        </div>
      </div>
    </footer>
  );
}
