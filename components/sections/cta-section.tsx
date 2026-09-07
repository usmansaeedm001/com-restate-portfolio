import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

type CTA = { label: string; href: string };

export function CTASection({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description?: string;
  primary: CTA;
  secondary?: CTA;
}) {
  return (
    <section className="bg-navy py-20 sm:py-24">
      <Container className="flex flex-col items-center text-center">
        <h2 className="max-w-xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
        {description && <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/70">{description}</p>}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={primary.href}>{primary.label}</Button>
          {secondary && (
            <Button href={secondary.href} variant="secondary" className="border-white/20 bg-transparent text-white hover:border-white/40">
              {secondary.label}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
