import Link from "next/link";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PRIMARY_NAV, CTA } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-surface-border bg-surface/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" aria-label="rwaShift home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {PRIMARY_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium text-ink-600 transition-colors hover:text-ink-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button href={CTA.launchApp.href} variant="secondary" className="hidden text-[13.5px] sm:inline-flex">
            {CTA.launchApp.label}
          </Button>
          <Button href={CTA.demo.href} className="text-[13.5px]">
            {CTA.demo.label}
          </Button>
          <MobileNav />
        </div>
      </Container>
      <div className="border-t border-surface-border bg-surface-subtle/70 py-1.5 sm:hidden">
        <Container>
          <p className="text-center text-[12.5px] text-ink-500">
            <Link href={CTA.launchApp.href} className="font-medium text-brand-700 hover:text-brand-900">
              {CTA.launchApp.label}
            </Link>{" "}
            — no sign-in needed
          </p>
        </Container>
      </div>
    </header>
  );
}
