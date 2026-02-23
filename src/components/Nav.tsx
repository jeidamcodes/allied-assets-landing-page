import LogoIcon from "./LogoIcon";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[999] flex items-center justify-between px-4 md:px-[52px] h-[60px] md:h-[72px] bg-[rgba(11,29,58,0.98)] backdrop-blur-[14px] border-b border-[rgba(196,155,42,0.18)]">
      {/* Logo */}
      <a
        href="/"
        className="flex items-center gap-3 no-underline shrink-0"
        aria-label="Allied Assets Home Buyers"
      >
        <LogoIcon size={28} />

        {/* Vertical gold divider */}
        <div className="w-[1.5px] h-[22px] md:h-[28px] rounded-sm bg-linear-to-b from-transparent via-gold to-transparent shrink-0" />

        {/* Wordmark */}
        <span className="font-fraunces font-black text-[16px] md:text-[20px] leading-none tracking-[0.3px] text-white whitespace-nowrap shrink-0">
          allied <em className="not-italic text-gold-bright">assets</em>
        </span>

        {/* Pill */}
        <span className="hidden md:inline-flex items-center font-vietnam font-bold text-[8px] tracking-[4px] uppercase bg-gold text-navy-deep py-1 px-[11px] rounded-[20px] whitespace-nowrap shrink-0 relative top-[1px]">
          Home Buyers
        </span>
      </a>

      {/* Right side */}
      <div className="flex items-center gap-5">
        {/* Phone */}
        <a
          href="tel:3055550100"
          className="hidden md:flex items-center gap-[7px] font-vietnam font-semibold text-sm text-white/65 no-underline transition-colors duration-200 hover:text-white"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.07 6.07l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z" />
          </svg>
          (305) 555-0100
        </a>

        {/* CTA */}
        <a
          href="#get-offer"
          className="font-vietnam font-extrabold text-[11px] md:text-[13px] tracking-[0.3px] bg-linear-to-br from-gold to-gold-bright text-navy-deep py-[9px] md:py-3 px-[14px] md:px-7 rounded-[7px] no-underline whitespace-nowrap shadow-[0_4px_16px_rgba(196,155,42,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(196,155,42,0.5)]"
        >
          Get My Cash Offer →
        </a>
      </div>
    </nav>
  );
}
