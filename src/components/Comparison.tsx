import LogoIcon from "./LogoIcon";

/* ── Data ── */
const tradRows = [
  "5–6% agent commission + 2–5% in closing costs",
  "Weeks to months waiting for appraisals & buyers",
  "45–90+ day closing, tied to bank financing approval",
  "Repairs, staging & deep-cleaning required to list",
  "30%+ of deals fall through at the financing stage",
  "Offer price can shift after inspection negotiations",
  "Dozens of strangers walking through your home",
];

const alliedRows = [
  "Zero fees — we cover all closing costs",
  "Written cash offer in 24 hours, no obligation",
  "Close in 7–60 days — you choose the date",
  "Sell 100% as-is — no repairs or cleanup needed",
  "We never back out — no financing contingencies",
  "Offer price = closing price, guaranteed in writing",
  "Zero showings — one walkthrough, then we close",
];

const investorRows = [
  "Hidden fees & service charges deducted at closing",
  "Days to weeks — often a lowball with no explanation",
  "Timelines vary; high risk of last-minute cancellation",
  "Often demands repair credits or price reductions",
  "Price reductions and surprise changes common at closing",
  "Price changes and surprise deductions at the table",
  "Usually one walkthrough required",
];

const investorIcons = [
  "bad",
  "warn",
  "warn",
  "warn",
  "bad",
  "bad",
  "good",
] as const;
const tradIcons = [
  "bad",
  "bad",
  "bad",
  "bad",
  "bad",
  "warn",
  "bad",
] as const;

function CellIcon({ type }: { type: "bad" | "warn" | "good" }) {
  const color =
    type === "bad"
      ? "text-red-500"
      : type === "warn"
        ? "text-amber-400"
        : "text-royal";
  return (
    <span className={`shrink-0 text-[13px] leading-none w-4 text-center ${color}`}>
      {type === "good" ? "✔" : "—"}
    </span>
  );
}

/* ── Allied Logo for column header ── */
function AlliedColLogo() {
  return (
    <div className="flex flex-col items-center gap-[6px] mt-1">
      <div className="flex items-center gap-[9px]">
        <LogoIcon size={26} />
        <div className="w-[1.5px] h-[26px] bg-linear-to-b from-transparent via-gold to-transparent" />
        <span className="font-fraunces font-black text-[20px] text-white leading-none">
          allied <em className="not-italic text-gold-bright">assets</em>
        </span>
      </div>
      <span className="font-vietnam font-bold text-[8px] tracking-[4px] uppercase bg-gold text-navy-deep py-1 px-3 rounded-[20px]">
        Home Buyers
      </span>
    </div>
  );
}

/* ── Mobile comparison cards ── */
function MobileComparison() {
  return (
    <div className="compare-mobile flex-col gap-4 max-w-[480px] mx-auto mt-7">
      {/* Traditional */}
      <div className="rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] bg-white border-[1.5px] border-border-brand">
        <div className="p-5 pb-[14px] border-b border-[#EEF2F7] text-center">
          <span className="font-vietnam font-bold text-[9px] tracking-[4px] uppercase text-slate-brand block mb-1">
            Option 1
          </span>
          <h3 className="font-fraunces font-black text-[16px] md:text-[18px] text-navy-deep leading-[1.2]">
            Traditional Agent Sale
          </h3>
        </div>
        <ul className="list-none p-3 md:p-[12px_16px] flex flex-col">
          {tradRows.map((row, i) => (
            <li
              key={i}
              className="flex items-start gap-[9px] py-[10px] px-1 text-[13px] md:text-sm leading-[1.5] text-[#475569] border-b border-[#F1F5F9] last:border-b-0"
            >
              <CellIcon type={tradIcons[i]} />
              {row}
            </li>
          ))}
        </ul>
        <p className="text-center py-3 px-4 font-vietnam font-semibold text-[12px] text-red-500 bg-[#FFF5F5]">
          Could cost $15K–$40K+ in fees, repairs &amp; delays
        </p>
      </div>

      {/* Allied Assets */}
      <div className="rounded-2xl overflow-hidden bg-linear-[160deg] from-royal to-navy border-2 border-[rgba(34,197,94,0.5)] shadow-[0_0_28px_rgba(34,197,94,0.2),0_8px_32px_rgba(0,0,0,0.2)] relative">
        <div className="bg-linear-to-r from-[#16a34a] to-[#22c55e] text-white text-center py-[7px] px-4 font-vietnam font-extrabold text-[11px] tracking-[1px]">
          ⭐ Recommended Choice
        </div>
        <div className="p-5 pb-[14px] border-b border-white/10 text-center">
          <span className="font-vietnam font-bold text-[9px] tracking-[4px] uppercase text-white/55 block mb-1">
            Option 2
          </span>
          <div className="flex items-center gap-[9px] justify-center mt-[6px]">
            <LogoIcon size={22} />
            <div className="w-[1.5px] h-6 bg-linear-to-b from-transparent via-gold to-transparent" />
            <span className="font-fraunces font-black text-[20px] text-white leading-none">
              allied <em className="not-italic text-gold-bright">assets</em>
            </span>
          </div>
          <span className="inline-block mt-[6px] font-vietnam font-bold text-[8px] tracking-[4px] uppercase bg-gold text-navy-deep py-[3px] px-3 rounded-[20px]">
            Home Buyers
          </span>
        </div>
        <ul className="list-none p-3 md:p-[12px_16px] flex flex-col">
          {alliedRows.map((row, i) => (
            <li
              key={i}
              className="flex items-start gap-[9px] py-[10px] px-1 text-[13px] md:text-sm leading-[1.5] text-white/85 border-b border-white/[0.08] last:border-b-0"
            >
              <CellIcon type="good" />
              {row}
            </li>
          ))}
        </ul>
        <a
          href="#get-offer"
          className="block mx-4 mt-1 bg-linear-to-br from-gold to-gold-bright text-navy-deep text-center py-[14px] px-5 rounded-[9px] no-underline font-vietnam font-extrabold text-sm shadow-[0_4px_14px_rgba(196,155,42,0.4)]"
        >
          Get My Free Cash Offer →
        </a>
        <p className="text-center py-[10px] px-4 pb-4 text-[11px] text-white/45 font-vietnam">
          No obligation · Written offer · No closing-day surprises
        </p>
      </div>

      {/* Investor */}
      <div className="rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] bg-white border-[1.5px] border-border-brand">
        <div className="p-5 pb-[14px] border-b border-[#EEF2F7] text-center">
          <span className="font-vietnam font-bold text-[9px] tracking-[4px] uppercase text-slate-brand block mb-1">
            Option 3
          </span>
          <h3 className="font-fraunces font-black text-[16px] md:text-[18px] text-navy-deep leading-[1.2]">
            Random Local Investor / iBuyer
          </h3>
        </div>
        <ul className="list-none p-3 md:p-[12px_16px] flex flex-col">
          {investorRows.map((row, i) => (
            <li
              key={i}
              className="flex items-start gap-[9px] py-[10px] px-1 text-[13px] md:text-sm leading-[1.5] text-[#475569] border-b border-[#F1F5F9] last:border-b-0"
            >
              <CellIcon type={investorIcons[i]} />
              {row}
            </li>
          ))}
        </ul>
        <p className="text-center py-3 px-4 font-vietnam font-semibold text-[12px] text-red-500 bg-[#FFF5F5]">
          Risky, opaque &amp; often unreliable
        </p>
      </div>
    </div>
  );
}

/* ── Main Component ── */
export default function Comparison() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-[52px] bg-ivory">
      <div className="text-center">
        <span className="font-vietnam font-bold text-[9px] md:text-[10px] tracking-[4px] md:tracking-[5px] uppercase text-gold inline-block mb-[14px]">
          The Allied Assets Difference
        </span>
        <h2 className="font-fraunces font-black text-[26px] md:text-[clamp(26px,4vw,44px)] leading-[1.1] tracking-[-0.3px] text-navy-deep mb-[14px]">
          Three Ways to Sell.
          <br />
          One Clear Winner.
        </h2>
        <hr className="w-9 h-0.5 border-none rounded-sm bg-linear-to-r from-gold-dark via-gold-bright to-gold-dark mx-auto mb-9" />
        <p className="text-[15px] md:text-[17px] leading-[1.7] text-slate-brand max-w-[600px] mx-auto">
          Not all home buyers are created equal. See exactly what you get — and
          what you give up — with each option laid out side by side.
        </p>
      </div>

      {/* Desktop comparison grid */}
      <div className="compare-wrap max-w-[1020px] mx-auto mt-14">
        {/* Column 1: Traditional */}
        <div className="ccol trad">
          <div className="p-[28px_18px_22px] text-center bg-[#F1F5F9] border-b border-border-brand">
            <div className="font-vietnam font-bold text-[10px] tracking-[3.5px] uppercase text-slate-brand mb-[6px]">
              Option 1
            </div>
            <div className="font-fraunces font-black text-[15px] text-navy-deep mt-[6px] leading-[1.3]">
              Traditional
              <br />
              Agent Sale
            </div>
          </div>
          <div className="ccol-body">
            {tradRows.map((row, i) => (
              <div
                key={i}
                className="flex items-center gap-[10px] py-[14px] px-4 text-[13px] leading-[1.4] border-t border-[#E8EEF6] bg-[#F8FAFC] text-[#5A6B80]"
              >
                <CellIcon type={tradIcons[i]} />
                {row}
              </div>
            ))}
          </div>
          <div className="p-5 px-4 text-center flex flex-col items-center justify-center gap-2 bg-[#E8EEF6]">
            <p className="text-[12px] text-red-500 font-vietnam font-semibold leading-[1.4]">
              Could cost $15K–$40K+ in fees, repairs &amp; delays
            </p>
          </div>
        </div>

        {/* Column 2: Allied Assets */}
        <div className="ccol allied relative z-[2] scale-y-[1.018] origin-center rounded shadow-[0_0_0_2px_rgba(34,197,94,0.5),0_0_28px_6px_rgba(34,197,94,0.18),0_0_60px_12px_rgba(34,197,94,0.09),0_20px_48px_rgba(0,0,0,0.2)]">
          <div className="p-[30px_18px_24px] text-center bg-linear-[160deg] from-royal to-navy relative border-l-2 border-r-2 border-t-2 border-[rgba(34,197,94,0.35)]">
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-gold-dark via-gold-bright to-gold-dark" />
            <div className="font-vietnam font-bold text-[10px] tracking-[3.5px] uppercase text-white/55 mb-[6px]">
              Option 2 — Best Choice
            </div>
            <AlliedColLogo />
          </div>
          <div className="ccol-body">
            {alliedRows.map((row, i) => (
              <div
                key={i}
                className={`flex items-center gap-[10px] py-[14px] px-4 text-[13px] leading-[1.4] border-t border-[rgba(27,79,160,0.08)] border-l-2 border-r-2 border-l-[rgba(34,197,94,0.25)] border-r-[rgba(34,197,94,0.25)] text-navy-deep font-semibold ${
                  i % 2 === 0 ? "bg-[#F5F8FF]" : "bg-white"
                }`}
              >
                <CellIcon type="good" />
                {row}
              </div>
            ))}
          </div>
          <div className="p-5 px-4 text-center flex flex-col items-center justify-center gap-2 bg-linear-[160deg] from-royal to-navy border-l-2 border-r-2 border-b-2 border-[rgba(34,197,94,0.35)]">
            <a
              href="#get-offer"
              className="inline-block py-[13px] px-[22px] rounded-lg no-underline font-vietnam font-extrabold text-[13px] bg-linear-to-br from-gold to-gold-bright text-navy-deep shadow-[0_4px_14px_rgba(196,155,42,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(196,155,42,0.55)]"
            >
              Get My Free Offer →
            </a>
            <p className="text-[11px] text-white/50 font-vietnam mt-[6px]">
              No obligation · Written offer · No closing-day surprises
            </p>
          </div>
        </div>

        {/* Column 3: Investor */}
        <div className="ccol investor">
          <div className="p-[28px_18px_22px] text-center bg-[#F1F5F9] border-b border-border-brand">
            <div className="font-vietnam font-bold text-[10px] tracking-[3.5px] uppercase text-slate-brand mb-[6px]">
              Option 3
            </div>
            <div className="font-fraunces font-black text-[15px] text-navy-deep mt-[6px] leading-[1.3]">
              Random Local
              <br />
              Investor / iBuyer
            </div>
          </div>
          <div className="ccol-body">
            {investorRows.map((row, i) => (
              <div
                key={i}
                className="flex items-center gap-[10px] py-[14px] px-4 text-[13px] leading-[1.4] border-t border-[#E8EEF6] bg-[#F8FAFC] text-[#5A6B80]"
              >
                <CellIcon type={investorIcons[i]} />
                {row}
              </div>
            ))}
          </div>
          <div className="p-5 px-4 text-center flex flex-col items-center justify-center gap-2 bg-[#E8EEF6]">
            <p className="text-[12px] text-red-500 font-vietnam font-semibold leading-[1.4]">
              Risky, opaque &amp; often unreliable
            </p>
          </div>
        </div>
      </div>

      {/* Mobile comparison */}
      <MobileComparison />
    </section>
  );
}
