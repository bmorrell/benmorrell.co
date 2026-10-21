// Website Builds price book. Mirrors PRICE-LIST.md in the agency planning repo;
// GBP is the anchor, the others are rounded price points rather than live FX.

export const CURRENCIES = ["GBP", "EUR", "USD", "AUD"] as const;
export type Currency = (typeof CURRENCIES)[number];

type Amounts = Record<Currency, string>;

export type Tier = {
  id: string;
  label: string;
  name: string;
  price: Amounts;
  from?: boolean;
  timeline: string;
  summary: string;
  features: string[];
};

export const TIERS: Tier[] = [
  {
    id: "t1",
    label: "Tier 1",
    name: "Brochure",
    price: { GBP: "£895", EUR: "€1,050", USD: "$1,150", AUD: "A$1,850" },
    timeline: "About 1 week from content",
    summary: "A clear, professional presence: who you are, what you do and how to reach you.",
    features: [
      "Up to 5 pages",
      "About, services, contact, links",
      "Contact form",
      "Basic copywriting",
      "Your logo, colours and fonts",
      "Images and maps",
    ],
  },
  {
    id: "t2",
    label: "Tier 2",
    name: "Mid-level",
    price: { GBP: "£1,950", EUR: "€2,250", USD: "$2,450", AUD: "A$3,950" },
    timeline: "3–4 weeks from content",
    summary: "A site that does more, and that you can update yourself.",
    features: [
      "Up to 8 pages",
      "Easy editor (CMS)",
      "Video, audio and galleries",
      "Blog, news or events",
      "Up to 3 forms, 2 embeds",
      "Basic copywriting",
    ],
  },
  {
    id: "t3",
    label: "Tier 3",
    name: "Custom",
    price: { GBP: "£3,000", EUR: "€3,500", USD: "$3,950", AUD: "A$5,950" },
    from: true,
    timeline: "Timeline agreed per project",
    summary: "For sites that run part of your business. Scoped in a Statement of Work.",
    features: [
      "Payments and online shop",
      "Client area or portal",
      "Appointments and booking",
      "Automation",
      "Milestone payments",
      "Built to your spec",
    ],
  },
];

export const INCLUDED = [
  "Search engine basics (SEO)",
  "Ready for AI search and assistants",
  "Google Search Console set up",
  "Privacy-friendly visitor analytics",
  "Mobile-friendly and fast",
  "Your domain connected for you",
];

export type Plan = {
  name: string;
  monthly: Amounts;
  yearly: Amounts;
  recommended?: boolean;
  features: string[];
};

export const PLANS: Plan[] = [
  {
    name: "Hosting",
    monthly: { GBP: "£15", EUR: "€18", USD: "$20", AUD: "A$30" },
    yearly: { GBP: "£180", EUR: "€216", USD: "$240", AUD: "A$360" },
    features: ["Managed hosting", "SSL certificate (the padlock)", "Uptime monitoring", "Critical security patches"],
  },
  {
    name: "Care",
    monthly: { GBP: "£35", EUR: "€40", USD: "$45", AUD: "A$70" },
    yearly: { GBP: "£420", EUR: "€480", USD: "$540", AUD: "A$840" },
    recommended: true,
    features: [
      "Everything in Hosting, plus:",
      "Weekly security scans",
      "Weekly off-site backups",
      "Software updates",
      "Reply within 48 hours",
      "Small content changes, up to 30 min a month",
    ],
  },
];

export type AddOn = { name: string; note?: string; detail: string; price: Amounts };

export const ADD_ONS: AddOn[] = [
  {
    name: "Logo",
    detail: "Logo design, colour palette, typography selection, basic brand guide",
    price: { GBP: "£295", EUR: "€350", USD: "$375", AUD: "A$595" },
  },
  {
    name: "Branding",
    note: "includes logo",
    detail: "Logo suite, full colour and type systems, brand elements and patterns, full guidelines, social media templates",
    price: { GBP: "£450", EUR: "€525", USD: "$595", AUD: "A$895" },
  },
  {
    name: "Stock photos",
    detail: "Sourced for you, up to 10 images; licence fees at cost",
    price: { GBP: "£49", EUR: "€59", USD: "$65", AUD: "A$99" },
  },
  {
    name: "Extra page during the build",
    detail: "New pages or landing pages after launch are quoted",
    price: { GBP: "£95", EUR: "€110", USD: "$125", AUD: "A$195" },
  },
];

export const OFFBOARDING: Amounts = { GBP: "£195", EUR: "€225", USD: "$250", AUD: "A$395" };
