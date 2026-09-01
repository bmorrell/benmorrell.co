// Per-application landing pages. One entry = one page at /{slug}.
// `/target` appends an entry here when it generates an application; each page is noindex + unlinked.

export type Application = {
  slug: string; // {company}-{short-role}, e.g. "vercel-partnerships"
  company: string;
  role: string;
  headline: string; // Fraunces hero line, tailored to this role
  sub: string; // 1-2 supporting lines
  why: { title: string; body: string }[]; // 3-4 tailored proof points
  differentiator: string; // the one rare thing for this company
  metrics: { value: string; label: string }[]; // focused proof strip
  coverLetter?: string; // path under /public, e.g. "/letters/vercel-partnerships.pdf"
  // --- Optional expansive sections. Omit them and the page renders the standard template. ---
  deployments?: { place: string; meta: string; detail: string }[]; // field-deployment map
  approach?: { title: string; body: string }[]; // forward-looking: how I'd attack the role
  longWayRound?: boolean; // show the canonical sailing-years section (remote / self-directed roles)
};

export const applications: Application[] = [
  {
    slug: "vercel-partnerships",
    company: "Vercel",
    role: "Partner Lead, EMEA",
    headline: "A partnerships leader who actually builds on Vercel.",
    sub: "18+ years of partner-led GTM across EMEA and APAC, and I ship with Next.js and the AI SDK myself. I would bring both to your EMEA partner ecosystem.",
    why: [
      {
        title: "Partner-sourced pipeline at scale",
        body: "At Brightcove I recruited 15+ ISV and agency partners and ran regional execution of the global partner program. The channel drove 35% of regional pipeline while I grew the region from ~$4M to ~$11.5M ARR.",
      },
      {
        title: "Strategic partner deals closed",
        body: "Through Ziplake I structured and closed an exclusive global reseller agreement through the Roche Diagnostics channel, plus Tier-1 technology partnerships including Aptos ($500K).",
      },
      {
        title: "Co-sell with the field, across EMEA",
        body: "I turn agencies, ISVs and SIs into real co-sell pipeline with regional sales, and I have operated and transacted across 15+ countries.",
      },
    ],
    differentiator:
      "I build on Vercel. This site runs on it, I ship with Next.js and the AI SDK, and I build LLM agents and MCP servers of my own. That means I can hold my own with your product team and, more importantly, with the technical partners deploying on your platform.",
    metrics: [
      { value: "~$4M → ~$11.5M", label: "ARR grown at Brightcove Asia" },
      { value: "35%", label: "of regional pipeline via partners" },
      { value: "15+", label: "countries operated across" },
    ],
    coverLetter: "/letters/vercel-partnerships.pdf",
  },
  {
    slug: "crowdstrike-alliances",
    company: "CrowdStrike",
    role: "VP, Europe Alliances & Channels",
    headline: "A partner ecosystem leader who is fluent in the technology.",
    sub: "18+ years turning ISVs, SIs and resellers into partner-sourced revenue across EMEA and APAC, and I build AI-native GTM tooling myself. I would bring both to Europe's alliances organisation.",
    why: [
      {
        title: "Partner-sourced pipeline at scale",
        body: "At Brightcove I recruited 15+ strategic ISV and agency partners and ran regional execution of the global partner programs. The channel drove 35% of regional pipeline while I grew the region from ~$4M to ~$11.5M ARR.",
      },
      {
        title: "Strategic alliances closed and operationalised",
        body: "Through Ziplake I structured an exclusive global reseller agreement through the Roche Diagnostics channel, plus Tier-1 technology partnerships including Aptos ($500K), and built the forecasting, contracting and CRM cadence behind them.",
      },
      {
        title: "Co-sell with the field, metrics-driven",
        body: "I turn ISVs, SIs and resellers into real co-sell pipeline with regional sales, on a QBR and pipeline-review cadence, and I have led distributed teams across 15+ countries.",
      },
    ],
    differentiator:
      "Most alliances leaders can brief the technology but can't build it. An MEng and an engineering start mean I hold my own in a partner's technical review, and I don't just talk about AI: I ship my own GTM tooling and a production MCP server. For an AI-native platform, that is an alliances leader who already works the way the company does.",
    metrics: [
      { value: "~$4M → ~$11.5M", label: "ARR grown at Brightcove Asia" },
      { value: "35%", label: "of regional pipeline via partners" },
      { value: "15+", label: "strategic ISV and agency partners recruited" },
    ],
    coverLetter: "/letters/crowdstrike-alliances.pdf",
  },
  {
    slug: "enode-partnerships",
    company: "Enode",
    role: "Partnerships Manager",
    headline: "A partnerships closer who can talk to the OEM's engineers, not just its buyer.",
    sub: "18+ years sourcing, negotiating and closing OEM and technology partnerships end-to-end, and I build API and AI tooling myself. I would bring both to Enode's OEM ecosystem.",
    why: [
      {
        title: "OEM partnerships closed end-to-end",
        body: "For an IoT hardware company I sourced, negotiated and closed an exclusive global reseller agreement through the Roche Diagnostics channel, a seven-figure, three-year deal I ran from cold outreach to signed contract, which drove NHS sales and a ten-year deal in the Netherlands.",
      },
      {
        title: "Partner channels grown into real pipeline",
        body: "At Brightcove I recruited 15+ strategic technology partners that grew to 35% of regional pipeline, and led the team that closed the company's largest global deal at ~$4M ARR while growing the region from ~$4M to ~$11.5M ARR.",
      },
      {
        title: "The playbook built, not just worked",
        body: "At Livepeer I built the partnerships operating system from scratch, sourcing, contracting cadence, forecasting and CRM, and signed Tier-1 partners including a $500K deal with Aptos.",
      },
    ],
    differentiator:
      "Enode wants someone who can redesign the partnerships playbook with AI. I don't just use AI tools, I build them: my own AI agents, MCP servers and GTM automation, and I advise API-first founders. That means I can rebuild the process with AI and hold a credible conversation with an OEM's API team, not only its commercial one.",
    metrics: [
      { value: "7-figure", label: "OEM channel deal closed end-to-end" },
      { value: "35%", label: "of regional pipeline via partners" },
      { value: "~$4M → ~$11.5M", label: "ARR grown at Brightcove Asia" },
    ],
    coverLetter: "/letters/enode-partnerships.pdf",
  },
  {
    slug: "elevenlabs-partnerships",
    company: "ElevenLabs",
    role: "Revenue Partnerships, Southern Europe",
    headline: "A partner programme built from zero, by someone fluent in the API.",
    sub: "18+ years standing up reseller, integrator and consulting-partner programmes from 0 to 1 across EMEA and APAC, and I build on AI APIs myself. I am based in Valencia and would build your Southern Europe partner programme.",
    why: [
      {
        title: "Partner programmes built from scratch",
        body: "At Watching That I built the partnerships function from nothing and signed Brightcove, a partner the company had chased for three to four years, plus resellers and technology partners across Europe, the US and APAC. Standing up a programme 0 to 1 is the part of the job I like most.",
      },
      {
        title: "Systems integrators and resellers closed",
        body: "Opening APAC for Encoding.com from a written thesis, I signed the region's largest systems integrator and grew qualified pipeline 1200%. Through Ziplake I structured an exclusive global reseller agreement through the Roche Diagnostics channel.",
      },
      {
        title: "Partner-sourced pipeline at scale, with co-sell",
        body: "At Brightcove I recruited 15+ ISV and agency partners that drove 35% of regional pipeline, ran regional execution of the global partner programme, and grew the region from ~$4M to ~$11.5M ARR.",
      },
    ],
    differentiator:
      "You are enabling integrators and resellers to build on a voice-AI API. My background is an MEng and a presales-to-VP path, and today I build production AI tooling myself, LLM and API applications and a production MCP server among them. Comfortable with technical, API-first products is not a box I tick, it is how I work.",
    metrics: [
      { value: "0 → 1", label: "partnerships function built from scratch" },
      { value: "35%", label: "of regional pipeline via partners" },
      { value: "~$4M → ~$11.5M", label: "ARR grown at Brightcove Asia" },
    ],
    coverLetter: "/letters/elevenlabs-partnerships.pdf",
  },
  {
    slug: "metabase-partnerships",
    company: "Metabase",
    role: "Head of Partnerships",
    headline: "A partner function built from zero, by someone fluent in the AI and data stack.",
    sub: "18+ years building partner-led GTM across B2B SaaS, AI and data infrastructure, and I ship LLM agents and MCP servers myself. I would build Metabase's partner function from the ground up.",
    why: [
      {
        title: "A partnerships function built from scratch",
        body: "At Watching That I built the partnerships function from nothing and signed Brightcove, a partner the company had chased for three to four years, plus more across Europe, the US and APAC. Standing up the function 0 to 1 is the part of the job I like most.",
      },
      {
        title: "Partners turned into measurable pipeline",
        body: "At Brightcove I recruited 15+ ISV and agency partners and ran regional execution of the global partner program. The channel drove 35% of regional pipeline while I grew the region from ~$4M to ~$11.5M ARR. Pipeline, not logos on a slide.",
      },
      {
        title: "The systems and cadences behind the relationships",
        body: "At Livepeer I built the commercial operating system from scratch, forecasting, contracting cadence, CRM and partner reporting, and signed Tier-1 partners including a $500K deal with Aptos. That is what turns partnerships into a repeatable, measurable function.",
      },
    ],
    differentiator:
      "Metabase's most important partners are AI vendors and data warehouse providers, and I build the same class of technology myself: LLM agents, MCP servers and GTM automation. That means I can hold my own with the solutions engineers who influence deals in the field, not just the execs who sign them. You want someone credible at every altitude. I have been the solutions engineer and the VP, and I am still hands-on in the stack today.",
    metrics: [
      { value: "0 → 1", label: "partnerships function built from scratch" },
      { value: "35%", label: "of regional pipeline via partners" },
      { value: "~$4M → ~$11.5M", label: "ARR grown at Brightcove Asia" },
    ],
    coverLetter: "/letters/metabase-partnerships.pdf",
  },
  {
    slug: "sales-decision-tools-partnerships",
    company: "Early-stage decision-intelligence company",
    role: "Director, Strategy & Partnerships (Fractional)",
    headline: "I find the market for something new, then prove it with paid traction.",
    sub: "18+ years taking early, complex products to market from a thesis, building the first partnerships, and turning what works into a repeatable commercial playbook. Fractional and fully remote is how I already work.",
    why: [
      {
        title: "Early and complex, taken to paid traction",
        body: "Opening APAC for Encoding.com, I started from a written market-entry thesis, chose the markets, ran the roadshow and developed the pipeline myself. Qualified pipeline grew 1200%, I signed the region's largest systems integrator, and I closed multiple six-figure ARR contracts.",
      },
      {
        title: "The first partnerships, built from nothing",
        body: "At Watching That I stood up the partnerships function from scratch and signed a partner the company had chased for years. For an IoT company I mapped an ecosystem and landed an exclusive global reseller agreement through the Roche Diagnostics channel.",
      },
      {
        title: "What works, turned into a repeatable playbook",
        body: "At Livepeer I built the commercial operating system, the packaging, pricing, forecasting and contracting cadence that made an early motion repeatable, and I have advised 20+ founders on go-to-market and product-market fit.",
      },
    ],
    differentiator:
      "This role needs someone who can make a new category legible to serious buyers in plain sentences. My background is an engineering degree and a presales-to-VP path, and I build AI tooling myself, so I translate complex, technical products into something a buyer understands and pays for. And I already work exactly the way this seat is structured, fractional and fully remote.",
    metrics: [
      { value: "1200%", label: "qualified pipeline grown, from a market-entry thesis" },
      { value: "20+", label: "founders advised on GTM and product-market fit" },
      { value: "0 → 1", label: "partnership functions built from scratch" },
    ],
    coverLetter: "/letters/sales-decision-tools-partnerships.pdf",
  },
  {
    slug: "linnworks-partnerships",
    company: "Linnworks",
    role: "Global Partnerships Director",
    headline: "A global partner ecosystem, owned end to end.",
    sub: "18+ years building and leading partner ecosystems across EMEA, NORAM and APAC, from ISVs and resellers to marketplace and platform alliances. I would own Linnworks' global partner ecosystem and the distributed team behind it.",
    why: [
      {
        title: "Partner-sourced pipeline at scale",
        body: "At Brightcove I recruited 15+ ISV and agency partners and ran regional execution of the global partner program. The channel drove 35% of regional pipeline while I grew the region from ~$4M to ~$11.5M ARR. Pipeline contribution, reported to the executive team, not logos on a slide.",
      },
      {
        title: "High-value partnerships closed and operationalised",
        body: "Through Ziplake I structured and closed an exclusive global reseller agreement through the Roche Diagnostics channel, a seven-figure, three-year deal that drove NHS sales and a ten-year contract in the Netherlands. Turning a target platform into signed, revenue-producing partnership is a motion I have run repeatedly.",
      },
      {
        title: "Distributed, multi-regional teams led",
        body: "At Brightcove I built and led a 20+ person team across sales, partnerships, solutions and customer success, spanning 15+ countries, with under 10% annual turnover and 80% of promotions grown internally. Leading a partnerships function across EMEA and NORAM is ground I have covered.",
      },
    ],
    differentiator:
      "Linnworks lives or dies by its marketplace and platform integrations, and I can sit with the partner's API and integration team, not just its commercial one. An MEng and a presales-to-VP path mean the technical conversation is native to me, and I still build AI and API tooling myself today. That is a partnerships leader who is credible at every altitude of a technical ecosystem.",
    metrics: [
      { value: "35%", label: "of regional pipeline via partners" },
      { value: "~$4M → ~$11.5M", label: "ARR grown at Brightcove Asia" },
      { value: "7-figure", label: "global reseller channel deal closed" },
    ],
    coverLetter: "/letters/linnworks-partnerships.pdf",
  },
  {
    slug: "wck-role",
    company: "World Central Kitchen",
    role: "Director, Response Technology Operations",
    headline: "I make technology work in the places it usually doesn't.",
    sub: "For 18 years I have designed, built, deployed and supported technology in the field, on deadlines that do not move. Satellite newsgathering kits in Cameroon and Gallipoli, the Beijing Olympics, a national digital transition in Papua New Guinea. I would like to bring that to WCK's Response Technology and Data teams.",
    why: [
      {
        title: "Kit that anyone can deploy",
        body: "At Nine Network I designed and built 20 ruggedised satellite newsgathering kits. Each one paired a laptop with a BGAN satellite terminal and an encoder that got a full broadcast camera down to 256 kbps. I wrote the procedures that went with them, so a camera crew could land somewhere and be live in two or three minutes. I asset tagged every component, kept the inventory accurate, and made sure the kits were tested and ready before anyone needed them. Keeping response kit ready to move is the same job.",
      },
      {
        title: "Being the escalation point",
        body: "As VP at Brightcove I was the escalation point for the region, covering hundreds of customers across 15+ countries on a platform where availability was the product. When a data centre fire in Boston took out one of our critical APIs, I ran the regional response to our emergency protocol. That meant a global bridge call every 30 minutes, and fielding customers in between to reassure them we would maintain availability and service.",
      },
      {
        title: "Building a team and then trusting it",
        body: "I built and led a team of 20+ across Singapore, Mumbai and New Delhi, managing managers as well as individual contributors, with under 10% annual turnover and 80% of promotions grown internally. In Papua New Guinea I trained a station through its analogue to digital switch, then went back to the accommodation so they could run their first digital bulletin without me standing over them. They lost audio for 15 minutes. They also fixed it themselves, and they were better for it.",
      },
    ],
    deployments: [
      {
        place: "Cameroon",
        meta: "Satellite newsgathering",
        detail: "There was no mobile signal at the site, but the BGAN got through. We were the only Australian network able to cover the story, because of the kit. The newsroom trusted it enough to run it live on the 6pm news, and then started promoting the technology on air.",
      },
      {
        place: "Australia",
        meta: "Outside broadcasts, twice a week",
        detail: "Twice a week I was out at sports matches running the truck. Every one of them needed testing and support beforehand, and the equipment had to stay up once we were live. That is where I learnt operational resilience, in conditions that tested it properly.",
      },
      {
        place: "Papua New Guinea",
        meta: "Analogue to digital transition",
        detail: "I spent a few weeks in Port Moresby delivering training, handover and support as a national broadcaster moved to digital. Security was a real concern and we had escorts to and from the station. The people there were welcoming and I learnt a lot about working with a team I had only just met.",
      },
      {
        place: "Myanmar",
        meta: "South-East Asia Games, 2013",
        detail: "Weeks on site in the country's new capital delivering the Games broadcast. The infrastructure was difficult for a lot of reasons at once, and most of the job was working around it.",
      },
      {
        place: "Malaysia",
        meta: "National IPTV build",
        detail: "A large project and weeks on site building an IPTV system for a national telco. Systems integration delivered in country, to a handover date that did not move.",
      },
      {
        place: "Beijing",
        meta: "Olympic Games, 2008",
        detail: "I designed and delivered a national broadcaster's entire digital presence for the Games on my own. Eight weeks on the ground with a crew of 24, and the first time they had filed live and on demand over fibre.",
      },
      {
        place: "Gallipoli, Bali and wildfire zones",
        meta: "Field deployments",
        detail: "The same kits went wherever the story was, including remote locations, fire grounds and commemorations on the other side of the world. That was the point of building them to be picked up and carried.",
      },
    ],
    approach: [
      {
        title: "Standardise so anyone can deploy",
        body: "The reason 20 kits worked is that none of them needed me. Same build every time, labelled parts, and a written procedure someone could follow under pressure without an engineering background. If WCK is centralising in order to scale activations, that is the same exercise. Make the thing repeatable first, then make it teachable.",
      },
      {
        title: "Get readiness right before it matters",
        body: "Accurate inventory, equipment tested before anyone needs it, on call that people actually understand, and a clear escalation path. None of it is interesting and all of it decides whether a team is working on day one or day four.",
      },
      {
        title: "Close the loop after every activation",
        body: "Field teams already know what went wrong. The job is capturing it while it is still fresh and turning it into the next playbook. At Livepeer I built the operating system underneath a global team, including forecasting, cadence, all of the documentation and the training, where there had been none before.",
      },
    ],
    differentiator:
      "In October 2024 the DANA floods hit Valencia, where I live. Valencia lost many lives and what I saw moved me. Thousands of people got up and went without waiting for permission or for government, and I volunteered and went out to the affected zones myself. What I took from it was that organisation alone is not enough, you need a system. I had already directed my family and friends to donate to WCK, because the model put money into local farmers and restaurants and not just meals. Closing the gap between people willing to show up and the systems that make showing up count is the work I want to do.",
    metrics: [
      { value: "20", label: "satellite newsgathering kits I built, maintained and sent worldwide" },
      { value: "2-3 min", label: "from landing on site to filing live" },
      { value: "100%", label: "the minimum delivery level, live and in the field" },
    ],
    longWayRound: true,
  },
  {
    slug: "spire-climate",
    company: "Spire Global",
    role: "Sales Manager, Weather & Climate (EMEA & APAC)",
    headline: "I have bet my family's safety on a weather forecast.",
    sub: "18+ years selling data platforms and APIs across EMEA and APAC, and four and a half years reading the forecast every morning before deciding whether we moved. I would bring both to Spire's weather and climate territory.",
    why: [
      {
        title: "A territory owned, and beaten",
        body: "At Brightcove I owned Asia across 15+ countries and grew it from ~$4M to ~$11.5M ARR as VP, exceeding quota every year at 120%+ attainment. I led the team that closed the company's largest global deal at ~$4M ARR, and grew average account value from $40K to $250K+.",
      },
      {
        title: "Built one of these from nothing before",
        body: "For Encoding.com, an API-first video SaaS, I wrote the APAC market-entry thesis, ran an executive roadshow across Singapore, India, Malaysia and Thailand, grew qualified pipeline 1200%, signed the largest systems integrator in APAC and closed multiple six-figure ARR contracts. All while expanding European accounts including Sky, BBC and ITV. Running EMEA and APAC from one desk is not theoretical for me.",
      },
      {
        title: "Partner ecosystem as leverage, not decoration",
        body: "I recruited 15+ ISV and agency partners at Brightcove and the channel grew to 35% of regional pipeline. Through Ziplake I negotiated an exclusive global reseller agreement through the Roche Diagnostics channel, which drove NHS sales and a 10-year deal with a Netherlands hospital group.",
      },
    ],
    differentiator:
      "In 2019 we sold up and sailed ~6,000 nautical miles across nine countries with two children under four. Forecast data was not a product to me then. It was the thing I read every morning before deciding whether we moved, and getting it wrong had a cost my family would pay. I know exactly what that data is worth when the decision is operational and the downside is real, which is the case Spire's customers are making every day. I do not come from meteorology or earth observation, and I would rather say so than oversell it. What I bring is a seller who has taken complex technical data products to regulated and public-sector buyers through formal tenders, and who gets technical fast with an MEng behind it.",
    metrics: [
      { value: "~$4M → ~$11.5M", label: "ARR grown at Brightcove Asia" },
      { value: "120%+", label: "quota attainment, every year as VP" },
      { value: "1200%", label: "qualified pipeline growth opening APAC from scratch" },
    ],
    coverLetter: "/letters/spire-climate.pdf",
    longWayRound: true,
  },
  {
    slug: "supercritical-partnerships",
    company: "Supercritical",
    role: "Head of Partnerships (supply side)",
    headline: "A marketplace is only as good as the supply side.",
    sub: "18+ years recruiting, qualifying and contracting partners for B2B technology companies, and signing the long-dated agreements that make a market liquid. I would bring that to your carbon removal supply.",
    why: [
      {
        title: "Long-dated agreements, signed",
        body: "Offtake is forward commitment with a serious counterparty, and that is the deal I have done repeatedly. I landed an exclusive global reseller agreement through the Roche Diagnostics channel, an $80B counterparty, on a three-year minimum and from no existing channel. It drove multiple NHS sales and a ten-year contract with OLVG in the Netherlands. At Brightcove I led the team that closed the company's largest deal globally, $12M over three years.",
      },
      {
        title: "Supply side built from nothing",
        body: "At Brightcove I recruited 15+ ISV and agency partners into a channel that ended up sourcing 35% of regional pipeline, while I grew the region from ~$4M to ~$11.5M ARR. At Watching That I built the partnerships function from scratch and signed a partner the company had chased for four years. Recruiting at volume, then keeping the good ones productive, is the motion I know best.",
      },
      {
        title: "A qualification bar worth defending",
        body: "Listing 12% of what you vet is the discipline that makes the marketplace mean something. I have spent my career on the commercial side of that tension, where the pressure is always to loosen the bar to make the number. I would rather protect it, and I would rather say that out loud before I join than discover we disagree afterwards.",
      },
    ],
    differentiator:
      "I am new to carbon removal and I would rather tell you that than oversell it. What I am not new to is building a supply side from nothing and holding multi-year commercial agreements together with counterparties who take a long time to say yes. On why climate, and why now: I live in Valencia, and I was here for the DANA floods in October 2024. Watching your own city go under concentrates the mind on what you spend the next decade doing. I have eighteen years of partner-led revenue behind me and I would like to point it at something that matters.",
    metrics: [
      { value: "~$4M → ~$11.5M", label: "ARR grown at Brightcove Asia" },
      { value: "35%", label: "of regional pipeline sourced through partners" },
      { value: "$12M", label: "largest global deal, committed over three years" },
    ],
    coverLetter: "/letters/supercritical-partnerships.pdf",
    longWayRound: true,
  },
  {
    slug: "revenuecat-partnerships",
    company: "RevenueCat",
    role: "Senior Partnerships Manager, Technology Ecosystem",
    headline: "A partnerships leader who reads the SDK.",
    sub: "18+ years building technology partner ecosystems for API-first developer companies, and I ship production software myself. Your posting says this is not about collecting the largest possible portfolio of partners. I have spent my career arguing exactly that.",
    why: [
      {
        title: "Depth over breadth, and the receipts",
        body: "Through Ziplake I went after one partnership: Roche Diagnostics, an $80B counterparty, no existing channel, cold outreach. I built the internal case, ran the engagement and negotiated an exclusive global reseller agreement on a three-year minimum. Signing it was the easy half. What made it matter was multiple NHS sales and a ten-year contract with OLVG in the Netherlands. One relationship, chosen deliberately, beat any portfolio I could have assembled in the same time.",
      },
      {
        title: "An ecosystem that produced a number",
        body: "At Brightcove I recruited 15+ ISV and agency partners into a curated ecosystem, not the biggest one I could build, and the channel grew to source 35% of regional pipeline. Over the same period I grew the region from ~$4M to ~$11.5M ARR as VP, exceeding quota every year at 120%+ attainment.",
      },
      {
        title: "Ecosystems nobody can measure do not stay funded",
        body: "At Livepeer I signed Tier-1 technology partnerships including Aptos at $500K, then built the commercial operating system underneath them: forecasting, contracting cadence, CRM and partner training. That is your six-month and twelve-month success criterion, and it is the part most partnerships people skip.",
      },
    ],
    differentiator:
      "Your technical bar is the one most applicants will fail, and it is the reason I am writing. I do not need an integration translated for me. I have an MEng in Electronic Engineering, I went Senior Solutions Engineer to Technical Director to Vice President at Brightcove in three years, and I build now: LLM agents, an MCP server, a Next.js platform on Vercel with Stripe billing and a configurable pricing engine behind it. I have wired up a subscription stack as the developer, which is a useful seat from which to judge which integrations are worth your engineering time and which are not. What I will not oversell: I have not worked in the mobile app ecosystem. Eighteen years in API-first developer SaaS is adjacent, not identical, and I would rather tell you that now than have you find it in week three.",
    metrics: [
      { value: "35%", label: "of regional pipeline sourced through partners" },
      { value: "~$4M → ~$11.5M", label: "ARR grown at Brightcove Asia" },
      { value: "10 years", label: "the contract one deliberate partnership produced" },
    ],
    coverLetter: "/letters/revenuecat-partnerships.pdf",
    longWayRound: true,
  },
  {
    slug: "remote-partner-sales",
    company: "Remote",
    role: "Director, Strategic Partner Sales",
    headline: "I have carried the partner-sold number, from both sides of the motion.",
    sub: "18+ years owning bookings and ARR through partners across EMEA and APAC, including a motion where every dollar depended on another company's sellers choosing to sell our product. That is embedded partner sales, in mirror image.",
    why: [
      {
        title: "Partner-sold revenue from the partner's side",
        body: "Advising BinaryTech, I landed and ran an exclusive global reseller agreement through the Roche Diagnostics channel. Our revenue existed only if Roche's sellers sold: so I built the enablement, cadence, incentives and executive engagement that made them independent at it. Result: multiple NHS wins and a 10-year contract with OLVG in the Netherlands.",
      },
      {
        title: "Partner-sourced pipeline at scale, while owning the number",
        body: "At Brightcove I recruited 15+ strategic ISV and agency partners and ran regional execution of the global partner programs. The channel drove 35% of regional pipeline while I grew Asia from ~$4M to ~$11.5M ARR, beating quota every year.",
      },
      {
        title: "A real team, run properly",
        body: "I built and led a 20+ person org across Singapore, Mumbai and New Delhi: managed managers, under 10% turnover, 80% of promotions home-grown. Setting operating rhythm for account managers and embedded sales leads is familiar ground.",
      },
    ],
    differentiator:
      "Remote requires AI and automation capability in every role. For me that is not a checkbox: I build my own LLM agents, MCP servers and GTM automation, and I have worked fully remote and async since 2019. I will not oversell the gap either: I have not sold HR tech. I have made a $80B partner's channel sell a product that was not theirs, which I believe is the harder half of this job.",
    metrics: [
      { value: "~$4M → ~$11.5M", label: "ARR grown at Brightcove Asia, 120%+ quota every year" },
      { value: "35%", label: "of regional pipeline via partners" },
      { value: "10 years", label: "the contract the Roche channel motion produced" },
    ],
    coverLetter: "/letters/remote-partner-sales.pdf",
    longWayRound: true,
  },
  {
    slug: "climate-europe-lead",
    company: "Confidential climate technology company",
    role: "European Commercial Lead",
    headline: "I build markets. Europe, for a climate company, is the one I want next.",
    sub: "18+ years launching and growing regions for technical B2B platforms. Two full market builds on the record, both from a standing start, both to revenue. This role asks for exactly that motion.",
    why: [
      {
        title: "A region built, from ~$4M to ~$11.5M ARR",
        body: "At Brightcove I owned Asia as VP: sales, partnerships, solutions engineering and customer success across 15+ countries. I grew the region from ~$4M to ~$11.5M ARR, opened four new country markets worth $2M+ in new ARR, exceeded quota every year at 120%+ attainment, and led the team that closed the company's largest global deal at ~$4M ARR.",
      },
      {
        title: "A market opened from a written thesis",
        body: "Encoding.com had no Asia-Pacific presence. I wrote the market-entry thesis, ran the executive roadshow, grew qualified pipeline 1200%, signed the region's largest systems integrator as a partner, and personally closed multiple 6-figure ARR contracts. Strategy through to revenue, hands-on, as one continuous job.",
      },
      {
        title: "Regulation-led, technical value propositions",
        body: "My most recent channel win was an exclusive global reseller agreement through Roche Diagnostics: a standards-driven, regulation-led sale that produced multiple NHS wins and a 10-year hospital contract in the Netherlands. Complex operational data, reporting obligations and technical buyers are home ground, not a stretch.",
      },
    ],
    approach: [
      {
        title: "Convert the momentum first",
        body: "You have early European traction and live opportunities. The first quarter is spent closing what exists and mining those customers for the repeatable story: who buys, why now, what the deal really hinges on.",
      },
      {
        title: "Partnerships as the multiplier",
        body: "One person cannot cover a continent. I have made partner channels source 35% of regional pipeline, and I would map the influential organisations in renewable energy and decarbonisation early, so the market builds while I sleep.",
      },
      {
        title: "Earn the hiring plan",
        body: "The future team should be designed from evidence: which segments closed, which motion worked. I have built a 20+ person regional org before. I know what the first three hires look like once the data says it is time.",
      },
    ],
    differentiator:
      "I will name the gap before you do: I have not sold in the climate market. What I bring is the thing the posting leads with, a proven ability to create a market rather than inherit one, plus an engineer's fluency (MEng, solutions engineer to VP) with exactly the kind of technical, regulation-led product this is. The move into climate is deliberate. I want the next decade of my work to compound somewhere that matters, and I am bringing a market-building record earned in high-growth tech with me.",
    metrics: [
      { value: "~$4M → ~$11.5M", label: "ARR grown at Brightcove Asia as VP" },
      { value: "1200%", label: "qualified pipeline growth opening APAC for Encoding.com" },
      { value: "35%", label: "of regional pipeline sourced through partners" },
    ],
    coverLetter: "/letters/climate-europe-lead.pdf",
    longWayRound: true,
  },
  {
    slug: "vc-partnerships",
    company: "Confidential (via Go Fractional)",
    role: "Fractional Head of Startup & VC Partnerships",
    headline: "A partnerships leader who is native in your world: video, startups and the people who fund them.",
    sub: "18+ years building partner ecosystems for video and B2B tech companies, seven of them fractionally. I turn relationships across founders, investors and agencies into qualified pipeline and paid engagements.",
    why: [
      {
        title: "Partnerships functions built from zero",
        body: "At Watching That I stood up the partnerships function from nothing and signed Brightcove, a partner they had pursued for 3 to 4 years, plus 3 to 4 more across Europe, the US and APAC. At Brightcove I recruited 15+ ISV and agency partners whose channel drove 35% of regional pipeline.",
      },
      {
        title: "Partner and retainer models that stick",
        body: "Through my consultancy I structured an exclusive global reseller agreement through the Roche Diagnostics channel: 7 figures, 3-year minimum. I design partner models that complement a firm's own services rather than compete with them.",
      },
      {
        title: "A live startup and VC network, built on content",
        body: "I have advised 20+ B2B SaaS and AI founders on GTM, and I host the GTM Expertise podcast: 26+ episodes interviewing sales and partnerships leaders. Building relationships through useful content is already how I operate.",
      },
    ],
    differentiator:
      "Video is my native territory, not an adjacency. I started in broadcast production and post-production at Nine Network, delivered the Beijing 2008 Olympics digital presence solo, and spent a decade selling video SaaS at Brightcove and Encoding.com. I can talk founder-story content with a VC platform team in the morning and production workflow with your post team in the afternoon. And the mechanics come built-in: I run my own CRM, outbound sequencing and lead-scoring stack, built with AI, myself.",
    metrics: [
      { value: "15+", label: "ISV and agency partners recruited at Brightcove" },
      { value: "35%", label: "of regional pipeline sourced through partners" },
      { value: "20+", label: "startup founders advised on GTM" },
    ],
    coverLetter: "/letters/vc-partnerships.pdf",
    longWayRound: true,
  },
  {
    slug: "south-pole-bd",
    company: "South Pole",
    role: "Director, Business Development, Global (CORSIA & Long-Term Offtake)",
    headline: "A commercial leader who closes flagship deals, now pointed at climate.",
    sub: "18+ years originating and closing complex, high-value deals for global technology companies, including a $12M flagship transaction. I want to bring that muscle to the CORSIA market while the window to define it is open.",
    why: [
      {
        title: "The deal shape CORSIA demands",
        body: "At Brightcove my team closed the company's largest deal globally: $12M over three years, a long-cycle, multi-stakeholder, consultative negotiation. Flagship-transaction origination with buyers new to contracting at scale is exactly the work of building compliance demand.",
      },
      {
        title: "Global revenue ownership in a matrixed org",
        body: "As VP Asia I grew the region from ~$4M to ~$11.5M ARR inside a NASDAQ-listed global organisation, exceeding quota every year at 120%+ while holding margin discipline, and led a 20+ person commercial team across three countries with under 10% turnover.",
      },
      {
        title: "Regulated markets entered cold, long-term contracts signed",
        body: "I took an IoT firm into European medical diagnostics from a standing start: an exclusive global reseller agreement through the Roche Diagnostics channel (7 figures, 3-year minimum), NHS wins, and a 10-year contract in the Netherlands. New domain, long-term contracting, delivered.",
      },
    ],
    differentiator:
      "I have not spent a decade in carbon markets, and I will not pretend otherwise. What I bring is the rarer half: proven flagship-deal firepower, global commercial leadership, and an engineering degree that lets me get credibly fluent in registry, MRV and Article 6 mechanics fast. Climate is where I have deliberately chosen to point that experience next, and a lean, hands-on organisation is where I work best.",
    metrics: [
      { value: "$12M", label: "largest global deal closed (3-year)" },
      { value: "~$4M → ~$11.5M", label: "ARR grown as VP Asia, Brightcove" },
      { value: "120%+", label: "quota attainment, every year" },
    ],
    coverLetter: "/letters/south-pole-bd.pdf",
  },
  {
    slug: "instructure-partnerships",
    company: "Instructure",
    role: "VP, Partner Ecosystem",
    headline: "A partner ecosystem leader who has built the reseller channel, not just run it.",
    sub: "18+ years turning resellers, ISVs and services partners into partner-sourced revenue across EMEA and APAC — including a global reseller agreement through the Roche Diagnostics channel. I would bring that build-and-scale muscle to Instructure's partner ecosystem.",
    why: [
      {
        title: "Multinational reseller programs, end to end",
        body: "Through Ziplake I negotiated an exclusive global agreement to resell through the Roche Diagnostics channel — 7 figures, 3-year minimum — then made it produce: multiple NHS wins and a 10-year deal with OLVG in the Netherlands. Sourcing, C-suite negotiation, onboarding, enablement and measurement, all mine.",
      },
      {
        title: "Partner-sourced pipeline at scale",
        body: "At Brightcove I recruited 15+ strategic ISV and agency partners and ran regional execution of the global partner programs. The channel drove 35% of regional pipeline while I grew Asia from ~$4M to ~$11.5M ARR and led a 20+ person team across three countries.",
      },
      {
        title: "Education, sold into — not just admired",
        body: "I led UK market entry for Campus Plus, an Australian edtech: opened the office, ran a 20-part webinar series as the acquisition channel, and signed a UK university. I know how institutions buy.",
      },
    ],
    differentiator:
      "Most partner ecosystem leaders can run a program; fewer have negotiated the >$1M partnerships themselves and built the operating cadence behind them. I have done both — and I am technical enough to sit credibly with your Integration and ISV partners: an engineer by training who still builds with APIs and AI tooling today.",
    metrics: [
      { value: "35%", label: "of regional pipeline via partners" },
      { value: "~$4M → ~$11.5M", label: "ARR grown at Brightcove Asia" },
      { value: "7-figure", label: "global Roche Diagnostics reseller deal" },
    ],
    coverLetter: "/letters/instructure-partnerships.pdf",
  },
  {
    slug: "evergreen-sales",
    company: "Evergreen Services Group",
    role: "Head of Sales (UK)",
    headline: "A sales leader who has run this exact mandate, and built the engine himself.",
    sub: "18+ years leading B2B SaaS and recurring-revenue sales organisations. At Brightcove I took a region from reactive account management and marketing-dependent pipeline to a data-driven, 20+ person sales org at ~$11.5M ARR.",
    why: [
      {
        title: "The mandate, already delivered once",
        body: "As VP Asia at Brightcove I led new business, account management and pre-sales as one organisation: 20+ people, managers managed, under 10% turnover, 80% of AE promotions home-grown. The region grew from ~$4M to ~$11.5M ARR and I beat quota every year at 120%+.",
      },
      {
        title: "Account management, reactive to proactive",
        body: "I professionalized the account base through segmentation and strategic account planning, pairing top performers with the highest-potential accounts. Average account value grew from $40K to $250K+ ACV, and my team closed the company's largest global deal at $12M over three years.",
      },
      {
        title: "Rev-ops built from the inside",
        body: "At Livepeer I stood up the commercial operating system myself: forecasting, deal and contracting cadence, and the CRM as the single frame of reference. A HubSpot implementation is not a project I would sponsor from a distance; it is work I know first-hand.",
      },
    ],
    differentiator:
      "Your nice-to-have list asks for experience integrating AI tools into sales processes. I build them: outbound automation, lead scoring, AI agents and MCP servers, shipped and in use. Combined with hands-on partner economics, including a 7-figure exclusive reseller agreement through the Roche Diagnostics channel, that is a rare pairing for a Head of Sales.",
    metrics: [
      { value: "~$4M → ~$11.5M", label: "ARR grown as VP Asia, Brightcove" },
      { value: "$40K → $250K+", label: "average ACV through proactive AM" },
      { value: "120%+", label: "quota attainment, every year" },
    ],
    coverLetter: "/letters/evergreen-sales.pdf",
    longWayRound: true,
  },
  {
    slug: "kallipr-partnerships",
    company: "Kallipr",
    role: "Partner Manager / Head of Partnerships, Europe",
    headline: "A partnerships leader who has built an IoT channel in Europe from zero.",
    sub: "18+ years of partner-led growth across EMEA and APAC, including a 7-figure IoT reseller agreement through the Roche Diagnostics channel. I started as an engineer in Australia, in rugged field hardware, and I would bring both halves to Kallipr's European build.",
    why: [
      {
        title: "An IoT channel built from zero in Europe",
        body: "As commercial lead for BinaryTech, an IoT hardware company with no European presence, I closed an exclusive global agreement to resell through the Roche Diagnostics channel: 7 figures, 3-year minimum. It produced multiple NHS tender wins and a 10-year deal with OLVG in the Netherlands.",
      },
      {
        title: "Distributors and resellers at scale",
        body: "At Brightcove I recruited 15+ ISV, agency and reseller partners and ran regional execution of the global partner program: recruitment, onboarding, enablement and joint go-to-market. The channel drove 35% of regional pipeline while I grew the region from ~$4M to ~$11.5M ARR.",
      },
      {
        title: "Australia is home ground",
        body: "I am an Australian citizen and my engineering career started in Sydney, at Nine Network and at systems integrator Gencom. I have also been the European end of an Australian company before: I led UK market entry for Campus Plus, where I opened the office and signed their first UK university.",
      },
    ],
    differentiator:
      "An engineer by training (MEng) who has lived the rugged-hardware world your partners sell into: at Nine Network I designed, built and supported ~20 rapid-deployment flyaway kits that were live within minutes of landing, in disaster zones on every continent. I also spent years as a Bid Manager on complex tenders. Your distributors and your Brisbane leadership team would not need to translate for me.",
    metrics: [
      { value: "7-figure", label: "Roche Diagnostics channel agreement, 3-year minimum" },
      { value: "35%", label: "of regional pipeline via partners at Brightcove" },
      { value: "~$4M → ~$11.5M", label: "ARR grown as VP Asia, Brightcove" },
    ],
    coverLetter: "/letters/kallipr-partnerships.pdf",
    longWayRound: true,
  },
  {
    slug: "roche-gtm-lead",
    company: "Roche Diagnostics",
    role: "GTM Lead (Digital Infrastructure), Roche Information Solutions",
    headline: "I have already built a go-to-market motion through Roche Diagnostics. From the outside.",
    sub: "18+ years of go-to-market and partner-led growth across B2B SaaS and technology platforms. The part that matters here: an exclusive global agreement to resell a cloud-connected medical platform through the Roche Diagnostics channel, built with more than 30 Roche people.",
    why: [
      {
        title: "The Roche channel, already navigated",
        body: "As commercial lead for the medical IoT company BinaryTech, I sourced and closed an exclusive global agreement to resell its BinaryMed platform through the Roche Diagnostics channel: 7 figures, 3-year minimum, signed with Roche Diagnostics HQ. It produced multiple NHS sales and a 10-year deal with OLVG in the Netherlands.",
      },
      {
        title: "Built with 30+ Roche employees",
        body: "That agreement took direct work with more than 30 people across Roche commercial, product and affiliate teams, from first outreach at trade shows through contracting, channel enablement and joint account work. I know how a technical product becomes commercially real inside this matrix, and what an affiliate needs before it will carry something.",
      },
      {
        title: "Affiliate enablement at scale",
        body: "At Brightcove I accelerated adoption of a digital platform across priority geographies by enabling a distributed seller network. I recruited 15+ ISV and agency partners and ran regional execution of the global partner programs. The channel drove 35% of regional pipeline while I grew the region from ~$4M to ~$11.5M ARR.",
      },
    ],
    differentiator:
      "Most candidates for this seat will have to learn Roche. I have already sold through it. I have also sat on the technical side of the table for 18 years: MEng Electronic Engineering, a Senior Solutions Engineer to VP progression, and a current hands-on practice building AI agents and MCP servers. Inside a Product Core Team I can hold the roadmap conversation as well as the revenue one.",
    metrics: [
      { value: "7-figure", label: "exclusive Roche Diagnostics reseller agreement, 3-year minimum" },
      { value: "30+", label: "Roche employees worked with to build it" },
      { value: "~$4M → ~$11.5M", label: "ARR grown as VP Asia, Brightcove" },
    ],
    coverLetter: "/letters/roche-gtm-lead.pdf",
  },
  {
    slug: "block-square-partnerships",
    company: "Block",
    role: "Head of Square Partnerships, EMEA",
    headline: "Your EMEA partnership remit runs through Spain. I already live in it.",
    sub: "18+ years of partner-led growth in B2B SaaS, across the United Kingdom, Europe and Asia. A partner channel that grew to source 35% of regional pipeline, and an exclusive global reseller agreement negotiated with an $80B counterparty.",
    why: [
      {
        title: "Partners measured as pipeline, not as logos",
        body: "At Brightcove I recruited 15+ ISV, agency and reseller partners into a deliberately curated ecosystem and ran regional execution of the global partner programs. The channel grew to source 35% of regional pipeline, a partner-sourced number the business reported on, while I took the region from ~$4M to ~$11.5M ARR as VP.",
      },
      {
        title: "Sourced cold, negotiated at headquarters",
        body: "Representing a medical IoT company with no European channel, I went after Roche Diagnostics from a standing start, built the internal case and negotiated an exclusive global reseller agreement through their channel: 7 figures on a 3-year minimum. The revenue came after signature, with multiple NHS sales and a 10-year contract with OLVG in the Netherlands.",
      },
      {
        title: "A team that executed in local markets",
        body: "I built and led a 20+ person team over Singapore, Mumbai and New Delhi that collaborated with US headquarters and executed locally. I managed managers, held turnover under 10% in a competitive market, and grew 80% of account executive promotions internally.",
      },
    ],
    differentiator:
      "Most candidates for this seat will cover Spain from London. I live in Valencia, hold UK citizenship, and have spent 18 years doing business across borders in 15+ countries. I am also an engineer by training who still ships production software, including AI agents and GTM automation, so the product partnership conversation needs no translator.",
    metrics: [
      { value: "35%", label: "of regional pipeline sourced by partners at Brightcove" },
      { value: "~$4M → ~$11.5M", label: "ARR grown as VP Asia, Brightcove" },
      { value: "7-figure", label: "exclusive Roche Diagnostics reseller agreement, 3-year minimum" },
    ],
    coverLetter: "/letters/block-square-partnerships.pdf",
    longWayRound: true,
  },
];

export function getApplication(slug: string): Application | undefined {
  return applications.find((a) => a.slug === slug);
}
