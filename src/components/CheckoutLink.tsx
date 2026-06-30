"use client";

import { usePricing } from "@/components/PricingProvider";
import { trackCheckoutClick } from "@/lib/track-checkout";

type CheckoutLinkProps = React.ComponentProps<"a"> & {
  showPrice?: boolean;
  pricePrefix?: string;
};

export function CheckoutLink({
  children,
  className,
  onClick,
  showPrice = false,
  pricePrefix = " — ",
  ...props
}: CheckoutLinkProps) {
  const { pricing } = usePricing();

  const label =
    typeof children === "string" && showPrice ? (
      <>
        {children}
        {pricePrefix}
        {pricing.checkoutSale}
        <span className="font-normal opacity-80">
          {" "}
          ({pricing.isNigeria ? pricing.usd.formattedSale : pricing.ngn.formattedSale})
        </span>
      </>
    ) : (
      children
    );

  return (
    <a
      href={pricing.checkoutUrl}
      className={className}
      rel="noopener noreferrer"
      onClick={(event) => {
        trackCheckoutClick();
        onClick?.(event);
      }}
      {...props}
    >
      {label}
    </a>
  );
}
