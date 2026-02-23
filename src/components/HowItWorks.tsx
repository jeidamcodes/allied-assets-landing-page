const steps = [
  {
    num: 1,
    title: "Tell Us About Your Home",
    desc: "Fill out the form above in under 60 seconds. No cleaning, no repairs, no prep needed. We buy homes in any condition, any situation, anywhere in South Florida.",
    tag: "⏱ 60 Seconds",
  },
  {
    num: 2,
    title: "Receive Your Written Offer",
    desc: "We evaluate your property and deliver a fair, written cash offer within 24 hours. No lowballing. No hidden deductions. The number we give you is the number you get at closing.",
    tag: "⏱ Within 24 Hours",
  },
  {
    num: 3,
    title: "Pick Your Closing Date",
    desc: "You're in complete control. Close in as little as 7 days or take up to 60 — whatever works for your life. Walk away with certified funds the day you choose.",
    tag: "⏱ As Fast as 7 Days",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-[52px] bg-white">
      <div className="text-center">
        <span className="font-vietnam font-bold text-[9px] md:text-[10px] tracking-[4px] md:tracking-[5px] uppercase text-gold inline-block mb-[14px]">
          Simple. Fast. Certain.
        </span>
        <h2 className="font-fraunces font-black text-[26px] md:text-[clamp(26px,4vw,44px)] leading-[1.1] tracking-[-0.3px] text-navy-deep mb-[14px]">
          Three Steps to Sold.
        </h2>
        <hr className="w-9 h-0.5 border-none rounded-sm bg-linear-to-r from-gold-dark via-gold-bright to-gold-dark mx-auto mb-9" />
        <p className="text-[15px] md:text-[17px] leading-[1.7] text-slate-brand max-w-[600px] mx-auto">
          No agents, no showings, no games. Just a clean, fast path to cash in
          your hand — on your timeline.
        </p>
      </div>

      <div className="max-w-[920px] mx-auto mt-9 md:mt-14 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 relative">
        {/* Dashed connector line (desktop only) */}
        <div className="hidden lg:block absolute top-[44px] left-[calc(16.67%+16px)] right-[calc(16.67%+16px)] h-px bg-[repeating-linear-gradient(90deg,var(--color-gold)_0,var(--color-gold)_6px,transparent_6px,transparent_14px)] pointer-events-none" />

        {steps.map((step) => (
          <div
            key={step.num}
            className="bg-ivory rounded-2xl p-7 md:p-[36px_24px_28px] border-[1.5px] border-[#EEF2F7] text-center transition-all duration-300 hover:border-[rgba(27,79,160,0.3)] hover:shadow-[0_12px_36px_rgba(27,79,160,0.1)] hover:-translate-y-1"
          >
            <div className="w-[52px] md:w-16 h-[52px] md:h-16 rounded-full mx-auto mb-5 bg-linear-[165deg] from-royal to-navy flex items-center justify-center font-fraunces font-black text-[20px] md:text-2xl text-gold-bright shadow-[0_6px_20px_rgba(27,79,160,0.35)]">
              {step.num}
            </div>
            <h3 className="font-vietnam font-extrabold text-[17px] text-navy-deep mb-[10px]">
              {step.title}
            </h3>
            <p className="text-sm text-slate-brand leading-[1.65]">
              {step.desc}
            </p>
            <span className="inline-block mt-[14px] bg-[rgba(27,79,160,0.08)] text-royal font-vietnam font-bold text-[11px] tracking-[1.5px] uppercase py-[5px] px-[14px] rounded-[20px]">
              {step.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
