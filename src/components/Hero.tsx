import { Link } from "react-router-dom";
import { BUSINESS_NAME, BUSINESS_PHONE_TEL, WHATSAPP_NUMBER_INTERNATIONAL } from "../config";

export function Hero() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER_INTERNATIONAL}?text=${encodeURIComponent(
    "Hello, I would like to discuss my project requirements.",
  )}`;

  return (
    <section className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
      <div className="space-y-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-200">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Growth Partner for Modern Businesses
        </span>
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Grow Your Business with Professional Websites, AI Automation & Digital Marketing
          </h1>
          <p className="max-w-xl text-sm text-slate-600 sm:text-base dark:text-slate-300">
            {BUSINESS_NAME} helps ambitious brands launch high-converting websites, automate lead generation with AI,
            and scale with data-driven digital marketing.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/contact#project-inquiry"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/40 transition hover:bg-indigo-700"
          >
            Get Free Consultation
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-emerald-500 bg-emerald-50 px-5 py-2.5 text-sm font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-100 dark:border-emerald-400/70 dark:bg-emerald-500/10 dark:text-emerald-200 dark:hover:bg-emerald-500/20"
          >
            WhatsApp Us
          </a>
          <a
            href={`tel:${BUSINESS_PHONE_TEL}`}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-indigo-500"
          >
            Call Now
          </a>
        </div>
        <dl className="grid gap-4 text-xs text-slate-600 sm:grid-cols-3 sm:text-sm dark:text-slate-300">
          <div>
            <dt className="font-semibold text-slate-900 dark:text-white">High-conversion websites</dt>
            <dd>Conversion-focused UX with clear CTAs and trust-building elements.</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900 dark:text-white">AI-powered automation</dt>
            <dd>24/7 lead capture, qualification, and customer support using AI.</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900 dark:text-white">Performance marketing</dt>
            <dd>SEO, Google Ads & social campaigns designed to deliver measurable ROI.</dd>
          </div>
        </dl>
      </div>
      <div className="relative">
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-emerald-500/10 blur-2xl" />
        <div className="relative rounded-3xl border border-slate-200/70 bg-white/80 p-5 shadow-xl shadow-indigo-500/10 backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/80">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Services Overview</p>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Full-funnel digital growth</p>
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200">
              360° Digital Partner
            </span>
          </div>
          <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
            <li className="flex justify-between">
              <span>Custom Website Development</span>
              <span className="font-semibold text-slate-900 dark:text-slate-50">WordPress, E‑commerce, Landing Pages</span>
            </li>
            <li className="flex justify-between">
              <span>Digital Marketing</span>
              <span className="font-semibold text-slate-900 dark:text-slate-50">SEO, Google Ads, Social Media</span>
            </li>
            <li className="flex justify-between">
              <span>AI Solutions</span>
              <span className="font-semibold text-slate-900 dark:text-slate-50">Chatbots, Agents, Automation</span>
            </li>
            <li className="flex justify-between">
              <span>Email Marketing</span>
              <span className="font-semibold text-slate-900 dark:text-slate-50">Campaigns, Funnels, Automation</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
