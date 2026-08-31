import { NavLink, Outlet, Navigate, Link } from "react-router-dom";
import { LayoutDashboard, Inbox, Package, FileText, Newspaper, FileEdit, Settings, Users, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const NAV = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/admin/enquiries", label: "Enquiries", icon: Inbox },
  { to: "/admin/products", label: "Products", icon: Package },
  { to: "/admin/blog", label: "Blog", icon: FileText },
  { to: "/admin/news", label: "News & Events", icon: Newspaper },
  { to: "/admin/pages", label: "Pages", icon: FileEdit },
  { to: "/admin/users", label: "Users", icon: Users, adminOnly: true },
  { to: "/admin/settings", label: "Settings", icon: Settings, adminOnly: true },
];

export default function AdminShell() {
  const { user, ready, logout } = useAuth();
  if (!ready) return <div className="min-h-screen grid place-items-center text-ink/60 font-mono text-xs">Loading…</div>;
  if (!user) return <Navigate to="/admin/login" replace />;

  return (
    <div className="min-h-screen flex bg-background" data-testid="admin-shell">
      <aside className="w-64 shrink-0 bg-tapasya-blue text-white flex flex-col">
        <div className="p-6 border-b border-white/10">
          <Link to="/admin" className="flex items-center gap-3">
            <img src="/logo.png" alt="Prochem Tapasya" className="h-9 w-auto bg-white p-1.5 rounded" />
          </Link>
          <p className="mt-3 font-mono uppercase text-[0.6rem] tracking-[0.25em] text-white/40">Admin Panel</p>
        </div>
        <nav className="p-4 flex-1 overflow-y-auto">
          {NAV.filter((n) => !n.adminOnly || user.role === "admin").map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              data-testid={`admin-nav-${n.to.replace("/admin/", "").replace("/admin", "dashboard")}`}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 mb-1 font-mono uppercase text-[0.7rem] tracking-[0.2em] transition-colors ${
                  isActive ? "bg-white text-tapasya-blue" : "text-white/70 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <n.icon size={14} /> {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <p className="font-mono text-[0.65rem] text-white/50 truncate">{user.email}</p>
          <p className="font-mono uppercase text-[0.55rem] tracking-widest text-white/80">{user.role}</p>
          <button
            data-testid="admin-logout"
            onClick={logout}
            className="mt-3 w-full flex items-center justify-center gap-2 border border-white/20 py-2 font-mono uppercase text-[0.65rem] tracking-[0.2em] text-white/80 hover:bg-white/5"
          >
            <LogOut size={12} /> Logout
          </button>
          <p className="mt-4 pt-4 border-t border-white/10 font-mono uppercase text-[0.55rem] tracking-widest text-white/40 leading-relaxed">
            A digital experience by{" "}
            <a
              href="https://www.adcommedia.in"
              target="_blank"
              rel="noreferrer"
              data-testid="admin-adcom"
              className="text-white hover:underline"
            >
              Adcom Media
            </a>
          </p>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
