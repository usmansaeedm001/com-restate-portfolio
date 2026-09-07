import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { CONTACT, COMPLIANCE } from "@/content/site";

export const metadata: Metadata = { title: "Terms of Service", description: "The terms governing use of the rwaShift website." };

export default function TermsPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-2xl">
        <p className="text-[13px] font-medium uppercase tracking-wider text-gold-700">Legal</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900">Terms of Service</h1>
        <p className="mt-4 text-[13px] text-ink-400">Last updated: to be confirmed prior to launch.</p>

        <div className="mt-10 flex flex-col gap-8 text-[15px] leading-relaxed text-ink-700">
          <div>
            <h2 className="text-lg font-semibold text-ink-900">Informational Purpose</h2>
            <p className="mt-2">{COMPLIANCE.footerDisclaimer}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ink-900">No Investment Offer</h2>
            <p className="mt-2">
              Any figures, asset examples or product demonstrations shown on this website — including
              illustrative asset values, offering amounts and unit economics — are for demonstration
              purposes only and do not constitute an offer to sell or a solicitation of an offer to buy
              any security or investment.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ink-900">No Legal or Financial Advice</h2>
            <p className="mt-2">{COMPLIANCE.legalDisclaimer}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ink-900">Liquidity</h2>
            <p className="mt-2">{COMPLIANCE.liquidityDisclaimer}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ink-900">Contact</h2>
            <p className="mt-2">
              Questions about these terms can be sent to{" "}
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
