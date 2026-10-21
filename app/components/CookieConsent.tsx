"use client";

import { useEffect, useState } from "react";

// Microsoft Clarity sets cookies, so it only loads after an explicit "Accept".
// Decline is as prominent as Accept (AEPD / ICO guidance). The choice is kept
// in localStorage; clearing site data brings the banner back.

const KEY = "cookie-consent";
type Choice = "granted" | "denied";

function loadClarity(id: string) {
  if (document.getElementById("ms-clarity")) return;
  const w = window as unknown as { clarity?: { (...args: unknown[]): void; q?: unknown[] } };
  w.clarity =
    w.clarity ||
    function (...args: unknown[]) {
      (w.clarity!.q = w.clarity!.q || []).push(args);
    };
  const s = document.createElement("script");
  s.id = "ms-clarity";
  s.async = true;
  s.src = `https://www.clarity.ms/tag/${id}`;
  document.head.appendChild(s);
}

export default function CookieConsent({ clarityId }: { clarityId: string }) {
  const [choice, setChoice] = useState<Choice | null | undefined>(undefined);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(KEY);
    } catch {}
    const c = stored === "granted" || stored === "denied" ? stored : null;
    setChoice(c);
    if (c === "granted") loadClarity(clarityId);
  }, [clarityId]);

  function decide(c: Choice) {
    try {
      localStorage.setItem(KEY, c);
    } catch {}
    setChoice(c);
    if (c === "granted") loadClarity(clarityId);
  }

  // undefined = not read yet (avoids a flash on first render); string = decided.
  if (choice !== null) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[#D9DEE8] bg-white/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-content flex-col gap-4 px-6 py-4 text-sm text-[#2B303B] sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl leading-relaxed">
          I&apos;d like to use Microsoft Clarity cookies to see how pages on this site are used. Nothing is set unless
          you accept.
        </p>
        <div className="flex flex-none gap-3">
          <button
            type="button"
            onClick={() => decide("denied")}
            className="min-h-[44px] rounded-md border border-[#14171F] px-5 font-semibold text-[#14171F] hover:bg-[#F3F4F7]"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => decide("granted")}
            className="min-h-[44px] rounded-md border border-[#14171F] bg-[#14171F] px-5 font-semibold text-white hover:bg-[#2B303B]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
