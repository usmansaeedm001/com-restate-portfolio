import { Container } from "@/components/ui/container";
import { CONTACT } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with the rwaShift team for product questions, partnerships or support.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-xl">
        <p className="text-[13px] font-medium uppercase tracking-wider text-gold-700">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink-900">Get in touch</h1>
        <p className="mt-6 text-[15px] leading-relaxed text-ink-600">
          For product questions, partnerships or anything else, email us directly and we&apos;ll respond as soon
          as we can.
        </p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="mt-6 inline-block text-[16px] font-medium text-brand-700 hover:underline"
        >
          {CONTACT.email}
        </a>
      </Container>
    </section>
  );
}
