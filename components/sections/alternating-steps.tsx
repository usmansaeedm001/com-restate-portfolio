"use client";

import { useEffect, useState } from "react";
import { ZoomIn, X } from "lucide-react";
import type { PersonaStep } from "@/content/data";

function Connector({ fromPct, toPct }: { fromPct: number; toPct: number }) {
  return (
    <div className="hidden h-16 w-full md:block" aria-hidden="true">
      <svg viewBox="0 0 100 64" preserveAspectRatio="none" className="h-full w-full">
        <line x1={fromPct} y1="0" x2={toPct} y2="64" stroke="var(--color-surface-border)" strokeWidth="1" />
      </svg>
    </div>
  );
}

export function AlternatingSteps({ steps }: { steps: PersonaStep[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenIndex(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  return (
    <div className="relative mt-10">
      <div className="absolute left-4 top-2 bottom-2 block w-px bg-surface-border md:hidden" />
      {steps.map((step, i) => {
        const reversed = i % 2 === 1;
        const boundaryPct = reversed ? 60 : 40;
        return (
          <div key={step.number}>
            <div
              className={`relative mb-10 grid grid-cols-1 items-center gap-6 last:mb-0 md:mb-0 md:gap-12 ${
                reversed ? "md:grid-cols-[3fr_2fr] md:[&>*:first-child]:order-2" : "md:grid-cols-[2fr_3fr]"
              }`}
            >
              <div className="pl-10 md:pl-0">
                <span
                  className="absolute left-0 top-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-brand-700 bg-surface text-[13px] font-semibold text-brand-700 md:left-[var(--badge-x)] md:-translate-x-1/2"
                  style={{ ["--badge-x" as string]: `${boundaryPct}%` }}
                >
                  {step.number}
                </span>
                {step.kicker && (
                  <p className="text-[11.5px] font-medium uppercase tracking-wide text-gold-700">{step.kicker}</p>
                )}
                <p className="text-[15px] font-semibold text-ink-900">{step.title}</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-600">{step.description}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group relative aspect-[18/7] overflow-hidden rounded-xl border border-surface-border bg-surface-subtle text-left shadow-sm"
                aria-label={`View full size: ${step.image.alt}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={step.image.src} alt={step.image.alt} loading="lazy" className="h-full w-full object-cover" />
                <span className="absolute inset-0 flex items-center justify-center bg-navy/0 opacity-0 transition group-hover:bg-navy/30 group-hover:opacity-100">
                  <span className="flex items-center gap-1.5 rounded-full bg-surface px-3 py-1.5 text-[12.5px] font-medium text-ink-800 shadow-sm">
                    <ZoomIn className="h-3.5 w-3.5" /> View full size
                  </span>
                </span>
              </button>
            </div>
            {i < steps.length - 1 && (
              <Connector fromPct={boundaryPct} toPct={i % 2 === 0 ? 60 : 40} />
            )}
          </div>
        );
      })}

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/80 p-4 sm:p-8"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-surface text-ink-800 hover:bg-surface-subtle"
          >
            <X className="h-5 w-5" />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={steps[openIndex].image.src}
            alt={steps[openIndex].image.alt}
            className="max-h-full max-w-full rounded-lg object-contain shadow-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
