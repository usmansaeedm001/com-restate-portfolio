import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CTASection } from "@/components/sections/cta-section";
import { Container } from "@/components/ui/container";
import { CTA } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Company",
  description: "rwaShift builds the technology platform that lets real estate businesses structure, offer and administer tokenized investment offerings.",
  path: "/company",
});

const PRINCIPLES = [
  { title: "Business Model Before Blockchain", description: "Technology follows the economics and legal structure of the underlying asset, not the other way around." },
  { title: "Compliance by Design", description: "Investor eligibility and compliance controls are built into the platform, not bolted on afterward." },
  { title: "Asset-Level Isolation", description: "Each tokenized asset operates independently, containing risk and simplifying administration." },
  { title: "Transparent Ownership Infrastructure", description: "Ownership, investment and distribution records are maintained transparently on-chain." },
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="About rwaShift"
        description="rwaShift builds the technology platform that lets real estate businesses structure, offer and administer tokenized investment offerings."
        primary={CTA.demo}
      />

      <section className="border-b border-surface-border bg-surface py-20 sm:py-24">
        <Container className="max-w-2xl">
          <p className="text-[15px] leading-relaxed text-ink-600">
            We provide a working foundation for asset issuance, investor eligibility, tokenization, investment
            flows and on-chain ownership, which can be customized around the legal, compliance, integration and
            operational requirements of each implementation.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Our starting premise: tokenization is not just token issuance. Legal structure, investor rights,
            compliance and distribution all have to work together before a token means anything.
          </p>
        </Container>
      </section>

      <section className="border-b border-surface-border bg-surface-subtle py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="How We Work" title="Principles" />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="rounded-xl border border-surface-border bg-surface p-5">
                <p className="text-[15px] font-semibold text-ink-900">{p.title}</p>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-600">{p.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Tokenizing a Real Estate Asset?"
        description="Talk to the team about your asset, your structure and what you're trying to launch."
        primary={CTA.demo}
      />
    </>
  );
}
