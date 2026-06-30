"use client";

import { usePricing } from "@/components/PricingProvider";
import { useSaleCountdown } from "@/components/SaleCountdown";

export function SaleUrgencyBar() {
  const { pricing, ready } = usePricing();
  const countdown = useSaleCountdown();

  if (!ready || !countdown.ready) return null;

  return (
    <div className="border-b border-[#77b255]/30 bg-[#1a2618] px-5 py-3">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-4">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8ed36a]">
          Launch sale — {pricing.discountPercent}% off
        </p>
        <p className="text-sm text-[#d8dddd]">
          <span className="font-bold text-white line-through">{pricing.formattedRegular}</span>
          <span className="mx-2 text-[#9aa3a3]">→</span>
          <span className="font-black text-[#77b255]">{pricing.formattedSale}</span>
          <span className="mx-2 hidden text-[#9aa3a3] sm:inline">·</span>
          <span className="mt-1 block font-bold text-[#ffb347] sm:mt-0 sm:inline">
            {countdown.expired ? countdown.label : `${countdown.label} left`}
          </span>
        </p>
      </div>
    </div>
  );
}
