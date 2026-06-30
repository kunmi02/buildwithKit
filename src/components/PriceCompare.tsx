"use client";

import { usePricing } from "@/components/PricingProvider";

type PriceCompareProps = {
  size?: "sm" | "md" | "lg" | "xl";
  showBadge?: boolean;
  align?: "left" | "center";
};

const sizeClasses = {
  sm: { regular: "text-base sm:text-lg", sale: "text-xl sm:text-2xl" },
  md: { regular: "text-xl sm:text-2xl", sale: "text-3xl sm:text-4xl" },
  lg: { regular: "text-2xl sm:text-3xl", sale: "text-4xl sm:text-5xl md:text-6xl" },
  xl: { regular: "text-2xl sm:text-3xl", sale: "text-5xl sm:text-6xl md:text-7xl" },
};

function DualPriceLine({
  ngn,
  usd,
  className,
}: {
  ngn: string;
  usd: string;
  className: string;
}) {
  return (
    <p className={className}>
      <span>{ngn}</span>
      <span className="mx-2 text-[#9aa3a3]">·</span>
      <span>{usd}</span>
    </p>
  );
}

export function PriceCompare({ size = "lg", showBadge = false, align = "center" }: PriceCompareProps) {
  const { pricing } = usePricing();
  const classes = sizeClasses[size];

  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {showBadge ? (
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
          {pricing.discountPercent}% off — launch sale
        </p>
      ) : null}
      <div className={`flex flex-col items-center gap-1 ${align === "left" ? "sm:items-start" : ""}`}>
        <DualPriceLine
          ngn={pricing.ngn.formattedRegular}
          usd={pricing.usd.formattedRegular}
          className={`font-black text-[#9aa3a3] line-through ${classes.regular}`}
        />
        <DualPriceLine
          ngn={pricing.ngn.formattedSale}
          usd={pricing.usd.formattedSale}
          className={`font-black text-white ${classes.sale}`}
        />
        <p className="text-sm text-emerald-400">
          You save {pricing.ngn.savings} · {pricing.usd.savings}
        </p>
      </div>
    </div>
  );
}

export function SalePrice({ className = "" }: { className?: string }) {
  const { pricing } = usePricing();
  return <span className={className}>{pricing.formattedSale}</span>;
}

export function RegularPrice({ className = "" }: { className?: string }) {
  const { pricing } = usePricing();
  return <span className={className}>{pricing.formattedRegular}</span>;
}

export function CheckoutPrice({ className = "" }: { className?: string }) {
  const { pricing } = usePricing();
  return <span className={className}>{pricing.checkoutSale}</span>;
}
