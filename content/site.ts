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
      { label: "Launch App", href: APP_URL },
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
  launchApp: { label: "Launch App", href: APP_URL },
} as const;

export const CONTACT = {
  email: "info@rwashift.com",
  salesEmail: "sales@rwashift.com",
};

export const SOCIAL_LINKS: NavItem[] = [];

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
