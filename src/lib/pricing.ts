export type PricingRegion = "ng" | "intl";

export type PricingTier = {
  region: PricingRegion;
  currency: "NGN" | "USD";
  sale: number;
  regular: number;
  checkoutUrl: string;
};

const DEFAULT_CHECKOUT =
  process.env.NEXT_PUBLIC_CHECKOUT_URL || "https://selar.com/64z7171o14";

export const PRICING_BY_REGION: Record<PricingRegion, PricingTier> = {
  ng: {
    region: "ng",
    currency: "NGN",
    sale: Number(process.env.NEXT_PUBLIC_SALE_PRICE_NGN) || 5000,
    regular: Number(process.env.NEXT_PUBLIC_REGULAR_PRICE_NGN) || 15000,
    checkoutUrl: process.env.NEXT_PUBLIC_CHECKOUT_URL_NG || DEFAULT_CHECKOUT,
  },
  intl: {
    region: "intl",
    currency: "USD",
    sale: Number(process.env.NEXT_PUBLIC_SALE_PRICE_USD) || 3.99,
    regular: Number(process.env.NEXT_PUBLIC_REGULAR_PRICE_USD) || 10,
    checkoutUrl: process.env.NEXT_PUBLIC_CHECKOUT_URL_INTL || DEFAULT_CHECKOUT,
  },
};

/** ISO date string — sale countdown target. Defaults to 7 days from build if unset. */
export function getSaleEndDate(): Date {
  const configured = process.env.NEXT_PUBLIC_SALE_END;
  if (configured) {
    const parsed = new Date(configured);
    if (!Number.isNaN(parsed.getTime())) return parsed;
  }
  const fallback = new Date();
  fallback.setDate(fallback.getDate() + 7);
  fallback.setHours(23, 59, 59, 999);
  return fallback;
}

export function detectPricingRegion(): PricingRegion {
  const forced = process.env.NEXT_PUBLIC_FORCE_REGION;
  if (forced === "ng" || forced === "intl") return forced;

  if (typeof window === "undefined") return "intl";

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (timezone === "Africa/Lagos") return "ng";

  const languages = [...window.navigator.languages, window.navigator.language]
    .filter(Boolean)
    .map((lang) => lang.toLowerCase());

  if (languages.some((lang) => lang === "en-ng" || lang.endsWith("-ng"))) return "ng";

  return "intl";
}

export function formatMoney(amount: number, currency: "NGN" | "USD"): string {
  if (currency === "NGN") {
    return `₦${amount.toLocaleString("en-NG")}`;
  }
  const hasCents = !Number.isInteger(amount);
  return `$${amount.toLocaleString("en-US", {
    minimumFractionDigits: hasCents ? 2 : 0,
    maximumFractionDigits: 2,
  })}`;
}

export function getDiscountPercent(regular: number, sale: number): number {
  if (regular <= 0) return 0;
  return Math.round(((regular - sale) / regular) * 100);
}

function buildCurrencyBlock(tier: PricingTier) {
  return {
    sale: tier.sale,
    regular: tier.regular,
    formattedSale: formatMoney(tier.sale, tier.currency),
    formattedRegular: formatMoney(tier.regular, tier.currency),
    savings: formatMoney(tier.regular - tier.sale, tier.currency),
    discountPercent: getDiscountPercent(tier.regular, tier.sale),
  };
}

/** Join NGN + USD for display, e.g. "₦5,000 · $3.99" */
export function formatDualPrice(ngn: string, usd: string): string {
  return `${ngn} · ${usd}`;
}

export function enrichPricing(region: PricingRegion = "intl") {
  const ng = PRICING_BY_REGION.ng;
  const usdTier = PRICING_BY_REGION.intl;
  const checkoutTier = region === "ng" ? ng : usdTier;

  const ngn = buildCurrencyBlock(ng);
  const usd = buildCurrencyBlock(usdTier);

  const formattedSale = formatDualPrice(ngn.formattedSale, usd.formattedSale);
  const formattedRegular = formatDualPrice(ngn.formattedRegular, usd.formattedRegular);
  const savings = formatDualPrice(ngn.savings, usd.savings);

  return {
    region,
    checkoutUrl: checkoutTier.checkoutUrl,
    isNigeria: region === "ng",
    discountPercent: Math.max(ngn.discountPercent, usd.discountPercent),
    ngn,
    usd,
    formattedSale,
    formattedRegular,
    savings,
    /** Primary currency for checkout (region-specific) */
    checkoutSale: region === "ng" ? ngn.formattedSale : usd.formattedSale,
  };
}

export type EnrichedPricing = ReturnType<typeof enrichPricing>;
