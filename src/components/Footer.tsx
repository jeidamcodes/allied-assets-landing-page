export default function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-[rgba(196,155,42,0.15)] py-5 md:py-7 px-4 md:px-[52px]">
      <div className="max-w-[1120px] mx-auto flex flex-col gap-4">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3 no-underline"
            aria-label="Allied Assets"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 72 72"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 38 L36 8 L68 38"
                stroke="#fff"
                strokeWidth="4.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="28"
                y="38"
                width="16"
                height="22"
                rx="8"
                stroke="rgba(255,255,255,0.55)"
                strokeWidth="2.8"
                fill="none"
              />
              <circle cx="36" cy="47" r="3.2" fill="#D4AD3C" />
              <line
                x1="36"
                y1="50.2"
                x2="36"
                y2="56"
                stroke="#D4AD3C"
                strokeWidth="2.8"
                strokeLinecap="round"
              />
            </svg>

            <div className="w-[1.5px] h-[30px] bg-linear-to-b from-transparent via-gold to-transparent" />

            <div className="flex flex-col gap-1">
              <span className="font-fraunces font-black text-[15px] md:text-[17px] text-white tracking-[0.3px]">
                allied{" "}
                <em className="not-italic text-gold-bright">assets</em>
              </span>
              <span className="font-vietnam font-bold text-[7px] tracking-[3.5px] uppercase bg-gold text-navy-deep py-[3px] px-[9px] rounded-[20px] inline-block w-fit">
                Home Buyers
              </span>
            </div>
          </a>

          {/* Links */}
          <div className="flex flex-wrap gap-3 md:gap-6">
            <a
              href="#"
              className="text-[12px] text-white/[0.38] no-underline transition-colors duration-200 hover:text-white/70"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[12px] text-white/[0.38] no-underline transition-colors duration-200 hover:text-white/70"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-[12px] text-white/[0.38] no-underline transition-colors duration-200 hover:text-white/70"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-[10px] md:text-[11px] text-white/25 leading-[1.6] border-t border-white/[0.06] pt-4">
          © 2026 Allied Assets LLC. All rights reserved. Allied Assets is a
          direct cash home buyer and is not affiliated with any real estate
          brokerage or MLS. We operate throughout Miami-Dade, Broward, and Palm
          Beach counties. Results vary by property and market conditions. All
          offers are subject to property inspection and due diligence.
        </p>
      </div>
    </footer>
  );
}
