// Customer segments
export const CUSTOMER_SEGMENTS = [
  { name: "Real Estate Developers", outcome: "Reach a broader base of eligible investors while retaining a structured, administrable offering." },
  { name: "Asset Owners", outcome: "Turn concentrated, illiquid holdings into digitally administered investment participation." },
  { name: "Investment Firms", outcome: "Launch and operate digital offerings without building blockchain infrastructure in-house." },
  { name: "Asset Managers", outcome: "Consolidate investor records, ownership and distributions onto a single operating platform." },
  { name: "Private Market Platforms", outcome: "Add programmable ownership and investor infrastructure to existing private-market offerings." },
  { name: "Family Offices", outcome: "Structure direct holdings into digitally administered participation for internal or external investors." },
] as const;

export const CUSTOMER_PROBLEMS = [
  "Capital locked in traditionally illiquid assets",
  "Slow and complex fundraising processes",
  "Limited investor accessibility",
  "Fragmented ownership administration",
  "Manual investor operations",
  "Disconnected asset, investor and transaction records",
] as const;

// Product capabilities
export const PRODUCT_SECTIONS = [
  { title: "Asset Dashboard", description: "Create and manage tokenized assets from a single operating view." },
  { title: "Offering Management", description: "Configure valuation, capital target, unit price, maximum units and minimum investment." },
  { title: "Investor Compliance", description: "Manage investor eligibility and verification workflows." },
  { title: "Investment Infrastructure", description: "Process eligible investments and connect settlement with asset-unit issuance." },
  { title: "Digital Ownership", description: "Maintain blockchain-backed records of asset-unit ownership." },
  { title: "Investor Portfolio", description: "Give investors visibility into holdings, investments and distributions." },
  { title: "Distribution Management", description: "Create and manage asset-related distributions." },
  { title: "Blockchain Verification", description: "Provide transparent verification of contracts and transactions." },
  { title: "Asset Lifecycle", description: "Manage the asset from creation through active offering, funding and ongoing administration." },
] as const;

// 10-stage journey (superseded on the Product page by the persona walkthroughs below,
// kept here as it's still referenced for the underlying lifecycle detail)
export const JOURNEY_STAGES = [
  { stage: "01", title: "Asset Assessment", business: "Evaluate the asset, ownership structure and business case for a digital offering.", technology: "Platform onboarding and asset profile configuration begin." },
  { stage: "02", title: "Structure & Offering Design", business: "Define valuation, capital target, unit economics and the applicable legal structure alongside qualified counsel.", technology: "Offering parameters are modeled within rwaShift Real Estate." },
  { stage: "03", title: "Platform Configuration", business: "Confirm asset details, documentation and operational workflows.", technology: "The asset is created and configured in the platform's Asset Dashboard." },
  { stage: "04", title: "Smart Contract Deployment", business: "Confirm the technical and compliance parameters for the offering.", technology: "An isolated on-chain contract instance is deployed for the asset via the AssetFactory." },
  { stage: "05", title: "Investor Onboarding", business: "Determine eligibility criteria and compliance requirements for participation.", technology: "Investor verification and eligibility workflows are configured and applied." },
  { stage: "06", title: "Investment Processing", business: "Open the offering to eligible investors.", technology: "Investments are processed and reconciled against the offering configuration." },
  { stage: "07", title: "Digital Ownership", business: "Confirm investor participation and unit allocation.", technology: "Digital asset units are issued and ownership records are maintained on-chain." },
  { stage: "08", title: "Asset Administration", business: "Operate and manage the underlying asset per the governing agreements.", technology: "The platform maintains a consolidated operational record of the asset and its investors." },
  { stage: "09", title: "Distributions", business: "Determine distribution timing and amounts per the offering terms.", technology: "Distribution management tools allocate and record payments to eligible unit holders." },
  { stage: "10", title: "Reporting & Verification", business: "Provide investors and stakeholders with ongoing visibility into the asset.", technology: "Blockchain verification and reporting tools expose transparent, auditable records." },
] as const;

// Persona walkthroughs (alternating-layout visual sections on Product and homepage)
export type PersonaStep = {
  number: number;
  title: string;
  description: string;
  image: { src: string; alt: string };
  kicker?: string;
};

export const ISSUER_STEPS: PersonaStep[] = [
  {
    number: 1,
    title: "Tokenize the Asset",
    description: "Digitize a real estate asset into a structured digital offering — configure asset details, valuation and unit economics in a guided setup.",
    image: { src: "/screenshots/issuer/01-tokenize-asset.png", alt: "Asset tokenization setup screen in rwaShift Real Estate" },
  },
  {
    number: 2,
    title: "Configure & Launch the Offering",
    description: "Set capital targets, unit pricing and minimum investment, then launch the offering to eligible investors.",
    image: { src: "/screenshots/issuer/02-configure-offering.png", alt: "Offering configuration screen in rwaShift Real Estate" },
  },
  {
    number: 3,
    title: "Track the Offering",
    description: "Monitor capital raised, investor activity and offering status from a single operating dashboard.",
    image: { src: "/screenshots/issuer/03-offering-dashboard.png", alt: "Offering dashboard in rwaShift Real Estate" },
  },
  {
    number: 4,
    title: "Manage Distributions",
    description: "Create and manage distributions to unit holders as the asset generates returns.",
    image: { src: "/screenshots/issuer/04-distributions.png", alt: "Distribution management screen in rwaShift Real Estate" },
  },
];

export const INVESTOR_STEPS: PersonaStep[] = [
  {
    number: 1,
    title: "Browse Eligible Offerings",
    description: "Explore active offerings matched to your eligibility and investment criteria.",
    image: { src: "/screenshots/investor/01-browse-offerings.png", alt: "Offering listing screen for investors in rwaShift Real Estate" },
  },
  {
    number: 2,
    title: "Complete Eligibility Verification",
    description: "Confirm identity and accreditation through a guided KYC and eligibility check before investing.",
    image: { src: "/screenshots/investor/02-eligibility-check.png", alt: "Investor eligibility verification screen in rwaShift Real Estate" },
  },
  {
    number: 3,
    title: "Invest in an Offering",
    description: "Commit capital to an offering within the minimum investment and unit price set by the issuer.",
    image: { src: "/screenshots/investor/03-invest.png", alt: "Investment flow screen in rwaShift Real Estate" },
  },
  {
    number: 4,
    title: "Track Your Portfolio",
    description: "View holdings, investment history and distributions from a single investor portfolio.",
    image: { src: "/screenshots/investor/04-portfolio.png", alt: "Investor portfolio screen in rwaShift Real Estate" },
  },
];

export const ADMIN_STEPS: PersonaStep[] = [
  {
    number: 1,
    title: "Review the Compliance Queue",
    description: "Review incoming KYC and eligibility requests before an investor is permitted to participate.",
    image: { src: "/screenshots/admin/01-compliance-queue.png", alt: "Compliance review queue in rwaShift Real Estate" },
  },
  {
    number: 2,
    title: "Approve or Reject Investors",
    description: "Apply eligibility and compliance rules to approve, reject or request more information from an investor.",
    image: { src: "/screenshots/admin/02-investor-approval.png", alt: "Investor approval screen in rwaShift Real Estate" },
  },
  {
    number: 3,
    title: "Oversee Assets & Offerings",
    description: "Monitor every asset and offering on the platform from a consolidated administrative view.",
    image: { src: "/screenshots/admin/03-asset-oversight.png", alt: "Asset oversight dashboard in rwaShift Real Estate" },
  },
  {
    number: 4,
    title: "Verify the Audit Trail",
    description: "Review transparent, on-chain records of platform and investor activity for reporting and audit.",
    image: { src: "/screenshots/admin/04-audit-trail.png", alt: "Audit trail and on-chain verification screen in rwaShift Real Estate" },
  },
];

// Technology
export const TECH_STACK = [
  { category: "Frontend", items: ["Next.js", "React", "TypeScript"] },
  { category: "Application", items: ["Spring Boot"] },
  { category: "Smart Contracts", items: ["Solidity", "Foundry", "OpenZeppelin"] },
  { category: "Data", items: ["MySQL"] },
  { category: "Observability", items: ["OpenTelemetry"] },
  { category: "Infrastructure", items: ["Docker", "Ethereum-compatible blockchain infrastructure"] },
] as const;

export const NETWORK_ENVIRONMENTS = [
  { environment: "Local Development", network: "Anvil", description: "A local Ethereum-compatible node used for fast, isolated development iteration." },
  { environment: "Staging", network: "Ethereum Sepolia", description: "A public test network used to validate contract behavior before production deployment." },
  { environment: "Production", network: "Configurable", description: "Network selection is configured based on the specific implementation's requirements." },
] as const;

export const CONTRACT_ISOLATION = {
  heading: "Every tokenized asset receives an isolated on-chain contract instance.",
  factory: "AssetFactory",
  instances: ["Asset #1", "Asset #2", "Asset #3"],
  perAssetState: ["Offering", "Supply", "Investor Eligibility", "Investments", "Ownership", "Distributions", "Lifecycle"],
};

export const SECURITY_PRINCIPLES = [
  { title: "Role-Based Access Control", description: "Platform and contract actions are scoped to defined roles rather than broad, undifferentiated access." },
  { title: "Pausable Operations", description: "Critical asset operations can be paused, giving issuers and operators a control point during incidents." },
  { title: "Reentrancy Protection", description: "Contract logic is written to guard against reentrancy patterns in investment and distribution flows." },
  { title: "Upgradeable Smart Contract Architecture", description: "Contract architecture is designed to allow controlled upgrades as requirements evolve." },
  { title: "Restricted Asset Transfers", description: "Transfers can be constrained to eligible investors where the offering structure requires it." },
  { title: "Investor Eligibility Controls", description: "Eligibility and compliance checks are enforced before an investor is permitted to participate." },
  { title: "Independent Asset Contract Isolation", description: "Each asset operates through its own isolated contract instance, containing risk at the asset level." },
  { title: "Secure Signing Architecture", description: "Transaction signing is designed to follow a structured, access-controlled process rather than ad hoc key handling." },
  { title: "Audit Trails", description: "Platform and on-chain activity is designed to be recorded to support review, reporting and investigation." },
  { title: "Environment Separation", description: "Development, staging and production environments are kept isolated from one another." },
] as const;

// FAQ
export const FAQ_ITEMS = [
  { question: "What is RWA tokenization?", answer: "RWA (real-world asset) tokenization is the process of representing ownership, participation or economic rights in a physical or financial asset using a digitally issued record on a blockchain. It is an infrastructure model for structuring and administering investment participation, not a separate asset class." },
  { question: "Does a token mean direct legal ownership of the physical asset?", answer: "Not automatically. In most structures, the digital asset unit represents an interest in a legal entity (such as an SPV) that holds the underlying asset, rather than direct title to the physical asset itself. The applicable legal structure determines what rights investors actually hold." },
  { question: "How are investors verified?", answer: "rwaShift Real Estate includes investor eligibility and verification workflows that can apply the identity, accreditation and compliance checks required by the applicable offering structure before an investor is permitted to invest." },
  { question: "Can asset units be transferred freely?", answer: "Transferability depends on the legal and compliance rules configured for the offering. The platform supports restricted-transfer logic so that transfers can be limited to eligible investors where required, rather than assuming unrestricted secondary trading." },
  { question: "Which blockchain does rwaShift use?", answer: "The platform is built on Ethereum-compatible blockchain infrastructure. Local development uses Anvil, staging uses Ethereum Sepolia, and the production network is configured based on the specific implementation's requirements." },
  { question: "Does tokenization guarantee liquidity?", answer: "No. Tokenization does not automatically create liquidity. It can provide infrastructure that enables fractionalization, programmable ownership and more efficient transfer or investment workflows, but actual liquidity depends on investor demand, applicable regulations and whether a compliant secondary market exists." },
  { question: "Is rwaShift a marketplace?", answer: "No. rwaShift provides the technology infrastructure that issuers use to structure, offer and administer digital investment participation in their own assets — it is not a public marketplace or exchange." },
  { question: "Does rwaShift provide legal advice?", answer: "No. rwaShift provides technology infrastructure, not legal, tax or investment advice. Legal ownership, securities treatment, SPV structuring and investor eligibility depend on jurisdiction and should be determined with qualified legal and regulatory counsel." },
] as const;

// Insights
export type InsightSection = { heading: string; paragraphs: string[] };
export type Insight = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  sections: InsightSection[];
};

export const INSIGHTS: Insight[] = [
  {
    slug: "what-actually-gets-tokenized-in-real-estate",
    title: "What Actually Gets Tokenized in Real Estate?",
    category: "Real Estate",
    excerpt: "Tokenization does not put a building on a blockchain. It represents a defined legal and economic interest — understanding that distinction matters before structuring an offering.",
    sections: [
      { heading: "The asset and the interest are not the same thing", paragraphs: [
        "A commercial property itself is not moved onto a blockchain. What gets represented digitally is a defined interest — typically ownership or economic participation in a legal entity, such as an SPV, that holds the asset.",
        "This distinction shapes everything downstream: what investors actually hold, how transfers work, and what compliance obligations apply.",
      ]},
      { heading: "Why the structure comes first", paragraphs: [
        "Before any digital asset unit is issued, the underlying legal structure — the entity, the offering terms, the investor eligibility rules — has to be defined with qualified legal counsel.",
        "The technology layer then reflects that structure faithfully: unit economics, transfer restrictions and distribution logic are all configured to match the legal and business model, not the other way around.",
      ]},
    ],
  },
  {
    slug: "why-tokenizing-an-asset-is-more-than-issuing-an-erc-20",
    title: "Why Tokenizing an Asset Is More Than Issuing an ERC-20",
    category: "RWA Tokenization",
    excerpt: "Deploying a token contract is the easy part. Real infrastructure requires offering logic, investor eligibility, ownership records and distribution workflows around it.",
    sections: [
      { heading: "A token is a small part of the system", paragraphs: [
        "Issuing a standard token contract takes very little engineering effort. What makes an asset genuinely investable and administrable is everything around that contract: offering configuration, investor verification, investment processing, ownership records and distribution management.",
      ]},
      { heading: "The stack it takes", paragraphs: [
        "A working platform needs asset structuring, digital offering infrastructure, investor eligibility, smart contracts, investment processing, ownership records, distribution infrastructure, an application layer, blockchain integration, observability and security architecture — operating together as one coherent system.",
      ]},
    ],
  },
  {
    slug: "spvs-digital-tokens-and-legal-ownership-explained",
    title: "SPVs, Digital Tokens and Legal Ownership Explained",
    category: "Digital Ownership",
    excerpt: "Understanding how a special purpose vehicle relates to a digitally issued asset unit is essential for evaluating any tokenization structure.",
    sections: [
      { heading: "Why an SPV is often the legal container", paragraphs: [
        "In many tokenized real estate structures, a special purpose vehicle holds the underlying asset. Investors hold defined interests in that vehicle, which are then represented as digital asset units.",
        "This gives the digital representation a clear legal anchor, rather than an ambiguous claim on a physical asset.",
      ]},
      { heading: "What this means for investors", paragraphs: [
        "The rights an investor actually holds — voting, distribution, transfer rights — are defined by the governing legal agreements of the SPV and the offering, not by the token itself. The token is a digital record of those rights, not a substitute for them.",
      ]},
    ],
  },
  {
    slug: "how-investor-eligibility-works-in-rwa-tokenization",
    title: "How Investor Eligibility Works in RWA Tokenization",
    category: "Private Markets",
    excerpt: "Compliant digital offerings depend on verifying who is eligible to invest before any capital moves — not after.",
    sections: [
      { heading: "Eligibility before investment", paragraphs: [
        "Investor eligibility controls apply identity, accreditation and compliance checks required by the applicable offering structure before an investor is permitted to participate.",
      ]},
      { heading: "Why this has to be built in, not bolted on", paragraphs: [
        "When eligibility logic is embedded in the platform and, where applicable, in the on-chain contract itself, an issuer has a consistent, auditable control point — rather than relying on manual review disconnected from the investment flow.",
      ]},
    ],
  },
];
