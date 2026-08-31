import { useEffect, useMemo, useState } from "react";
import api from "@/lib/api";
import { Trash2, Check } from "lucide-react";

const TYPES = [
  { key: "", label: "All" },
  { key: "product_rfq", label: "Product RFQ" },
  { key: "contact", label: "General" },
  { key: "spare_parts", label: "Spare Parts" },
  { key: "company_profile", label: "Company Profile" },
  { key: "consultation", label: "Consultation" },
  { key: "export", label: "Export" },
];

const STATUSES = ["new", "in_progress", "closed"];

export default function AdminEnquiries() {
  const [type, setType] = useState("");
  const [list, setList] = useState([]);
  const [busy, setBusy] = useState(false);
  const [selected, setSelected] = useState(null);

  const load = () => {
    setBusy(true);
    api
      .get("/admin/enquiries", { params: type ? { type } : {} })
      .then((r) => setList(r.data))
      .finally(() => setBusy(false));
  };

  useEffect(() => { load(); }, [type]);

  const setStatus = async (id, status) => {
    await api.patch(`/admin/enquiries/${id}`, { status });
    load();
    if (selected?.id === id) setSelected({ ...selected, status });
  };

  const remove = async (id) => {
    if (!window.confirm("Delete this enquiry?")) return;
    await api.delete(`/admin/enquiries/${id}`);
    if (selected?.id === id) setSelected(null);
    load();
  };

  const grouped = useMemo(() => list, [list]);

  return (
    <div className="p-8 md:p-12" data-testid="admin-enquiries">
      <p className="font-mono uppercase text-[0.65rem] tracking-[0.3em] text-tapasya-blue">(Inbox)</p>
      <h1 className="mt-4 font-display font-bold uppercase tracking-tighter leading-none text-4xl md:text-5xl text-ink">Enquiries</h1>

      <div className="mt-8 flex flex-wrap gap-2">
        {TYPES.map((t) => (
          <button
            key={t.key}
            data-testid={`filter-${t.key || "all"}`}
            onClick={() => setType(t.key)}
            className={`px-4 py-2 font-mono uppercase text-[0.65rem] tracking-[0.2em] border ${
              type === t.key ? "border-tapasya-blue bg-tapasya-blue text-white" : "border-black/15 text-ink/70 hover:border-ink"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 bg-white border border-black/10 overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-tapasya-blue text-white font-mono uppercase text-[0.6rem] tracking-[0.2em]">
              <tr>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Company</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {busy && <tr><td colSpan={6} className="px-4 py-6 text-ink/50">Loading…</td></tr>}
              {!busy && grouped.length === 0 && (
                <tr><td colSpan={6} className="px-4 py-6 text-ink/50">No enquiries.</td></tr>
              )}
              {grouped.map((e) => (
                <tr
                  key={e.id}
                  data-testid={`enquiry-row-${e.id}`}
                  onClick={() => setSelected(e)}
                  className={`border-t border-black/10 cursor-pointer ${selected?.id === e.id ? "bg-tapasya-blue/5" : "hover:bg-black/[0.02]"}`}
                >
                  <td className="px-4 py-3 font-mono text-xs text-ink/60">{new Date(e.created_at).toLocaleString()}</td>
                  <td className="px-4 py-3 font-mono uppercase text-[0.65rem] tracking-widest text-tapasya-blue">{e.type}</td>
                  <td className="px-4 py-3">{e.name || "—"}</td>
                  <td className="px-4 py-3 text-ink/70">{e.company || "—"}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2 py-1 font-mono uppercase text-[0.55rem] tracking-widest ${e.status === "closed" ? "bg-green-100 text-green-700" : e.status === "in_progress" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-700"}`}>
                      {e.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button data-testid={`delete-${e.id}`} onClick={(ev) => { ev.stopPropagation(); remove(e.id); }} className="text-ink/40 hover:text-tapasya-blue">
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="lg:col-span-2">
          {!selected ? (
            <div className="bg-white border border-black/10 p-6 text-ink/50 text-sm">Select an enquiry to view details.</div>
          ) : (
            <div className="bg-white border border-black/10 p-6" data-testid="enquiry-detail">
              <p className="font-mono uppercase text-[0.6rem] tracking-widest text-tapasya-blue">{selected.type}</p>
              <h3 className="mt-2 font-display uppercase tracking-tight text-2xl text-ink">
                {selected.name || selected.email || "Enquiry"}
              </h3>
              <p className="text-ink/60 text-sm mt-1">{new Date(selected.created_at).toLocaleString()}</p>

              <div className="mt-4 space-y-2 text-sm">
                {["email","phone","company","country","product","category","batch-size","application","compliance","incoterm","target-country","target-timeline","interest","machine-model","tag-ga","part-required","quantity","urgency","product-interest"].map((k) => (
                  selected[k] ? (
                    <div key={k} className="flex justify-between gap-3 border-b border-black/5 py-1.5">
                      <span className="font-mono uppercase text-[0.6rem] tracking-widest text-ink/50">{k}</span>
                      <span className="text-ink text-right">{selected[k]}</span>
                    </div>
                  ) : null
                ))}
                {selected.message && (
                  <div className="pt-3">
                    <p className="font-mono uppercase text-[0.6rem] tracking-widest text-ink/50">Message</p>
                    <p className="mt-2 text-ink/85 whitespace-pre-wrap">{selected.message}</p>
                  </div>
                )}
              </div>

              <div className="mt-6 flex gap-2 flex-wrap">
                {STATUSES.map((s) => (
                  <button
                    key={s}
                    onClick={() => setStatus(selected.id, s)}
                    className={`px-3 py-2 font-mono uppercase text-[0.6rem] tracking-widest border ${selected.status === s ? "border-tapasya-blue bg-tapasya-blue text-white" : "border-black/15 text-ink/70 hover:border-ink"}`}
                  >
                    {s}
                  </button>
                ))}
                <a
                  href={`mailto:${selected.email}?subject=${encodeURIComponent("Re: " + (selected.subject || selected.type))}`}
                  className="inline-flex items-center gap-2 px-3 py-2 font-mono uppercase text-[0.6rem] tracking-widest border border-ink hover:bg-tapasya-blue hover:text-white"
                >
                  <Check size={12} /> Reply by Email
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
