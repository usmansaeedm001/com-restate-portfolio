export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <p className="text-[13px] font-medium uppercase tracking-wider text-gold-700">{eyebrow}</p>}
      <h2 className={`text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl ${eyebrow ? "mt-3" : ""}`}>
        {title}
      </h2>
      {description && <p className="mt-4 text-[15px] leading-relaxed text-ink-600">{description}</p>}
    </div>
  );
}
