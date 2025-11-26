import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Logo from "./Logo";

const MobileSidebar = ({
  bottomLinks,
  topLinks,
  setIsSidebarOpen,
  isSidebarOpen,
}) => {
  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-72 bg-dark-lighter border-r border-border-dark z-50 lg:hidden transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-20 flex items-center justify-between px-6 border-b border-border-dark">
          <Link href="/" className="flex items-center gap-3">
            <Logo />
          </Link>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 hover:bg-dark rounded-lg transition-colors"
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4">
          <div className="space-y-1">
            {topLinks.map((item) => (
              <Link
                key={item.route}
                href={item.route}
                className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-text-gray hover:text-white hover:bg-dark transition-all duration-200"
                onClick={() => setIsSidebarOpen(false)}
              >
                <div className="flex items-center gap-3">
                  <item.icon />
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-1 bg-gradient-to-r from-[#004aad] to-[#5de0e6] text-white text-xs font-bold rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>

          <div className="my-6 h-px bg-border-dark"></div>

          <div className="space-y-1">
            {bottomLinks.map((item) => (
              <Link
                key={item.label}
                href={item.route}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-text-gray hover:text-white hover:bg-dark transition-all duration-200"
                onClick={() => setIsSidebarOpen(false)}
              >
                <item.icon />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
        </nav>

        <div className="p-4 border-t border-border-dark ">
          <li className="flex justify-center items-center cursor-pointer  gap-2 p-4">
            <UserButton afterSignOutUrl="/" showName />
          </li>
        </div>
      </aside>
    </>
  );
};
export default MobileSidebar;
