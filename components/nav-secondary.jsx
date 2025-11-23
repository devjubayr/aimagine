"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavSecondary({ items, ...props }) {
  const pathname = usePathname();
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {navLinks.slice(5).map((item) => {
            const isActive = item.route === pathname;
            return (
              <li
                key={item.route}
                className={`group flex justify-center w-full whitespace-nowrap rounded-lg bg-cover transition-all hover:bg-purple-100 hover:shadow-inner p-16-semibold ${
                  isActive ? "bg-purple-gradient text-white" : "text-white/90"
                }`}
              >
                <Link
                  className="flex size-full gap-4 p-3 p-16-semibold items-center"
                  href={item.route}
                >
                  <Image
                    src={item.icon}
                    alt="logo"
                    width={24}
                    height={24}
                    className={`${isActive ? "brightness-200" : ""}`}
                  />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
