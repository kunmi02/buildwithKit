"use client";

import { CHECKOUT_URL } from "@/lib/constants";
import { trackCheckoutClick } from "@/lib/track-checkout";

type CheckoutLinkProps = React.ComponentProps<"a">;

export function CheckoutLink({ children, className, onClick, ...props }: CheckoutLinkProps) {
  return (
    <a
      href={CHECKOUT_URL}
      className={className}
      rel="noopener noreferrer"
      onClick={(event) => {
        trackCheckoutClick();
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
