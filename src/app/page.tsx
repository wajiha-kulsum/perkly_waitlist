import Image from "next/image";
import { Scaler } from "@/components/perkly/scaler";
import { PurplePanel } from "@/components/perkly/purple-panel";
import { PerklyLogo, SendArrow, CalendarIcon } from "@/components/perkly/icons";
import { Countdown } from "@/components/perkly/countdown";
import { Marquee } from "@/components/perkly/marquee";
import cardsMountain from "../../public/assets/cards-mountain.png";
import avatar1 from "../../public/assets/avatar-1.png";
import avatar2 from "../../public/assets/avatar-2.png";
import avatar3 from "../../public/assets/avatar-3.png";

const NAV_LINKS = ["Membership", "Reward", "Membership", "Refer and Win"];

const AVATARS = [
  { src: avatar1, ring: "#a2f4a8", left: 0 },
  { src: avatar2, ring: "#ffb230", left: 18.91 },
  { src: avatar3, ring: "#c6b2e5", left: 38.15 },
];

export default function Home() {
  return (
    <main
      className="relative h-screen w-screen overflow-hidden bg-[#171717]"
      style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
    >
      {/* ---------- Full-bleed frame layer ---------- */}

      {/* Purple panel (fills the inset, notch cut into the top edge) */}
      <div className="absolute bottom-[30px] left-[34px] right-[34px] top-[30px] max-md:bottom-[16px] max-md:left-[16px] max-md:right-[16px] max-md:top-[16px]">
        <PurplePanel />
      </div>

      {/* Credit-card mountain range — full-bleed, anchored to the source ratio */}
      <Image
        src={cardsMountain}
        alt=""
        width={1741}
        height={1114}
        priority
        className="pointer-events-none absolute max-w-none"
        style={{ top: "59%", left: "-2%", width: "104vw", height: "auto" }}
      />

      {/* Logo */}
      <div className="absolute left-[7.85%] top-[57px] text-black">
        <PerklyLogo />
      </div>

      {/* Center nav */}
      <nav className="absolute left-1/2 top-[30px] hidden -translate-x-1/2 items-center gap-[55px] md:flex">
        {NAV_LINKS.map((label, i) => (
          <a
            key={i}
            href="#"
            className="whitespace-nowrap text-[18px] font-semibold leading-[24px] tracking-[-0.02em] text-white"
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Join waitlist pill */}
      <a
        href="#"
        className="absolute right-[4.86%] top-[56px] flex h-[54px] w-[184px] items-center justify-center gap-[6px] rounded-[27px] bg-white max-md:right-[16px] max-md:top-[16px] max-md:h-[40px] max-md:w-[130px]"
      >
        <span className="inline-block translate-y-[6px] text-[32px] font-medium leading-none tracking-[-0.02em] text-black max-md:text-[20px]">
          *
        </span>
        <span className="text-[18px] font-semibold leading-[24px] tracking-[-0.02em] text-black max-md:text-[13px] max-md:leading-[16px]">
          Join waitlist
        </span>
      </a>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 w-full">
        <Marquee />
      </div>

      {/* ---------- Contained content layer (centered, scales to fit) ---------- */}
      <div className="pointer-events-none absolute bottom-[38%] left-0 right-0 top-[100px] max-md:bottom-[10%] max-md:top-[75px]">
        <Scaler>
          <div className="pointer-events-auto flex w-[778px] flex-col items-center max-md:w-full max-md:px-5">
            {/* Headline */}
            <h1 className="whitespace-nowrap font-display text-[84px] font-bold leading-[100px] tracking-[-0.02em] text-black max-md:whitespace-normal max-md:text-[38px] max-md:leading-[44px] max-md:text-center">
              Get early access
            </h1>

            {/* Subtitle */}
            <p className="mt-[24px] text-center text-[24px] font-medium leading-[30px] tracking-[-0.02em] text-black max-md:mt-[16px] max-md:text-[14px] max-md:leading-[18px] max-md:px-[20px]">
              Buy your favorite SaaS subscriptions through Perkly and receive
              cashback on every purchase.
            </p>

            {/* Email form */}
            <form className="relative mt-[33px] h-[52px] w-[372px] max-md:mt-[20px] max-md:w-full max-md:h-[44px]">
              <input
                type="email"
                placeholder="email@gmail.com"
                aria-label="Email address"
                className="h-[52px] w-full rounded-full border-[0.5px] border-[#9c9999] bg-white pl-[16px] pr-[54px] text-[20px] leading-[24px] tracking-[0.015em] text-black outline-none placeholder:text-black/40 max-md:h-[44px] max-md:text-[16px] max-md:leading-[20px] max-md:pr-[46px]"
              />
              <button
                type="submit"
                aria-label="Join the waitlist"
                className="absolute right-[3px] top-[3px] flex h-[46px] w-[46px] items-center justify-center rounded-full text-white max-md:h-[38px] max-md:w-[38px]"
                style={{
                  background:
                    "linear-gradient(155deg, #8c6dff 0%, #c3b4fd 50%, #8c6dff 100%)",
                }}
              >
                <SendArrow />
              </button>
            </form>

            {/* Avatars + caption */}
            <div className="mt-[13px] flex items-center gap-[8px] max-md:mt-[10px]">
              <div className="relative h-[31.18px] w-[68px]">
                {AVATARS.map((a, i) => (
                  <span
                    key={i}
                    className="absolute top-0 h-[29.85px] w-[29.85px] overflow-hidden rounded-full border-2 border-black"
                    style={{ left: a.left, background: a.ring }}
                  >
                    <Image
                      src={a.src}
                      alt=""
                      width={30}
                      height={30}
                      className="h-full w-full object-cover"
                    />
                  </span>
                ))}
              </div>
              <span className="whitespace-nowrap text-[13px] font-medium leading-[16px] tracking-[0.015em] text-black/80">
                Join 500+ other on the waitlist
              </span>
            </div>

            {/* Countdown */}
            <div className="mt-[13px]">
              <Countdown />
            </div>

            {/* Left until full release */}
            <div className="mt-[38px] flex items-center gap-[8px] text-black max-md:mt-[24px]">
              <CalendarIcon />
              <span className="whitespace-nowrap text-[15px] font-semibold leading-[18px] tracking-[0.02em]">
                Left until full release
              </span>
            </div>
          </div>
        </Scaler>
      </div>
    </main>
  );
}
