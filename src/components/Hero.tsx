import LeadForm from "./LeadForm";

function CheckIcon() {
  return (
    <div className="w-5 h-5 rounded-full shrink-0 bg-linear-to-br from-royal to-royal-light flex items-center justify-center">
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
        <polyline
          points="2,6 5,9 10,3"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

const bullets = [
  "Zero commissions, zero agent fees, zero closing costs",
  "No repairs, no cleaning, no staging — sell exactly as-is",
  "Written cash offer delivered within 24 hours, no obligation",
  "Close in as little as 7 days — on your timeline",
];

export default function Hero() {
  return (
    <section className="min-h-screen bg-linear-[160deg] from-[#0B1D3A] via-[#07111F] to-[#0E2348] flex items-center justify-center px-4 md:px-[52px] pt-[88px] md:pt-[130px] pb-12 md:pb-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_55%_at_18%_65%,rgba(27,79,160,0.28)_0%,transparent_60%),radial-gradient(ellipse_45%_40%_at_82%_25%,rgba(37,99,196,0.14)_0%,transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(var(--color-gold-bright)_1px,transparent_1px),linear-gradient(90deg,var(--color-gold-bright)_1px,transparent_1px)] bg-[length:64px_64px]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold to-transparent" />

      {/* Content */}
      <div className="relative z-[2] max-w-[1120px] w-full grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-9 lg:gap-16 items-start">
        {/* Left */}
        <div className="text-center md:text-left">
          <div className="flex items-center gap-3 font-vietnam font-bold text-[9px] md:text-[10px] tracking-[3px] md:tracking-[5px] uppercase text-gold-light mb-[22px] justify-center md:justify-start animate-fade-up [animation-delay:0.1s]">
            <span className="w-6 h-[1.5px] bg-gold-light hidden md:block" />
            South Florida&apos;s Trusted Cash Home Buyers
          </div>

          <h1 className="font-fraunces font-black text-[32px] md:text-[clamp(36px,5vw,60px)] leading-[1.06] text-white tracking-[-0.5px] mb-5 animate-fade-up [animation-delay:0.22s]">
            Sell Your Home.
            <br />
            No Repairs.
            <br />
            <span className="bg-linear-to-br from-gold-light to-gold-bright bg-clip-text text-transparent">
              Cash in 7 Days.
            </span>
          </h1>

          <p className="text-[15px] md:text-[17px] leading-[1.7] text-white/[0.68] max-w-[500px] mb-[30px] mx-auto md:mx-0 animate-fade-up [animation-delay:0.32s]">
            Skip the open houses, the lowball offers, and months of uncertainty.
            Allied Assets buys your home as-is — you pick the closing date, we
            handle everything else.
          </p>

          <div className="flex flex-col gap-[10px] mb-[30px] items-center md:items-start animate-fade-up [animation-delay:0.4s]">
            {bullets.map((text) => (
              <div
                key={text}
                className="flex items-center gap-[10px] text-[13px] md:text-sm text-white/80 font-vietnam font-medium"
              >
                <CheckIcon />
                {text}
              </div>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 bg-[rgba(196,155,42,0.12)] border border-[rgba(196,155,42,0.3)] rounded-lg py-[9px] md:py-[10px] px-[13px] md:px-4 font-vietnam font-semibold text-[12px] md:text-[13px] text-gold-light animate-fade-up [animation-delay:0.48s]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Every day you wait costs you in carrying costs &amp; property taxes
          </div>
        </div>

        {/* Right — Form Card */}
        <div
          id="get-offer"
          className="bg-white rounded-[18px] p-6 md:p-[34px_30px] shadow-[0_32px_80px_rgba(0,0,0,0.45),0_0_0_1px_rgba(196,155,42,0.14)] relative animate-fade-up [animation-delay:0.28s]"
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-7 right-7 h-[3px] bg-linear-to-r from-transparent via-gold to-transparent rounded-b-[3px]" />

          <div className="mb-5">
            <h3 className="font-fraunces font-black text-[21px] text-navy-deep leading-[1.2] mb-1">
              Get Your Free Cash Offer
            </h3>
            <p className="text-[13px] text-slate-brand">
              No obligation &nbsp;·&nbsp; Takes less than 60 seconds
            </p>
          </div>

          <LeadForm />
        </div>
      </div>
    </section>
  );
}
