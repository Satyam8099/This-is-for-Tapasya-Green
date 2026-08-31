import { createContext, useContext, useEffect, useState } from "react";
import api, { formatApiError } from "@/lib/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("pt_user") || "null");
    } catch {
      return null;
    }
  });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("pt_token");
    if (!token) {
      setReady(true);
      return;
    }
    api
      .get("/auth/me")
      .then((r) => {
        setUser(r.data);
        localStorage.setItem("pt_user", JSON.stringify(r.data));
      })
      .catch(() => {
        localStorage.removeItem("pt_token");
        localStorage.removeItem("pt_user");
        setUser(null);
      })
      .finally(() => setReady(true));
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await api.post("/auth/login", { email, password });
      localStorage.setItem("pt_token", data.token);
      localStorage.setItem("pt_user", JSON.stringify(data.user));
      setUser(data.user);
      return { ok: true };
    } catch (e) {
      return { ok: false, error: formatApiError(e.response?.data?.detail) || e.message };
    }
  };

  const logout = () => {
    localStorage.removeItem("pt_token");
    localStorage.removeItem("pt_user");
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, ready, login, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
