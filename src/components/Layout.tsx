import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { BUSINESS_NAME, BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_TEL, WHATSAPP_NUMBER_INTERNATIONAL, BUSINESS_EMAIL } from "../config";
import { useTheme } from "../theme";

function navLinkClass({ isActive }: { isActive: boolean }) {
  return (
    "px-3 py-2 text-sm font-medium rounded-full transition-colors " +
    (isActive
      ? "bg-indigo-600 text-white shadow-sm"
      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800")
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
    >
      {theme === "dark" ? (
        <span className="text-lg">☀️</span>
      ) : (
        <span className="text-lg">🌙</span>
      )}
    </button>
  );
}

function FloatingActions() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER_INTERNATIONAL}?text=${encodeURIComponent(
    "Hello, I would like to discuss my project requirements.",
  )}`;

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-600"
      >
        <span>WhatsApp</span>
      </a>
      <a
        href={`tel:${BUSINESS_PHONE_TEL}`}
        className="flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/40 transition hover:bg-indigo-700"
      >
        <span>Call</span>
      </a>
    </div>
  );
}

export function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-50">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-md">
              <span className="text-lg font-bold">D</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight sm:text-base">{BUSINESS_NAME}</span>
              <span className="text-[11px] text-slate-500 sm:text-xs">Websites · AI Automation · Marketing</span>
            </div>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/portfolio" className={navLinkClass}>
              Portfolio
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
            <NavLink to="/admin/leads" className={navLinkClass}>
              Leads
            </NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${BUSINESS_PHONE_TEL}`}
              className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 md:inline-flex"
            >
              <span className="hidden sm:inline">Call:</span>
              <span>{BUSINESS_PHONE_DISPLAY}</span>
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:pt-10">
        <Outlet key={location.pathname} />
      </main>

      <footer className="border-t border-slate-200 bg-white/80 py-6 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row">
          <p>
            
            <span className="font-semibold">{BUSINESS_NAME}</span> 
            
            · Professional Websites, AI Automation & Digital Marketing
          </p>
          <p>
            Email: <a href={`mailto:${BUSINESS_EMAIL}`} className="text-indigo-600 hover:underline dark:text-indigo-400">{BUSINESS_EMAIL}</a>
          </p>
        </div>
      </footer>

      <FloatingActions />
    </div>
  );
}
