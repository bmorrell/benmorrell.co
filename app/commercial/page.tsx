import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Marquee, type MarqueeItem } from "../components/Marquee";
import headshot from "@/public/headshot.png";
import gtmLogo from "@/public/gtmexpertise-logo.jpg";
import LongWayRound from "../components/LongWayRound";

export const metadata: Metadata = {
  title: "Ben Morrell \u00b7 Strategic partnerships leader who builds",
  description:
    "Strategic partnerships leader and AI-native builder. 18+ years scaling B2B SaaS and infrastructure across EMEA and APAC: partnerships, GTM, and the systems that power them.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Ben Morrell \u00b7 Strategic partnerships leader who builds",
    description:
      "Strategic partnerships leader and AI-native builder. Partnerships, GTM, and the AI systems that power them.",
    url: "https://benmorrell.co/commercial",
    siteName: "Ben Morrell",
    type: "website",
    images: ["/headshot.png"],
  },
  twitter: {
    card: "summary",
    title: "Ben Morrell \u00b7 Strategic partnerships leader who builds",
    description:
      "Strategic partnerships leader and AI-native builder. Partnerships, GTM, and the AI systems that power them.",
    images: ["/headshot.png"],
  },
};


const metrics = [
  { value: "~$4M → ~$11.5M", label: "ARR led at Brightcove Asia" },
  { value: "35%", label: "of regional pipeline partner-sourced" },
  { value: "Roche ($80B)", label: "enterprise channel partnership secured" },
  { value: "Beijing 2008", label: "Olympics broadcast, sole delivery" },
];

const tracks: {
  tag: string;
  title: string;
  body: string;
  points: string[];
  href?: string;
  cta?: string;
}[] = [
  {
    tag: "Track A",
    title: "Partnerships & GTM leadership",
    body: "Partnerships, alliances, and GTM. I build partner ecosystems that carry real pipeline, sign the strategic deals, open new markets, and lead the teams behind them. I have done it from a 4-person office to regional market leadership.",
    points: [
      "Strategic partnerships / alliances / BD",
      "Sales leadership & GTM",
      "Solutions & sales engineering",
    ],
  },
  {
    tag: "Track B",
    title: "Commercial × technology",
    body: "I translate commercial needs into product, automation, and AI, then I ship it myself: agents, MCP servers, GTM tooling, dashboards. I can sit in the deal and build the system that delivers it.",
    points: [
      "GTM engineering & revenue systems",
      "Applied AI / forward-deployed / field CTO",
      "Digital & business transformation",
    ],
  },
  {
    tag: "Track C",
    title: "Social sector & mission",
    body: "The same partnerships, transformation and applied-AI range, put to work for mission-driven organisations: big-tech partnerships and responsible AI turned into things that actually run in the field.",
    points: [
      "Technology & corporate partnerships",
      "Digital transformation that lands",
      "Applied AI, built responsibly",
    ],
    href: "/mission",
    cta: "Explore the social-sector work",
  },
];

const workedFor: MarqueeItem[] = [
  { name: "Brightcove" },
  { name: "Livepeer" },
  { name: "Mux" },
  { name: "Visionular" },
  { name: "BinaryMed" },
  { name: "Encoding.com" },
  { name: "Grass Valley" },
  { name: "BBC" },
  { name: "Vee24" },
  { name: "Campus Plus" },
];

const customers: MarqueeItem[] = [
  { name: "OLVG Lab", sub: "Netherlands" },
  { name: "Channel 7", sub: "Thailand" },
  { name: "SET TV", sub: "Taiwan" },
  { name: "Asahi International", sub: "Europe" },
  { name: "NHS", sub: "UK" },
  { name: "HBO", sub: "Singapore" },
  { name: "Sony Pictures Networks", sub: "Singapore" },
  { name: "Mediacorp", sub: "Singapore" },
  { name: "Astro", sub: "Malaysia" },
  { name: "Verizon Media", sub: "US" },
];

const partnerships: MarqueeItem[] = [
  { name: "Roche Diagnostics", sub: "Medical · Switzerland" },
  { name: "Brightcove", sub: "SaaS · USA" },
  { name: "Aptos", sub: "Web3 · USA" },
  { name: "Ideal Systems", sub: "Singapore" },
];

// Root homepage role context. Per-company pages (/[company]-[role]) override these two lines.
const roleContext = {
  label: "Open to new roles",
  line: "Senior strategic-partnerships leadership and commercial-technology mandates. Fully remote, from Valencia, Spain.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-rule/70 bg-paper/85 backdrop-blur">
        <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
          <Link href="/" className="font-serif text-lg font-semibold tracking-tight">
            Ben Morrell
          </Link>
          <div className="hidden items-center gap-8 text-sm text-slate sm:flex">
            <a href="#tracks" className="hover:text-ink">What I do</a>
            <a href="#work" className="hover:text-ink">Track record</a>
            <Link href="/building" className="hover:text-ink">Building</Link>
            <a href="#story" className="hover:text-ink">Story</a>
            <a href="#podcast" className="hover:text-ink">Podcast</a>
            <a href="#contact" className="hover:text-ink">Contact</a>
            <Link href="/mission" className="font-medium text-accent hover:text-accent-strong">Social sector</Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-content px-6 pb-20 pt-16 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.45fr_1fr]">
          <div>
            <p className="eyebrow text-accent">Strategic partnerships leader · AI-native builder</p>
            <h1 className="mt-5 max-w-2xl font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              I build the partnerships that turn technology into revenue.
            </h1>

            {/* Role / company slot, personalised on per-company pages */}
            <div className="mt-7 border-l-2 border-accent pl-4">
              <p className="eyebrow text-accent">{roleContext.label}</p>
              <p className="mt-1 text-base text-ink">{roleContext.line}</p>
            </div>

            <p className="mt-7 max-w-xl leading-relaxed text-slate">
              Strategic partnerships leader with 18+ years scaling B2B SaaS and infrastructure across
              EMEA and APAC. I bring deep technical roots and broad commercial range, and I build the
              AI systems myself.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
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
                See the track record
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

      {/* Three tracks */}
      <section id="tracks" className="mx-auto max-w-content px-6 py-24">
        <p className="eyebrow text-accent">Three tracks</p>
        <h2 className="mt-3 max-w-3xl font-serif text-4xl font-semibold tracking-tight">
          A strategic partnerships leader who can also build the system.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t) => {
            const inner = (
              <>
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
                {t.cta ? (
                  <p className="mt-6 text-sm font-medium text-accent group-hover:text-accent-strong">
                    {t.cta} &rarr;
                  </p>
                ) : null}
              </>
            );
            return t.href ? (
              <Link
                key={t.title}
                href={t.href}
                className="group rounded-2xl border border-accent/40 bg-surface p-8 transition-colors hover:border-accent hover:bg-paper"
              >
                {inner}
              </Link>
            ) : (
              <div key={t.title} className="rounded-2xl border border-rule bg-surface p-8">
                {inner}
              </div>
            );
          })}
        </div>
      </section>

      {/* Track record carousels */}
      <section id="work" className="border-t border-rule py-24">
        <div className="mx-auto mb-12 max-w-content px-6">
          <p className="eyebrow text-accent">Track record</p>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl font-semibold tracking-tight">
            Two decades signing partnerships and scaling revenue in video, SaaS and infrastructure.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-slate">
            VP for Asia at Brightcove (NASDAQ), then partnerships and GTM through my
            consultancy, revenuesystem. The work spans enterprise customers, strategic partners, and
            the deals that moved pipeline.
          </p>
        </div>

        <div className="space-y-10">
          <div>
            <p className="mx-auto mb-3 max-w-content px-6 eyebrow text-slate">Who I worked for</p>
            <Marquee items={workedFor} seconds={38} />
          </div>
          <div>
            <p className="mx-auto mb-3 max-w-content px-6 eyebrow text-slate">A selection of customers</p>
            <Marquee items={customers} seconds={52} reverse />
          </div>
          <div>
            <p className="mx-auto mb-3 max-w-content px-6 eyebrow text-slate">Who I signed partnerships with</p>
            <Marquee items={partnerships} seconds={30} />
          </div>
        </div>
      </section>

      <LongWayRound id="story" />

      {/* GTM Expertise podcast */}
      <section id="podcast" className="bg-accent text-paper">
        <div className="mx-auto flex max-w-content flex-col gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-6 md:items-center">
            <Image
              src={gtmLogo}
              alt="GTM Expertise podcast logo"
              width={96}
              height={96}
              className="hidden h-24 w-24 flex-none rounded-2xl border border-paper/20 shadow-sm sm:block"
            />
            <div className="max-w-2xl">
              <p className="eyebrow text-paper/70">GTM Expertise · Podcast</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight">
                Conversations with the people who build revenue.
              </h2>
              <p className="mt-4 leading-relaxed text-paper/85">
                I host the GTM Expertise podcast, 26+ episodes with enterprise sales and partnerships
                leaders on how growth actually happens.
              </p>
            </div>
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
              Open to senior partnerships and GTM roles, and to commercial-technology roles in GTM
              engineering, applied AI, or transformation. Fully remote, from Valencia, Spain.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <a href="mailto:hello@benmorrell.co" className="group flex items-center justify-between border-b border-rule pb-3">
              <span className="text-sm text-slate">Email</span>
              <span className="font-medium group-hover:text-accent">hello@benmorrell.co</span>
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
