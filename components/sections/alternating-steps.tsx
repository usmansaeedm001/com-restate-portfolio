import type { PersonaStep } from "@/content/data";

export function AlternatingSteps({ steps }: { steps: PersonaStep[] }) {
  return (
    <div className="relative mt-10 flex flex-col gap-12 md:gap-16">
      <div className="absolute left-4 top-2 bottom-2 hidden w-px bg-surface-border md:left-1/2 md:block md:-translate-x-1/2" />
      {steps.map((step, i) => {
        const reversed = i % 2 === 1;
        return (
          <div
            key={step.number}
            className={`relative grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-12 ${
              reversed ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="pl-10 md:pl-0">
              <span className="absolute left-0 top-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-brand-700 bg-surface text-[13px] font-semibold text-brand-700 md:left-1/2 md:-translate-x-1/2">
                {step.number}
              </span>
              {step.kicker && (
                <p className="text-[11.5px] font-medium uppercase tracking-wide text-gold-700">{step.kicker}</p>
              )}
              <p className="text-[15px] font-semibold text-ink-900">{step.title}</p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-600">{step.description}</p>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-xl border border-surface-border bg-surface-subtle shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={step.image.src} alt={step.image.alt} loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
