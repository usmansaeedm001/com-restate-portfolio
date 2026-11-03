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
    title: "A Real-Time Operating Dashboard",
    description: "Track total assets, tokenized value, capital raised and active offerings from a single dashboard.",
    image: { src: "/screenshots/issuer/1-dashboard.png", alt: "Issuer dashboard in rwaShift Real Estate showing tokenized asset value and capital raised" },
  },
  {
    number: 2,
    title: "Tokenize Real Estate Assets",
    description: "Create and verify assets — location, type and valuation — before they're structured into an offering.",
    image: { src: "/screenshots/issuer/3-assets.png", alt: "Asset list screen in rwaShift Real Estate showing valuation and verification status" },
  },
  {
    number: 3,
    title: "Launch and Manage Offerings",
    description: "Create an offering, set the raise target and unit issuance, and track funding progress and status.",
    image: { src: "/screenshots/issuer/2-offerings.png", alt: "Offerings screen in rwaShift Real Estate showing raise target and funded percentage" },
  },
  {
    number: 4,
    title: "Report on Performance",
    description: "Visualize offering progress and capital raised against target with built-in reporting.",
    image: { src: "/screenshots/issuer/4-reports.png", alt: "Reports screen in rwaShift Real Estate showing offering progress and capital raised charts" },
  },
];

export const INVESTOR_STEPS: PersonaStep[] = [
  {
    number: 1,
    title: "Track Your Portfolio",
    description: "View total invested, active investments and units owned across every offering you've participated in.",
    image: { src: "/screenshots/investor/1-portfolio.png", alt: "Investor portfolio screen in rwaShift Real Estate showing total invested and units owned" },
  },
  {
    number: 2,
    title: "Review Your Transactions",
    description: "See a full record of your investment history, with on-chain transaction detail available for every entry.",
    image: { src: "/screenshots/investor/2-transactions.png", alt: "Transaction history screen in rwaShift Real Estate" },
  },
  {
    number: 3,
    title: "Track Distributions",
    description: "View rental income and other distributions paid to you as the asset generates returns.",
    image: { src: "/screenshots/investor/3-distributions.png", alt: "Distributions screen in rwaShift Real Estate for investors" },
  },
  {
    number: 4,
    title: "Stay on Top of Platform Activity",
    description: "Follow real-time activity — offerings, investments and settlements — as they happen.",
    image: { src: "/screenshots/investor/4-activity.png", alt: "Activity feed screen in rwaShift Real Estate showing platform-wide investor activity" },
  },
];

export const ADMIN_STEPS: PersonaStep[] = [
  {
    number: 1,
    title: "Oversee the Entire Platform",
    description: "Monitor organizations, assets, offerings, pending approvals and KYC reviews from one admin dashboard.",
    image: { src: "/screenshots/admin/1-dashboard.png", alt: "Platform admin dashboard in rwaShift Real Estate showing organizations, offerings and pending approvals" },
  },
  {
    number: 2,
    title: "Manage Compliance",
    description: "Review and confirm payments and eligibility checks before an investment is settled.",
    image: { src: "/screenshots/admin/2-compliance.png", alt: "Compliance screen in rwaShift Real Estate showing pending payment confirmations" },
  },
  {
    number: 3,
    title: "Verify On-Chain Activity",
    description: "Every on-chain transaction — issuance, registration, deployment — is tracked with real backend-reported status.",
    image: { src: "/screenshots/admin/3-blockchain.png", alt: "Blockchain transactions screen in rwaShift Real Estate showing on-chain transaction status" },
  },
  {
    number: 4,
    title: "Maintain an Audit Trail",
    description: "An append-only log of every significant platform action, searchable by resource and actor.",
    image: { src: "/screenshots/admin/4-audit.png", alt: "Audit log screen in rwaShift Real Estate showing platform action history" },
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
  image?: { src: string; alt: string };
  // Optional until real dates and named authors are confirmed; omitted fields are left out of the page metadata.
  author?: string;
  publishedAt?: string; // ISO date, e.g. "2026-11-04"
  updatedAt?: string;
};

export const INSIGHTS: Insight[] = [
  {
    slug: "how-to-tokenize-real-estate",
    title: "How to Tokenize Real Estate: From SPV Formation to Investor Settlement",
    category: "Guide",
    excerpt: "A step-by-step view of the ten stages a real estate asset passes through on rwaShift, from initial assessment to ongoing reporting.",
    sections: [
      { heading: "Why a clear sequence matters", paragraphs: [
        "Tokenizing a property is not a single action. It is a sequence of legal, financial, operational and technical steps, and each one depends on the decisions made before it. Skipping a step, or doing it out of order, usually shows up later as a structuring problem, an eligibility gap or a reporting error.",
        "The sequence below follows the ten stages rwaShift uses to take an asset from assessment to ongoing administration. The legal steps are handled with qualified counsel; the platform carries the resulting structure through the technical and operational stages.",
      ]},
      { heading: "Stage 1 to 3: prepare the asset and the structure", paragraphs: [
        "Asset assessment (stage 1) confirms the asset, its ownership structure and whether a digital offering makes sense for the business case. Ownership has to be clear before anything else is designed.",
        "Structure and offering design (stage 2) defines the valuation, the capital target, the unit economics and the legal structure. Often this means a special purpose vehicle (SPV) that holds the property, with investors holding defined interests in that vehicle. These choices are made alongside qualified legal counsel, because they determine what investors actually receive.",
        "Platform configuration (stage 3) captures the asset details, supporting documentation and the operational workflows that will run after the offering closes. The asset is created in the Asset Dashboard before anything goes on-chain.",
      ]},
      { heading: "Stage 4 and 5: deploy the contract and set eligibility", paragraphs: [
        "Smart contract deployment (stage 4) confirms the technical and compliance parameters, then deploys an isolated on-chain contract instance for the asset. Each asset gets its own instance, so its offering, supply, investors and distributions are contained and do not share state with other assets.",
        "Investor onboarding (stage 5) defines who may invest. Eligibility criteria and compliance requirements are configured and then applied to every investor before they can take part. Eligibility is set up before the offering opens, not checked after money has moved.",
      ]},
      { heading: "Stage 6 and 7: process investments and issue units", paragraphs: [
        "Investment processing (stage 6) opens the offering to eligible investors. Investments are processed and reconciled against the offering configuration, including the unit price, the maximum number of units and the minimum investment.",
        "Digital ownership (stage 7) confirms each investor's participation and unit allocation. Digital asset units are issued and the ownership records are maintained on-chain, so the allocation can be checked against the platform's records.",
      ]},
      { heading: "Stage 8 to 10: administer, distribute and report", paragraphs: [
        "Asset administration (stage 8) covers the day-to-day operation of the asset under the governing agreements. The platform keeps a consolidated operational record of the asset and its investors, so the administrator is working from one set of numbers.",
        "Distributions (stage 9) follow the timing and amounts set in the offering terms. Distribution tools allocate and record payments to eligible unit holders, which gives investors a traceable history of what they received.",
        "Reporting and verification (stage 10) gives investors and stakeholders ongoing visibility into the asset. Blockchain verification and reporting tools expose transparent, auditable records.",
      ]},
      { heading: "What the sequence does not solve", paragraphs: [
        "A clear sequence does not create demand. Tokenization does not automatically create liquidity, and the value of a digital offering still depends on the asset, the structure and the investors who participate.",
        "This article is general information about how tokenized real estate structures work. It is not legal, tax or investment advice. The right structure depends on jurisdiction and should be reviewed with qualified counsel before any offering is made.",
      ]},
    ],
  },
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
      { heading: "What an investor actually holds", paragraphs: [
        "The rights an investor receives come from the legal documents behind the offering: the entity's governing agreements and the offering terms. The digital asset unit is a record of those rights. It does not create rights that the documents do not provide.",
        "That is why the same token standard can represent very different legal positions depending on how the vehicle is structured. Two offerings with identical technology can give investors different voting, distribution or transfer rights.",
      ]},
      { heading: "A worked example (illustrative)", paragraphs: [
        "Suppose a sponsor wants investors to fund a $2,000,000 share of a $10,000,000 commercial property. The property is held by an SPV. The offering divides the investor interest into 20,000 units at $100 each, with a minimum investment set in the offering terms.",
        "On the platform, the offering records the valuation, the capital target, the unit price and the maximum number of units. As investors are approved and their investments settle, the ownership records show how many units each investor holds. These figures are illustrative and are not the terms of any real offering.",
      ]},
      { heading: "Why the structure comes first", paragraphs: [
        "Before any digital asset unit is issued, the underlying legal structure — the entity, the offering terms, the investor eligibility rules — has to be defined with qualified legal counsel.",
        "The technology layer then reflects that structure faithfully: unit economics, transfer restrictions and distribution logic are all configured to match the legal and business model, not the other way around.",
      ]},
      { heading: "What tokenization does not change", paragraphs: [
        "Tokenization does not make a property more liquid by itself. Liquidity depends on investor demand, applicable regulation and whether a compliant secondary market exists. The infrastructure can make transfers more controlled and records easier to keep, but it cannot guarantee that an investor can sell.",
        "This article is general information, not legal, tax or investment advice. Ownership and securities treatment depend on jurisdiction.",
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
      { heading: "Offering logic is more than a supply number", paragraphs: [
        "A real offering needs a valuation, a capital target, a unit price, a maximum number of units and a minimum investment. These values have to stay consistent across the offering, the investments that arrive and the units that are issued. A bare token contract does not enforce that relationship on its own.",
      ]},
      { heading: "Eligibility has to sit inside the flow", paragraphs: [
        "Investor eligibility is part of the investment path, not an afterthought. Compliant offerings need identity, accreditation and compliance checks applied before a unit is allocated, and an operator needs a record that those checks happened.",
      ]},
      { heading: "Ownership records and distributions", paragraphs: [
        "Once units are issued, someone has to keep the register of who holds what, show each investor their own holdings, and calculate and record distributions against those holdings. Those are operational workflows with their own rules, and they need to match the legal documents behind the asset.",
      ]},
      { heading: "The stack it takes", paragraphs: [
        "A working platform needs asset structuring, digital offering infrastructure, investor eligibility, smart contracts, investment processing, ownership records, distribution infrastructure, an application layer, blockchain integration, observability and security architecture — operating together as one coherent system.",
      ]},
      { heading: "Where to look when evaluating a platform", paragraphs: [
        "Ask how the offering parameters are enforced, where investor eligibility is checked, how each asset is isolated, and what audit trail exists for administrative and on-chain actions. A platform that can answer those questions in specifics is easier to assess than one that describes only the token.",
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
      { heading: "Questions to ask before investing", paragraphs: [
        "Which entity holds the asset, and who controls it? What do the governing agreements say about distributions, voting and transfer? How is the unit register kept, and who can change it? What happens to the units if the vehicle is wound up? The answers come from the legal documents, and the platform should be able to show how its records match them.",
      ]},
      { heading: "How the platform reflects the structure", paragraphs: [
        "On rwaShift, each asset runs through its own isolated contract instance, so the offering, supply, investors and distributions for one asset are kept separate from another. Ownership records and distribution history are maintained against that instance, which makes the link between the vehicle and the units easier to check.",
      ]},
      { heading: "A note on terminology", paragraphs: [
        "Terms such as token, unit, share and security mean different things in different jurisdictions and documents. Use the terms the legal documents use, and confirm the classification with counsel before describing an offering to investors.",
        "This article is general information, not legal, tax or investment advice.",
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
      { heading: "What gets checked", paragraphs: [
        "The exact checks depend on the offering. Identity verification confirms who the investor is. Accreditation or similar status checks confirm whether the investor may take part in that offering under the applicable rules. Compliance checks confirm that the investment fits the offering's terms. Which checks apply, and in which jurisdictions, is decided with counsel for each offering.",
      ]},
      { heading: "Why this has to be built in, not bolted on", paragraphs: [
        "When eligibility logic is embedded in the platform and, where applicable, in the on-chain contract itself, an issuer has a consistent, auditable control point — rather than relying on manual review disconnected from the investment flow.",
      ]},
      { heading: "Review before settlement", paragraphs: [
        "On rwaShift, administrators review and confirm payments and eligibility checks before an investment is settled. Each investment is therefore tied to a recorded decision, not just to a transfer of funds.",
      ]},
      { heading: "Transfers after issuance", paragraphs: [
        "Eligibility does not stop at the first investment. Where the offering requires it, restricted-transfer logic limits who can receive units, so that a later transfer cannot put units in the hands of an investor who was never eligible. Whether transfers are allowed, and to whom, is set by the offering's legal and compliance rules.",
        "This article is general information, not legal, tax or investment advice. Eligibility requirements vary by jurisdiction and offering.",
      ]},
    ],
  },
  {
    slug: "real-estate-tokenization-platform-architecture",
    title: "Real Estate Tokenization Platform Architecture",
    category: "Technology",
    excerpt: "How an issuer-facing dashboard, an application layer, per-asset smart contracts and audit records fit together in a tokenized real estate platform.",
    image: {
      src: "/screenshots/issuer/1-dashboard.png",
      alt: "Issuer dashboard in rwaShift Real Estate showing tokenized asset value and capital raised",
    },
    sections: [
      { heading: "The layers", paragraphs: [
        "The rwaShift Real Estate platform is built from a Next.js and React front end, a Spring Boot application layer, a MySQL data store, Solidity smart contracts developed with Foundry and OpenZeppelin, and OpenTelemetry for observability. Containers are built with Docker, and the platform connects to Ethereum-compatible blockchain infrastructure.",
        "Each layer has a defined job. The front end serves issuers, investors and administrators. The application layer handles offerings, investors and workflows. The data store keeps the operational record. The contracts hold the on-chain state for each asset.",
      ]},
      { heading: "One contract instance per asset", paragraphs: [
        "A factory contract, AssetFactory, deploys an isolated contract instance for each tokenized asset. Each instance holds its own offering, supply, investor eligibility, investments, ownership, distributions and lifecycle state. A problem in one asset's contract does not change the state of another asset.",
      ]},
      { heading: "Environments", paragraphs: [
        "Development runs against a local Ethereum-compatible node (Anvil). Staging uses a public test network (Ethereum Sepolia) to check contract behavior before production. The production network is configured for each implementation's requirements. Development, staging and production are kept separate.",
      ]},
      { heading: "Controls built into the design", paragraphs: [
        "Platform and contract actions are scoped to defined roles, rather than broad access. Critical asset operations can be paused as a control point during an incident. Investment and distribution flows are written to guard against reentrancy. Transfers can be restricted to eligible investors where the offering requires it. Every significant platform action is recorded in an append-only audit log, searchable by resource and actor.",
      ]},
      { heading: "What the platform does not do", paragraphs: [
        "rwaShift provides technology infrastructure. It is not a public marketplace or exchange, and it does not provide legal, tax or investment advice. The legal structure of each offering, and the eligibility rules that apply to it, are decided with qualified counsel and then configured in the platform.",
      ]},
    ],
  },
];
