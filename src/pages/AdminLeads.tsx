import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";

interface Lead {
  id: number;
  created_at: string;
  full_name: string;
  company_name: string | null;
  email: string;
  phone_number: string | null;
  whatsapp_number: string | null;
  service_type: string;
  budget_range: string | null;
  project_description: string | null;
}

interface Stats {
  total: number;
  byService: { service: string; count: number }[];
  recent: Lead[];
}

export function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState<Stats | null>(null);

  async function fetchLeads() {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE_URL}/api/leads`, {
        params: { page, limit, search: search || undefined, service: service || undefined },
      });
      if (res.data?.ok) {
        setLeads(res.data.items);
        setTotal(res.data.total);
      }
    } finally {
      setLoading(false);
    }
  }

  async function fetchStats() {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/leads/stats`);
      if (res.data?.ok) {
        setStats({ total: res.data.total, byService: res.data.byService, recent: res.data.recent });
      }
    } catch {
      // ignore
    }
  }

  useEffect(() => {
    fetchLeads();
  }, [page, service]);

  useEffect(() => {
    fetchStats();
  }, []);

  const totalPages = Math.max(1, Math.ceil(total / limit));

  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">Lead Management</h1>
        <p className="max-w-3xl text-sm text-slate-600 dark:text-slate-300">
          Centralized dashboard for all incoming project inquiries submitted via the website. Use filters and search to
          quickly find specific leads.
        </p>
      </section>

      {stats && (
        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm dark:border-slate-800 dark:bg-slate-900/80">
            <p className="text-xs text-slate-500">Total leads</p>
            <p className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">{stats.total}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm dark:border-slate-800 dark:bg-slate-900/80">
            <p className="text-xs text-slate-500">Top service types</p>
            <ul className="mt-2 space-y-1 text-xs text-slate-500">
              {stats.byService.slice(0, 3).map((s) => (
                <li key={s.service}>
                  {s.service} — <span className="font-semibold text-slate-700 dark:text-slate-200">{s.count}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm dark:border-slate-800 dark:bg-slate-900/80">
            <p className="text-xs text-slate-500">Most recent</p>
            <ul className="mt-2 space-y-1 text-xs text-slate-500">
              {stats.recent.map((l) => (
                <li key={l.id}>
                  <span className="font-semibold text-slate-700 dark:text-slate-200">{l.full_name}</span> — {l.service_type}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="space-y-4">
        <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 p-3 text-sm dark:border-slate-800 dark:bg-slate-900/80">
          <input
            type="search"
            placeholder="Search by name, email, or company"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                setPage(1);
                fetchLeads();
              }
            }}
            className="min-w-[200px] flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs outline-none ring-indigo-500/0 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-950"
          />
          <select
            value={service}
            onChange={(e) => {
              setService(e.target.value);
              setPage(1);
            }}
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs outline-none ring-indigo-500/0 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-950"
          >
            <option value="">All services</option>
            <option>Website Development</option>
            <option>WordPress Website</option>
            <option>E-commerce Website</option>
            <option>Digital Marketing</option>
            <option>SEO</option>
            <option>Google Ads</option>
            <option>AI Agent Development</option>
            <option>AI Automation</option>
            <option>Email Marketing</option>
            <option>Other</option>
          </select>
          <button
            onClick={() => {
              setPage(1);
              fetchLeads();
            }}
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900"
          >
            Apply
          </button>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white/80 text-xs shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
          <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
            <thead className="bg-slate-50/80 dark:bg-slate-900/80">
              <tr className="text-[11px] uppercase tracking-wide text-slate-500">
                <th className="px-3 py-2 text-left">Name</th>
                <th className="px-3 py-2 text-left">Company</th>
                <th className="px-3 py-2 text-left">Email</th>
                <th className="px-3 py-2 text-left">Phone / WhatsApp</th>
                <th className="px-3 py-2 text-left">Service</th>
                <th className="px-3 py-2 text-left">Budget</th>
                <th className="px-3 py-2 text-left">Submitted</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {leads.map((lead) => (
                <tr key={lead.id} className="align-top">
                  <td className="px-3 py-2 font-medium text-slate-900 dark:text-slate-100">{lead.full_name}</td>
                  <td className="px-3 py-2 text-slate-600 dark:text-slate-300">{lead.company_name || "-"}</td>
                  <td className="px-3 py-2 text-slate-600 dark:text-slate-300">{lead.email}</td>
                  <td className="px-3 py-2 text-slate-600 dark:text-slate-300">
                    {lead.phone_number || "-"}
                    {lead.whatsapp_number ? ` / ${lead.whatsapp_number}` : ""}
                  </td>
                  <td className="px-3 py-2 text-slate-600 dark:text-slate-300">{lead.service_type}</td>
                  <td className="px-3 py-2 text-slate-600 dark:text-slate-300">{lead.budget_range || "-"}</td>
                  <td className="px-3 py-2 text-slate-500">
                    {new Date(lead.created_at).toLocaleString(undefined, {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </td>
                </tr>
              ))}
              {!loading && leads.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-3 py-6 text-center text-slate-500">
                    No leads found.
                  </td>
                </tr>
              )}
              {loading && (
                <tr>
                  <td colSpan={7} className="px-3 py-6 text-center text-slate-500">
                    Loading leads...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500">
          <p>
            Page {page} of {totalPages} • {total} leads
          </p>
          <div className="flex items-center gap-2">
            <button
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Previous
            </button>
            <button
              disabled={page >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
