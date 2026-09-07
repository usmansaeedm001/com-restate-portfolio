import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: React.ReactNode;
};

const variants = {
  primary: "bg-brand-700 text-white hover:bg-brand-900",
  secondary: "border border-surface-border bg-surface text-ink-800 hover:border-ink-400",
  ghost: "text-ink-800 hover:text-brand-700",
};

export function Button({ href, variant = "primary", className, children }: ButtonProps) {
  const isExternal = href.startsWith("http");
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-[14px] font-medium transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
