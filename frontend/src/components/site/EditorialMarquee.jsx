import Marquee from "react-fast-marquee";
import { INDUSTRIES } from "@/lib/site-data";

export default function EditorialMarquee() {
  return (
    <section data-testid="marquee-section" className="bg-ink py-16 md:py-24 overflow-hidden border-y border-white/10">
      <Marquee speed={40} gradient={false} autoFill>
        {INDUSTRIES.map((word) => (
          <span key={word} className="flex items-center">
            <span className="font-display font-bold uppercase tracking-tight text-6xl md:text-8xl lg:text-9xl text-stroke-light px-8">
              {word}
            </span>
            <span className="h-4 w-4 rounded-full bg-prochem-red mx-4" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
