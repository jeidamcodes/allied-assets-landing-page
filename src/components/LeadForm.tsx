"use client";

import { useState } from "react";

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      property_address: formData.get("address") as string,
      first_name: formData.get("fname") as string,
      last_name: formData.get("lname") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      situation: formData.get("situation") as string,
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setIsSuccess(true);
      form.reset();
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#F0FDF4]">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#166534"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-vietnam font-bold text-[20px] text-navy">
          {"We've Received Your Information!"}
        </h3>
        <p className="font-vietnam text-[14px] text-slate-brand leading-relaxed max-w-[320px]">
          A member of our team will reach out to you shortly with your free cash
          offer. No obligation.
        </p>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-0" onSubmit={handleSubmit}>
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
          required
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
            required
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
            required
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
          required
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
          required
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

      {/* Error message */}
      {errorMessage && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-[10px_14px] mb-2 text-[12px] text-red-700 font-semibold font-vietnam">
          {errorMessage}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-[17px] mt-1 bg-linear-to-br from-royal to-royal-light text-white border-none rounded-[9px] font-vietnam font-extrabold text-[15px] cursor-pointer transition-all duration-200 shadow-[0_6px_20px_rgba(27,79,160,0.4)] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(27,79,160,0.55)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {isSubmitting ? "Submitting..." : "Get My Free Cash Offer Now →"}
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
