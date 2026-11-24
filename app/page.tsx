import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import headshot from "@/public/headshot-root.jpg";
import "./home.css";

// The root is the shopfront: one page, one pitch. Copy is approved and lives in
// the vault (Profile/benmorrell.co - root rebuild (proposal).md) - change it
// there first. Look: the Ben Morrell design system (styles in home.css, scoped
// to .bm). The font is loaded once in the root layout.

const LINE = "Technical and commercial, in one person, in your team.";
const SUB =
  "I get the work done that nobody else has the cycles for. Engineer at heart, commercial for 12+ years.";
const TITLE = `Ben Morrell - ${LINE}`;

// One string to change when it stops being true. Matches the LinkedIn headline.
const STATUS = "Capacity now";

// The only indexable route on the site. Everything else inherits noindex from
// the root layout or sets it itself.
export const metadata: Metadata = {
  title: TITLE,
  description: SUB,
  alternates: { canonical: "https://benmorrell.co" },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: SUB,
    url: "https://benmorrell.co",
    siteName: "Ben Morrell",
    type: "website",
    images: [{ url: "/og-root.png", width: 1200, height: 630, alt: `Ben Morrell. ${LINE}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SUB,
    images: ["/og-root.png"],
  },
};

const NAMES = [
  "Brightcove",
  "Roche Diagnostics",
  "NHS",
  "BBC",
  "Encoding.com",
  "Asahi",
  "Nine Network",
];

// Partnerships leads and gets the wide card.
const WAYS = [
  {
    title: "Partnerships",
    body: "If you need partnerships built but aren't ready for a full-time Head of Partnerships, I fill that role. Anything from building out the programme from scratch to finding the partners worth targeting, pitching them, getting the agreement signed and then managing them until they produce pipeline.",
  },
  {
    title: "Commercial operations and market entry",
    body: "Opening a new region, or getting the sales process into a state where you can forecast from it.",
  },
  {
    title: "Getting things done with AI",
    body: "I'll work out with you where AI is worth it, then get on and do it as part of your team. To be clear - I'm not an agency and I don't outsource it.",
  },
  {
    title: "Moving off legacy systems/processes",
    body: "An old system or a manual process that everyone knows needs replacing, and you want to move to a better state.",
  },
];

// Each card carries one figure, and the figure is always in the story itself.
const WORK = [
  {
    figure: "$80B",
    title: "A 15-person startup into an $80B channel",
    body: "BinaryTech is an Australian IoT company of about 15 people. I went after the big diagnostics companies as partners, and Roche came first. It grew into an exclusive global agreement for Roche to resell through its own channel - 7 figures over a minimum of 3 years. It took working with 30+ people inside Roche.",
  },
  {
    figure: "1200%",
    title: "Opening Asia Pacific from a written plan",
    body: "Encoding.com is a video SaaS company in San Francisco with no presence in Asia Pacific. I wrote the market entry thesis, ran the first executive visit across four countries and picked up the BD from there. Qualified pipeline grew 1200% and they signed the largest system integrator in the region.",
  },
  {
    figure: "35%",
    title: "A partner channel that produced a third of the pipeline",
    body: "As VP at Brightcove I led Asia from ~$4M to ~$11.5M ARR with a team of 20+. Part of how we got there was a partner channel - 15+ ISV and agency partners across the region. That channel drove 35% of the regional pipeline.",
  },
  {
    figure: "2x",
    title: "A quoting tool for a glass supplier",
    body: "A UK supplier of glass balustrades was quoting by hand. I built a guided quote tool for their website in about a week. It saved the owner about 10 hours a week, the number of quotes going out tripled, and the whole business's revenue doubled within two months.",
  },
];

const STEPS = [
  "A call. You tell me what is stuck and I'll say whether I think I can help (and if I can't, I'll say that too).",
  "A short note back from me with what I'd take on first, roughly how many days a week it needs, and the day rate.",
  "A first month. We pick one or two things together and I get them done. I think a month is enough for both of us to know whether it is working.",
  "After that it rolls month to month, and the days go up or down as you need.",
];

// No figure in the cost answer. Ever.
const QUESTIONS = [
  {
    q: "Why part-time and embedded, vs a full-time hire?",
    a: "Most companies between Seed and Series B have plenty of tech/commercial work and nobody with the cycles for it. A full-time senior hire is usually too early, or too slow. I can get going in a week or two.",
  },
  {
    q: "Are you an agency?",
    a: "No. I own the piece of work and I deliver it myself, as part of your team. I don't outsource it.",
  },
  {
    q: "Do you only work with tech companies?",
    a: "Mostly, but not only. I also work with owners and MDs of businesses that are not tech companies, and the PE folks who sit alongside them. The work is the same shape.",
  },
  {
    q: "Where are you, and how do you invoice?",
    a: "Fully remote, from Valencia in Spain. I invoice as myself - by the hour, week, month or for a defined role, whichever is most straightforward for you.",
  },
  {
    q: "What does it cost?",
    a: "It depends on what you need and how many days a week. After a first call I send a short note with what I'd take on first and the day rate.",
  },
];

export default function HomePage() {
  return (
    <main className="bm">
      <header className="bm-wrap bm-header">
        <Link href="/" className="bm-header__name">
          Ben Morrell
        </Link>
        <span className="bm-pill">{STATUS}</span>
        <a href="#contact" className="bm-link bm-header__link">
          Get in touch
        </a>
      </header>

      <section className="bm-wrap bm-hero">
        <div className="bm-hero__text">
          {/* Same words as LINE. Split so it always breaks after the first comma, and
              "in your team." never splits. */}
          <h1 className="bm-display bm-display--hero">
            <span>Technical and commercial,</span> in one person, <span>in your team.</span>
          </h1>
          <p className="bm-lead">{SUB}</p>
          <p className="bm-small bm-muted">
            Partnerships, market entry and AI for Seed to Series B tech. Fully remote.
          </p>
          <div className="bm-hero__cta">
            <a className="bm-btn" href="mailto:hello@benmorrell.co">
              {"Let's chat"}
            </a>
          </div>
        </div>
        {/* Head-and-shoulders portrait on the stone ground. */}
        <div className="bm-hero__portrait">
          <Image
            src={headshot}
            alt="Ben Morrell"
            fill
            priority
            sizes="(min-width: 760px) 40vw, 100vw"
          />
        </div>
      </section>

      <section className="bm-wrap bm-section bm-section--tight">
        <p className="bm-label">{"Some of the companies I've worked for and with"}</p>
        <ul className="bm-names">
          {NAMES.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </section>

      <section className="bm-wrap bm-section">
        <div className="bm-statement">
          <p>
            I mostly work with founders, COOs and CROs at tech companies, usually somewhere
            between Seed and Series B.
          </p>
          <p>
            There is something commercial that needs a technical head on it (or the other way
            round), nobody in the team has the time, and a full-time hire is either too early or
            too slow.
          </p>
        </div>
      </section>

      <section className="bm-wrap bm-section">
        <h2 className="bm-label">The usual places to start</h2>
        <div className="bm-ways">
          {WAYS.map((w, i) => (
            <article key={w.title} className={i === 0 ? "bm-card bm-card--lead" : "bm-card"}>
              <h3 className="bm-title">{w.title}</h3>
              <p>{w.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bm-wrap bm-section">
        <h2 className="bm-label">Some of the work</h2>
        <div className="bm-work">
          {WORK.map((w) => (
            <article key={w.title} className="bm-workcard">
              <div className="bm-workcard__text">
                <h3 className="bm-title">{w.title}</h3>
                <p className="bm-muted">{w.body}</p>
              </div>
              <div className="bm-workcard__figure" aria-hidden="true">
                {w.figure}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bm-wrap bm-section">
        <h2 className="bm-label">How it starts</h2>
        <ol className="bm-steps">
          {STEPS.map((s) => (
            <li key={s}>
              <p>{s}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bm-wrap bm-section">
        <h2 className="bm-label">Questions</h2>
        <div className="bm-faq">
          {QUESTIONS.map((item, i) => (
            <details key={item.q} open={i === 0}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bm-wrap bm-section">
        <div className="bm-about">
          <h2 className="bm-label">About</h2>
          <div>
            <p>
              {"I've lived in APAC for 13 years, EMEA for 7 and consider myself culturally fluent. I love the diversity of the world and I'm comfortable working across timezones/countries/languages/cultures. I am a Dad of two, care deeply about the future and love getting stuck into difficult problems."}
            </p>
            {/* The long way round, short. Same words as components/LongWayRound.tsx. */}
            <div className="bm-boat">
              <p className="bm-label">The long way round</p>
              <p className="bm-boat__line">
                In 2019 we sold everything and sailed 6,000 miles with two kids under four. None
                of us knew how to sail.
              </p>
              <p className="bm-boat__sub">
                Four and a half years, nine countries, one 40-foot boat called The Long Summer. I
                ran the business the whole way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bm-wrap bm-section">
        <div className="bm-contact" id="contact">
          <h2 className="bm-display">{"It all starts with a message, let's chat."}</h2>
          <a className="bm-btn" href="mailto:hello@benmorrell.co">
            hello@benmorrell.co
          </a>
          <a className="bm-link bm-small" href="https://linkedin.com/in/morrellbc">
            linkedin.com/in/morrellbc
          </a>
        </div>
      </section>

      <footer className="bm-wrap bm-footer">
        <span>Ben Morrell</span>
        <a className="bm-link" href="https://linkedin.com/in/morrellbc">
          linkedin.com/in/morrellbc
        </a>
      </footer>
    </main>
  );
}
