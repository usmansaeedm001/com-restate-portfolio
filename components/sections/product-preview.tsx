import { DEMO_ASSET } from "@/content/site";
import { formatCurrency } from "@/lib/utils";

export function ProductPreview() {
  return (
    <figure className="overflow-hidden rounded-2xl border border-surface-border bg-surface shadow-sm">
      <div className="flex items-center gap-2 border-b border-surface-border bg-surface-subtle px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-surface-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-surface-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-surface-border" />
        <div className="ml-3 flex-1 truncate rounded-md bg-surface px-3 py-1 text-xs text-ink-400">
          app.rwashift.com/assets/commercial-tower-i
        </div>
      </div>
      <div className="p-5" aria-hidden="true">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[15px] font-semibold text-ink-900">{DEMO_ASSET.name}</p>
            <p className="text-xs text-ink-400">{DEMO_ASSET.assetType} · {DEMO_ASSET.status}</p>
          </div>
          <span className="rounded-full border border-gold-300 bg-gold-100 px-3 py-1 text-[11px] font-medium text-gold-700">
            Sample Data
          </span>
        </div>
        <div className="mt-5 rounded-xl border border-surface-border bg-surface-subtle p-4">
          <div className="flex items-center justify-between text-xs text-ink-600">
            <span>Capital Raised</span>
            <span>{DEMO_ASSET.fundedPercent}% of {formatCurrency(DEMO_ASSET.capitalTarget)}</span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-surface-border">
            <div className="h-full rounded-full bg-brand-500" style={{ width: `${DEMO_ASSET.fundedPercent}%` }} />
          </div>
        </div>
      </div>
      <figcaption className="sr-only">
        Illustrative representation of the rwaShift Real Estate interface showing sample asset and
        offering data. Not an actual product screenshot.
      </figcaption>
    </figure>
  );
}
