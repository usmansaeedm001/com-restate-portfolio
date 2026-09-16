import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { ProductPreview } from "@/components/sections/product-preview";
import { AlternatingSteps } from "@/components/sections/alternating-steps";
import { CTASection } from "@/components/sections/cta-section";
import { Container } from "@/components/ui/container";
import { TAGLINE, CTA } from "@/content/site";
import { CUSTOMER_PROBLEMS, CUSTOMER_SEGMENTS, PRODUCT_SECTIONS, ISSUER_STEPS, INVESTOR_STEPS, ADMIN_STEPS } from "@/content/data";
import { INSIGHTS } from "@/content/data";

const FLOW = ["Real Asset", "Legal Structure / SPV", "Investor Rights", "Compliance", "Token", "Distribution", "Settlement"];

const ROLE_TEASER_STEPS = [
  { ...ISSUER_STEPS[2], number: 1, kicker: "Issuer" },
  { ...INVESTOR_STEPS[0], number: 2, kicker: "Investor" },
  { ...ADMIN_STEPS[1], number: 3, kicker: "Platform Admin" },
];

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="RWA Tokenization Infrastructure"
        title={TAGLINE}
        description="rwaShift builds the technology infrastructure that enables asset owners and investment businesses to structure real-world assets into digital investment offerings — with investor eligibility, compliance controls and on-chain ownership built in."
        primary={CTA.demo}
        secondary={CTA.howItWorks}
        visual={<ProductPreview />}
      />

      {/* Business problem */}
      <section className="border-b border-surface-border bg-surface-subtle py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="The Business Problem"
            title="Valuable Assets Shouldn't Be Limited by Traditional Infrastructure"
            description="Businesses that hold significant real-world value often operate with ownership and investor infrastructure that hasn't kept pace with what's technically possible."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CUSTOMER_PROBLEMS.map((problem) => (
              <div key={problem} className="rounded-xl border border-surface-border bg-surface p-5">
                <p className="text-[14px] font-medium leading-snug text-ink-800">{problem}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tokenization is more than a token */}
      <section className="border-b border-surface-border bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="The Real Problem"
            title="Tokenization Is More Than Issuing a Token"
            description="A smart contract can record ownership. It cannot define the legal rights behind the asset, verify the investor, or connect off-chain reality by itself — rwaShift provides the infrastructure that connects these layers."
          />
          <div className="mt-10 flex flex-wrap items-center gap-2">
            {FLOW.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-lg border border-surface-border bg-surface-subtle px-3.5 py-2 text-[13px] font-medium text-ink-800">
                  {step}
                </span>
                {i < FLOW.length - 1 && <ArrowRight className="h-4 w-4 text-ink-400" />}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Platform capabilities */}
      <section className="border-b border-surface-border bg-surface-subtle py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Platform"
            title="A Connected Platform Across the Asset Lifecycle"
            description="Every stage of the asset lifecycle — from creation to ongoing administration — runs through one connected platform."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_SECTIONS.slice(0, 6).map((s) => (
              <div key={s.title} className="rounded-xl border border-surface-border bg-surface p-5">
                <p className="text-[15px] font-semibold text-ink-900">{s.title}</p>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-600">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/product" className="inline-flex items-center gap-1.5 text-[14px] font-medium text-brand-700 hover:text-brand-900">
              Explore the full platform <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* One platform, every role */}
      <section className="border-b border-surface-border bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="One Platform, Built Around Every Role"
            description="A quick look at what the issuer, the investor and the platform admin each see inside rwaShift Real Estate."
          />
          <AlternatingSteps steps={ROLE_TEASER_STEPS} />
          <div className="mt-10">
            <Link
              href="/product#how-it-works"
              className="inline-flex items-center gap-1.5 text-[14px] font-medium text-brand-700 hover:text-brand-900"
            >
              See the full walkthrough for every role <ArrowRight className="h-4 w-4" />
            </Link>
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

      {/* Insights */}
      <section className="border-b border-surface-border bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Insights" title="From the Team" />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {INSIGHTS.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="rounded-xl border border-surface-border bg-surface-subtle p-5 transition-colors hover:border-ink-400"
              >
                <p className="text-[12px] font-medium uppercase tracking-wide text-gold-700">{post.category}</p>
                <p className="mt-2 text-[15px] font-semibold leading-snug text-ink-900">{post.title}</p>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-600">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Tokenizing a Real Estate Asset? Don't Start From Zero."
        description="Talk to the team behind the platform about your asset, your structure and what you're trying to launch."
        primary={CTA.demo}
        secondary={CTA.launchApp}
      />
    </>
  );
}
