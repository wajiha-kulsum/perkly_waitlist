"use client";

import { useEffect, useState } from "react";

// Target for the live waitlist countdown. Starts ~527 days out to mirror the
// "527 : 01 : 25 : 45" shown in the design.
const TARGET = new Date("2028-01-02T00:00:00").getTime();

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function remaining(): Parts {
  const diff = Math.max(0, TARGET - Date.now());
  const s = Math.floor(diff / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

const pad = (n: number) => n.toString().padStart(2, "0");

function Unit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-display text-[36px] font-medium leading-[44px] tracking-[0.02em] text-black">
        {value}
      </span>
      <span className="-mt-[3px] font-display text-[20px] font-light leading-[24px] tracking-[0.02em] text-black">
        {label}
      </span>
    </div>
  );
}

function Colon() {
  return (
    <span className="font-display text-[36px] font-medium leading-[44px] text-black">
      :
    </span>
  );
}

export function Countdown() {
  // Render the design values on the server / first paint, then go live to
  // avoid a hydration mismatch.
  const [t, setT] = useState<Parts>({ days: 527, hours: 1, minutes: 25, seconds: 45 });

  useEffect(() => {
    setT(remaining());
    const id = setInterval(() => setT(remaining()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-start justify-center gap-[13px]">
      <Unit value={t.days.toString()} label="Days" />
      <Colon />
      <Unit value={pad(t.hours)} label="Hours" />
      <Colon />
      <Unit value={pad(t.minutes)} label="Minutes" />
      <Colon />
      <Unit value={pad(t.seconds)} label="Seconds" />
    </div>
  );
}
