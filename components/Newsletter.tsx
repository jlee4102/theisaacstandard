// Instrument newsletter block. The design is explicit: the newsletter is deliberately NOT
// collecting addresses yet — copy + a disabled SIGNUPS OPENING SOON chip, no input. This keeps
// the earlier honesty fix (the old form silently discarded emails); when a real provider is
// connected, replace the chip with the form.
export default function Newsletter() {
  return (
    <aside className="not-prose my-12 border border-rule p-6 md:p-8">
      <div className="label-dim mb-2">The Standard, by email</div>
      <h3 className="text-[22px] md:text-[26px] font-bold tracking-[-0.02em]">
        One honest review at a time.
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-text-muted max-w-[60ch]">
        Short email. One review, one deal worth your attention, one piece of gear we&apos;d skip.
        No spam, unsubscribe anytime.
      </p>
      <span className="mt-5 inline-block border border-rule-strong px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-text-dim select-none">
        Signups opening soon
      </span>
    </aside>
  );
}
