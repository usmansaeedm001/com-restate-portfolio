import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { ProductPreview } from "@/components/sections/product-preview";
import { CTASection } from "@/components/sections/cta-section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CTA } from "@/content/site";
import { PRODUCT_SECTIONS, JOURNEY_STAGES, CUSTOMER_SEGMENTS, FAQ_ITEMS } from "@/content/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "rwaShift Real Estate",
  description:
    "rwaShift Real Estate is the technology platform for structuring, offering and administering tokenized real-world assets — from asset creation through investor eligibility, investment, ownership and distributions.",
  path: "/product",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function ProductPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageHero
        eyebrow="Product"
        title="rwaShift Real Estate"
        description="From real-world asset to digital investment. rwaShift Real Estate is the technology platform for structuring, offering and administering tokenized real estate."
        primary={CTA.demo}
        secondary={{ label: "See How It Works", href: "#how-it-works" }}
        visual={<ProductPreview />}
      />

      {/* Capabilities */}
      <section className="border-b border-surface-border bg-surface-subtle py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Platform Capabilities"
            title="A Connected Platform Across the Asset Lifecycle"
            description="Every stage of the asset lifecycle — from creation to ongoing administration — runs through one connected platform."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_SECTIONS.map((s) => (
              <div key={s.title} className="rounded-xl border border-surface-border bg-surface p-5">
                <p className="text-[15px] font-semibold text-ink-900">{s.title}</p>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-600">{s.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-20 border-b border-surface-border bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="From Real-World Asset to Digital Investment"
            description="A ten-stage journey spanning business decisions and platform activity — from initial asset assessment through ongoing reporting and verification."
          />
          <div className="mt-10 flex flex-col divide-y divide-surface-border rounded-xl border border-surface-border bg-surface-subtle">
            {JOURNEY_STAGES.map((s) => (
              <div key={s.stage} className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-[3rem_1fr_1fr]">
                <span className="font-mono text-[13px] text-ink-400">{s.stage}</span>
                <div>
                  <p className="text-[14.5px] font-semibold text-ink-900">{s.title}</p>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-ink-600">{s.business}</p>
                </div>
                <p className="text-[13.5px] leading-relaxed text-ink-600 sm:border-l sm:border-surface-border sm:pl-4">
                  {s.technology}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-xl border border-surface-border bg-surface-subtle p-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-[14.5px] font-semibold text-ink-900">See this journey in the platform</p>
              <p className="mt-1 text-[13.5px] leading-relaxed text-ink-600">
                Walk through a live sample asset — no account required.
              </p>
            </div>
            <Button href={CTA.launchApp.href} variant="secondary" className="shrink-0">
              {CTA.launchApp.label}
            </Button>
          </div>
        </Container>
      </section>

      {/* Who we build for */}
      <section className="border-b border-surface-border bg-surface-subtle py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Who We Build For" title="Built for the Businesses Behind the Asset" />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CUSTOMER_SEGMENTS.map((c) => (
              <div key={c.name} className="rounded-xl border border-surface-border bg-surface p-5">
                <p className="text-[15px] font-semibold text-ink-900">{c.name}</p>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-600">{c.outcome}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-b border-surface-border bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="FAQ" title="Common Questions" />
          <div className="mt-10 flex flex-col divide-y divide-surface-border rounded-xl border border-surface-border bg-surface-subtle">
            {FAQ_ITEMS.map((f) => (
              <div key={f.question} className="p-5">
                <p className="text-[14.5px] font-semibold text-ink-900">{f.question}</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-600">{f.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Request a Live Demo"
        description="See how rwaShift Real Estate structures, offers and administers a tokenized real estate asset end to end."
        primary={CTA.demo}
        secondary={CTA.launchApp}
      />
    </>
  );
}
