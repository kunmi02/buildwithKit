"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  detectPricingRegion,
  enrichPricing,
  getSaleEndDate,
  type EnrichedPricing,
  type PricingRegion,
} from "@/lib/pricing";

type PricingContextValue = {
  pricing: EnrichedPricing;
  region: PricingRegion;
  saleEnd: Date;
  ready: boolean;
};

const defaultPricing = enrichPricing("intl");

export const PricingContext = createContext<PricingContextValue>({
  pricing: defaultPricing,
  region: "intl",
  saleEnd: getSaleEndDate(),
  ready: false,
});

export function PricingProvider({ children }: { children: React.ReactNode }) {
  const [region, setRegion] = useState<PricingRegion>("intl");
  const [ready, setReady] = useState(false);
  const saleEnd = useMemo(() => getSaleEndDate(), []);

  useEffect(() => {
    setRegion(detectPricingRegion());
    setReady(true);
  }, []);

  const pricing = useMemo(() => enrichPricing(region), [region]);

  return (
    <PricingContext.Provider value={{ pricing, region, saleEnd, ready }}>
      {children}
    </PricingContext.Provider>
  );
}

export function usePricing() {
  return useContext(PricingContext);
}
