import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { applications, getApplication } from "@/content/applications";
import LongWayRound from "../components/LongWayRound";
import headshot from "@/public/headshot-root.jpg";
import "../home.css";

export function generateStaticParams() {
  return applications.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const app = getApplication(params.slug);
  if (!app) return {};
  // Each application page carries its own share card. Without this the page
  // inherits the root layout's fractional pitch, which is wrong for a role.
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
      images: ["/headshot-root.jpg"],
    },
    twitter: { card: "summary", title, description, images: ["/headshot-root.jpg"] },
  };
}

export default function ApplicationPage({ params }: { params: { slug: string } }) {
  const app = getApplication(params.slug);
  if (!app) notFound();

  const mailto = `mailto:hello@benmorrell.co?subject=${encodeURIComponent(
    `${app.role} at ${app.company}`,
  )}`;

  return (
    <main className="bm">
      <header className="bm-wrap bm-header">
        <Link href="/" className="bm-header__name">
          Ben Morrell
        </Link>
        <Link href="/" className="bm-link bm-header__link">
          benmorrell.co
        </Link>
      </header>

      <section className="bm-wrap bm-hero">
        <div className="bm-hero__text">
          <p className="bm-label">
            For {app.company} · {app.role}
          </p>
          <h1 className="bm-display">{app.headline}</h1>
          <p className="bm-lead">{app.sub}</p>
          <div className="bm-hero__cta bm-hero__cta--row">
            <a className="bm-btn" href={mailto}>
              Get in touch
            </a>
            {app.coverLetter ? (
              <a className="bm-btn bm-btn--quiet" href={app.coverLetter}>
                Download Cover Letter
              </a>
            ) : null}
          </div>
        </div>
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

      {/* Proof strip */}
      <section className="bm-wrap bm-section bm-section--tight">
        <div className="bm-figs">
          {app.metrics.map((m) => (
            <div key={m.label} className="bm-fig">
              <p className="bm-fig__value">{m.value}</p>
              <p className="bm-muted">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why me for this role */}
      <section className="bm-wrap bm-section">
        <h2 className="bm-label">Why me for this role</h2>
        <div className="bm-ways bm-ways--3">
          {app.why.map((w) => (
            <article key={w.title} className="bm-card">
              <h3 className="bm-title">{w.title}</h3>
              <p className="bm-muted">{w.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Field deployments, only on pages that define them */}
      {app.deployments?.length ? (
        <section className="bm-wrap bm-section">
          <h2 className="bm-label">Where the work happened</h2>
          <ul className="bm-rows">
            {app.deployments.map((d) => (
              <li key={d.place}>
                <div>
                  <h3 className="bm-title">{d.place}</h3>
                  <p className="bm-small bm-muted">{d.meta}</p>
                </div>
                <p className="bm-muted">{d.detail}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* How I would approach the role, only on pages that define it */}
      {app.approach?.length ? (
        <section className="bm-wrap bm-section">
          <h2 className="bm-label">How I would approach it</h2>
          <ol className="bm-steps bm-steps--3">
            {app.approach.map((a) => (
              <li key={a.title}>
                <h3 className="bm-title">{a.title}</h3>
                <p className="bm-muted">{a.body}</p>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {/* The long way round, on pages that opt in */}
      {app.longWayRound ? <LongWayRound /> : null}

      {/* Differentiator */}
      <section className="bm-wrap bm-section">
        <h2 className="bm-label">The difference</h2>
        <div className="bm-statement bm-statement--long">
          <p>{app.differentiator}</p>
        </div>
      </section>

      {/* Contact */}
      <section className="bm-wrap bm-section">
        <div className="bm-contact" id="contact">
          <h2 className="bm-display">Let&apos;s talk.</h2>
          <p className="bm-muted">This page was made for {app.company}.</p>
          <a className="bm-btn" href={mailto}>
            hello@benmorrell.co
          </a>
        </div>
      </section>

      <footer className="bm-wrap bm-footer">
        <span>Ben Morrell</span>
        <Link className="bm-link" href="/">
          benmorrell.co
        </Link>
      </footer>
    </main>
  );
}
