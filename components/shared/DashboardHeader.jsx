import { ProductTourButton } from "@/providers/TourProvider";
import { BellPlusIcon } from "lucide-react";
import MenuIcon from "../ui/MenuIcon";

const DashboardHeader = ({ setIsSidebarOpen }) => {
  return (
    <header className="h-20 bg-dark-lighter border-b border-border-dark flex items-center justify-between lg:justify-end px-6">
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="lg:hidden p-2 hover:bg-dark rounded-lg transition-colors "
      >
        <MenuIcon />
      </button>

      <div className="flex gap-2 items-center ">
        <ProductTourButton />

        <button
          onClick={() => setIsSidebarOpen(true)}
          className=" p-2 hover:bg-dark rounded-full transition-colors notification-btn"
        >
          <BellPlusIcon />
        </button>
      </div>

      {/* <DashboardHeaderCredits /> */}
    </header>
  );
};
export default DashboardHeader;
