import { Hero } from "../components/Hero";
import { LeadForm } from "../components/LeadForm";

export function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />

      <section className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Services that cover your entire growth journey</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Custom Website Development</h3>
              <p className="mt-1 text-xs text-slate-500">
                WordPress, e-commerce, business and portfolio websites, landing pages, and custom web apps built for performance and conversions.
              </p>
              <ul className="mt-3 space-y-1 text-xs text-slate-500">
                <li>• WordPress & headless CMS</li>
                <li>• E-commerce & payment integrations</li>
                <li>• High-conversion landing pages</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Digital Marketing</h3>
              <p className="mt-1 text-xs text-slate-500">
                SEO, Google Ads, and social media marketing with clear KPIs, monthly reporting, and ROI tracking.
              </p>
              <ul className="mt-3 space-y-1 text-xs text-slate-500">
                <li>• SEO & content strategy</li>
                <li>• Google Ads & remarketing</li>
                <li>• Facebook & Instagram campaigns</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">AI Solutions</h3>
              <p className="mt-1 text-xs text-slate-500">
                AI chatbots, agents, and automation for lead qualification, customer support, and business workflows.
              </p>
              <ul className="mt-3 space-y-1 text-xs text-slate-500">
                <li>• AI chatbots & virtual agents</li>
                <li>• Lead qualification & routing</li>
                <li>• Process automation workflows</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Email Marketing</h3>
              <p className="mt-1 text-xs text-slate-500">
                Campaign setup, newsletters, and automated funnels to nurture and convert leads.
              </p>
              <ul className="mt-3 space-y-1 text-xs text-slate-500">
                <li>• Welcome & onboarding sequences</li>
                <li>• Lead nurturing & reactivation</li>
                <li>• Performance reporting & optimization</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="project-inquiry">
          <LeadForm />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Why brands choose us</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4 text-sm text-emerald-800 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-100">
            <h3 className="text-sm font-semibold">Premium, conversion-first design</h3>
            <p className="mt-1 text-xs">
              Clear messaging, modern UI, and strategic CTAs designed to turn visitors into leads and customers.
            </p>
          </div>
          <div className="rounded-2xl border border-sky-200 bg-sky-50/80 p-4 text-sm text-sky-900 dark:border-sky-500/40 dark:bg-sky-500/10 dark:text-sky-100">
            <h3 className="text-sm font-semibold">Technical excellence & performance</h3>
            <p className="mt-1 text-xs">
              Fast-loading, SEO-ready websites built on modern stacks with analytics and tracking baked in.
            </p>
          </div>
          <div className="rounded-2xl border border-violet-200 bg-violet-50/80 p-4 text-sm text-violet-900 dark:border-violet-500/40 dark:bg-violet-500/10 dark:text-violet-100">
            <h3 className="text-sm font-semibold">End-to-end growth partner</h3>
            <p className="mt-1 text-xs">
              From strategy and design to AI automation, marketing, and ongoing optimization — everything under one roof.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Client success stories</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm dark:border-slate-800 dark:bg-slate-900/80">
            <p className="text-xs text-slate-500">E-commerce brand</p>
            <p className="text-sm font-medium">
              "Our new store and performance marketing funnel 3x’d monthly revenue within 6 months. The team is proactive and data-driven."
            </p>
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">+210% increase in online revenue</p>
          </div>
          <div className="space-y-3 rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm dark:border-slate-800 dark:bg-slate-900/80">
            <p className="text-xs text-slate-500">B2B services</p>
            <p className="text-sm font-medium">
              "AI lead qualification and email automation helped us respond faster and close more deals without increasing headcount."
            </p>
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">40% more qualified leads per month</p>
          </div>
          <div className="space-y-3 rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm dark:border-slate-800 dark:bg-slate-900/80">
            <p className="text-xs text-slate-500">Professional services</p>
            <p className="text-sm font-medium">
              "Our website, SEO, and paid ads now work together as one growth engine. Reporting is clear and actionable."
            </p>
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">+125% growth in inquiries YoY</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Frequently asked questions</h2>
        <div className="space-y-3 text-sm">
          <details className="rounded-2xl border border-slate-200 bg-white/80 p-3 dark:border-slate-800 dark:bg-slate-900/80">
            <summary className="cursor-pointer text-sm font-medium text-slate-800 dark:text-slate-100">
              How long does it take to launch a new website?
            </summary>
            <p className="mt-2 text-xs text-slate-500">
              Timelines vary based on scope, but most business and portfolio websites launch within 3–6 weeks. Complex e-commerce and custom web apps can take longer. We’ll share a detailed delivery plan before starting.
            </p>
          </details>
          <details className="rounded-2xl border border-slate-200 bg-white/80 p-3 dark:border-slate-800 dark:bg-slate-900/80">
            <summary className="cursor-pointer text-sm font-medium text-slate-800 dark:text-slate-100">
              Do you only work with local clients?
            </summary>
            <p className="mt-2 text-xs text-slate-500">
              We work with clients across India and globally. All communication can be handled over Zoom, WhatsApp, and email.
            </p>
          </details>
          <details className="rounded-2xl border border-slate-200 bg-white/80 p-3 dark:border-slate-800 dark:bg-slate-900/80">
            <summary className="cursor-pointer text-sm font-medium text-slate-800 dark:text-slate-100">
              Can you manage everything end-to-end?
            </summary>
            <p className="mt-2 text-xs text-slate-500">
              Yes. We can handle strategy, design, development, hosting guidance, analytics, SEO, paid campaigns, AI automation, and ongoing optimization as a single partner.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}
