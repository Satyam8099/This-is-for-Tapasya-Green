import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Calendar, Clock } from "lucide-react";
import PageShell from "@/components/site/PageShell";
import { Section } from "@/components/site/PageParts";
import { BLOG_POSTS } from "@/data/blog";
import { IMAGES } from "@/lib/site-data";

const fmt = (iso) => new Date(iso).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;
  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <PageShell testid="blog-post-page">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 pt-6 pb-2">
        <Link to="/blog" data-testid="back-to-blog" className="group inline-flex items-center gap-2 font-mono uppercase text-xs tracking-[0.2em] text-ink/60 hover:text-prochem-red transition-colors">
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
          Back to Blog
        </Link>
      </div>

      <section className="grid-lines border-b border-black/10">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-12 md:py-20">
          <p className="font-mono uppercase text-[0.65rem] tracking-[0.3em] text-prochem-red">
            ({post.category})
          </p>
          <h1 data-testid="blog-title" className="mt-6 font-display font-bold uppercase tracking-tighter leading-[0.95] text-3xl md:text-6xl text-ink">
            {post.title}
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-6 font-mono uppercase text-[0.65rem] tracking-[0.25em] text-ink/60">
            <span>{post.author}</span>
            <span className="inline-flex items-center gap-2"><Calendar size={12} /> {fmt(post.date)}</span>
            <span className="inline-flex items-center gap-2"><Clock size={12} /> {post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 pt-10">
          <div className="aspect-[16/9] overflow-hidden border border-black/10">
            <img src={IMAGES[post.hero]} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
        <article className="mx-auto max-w-[900px] px-6 md:px-12 py-14 md:py-20 space-y-6">
          {post.body.map((b, i) => {
            if (b.type === "h") return <h2 key={i} className="font-display uppercase tracking-tight text-2xl md:text-3xl text-ink pt-4">{b.text}</h2>;
            if (b.type === "list")
              return (
                <ul key={i} className="space-y-3 border-l-2 border-prochem-red pl-6">
                  {b.items.map((it) => (
                    <li key={it} className="text-ink/80 text-lg">{it}</li>
                  ))}
                </ul>
              );
            return <p key={i} className="text-ink/80 text-lg leading-relaxed">{b.text}</p>;
          })}
        </article>
      </section>

      {related.length > 0 && (
        <Section alt index={2} kicker="Also Read" title="More from the team." testid="section-blog-related">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((r) => (
              <Link key={r.slug} to={`/blog/${r.slug}`} data-testid={`related-blog-${r.slug}`} className="group bg-white border border-black/10 p-6 flex items-start gap-4">
                <div className="flex-1">
                  <span className="font-mono uppercase text-[0.65rem] tracking-[0.25em] text-prochem-red">{r.category}</span>
                  <h3 className="mt-3 font-display uppercase tracking-tight text-xl text-ink group-hover:text-prochem-red transition-colors">{r.title}</h3>
                </div>
                <ArrowUpRight size={18} className="text-ink/40 group-hover:text-prochem-red mt-1" />
              </Link>
            ))}
          </div>
        </Section>
      )}
    </PageShell>
  );
}
