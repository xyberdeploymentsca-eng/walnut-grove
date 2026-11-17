/** @format */

"use client";

// Sends four GA4 events through the gtag that is already on the site (G-NXGBNEFDBS):
//   phone_click        any tel: link (and the floating phone button)
//   appointment_click  "Schedule Appointment" / "Request Appointment" links and buttons
//   directions_click   links to Google Maps
//   email_click        mailto: links
// Only two parameters are ever sent: link_location (header, hero, footer or body) and page_path.
// No phone number, email address, link text or anything about the visitor is sent.

import { useEffect } from "react";

type EventName = "phone_click" | "appointment_click" | "directions_click" | "email_click";

const APPOINTMENT_TEXT = /\b(schedule|request)\s+(an\s+)?appointment\b/i;
const MAPS_LINK = /^https?:\/\/((www\.|maps\.)?google\.[a-z.]+\/maps|maps\.google\.[a-z.]+|maps\.app\.goo\.gl|goo\.gl\/maps)/i;
const APPOINTMENT_FORM = /^https?:\/\/docs\.google\.com\/forms\//i;

const eventFor = (el: Element): EventName | null => {
  const marked = el.closest("[data-track]")?.getAttribute("data-track");
  if (marked === "phone_click" || marked === "appointment_click" || marked === "directions_click" || marked === "email_click") {
    return marked;
  }
  const link = el.closest("a");
  const href = link?.getAttribute("href") || "";
  if (/^tel:/i.test(href)) return "phone_click";
  if (/^mailto:/i.test(href)) return "email_click";
  if (MAPS_LINK.test(href)) return "directions_click";
  if (APPOINTMENT_FORM.test(href)) return "appointment_click";
  const control = el.closest("a, button, [role='button']");
  if (control && APPOINTMENT_TEXT.test(control.textContent || "")) return "appointment_click";
  return null;
};

const locationOf = (el: Element): "header" | "hero" | "footer" | "body" => {
  const marked = el.closest("[data-link-location]")?.getAttribute("data-link-location");
  if (marked === "header" || marked === "hero" || marked === "footer") return marked;
  if (el.closest("header")) return "header";
  if (el.closest("footer")) return "footer";
  return "body";
};

export const AnalyticsEvents = () => {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      const name = eventFor(target);
      if (!name) return;
      const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
      if (typeof gtag !== "function") return;
      gtag("event", name, { link_location: locationOf(target), page_path: window.location.pathname });
    };
    // capture phase: the click is counted even when a handler further down stops it from bubbling
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
};
