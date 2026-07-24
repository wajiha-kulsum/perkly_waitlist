const PHRASES = ["Subscription bring you rewards", "Win special rewards"];

function Star() {
  return (
    <span className="inline-block shrink-0 translate-y-[7px] text-[34px] font-medium leading-none text-[#FFFAFA] tracking-[-0.02em]">
      *
    </span>
  );
}

/** One seamless half of the marquee: enough segments to span the bar width. */
function Track() {
  return (
    <div className="flex shrink-0 items-center gap-[32px] pr-[32px]">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="flex items-center gap-[32px]">
          <Star />
          <span
            className={`shrink-0 whitespace-nowrap text-[22px] leading-[26px] tracking-[-0.02em] text-white ${
              i % 2 === 0 ? "font-medium" : "font-bold"
            }`}
          >
            {PHRASES[i % 2]}
          </span>
        </div>
      ))}
    </div>
  );
}

/** Bottom marquee bar — dark ground, two 70% white rules, auto-scrolling text. */
export function Marquee() {
  return (
    <div className="relative h-[60px] w-full overflow-hidden bg-[#0b150a]">
      <div className="absolute left-[34px] right-[34px] top-[8px] h-px bg-white/70 max-md:left-[16px] max-md:right-[16px]" />
      <div className="absolute left-[34px] right-[34px] top-[52px] h-px bg-white/70 max-md:left-[16px] max-md:right-[16px]" />
      <div
        className="absolute top-1/2 flex -translate-y-1/2 will-change-transform"
        style={{ animation: "perkly-marquee 24s linear infinite" }}
      >
        <Track />
        <Track />
      </div>
    </div>
  );
}
