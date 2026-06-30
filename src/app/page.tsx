import type { Metadata } from "next";
import { PricingProvider } from "@/components/PricingProvider";
import { SalesPageContent } from "@/components/sales/SalesPageContent";
import { SalesShell } from "@/components/sales/SalesShell";
import { BRAND_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${BRAND_NAME} — Start Your YouTube Channel This Week`,
  description:
    "10 complete faceless YouTube channel blueprints with AI prompts, a 30-day calendar, and bonuses — one merged PDF. Launch this week.",
};

export default function Home() {
  return (
    <SalesShell>
      <PricingProvider>
        <SalesPageContent />
      </PricingProvider>
    </SalesShell>
  );
}
