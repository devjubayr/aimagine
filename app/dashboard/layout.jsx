"use client";

import DashboardHeader from "@/components/shared/DashboardHeader";
import DesktopSidebar from "@/components/shared/DesktopSidebar";
import MobileSidebar from "@/components/shared/MobileSidebar";
import { navLinks } from "@/constants";
import ProductTourProvider from "@/providers/TourProvider";
import { useState } from "react";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <ProductTourProvider>
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
          <DashboardHeader setIsSidebarOpen={setIsSidebarOpen} />
          <main className="flex-1 overflow-y-auto bg-dark">
            <div className="p-6">{children}</div>
          </main>
        </div>
      </div>
    </ProductTourProvider>
  );
};

export default DashboardLayout;
