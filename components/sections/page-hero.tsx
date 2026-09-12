import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

type CTA = { label: string; href: string };

export function PageHero({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  note,
  visual,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primary?: CTA;
  secondary?: CTA;
  note?: { label: string; href: string };
  visual?: React.ReactNode;
}) {
  return (
    <section className="border-b border-surface-border bg-surface py-20 sm:py-28">
      <Container className={visual ? "grid grid-cols-1 items-center gap-12 lg:grid-cols-2" : ""}>
        <div>
          <p className="text-[13px] font-medium uppercase tracking-wider text-gold-700">{eyebrow}</p>
          <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-ink-600">{description}</p>
          {(primary || secondary) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primary && <Button href={primary.href}>{primary.label}</Button>}
              {secondary && (
                <Button href={secondary.href} variant="secondary">
                  {secondary.label}
                </Button>
              )}
            </div>
          )}
          {note && (
            <p className="mt-4 text-[13.5px] text-ink-400">
              or{" "}
              <Link href={note.href} className="font-medium text-brand-700 hover:text-brand-900">
                {note.label}
              </Link>{" "}
              — no sign-in needed
            </p>
          )}
        </div>
        {visual && <div>{visual}</div>}
      </Container>
    </section>
  );
}
