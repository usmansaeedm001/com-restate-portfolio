import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";
import { INSIGHTS } from "@/content/data";

const STATIC_PATHS = ["/", "/product", "/technology", "/insights", "/company", "/book-demo", "/contact", "/privacy", "/terms"];

// lastModified is only set when a real date is known; a request-time date would tell crawlers every page changed on every visit.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
  }));
  const insightEntries = INSIGHTS.map((post) => {
    const lastModified = post.updatedAt ?? post.publishedAt;
    return {
      url: `${SITE_URL}/insights/${post.slug}`,
      ...(lastModified && { lastModified: new Date(lastModified) }),
    };
  });
  return [...staticEntries, ...insightEntries];
}
