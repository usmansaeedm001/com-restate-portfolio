import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { INSIGHTS } from "@/content/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Insights",
  description: "Notes on real estate tokenization, legal structuring and blockchain infrastructure from the rwaShift team.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="What Tokenizing Real Estate Actually Takes"
        description="Notes on legal structuring, investor eligibility and blockchain infrastructure from the team building rwaShift."
      />
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {INSIGHTS.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="rounded-xl border border-surface-border bg-surface p-6 transition-colors hover:border-ink-400"
              >
                <p className="text-[12px] font-medium uppercase tracking-wide text-gold-700">{post.category}</p>
                <p className="mt-2 text-[16px] font-semibold leading-snug text-ink-900">{post.title}</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-600">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
