export function PortfolioPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">Portfolio</h1>
        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          A selection of projects where we’ve combined strategy, design, development, and marketing to deliver
          measurable results.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
          <div className="h-40 bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-500" />
          <div className="space-y-3 p-4 text-sm">
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">D2C Lifestyle Brand</h2>
            <p className="text-xs text-slate-500">
              Full e-commerce redesign, performance marketing, and email automation strategy.
            </p>
            <ul className="space-y-1 text-xs text-slate-500">
              <li>• +210% increase in online revenue</li>
              <li>• 3.4x ROAS on Google Ads</li>
              <li>• 25% of revenue from email flows</li>
            </ul>
          </div>
        </article>
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
          <div className="h-40 bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500" />
          <div className="space-y-3 p-4 text-sm">
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">B2B SaaS</h2>
            <p className="text-xs text-slate-500">
              Website revamp, product storytelling, and always-on demand generation engine.
            </p>
            <ul className="space-y-1 text-xs text-slate-500">
              <li>• 3x more demo requests</li>
              <li>• 40% lift in organic sign-ups</li>
              <li>• AI chatbot for product Q&A</li>
            </ul>
          </div>
        </article>
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
          <div className="h-40 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-rose-500" />
          <div className="space-y-3 p-4 text-sm">
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">Professional Services Firm</h2>
            <p className="text-xs text-slate-500">
              New brand website, SEO, local search optimization, and marketing automation.
            </p>
            <ul className="space-y-1 text-xs text-slate-500">
              <li>• +125% YoY growth in inquiries</li>
              <li>• 60% of leads from organic & local search</li>
              <li>• Automated lead nurturing sequences</li>
            </ul>
          </div>
        </article>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">What our clients say</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <blockquote className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm dark:border-slate-800 dark:bg-slate-900/80">
            <p className="text-xs text-slate-500">
              “The team at Dhruv Digital Solutions doesn’t just execute tasks — they think strategically about growth.
              Our new website and campaigns paid for themselves within months.”
            </p>
            <p className="mt-2 text-xs font-semibold text-slate-700 dark:text-slate-200">Founder, D2C brand</p>
          </blockquote>
          <blockquote className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm dark:border-slate-800 dark:bg-slate-900/80">
            <p className="text-xs text-slate-500">
              “Their AI automation work has completely changed how we handle incoming leads and support. We now respond
              in minutes, not hours.”
            </p>
            <p className="mt-2 text-xs font-semibold text-slate-700 dark:text-slate-200">COO, B2B SaaS</p>
          </blockquote>
          <blockquote className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm dark:border-slate-800 dark:bg-slate-900/80">
            <p className="text-xs text-slate-500">
              “Clear communication, strong execution, and a genuine focus on ROI — exactly what we needed in a digital
              partner.”
            </p>
            <p className="mt-2 text-xs font-semibold text-slate-700 dark:text-slate-200">Managing Partner, consulting firm</p>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
