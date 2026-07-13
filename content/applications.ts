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
      "I am genuinely t-shaped and AI-native. An MEng and an engineering start mean I hold my own in a partner's technical review, and I ship my own AI GTM tooling and a production MCP server. On an AI-native platform, I can lead alliances and model the leverage the team is expected to use.",
    metrics: [
      { value: "~$4M → ~$11.5M", label: "ARR grown at Brightcove APAC" },
      { value: "35%", label: "of regional pipeline via partners" },
      { value: "15+", label: "strategic ISV and agency partners recruited" },
    ],
    coverLetter: "/letters/crowdstrike-alliances.pdf",
  },
];

export function getApplication(slug: string): Application | undefined {
  return applications.find((a) => a.slug === slug);
}
