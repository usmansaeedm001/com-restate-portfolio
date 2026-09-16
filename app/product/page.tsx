import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { ProductPreview } from "@/components/sections/product-preview";
import { AlternatingSteps } from "@/components/sections/alternating-steps";
import { CTASection } from "@/components/sections/cta-section";
import { Container } from "@/components/ui/container";
import { CTA } from "@/content/site";
import { PRODUCT_SECTIONS, CUSTOMER_SEGMENTS, FAQ_ITEMS, ISSUER_STEPS, INVESTOR_STEPS, ADMIN_STEPS } from "@/content/data";
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
        secondary={CTA.launchApp}
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

      {/* How it works, by role */}
      <section id="how-it-works" className="scroll-mt-20 border-b border-surface-border bg-surface py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="One Platform, Built Around Every Role"
            description="From the issuer structuring an offering to the investor participating in it to the administrator keeping it compliant — see how each role moves through rwaShift Real Estate."
          />
        </Container>
      </section>

      <section className="border-b border-surface-border bg-surface-subtle py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="For Issuers" title="Structure, Launch and Administer an Offering" />
          <AlternatingSteps steps={ISSUER_STEPS} />
        </Container>
      </section>

      <section className="border-b border-surface-border bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="For Investors" title="From Eligibility to Ownership" />
          <AlternatingSteps steps={INVESTOR_STEPS} />
        </Container>
      </section>

      <section className="border-b border-surface-border bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="For Platform Admins" title="Compliance and Oversight, Built In" />
          <AlternatingSteps steps={ADMIN_STEPS} />
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
