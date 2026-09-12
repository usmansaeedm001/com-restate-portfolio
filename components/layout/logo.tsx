import Image from "next/image";
import { SITE_NAME } from "@/content/site";
import { cn } from "@/lib/utils";

export function Logo({ className, hideWordmarkOnMobile }: { className?: string; hideWordmarkOnMobile?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <Image src="/logo-mark.png" alt="" width={28} height={28} className="shrink-0" priority />
      <span
        className={cn(
          "text-[17px] font-semibold tracking-tight text-ink-900",
          hideWordmarkOnMobile && "hidden sm:inline",
        )}
      >
        {SITE_NAME}
      </span>
    </span>
  );
}
