import { ShieldCheck, ClipboardCheck, Layers, Lock } from "lucide-react";
import { Container } from "@/components/ui/container";

const BADGES = [
  { icon: ShieldCheck, label: "Investor Eligibility Controls" },
  { icon: Layers, label: "Independent Asset Contract Isolation" },
  { icon: ClipboardCheck, label: "Audit Trails" },
  { icon: Lock, label: "Role-Based Access Control" },
];

export function TrustBadges() {
  return (
    <div className="border-b border-surface-border bg-surface py-5">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {BADGES.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-[13px] font-medium text-ink-600">
              <Icon className="h-4 w-4 text-brand-700" />
              {label}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
