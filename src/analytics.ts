import { GOOGLE_ANALYTICS_ID } from "./config";

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}


let initialized = false;

export function initAnalytics() {
  if (!GOOGLE_ANALYTICS_ID || typeof window === "undefined" || initialized) return;
  initialized = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.dataLayer.push(args);
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", GOOGLE_ANALYTICS_ID, { send_page_view: false });
}

export function trackPageView(path: string) {
  if (!GOOGLE_ANALYTICS_ID || typeof window === "undefined") return;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (typeof window.gtag === "function") {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.gtag("config", GOOGLE_ANALYTICS_ID, { page_path: path });
  }
}
