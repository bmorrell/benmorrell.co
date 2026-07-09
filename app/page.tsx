import Link from "next/link";

const metrics = [
  { value: "<$300K → ~$11.5M", label: "ARR grown at Brightcove APAC" },
  { value: "$12M", label: "largest global deal closed" },
  { value: "20+", label: "founders advised (150% avg ARR growth)" },
  { value: "15+", label: "countries operated across" },
];

const tracks = [
  {
    tag: "Track A",
    title: "Revenue leadership",
    body: "Partnerships, GTM, and sales leadership. I build partner ecosystems that carry real pipeline, open new markets, and lead teams that scale revenue — from a 4-person office to market leadership.",
    points: [
      "Partnerships / alliances / BD",
      "Sales leadership & GTM",
      "Solutions & sales engineering",
    ],
  },
  {
    tag: "Track B",
    title: "Commercial × technology",
    body: "I translate commercial needs into product, automation, and AI — and I ship it myself: agents, MCP servers, GTM tooling, dashboards. The rare operator who can sit in the deal and build the system that delivers it.",
    points: [
      "GTM engineering & revenue systems",
      "Applied AI / forward-deployed / field CTO",
      "Digital & business transformation",
    ],
  },
];

const work = [
  "Brightcove",
  "Livepeer",
  "Mux",
  "Roche",
  "BBC",
  "NHS",
  "Encoding.com",
  "Grass Valley",
];

const builds = [
  {
    name: "gofasterwith.ai",
    what: "AI product & GTM-automation studio — Claude API, MCP, Stripe billing, auth, lead scoring, open-source CRM, SEO/GEO/AEO.",
  },
  {
    name: "sharedcontext-mcp",
    what: "A production remote MCP server giving Claude a shared, GitHub-backed business-context layer across chat and code.",
  },
  {
    name: "vendrpulse",
    what: "AI vendor due-diligence — a Claude agent fanning out across public sources to produce structured reports.",
  },
  {
    name: "quote-kit",
    what: "A configurable instant-quote engine for rules-based trades, with CRM, email, WhatsApp and Slack outputs.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-rule/70 bg-paper/85 backdrop-blur">
        <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
          <Link href="/" className="font-serif text-lg font-semibold tracking-tight">
            Ben Morrell
          </Link>
          <div className="hidden gap-8 text-sm text-slate sm:flex">
            <a href="#tracks" className="hover:text-ink">What I do</a>
            <a href="#work" className="hover:text-ink">Work</a>
            <a href="#building" className="hover:text-ink">Building</a>
            <a href="#podcast" className="hover:text-ink">Podcast</a>
            <a href="#contact" className="hover:text-ink">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-content px-6 pb-20 pt-20 sm:pt-28">
        <p className="eyebrow text-accent">Revenue leader · AI-native builder</p>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          I build revenue where technology meets the customer.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
          T-shaped revenue leader with 18+ years scaling B2B SaaS and infrastructure across EMEA and
          APAC — deep technical roots, broad commercial range, and the rare habit of shipping the AI
          systems myself.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="rounded-md bg-accent px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent-strong"
          >
            Get in touch
          </a>
          <a
            href="#work"
            className="rounded-md border border-ink px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            See the work
          </a>
        </div>
      </section>

      {/* Proof bar */}
      <section className="border-y border-rule bg-surface">
        <div className="mx-auto grid max-w-content grid-cols-2 gap-8 px-6 py-12 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label}>
              <p className="font-serif text-3xl font-semibold text-accent">{m.value}</p>
              <p className="mt-1 text-sm leading-snug text-slate">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Two tracks */}
      <section id="tracks" className="mx-auto max-w-content px-6 py-24">
        <p className="eyebrow text-accent">Two tracks</p>
        <h2 className="mt-3 max-w-3xl font-serif text-4xl font-semibold tracking-tight">
          A revenue leader who can also build the system.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {tracks.map((t) => (
            <div key={t.title} className="rounded-2xl border border-rule bg-surface p-8">
              <p className="eyebrow text-slate">{t.tag}</p>
              <h3 className="mt-3 font-serif text-2xl font-semibold">{t.title}</h3>
              <p className="mt-3 leading-relaxed text-slate">{t.body}</p>
              <ul className="mt-6 space-y-2">
                {t.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section id="work" className="border-y border-rule bg-surface">
        <div className="mx-auto max-w-content px-6 py-24">
          <p className="eyebrow text-accent">Selected work</p>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl font-semibold tracking-tight">
            Scaled revenue and signed partnerships for video, SaaS and infrastructure leaders.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-slate">
            VP APAC at Brightcove (NASDAQ). Partnerships and GTM through revenuesystem — the Roche
            Diagnostics global reseller, Aptos, and a portfolio of B2B SaaS and infrastructure clients.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            {work.map((w) => (
              <span key={w} className="font-serif text-xl font-medium text-ink/80">
                {w}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Building & AI */}
      <section id="building" className="mx-auto max-w-content px-6 py-24">
        <p className="eyebrow text-accent">Building &amp; AI</p>
        <h2 className="mt-3 max-w-3xl font-serif text-4xl font-semibold tracking-tight">
          I ship the AI systems, not just the strategy.
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-slate">
          Through <span className="text-ink">gofasterwith.ai</span>, I build production AI tooling —
          agents, MCP servers, billing, enrichment, dashboards. Proof that the technical half of the
          t-shape is current, not historical.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {builds.map((b) => (
            <div key={b.name} className="rounded-2xl border border-rule bg-surface p-7">
              <h3 className="font-serif text-xl font-semibold text-accent">{b.name}</h3>
              <p className="mt-2 leading-relaxed text-slate">{b.what}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GTM Expertise podcast */}
      <section id="podcast" className="border-y border-rule bg-accent text-paper">
        <div className="mx-auto flex max-w-content flex-col gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow text-paper/70">GTM Expertise · Podcast</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight">
              Conversations with the people who build revenue.
            </h2>
            <p className="mt-4 leading-relaxed text-paper/85">
              I host the GTM Expertise podcast — 26+ episodes interviewing enterprise sales and
              partnerships leaders on how growth actually happens.
            </p>
          </div>
          <a
            href="https://gtmexpertise.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-none items-center justify-center rounded-md bg-paper px-6 py-3 text-sm font-medium text-accent-strong transition-opacity hover:opacity-90"
          >
            Listen at gtmexpertise.com
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-content px-6 py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow text-accent">Contact</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight">
              Let&apos;s talk.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-slate">
              Open to senior partnerships / GTM roles and commercial-technology (GTM engineering,
              applied-AI, transformation) roles. Fully remote, from Valencia.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <a href="mailto:morrellbc@gmail.com" className="group flex items-center justify-between border-b border-rule pb-3">
              <span className="text-sm text-slate">Email</span>
              <span className="font-medium group-hover:text-accent">morrellbc@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/morrellbc" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-b border-rule pb-3">
              <span className="text-sm text-slate">LinkedIn</span>
              <span className="font-medium group-hover:text-accent">linkedin.com/in/morrellbc</span>
            </a>
            <a href="https://gtmexpertise.com" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-b border-rule pb-3">
              <span className="text-sm text-slate">Podcast</span>
              <span className="font-medium group-hover:text-accent">gtmexpertise.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-rule">
        <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-2 px-6 py-8 text-sm text-slate sm:flex-row sm:items-center">
          <span className="font-serif text-base text-ink">Ben Morrell</span>
          <span>benmorrell.co · © {new Date().getFullYear()}</span>
        </div>
      </footer>
    </main>
  );
}
