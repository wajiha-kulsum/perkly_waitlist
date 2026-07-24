"use client";

import { useState } from "react";

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 transition-all duration-300"
      onClick={handleResetAndClose}
    >
      <div
        className="relative w-full max-w-[460px] max-h-[90vh] overflow-y-auto rounded-[24px] sm:rounded-[28px] border border-white/20 bg-[#161224]/90 p-5 sm:p-8 shadow-[0_0_50px_rgba(130,95,254,0.35)] backdrop-blur-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient background element */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#8c6dff]/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#c3b4fd]/20 blur-3xl" />

        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 sm:right-5 sm:top-5 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all hover:bg-white/20 hover:text-white"
        >
          ✕
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="mb-5 sm:mb-6 pr-6">
              <span className="inline-block text-[12px] sm:text-[13px] font-semibold tracking-wider text-[#c3b4fd] uppercase">
                ✦ Partnership
              </span>
              <h2 className="mt-0.5 text-[24px] sm:text-[28px] font-bold leading-tight text-white">
                Partner with us
              </h2>
              <p className="mt-1.5 text-[13px] sm:text-[14px] font-medium leading-[19px] sm:leading-[20px] text-white/70">
                Join forces with Perkly. Fill out your details below and our team will get in touch.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 sm:gap-4">
              <div>
                <label className="mb-1 block text-[12px] sm:text-[13px] font-semibold text-white/90">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-[44px] sm:h-[48px] w-full rounded-xl sm:rounded-2xl border border-white/15 bg-white/10 px-3.5 sm:px-4 text-[14px] sm:text-[15px] text-white outline-none placeholder:text-white/40 focus:border-[#a282fe] focus:bg-white/15 focus:ring-1 focus:ring-[#a282fe] transition-all"
                />
              </div>

              <div>
                <label className="mb-1 block text-[12px] sm:text-[13px] font-semibold text-white/90">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-[44px] sm:h-[48px] w-full rounded-xl sm:rounded-2xl border border-white/15 bg-white/10 px-3.5 sm:px-4 text-[14px] sm:text-[15px] text-white outline-none placeholder:text-white/40 focus:border-[#a282fe] focus:bg-white/15 focus:ring-1 focus:ring-[#a282fe] transition-all"
                />
              </div>

              <div>
                <label className="mb-1 block text-[12px] sm:text-[13px] font-semibold text-white/90">
                  Queries
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell us about your proposal or questions..."
                  value={queries}
                  onChange={(e) => setQueries(e.target.value)}
                  className="w-full rounded-xl sm:rounded-2xl border border-white/15 bg-white/10 p-3.5 sm:p-4 text-[14px] sm:text-[15px] text-white outline-none placeholder:text-white/40 focus:border-[#a282fe] focus:bg-white/15 focus:ring-1 focus:ring-[#a282fe] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-1 sm:mt-2 h-[46px] sm:h-[50px] w-full rounded-xl sm:rounded-2xl text-[15px] sm:text-[16px] font-semibold text-white shadow-lg transition-all active:scale-[0.99] hover:shadow-[0_0_25px_rgba(140,109,255,0.5)]"
                style={{
                  background:
                    "linear-gradient(155deg, #8c6dff 0%, #c3b4fd 50%, #8c6dff 100%)",
                }}
              >
                Submit Partnership Request
              </button>
            </form>
          </>
        ) : (
          <div className="py-6 sm:py-8 text-center">
            <div className="mx-auto mb-3 sm:mb-4 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#8c6dff]/20 text-[28px] sm:text-[32px] text-[#c3b4fd]">
              ✓
            </div>
            <h3 className="text-[22px] sm:text-[24px] font-bold text-white">Request Received!</h3>
            <p className="mt-2 text-[13px] sm:text-[14px] leading-[19px] sm:leading-[20px] text-white/70">
              Thank you, <span className="font-semibold text-white">{name}</span>. We have received your query and will contact you at <span className="font-semibold text-white">{email}</span> soon.
            </p>
            <button
              onClick={handleResetAndClose}
              className="mt-5 sm:mt-6 h-[44px] sm:h-[46px] w-full rounded-xl sm:rounded-2xl bg-white/15 text-[14px] sm:text-[15px] font-semibold text-white transition-all hover:bg-white/25"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
