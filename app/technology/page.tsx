import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CTASection } from "@/components/sections/cta-section";
import { Container } from "@/components/ui/container";
import { CTA } from "@/content/site";
import { TECH_STACK, NETWORK_ENVIRONMENTS, CONTRACT_ISOLATION, SECURITY_PRINCIPLES } from "@/content/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Technology",
  description:
    "The architecture behind rwaShift Real Estate — application stack, network environments, contract isolation and security engineering principles.",
  path: "/technology",
});

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="Infrastructure Designed for Real-World Asset Operations"
        description="rwaShift Real Estate is engineered around asset-level isolation, investor compliance and operational transparency, using a modern application and blockchain stack built to production-grade engineering practices."
        primary={CTA.demo}
      />

      <section className="border-b border-surface-border bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Stack" title="Technology Stack" />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TECH_STACK.map((group) => (
              <div key={group.category} className="rounded-xl border border-surface-border bg-surface-subtle p-5">
                <p className="text-[12px] font-medium uppercase tracking-wide text-ink-400">{group.category}</p>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="font-mono text-[13.5px] text-ink-800">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-surface-border bg-surface-subtle py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Network Environments" title="Where the Platform Runs" />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {NETWORK_ENVIRONMENTS.map((env) => (
              <div key={env.environment} className="rounded-xl border border-surface-border bg-surface p-5">
                <p className="text-[15px] font-semibold text-ink-900">{env.environment}</p>
                <p className="mt-1 font-mono text-[13.5px] text-brand-700">{env.network}</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-600">{env.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-navy bg-navy py-20 sm:py-24">
        <Container>
          <p className="text-[13px] font-medium uppercase tracking-wider text-gold-300">Architecture</p>
          <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {CONTRACT_ISOLATION.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/70">
            Rather than sharing one contract across every asset, each asset is deployed through an{" "}
            {CONTRACT_ISOLATION.factory} into its own independent contract instance.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {CONTRACT_ISOLATION.perAssetState.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-center text-[12.5px] font-medium text-white/80"
              >
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-surface-border bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Security"
            title="Built With Security Boundaries in Mind"
            description="Security is treated as an architectural property of the platform, not an afterthought. These principles guide how the platform and contracts are engineered."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SECURITY_PRINCIPLES.map((p) => (
              <div key={p.title} className="rounded-xl border border-surface-border bg-surface-subtle p-5">
                <p className="text-[14.5px] font-semibold text-ink-900">{p.title}</p>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-600">{p.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Talk to Us About the Technical Details"
        description="A conversation with the team behind the platform architecture."
        primary={CTA.demo}
        secondary={CTA.launchApp}
      />
    </>
  );
}
