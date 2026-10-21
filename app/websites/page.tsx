import type { Metadata } from "next";
import Image from "next/image";
import { Bricolage_Grotesque } from "next/font/google";
import Pricing from "./Pricing";
import parkside from "@/public/websites/parkside.jpg";
import phil from "@/public/websites/phil.jpg";
import roamsmith from "@/public/websites/roamsmith.jpg";

// "Website Builds": the web-build offer, promoted by direct link (brochure,
// friends). Deliberately standalone: own header, not linked from the router,
// and it inherits the site-wide noindex like every other route.

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const TITLE = "Website Builds · Custom websites, no templates";
const DESCRIPTION =
  "Fast, findable websites for independent businesses. Designed and built from scratch, hosted and looked after. Fixed prices from £895.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: false, follow: false },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://benmorrell.co/websites",
    siteName: "Website Builds",
    type: "website",
    images: [{ url: "/websites/parkside.jpg", width: 1200, height: 680, alt: "Parkside Hand & Wrist, a Website Builds site" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/websites/parkside.jpg"] },
};

const BROCHURE = "/websites/website-builds-brochure.pdf";

const WHATSAPP = `https://wa.me/447796656897?text=${encodeURIComponent("Hi Ben, I'm interested in a website build.")}`;

const MAILTO = `mailto:hello@benmorrell.co?subject=${encodeURIComponent("Website build")}`;

const STEPS = [
  ["Tell me about your business.", "Email or WhatsApp me and I'll send a short online questionnaire, about 10 minutes."],
  ["Get a fixed quote.", "A package recommendation and a simple contract to agree online."],
  ["Pay a 50% deposit.", "I set up your site and share a private preview link."],
  ["Shape it together.", "Review the preview and tell me what to change."],
  ["Go live.", "I connect your domain, check everything, and look after it from then on."],
];

const HIGHLIGHTS = [
  ["Fixed prices", "Three clear packages, every one a custom build. You know the cost before anything starts."],
  ["Easy to find", "Set up for Google and AI search from day one, with Search Console verified."],
  ["Looked after", "Hosted on fast, reliable, industry-standard platforms, kept secure, with help when you need a change."],
];

const WORK = [
  { img: parkside, name: "Parkside Hand & Wrist", tier: "Tier 1 · Brochure", url: "parksidehandwrist.com" },
  { img: phil, name: "Phil Richardson Piano", tier: "Tier 2 · Mid-level", url: "philrichardsonpiano.co.uk" },
  { img: roamsmith, name: "Roamsmith", tier: "Tier 3 · Custom", url: "roamsmith.co" },
];

const FAQ = [
  ["Do I own my website?", "Yes. Your content and site design are yours once paid in full, and your domain is always in your name."],
  [
    "What do I need to provide?",
    "Your photos, logo and notes about your business. I write basic copy for you to review and edit. No logo yet? Add a logo, branding or stock photos.",
  ],
  ["Can I update it myself?", "On Tier 2, yes, with a simple editor. On the Care plan, I make small changes for you every month."],
  ["Can I leave?", "Any time at the end of your hosting year. Off-boarding hands over everything you need to move."],
];

export default function WebsitesPage() {
  return (
    <main className={`${bricolage.variable} min-h-screen bg-wb-paper text-wb-ink`}>
      <header className="border-b border-wb-line bg-white">
        <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-wb text-xl font-extrabold tracking-tight">Website Builds</span>
            <span className="text-sm text-wb-muted">by Ben Morrell</span>
          </a>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-wb-muted">
            <a href="#pricing" className="hover:text-wb-ink">Pricing</a>
            <a href="#care" className="hover:text-wb-ink">Hosting</a>
            <a href="#work" className="hover:text-wb-ink">Work</a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-1.5 hover:text-wb-ink">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>
              WhatsApp
            </a>
            <a
              href={MAILTO}
              className="inline-flex min-h-[44px] items-center rounded-md bg-wb-ink px-4 font-semibold text-white hover:bg-wb-blue"
            >
              Start your site
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-content px-6 pb-16 pt-14 sm:pt-20">
        <p className="inline-block rounded border-[1.5px] border-wb-blue px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-wb-blue">
          Custom build · No templates
        </p>
        <h1 className="mt-6 max-w-3xl font-wb text-5xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-7xl">
          Small websites, <span className="text-wb-blue">built properly.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-wb-body">
          Fast, findable websites for independent businesses. Designed and built from scratch for you, never from a
          template, then looked after by the person who built them.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={MAILTO}
            className="inline-flex min-h-[48px] items-center rounded-md bg-wb-blue px-6 font-semibold text-white hover:bg-wb-blue-strong"
          >
            Start your site
          </a>
          <a
            href="#pricing"
            className="inline-flex min-h-[48px] items-center rounded-md border border-wb-ink px-6 font-semibold hover:bg-white"
          >
            See prices
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center gap-2 rounded-md border border-wb-ink px-6 font-semibold hover:bg-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>
            WhatsApp me
          </a>
          <a
            href={BROCHURE}
            download
            className="inline-flex min-h-[48px] items-center gap-2 rounded-md px-3 font-semibold text-wb-blue underline-offset-4 hover:underline"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M8 2v8m0 0L4.5 6.5M8 10l3.5-3.5M3 13h10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download the brochure (PDF)
          </a>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {HIGHLIGHTS.map(([title, body]) => (
            <div key={title} className="border-t-2 border-wb-blue pt-4">
              <h2 className="font-wb text-xl font-bold">{title}</h2>
              <p className="mt-2 leading-relaxed text-wb-body">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-wb-line bg-white">
        <div className="mx-auto max-w-content px-6 py-16 sm:py-20">
          <h2 className="font-wb text-3xl font-extrabold tracking-tight sm:text-4xl">How it works</h2>
          <ol className="mt-8 divide-y divide-wb-line border-y border-wb-line">
            {STEPS.map(([title, body], i) => (
              <li key={title} className="flex gap-5 py-5">
                <span className="w-8 flex-none font-wb text-2xl font-extrabold text-wb-blue">{i + 1}</span>
                <p className="text-lg leading-relaxed">
                  <strong className="font-semibold">{title}</strong> <span className="text-wb-body">{body}</span>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Pricing />

      {/* Work */}
      <section id="work" className="mx-auto max-w-content px-6 py-16 sm:py-20">
        <h2 className="font-wb text-3xl font-extrabold tracking-tight sm:text-4xl">Recent work</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {WORK.map((w) => (
            <a key={w.url} href={`https://${w.url}`} className="group block" target="_blank" rel="noopener noreferrer">
              <Image
                src={w.img}
                alt={`${w.name} home page`}
                className="aspect-[30/17] w-full rounded-lg border border-wb-line object-cover object-top transition-shadow group-hover:shadow-lg"
                sizes="(min-width: 768px) 33vw, 100vw"
                placeholder="blur"
              />
              <h3 className="mt-4 font-wb text-xl font-bold">{w.name}</h3>
              <p className="mt-1 text-sm font-semibold text-wb-blue">{w.tier}</p>
              <p className="text-sm text-wb-muted group-hover:text-wb-ink">{w.url}</p>
            </a>
          ))}
        </div>
      </section>

      {/* About + FAQ */}
      <section className="border-t border-wb-line bg-white">
        <div className="mx-auto grid max-w-content gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="font-wb text-3xl font-extrabold tracking-tight">About me</h2>
            <p className="mt-4 text-lg leading-relaxed text-wb-body">
              I&apos;m Ben Morrell, a web developer based in Spain. I design and build every site from scratch, with no
              templates, on fast, reliable, industry-standard hosting. You deal with one person from the first message
              to go-live and beyond.
            </p>
          </div>
          <div>
            <h2 className="font-wb text-3xl font-extrabold tracking-tight">Questions</h2>
            <dl className="mt-4 divide-y divide-wb-line border-y border-wb-line">
              {FAQ.map(([q, a]) => (
                <div key={q} className="py-5">
                  <dt className="text-lg font-semibold">{q}</dt>
                  <dd className="mt-1 leading-relaxed text-wb-body">{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-content px-6 py-16">
        <div className="flex flex-col gap-6 rounded-xl bg-wb-blue p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div>
            <h2 className="font-wb text-3xl font-extrabold tracking-tight sm:text-4xl">Ready to start?</h2>
            <p className="mt-2 text-lg text-white/90">Email or WhatsApp me and I&apos;ll come back with a short questionnaire and a fixed quote.</p>
            <a href={BROCHURE} download className="mt-3 inline-block font-semibold text-white underline underline-offset-4 hover:text-wb-tint">
              Download the brochure (PDF, 4 pages)
            </a>
          </div>
          <div className="flex flex-none flex-col gap-3 sm:items-end">
            <a
              href={MAILTO}
              className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-white px-6 font-semibold text-wb-blue hover:bg-wb-tint"
            >
              hello@benmorrell.co
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md border border-white px-6 font-semibold text-white hover:bg-white/10"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>
              WhatsApp me
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-wb-line">
        <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-wb-muted">
          <span className="font-wb font-extrabold text-wb-ink">Website Builds</span>
          <span>Prices for businesses, excluding any VAT or IVA that applies.</span>
        </div>
      </footer>
    </main>
  );
}
