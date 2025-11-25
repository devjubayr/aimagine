"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item, ...props }) => {
  const pathname = usePathname();
  const isActive = pathname === item.route;
  return (
    <Link
      key={item.label}
      href={item.route}
      className={`flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-text-gray  transition-all duration-200 group ${
        isActive ? "bg-dark text-white" : "hover:text-white hover:bg-dark"
      }`}
      {...props}
    >
      <div className="flex items-center gap-3">
        <span className="group-hover:scale-110 transition-transform">
          <item.icon />
        </span>
        <span className="font-medium">{item.label}</span>
      </div>
      {item.badge && (
        <span className="px-2 py-1 bg-gradient-to-r from-[#004aad] to-[#5de0e6] text-white text-xs font-bold rounded-full">
          {item.badge}
        </span>
      )}
    </Link>
  );
};
export default NavLink;
