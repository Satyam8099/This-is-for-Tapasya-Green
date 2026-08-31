import { useEffect, useState } from "react";
import api from "@/lib/api";
import { useAuth } from "@/contexts/AuthContext";
import { UserPlus, Trash2 } from "lucide-react";

export default function AdminUsers() {
  const { user: me } = useAuth();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ email: "", password: "", name: "", role: "manager" });

  const load = () => api.get("/admin/users").then((r) => setUsers(r.data)).catch((e) => setError(e.response?.data?.detail || "Failed to load"));
  useEffect(() => { load(); }, []);

  const add = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await api.post("/admin/users", form);
      setForm({ email: "", password: "", name: "", role: "manager" });
      load();
    } catch (er) {
      setError(er.response?.data?.detail || "Failed");
    }
  };

  const changeRole = async (u, role) => {
    if (!window.confirm(`Change ${u.email} role to ${role}?`)) return;
    await api.patch(`/admin/users/${u.id}`, { role });
    load();
  };
  const remove = async (u) => {
    if (!window.confirm(`Delete ${u.email}?`)) return;
    try { await api.delete(`/admin/users/${u.id}`); load(); } catch (e) { setError(e.response?.data?.detail || "Failed"); }
  };
  const resetPassword = async (u) => {
    const p = window.prompt(`New password for ${u.email} (min 6 chars):`);
    if (!p) return;
    await api.patch(`/admin/users/${u.id}`, { password: p });
    alert("Password updated");
  };

  const inputCls = "w-full bg-white border border-black/15 px-4 py-2.5 font-mono text-sm focus:outline-none focus:border-prochem-red";

  return (
    <div className="p-8 md:p-12" data-testid="admin-users">
      <p className="font-mono uppercase text-[0.65rem] tracking-[0.3em] text-prochem-red">(Team)</p>
      <h1 className="mt-4 font-display font-bold uppercase tracking-tighter leading-none text-4xl md:text-5xl text-ink">Users & Roles</h1>
      <p className="mt-4 text-ink/60 max-w-2xl">Transfer admin or manager access to any email address. Only admins can manage users.</p>

      <form onSubmit={add} data-testid="new-user-form" className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-3 bg-white border border-black/10 p-5 max-w-4xl">
        <input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} data-testid="user-email" />
        <input required type="text" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className={inputCls} data-testid="user-password" />
        <input type="text" placeholder="Name (optional)" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
        <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className={inputCls} data-testid="user-role">
          <option value="manager">Manager</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" data-testid="add-user" className="inline-flex items-center justify-center gap-2 bg-prochem-red text-white py-2.5 font-mono uppercase text-[0.65rem] tracking-widest hover:bg-ink">
          <UserPlus size={14} /> Add
        </button>
      </form>
      {error && <p className="mt-3 text-sm text-prochem-red font-mono max-w-4xl">{error}</p>}

      <div className="mt-8 bg-white border border-black/10 overflow-hidden max-w-5xl">
        <table className="w-full text-left text-sm">
          <thead className="bg-ink text-white font-mono uppercase text-[0.6rem] tracking-[0.2em]">
            <tr>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Created</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t border-black/10">
                <td className="px-4 py-3">{u.email}</td>
                <td className="px-4 py-3 text-ink/70">{u.name}</td>
                <td className="px-4 py-3">
                  <select value={u.role} onChange={(e) => changeRole(u, e.target.value)} disabled={u.id === me.id} className="bg-transparent border border-black/15 px-2 py-1 font-mono text-xs">
                    <option value="manager">manager</option>
                    <option value="admin">admin</option>
                  </select>
                </td>
                <td className="px-4 py-3 font-mono text-xs text-ink/50">{new Date(u.created_at).toLocaleDateString()}</td>
                <td className="px-4 py-3 text-right flex gap-3 justify-end">
                  <button onClick={() => resetPassword(u)} className="font-mono uppercase text-[0.6rem] tracking-widest text-ink/60 hover:text-prochem-red">Reset PW</button>
                  {u.id !== me.id && (
                    <button onClick={() => remove(u)} className="text-ink/40 hover:text-prochem-red"><Trash2 size={14} /></button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
