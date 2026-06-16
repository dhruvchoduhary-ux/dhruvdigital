import { BUSINESS_ADDRESS, BUSINESS_EMAIL, BUSINESS_HOURS, BUSINESS_NAME, BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_TEL, WHATSAPP_NUMBER_INTERNATIONAL } from "../config";
import { LeadForm } from "../components/LeadForm";

export function ContactPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER_INTERNATIONAL}?text=${encodeURIComponent(
    "Hello, I would like to discuss my project requirements.",
  )}`;

  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">Contact</h1>
        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          Tell us about your project, and our team will get back within 24 business hours with next steps.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start">
        <div id="project-inquiry">
          <LeadForm />
        </div>

        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">Contact Details</h2>
            <dl className="mt-3 space-y-2 text-xs text-slate-500">
              <div className="flex items-center justify-between">
                <dt className="font-medium text-slate-700 dark:text-slate-200">Phone</dt>
                <dd>
                  <a href={`tel:${BUSINESS_PHONE_TEL}`} className="text-indigo-600 hover:underline dark:text-indigo-400">
                    {BUSINESS_PHONE_DISPLAY}
                  </a>
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="font-medium text-slate-700 dark:text-slate-200">WhatsApp</dt>
                <dd>
                  <a href={whatsappUrl} className="text-emerald-600 hover:underline dark:text-emerald-400">
                    +{WHATSAPP_NUMBER_INTERNATIONAL}
                  </a>
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="font-medium text-slate-700 dark:text-slate-200">Email</dt>
                <dd>
                  <a href={`mailto:${BUSINESS_EMAIL}`} className="text-indigo-600 hover:underline dark:text-indigo-400">
                    {BUSINESS_EMAIL}
                  </a>
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="font-medium text-slate-700 dark:text-slate-200">Address</dt>
                <dd className="text-right">{BUSINESS_ADDRESS}</dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="font-medium text-slate-700 dark:text-slate-200">Business Hours</dt>
                <dd className="text-right">{BUSINESS_HOURS}</dd>
              </div>
            </dl>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100/80 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
            <iframe
              title={`${BUSINESS_NAME} Location`}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.022982540628!2d72.57136237504558!3d23.0506294150745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f6d3434e01%3A0x2a6357df0ba28090!2sAhmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="260"
              loading="lazy"
              className="border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
