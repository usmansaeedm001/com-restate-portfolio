import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";
import { INSIGHTS } from "@/content/data";

const STATIC_PATHS = ["/", "/product", "/technology", "/insights", "/company", "/book-demo", "/contact", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));
  const insightEntries = INSIGHTS.map((post) => ({
    url: `${SITE_URL}/insights/${post.slug}`,
    lastModified: new Date(),
  }));
  return [...staticEntries, ...insightEntries];
}
