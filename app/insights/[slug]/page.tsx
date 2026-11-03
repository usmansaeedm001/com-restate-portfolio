import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { Container } from "@/components/ui/container";
import { INSIGHTS } from "@/content/data";
import { CTA, SITE_NAME, SITE_URL } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return INSIGHTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = INSIGHTS.find((p) => p.slug === slug);
  if (!post) return {};
  return pageMetadata({ title: post.title, description: post.excerpt, path: `/insights/${post.slug}` });
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = INSIGHTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    articleSection: post.category,
    author: post.author
      ? { "@type": "Person", name: post.author }
      : { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    mainEntityOfPage: `${SITE_URL}/insights/${post.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <PageHero eyebrow={post.category} title={post.title} description={post.excerpt} />
      {post.image && (
        <section className="pb-4">
          <Container className="max-w-3xl">
            <figure className="overflow-hidden rounded-2xl border border-surface-border bg-surface shadow-sm">
              <Image src={post.image.src} alt={post.image.alt} width={1440} height={560} className="h-auto w-full" />
            </figure>
          </Container>
        </section>
      )}
      <section className="py-16 sm:py-20">
        <Container className="max-w-2xl">
          <div className="flex flex-col gap-10">
            {post.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-xl font-semibold text-ink-900">{s.heading}</h2>
                <div className="mt-3 flex flex-col gap-3">
                  {s.paragraphs.map((p, i) => (
                    <p key={i} className="text-[15px] leading-relaxed text-ink-600">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        title="Tokenizing a Real Estate Asset?"
        description="Talk to the team about your asset and structure."
        primary={CTA.demo}
        secondary={CTA.launchApp}
      />
    </>
  );
}
