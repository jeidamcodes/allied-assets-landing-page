const testimonials = [
  {
    quote:
      '"I was six weeks from losing my home to foreclosure. Allied Assets had a written cash offer in my hands in 24 hours and we closed in 10 days. The number they offered was exactly what I received at closing — no surprises."',
    initial: "M",
    name: "Maria G.",
    location: "Miami, FL — Foreclosure",
  },
  {
    quote:
      '"My inherited property needed a full gut renovation. No realtor would touch it. Allied Assets bought it as-is, gave me a fair offer the next day, and we closed in 8 days. I didn\'t move a single piece of furniture."',
    initial: "D",
    name: "David R.",
    location: "Fort Lauderdale, FL — Inherited Home",
  },
  {
    quote:
      '"Relocated for work with 3 weeks notice. Allied Assets closed in 9 days, exactly on the schedule they promised. Zero showings, zero repairs, zero stress. The process was completely transparent from start to finish."',
    initial: "S",
    name: "Sandra K.",
    location: "Boca Raton, FL — Job Relocation",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-[52px] bg-white">
      <div className="text-center">
        <span className="font-vietnam font-bold text-[9px] md:text-[10px] tracking-[4px] md:tracking-[5px] uppercase text-gold inline-block mb-[14px]">
          Real Homeowners. Real Results.
        </span>
        <h2 className="font-fraunces font-black text-[26px] md:text-[clamp(26px,4vw,44px)] leading-[1.1] tracking-[-0.3px] text-navy-deep mb-[14px]">
          Don&apos;t Take Our Word for It.
        </h2>
        <hr className="w-9 h-0.5 border-none rounded-sm bg-linear-to-r from-gold-dark via-gold-bright to-gold-dark mx-auto mb-9" />
      </div>

      <div className="max-w-[1000px] mx-auto mt-9 md:mt-14 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-ivory rounded-2xl p-[22px_18px] md:p-7 border-[1.5px] border-[#EEF2F7] shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(27,79,160,0.1)] hover:-translate-y-1 hover:border-[rgba(27,79,160,0.2)]"
          >
            <div className="text-gold text-sm tracking-[2px] mb-[14px]">
              ★★★★★
            </div>
            <blockquote className="text-[14px] md:text-[15px] leading-[1.7] text-[#475569] italic mb-5">
              {t.quote}
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-[42px] h-[42px] rounded-full shrink-0 bg-linear-to-br from-royal to-navy-deep flex items-center justify-center font-fraunces font-black text-[17px] text-gold-bright">
                {t.initial}
              </div>
              <div>
                <div className="font-vietnam font-bold text-sm text-navy-deep">
                  {t.name}
                </div>
                <div className="text-[12px] text-[#94A3B8]">{t.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
