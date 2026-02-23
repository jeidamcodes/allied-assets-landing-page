const situations = [
  { icon: "⚖️", label: "Facing Foreclosure" },
  { icon: "🏚️", label: "Costly Repairs Needed" },
  { icon: "🏠", label: "Inherited Property" },
  { icon: "💔", label: "Divorce / Separation" },
  { icon: "✈️", label: "Job Relocation" },
  { icon: "🔑", label: "Vacant / Abandoned" },
  { icon: "😤", label: "Problem Tenants" },
  { icon: "💸", label: "Need Cash Fast" },
  { icon: "📉", label: "Upside Down on Mortgage" },
  { icon: "🔥", label: "Fire or Storm Damage" },
  { icon: "📦", label: "Downsizing" },
  { icon: "⏳", label: "Behind on Taxes" },
];

export default function Situations() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-[52px] bg-linear-[160deg] from-navy-deep to-[#06101F] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_65%_70%_at_75%_40%,rgba(27,79,160,0.2)_0%,transparent_65%)]" />

      <div className="text-center relative z-[1]">
        <span className="font-vietnam font-bold text-[9px] md:text-[10px] tracking-[4px] md:tracking-[5px] uppercase text-gold-light inline-block mb-[14px]">
          We Buy In Every Situation
        </span>
        <h2 className="font-fraunces font-black text-[26px] md:text-[clamp(26px,4vw,44px)] leading-[1.1] tracking-[-0.3px] text-white mb-[14px]">
          Whatever Brought You Here,
          <br />
          We Have a Solution.
        </h2>
        <hr className="w-9 h-0.5 border-none rounded-sm bg-linear-to-r from-gold-dark via-gold-bright to-gold-dark mx-auto mb-9" />
        <p className="text-[15px] md:text-[17px] leading-[1.7] text-white/65 max-w-[600px] mx-auto">
          Life doesn&apos;t come with a neat timeline. Whether you&apos;re
          facing the unthinkable or simply ready to move on, Allied Assets gives
          you a dignified, fast exit — no judgment, no pressure.
        </p>
      </div>

      <div className="max-w-[1000px] mx-auto mt-9 md:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 relative">
        {situations.map((sit) => (
          <div
            key={sit.label}
            className="bg-white/[0.04] border border-[rgba(196,155,42,0.18)] rounded-xl p-4 md:p-[22px_16px] text-center transition-all duration-300 hover:bg-[rgba(27,79,160,0.18)] hover:border-[rgba(196,155,42,0.4)] hover:-translate-y-[3px]"
          >
            <span className="text-[22px] md:text-[26px] mb-[9px] block">
              {sit.icon}
            </span>
            <span className="font-vietnam font-semibold text-[12px] md:text-[13px] text-white/[0.82] leading-[1.4]">
              {sit.label}
            </span>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 relative z-[1]">
        <a
          href="#get-offer"
          className="inline-flex items-center gap-2 bg-linear-to-br from-gold to-gold-bright text-navy-deep py-[14px] md:py-4 px-7 md:px-10 rounded-lg font-vietnam font-extrabold text-sm md:text-[15px] no-underline shadow-[0_6px_20px_rgba(196,155,42,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(196,155,42,0.55)]"
        >
          Get My Free Cash Offer →
        </a>
      </div>
    </section>
  );
}
