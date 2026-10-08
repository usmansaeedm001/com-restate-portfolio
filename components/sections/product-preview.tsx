export function ProductPreview() {
  return (
    <figure className="overflow-hidden rounded-2xl border border-surface-border bg-surface shadow-sm">
      <video
        className="block aspect-video w-full bg-surface-subtle"
        src="/videos/rwashift-demo.mp4"
        poster="/videos/rwashift-demo-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="rwaShift platform demo video"
      />
      <figcaption className="sr-only">
        Demo video of the rwaShift platform, showing how real-world assets are structured,
        offered and administered.
      </figcaption>
    </figure>
  );
}
