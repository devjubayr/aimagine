"use client";

import { LucideMessageCircleWarning } from "lucide-react";
import { useState } from "react";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className=" bg-blue-600 border-b-2 border-orange-600/50 shadow-lg animate-gradient">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="flex-shrink-0">
              <div className="relative">
                <LucideMessageCircleWarning />
              </div>
            </div>

            {/* Message */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="inline-flex items-center gap-1.5 text-white font-bold text-sm sm:text-base">
                  Work in Progress
                </span>
                <span className="hidden sm:inline text-white/80">—</span>
                <p className="text-white/90 text-xs sm:text-sm leading-tight">
                  This site is still under development. You may experience UI
                  issues, or unexpected behavior. But I hope you won't get any
                  of these.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="p-1.5 hover:bg-white/20 rounded-lg transition-colors duration-200 group"
              aria-label="Close banner"
            >
              <svg
                className="w-5 h-5 text-white transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Progress Bar Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20 overflow-hidden">
        <div className="h-full w-1/3 bg-white/60 animate-slide-infinite"></div>
      </div>
    </div>
  );
};

export default Banner;
