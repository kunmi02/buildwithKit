import { PricingProvider } from "@/components/PricingProvider";
import { FacelessBlueprintContent } from "@/components/FacelessBlueprintContent";

export default function FacelessBlueprintPage() {
  return (
    <PricingProvider>
      <FacelessBlueprintContent />
    </PricingProvider>
  );
}
