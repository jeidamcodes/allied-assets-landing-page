const stats = [
  { num: "500+", label: "Homes Purchased" },
  { num: "7", label: "Days to Close" },
  { num: "$0", label: "Fees & Commissions" },
  { num: "24h", label: "Offer Turnaround" },
];

export default function StatsBand() {
  return (
    <div className="bg-linear-[160deg] from-royal to-navy py-10 md:py-[60px] px-4 md:px-[52px] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(255,255,255,0.06)_0%,transparent_65%)]" />
      <div className="max-w-[900px] mx-auto grid grid-cols-2 lg:grid-cols-4 border border-[rgba(196,155,42,0.25)] rounded-2xl overflow-hidden relative">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`py-6 md:py-9 px-3 md:px-5 text-center ${
              i < stats.length - 1
                ? "max-lg:border-b max-lg:border-[rgba(196,155,42,0.2)] lg:border-r lg:border-[rgba(196,155,42,0.2)]"
                : ""
            } ${i === 1 ? "max-lg:!border-r-0" : ""}`}
          >
            <div className="font-fraunces font-black text-[28px] md:text-[40px] text-gold-bright leading-none mb-2">
              {stat.num}
            </div>
            <div className="font-vietnam font-semibold text-[10px] md:text-[11px] tracking-[1px] md:tracking-[1.5px] uppercase text-white/[0.55]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
