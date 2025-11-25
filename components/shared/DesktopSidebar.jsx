import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import NavLink from "./NavLink";

const DesktopSidebar = ({ topLinks, bottomLinks }) => {
  return (
    <aside className="hidden lg:flex lg:flex-col w-72 bg-dark-lighter border-r border-border-dark">
      <div className="h-20 flex items-center px-6 border-b border-border-dark">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#004aad] to-[#5de0e6] flex items-center justify-center">
            <span className="text-xl font-black text-white">A</span>
          </div>
          <div className="text-xl font-black">
            <span className="text-white">AIMAGINE</span>
          </div>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 px-4">
        <div className="space-y-1">
          {topLinks.map((item) => (
            <NavLink key={item.route} item={item} />
          ))}
        </div>

        <div className="my-6 h-px bg-border-dark"></div>

        <div className="space-y-1">
          {bottomLinks.map((item) => (
            <NavLink key={item.route} item={item} />
          ))}
        </div>
      </nav>

      <div className="p-4 border-t border-border-dark ">
        <li className="flex justify-center items-center cursor-pointer  gap-2 p-4">
          <UserButton afterSignOutUrl="/" showName />
        </li>
      </div>
    </aside>
  );
};
export default DesktopSidebar;
