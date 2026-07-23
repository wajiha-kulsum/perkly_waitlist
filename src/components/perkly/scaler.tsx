"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scales its (fixed, natural-size) content to fit the available area of its
 * parent — never larger than 1:1, always centered. Keeps the hero type and
 * circles perfectly proportioned (no distortion) while fitting any viewport.
 */
export function Scaler({ children }: { children: React.ReactNode }) {
  const areaRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const area = areaRef.current;
    const content = contentRef.current;
    if (!area || !content) return;

    const fit = () => {
      const w = content.offsetWidth;
      const h = content.offsetHeight;
      if (!w || !h) return;
      setScale(Math.min(1, area.clientWidth / w, area.clientHeight / h));
    };

    const ro = new ResizeObserver(fit);
    ro.observe(area);
    fit();
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={areaRef} className="flex h-full w-full items-center justify-center">
      <div style={{ transform: `scale(${scale})`, transformOrigin: "center" }}>
        <div ref={contentRef}>{children}</div>
      </div>
    </div>
  );
}
