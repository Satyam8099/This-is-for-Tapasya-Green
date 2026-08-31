import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import PageShell from "@/components/site/PageShell";
import { PageHero, Section, reveal } from "@/components/site/PageParts";
import { NEWS_ITEMS, EVENTS } from "@/data/blog";
import { CONTACT } from "@/lib/site-data";

const fmt = (iso) => new Date(iso).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
const dayNum = (iso) => new Date(iso).toLocaleDateString("en-GB", { day: "2-digit" });
const monShort = (iso) => new Date(iso).toLocaleDateString("en-GB", { month: "short" }).toUpperCase();
const yearNum = (iso) => new Date(iso).getFullYear();

export default function NewsPage() {
  const today = Date.now();
  const upcoming = EVENTS.filter((e) => new Date(e.endDate || e.date).getTime() >= today);
  const past = EVENTS.filter((e) => new Date(e.endDate || e.date).getTime() < today);

  return (
    <PageShell testid="news-page">
      <PageHero
        kicker="News & Events"
        title={<>What we're<br />up to.</>}
        intro="Milestones, exhibitions, webinars and industry activities from Prochem Tapasya."
        testid="news-hero"
      />

      <Section index={1} kicker="Upcoming Events" title="Meet us next." testid="section-upcoming-events"
        note="Trade shows, webinars and technical sessions where our engineering team will be present.">
        {upcoming.length === 0 ? (
          <p className="text-ink/60 text-lg">No upcoming events currently listed. Please check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcoming.map((e, i) => (
              <motion.article
                key={e.title}
                custom={i}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                data-testid={`event-card-${i}`}
                className="group bg-white border border-black/10 p-6 flex flex-col gap-6"
              >
                <div className="flex items-start justify-between">
                  <div className="border border-prochem-red p-3 leading-none">
                    <p className="font-display font-bold text-3xl text-prochem-red">{dayNum(e.date)}</p>
                    <p className="font-mono uppercase text-[0.6rem] tracking-[0.2em] text-prochem-red mt-1">
                      {monShort(e.date)} {yearNum(e.date)}
                    </p>
                  </div>
                  <span className="font-mono uppercase text-[0.6rem] tracking-[0.25em] bg-ink text-white px-2 py-1">
                    {e.tag}
                  </span>
                </div>
                <div>
                  <h3 className="font-display uppercase tracking-tight text-2xl text-ink group-hover:text-prochem-red transition-colors">{e.title}</h3>
                  <p className="mt-3 text-ink/70">{e.body}</p>
                </div>
                <div className="mt-auto space-y-2 font-mono uppercase text-[0.65rem] tracking-[0.2em] text-ink/60">
                  <p className="flex items-center gap-2"><MapPin size={12} className="text-tapasya-blue" /> {e.venue}</p>
                  <p className="flex items-center gap-2"><Calendar size={12} className="text-tapasya-blue" /> {e.hall}</p>
                </div>
                <a
                  href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(`Meet at ${e.title}`)}`}
                  data-testid={`event-cta-${i}`}
                  className="group/btn inline-flex items-center justify-between gap-3 border border-ink px-4 py-3 font-mono uppercase text-xs tracking-[0.2em] text-ink hover:bg-ink hover:text-white transition-colors"
                >
                  {e.cta}
                  <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </motion.article>
            ))}
          </div>
        )}
      </Section>

      <Section alt index={2} kicker="Latest News" title="Recent activity." testid="section-news">
        <div className="border-t border-black/15">
          {NEWS_ITEMS.map((n, i) => (
            <motion.div
              key={n.title}
              custom={i}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              data-testid={`news-item-${i}`}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-b border-black/10"
            >
              <div className="md:col-span-2 font-mono uppercase text-xs tracking-[0.2em] text-prochem-red">{fmt(n.date)}</div>
              <div className="md:col-span-2 font-mono uppercase text-[0.65rem] tracking-[0.25em] text-ink/50">{n.tag}</div>
              <div className="md:col-span-8">
                <h3 className="font-display uppercase tracking-tight text-2xl md:text-3xl text-ink">{n.title}</h3>
                <p className="mt-3 text-ink/70 text-base md:text-lg">{n.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {past.length > 0 && (
        <Section index={3} kicker="Past Highlights" title="Where we've been." testid="section-past">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
            {past.map((e) => (
              <li key={e.title} className="border-b border-black/10 py-4 flex items-baseline justify-between gap-4">
                <span className="font-display uppercase tracking-tight text-lg text-ink">{e.title}</span>
                <span className="font-mono uppercase text-[0.65rem] tracking-[0.2em] text-ink/50">{fmt(e.date)}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </PageShell>
  );
}
