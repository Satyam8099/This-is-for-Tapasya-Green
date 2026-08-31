import { useEffect, useState } from "react";
import api from "@/lib/api";
import { Save } from "lucide-react";

export default function AdminSettings() {
  const [data, setData] = useState({ contact: {}, social: {}, seo: {} });
  const [saved, setSaved] = useState("");
  useEffect(() => { api.get("/settings").then((r) => setData({ contact: {}, social: {}, seo: {}, ...r.data })); }, []);

  const setField = (section, key, value) => setData({ ...data, [section]: { ...data[section], [key]: value } });

  const save = async () => {
    await api.put("/admin/settings", data);
    setSaved("Saved");
    setTimeout(() => setSaved(""), 1500);
  };

  const inputCls = "w-full bg-white border border-black/15 px-4 py-2.5 font-mono text-sm focus:outline-none focus:border-tapasya-blue";
  const labelCls = "font-mono uppercase text-[0.65rem] tracking-[0.25em] text-ink/50 block mb-2";

  const Card = ({ title, children }) => (
    <section className="bg-white border border-black/10 p-6">
      <h2 className="font-display uppercase tracking-tight text-xl text-ink mb-4">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );

  return (
    <div className="p-8 md:p-12" data-testid="admin-settings">
      <p className="font-mono uppercase text-[0.65rem] tracking-[0.3em] text-tapasya-blue">(Site)</p>
      <h1 className="mt-4 font-display font-bold uppercase tracking-tighter leading-none text-4xl md:text-5xl text-ink">Settings</h1>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
        <Card title="Contact Details">
          {["email", "phone", "whatsapp", "address"].map((k) => (
            <div key={k}>
              <span className={labelCls}>{k}</span>
              <input data-testid={`contact-${k}`} className={inputCls} value={data.contact?.[k] || ""} onChange={(e) => setField("contact", k, e.target.value)} />
            </div>
          ))}
        </Card>
        <Card title="Social Links">
          {["linkedin", "twitter", "youtube", "facebook", "instagram"].map((k) => (
            <div key={k}>
              <span className={labelCls}>{k}</span>
              <input data-testid={`social-${k}`} className={inputCls} value={data.social?.[k] || ""} onChange={(e) => setField("social", k, e.target.value)} />
            </div>
          ))}
        </Card>
        <Card title="Website SEO">
          {["site_title", "site_description", "og_image"].map((k) => (
            <div key={k}>
              <span className={labelCls}>{k.replace(/_/g, " ")}</span>
              {k === "site_description" ? (
                <textarea data-testid={`seo-${k}`} rows={4} className={inputCls} value={data.seo?.[k] || ""} onChange={(e) => setField("seo", k, e.target.value)} />
              ) : (
                <input data-testid={`seo-${k}`} className={inputCls} value={data.seo?.[k] || ""} onChange={(e) => setField("seo", k, e.target.value)} />
              )}
            </div>
          ))}
        </Card>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <button data-testid="save-settings" onClick={save} className="inline-flex items-center gap-2 bg-slate-800 text-white pl-5 pr-4 py-3 font-mono uppercase text-[0.65rem] tracking-widest hover:bg-slate-800">
          <Save size={14} /> Save Settings
        </button>
        {saved && <span className="font-mono uppercase text-[0.65rem] tracking-widest text-green-600">{saved}</span>}
      </div>
    </div>
  );
}
