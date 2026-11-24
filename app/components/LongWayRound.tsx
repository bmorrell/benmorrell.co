// The canonical "long way round" section (the 2019-2023 sailing years).
// Copy is approved and lives here once, and any application page that opts in
// shows it. The root page carries a two-line version of the same words. Source of truth: vault Profile/Boat Journey.md.

const LESSONS = [
  "You never control the weather, so you focus on what you can control.",
  "When something breaks mid-passage, you stay calm, assess, plan, execute, review, and go again.",
  "Relationships across time zones are everything, because out there they are all you have.",
];

export default function LongWayRound({ id }: { id?: string }) {
  return (
    <section id={id} className="bm-wrap bm-section">
      <div className="bm-about">
        <h2 className="bm-label">The long way round</h2>
        <div className="bm-boat bm-boat--full">
          <p className="bm-boat__line">
            In 2019 we sold everything and sailed 6,000 miles with two kids under four. None of us
            knew how to sail.
          </p>
          <p className="bm-boat__sub">
            Four and a half years, nine countries, one 40-foot boat called The Long Summer. I ran
            the business the whole way.
          </p>
          <div className="bm-prose">
            <p>
              We wanted to be together every day and show the kids a full life up close, so we went. I kept
              working the entire time: leading Encoding.com&apos;s Europe and Asia expansion and building my
              consultancy, Ziplake, from the boat. Local SIMs, patchy 4G, a stack of routers, and once a
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
          <p className="bm-label">What it taught me</p>
          <ul className="bm-lessons">
            {LESSONS.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
          <div className="bm-prose">
            <p>
              The most intense remote work I have done, and proof I deliver when conditions are hard and the
              clock is running.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
