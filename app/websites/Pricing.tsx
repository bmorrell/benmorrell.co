"use client";

import { useState } from "react";
import { ADD_ONS, CURRENCIES, INCLUDED, OFFBOARDING, PLANS, TIERS, type Currency } from "./prices";

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" className="mt-[5px] flex-none">
      <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CurrencySwitch({ value, onChange }: { value: Currency; onChange: (c: Currency) => void }) {
  return (
    <div role="group" aria-label="Currency" className="inline-flex rounded-md border border-wb-line bg-white p-1">
      {CURRENCIES.map((c) => (
        <button
          key={c}
          type="button"
          onClick={() => onChange(c)}
          aria-pressed={value === c}
          className={`min-h-[40px] rounded px-3 text-sm font-semibold transition-colors ${
            value === c ? "bg-wb-ink text-white" : "text-wb-muted hover:text-wb-ink"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}

export default function Pricing() {
  const [cur, setCur] = useState<Currency>("GBP");

  return (
    <>
      {/* Builds */}
      <section id="pricing" className="mx-auto max-w-content px-6 py-16 sm:py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-wb-blue">Website builds</p>
            <h2 className="mt-3 font-wb text-3xl font-extrabold tracking-tight sm:text-4xl">One fixed price. No templates.</h2>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-wb-body">
              Every site is designed and built for you. 50% deposit to begin, 50% before go-live.
            </p>
          </div>
          <CurrencySwitch value={cur} onChange={setCur} />
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {TIERS.map((t) => (
            <article key={t.id} className="flex flex-col rounded-lg border border-wb-line bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-wb-blue">{t.label} · Custom build</p>
              <h3 className="mt-2 font-wb text-2xl font-bold">{t.name}</h3>
              <p className="mt-3 font-wb text-4xl font-extrabold tracking-tight">
                {t.from && <span className="mr-1 text-lg font-semibold tracking-normal">from</span>}
                {t.price[cur]}
              </p>
              <p className="mt-1 text-sm text-wb-muted">{t.timeline}</p>
              <p className="mt-5 leading-relaxed">{t.summary}</p>
              <ul className="mt-5 space-y-2 text-[15px] text-wb-body">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2 text-wb-blue">
                    <Check />
                    <span className="text-wb-body">{f}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-lg bg-wb-tint p-7">
          <h3 className="font-wb text-xl font-bold">Every custom build includes</h3>
          <ul className="mt-4 grid gap-x-8 gap-y-2 text-[15px] sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map((f) => (
              <li key={f} className="flex gap-2 text-wb-blue">
                <Check />
                <span className="text-wb-ink">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-wb-muted">
          You buy and own your domain; I set it up. Not included: social media setup, paid ads, email hosting.
          Prices are for businesses and exclude any VAT or IVA that applies.
        </p>
      </section>

      {/* Hosting & care */}
      <section id="care" className="border-y border-wb-line bg-white">
        <div className="mx-auto max-w-content px-6 py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-wb-blue">Hosting and care</p>
          <h2 className="mt-3 font-wb text-3xl font-extrabold tracking-tight sm:text-4xl">Looked after, every year.</h2>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-wb-body">
            Every site is hosted on fast, reliable, industry-standard platforms. Pick the level of looking-after you
            want. Billed yearly upfront, 12-month term.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {PLANS.map((p) => (
              <article
                key={p.name}
                className={`flex flex-col rounded-lg p-7 ${
                  p.recommended ? "border-2 border-wb-blue bg-[#F6F8FF]" : "border border-wb-line"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-wb text-2xl font-bold">{p.name}</h3>
                  {p.recommended && (
                    <span className="rounded bg-wb-blue px-2 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-white">
                      Recommended
                    </span>
                  )}
                </div>
                <p className="mt-3 flex items-baseline gap-2">
                  <span className="font-wb text-4xl font-extrabold tracking-tight">{p.monthly[cur]}</span>
                  <span className="text-wb-muted">/ month · {p.yearly[cur]} a year</span>
                </p>
                <ul className="mt-5 space-y-2 text-[15px]">
                  {p.features.map((f, i) => (
                    <li key={f} className="flex gap-2 text-wb-blue">
                      <Check />
                      <span className={`text-wb-ink ${p.recommended && i === 0 ? "font-semibold" : ""}`}>{f}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <h3 className="mt-14 font-wb text-2xl font-bold">Add-ons</h3>
          <ul className="mt-4 divide-y divide-wb-line border-y border-wb-line">
            {ADD_ONS.map((a) => (
              <li key={a.name} className="flex items-start justify-between gap-6 py-4">
                <div>
                  <p className="font-semibold">
                    {a.name}
                    {a.note && <span className="font-normal text-wb-muted"> ({a.note})</span>}
                  </p>
                  <p className="mt-1 text-sm text-wb-muted">{a.detail}</p>
                </div>
                <p className="whitespace-nowrap font-semibold">{a.price[cur]}</p>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-wb-muted">
            <strong className="font-semibold text-wb-ink">Moving on?</strong> Your site is yours. Off-boarding is{" "}
            {OFFBOARDING[cur]}: I hand over the code, notes and DNS guidance, plus a 30-minute call.
          </p>
        </div>
      </section>
    </>
  );
}
