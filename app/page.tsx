import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import headshot from "@/public/headshot.png";

// The root is a router, not a pitch. It says who Ben is in neutral terms and lets
// the visitor choose their track: commercial (A), building (B), or mission (C).

export const metadata: Metadata = {
  title: "Ben Morrell",
  description: "Technology and commercial leader. Engineer by training, and still building.",
  robots: { index: false, follow: false },
};

const DOORS = [
  {
    href: "/commercial",
    eyebrow: "Commercial",
    title: "Partnerships, GTM and revenue leadership",
    body: "Building partner ecosystems and scaling revenue in B2B SaaS and infrastructure. Brightcove, Livepeer, Encoding.com, Roche.",
    cta: "See the commercial track",
  },
  {
    href: "/mission",
    eyebrow: "Mission",
    title: "Technology for mission-driven organisations",
    body: "Turning technology into things that actually run in the field, for organisations whose work is measured in outcomes rather than ARR.",
    cta: "See the mission track",
  },
  {
    href: "/building",
    eyebrow: "Building",
    title: "What I build, hands on",
    body: "LLM agents on the Claude API, a remote MCP context server, automation and monitoring dashboards. Shipped and running, not slideware.",
    cta: "See what I build",
  },
];

const PROOF = [
  { value: "18+ yrs", label: "engineering, delivery and commercial leadership" },
  { value: "15+", label: "countries lived in, worked in and delivered across" },
  { value: "Beijing 2008", label: "Olympics broadcast, sole design and delivery" },
];

export default function StartPage() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-rule">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
          <Link href="/" className="font-serif text-lg font-semibold tracking-tight">
            Ben Morrell
          </Link>
          <a href="#contact" className="text-sm text-slate hover:text-ink">
            Get in touch
          </a>
        </div>
      </header>

      {/* Hero: neutral. Says who he is, claims no single lane. */}
      <section className="mx-auto max-w-content px-6 pb-16 pt-16 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="eyebrow text-accent">Ben Morrell</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              I have spent 18 years making technology work, and I still build it myself.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">
              Engineer by training, commercial leader by trade. I have run field deployments in hard
              places, led teams across three continents, and I ship production software today.
            </p>
            <p className="mt-4 text-sm text-slate">
              Open to new roles. Fully remote, from Valencia, Spain.
            </p>
          </div>

          <div className="mx-auto w-full max-w-xs">
            <div className="relative aspect-square overflow-hidden rounded-full border border-rule">
              <Image
                src={headshot}
                alt="Ben Morrell"
                fill
                priority
                sizes="(min-width: 1024px) 320px, 60vw"
                className="object-cover"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Neutral proof. Deliberately not ARR-led, so it reads the same to both audiences. */}
      <section className="border-y border-rule bg-surface">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-3">
          {PROOF.map((m) => (
            <div key={m.label}>
              <p className="font-serif text-3xl font-semibold text-accent">{m.value}</p>
              <p className="mt-1 text-sm leading-snug text-slate">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The router itself. */}
      <section className="mx-auto max-w-content px-6 py-20">
        <p className="eyebrow text-accent">Depending on why you are here</p>
        <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold leading-tight tracking-tight">
          Three ways into the same career.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {DOORS.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className="group flex flex-col rounded-2xl border border-rule bg-surface p-6 transition-colors hover:border-accent"
            >
              <p className="eyebrow text-accent">{d.eyebrow}</p>
              <h3 className="mt-3 font-serif text-xl font-semibold leading-snug">{d.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">{d.body}</p>
              <span className="mt-5 text-sm font-medium text-ink group-hover:text-accent">
                {d.cta} &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-rule bg-surface">
        <div className="mx-auto flex max-w-content flex-col gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-serif text-3xl font-semibold tracking-tight">Let&apos;s talk.</h2>
            <p className="mt-2 text-sm text-slate">
              Easiest by email, or find me on LinkedIn.
            </p>
          </div>
          <a
            href="mailto:hello@benmorrell.co"
            className="inline-flex flex-none items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent-strong"
          >
            hello@benmorrell.co
          </a>
        </div>
      </section>

      <footer className="border-t border-rule">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-8 text-sm text-slate">
          <span className="font-serif text-base text-ink">Ben Morrell</span>
          <a href="https://linkedin.com/in/morrellbc" className="hover:text-ink">
            linkedin.com/in/morrellbc
          </a>
        </div>
      </footer>
    </main>
  );
}
