import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import headshot from "@/public/headshot.png";

export const metadata: Metadata = {
  title: "Ben Morrell · Technology & partnerships for the mission",
  description:
    "Technology, partnerships and applied AI put to work for mission-driven organisations. Big-tech partnerships, digital transformation, and responsible AI, built and shipped hands-on.",
};

const mailto = `mailto:hello@benmorrell.co?subject=${encodeURIComponent(
  "Social-sector / mission work",
)}`;

const capabilities = [
  {
    title: "Technology & corporate partnerships",
    body: "Turn relationships with the major technology providers (Microsoft, Google, AWS-class) and their donated or discounted technology into solutions that are actually deployed, not just credits that go unused. I build and run these partnerships end to end, and I speak both the partner's language and the mission's.",
  },
  {
    title: "Digital transformation that lands",
    body: "Translate mission and programme needs into working systems, and lead the change across complex, multi-country organisations. I've spent my career delivering under real-world constraint (borders, bandwidth, time zones, live deadlines), which is the environment this work really happens in.",
  },
  {
    title: "Applied AI, built not just advised",
    body: "I ship production AI myself: LLM agents, retrieval and context systems, MCP servers, and automation for operations and fundraising. That means practical, governed AI grounded in responsible-AI principles, rather than strategy decks and stalled pilots.",
  },
  {
    title: "Fundraising & operations systems",
    body: "Bring commercial-grade discipline to donor and revenue operations: CRM and pipeline systems, scoring, forecasting and reporting, the operational maturity that lets AI actually pay off.",
  },
];

const proof = [
  "Public health: built the Roche Diagnostics partnership that drove multiple NHS sales and a 10-year deal with a Netherlands hospital group (OLVG).",
  "Public-service institutions: delivered platform accounts with the BBC, ITV and Sky.",
  "Delivery under pressure: solely designed and delivered a national broadcaster's entire digital presence for the Beijing 2008 Olympics.",
  "Scale & teams: built and led a 20+ person team across 15+ countries; grew a region to ~$11.5M.",
  "Building now: a live portfolio of shipped AI tooling, agents, an MCP context server, an AI research agent, automation and dashboards.",
];

const waysToWork = [
  {
    title: "Fractional / part-time leadership",
    body: "A standing technology, partnerships or applied-AI leadership seat, a few days a week.",
  },
  {
    title: "Advisory",
    body: "Help shaping a digital, partnerships or AI strategy, then staying to make it real.",
  },
  {
    title: "Build engagements",
    body: "Scoped AI or systems delivery, from pilot to something running in production.",
  },
];

export default function SocialSectorPage() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-rule/70 bg-paper/85 backdrop-blur">
        <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
          <Link href="/" className="font-serif text-lg font-semibold tracking-tight">
            Ben Morrell
          </Link>
          <Link href="/" className="text-sm text-slate hover:text-ink">
            benmorrell.co
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-content px-6 pb-16 pt-16 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="eyebrow text-accent">For mission-driven organisations</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              Technology, partnerships and AI, put to work for the mission.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">
              I help mission-driven organisations turn technology into things that actually run in
              the field: partnerships with the big technology providers, digital transformation that
              lands, and applied AI I build and ship myself, responsibly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={mailto}
                className="rounded-md bg-accent px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent-strong"
              >
                Let&apos;s talk
              </a>
              <a
                href="#how"
                className="rounded-md border border-ink px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                See how I work
              </a>
            </div>
          </div>

          {/* Headshot */}
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

      {/* Positioning */}
      <section className="border-y border-rule bg-surface">
        <div className="mx-auto max-w-content px-6 py-16">
          <p className="eyebrow text-accent">The range this work needs</p>
          <p className="mt-4 max-w-3xl font-serif text-2xl font-medium leading-snug tracking-tight text-ink">
            I&apos;m a technology and partnerships leader who also builds.
          </p>
          <p className="mt-5 max-w-3xl leading-relaxed text-slate">
            For 18+ years I&apos;ve turned technology into deployed outcomes: partnering
            organisations like the NHS, BBC and Roche into live delivery, building and leading
            multi-country teams, and now designing and shipping production AI systems hands-on. I sit
            comfortably in a leadership meeting, in an engineering review, and in the code, which is
            exactly the range a mission organisation needs to move from a good digital idea to
            something working for the people it serves. I&apos;m fully remote, from Valencia, Spain,
            and work across EMEA, the UK and US-East time zones.
          </p>
        </div>
      </section>

      {/* How I help */}
      <section id="how" className="mx-auto max-w-content px-6 py-20">
        <p className="eyebrow text-accent">How I help</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {capabilities.map((c) => (
            <div key={c.title} className="rounded-2xl border border-rule bg-surface p-7">
              <h2 className="font-serif text-xl font-semibold text-accent">{c.title}</h2>
              <p className="mt-3 leading-relaxed text-slate">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Proof */}
      <section className="border-t border-rule bg-surface">
        <div className="mx-auto max-w-content px-6 py-20">
          <p className="eyebrow text-accent">Proof</p>
          <ul className="mt-8 max-w-3xl space-y-4">
            {proof.map((p) => (
              <li key={p} className="flex items-start gap-3 leading-relaxed text-ink">
                <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ways to work together */}
      <section className="mx-auto max-w-content px-6 py-20">
        <p className="eyebrow text-accent">Ways to work together</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {waysToWork.map((w) => (
            <div key={w.title} className="rounded-2xl border border-rule bg-surface p-6">
              <h2 className="font-serif text-lg font-semibold">{w.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate">{w.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-slate">
          Engaged remotely from Valencia; contract / EOR friendly.
        </p>
      </section>

      {/* Contact */}
      <section className="border-t border-rule bg-accent text-paper">
        <div className="mx-auto flex max-w-content flex-col gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-serif text-3xl font-semibold tracking-tight">
              Start a conversation.
            </h2>
            <p className="mt-2 text-paper/85">
              Technology, partnerships and applied AI, put to work for the mission.
            </p>
          </div>
          <a
            href={mailto}
            className="inline-flex flex-none items-center justify-center rounded-md bg-paper px-6 py-3 text-sm font-medium text-accent-strong transition-opacity hover:opacity-90"
          >
            hello@benmorrell.co
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-rule">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-8 text-sm text-slate">
          <Link href="/" className="font-serif text-base text-ink">
            Ben Morrell
          </Link>
          <span>benmorrell.co</span>
        </div>
      </footer>
    </main>
  );
}
