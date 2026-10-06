import { useEffect, useRef, useState } from "react";
import { X, Download, Check, ChevronDown } from "lucide-react";
import api from "@/lib/api";

// Common markets first, then the rest alphabetically. flag = emoji flag.
const COUNTRIES = [
  { iso: "IN", name: "India", dial: "+91", flag: "🇮🇳" },
  { iso: "US", name: "United States", dial: "+1", flag: "🇺🇸" },
  { iso: "AE", name: "United Arab Emirates", dial: "+971", flag: "🇦🇪" },
  { iso: "GB", name: "United Kingdom", dial: "+44", flag: "🇬🇧" },
  { iso: "DE", name: "Germany", dial: "+49", flag: "🇩🇪" },
  { iso: "SG", name: "Singapore", dial: "+65", flag: "🇸🇬" },
  { iso: "AU", name: "Australia", dial: "+61", flag: "🇦🇺" },
  { iso: "BD", name: "Bangladesh", dial: "+880", flag: "🇧🇩" },
  { iso: "BR", name: "Brazil", dial: "+55", flag: "🇧🇷" },
  { iso: "CA", name: "Canada", dial: "+1", flag: "🇨🇦" },
  { iso: "CH", name: "Switzerland", dial: "+41", flag: "🇨🇭" },
  { iso: "CN", name: "China", dial: "+86", flag: "🇨🇳" },
  { iso: "EG", name: "Egypt", dial: "+20", flag: "🇪🇬" },
  { iso: "ES", name: "Spain", dial: "+34", flag: "🇪🇸" },
  { iso: "FR", name: "France", dial: "+33", flag: "🇫🇷" },
  { iso: "ID", name: "Indonesia", dial: "+62", flag: "🇮🇩" },
  { iso: "IT", name: "Italy", dial: "+39", flag: "🇮🇹" },
  { iso: "JP", name: "Japan", dial: "+81", flag: "🇯🇵" },
  { iso: "KE", name: "Kenya", dial: "+254", flag: "🇰🇪" },
  { iso: "KR", name: "South Korea", dial: "+82", flag: "🇰🇷" },
  { iso: "LK", name: "Sri Lanka", dial: "+94", flag: "🇱🇰" },
  { iso: "MY", name: "Malaysia", dial: "+60", flag: "🇲🇾" },
  { iso: "MX", name: "Mexico", dial: "+52", flag: "🇲🇽" },
  { iso: "NG", name: "Nigeria", dial: "+234", flag: "🇳🇬" },
  { iso: "NL", name: "Netherlands", dial: "+31", flag: "🇳🇱" },
  { iso: "NP", name: "Nepal", dial: "+977", flag: "🇳🇵" },
  { iso: "PH", name: "Philippines", dial: "+63", flag: "🇵🇭" },
  { iso: "PK", name: "Pakistan", dial: "+92", flag: "🇵🇰" },
  { iso: "PL", name: "Poland", dial: "+48", flag: "🇵🇱" },
  { iso: "QA", name: "Qatar", dial: "+974", flag: "🇶🇦" },
  { iso: "RU", name: "Russia", dial: "+7", flag: "🇷🇺" },
  { iso: "SA", name: "Saudi Arabia", dial: "+966", flag: "🇸🇦" },
  { iso: "TH", name: "Thailand", dial: "+66", flag: "🇹🇭" },
  { iso: "TR", name: "Turkey", dial: "+90", flag: "🇹🇷" },
  { iso: "VN", name: "Vietnam", dial: "+84", flag: "🇻🇳" },
  { iso: "ZA", name: "South Africa", dial: "+27", flag: "🇿🇦" },
];

const FREE_EMAIL_DOMAINS = [
  "gmail.com", "yahoo.com", "yahoo.in", "hotmail.com", "outlook.com", "live.com",
  "aol.com", "icloud.com", "me.com", "mail.com", "proton.me", "protonmail.com",
  "gmx.com", "zoho.com", "yandex.com", "rediffmail.com", "msn.com", "mailinator.com",
];

const inputCls =
  "w-full bg-white border border-black/15 px-4 py-3 font-mono text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:border-prochem-red transition-colors";
const labelCls = "font-mono uppercase text-[0.6rem] tracking-[0.25em] text-ink/50 mb-1.5 block";

/**
 * Lead-capture gate for PDF downloads. On successful submit the enquiry is
 * stored (type: datasheet_download) and the file download starts.
 *
 * Props: doc {label, href, size, type}, productName, productSlug, onClose
 */
export default function DownloadGate({ doc, productName, productSlug, onClose }) {
  const [values, setValues] = useState({ firstName: "", lastName: "", email: "", company: "", phone: "" });
  const [country, setCountry] = useState(COUNTRIES[0]);
  const [status, setStatus] = useState({ state: "idle", msg: "" });
  const gateRef = useRef(null);

  // Auto-detect visitor location for the phone country code
  useEffect(() => {
    let cancelled = false;
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((d) => {
        if (cancelled) return;
        const hit = COUNTRIES.find((c) => c.iso === d.country_code);
        if (hit) setCountry(hit);
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  // Close on backdrop click / Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const set = (n, v) => setValues((s) => ({ ...s, [n]: v }));

  const validate = () => {
    if (!values.firstName.trim()) return "Please enter your first name.";
    if (!values.lastName.trim()) return "Please enter your last name.";
    const email = values.email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Please enter a valid business email.";
    const domain = email.split("@")[1];
    if (FREE_EMAIL_DOMAINS.includes(domain))
      return "Please use your business email — free domains (gmail, yahoo, etc.) are not accepted.";
    if (!values.company.trim()) return "Please enter your company name.";
    const digits = values.phone.replace(/\D/g, "");
    if (digits.length < 6 || digits.length > 12) return "Please enter a valid mobile number (without country code).";
    return null;
  };

  const startDownload = () => {
    const a = document.createElement("a");
    a.href = doc.href;
    a.download = "";
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus({ state: "error", msg: err });
      return;
    }
    setStatus({ state: "sending", msg: "" });
    try {
      await api.post("/enquiries", {
        type: "datasheet_download",
        subject: `Datasheet Download · ${productName}`,
        source_page: window.location.pathname,
        name: `${values.firstName.trim()} ${values.lastName.trim()}`,
        first_name: values.firstName.trim(),
        last_name: values.lastName.trim(),
        email: values.email.trim(),
        company: values.company.trim(),
        phone: `${country.dial} ${values.phone.trim()}`,
        country: country.name,
        product: productName,
        product_slug: productSlug,
        document: doc.label,
        message: `Downloaded ${doc.label} (${productName})`,
      });
      setStatus({ state: "done", msg: "" });
      startDownload();
      setTimeout(onClose, 2200);
    } catch (e2) {
      setStatus({ state: "error", msg: e2.response?.data?.detail || "Something went wrong. Please try again." });
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      data-testid="download-gate-overlay"
    >
      <div ref={gateRef} className="w-full max-w-lg bg-background border border-black/10 shadow-2xl" data-testid="download-gate-modal">
        <div className="flex items-start justify-between border-b border-black/10 px-6 py-5">
          <div>
            <p className="font-mono uppercase text-[0.6rem] tracking-[0.3em] text-prochem-red">
              {doc.type} · {doc.size}
            </p>
            <h3 className="mt-2 font-display font-bold uppercase tracking-tighter leading-none text-2xl text-ink">
              {doc.label}
            </h3>
            <p className="mt-1 font-mono text-[0.65rem] tracking-widest text-ink/50 uppercase">{productName}</p>
          </div>
          <button onClick={onClose} data-testid="gate-close" aria-label="Close" className="text-ink/40 hover:text-prochem-red transition-colors">
            <X size={20} />
          </button>
        </div>

        {status.state === "done" ? (
          <div className="px-6 py-14 text-center" data-testid="gate-success">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-prochem-red text-white">
              <Check size={26} />
            </span>
            <p className="mt-5 font-display uppercase tracking-tight text-xl text-ink">Your download has started</p>
            <p className="mt-2 font-mono text-[0.65rem] tracking-widest text-ink/50 uppercase">
              Our team may reach out with the latest revision
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="px-6 py-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className={labelCls}>First Name *</span>
              <input className={inputCls} data-testid="gate-first-name" value={values.firstName} onChange={(e) => set("firstName", e.target.value)} placeholder="Amit" />
            </div>
            <div>
              <span className={labelCls}>Last Name *</span>
              <input className={inputCls} data-testid="gate-last-name" value={values.lastName} onChange={(e) => set("lastName", e.target.value)} placeholder="Sharma" />
            </div>
            <div className="sm:col-span-2">
              <span className={labelCls}>Business Email *</span>
              <input className={inputCls} data-testid="gate-email" type="email" value={values.email} onChange={(e) => set("email", e.target.value)} placeholder="amit@yourcompany.com" />
            </div>
            <div className="sm:col-span-2">
              <span className={labelCls}>Company Name *</span>
              <input className={inputCls} data-testid="gate-company" value={values.company} onChange={(e) => set("company", e.target.value)} placeholder="Acme Pharma Ltd." />
            </div>
            <div className="sm:col-span-2">
              <span className={labelCls}>Mobile Number *</span>
              <div className="flex">
                <div className="relative shrink-0">
                  <select
                    className={inputCls + " appearance-none pr-8 cursor-pointer border-r-0"}
                    data-testid="gate-country-select"
                    value={country.iso}
                    onChange={(e) => setCountry(COUNTRIES.find((c) => c.iso === e.target.value) || COUNTRIES[0])}
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c.iso} value={c.iso}>
                        {c.flag} {c.name} ({c.dial})
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-ink/40" />
                </div>
                <input
                  className={inputCls}
                  data-testid="gate-phone"
                  inputMode="numeric"
                  value={values.phone}
                  onChange={(e) => set("phone", e.target.value.replace(/[^\d\s-]/g, ""))}
                  placeholder="98200 12345"
                />
              </div>
              <p className="mt-1.5 font-mono text-[0.55rem] tracking-widest text-ink/40 uppercase">
                Country code auto-detected — type your local number only
              </p>
            </div>

            {status.state === "error" && (
              <p className="sm:col-span-2 font-mono text-[0.65rem] tracking-widest text-prochem-red uppercase" data-testid="gate-error">
                {status.msg}
              </p>
            )}

            <div className="sm:col-span-2 pt-1">
              <button
                type="submit"
                disabled={status.state === "sending"}
                data-testid="gate-submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-prochem-red text-white font-mono uppercase text-[0.7rem] tracking-[0.25em] px-6 py-4 hover:bg-ink transition-colors duration-300 disabled:opacity-50"
              >
                <Download size={15} />
                {status.state === "sending" ? "Preparing download…" : "Submit & Download"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
