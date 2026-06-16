import { FormEvent, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";

const SERVICES = [
  "Website Development",
  "WordPress Website",
  "E-commerce Website",
  "Digital Marketing",
  "SEO",
  "Google Ads",
  "AI Agent Development",
  "AI Automation",
  "Email Marketing",
  "Other",
];

const BUDGETS = [
  "Below $500",
  "$500 - $1,000",
  "$1,000 - $3,000",
  "$3,000 - $5,000",
  "$5,000+",
];

export function LeadForm() {
  const [formState, setFormState] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    whatsappNumber: "",
    serviceType: "",
    budgetRange: "",
    projectDescription: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);
    setError(null);

    try {
      const res = await axios.post(`${API_BASE_URL}/api/leads`, formState, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.data?.ok) {
        setMessage("Thank you! Your project inquiry has been submitted successfully.");
        setFormState({
          fullName: "",
          companyName: "",
          email: "",
          phoneNumber: "",
          whatsappNumber: "",
          serviceType: "",
          budgetRange: "",
          projectDescription: "",
        });
      } else {
        setError(res.data?.message || "Something went wrong. Please try again.");
      }
    } catch (err: any) {
      const fallback = err?.response?.data?.message || "Unable to submit the form. Please try again.";
      setError(fallback);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-md shadow-slate-200/60 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-black/40"
    >
      <div className="space-y-1">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Project Inquiry</h2>
        <p className="text-xs text-slate-500">
          Share a few details about your project and we’ll get back within 24 business hours.
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-700 dark:text-slate-200">Full Name *</label>
          <input
            required
            type="text"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-indigo-500/0 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-950"
            value={formState.fullName}
            onChange={(e) => setFormState((s) => ({ ...s, fullName: e.target.value }))}
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-700 dark:text-slate-200">Company Name</label>
          <input
            type="text"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-indigo-500/0 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-950"
            value={formState.companyName}
            onChange={(e) => setFormState((s) => ({ ...s, companyName: e.target.value }))}
          />
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-700 dark:text-slate-200">Email *</label>
          <input
            required
            type="email"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-indigo-500/0 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-950"
            value={formState.email}
            onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-700 dark:text-slate-200">Phone Number</label>
            <input
              type="tel"
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-indigo-500/0 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-950"
              value={formState.phoneNumber}
              onChange={(e) => setFormState((s) => ({ ...s, phoneNumber: e.target.value }))}
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-700 dark:text-slate-200">WhatsApp Number</label>
            <input
              type="tel"
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-indigo-500/0 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-950"
              value={formState.whatsappNumber}
              onChange={(e) => setFormState((s) => ({ ...s, whatsappNumber: e.target.value }))}
            />
          </div>
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-700 dark:text-slate-200">Type of Service Required *</label>
          <select
            required
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-indigo-500/0 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-950"
            value={formState.serviceType}
            onChange={(e) => setFormState((s) => ({ ...s, serviceType: e.target.value }))}
          >
            <option value="">Select an option</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-700 dark:text-slate-200">Budget Range</label>
          <select
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-indigo-500/0 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-950"
            value={formState.budgetRange}
            onChange={(e) => setFormState((s) => ({ ...s, budgetRange: e.target.value }))}
          >
            <option value="">Select budget</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="space-y-1">
        <label className="text-xs font-medium text-slate-700 dark:text-slate-200">Project Description</label>
        <textarea
          rows={4}
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-indigo-500/0 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-950"
          value={formState.projectDescription}
          onChange={(e) => setFormState((s) => ({ ...s, projectDescription: e.target.value }))}
          placeholder="Share your goals, timelines, and any specific requirements."
        />
      </div>
      {message && <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400">{message}</p>}
      {error && <p className="text-xs font-medium text-rose-600 dark:text-rose-400">{error}</p>}
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-500/40 transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? "Submitting..." : "Submit Project Inquiry"}
      </button>
      <p className="text-[11px] text-slate-400">
        By submitting this form, you agree to be contacted by our team regarding your project inquiry.
      </p>
    </form>
  );
}
