'use client';

import * as React from "react";
import { X } from "lucide-react";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
  const handleNotifyClick = () => {
    onClose();
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl backdrop-blur-xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="flex flex-col gap-6 text-center">
          {/* Headline */}
          <h2 className="text-3xl font-extralight tracking-tight text-white sm:text-4xl">
            Our AI is currently hallucinating this feature...
          </h2>

          {/* Subtext */}
          <p className="text-base font-light leading-relaxed tracking-tight text-white/75 sm:text-lg">
            Just kidding. The engineers are building the WAM editor as we speak. We&#39;re federating the code, polishing the components, and teaching the AI not to take over the world just yet.
          </p>

          {/* CTA */}
          <button
            onClick={handleNotifyClick}
            className="mt-2 rounded-2xl border border-white/10 bg-white/10 px-6 py-3 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Get notified when the singularity hits (or we launch)
          </button>
        </div>

        {/* Decorative elements */}
        <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
      </div>
    </div>
  );
}
