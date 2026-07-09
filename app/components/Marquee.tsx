export type MarqueeItem = {
  name: string;
  sub?: string;
  /** Optional logo path under /public/logos (e.g. "/logos/brightcove.svg"). Falls back to the wordmark. */
  logo?: string;
};

export function Marquee({
  items,
  reverse = false,
  seconds = 40,
}: {
  items: MarqueeItem[];
  reverse?: boolean;
  seconds?: number;
}) {
  // Duplicate the list so the -50% translate loops seamlessly.
  const row = [...items, ...items];
  return (
    <div className="marquee group relative overflow-hidden py-1">
      <div
        className="marquee-track flex w-max"
        style={{
          animationDuration: `${seconds}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {row.map((it, i) => (
          <div
            key={`${it.name}-${i}`}
            className="mr-4 flex flex-none items-center gap-3 rounded-xl border border-rule bg-surface px-6 py-4"
          >
            {it.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={it.logo} alt={it.name} className="h-6 w-auto" />
            ) : (
              <span className="whitespace-nowrap font-serif text-lg font-medium text-ink">
                {it.name}
              </span>
            )}
            {it.sub ? (
              <span className="whitespace-nowrap text-xs text-slate">{it.sub}</span>
            ) : null}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-paper to-transparent" />
    </div>
  );
}
