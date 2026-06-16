import { BUSINESS_NAME, BUSINESS_ADDRESS, BUSINESS_HOURS } from "../config";

export function AboutPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">About Us</h1>
        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          {BUSINESS_NAME} is a digital growth partner for modern businesses. We blend strategy, design, technology, and
          performance marketing to help you acquire, nurture, and retain customers.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
          <p>
            We believe that a high-performing digital presence is more than just a beautiful website. It’s a system that
            combines your positioning, messaging, user experience, data, and automation into a single growth engine.
          </p>
          <p>
            Our team brings together specialists across custom development, UX/UI, marketing strategy, paid media, SEO,
            and AI automation.
          </p>
          <p>
            Whether you’re a founder launching your first product or an established brand looking to modernize your
            digital stack, we work alongside you as an extension of your team.
          </p>
        </div>
        <div className="space-y-3 rounded-2xl border border-slate-200 bg-white/80 p-5 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white">At a glance</h2>
          <dl className="mt-2 space-y-2 text-xs text-slate-500">
            <div className="flex items-start justify-between gap-4">
              <dt className="font-medium text-slate-700 dark:text-slate-200">Location</dt>
              <dd>{BUSINESS_ADDRESS}</dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="font-medium text-slate-700 dark:text-slate-200">Focus areas</dt>
              <dd className="text-right">
                Websites, AI automation, SEO, performance marketing, and email funnels for B2B, D2C, and services
                brands.
              </dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="font-medium text-slate-700 dark:text-slate-200">Engagement model</dt>
              <dd className="text-right">Project-based or ongoing retainers with clear goals and monthly reporting.</dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="font-medium text-slate-700 dark:text-slate-200">Availability</dt>
              <dd className="text-right">{BUSINESS_HOURS}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Our approach</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-xs text-slate-600 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">1. Discover</h3>
            <p className="mt-1">
              Deep dive into your business, audience, and goals. We align on success metrics and priorities before
              touching design or code.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-xs text-slate-600 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">2. Design & Build</h3>
            <p className="mt-1">
              We translate strategy into experiences — UX flows, UI, content, and development — with fast feedback loops.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-xs text-slate-600 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">3. Launch & Grow</h3>
            <p className="mt-1">
              We launch, measure, and optimize. Ongoing experiments across SEO, ads, email, and AI automation keep your
              growth engine improving.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
