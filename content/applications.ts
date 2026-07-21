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
        body: "Through revenuesystem I structured and closed an exclusive global reseller agreement through the Roche Diagnostics channel, plus Tier-1 technology partnerships including Aptos ($500K).",
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
        body: "Through revenuesystem I structured an exclusive global reseller agreement through the Roche Diagnostics channel, plus Tier-1 technology partnerships including Aptos ($500K), and built the forecasting, contracting and CRM cadence behind them.",
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
        body: "Opening APAC for Encoding.com from a written thesis, I signed the region's largest systems integrator and grew qualified pipeline 1200%. Through revenuesystem I structured an exclusive global reseller agreement through the Roche Diagnostics channel.",
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
        body: "Through revenuesystem I structured and closed an exclusive global reseller agreement through the Roche Diagnostics channel, a seven-figure, three-year deal that drove NHS sales and a ten-year contract in the Netherlands. Turning a target platform into signed, revenue-producing partnership is a motion I have run repeatedly.",
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
    sub: "For 18 years I have designed, built, deployed and supported technology in the field, on deadlines that do not move. Satellite newsgathering kits in Cameroon and Gaza, the Beijing Olympics, a national digital transition in Papua New Guinea. I would like to bring that to WCK's Response Technology and Data teams.",
    why: [
      {
        title: "Kit that anyone can deploy",
        body: "At Nine Network I designed and built 20 ruggedised satellite newsgathering kits. Each one paired a laptop with a BGAN satellite terminal and an encoder that got a full broadcast camera down to 256 kbps. I wrote the procedures that went with them, so a camera crew could land somewhere and be live in two or three minutes. I asset tagged every component, kept the inventory accurate, and made sure the kits were tested and ready before anyone needed them. Keeping response kit ready to move is the same job.",
      },
      {
        title: "Being the escalation point",
        body: "As VP at Brightcove I was the escalation point for the region, covering hundreds of customers across 15+ countries on a platform where availability was the product. When a data centre fire in Boston took out one of our critical APIs, I ran the regional response to our emergency protocol. That meant a global bridge call every 30 minutes, and fielding customers in between as their video started to fail. It took six hours. Earlier in my career I was on call for 24/7 live news, and when stadium power died mid match we were back on air in 15 seconds.",
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
        place: "Gaza, Israel and wildfire zones",
        meta: "Field deployments",
        detail: "The same kits went wherever the story was, including conflict zones, fire grounds and remote locations. That was the point of building them to be picked up and carried.",
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
  },
];

export function getApplication(slug: string): Application | undefined {
  return applications.find((a) => a.slug === slug);
}
