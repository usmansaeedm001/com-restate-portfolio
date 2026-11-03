export const SITE_URL = "https://rwashift.com";
export const SITE_NAME = "rwaShift";
export const PRODUCT_NAME = "rwaShift Real Estate";
export const APP_URL = "https://app.rwashift.com";

export const TAGLINE = "The Platform to Structure, Offer and Administer Tokenized Real Estate";

export const META_DESCRIPTION_DEFAULT =
  "rwaShift builds the technology infrastructure that enables asset owners and investment businesses to structure real-world assets into digital investment offerings with programmable ownership, investor onboarding and transparent on-chain records.";

export type NavItem = { label: string; href: string };

export const PRIMARY_NAV: NavItem[] = [
  { label: "Product", href: "/product" },
  { label: "Technology", href: "/technology" },
  { label: "Insights", href: "/insights" },
  { label: "Company", href: "/company" },
];

export const FOOTER_NAV: { title: string; items: NavItem[] }[] = [
  {
    title: "Company",
    items: [
      { label: "Product", href: "/product" },
      { label: "Technology", href: "/technology" },
      { label: "Insights", href: "/insights" },
      { label: "Company", href: "/company" },
    ],
  },
  {
    title: "Get Started",
    items: [
      { label: "Book a Demo", href: "/book-demo" },
      { label: "Contact", href: "/contact" },
      { label: "Explore the Platform", href: APP_URL },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export const CTA = {
  demo: { label: "Book a Demo", href: "/book-demo" },
  exploreProduct: { label: "Explore the Product", href: "/product" },
  howItWorks: { label: "See How It Works", href: "/product#how-it-works" },
  contact: { label: "Contact Us", href: "/contact" },
  launchApp: { label: "Explore the Platform", href: APP_URL },
} as const;

export const CONTACT = {
  email: "info@rwashift.com",
  salesEmail: "sales@rwashift.com",
};

export const SOCIAL_LINKS: NavItem[] = [];

// Leadership and engineering team shown on /company. Left empty until names, roles and profile links are confirmed,
// so no placeholder people appear on the site. Each entry also becomes Person structured data.
export type TeamMember = { name: string; role: string; bio: string; profileUrl?: string };
export const TEAM: TeamMember[] = [
  {
    name: "Muhammad Usman Saeed",
    role: "Founder",
    bio: "Works on RWA tokenization for real estate, private credit and invoice finance, focused on connecting each asset's legal structure, investor rights, compliance and ownership to the token.",
    profileUrl: "https://www.linkedin.com/in/muhammad-usman-saeed-3b5227b5/",
  },
];

// Strategic advisors shown on /company. Do not add an entry until that person has agreed to be listed and approved the wording.
export type Advisor = { name: string; role: string; bio: string; affiliation?: string; profileUrl?: string };
export const ADVISORS: Advisor[] = [
  {
    name: "Dr. Usman Nazir",
    role: "Strategic Advisor — AI & Real-World Asset Intelligence",
    bio: "Postdoctoral Data Scientist in Climate and Health Analytics. Research covers geospatial analytics, satellite data and environmental monitoring. The advisory focus is exploring how data-driven analysis can support physical-asset assessment and ongoing asset monitoring. This is an area of exploration, not a current rwaShift product feature.",
    affiliation: "University of Oxford. Shown for identification only; this is not an endorsement by the University.",
    profileUrl: "https://www.linkedin.com/in/unazir/",
  },
  {
    name: "Usman Ali Maan",
    role: "Strategic Advisor — Cloud Infrastructure & Platform Resilience",
    bio: "Cloud infrastructure and DevSecOps professional with over 10 years of experience in cloud architecture, infrastructure automation and platform reliability. The advisory focus is guidance on scalable cloud architecture, infrastructure security, operational resilience and reliable deployment practices for real-world asset tokenization infrastructure.",
    affiliation: "Currently at RazeSteer.",
    profileUrl: "https://www.linkedin.com/in/usmanalimaan/",
  },
  {
    name: "Muhammad Saud Saeed",
    role: "Strategic Advisor — Applied AI & Intelligent Automation",
    bio: "AI and software engineering professional specializing in agentic AI, intelligent automation and production-ready AI systems. Experience spans large language models, multi-agent architectures, workflow automation, backend engineering and cloud-native AI deployments. The advisory focus is applying AI within real-world asset infrastructure, including document processing, workflow orchestration and integration with existing enterprise systems.",
    affiliation: "Currently at DevsConsilium.",
    profileUrl: "https://www.linkedin.com/in/muhammadsaudsaeed/",
  },
];

export const COMPLIANCE = {
  footerDisclaimer:
    "Information presented on this website is for informational and technology-service purposes only and does not constitute investment, legal, tax or financial advice. Digital asset structures and offerings are subject to applicable laws and regulations.",
  demoLabel: "Illustrative product demonstration — not an investment offer.",
  liquidityDisclaimer:
    "Tokenization does not automatically create liquidity. It can provide infrastructure that enables fractionalization, programmable ownership and more efficient transfer or investment workflows, subject to the applicable legal and regulatory structure.",
  legalDisclaimer:
    "rwaShift provides technology infrastructure, not legal or investment advice. Legal ownership, securities treatment, SPV structuring and investor eligibility depend on jurisdiction and require qualified legal and regulatory counsel.",
};

export const DEMO_ASSET = {
  name: "rwaShift Commercial Tower I",
  assetType: "Real Estate",
  assetValue: 10_000_000,
  capitalTarget: 2_000_000,
  unitPrice: 100,
  totalUnits: 20_000,
  minimumInvestment: 1_000,
  status: "Active Offering",
  fundedPercent: 63,
};
