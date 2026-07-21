import type { Metadata } from "next";
import Link from "next/link";
import LongWayRound from "../components/LongWayRound";

// Track B: commercial x technology. The proof that the technical half of the
// background is current, not historical.

export const metadata: Metadata = {
  title: "Ben Morrell · What I build",
  description: "Production AI tooling I design and ship myself: agents, MCP servers, automation and dashboards.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Ben Morrell · What I build",
    description: "Production AI tooling I design and ship myself: agents, MCP servers, automation and dashboards.",
    url: "https://benmorrell.co/building",
    siteName: "Ben Morrell",
    type: "website",
    images: ["/headshot.png"],
  },
  twitter: {
    card: "summary",
    title: "Ben Morrell · What I build",
    description: "Production AI tooling I design and ship myself: agents, MCP servers, automation and dashboards.",
    images: ["/headshot.png"],
  },
};

const BUILDS = [
  {
    name: "AI GTM platform",
    what: "A full-stack build: Claude API, an MCP server, Stripe billing, auth, lead scoring, an open-source CRM, and SEO/GEO/AEO.",
  },
  {
    name: "MCP context server",
    what: "A production remote MCP server that gives Claude a shared, GitHub-backed business-context layer across chat and code. Bearer auth, SHA-checked atomic writes with conflict detection, and append-only session logs.",
  },
  {
    name: "AI research agent",
    what: "AI vendor due-diligence. A Claude agent fans out across public sources to produce structured reports.",
  },
  {
    name: "Configurable quote engine",
    what: "A configurable instant-quote engine for rules-based trades, with a pure unit-testable pricing core and CRM, email, WhatsApp and Slack outputs.",
  },
  {
    name: "Portfolio monitoring dashboard",
    what: "A Cloudflare Worker watching every production app: health pings, deploy state, latency percentiles and uptime windows.",
  },
  {
    name: "How it gets built",
    what: "Next.js and TypeScript on Vercel and Cloudflare Workers, shipped fast with agentic tooling. An MEng in electronic engineering underneath all of it.",
  },
];

export default function BuildingPage() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-rule">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
          <Link href="/" className="font-serif text-lg font-semibold tracking-tight">
            Ben Morrell
          </Link>
          <nav className="flex items-center gap-6 text-sm text-slate">
            <Link href="/commercial" className="hover:text-ink">
              Commercial
            </Link>
            <Link href="/mission" className="hover:text-ink">
              Mission
            </Link>
            <a href="#contact" className="hover:text-ink">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-content px-6 pb-16 pt-16 sm:pt-24">
        <p className="eyebrow text-accent">Building &amp; AI</p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
          I build the AI systems myself.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">
          Through necessity, I build production AI tooling: agents, MCP servers, billing,
          enrichment, dashboards. It keeps the technical half of my background current, and it means
          I can hold my own in an engineering review rather than just brief one.
        </p>
      </section>

      <section className="border-y border-rule bg-surface">
        <div className="mx-auto max-w-content px-6 py-16">
          <div className="grid gap-6 sm:grid-cols-2">
            {BUILDS.map((b) => (
              <div key={b.name} className="rounded-2xl border border-rule bg-paper p-7">
                <h2 className="font-serif text-xl font-semibold text-accent">{b.name}</h2>
                <p className="mt-2 leading-relaxed text-slate">{b.what}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LongWayRound />

      <section id="contact" className="border-t border-rule bg-surface">
        <div className="mx-auto flex max-w-content flex-col gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-serif text-3xl font-semibold tracking-tight">Let&apos;s talk.</h2>
            <p className="mt-2 text-sm text-slate">Easiest by email, or find me on LinkedIn.</p>
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
          <Link href="/" className="font-serif text-base text-ink">
            Ben Morrell
          </Link>
          <a href="https://linkedin.com/in/morrellbc" className="hover:text-ink">
            linkedin.com/in/morrellbc
          </a>
        </div>
      </footer>
    </main>
  );
}
