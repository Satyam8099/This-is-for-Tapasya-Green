import { useEffect, useState } from "react";
import { Inbox, Package, FileText, Newspaper } from "lucide-react";
import api from "@/lib/api";

const TYPE_LABELS = {
  product_rfq: "Product RFQ",
  contact: "General Contact",
  spare_parts: "Spare Parts",
  company_profile: "Company Profile",
  consultation: "Consultation",
  export: "Export Enquiry",
};

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  useEffect(() => {
    api.get("/admin/enquiries/stats").then((r) => setStats(r.data)).catch(() => setStats({ total: 0, by_type: {}, by_status: {}, recent: [] }));
  }, []);

  return (
    <div className="p-8 md:p-12" data-testid="admin-dashboard">
      <p className="font-mono uppercase text-[0.65rem] tracking-[0.3em] text-tapasya-blue">(Overview)</p>
      <h1 className="mt-4 font-display font-bold uppercase tracking-tighter leading-none text-4xl md:text-5xl text-ink">Dashboard</h1>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatBox icon={Inbox} label="Total Enquiries" value={stats?.total ?? "—"} />
        <StatBox icon={Package} label="New" value={stats?.by_status?.new ?? 0} />
        <StatBox icon={FileText} label="In Progress" value={stats?.by_status?.in_progress ?? 0} />
        <StatBox icon={Newspaper} label="Closed" value={stats?.by_status?.closed ?? 0} />
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="bg-white border border-black/10 p-6">
          <h2 className="font-mono uppercase text-[0.65rem] tracking-[0.25em] text-ink/50">By Type</h2>
          <ul className="mt-4 divide-y divide-black/10">
            {Object.entries(TYPE_LABELS).map(([k, label]) => (
              <li key={k} className="flex items-center justify-between py-3">
                <span className="text-ink/80">{label}</span>
                <span className="font-display uppercase text-xl text-ink">{stats?.by_type?.[k] || 0}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="bg-white border border-black/10 p-6">
          <h2 className="font-mono uppercase text-[0.65rem] tracking-[0.25em] text-ink/50">Recent Enquiries</h2>
          <ul className="mt-4 divide-y divide-black/10">
            {(stats?.recent || []).map((e) => (
              <li key={e.id} className="py-3">
                <p className="font-display uppercase tracking-tight text-sm text-ink">
                  {TYPE_LABELS[e.type] || e.type} · {e.name || e.company || e.email || "—"}
                </p>
                <p className="text-xs text-ink/50 font-mono">{new Date(e.created_at).toLocaleString()}</p>
              </li>
            ))}
            {(!stats?.recent || stats.recent.length === 0) && <li className="py-3 text-ink/50 text-sm">No enquiries yet.</li>}
          </ul>
        </section>
      </div>
    </div>
  );
}

function StatBox({ icon: Icon, label, value }) {
  return (
    <div className="bg-white border border-black/10 p-5">
      <Icon size={18} className="text-tapasya-blue" />
      <p className="mt-4 font-mono uppercase text-[0.6rem] tracking-[0.25em] text-ink/50">{label}</p>
      <p className="mt-2 font-display font-bold uppercase text-3xl text-ink">{value}</p>
    </div>
  );
}
