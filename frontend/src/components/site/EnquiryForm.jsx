import { useState } from "react";
import { Send, Check } from "lucide-react";
import { CONTACT } from "@/lib/site-data";
import api from "@/lib/api";

const inputCls =
  "w-full bg-white border border-white/20 px-4 py-3 font-mono text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:border-prochem-red transition-colors";

const labelCls = "font-mono uppercase text-[0.65rem] tracking-[0.25em] text-white/60 mb-2 block";

function inferType(subject = "") {
  const s = subject.toLowerCase();
  if (s.includes("rfq") || s.startsWith("product")) return "product_rfq";
  if (s.includes("spare")) return "spare_parts";
  if (s.includes("consultation") || s.includes("technical")) return "consultation";
  if (s.includes("export") || s.includes("global")) return "export";
  if (s.includes("company profile") || s.includes("about")) return "company_profile";
  return "contact";
}

/**
 * Reusable page-specific enquiry form. Submits by opening a pre-filled
 * mailto: to CONTACT.email. No backend writes.
 *
 * Props:
 *   testid: string
 *   index: number   -> section (NN) kicker
 *   kicker: string  -> section kicker label
 *   title: node
 *   description: string
 *   subject: string  -> mailto subject prefix
 *   fields: [{ name, label, placeholder?, type?, required?, options?, colspan? }]
 */
export default function EnquiryForm({
  testid,
  index,
  kicker,
  title,
  description,
  subject,
  fields,
  submitLabel = "Send Enquiry",
}) {
  const initial = Object.fromEntries(fields.map((f) => [f.name, f.defaultValue || ""]));
  const [values, setValues] = useState(initial);
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  const set = (n, v) => setValues((s) => ({ ...s, [n]: v }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "sending", msg: "" });
    const payload = {
      type: inferType(subject),
      subject,
      source_page: typeof window !== "undefined" ? window.location.pathname : "",
      name: values.name,
      company: values.company,
      email: values.email,
      phone: values.phone,
      country: values.country,
      message: values.message,
      product: values.product,
      product_slug: undefined,
      category: values.category,
      ...values,
    };
    try {
      await api.post("/enquiries", payload);
      setStatus({ state: "sent", msg: "Thanks — we've received your enquiry. We'll be in touch shortly." });
      setValues(initial);
    } catch (err) {
      // fallback to mailto so the lead is never lost
      const lines = fields.filter((f) => f.name !== "message").map((f) => `${f.label}: ${values[f.name] || "-"}`);
      const body = `Enquiry: ${subject}\n\n${lines.join("\n")}${values.message ? `\n\nMessage:\n${values.message}\n` : "\n"}`;
      const finalSubject = `${subject}${values.company ? ` · ${values.company}` : ""}`;
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(finalSubject)}&body=${encodeURIComponent(body)}`;
    }
  };

  return (
    <section className="bg-ink text-white" data-testid={testid}>
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-16 md:py-24">
        <div className="mb-10 md:mb-14">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono uppercase text-[0.65rem] tracking-[0.3em] text-white/40">
              ({String(index).padStart(2, "0")}) {kicker}
            </span>
            <span className="h-px flex-1 bg-white/15" />
          </div>
          <h2 className="font-display font-bold uppercase tracking-tighter leading-[0.9] text-3xl md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-6 max-w-2xl text-white/60 text-lg">{description}</p>
          )}
        </div>

        <form
          data-testid={`${testid}-form`}
          onSubmit={onSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl"
        >
          {fields.map((f) => {
            const cs = f.colspan === 2 ? "md:col-span-2" : "";
            const testId = `${testid}-${f.name}`;
            if (f.type === "select") {
              return (
                <div key={f.name} className={cs}>
                  <span className={labelCls}>{f.label}</span>
                  <select
                    required={f.required}
                    data-testid={testId}
                    className={inputCls}
                    value={values[f.name]}
                    onChange={(e) => set(f.name, e.target.value)}
                  >
                    <option value="">{f.placeholder || `Select ${f.label}`}</option>
                    {f.options.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
              );
            }
            if (f.type === "textarea") {
              return (
                <div key={f.name} className={cs || "md:col-span-2"}>
                  <span className={labelCls}>{f.label}</span>
                  <textarea
                    required={f.required}
                    data-testid={testId}
                    rows={5}
                    placeholder={f.placeholder}
                    className={`${inputCls} resize-none`}
                    value={values[f.name]}
                    onChange={(e) => set(f.name, e.target.value)}
                  />
                </div>
              );
            }
            return (
              <div key={f.name} className={cs}>
                <span className={labelCls}>{f.label}</span>
                <input
                  required={f.required}
                  type={f.type || "text"}
                  data-testid={testId}
                  placeholder={f.placeholder}
                  className={inputCls}
                  value={values[f.name]}
                  onChange={(e) => set(f.name, e.target.value)}
                />
              </div>
            );
          })}
          <div className="md:col-span-2 flex items-center gap-4 flex-wrap">
            <button
              type="submit"
              disabled={status.state === "sending"}
              data-testid={`${testid}-submit`}
              className="group inline-flex items-center gap-3 bg-prochem-red text-white pl-6 pr-5 py-3.5 font-mono uppercase text-xs tracking-[0.15em] hover:bg-white hover:text-ink transition-colors disabled:opacity-50"
            >
              {status.state === "sending" ? "Sending…" : submitLabel}
              {status.state === "sent" ? <Check size={14} /> : <Send size={14} className="transition-transform group-hover:translate-x-0.5" />}
            </button>
            {status.state === "sent" && (
              <span data-testid={`${testid}-success`} className="font-mono uppercase text-[0.65rem] tracking-widest text-green-400">
                {status.msg}
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
