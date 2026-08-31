import { useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { LogIn } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export default function AdminLogin() {
  const { user, login } = useAuth();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  if (user) return <Navigate to={location.state?.from || "/admin"} replace />;

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    const r = await login(email.trim().toLowerCase(), password);
    setBusy(false);
    if (!r.ok) setError(r.error);
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-background">
      <div className="hidden md:flex flex-col justify-between p-12 bg-ink text-white">
        <Link to="/">
          <img src="/logo.png" alt="Prochem Tapasya" className="h-12 w-auto invert" />
        </Link>
        <div>
          <p className="font-mono uppercase text-[0.65rem] tracking-[0.3em] text-white/40">(Admin Panel)</p>
          <h1 className="mt-6 font-display font-bold uppercase tracking-tighter leading-[0.85] text-5xl">
            Prochem Tapasya<br />
            <span className="text-prochem-red">Control Room.</span>
          </h1>
          <p className="mt-6 max-w-md text-white/60">
            Manage enquiries, products, blog, news, pages, SEO and team access from a single dashboard.
          </p>
        </div>
        <p className="font-mono text-[0.6rem] tracking-widest text-white/40">SECURE · JWT · BCRYPT</p>
      </div>
      <div className="flex items-center justify-center p-8 md:p-16">
        <form onSubmit={submit} data-testid="admin-login-form" className="w-full max-w-sm">
          <div className="md:hidden mb-8">
            <img src="/logo.png" alt="Prochem Tapasya" className="h-10 w-auto" />
          </div>
          <p className="font-mono uppercase text-[0.65rem] tracking-[0.3em] text-prochem-red">(Sign In)</p>
          <h2 className="mt-4 font-display font-bold uppercase tracking-tighter leading-none text-4xl md:text-5xl text-ink">
            Welcome back.
          </h2>
          <p className="mt-4 text-ink/60">Please sign in with your admin credentials.</p>
          <div className="mt-8 space-y-4">
            <label className="block">
              <span className="font-mono uppercase text-[0.65rem] tracking-[0.25em] text-ink/50">Email</span>
              <input
                data-testid="login-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full bg-white border border-black/15 px-4 py-3 font-mono text-sm focus:outline-none focus:border-prochem-red"
                placeholder="you@company.com"
              />
            </label>
            <label className="block">
              <span className="font-mono uppercase text-[0.65rem] tracking-[0.25em] text-ink/50">Password</span>
              <input
                data-testid="login-password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full bg-white border border-black/15 px-4 py-3 font-mono text-sm focus:outline-none focus:border-prochem-red"
                placeholder="••••••••"
              />
            </label>
            {error && (
              <p data-testid="login-error" className="text-sm text-prochem-red font-mono">{error}</p>
            )}
            <button
              data-testid="login-submit"
              type="submit"
              disabled={busy}
              className="w-full inline-flex items-center justify-center gap-3 bg-prochem-red text-white py-3.5 font-mono uppercase text-xs tracking-[0.15em] hover:bg-ink transition-colors disabled:opacity-50"
            >
              {busy ? "Signing in..." : "Sign In"} <LogIn size={14} />
            </button>
          </div>
          <p className="mt-8 font-mono uppercase text-[0.6rem] tracking-[0.25em] text-ink/40">
            <Link to="/" className="hover:text-prochem-red">← Back to Website</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
