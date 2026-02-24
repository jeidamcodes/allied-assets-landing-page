import LeadForm from "./LeadForm";

export default function FinalCTA() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-[52px] bg-ivory text-center">
      <span className="font-vietnam font-bold text-[9px] md:text-[10px] tracking-[4px] md:tracking-[5px] uppercase text-gold inline-block mb-[14px]">
        Ready to Move Forward?
      </span>
      <h2 className="font-fraunces font-black text-[26px] md:text-[clamp(26px,4vw,44px)] leading-[1.1] tracking-[-0.3px] text-navy-deep mb-[14px]">
        Stop Waiting. Start Closing.
      </h2>
      <hr className="w-9 h-0.5 border-none rounded-sm bg-linear-to-r from-gold-dark via-gold-bright to-gold-dark mx-auto mb-9" />
      <p className="text-[15px] md:text-[17px] leading-[1.7] text-slate-brand max-w-[600px] mx-auto">
        Every day you wait costs you in carrying costs, property taxes, and the
        mental weight of uncertainty. You deserve a clean exit. Let Allied Assets
        make it happen — today.
      </p>

      {/* Form Card */}
      <div className="max-w-[560px] mx-auto mt-8 md:mt-12 bg-white rounded-[18px] p-6 md:p-[38px_34px] shadow-[0_8px_40px_rgba(0,0,0,0.09)] border-[1.5px] border-[rgba(27,79,160,0.1)] relative">
        {/* Top accent line */}
        <div className="absolute top-0 left-[34px] right-[34px] h-[3px] bg-linear-to-r from-transparent via-royal-light to-transparent rounded-b-[3px]" />

        <h3 className="font-fraunces font-black text-[18px] md:text-[22px] text-navy-deep mb-[5px]">
          Get Your Cash Offer Today
        </h3>
        <p className="text-[13px] text-slate-brand mb-[22px]">
          No obligation &nbsp;·&nbsp; Written offer in 24 hours &nbsp;·&nbsp;
          Close in 7 days
        </p>

        <LeadForm />

        <p className="mt-[18px] text-sm text-slate-brand text-center">
          Prefer to talk? Call us directly:{" "}
          <a
            href="tel:3056100310"
            className="text-navy-deep font-vietnam font-bold no-underline"
          >
            (305) 610-0310
          </a>
        </p>
      </div>
    </section>
  );
}
