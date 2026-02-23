import LogoIcon from "./LogoIcon";

const pillars = [
  {
    icon: "📋",
    title: "Written Offer, No Surprises",
    desc: "After you submit your information, we call you directly to walk through our cash offer over the phone — so you fully understand every number before anything is put in writing. Once we agree, that becomes your written offer and we move forward together from there.",
  },
  {
    icon: "💰",
    title: "No Surprises at the Closing Table",
    desc: "The price you agree on is the price you see at closing. We conduct our due diligence up front — so by the time you're sitting at that table, the number is settled. No last-minute deductions, no surprise credits pulled from your proceeds on closing day.",
  },
  {
    icon: "🗓️",
    title: "Your Timeline, Your Control",
    desc: "You choose the closing date — as fast as 7 days or as relaxed as 60. We work around your schedule, your needs, and your next chapter. Not the other way around.",
  },
  {
    icon: "🔍",
    title: "Full Transparency",
    desc: "No fine print. No fees buried in the closing documents. We walk you through every number before you commit to anything, so you always know exactly where you stand.",
  },
  {
    icon: "🤐",
    title: "Your Privacy is Protected",
    desc: "Your situation is private. We never share your information, your story, or your contact details with any third party — no exceptions, no excuses.",
  },
  {
    icon: "📞",
    title: "A Real Person, Always",
    desc: "You'll have a dedicated point of contact from the moment you submit your info to the moment you walk away with cash in hand. No call centers. No automated runaround.",
  },
];

export default function Promise() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-[52px] bg-linear-[160deg] from-navy-deep to-[#06101F] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_65%_at_50%_50%,rgba(196,155,42,0.07)_0%,transparent_65%)]" />

      <div className="text-center relative z-[1]">
        {/* Badge */}
        <div className="w-[72px] h-[72px] md:w-[110px] md:h-[110px] rounded-full mx-auto mb-5 md:mb-9 bg-linear-[165deg] from-royal to-navy flex items-center justify-center relative z-[1] shadow-[0_0_0_16px_rgba(27,79,160,0.15),0_12px_36px_rgba(27,79,160,0.5)]">
          <LogoIcon size={58} className="hidden md:block" />
          <LogoIcon size={32} className="md:hidden" />
        </div>

        <span className="font-vietnam font-bold text-[9px] md:text-[10px] tracking-[4px] md:tracking-[5px] uppercase text-gold-light inline-block mb-[14px]">
          The Allied Assets Commitment
        </span>
        <h2 className="font-fraunces font-black text-[26px] md:text-[clamp(26px,4vw,44px)] leading-[1.1] tracking-[-0.3px] text-white mb-[14px] mt-2">
          Our Promise to Every
          <br />
          Homeowner We Work With.
        </h2>
        <hr className="w-9 h-0.5 border-none rounded-sm bg-linear-to-r from-gold-dark via-gold-bright to-gold-dark mx-auto mb-9 mt-5" />
        <p className="text-[15px] md:text-[17px] leading-[1.7] text-white/65 max-w-[580px] mx-auto">
          We can&apos;t speak for every cash buyer out there — but we can speak
          for ourselves. These are the commitments we make to every single
          homeowner, in writing, before you sign anything.
        </p>
      </div>

      <div className="max-w-[860px] mx-auto mt-9 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[14px] md:gap-5 relative z-[1]">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="bg-white/[0.05] border border-[rgba(196,155,42,0.2)] rounded-[14px] p-[22px_16px] md:p-[28px_22px] text-center transition-all duration-300 hover:bg-[rgba(27,79,160,0.2)] hover:border-[rgba(196,155,42,0.4)] hover:-translate-y-[3px]"
          >
            <span className="text-[26px] md:text-[32px] mb-3 block">
              {p.icon}
            </span>
            <div className="font-vietnam font-extrabold text-[14px] md:text-[15px] text-white mb-2">
              {p.title}
            </div>
            <p className="text-[12px] md:text-[13px] text-white/60 leading-[1.6]">
              {p.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 relative z-[1]">
        <a
          href="#get-offer"
          className="inline-flex items-center gap-2 bg-linear-to-br from-gold to-gold-bright text-navy-deep py-[14px] md:py-4 px-7 md:px-10 rounded-lg font-vietnam font-extrabold text-sm md:text-[15px] no-underline shadow-[0_6px_20px_rgba(196,155,42,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(196,155,42,0.55)]"
        >
          Hold Us to It — Get My Offer →
        </a>
      </div>
    </section>
  );
}
