const trustItems = [
  {
    label: "Licensed & Insured in Florida",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "500+ Homes Purchased",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    label: "Written Offer in 24 Hours",
    icon: (
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
    ),
  },
  {
    label: "Zero Fees or Commissions",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    label: "Close in as Little as 7 Days",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
];

export default function TrustBar() {
  return (
    <div className="bg-navy-deep border-b border-[rgba(196,155,42,0.15)] py-[14px] px-4 md:px-[52px] flex flex-wrap md:flex-nowrap items-center justify-center gap-3 md:gap-9 max-[600px]:grid max-[600px]:grid-cols-2 max-[600px]:text-left">
      {trustItems.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-[6px] md:gap-2 font-vietnam font-semibold text-[11px] md:text-[13px] text-white/[0.58]"
        >
          <span className="text-gold-bright shrink-0">{item.icon}</span>
          {item.label}
        </div>
      ))}
    </div>
  );
}
