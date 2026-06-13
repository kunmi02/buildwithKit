export function trackCheckoutClick() {
  if (typeof window === "undefined") return;

  window.fbq?.("track", "InitiateCheckout");
  window.ttq?.track("InitiateCheckout", {
    content_id: "faceless-blueprint",
    content_type: "product",
    value: 10,
    currency: "USD",
  });
}
