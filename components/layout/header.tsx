import Link from "next/link";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PRIMARY_NAV, CTA } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-surface-border bg-surface/90 backdrop-blur">
      <Container className="relative flex h-16 items-center justify-between">
        <Link href="/" aria-label="rwaShift home">
          <Logo hideWordmarkOnMobile />
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
        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            href={CTA.launchApp.href}
            variant="secondary"
            className="px-3 py-2 text-[13px] sm:px-5 sm:py-2.5 sm:text-[13.5px]"
          >
            <span className="sm:hidden">Explore</span>
            <span className="hidden sm:inline">{CTA.launchApp.label}</span>
          </Button>
          <Button href={CTA.demo.href} className="px-3 py-2 text-[13px] sm:px-5 sm:py-2.5 sm:text-[13.5px]">
            {CTA.demo.label}
          </Button>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
