"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CONTACT } from "@/content/site";

const schema = z.object({
  name: z.string().min(1, "Required"),
  email: z.string().email("Enter a valid email"),
  details: z.string().max(2000).optional(),
});

type FormValues = z.infer<typeof schema>;

export function DemoForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-surface-border bg-surface p-6">
        <p className="text-[15px] font-semibold text-ink-900">Thanks — we&apos;ll be in touch.</p>
        <p className="mt-1.5 text-[13.5px] text-ink-600">
          If you don&apos;t hear back soon, reach us directly at{" "}
          <a href={`mailto:${CONTACT.salesEmail}`} className="text-brand-700 hover:underline">
            {CONTACT.salesEmail}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 rounded-xl border border-surface-border bg-surface p-6">
      <div>
        <label htmlFor="name" className="text-[13px] font-medium text-ink-800">
          Name
        </label>
        <input
          id="name"
          {...register("name")}
          className="mt-1.5 w-full rounded-lg border border-surface-border bg-surface-subtle px-3.5 py-2.5 text-[14px] text-ink-900 outline-none focus:border-brand-500"
        />
        {errors.name && <p className="mt-1 text-[12.5px] text-red-600">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email" className="text-[13px] font-medium text-ink-800">
          Work Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="mt-1.5 w-full rounded-lg border border-surface-border bg-surface-subtle px-3.5 py-2.5 text-[14px] text-ink-900 outline-none focus:border-brand-500"
        />
        {errors.email && <p className="mt-1 text-[12.5px] text-red-600">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="details" className="text-[13px] font-medium text-ink-800">
          What are you looking to build?
        </label>
        <textarea
          id="details"
          rows={4}
          {...register("details")}
          className="mt-1.5 w-full rounded-lg border border-surface-border bg-surface-subtle px-3.5 py-2.5 text-[14px] text-ink-900 outline-none focus:border-brand-500"
        />
      </div>
      {status === "error" && (
        <p className="text-[12.5px] text-red-600">Something went wrong — try again or email {CONTACT.salesEmail} directly.</p>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-1 inline-flex items-center justify-center rounded-lg bg-brand-700 px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-brand-900 disabled:opacity-60"
      >
        {isSubmitting ? "Sending…" : "Request Demo"}
      </button>
    </form>
  );
}
