import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { applications, getApplication } from "@/content/applications";
import LongWayRound from "../components/LongWayRound";
import headshot from "@/public/headshot.png";

export function generateStaticParams() {
  return applications.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const app = getApplication(params.slug);
  if (!app) return {};
  // Each application page carries its own share card. Without this the page
  // inherits the root layout's partnerships positioning, which is wrong for
  // any role that is not a partnerships role.
  const title = `Ben Morrell for ${app.company}`;
  const description = app.headline;
  return {
    title,
    description,
    robots: { index: false, follow: false },
    openGraph: {
      title,
      description,
      url: `https://benmorrell.co/${app.slug}`,
      siteName: "Ben Morrell",
      type: "website",
      images: ["/headshot.png"],
    },
    twitter: { card: "summary", title, description, images: ["/headshot.png"] },
  };
}

export default function ApplicationPage({ params }: { params: { slug: string } }) {
  const app = getApplication(params.slug);
  if (!app) notFound();

  const mailto = `mailto:hello@benmorrell.co?subject=${encodeURIComponent(
    `${app.role} at ${app.company}`,
  )}`;

  return (
    <main className="min-h-screen">
      <header className="border-b border-rule">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
          <Link href="/" className="font-serif text-lg font-semibold tracking-tight">
            Ben Morrell
          </Link>
          <a href="/" className="text-sm text-slate hover:text-ink">
            benmorrell.co
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-content px-6 pb-16 pt-16 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="eyebrow text-accent">
              For {app.company} · {app.role}
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              {app.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">{app.sub}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={mailto}
                className="rounded-md bg-accent px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent-strong"
              >
                Get in touch
              </a>
              {app.coverLetter ? (
                <a
                  href={app.coverLetter}
                  className="rounded-md border border-ink px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
                >
                  Download Cover Letter
                </a>
              ) : null}
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

      {/* Proof strip */}
      <section className="border-y border-rule bg-surface">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-3">
          {app.metrics.map((m) => (
            <div key={m.label}>
              <p className="font-serif text-3xl font-semibold text-accent">{m.value}</p>
              <p className="mt-1 text-sm leading-snug text-slate">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why me for this role */}
      <section className="mx-auto max-w-content px-6 py-20">
        <p className="eyebrow text-accent">Why me for this role</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {app.why.map((w) => (
            <div key={w.title} className="rounded-2xl border border-rule bg-surface p-6">
              <h2 className="font-serif text-lg font-semibold">{w.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Field deployments, only on pages that define them */}
      {app.deployments?.length ? (
        <section className="border-t border-rule bg-surface">
          <div className="mx-auto max-w-content px-6 py-20">
            <p className="eyebrow text-accent">Where the work happened</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight">
              Deployments
            </h2>
            <ul className="mt-10 divide-y divide-rule border-t border-rule">
              {app.deployments.map((d) => (
                <li
                  key={d.place}
                  className="grid gap-2 py-6 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-8"
                >
                  <div>
                    <h3 className="font-serif text-xl font-semibold leading-snug">{d.place}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-accent">{d.meta}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-slate">{d.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* How I would approach the role, only on pages that define it */}
      {app.approach?.length ? (
        <section className="border-t border-rule">
          <div className="mx-auto max-w-content px-6 py-20">
            <p className="eyebrow text-accent">How I would approach it</p>
            <div className="mt-8 grid gap-10 md:grid-cols-3">
              {app.approach.map((a, i) => (
                <div key={a.title}>
                  <p className="font-serif text-3xl font-semibold leading-none text-accent/30">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-serif text-lg font-semibold leading-snug">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* The long way round, on pages that opt in */}
      {app.longWayRound ? <LongWayRound /> : null}

      {/* Differentiator */}
      <section className="border-t border-rule">
        <div className="mx-auto max-w-content px-6 py-20">
          <div className="max-w-3xl border-l-2 border-accent pl-6">
            <p className="eyebrow text-accent">The difference</p>
            <p className="mt-3 font-serif text-2xl font-semibold leading-snug tracking-tight text-ink">
              {app.differentiator}
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-rule bg-surface">
        <div className="mx-auto flex max-w-content flex-col gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-serif text-3xl font-semibold tracking-tight">Let&apos;s talk.</h2>
            <p className="mt-2 text-sm text-slate">This page was made for {app.company}.</p>
          </div>
          <a
            href={mailto}
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
          <span>benmorrell.co</span>
        </div>
      </footer>
    </main>
  );
}
