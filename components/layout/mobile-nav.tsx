"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { PRIMARY_NAV, CTA } from "@/content/site";
import { Button } from "@/components/ui/button";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-800 hover:bg-surface-subtle"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-16 z-30 border-b border-surface-border bg-surface shadow-sm">
          <div className="px-6 pt-4">
            <Button
              href={CTA.launchApp.href}
              variant="secondary"
              className="w-full justify-center"
              onClick={() => setOpen(false)}
            >
              {CTA.launchApp.label}
            </Button>
            <p className="mt-1.5 text-center text-[12px] text-ink-400">No sign-in needed</p>
          </div>
          <nav className="flex flex-col gap-1 px-6 py-4">
            {PRIMARY_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink-800 hover:bg-surface-subtle"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
