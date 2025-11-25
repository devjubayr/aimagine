"use client";

import { LucideMessageCircleWarning, XIcon } from "lucide-react";
import { useState } from "react";

const alreadyClosed = localStorage.getItem("banner");

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible || alreadyClosed) return null;

  const handleClose = () => {
    setIsVisible(false);

    localStorage.setItem("banner", true);
  };

  return (
    <div className=" bg-blue-600 border-b-2 border-orange-600/50 shadow-lg ">
      <div className="max-w-7xl mx-auto px-4 py-1">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="flex-shrink-0">
              <div className="relative">
                <LucideMessageCircleWarning />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="inline-flex items-center gap-1.5 text-white font-bold text-sm sm:text-base">
                  Work in Progress
                </span>
                <span className="hidden sm:inline text-white/80">—</span>
                <p className="text-white/90 text-xs sm:text-sm leading-tight">
                  Application is still under development. You may encounter UI
                  issues, or unexpected behavior. But I hope you won't get any
                  of these.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-0">
            <button
              onClick={handleClose}
              className="p-1.5 hover:bg-white/20 rounded-lg transition-colors duration-200 group"
              aria-label="Close banner"
            >
              <XIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
