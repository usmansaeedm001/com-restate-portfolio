import { Container } from "@/components/ui/container";
import { DemoForm } from "@/components/forms/demo-form";
import { COMPLIANCE } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Book a Demo",
  description: "Talk to the rwaShift team about your asset, your structure and what you're trying to launch.",
  path: "/book-demo",
});

export default function BookDemoPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
        <div>
          <p className="text-[13px] font-medium uppercase tracking-wider text-gold-700">Book a Demo</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink-900">Let&apos;s talk about what you&apos;re building</h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-600">
            Tell us about your asset and what you need — a full platform, a specific module, or an
            integration into something you&apos;re already running. We&apos;ll follow up to set up a walkthrough.
          </p>
          <p className="mt-6 max-w-md text-[12px] leading-relaxed text-ink-400">{COMPLIANCE.demoLabel}</p>
        </div>
        <DemoForm />
      </Container>
    </section>
  );
}
