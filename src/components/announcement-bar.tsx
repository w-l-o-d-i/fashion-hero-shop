"use client";

import { useEffect, useState } from "react";

const SALE_END = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);

function getTimeLeft() {
  const diff = Math.max(0, SALE_END.getTime() - Date.now());
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return diff === 0 ? null : `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function AnnouncementBar() {
  const [timeLeft, setTimeLeft] = useState<string | null>(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-charcoal text-white text-center" style={{ height: "36px", lineHeight: "36px" }}>
      <p className="text-[11px] font-medium tracking-wide">
        {timeLeft ? (
          <>🔥 Summer Sale — Ends in <span className="font-mono">{timeLeft}</span> — Free Shipping over 299 zł</>
        ) : (
          "Free Shipping on Orders over 299 zł — Easy Returns."
        )}
      </p>
    </div>
  );
}
