import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { CONTACT } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How rwaShift collects, uses and protects information submitted through this website.",
};

export default function PrivacyPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-2xl">
        <p className="text-[13px] font-medium uppercase tracking-wider text-gold-700">Legal</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900">Privacy Policy</h1>
        <p className="mt-4 text-[13px] text-ink-400">Last updated: to be confirmed prior to launch.</p>

        <div className="mt-10 flex flex-col gap-8 text-[15px] leading-relaxed text-ink-700">
          <div>
            <h2 className="text-lg font-semibold text-ink-900">Information We Collect</h2>
            <p className="mt-2">
              When you submit a form on this website — including a demo request or contact inquiry — we
              collect the information you provide, such as your name, business email and details about
              your asset or inquiry.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ink-900">How We Use Information</h2>
            <p className="mt-2">
              Information submitted through this website is used to respond to your inquiry, evaluate
              potential fit for rwaShift&apos;s technology and services, and follow up by email. We do not
              sell personal information.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ink-900">Data Retention</h2>
            <p className="mt-2">
              We retain submitted information for as long as reasonably necessary to respond to your
              inquiry and maintain business records, consistent with applicable law.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ink-900">Contact</h2>
            <p className="mt-2">
              Questions about this policy can be sent to{" "}
              <a href={`mailto:${CONTACT.email}`} className="text-brand-700 hover:underline">
                {CONTACT.email}
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
