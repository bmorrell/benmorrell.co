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
      { value: "~$4M → ~$11.5M", label: "ARR grown at Brightcove APAC" },
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
      { value: "~$4M → ~$11.5M", label: "ARR grown at Brightcove APAC" },
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
      { value: "~$4M → ~$11.5M", label: "ARR grown at Brightcove APAC" },
    ],
    coverLetter: "/letters/enode-partnerships.pdf",
  },
];

export function getApplication(slug: string): Application | undefined {
  return applications.find((a) => a.slug === slug);
}
