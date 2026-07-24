"use client";

import { useState } from "react";
import Image from "next/image";
import { PerklyLogo } from "@/components/perkly/icons";
import giftBoxPic from "../../../public/assets/Gift box.png";

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PartnerModal({ isOpen, onClose }: PartnerModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [queries, setQueries] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !queries) return;
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setName("");
    setEmail("");
    setQueries("");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 transition-all duration-300 overflow-y-auto"
      onClick={handleResetAndClose}
    >
      {/* Voucher Ticket Card */}
      <div
        className="relative w-full max-w-[920px] bg-[#121215] text-white rounded-[28px] sm:rounded-[36px] shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-white/10 overflow-hidden transition-all duration-300 my-auto"
        style={{
          WebkitMaskImage:
            "radial-gradient(circle 24px at 0% 50%, transparent 23px, black 24px), radial-gradient(circle 24px at 100% 50%, transparent 23px, black 24px)",
          WebkitMaskComposite: "source-in",
          maskImage:
            "radial-gradient(circle 24px at 0% 50%, transparent 23px, black 24px), radial-gradient(circle 24px at 100% 50%, transparent 23px, black 24px)",
          maskComposite: "intersect",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          aria-label="Close modal"
          className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all focus:outline-none"
        >
          ✕
        </button>

        {/* Modal Main Content Container */}
        <div className="flex flex-col md:flex-row items-stretch w-full min-h-[460px]">
          {/* Left Form Section (~62%) */}
          <div className="w-full md:w-[60%] lg:w-[62%] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between">
            {!isSubmitted ? (
              <>
                {/* Header with Perkly Logo */}
                <div>
                  <div className="flex items-center gap-2 text-[#9E4DFF]">
                    <PerklyLogo className="h-7 sm:h-8 w-auto text-[#9E4DFF]" />
                  </div>

                  <h2 className="mt-4 text-[30px] sm:text-[36px] font-bold tracking-tight text-white leading-tight">
                    Partner with us
                  </h2>
                </div>

                {/* Form Fields */}
                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="mb-1.5 block text-sm sm:text-base font-medium text-white/90">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-[48px] sm:h-[52px] w-full rounded-xl sm:rounded-2xl border border-white/5 bg-[#212125] px-4 text-sm sm:text-base text-white outline-none placeholder:text-white/30 focus:border-[#9E4DFF] focus:bg-[#26262b] focus:ring-1 focus:ring-[#9E4DFF] transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="mb-1.5 block text-sm sm:text-base font-medium text-white/90">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-[48px] sm:h-[52px] w-full rounded-xl sm:rounded-2xl border border-white/5 bg-[#212125] px-4 text-sm sm:text-base text-white outline-none placeholder:text-white/30 focus:border-[#9E4DFF] focus:bg-[#26262b] focus:ring-1 focus:ring-[#9E4DFF] transition-all"
                    />
                  </div>

                  {/* Queries Input */}
                  <div>
                    <label className="mb-1.5 block text-sm sm:text-base font-medium text-white/90">
                      Queries:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Tell us about your proposal or questions.........."
                      value={queries}
                      onChange={(e) => setQueries(e.target.value)}
                      className="h-[48px] sm:h-[52px] w-full rounded-xl sm:rounded-2xl border border-white/5 bg-[#212125] px-4 text-sm sm:text-base text-white outline-none placeholder:text-white/30 focus:border-[#9E4DFF] focus:bg-[#26262b] focus:ring-1 focus:ring-[#9E4DFF] transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="mt-2 h-[48px] sm:h-[52px] w-full rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold text-white shadow-lg transition-all active:scale-[0.99] hover:brightness-110 hover:shadow-[0_0_30px_rgba(158,77,255,0.4)]"
                    style={{
                      background:
                        "linear-gradient(155deg, #8c6dff 0%, #c3b4fd 50%, #8c6dff 100%)",
                    }}
                  >
                    Submit Proposal
                  </button>
                </form>
              </>
            ) : (
              <div className="my-auto py-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#9E4DFF]/20 text-[32px] text-[#c3b4fd]">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white">Proposal Sent!</h3>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-white/70">
                  Thank you, <span className="font-semibold text-white">{name}</span>. We have received your proposal and will reach out to <span className="font-semibold text-white">{email}</span> soon!
                </p>
                <button
                  onClick={handleResetAndClose}
                  className="mt-6 h-12 w-full rounded-xl bg-white/15 text-sm sm:text-base font-semibold text-white transition-all hover:bg-white/25"
                >
                  Done
                </button>
              </div>
            )}
          </div>

          {/* Center Dashed Divider Line */}
          <div className="relative flex items-center justify-center px-0 md:px-0 my-2 md:my-4">
            <div className="hidden md:block w-[1px] h-full border-r-2 border-dashed border-zinc-700/80" />
            <div className="block md:hidden w-full h-[1px] border-b-2 border-dashed border-zinc-700/80" />
          </div>

          {/* Right Section (~42% Width): Opening Gift Box Asset */}
          <div className="w-full md:w-[42%] lg:w-[44%] p-2 sm:p-4 md:p-6 flex items-center justify-center relative overflow-hidden bg-[#121215]">
            <div className="relative w-full h-full min-h-[280px] sm:min-h-[360px] md:min-h-[440px] flex items-center justify-center">
              <Image
                src={giftBoxPic}
                alt="Perkly Gift Box"
                priority
                className="w-[125%] h-[125%] max-w-none object-contain filter drop-shadow-[0_10px_35px_rgba(158,77,255,0.3)] transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


