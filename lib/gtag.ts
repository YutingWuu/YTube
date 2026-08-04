export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-GJCZ6ZDQ22";

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: "config" | "event" | "js",
      targetIdOrName: string | Date,
      params?: EventParams,
    ) => void;
  }
}

export function isGaEnabled() {
  return GA_MEASUREMENT_ID.length > 0;
}

export function trackPageView(url: string) {
  if (!isGaEnabled() || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

export function trackEvent(action: string, params: EventParams = {}) {
  if (!isGaEnabled() || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", action, params);
}
