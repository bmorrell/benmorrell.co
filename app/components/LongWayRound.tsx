// The canonical "long way round" section (the 2019-2023 sailing years).
// Copy is approved and lives here once, so the homepage and any application
// page that opts in stay identical. Source of truth: vault Profile/Boat Journey.md.

const LESSONS = [
  "You never control the weather, so you focus on what you can control.",
  "When something breaks mid-passage, you stay calm, assess, plan, execute, review, and go again.",
  "Relationships across time zones are everything, because out there they are all you have.",
];

export default function LongWayRound({ id }: { id?: string }) {
  return (
    <section id={id} className="border-t border-rule">
      <div className="mx-auto max-w-content px-6 py-24">
        <div className="max-w-3xl">
          <p className="eyebrow text-accent">The long way round</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            In 2019 we sold everything and sailed 6,000 miles with two kids under four. None of us knew how to sail.
          </h2>
          <p className="mt-5 font-serif text-xl italic text-slate">
            Four and a half years, nine countries, one 40-foot boat called The Long Summer. I ran the business the whole way.
          </p>
          <div className="mt-8 space-y-5 leading-relaxed text-slate">
            <p>
              We wanted to be together every day and show the kids a full life up close, so we went. I kept
              working the entire time: leading Encoding.com&apos;s Europe and Asia expansion and building my
              consultancy, revenuesystem, from the boat. Local SIMs, patchy 4G, a stack of routers, and once a
              router hoisted up the mast to take a call. Clients never really knew. Everyone was working from
              home anyway, so for me it was business as usual with a better view.
            </p>
            <p>
              From a marina in Morocco I planned a four-country executive roadshow and pushed it through as
              Covid landed in March 2020: Singapore, Thailand, Malaysia, India, and back to the boat the day
              the borders shut. Then we spent five months stuck in Tangier, not legally allowed to leave,
              until the right letter and the right contact finally got us out.
            </p>
          </div>
          <div className="mt-8">
            <p className="eyebrow text-ink">What it taught me</p>
            <ul className="mt-4 space-y-2">
              {LESSONS.map((l) => (
                <li key={l} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                  <span className="text-ink">{l}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-8 font-serif text-lg italic text-accent-strong">
            The most intense remote work I have done, and proof I deliver when conditions are hard and the clock is running.
          </p>
        </div>
      </div>
    </section>
  );
}
