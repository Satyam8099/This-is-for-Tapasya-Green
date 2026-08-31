import { useEffect, useState } from "react";
import api from "@/lib/api";
import { Save, Plus, Trash2 } from "lucide-react";

/* News & Events combined page — news_items and events collections */
export default function AdminNews() {
  const [tab, setTab] = useState("news");
  const [items, setItems] = useState([]);
  const [current, setCurrent] = useState(null);
  const [msg, setMsg] = useState("");

  const endpoint = tab === "news" ? "/news" : "/events";
  const adminEndpoint = tab === "news" ? "/admin/news" : "/admin/events";

  const load = () => api.get(endpoint).then((r) => setItems(r.data));
  useEffect(() => { load(); }, [tab]);

  const empty = () => tab === "news"
    ? { date: "", tag: "", title: "", body: "" }
    : { date: "", endDate: "", tag: "", title: "", venue: "", hall: "", body: "", cta: "" };

  const save = async () => {
    try { await api.put(adminEndpoint, current); setMsg("Saved"); load(); setTimeout(() => setMsg(""), 1500); }
    catch (e) { setMsg(e.response?.data?.detail || "Save failed"); }
  };
  const remove = async (it) => {
    if (!window.confirm("Delete?")) return;
    await api.delete(`${adminEndpoint}/${it.id}`);
    if (current?.id === it.id) setCurrent(null);
    load();
  };

  const inputCls = "w-full bg-white border border-black/15 px-3 py-2 font-mono text-sm focus:outline-none focus:border-tapasya-blue";
  const label = "font-mono uppercase text-[0.6rem] tracking-[0.2em] text-ink/50 block mb-1";

  const fields = tab === "news"
    ? [{ n: "date", l: "Date", t: "date" }, { n: "tag", l: "Tag" }, { n: "title", l: "Title", w: 2 }, { n: "body", l: "Body", t: "textarea", w: 2 }]
    : [{ n: "date", l: "Start Date", t: "date" }, { n: "endDate", l: "End Date", t: "date" }, { n: "tag", l: "Tag" }, { n: "cta", l: "CTA Label" }, { n: "title", l: "Title", w: 2 }, { n: "venue", l: "Venue" }, { n: "hall", l: "Hall / Booth" }, { n: "body", l: "Body", t: "textarea", w: 2 }];

  return (
    <div className="p-8 md:p-12" data-testid="admin-news">
      <p className="font-mono uppercase text-[0.65rem] tracking-[0.3em] text-tapasya-blue">(News & Events)</p>
      <h1 className="mt-4 font-display font-bold uppercase tracking-tighter leading-none text-4xl md:text-5xl text-ink">News & Events</h1>

      <div className="mt-6 flex gap-2">
        {[{ k: "news", l: "News" }, { k: "events", l: "Events" }].map((t) => (
          <button key={t.k} onClick={() => { setTab(t.k); setCurrent(null); }} className={`px-4 py-2 font-mono uppercase text-[0.65rem] tracking-[0.2em] border ${tab === t.k ? "border-tapasya-blue bg-slate-800 text-white" : "border-black/15 text-ink/70 hover:border-ink"}`}>{t.l}</button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white border border-black/10">
          <div className="p-4 border-b border-black/10 flex items-center justify-between">
            <span className="font-mono uppercase text-[0.65rem] tracking-widest text-ink/50">{tab} ({items.length})</span>
            <button onClick={() => setCurrent(empty())} className="inline-flex items-center gap-1 text-tapasya-blue font-mono uppercase text-[0.6rem] tracking-widest"><Plus size={12} /> New</button>
          </div>
          <ul className="max-h-[70vh] overflow-y-auto">
            {items.map((it) => (
              <li key={it.id} className={`border-b border-black/5 ${current?.id === it.id ? "bg-slate-800/5" : ""}`}>
                <button onClick={() => setCurrent(it)} className="w-full text-left px-4 py-3">
                  <p className="font-display uppercase text-sm text-ink truncate">{it.title}</p>
                  <p className="font-mono text-[0.6rem] tracking-widest text-ink/40 mt-1">{it.date}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          {!current ? <div className="bg-white border border-black/10 p-6 text-ink/50">Select an item or click <b>New</b>.</div> : (
            <div className="bg-white border border-black/10 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fields.map((f) => (
                  <div key={f.n} className={f.w === 2 ? "md:col-span-2" : ""}>
                    <span className={label}>{f.l}</span>
                    {f.t === "textarea"
                      ? <textarea rows={5} className={inputCls} value={current[f.n] || ""} onChange={(e) => setCurrent({ ...current, [f.n]: e.target.value })} />
                      : <input type={f.t || "text"} className={inputCls} value={current[f.n] || ""} onChange={(e) => setCurrent({ ...current, [f.n]: e.target.value })} />}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 flex-wrap">
                <button onClick={save} className="inline-flex items-center gap-2 bg-slate-800 text-white pl-5 pr-4 py-2.5 font-mono uppercase text-[0.65rem] tracking-widest hover:bg-slate-900"><Save size={14} /> Save</button>
                {current.id && <button onClick={() => remove(current)} className="inline-flex items-center gap-2 border border-black/15 px-4 py-2.5 font-mono uppercase text-[0.65rem] tracking-widest text-ink/70 hover:bg-slate-800 hover:text-white hover:border-ink"><Trash2 size={14} /> Delete</button>}
                {msg && <span className="font-mono uppercase text-[0.6rem] tracking-widest text-green-600">{msg}</span>}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
