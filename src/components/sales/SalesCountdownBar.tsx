"use client";

import { useSaleCountdown } from "@/components/SaleCountdown";

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function SalesCountdownBar() {
  const countdown = useSaleCountdown();

  if (!countdown.ready) {
    return (
      <div className="sales-countdown-bar">
        <div className="cd-label">⚡ Launch Price Expires In:</div>
        <div className="sales-countdown-digits">
          {["Hours", "Mins", "Secs"].map((label) => (
            <div key={label} className="sales-cd-unit">
              <span className="sales-cd-num">--</span>
              <div className="sales-cd-lbl">{label}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (countdown.expired) {
    return (
      <div className="sales-countdown-bar">
        <div className="cd-label">⚡ Launch sale ending soon</div>
      </div>
    );
  }

  const days = Math.floor(
    parseInt(countdown.label.split("d")[0], 10) || 0
  );
  const hours = parseInt(countdown.label.split(" ")[1]?.replace("h", "") || "0", 10);
  const minutes = parseInt(countdown.label.split(" ")[2]?.replace("m", "") || "0", 10);
  const seconds = parseInt(countdown.label.split(" ")[3]?.replace("s", "") || "0", 10);

  const units =
    days > 0
      ? [
          { value: pad(days), label: "Days" },
          { value: pad(hours), label: "Hrs" },
          { value: pad(minutes), label: "Mins" },
          { value: pad(seconds), label: "Secs" },
        ]
      : [
          { value: pad(hours), label: "Hours" },
          { value: pad(minutes), label: "Mins" },
          { value: pad(seconds), label: "Secs" },
        ];

  return (
    <div className="sales-countdown-bar">
      <div className="cd-label">⚡ Launch Price Expires In:</div>
      <div className="sales-countdown-digits">
        {units.map((unit) => (
          <div key={unit.label} className="sales-cd-unit">
            <span className="sales-cd-num">{unit.value}</span>
            <div className="sales-cd-lbl">{unit.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
