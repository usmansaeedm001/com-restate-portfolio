import Link from "next/link";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PRIMARY_NAV, CTA } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-surface-border bg-surface/90 backdrop-blur">
      <Container className="py-3 sm:flex sm:h-16 sm:items-center sm:justify-between sm:py-0">
        {/* Mobile: logo + menu on top, both full CTAs stacked below */}
        <div className="flex flex-col gap-3 sm:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="rwaShift home">
              <Logo />
            </Link>
            <MobileNav />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button href={CTA.launchApp.href} variant="secondary" className="w-full justify-center px-3 py-2 text-[13px]">
              {CTA.launchApp.label}
            </Button>
            <Button href={CTA.demo.href} className="w-full justify-center px-3 py-2 text-[13px]">
              {CTA.demo.label}
            </Button>
          </div>
        </div>

        {/* Tablet/desktop: single row */}
        <Link href="/" aria-label="rwaShift home" className="hidden sm:block">
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
        <div className="hidden items-center gap-3 sm:flex">
          <Button href={CTA.launchApp.href} variant="secondary" className="text-[13.5px]">
            {CTA.launchApp.label}
          </Button>
          <Button href={CTA.demo.href} className="text-[13.5px]">
            {CTA.demo.label}
          </Button>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
