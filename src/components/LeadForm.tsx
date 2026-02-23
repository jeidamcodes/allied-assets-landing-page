"use client";

export default function LeadForm() {
  return (
    <form className="flex flex-col gap-0" onSubmit={(e) => e.preventDefault()}>
      {/* Property Address */}
      <div className="mb-[11px]">
        <label className="block font-vietnam font-semibold text-[10px] tracking-[0.8px] uppercase text-slate-brand mb-[5px]">
          Property Address
        </label>
        <input
          className="lf-input"
          type="text"
          placeholder="123 Ocean Drive, Miami, FL"
          name="address"
        />
      </div>

      {/* Name Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
        <div className="mb-[11px]">
          <label className="block font-vietnam font-semibold text-[10px] tracking-[0.8px] uppercase text-slate-brand mb-[5px]">
            First Name
          </label>
          <input
            className="lf-input"
            type="text"
            placeholder="First name"
            name="fname"
          />
        </div>
        <div className="mb-[11px]">
          <label className="block font-vietnam font-semibold text-[10px] tracking-[0.8px] uppercase text-slate-brand mb-[5px]">
            Last Name
          </label>
          <input
            className="lf-input"
            type="text"
            placeholder="Last name"
            name="lname"
          />
        </div>
      </div>

      {/* Phone */}
      <div className="mb-[11px]">
        <label className="block font-vietnam font-semibold text-[10px] tracking-[0.8px] uppercase text-slate-brand mb-[5px]">
          Phone Number
        </label>
        <input
          className="lf-input"
          type="tel"
          placeholder="(305) 000-0000"
          name="phone"
        />
      </div>

      {/* Email */}
      <div className="mb-[11px]">
        <label className="block font-vietnam font-semibold text-[10px] tracking-[0.8px] uppercase text-slate-brand mb-[5px]">
          Email Address
        </label>
        <input
          className="lf-input"
          type="email"
          placeholder="you@email.com"
          name="email"
        />
      </div>

      {/* Situation */}
      <div className="mb-[11px]">
        <label className="block font-vietnam font-semibold text-[10px] tracking-[0.8px] uppercase text-slate-brand mb-[5px]">
          Your Situation
        </label>
        <select className="lf-select" name="situation">
          <option value="">Select your situation...</option>
          <option>Facing Foreclosure</option>
          <option>Inherited Property</option>
          <option>Behind on Payments</option>
          <option>Divorce / Separation</option>
          <option>Job Relocation</option>
          <option>Costly Repairs Needed</option>
          <option>Problem Tenants</option>
          <option>Vacant Property</option>
          <option>Need to Sell Fast</option>
          <option>Other</option>
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-[17px] mt-1 bg-linear-to-br from-royal to-royal-light text-white border-none rounded-[9px] font-vietnam font-extrabold text-[15px] cursor-pointer transition-all duration-200 shadow-[0_6px_20px_rgba(27,79,160,0.4)] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(27,79,160,0.55)]"
      >
        Get My Free Cash Offer Now →
      </button>

      {/* Commitment */}
      <div className="flex items-start gap-2 bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg p-[10px_14px] mt-[11px] text-[12px] text-[#166534] font-semibold font-vietnam leading-[1.45]">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="shrink-0 mt-[1px]"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        No obligation · No surprises at the closing table — the price you agreed
        on is the price you receive
      </div>

      {/* Privacy note */}
      <p className="text-center text-[11px] text-[#94A3B8] mt-[10px] leading-[1.5]">
        Your information is private and never shared with third parties.
      </p>
    </form>
  );
}
