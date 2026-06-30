"use client";

import { useEffect, useState } from "react";
import { usePricing } from "@/components/PricingProvider";

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function useSaleCountdown() {
  const { saleEnd } = usePricing();
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setRemaining(Math.max(0, saleEnd.getTime() - Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [saleEnd]);

  if (remaining === null) return { ready: false, expired: false, label: "" };

  const expired = remaining <= 0;
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);

  return {
    ready: true,
    expired,
    label: expired
      ? "Sale ending soon — price goes back up"
      : `${pad(days)}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`,
  };
}

export function SaleCountdownLine({ className = "" }: { className?: string }) {
  const { pricing } = usePricing();
  const countdown = useSaleCountdown();

  if (!countdown.ready) return null;

  return (
    <p className={className}>
      {countdown.expired ? (
        <>Sale ending — price returns to {pricing.formattedRegular} soon.</>
      ) : (
        <>
          Launch sale ends in <span className="font-black text-amber-300">{countdown.label}</span> — then back to{" "}
          <span className="font-bold line-through">{pricing.formattedRegular}</span>
        </>
      )}
    </p>
  );
}
