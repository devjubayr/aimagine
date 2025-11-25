"use client";

import { useState } from "react";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className=" bg-blue-600 border-b-2 border-orange-600/50 shadow-lg animate-gradient">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Left Side - Icon & Message */}
          <div className="flex items-center gap-3 flex-1">
            {/* Animated Warning Icon */}
            <div className="flex-shrink-0">
              <div className="relative">
                <svg
                  className="w-6 h-6 text-white animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
            </div>

            {/* Message */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="inline-flex items-center gap-1.5 text-white font-bold text-sm sm:text-base">
                  <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs font-black">
                    BETA
                  </span>
                  Work in Progress
                </span>
                <span className="hidden sm:inline text-white/80">—</span>
                <p className="text-white/90 text-xs sm:text-sm leading-tight">
                  This site is under active development. You may experience
                  incomplete features, UI issues, or unexpected behavior.
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
