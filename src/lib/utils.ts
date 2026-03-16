import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

declare global { interface Window { dataLayer: Record<string, unknown>[]; } }

export function trackEvent(event: string, params?: Record<string, string>) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
