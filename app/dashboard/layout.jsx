"use client";

import DashboardHeaderCredits from "@/components/shared/DashboardHeaderCredits";
import DesktopSidebar from "@/components/shared/DesktopSidebar";
import MobileSidebar from "@/components/shared/MobileSidebar";
import { navLinks } from "@/constants";
import { useState } from "react";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-dark overflow-hidden">
      <DesktopSidebar
        topLinks={navLinks.slice(0, 5)}
        bottomLinks={navLinks.slice(5)}
      />

      <MobileSidebar
        isSidebarOpen={isSidebarOpen}
        topLinks={navLinks.slice(0, 5)}
        bottomLinks={navLinks.slice(5)}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-dark-lighter border-b border-border-dark flex items-center justify-between lg:justify-end px-6">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden p-2 hover:bg-dark rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          <DashboardHeaderCredits />
        </header>

        <main className="flex-1 overflow-y-auto bg-dark">
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
