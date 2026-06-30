"use client";

import { usePricing } from "@/components/PricingProvider";
import { useSaleCountdown } from "@/components/SaleCountdown";

export function SaleUrgencyBar() {
  const { pricing, ready } = usePricing();
  const countdown = useSaleCountdown();

  if (!ready || !countdown.ready) return null;

  return (
    <div className="border-b border-emerald-500/20 bg-gradient-to-r from-[#0d1612] via-[#0f1515] to-[#0d1612] px-5 py-3">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-4">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
          Launch sale — {pricing.discountPercent}% off
        </p>
        <p className="text-sm text-[#d0d6d6]">
          <span className="font-bold text-white line-through">{pricing.formattedRegular}</span>
          <span className="mx-2 text-[#8a9494]">→</span>
          <span className="font-black text-emerald-400">{pricing.formattedSale}</span>
          <span className="mx-2 hidden text-[#8a9494] sm:inline">·</span>
          <span className="mt-1 block font-bold text-amber-300 sm:mt-0 sm:inline">
            {countdown.expired ? countdown.label : `${countdown.label} left`}
          </span>
        </p>
      </div>
    </div>
  );
}
