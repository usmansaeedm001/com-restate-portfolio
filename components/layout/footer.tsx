import Link from "next/link";
import { Logo } from "./logo";
import { Container } from "@/components/ui/container";
import { FOOTER_NAV, COMPLIANCE, CONTACT } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-surface-border bg-surface">
      <Container className="py-14">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 flex flex-col gap-3 sm:col-span-1">
            <Logo />
            <p className="text-[13px] leading-relaxed text-ink-400">RWA tokenization infrastructure.</p>
            <a href={`mailto:${CONTACT.email}`} className="text-[13px] text-ink-600 hover:text-ink-900">
              {CONTACT.email}
            </a>
          </div>
          {FOOTER_NAV.map((group) => (
            <div key={group.title} className="flex flex-col gap-2.5">
              <p className="text-[12px] font-medium uppercase tracking-wide text-ink-400">{group.title}</p>
              {group.items.map((item) => (
                <Link key={item.href} href={item.href} className="text-[13.5px] text-ink-600 hover:text-ink-900">
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-surface-border pt-6">
          <p className="text-[12px] leading-relaxed text-ink-400">{COMPLIANCE.footerDisclaimer}</p>
          <p className="text-[12px] text-ink-400">© {new Date().getFullYear()} rwaShift. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
