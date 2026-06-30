"use client";

import { useSaleCountdown } from "@/components/SaleCountdown";

function TimeUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#151d1d] text-lg font-black tabular-nums text-white shadow-inner sm:h-14 sm:w-14 sm:text-xl">
        {value}
      </div>
      <span className="mt-1.5 text-[10px] font-bold uppercase tracking-wider text-[#9aa3a3] sm:text-xs">
        {label}
      </span>
    </div>
  );
}

export function SaleCountdownTimer({ className = "" }: { className?: string }) {
  const countdown = useSaleCountdown();

  if (!countdown.ready) {
    return (
      <div className={`flex gap-2 sm:gap-3 ${className}`} aria-hidden="true">
        {["Days", "Hrs", "Min", "Sec"].map((label) => (
          <TimeUnit key={label} value="--" label={label} />
        ))}
      </div>
    );
  }

  if (countdown.expired) {
    return (
      <p className={`text-sm font-bold text-amber-400 ${className}`}>
        Sale ending soon — price goes back up
      </p>
    );
  }

  const [days, hours, minutes, seconds] = countdown.label.split(" ");

  return (
    <div className={className}>
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#9aa3a3]">Launch sale ends in</p>
      <div className="flex gap-2 sm:gap-3">
        <TimeUnit value={days.replace("d", "")} label="Days" />
        <TimeUnit value={hours.replace("h", "")} label="Hrs" />
        <TimeUnit value={minutes.replace("m", "")} label="Min" />
        <TimeUnit value={seconds.replace("s", "")} label="Sec" />
      </div>
    </div>
  );
}
